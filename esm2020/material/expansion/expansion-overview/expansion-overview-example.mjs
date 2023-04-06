import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
/**
 * @title Basic expansion panel
 */
class ExpansionOverviewExample {
    constructor() {
        this.panelOpenState = false;
    }
}
ExpansionOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ExpansionOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpansionOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: ExpansionOverviewExample, selector: "expansion-overview-example", ngImport: i0, template: "<mat-accordion>\n<!-- #docregion basic-panel -->\n<!-- #docregion hide-toggle -->\n  <mat-expansion-panel hideToggle>\n<!-- #enddocregion hide-toggle -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        This is the expansion title\n      </mat-panel-title>\n      <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>This is the primary content of the panel.</p>\n  </mat-expansion-panel>\n<!-- #enddocregion basic-panel -->\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i1.MatExpansionPanelDescription, selector: "mat-panel-description" }] });
export { ExpansionOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ExpansionOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-overview-example', template: "<mat-accordion>\n<!-- #docregion basic-panel -->\n<!-- #docregion hide-toggle -->\n  <mat-expansion-panel hideToggle>\n<!-- #enddocregion hide-toggle -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        This is the expansion title\n      </mat-panel-title>\n      <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>This is the primary content of the panel.</p>\n  </mat-expansion-panel>\n<!-- #enddocregion basic-panel -->\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLW92ZXJ2aWV3L2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNILE1BS2Esd0JBQXdCO0lBTHJDO1FBTUUsbUJBQWMsR0FBRyxLQUFLLENBQUM7S0FDeEI7OzRIQUZZLHdCQUF3QjtnSEFBeEIsd0JBQXdCLGtFQ1ZyQyxxL0JBNkJBO1NEbkJhLHdCQUF3QjtrR0FBeEIsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgZXhwYW5zaW9uIHBhbmVsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25PdmVydmlld0V4YW1wbGUge1xuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xufVxuIiwiPG1hdC1hY2NvcmRpb24+XG48IS0tICNkb2NyZWdpb24gYmFzaWMtcGFuZWwgLS0+XG48IS0tICNkb2NyZWdpb24gaGlkZS10b2dnbGUgLS0+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIGhpZGVUb2dnbGU+XG48IS0tICNlbmRkb2NyZWdpb24gaGlkZS10b2dnbGUgLS0+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgVGhpcyBpcyB0aGUgZXhwYW5zaW9uIHRpdGxlXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFRoaXMgaXMgYSBzdW1tYXJ5IG9mIHRoZSBjb250ZW50XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgIDxwPlRoaXMgaXMgdGhlIHByaW1hcnkgY29udGVudCBvZiB0aGUgcGFuZWwuPC9wPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG48IS0tICNlbmRkb2NyZWdpb24gYmFzaWMtcGFuZWwgLS0+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIChvcGVuZWQpPVwicGFuZWxPcGVuU3RhdGUgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlZCk9XCJwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlXCI+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgU2VsZiBhd2FyZSBwYW5lbFxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBDdXJyZW50bHkgSSBhbSB7e3BhbmVsT3BlblN0YXRlID8gJ29wZW4nIDogJ2Nsb3NlZCd9fVxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICA8cD5JJ20gdmlzaWJsZSBiZWNhdXNlIEkgYW0gb3BlbjwvcD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPC9tYXQtYWNjb3JkaW9uPlxuIl19