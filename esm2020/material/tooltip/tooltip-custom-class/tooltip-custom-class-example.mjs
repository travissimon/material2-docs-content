import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can have a custom class applied.
 */
export class TooltipCustomClassExample {
}
TooltipCustomClassExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipCustomClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipCustomClassExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipCustomClassExample, selector: "tooltip-custom-class-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"], components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipCustomClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-custom-class-example', encapsulation: ViewEncapsulation.None, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFM0Q7O0dBRUc7QUFTSCxNQUFNLE9BQU8seUJBQXlCOzs2SEFBekIseUJBQXlCO2lIQUF6Qix5QkFBeUIsb0VDYnRDLHdQQU9BO2tHRE1hLHlCQUF5QjtrQkFSckMsU0FBUzsrQkFDRSw4QkFBOEIsaUJBS3pCLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgY2FuIGhhdmUgYSBjdXN0b20gY2xhc3MgYXBwbGllZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUuY3NzJ10sXG4gIC8vIE5lZWQgdG8gcmVtb3ZlIHZpZXcgZW5jYXBzdWxhdGlvbiBzbyB0aGF0IHRoZSBjdXN0b20gdG9vbHRpcCBzdHlsZSBkZWZpbmVkIGluXG4gIC8vIGB0b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlLmNzc2Agd2lsbCBub3QgYmUgc2NvcGVkIHRvIHRoaXMgY29tcG9uZW50J3Mgdmlldy5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgbWF0VG9vbHRpcENsYXNzPVwiZXhhbXBsZS10b29sdGlwLXJlZFwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBzaG93cyBhIHJlZCB0b29sdGlwXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLWJ1dHRvblwiPlxuICBSZWQtdG9vbHRpcCBBY3Rpb25cbjwvYnV0dG9uPlxuIl19