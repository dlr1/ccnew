import { Directive, Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child.component';

@Directive({
  selector: '[my-host]',
})
export class HostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
    selector: 'dynamic-comp',
    templateUrl: './dynamic.component.html'
})
export class DynamicComponent {
    @ViewChild(HostDirective) myHost: HostDirective; 
    @ViewChild('tmpl') tref; 
    constructor(private eleRef:ElementRef , private componentFactoryResolver: ComponentFactoryResolver, private vcRef: ViewContainerRef) {

    }

    addComp() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        let viewContainerRef = this.myHost.viewContainerRef;
        
        viewContainerRef.createComponent(componentFactory);
        viewContainerRef.createEmbeddedView(this.tref);
    }

    ngOnInit() {

    }
}
