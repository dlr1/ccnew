import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
    from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { LoaderService } from "./loader.service";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) {
        console.log('interceptor');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).do(evt => {
            this.loaderService.show();
            if (evt instanceof HttpResponse) {
                console.log('---> status:', evt.status);
                console.log('---> filter:', req.params.get('filter'));
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                this.loaderService.hide();
              console.log("error");
            }
        });

    }
}