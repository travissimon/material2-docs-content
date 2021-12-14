import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
/** @title Stateful Menu with Standalone Trigger. */
export class CdkMenuStandaloneStatefulMenuExample {
    constructor() {
        this.bold = true;
        this.italic = false;
        this.size = 'Normal';
    }
    onSizeChange(item) {
        this.size = item._elementRef.nativeElement.textContent?.trim();
    }
}
CdkMenuStandaloneStatefulMenuExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuStandaloneStatefulMenuExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: CdkMenuStandaloneStatefulMenuExample, selector: "cdk-menu-standalone-stateful-menu-example", ngImport: i0, template: "<button cdkMenuItem [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template cdkMenuPanel #menu=\"cdkMenuPanel\">\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"menu\">\n    <button\n      class=\"example-menu-item\"\n      [checked]=\"bold\"\n      (cdkMenuItemToggled)=\"bold = !bold\"\n      cdkMenuItemCheckbox\n    >\n      Bold\n    </button>\n    <button\n      class=\"example-menu-item\"\n      [checked]=\"italic\"\n      (cdkMenuItemToggled)=\"italic = !italic\"\n      cdkMenuItemCheckbox\n    >\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup (change)=\"onSizeChange($event)\">\n      <button class=\"example-menu-item\" [checked]=\"size === 'Small'\" cdkMenuItemRadio>Small</button>\n      <button class=\"example-menu-item\" [checked]=\"size === 'Normal'\" cdkMenuItemRadio>\n        Normal\n      </button>\n      <button class=\"example-menu-item\" [checked]=\"size === 'Large'\" cdkMenuItemRadio>Large</button>\n    </div>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"], directives: [{ type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["disabled"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { type: i1.CdkMenuItemTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { type: i1.CdkMenuPanel, selector: "ng-template[cdkMenuPanel]", exportAs: ["cdkMenuPanel"] }, { type: i1.CdkMenu, selector: "[cdkMenu]", inputs: ["cdkMenuOrientation", "cdkMenuPanel"], outputs: ["closed"], exportAs: ["cdkMenu"] }, { type: i1.CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { type: i1.CdkMenuGroup, selector: "[cdkMenuGroup]", outputs: ["change"], exportAs: ["cdkMenuGroup"] }, { type: i1.CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-stateful-menu-example', template: "<button cdkMenuItem [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template cdkMenuPanel #menu=\"cdkMenuPanel\">\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"menu\">\n    <button\n      class=\"example-menu-item\"\n      [checked]=\"bold\"\n      (cdkMenuItemToggled)=\"bold = !bold\"\n      cdkMenuItemCheckbox\n    >\n      Bold\n    </button>\n    <button\n      class=\"example-menu-item\"\n      [checked]=\"italic\"\n      (cdkMenuItemToggled)=\"italic = !italic\"\n      cdkMenuItemCheckbox\n    >\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup (change)=\"onSizeChange($event)\">\n      <button class=\"example-menu-item\" [checked]=\"size === 'Small'\" cdkMenuItemRadio>Small</button>\n      <button class=\"example-menu-item\" [checked]=\"size === 'Normal'\" cdkMenuItemRadio>\n        Normal\n      </button>\n      <button class=\"example-menu-item\" [checked]=\"size === 'Large'\" cdkMenuItemRadio>Large</button>\n    </div>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUd4QyxvREFBb0Q7QUFNcEQsTUFBTSxPQUFPLG9DQUFvQztJQUxqRDtRQU1FLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsU0FBSSxHQUF1QixRQUFRLENBQUM7S0FLckM7SUFIQyxZQUFZLENBQUMsSUFBaUI7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDakUsQ0FBQzs7aUlBUlUsb0NBQW9DO3FIQUFwQyxvQ0FBb0MsaUZDVGpELDRnQ0E4QkE7MkZEckJhLG9DQUFvQztrQkFMaEQsU0FBUzsrQkFDRSwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01lbnVJdGVtfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL21lbnUnO1xuXG4vKiogQHRpdGxlIFN0YXRlZnVsIE1lbnUgd2l0aCBTdGFuZGFsb25lIFRyaWdnZXIuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlIHtcbiAgYm9sZCA9IHRydWU7XG4gIGl0YWxpYyA9IGZhbHNlO1xuXG4gIHNpemU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICdOb3JtYWwnO1xuXG4gIG9uU2l6ZUNoYW5nZShpdGVtOiBDZGtNZW51SXRlbSkge1xuICAgIHRoaXMuc2l6ZSA9IGl0ZW0uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpO1xuICB9XG59XG4iLCI8YnV0dG9uIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgY2xhc3M9XCJleGFtcGxlLXN0YW5kYWxvbmUtaXRlbVwiPkNsaWNrIG1lITwvYnV0dG9uPlxuXG48bmctdGVtcGxhdGUgY2RrTWVudVBhbmVsICNtZW51PVwiY2RrTWVudVBhbmVsXCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51IFtjZGtNZW51UGFuZWxdPVwibWVudVwiPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIlxuICAgICAgW2NoZWNrZWRdPVwiYm9sZFwiXG4gICAgICAoY2RrTWVudUl0ZW1Ub2dnbGVkKT1cImJvbGQgPSAhYm9sZFwiXG4gICAgICBjZGtNZW51SXRlbUNoZWNrYm94XG4gICAgPlxuICAgICAgQm9sZFxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIlxuICAgICAgW2NoZWNrZWRdPVwiaXRhbGljXCJcbiAgICAgIChjZGtNZW51SXRlbVRvZ2dsZWQpPVwiaXRhbGljID0gIWl0YWxpY1wiXG4gICAgICBjZGtNZW51SXRlbUNoZWNrYm94XG4gICAgPlxuICAgICAgSXRhbGljXG4gICAgPC9idXR0b24+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBjZGtNZW51R3JvdXAgKGNoYW5nZSk9XCJvblNpemVDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgW2NoZWNrZWRdPVwic2l6ZSA9PT0gJ1NtYWxsJ1wiIGNka01lbnVJdGVtUmFkaW8+U21hbGw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIFtjaGVja2VkXT1cInNpemUgPT09ICdOb3JtYWwnXCIgY2RrTWVudUl0ZW1SYWRpbz5cbiAgICAgICAgTm9ybWFsXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIFtjaGVja2VkXT1cInNpemUgPT09ICdMYXJnZSdcIiBjZGtNZW51SXRlbVJhZGlvPkxhcmdlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==