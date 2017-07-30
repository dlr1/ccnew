import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'angular-loader',
    templateUrl: 'loader.component.html'    
})
export class LoaderComponent implements OnInit {
    show = false;
    private subscription: Subscription;

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;                
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}