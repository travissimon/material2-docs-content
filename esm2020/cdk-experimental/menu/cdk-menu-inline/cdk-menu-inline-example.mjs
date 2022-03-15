import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
/** @title Gmail inline menu. */
export class CdkMenuInlineExample {
}
CdkMenuInlineExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkMenuInlineExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuInlineExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: CdkMenuInlineExample, selector: "cdk-menu-inline-example", exportAs: ["cdkMenuInlineExample"], ngImport: i0, template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], directives: [{ type: i1.CdkMenu, selector: "[cdkMenu]", inputs: ["cdkMenuOrientation"], outputs: ["closed"], exportAs: ["cdkMenu"] }, { type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["disabled"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkMenuInlineExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-inline-example', exportAs: 'cdkMenuInlineExample', template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtaW5saW5lL2Nkay1tZW51LWlubGluZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWlubGluZS9jZGstbWVudS1pbmxpbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4QyxnQ0FBZ0M7QUFPaEMsTUFBTSxPQUFPLG9CQUFvQjs7d0hBQXBCLG9CQUFvQjs0R0FBcEIsb0JBQW9CLG1HQ1RqQyxxY0FRQTtrR0RDYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UseUJBQXlCLFlBQ3pCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBHbWFpbCBpbmxpbmUgbWVudS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LWlubGluZS1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51SW5saW5lRXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1pbmxpbmUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1pbmxpbmUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUlubGluZUV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5JbmJveDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5Tbm9vemVkPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkltcG9ydGFudDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5TZW50PC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkRyYWZ0czwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5BbGwgTWFpbDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=