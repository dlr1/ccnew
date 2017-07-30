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
        return this.domSanitizer.bypassSecurityTrustHtml("<h1>DomSanitizer</h1><script>attackerCode()</script>");
    }
}
