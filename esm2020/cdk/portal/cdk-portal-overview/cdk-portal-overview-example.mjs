import { ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef, ElementRef, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
/**
 * @title Portal overview
 */
class CdkPortalOverviewExample {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        this.domPortal = new DomPortal(this.domPortalContent);
    }
}
CdkPortalOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CdkPortalOverviewExample, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
CdkPortalOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: CdkPortalOverviewExample, selector: "cdk-portal-overview-example", viewQueries: [{ propertyName: "templatePortalContent", first: true, predicate: ["templatePortalContent"], descendants: true }, { propertyName: "domPortalContent", first: true, predicate: ["domPortalContent"], descendants: true }], ngImport: i0, template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }] });
export { CdkPortalOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CdkPortalOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-portal-overview-example', template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { templatePortalContent: [{
                type: ViewChild,
                args: ['templatePortalContent']
            }], domPortalContent: [{
                type: ViewChild,
                args: ['domPortalContent']
            }] } });
class ComponentPortalExample {
}
ComponentPortalExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ComponentPortalExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ComponentPortalExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: ComponentPortalExample, selector: "component-portal-example", ngImport: i0, template: 'Hello, this is a component portal', isInline: true });
export { ComponentPortalExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ComponentPortalExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBVSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQzs7O0FBRXZCOztHQUVHO0FBQ0gsTUFLYSx3QkFBd0I7SUFTbkMsWUFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDO0lBRTNELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs0SEFmVSx3QkFBd0I7Z0hBQXhCLHdCQUF3QiwwU0NsQnJDLG9pQkFXQTtTRE9hLHdCQUF3QjtrR0FBeEIsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDZCQUE2Qjt1R0FLSCxxQkFBcUI7c0JBQXhELFNBQVM7dUJBQUMsdUJBQXVCO2dCQUNILGdCQUFnQjtzQkFBOUMsU0FBUzt1QkFBQyxrQkFBa0I7O0FBZ0IvQixNQUlhLHNCQUFzQjs7MEhBQXRCLHNCQUFzQjs4R0FBdEIsc0JBQXNCLGdFQUZ2QixtQ0FBbUM7U0FFbEMsc0JBQXNCO2tHQUF0QixzQkFBc0I7a0JBSmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLG1DQUFtQztpQkFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudFBvcnRhbCwgRG9tUG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFBvcnRhbCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUG9ydGFsQ29udGVudCcpIHRlbXBsYXRlUG9ydGFsQ29udGVudDogVGVtcGxhdGVSZWY8dW5rbm93bj47XG4gIEBWaWV3Q2hpbGQoJ2RvbVBvcnRhbENvbnRlbnQnKSBkb21Qb3J0YWxDb250ZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBzZWxlY3RlZFBvcnRhbDogUG9ydGFsPGFueT47XG4gIGNvbXBvbmVudFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPENvbXBvbmVudFBvcnRhbEV4YW1wbGU+O1xuICB0ZW1wbGF0ZVBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcbiAgZG9tUG9ydGFsOiBEb21Qb3J0YWw8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoQ29tcG9uZW50UG9ydGFsRXhhbXBsZSk7XG4gICAgdGhpcy50ZW1wbGF0ZVBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnRlbXBsYXRlUG9ydGFsQ29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5kb21Qb3J0YWwgPSBuZXcgRG9tUG9ydGFsKHRoaXMuZG9tUG9ydGFsQ29udGVudCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LXBvcnRhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGU6ICdIZWxsbywgdGhpcyBpcyBhIGNvbXBvbmVudCBwb3J0YWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb3J0YWxFeGFtcGxlIHt9XG4iLCI8aDI+VGhlIHBvcnRhbCBvdXRsZXQgaXMgYmVsb3c6PC9oMj5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLXBvcnRhbC1vdXRsZXRcIj5cbiAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwic2VsZWN0ZWRQb3J0YWxcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48bmctdGVtcGxhdGUgI3RlbXBsYXRlUG9ydGFsQ29udGVudD5IZWxsbywgdGhpcyBpcyBhIHRlbXBsYXRlIHBvcnRhbDwvbmctdGVtcGxhdGU+XG5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gY29tcG9uZW50UG9ydGFsXCI+UmVuZGVyIGNvbXBvbmVudCBwb3J0YWw8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gdGVtcGxhdGVQb3J0YWxcIj5SZW5kZXIgdGVtcGxhdGUgcG9ydGFsPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IGRvbVBvcnRhbFwiPlJlbmRlciBET00gcG9ydGFsPC9idXR0b24+XG5cbjxkaXYgI2RvbVBvcnRhbENvbnRlbnQ+SGVsbG8sIHRoaXMgaXMgYSBET00gcG9ydGFsPC9kaXY+XG4iXX0=