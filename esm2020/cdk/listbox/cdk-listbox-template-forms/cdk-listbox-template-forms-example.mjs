import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/cdk/listbox";
/** @title Listbox with template-driven forms. */
class CdkListboxTemplateFormsExample {
    constructor() {
        this.toppings = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];
        this.order = [];
    }
}
CdkListboxTemplateFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CdkListboxTemplateFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxTemplateFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: CdkListboxTemplateFormsExample, selector: "cdk-listbox-template-forms-example", exportAs: ["cdkListboxTemplateFormsExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-toppings-label\">\n    Choose Toppings\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      [(ngModel)]=\"order\"\n      aria-labelledby=\"example-toppings-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let topping of toppings\"\n        [cdkOption]=\"topping\"\n        class=\"example-option\">\n      {{topping}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your order: <b>{{order | json}}</b>&nbsp;\n  <button (click)=\"order = []\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i3.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] });
export { CdkListboxTemplateFormsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: CdkListboxTemplateFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-template-forms-example', exportAs: 'cdkListboxTemplateFormsExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-toppings-label\">\n    Choose Toppings\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      [(ngModel)]=\"order\"\n      aria-labelledby=\"example-toppings-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let topping of toppings\"\n        [cdkOption]=\"topping\"\n        class=\"example-option\">\n      {{topping}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your order: <b>{{order | json}}</b>&nbsp;\n  <button (click)=\"order = []\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtdGVtcGxhdGUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zL2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC10ZW1wbGF0ZS1mb3Jtcy9jZGstbGlzdGJveC10ZW1wbGF0ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsaURBQWlEO0FBQ2pELE1BTWEsOEJBQThCO0lBTjNDO1FBT0UsYUFBUSxHQUFHLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakUsVUFBSyxHQUFzQixFQUFFLENBQUM7S0FDL0I7O2tJQUhZLDhCQUE4QjtzSEFBOUIsOEJBQThCLHdIQ1QzQyw2bkJBc0JBO1NEYmEsOEJBQThCO2tHQUE5Qiw4QkFBOEI7a0JBTjFDLFNBQVM7K0JBQ0Usb0NBQW9DLFlBQ3BDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggdGVtcGxhdGUtZHJpdmVuIGZvcm1zLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtdGVtcGxhdGUtZm9ybXMtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveFRlbXBsYXRlRm9ybXNFeGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC10ZW1wbGF0ZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWxpc3Rib3gtdGVtcGxhdGUtZm9ybXMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGlzdGJveFRlbXBsYXRlRm9ybXNFeGFtcGxlIHtcbiAgdG9wcGluZ3MgPSBbJ0V4dHJhIENoZWVzZScsICdNdXNocm9vbXMnLCAnUGVwcGVyb25pJywgJ1NhdXNhZ2UnXTtcbiAgb3JkZXI6IHJlYWRvbmx5IHN0cmluZ1tdID0gW107XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWNvbnRhaW5lclwiPlxuICA8IS0tICNkb2NyZWdpb24gbGlzdGJveCAtLT5cbiAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWxhYmVsXCIgaWQ9XCJleGFtcGxlLXRvcHBpbmdzLWxhYmVsXCI+XG4gICAgQ2hvb3NlIFRvcHBpbmdzXG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBjZGtMaXN0Ym94TXVsdGlwbGVcbiAgICAgIFsobmdNb2RlbCldPVwib3JkZXJcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS10b3BwaW5ncy1sYWJlbFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgdG9wcGluZyBvZiB0b3BwaW5nc1wiXG4gICAgICAgIFtjZGtPcHRpb25dPVwidG9wcGluZ1wiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIHt7dG9wcGluZ319XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48L2Rpdj5cbjxwPlxuICBZb3VyIG9yZGVyOiA8Yj57e29yZGVyIHwganNvbn19PC9iPiZuYnNwO1xuICA8YnV0dG9uIChjbGljayk9XCJvcmRlciA9IFtdXCI+UmVzZXQ8L2J1dHRvbj5cbjwvcD5cbiJdfQ==