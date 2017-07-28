import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";



@Component({
    selector: 'default-comp',
    templateUrl: './sanitize.component.html'
})
export class SanitizeComponent {
    htmlString: any;
    constructor(private domSanitizer: DomSanitizer) {
        this.htmlString = this.getInnerHTMLValue();
    }
    getInnerHTMLValue(): any {
        return this.domSanitizer.bypassSecurityTrustHtml("<strong>Verify that you are running at least node <code>6.9.x</code> and npm <code>3.x.x</code></strong>");
    }
}
