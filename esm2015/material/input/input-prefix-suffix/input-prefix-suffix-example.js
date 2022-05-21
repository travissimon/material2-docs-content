import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/icon";
/**
 * @title Inputs with prefixes and suffixes
 */
export class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
InputPrefixSuffixExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Telephone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 2);
        i0.ɵɵtext(5, "+1 \u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "input", 3);
        i0.ɵɵelementStart(7, "mat-icon", 4);
        i0.ɵɵtext(8, "mode_edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i2.MatPrefix, i3.MatInput, i4.MatIcon, i2.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'input-prefix-suffix-example',
                templateUrl: 'input-prefix-suffix-example.html',
                styleUrls: ['input-prefix-suffix-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtcHJlZml4LXN1ZmZpeC9pbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1wcmVmaXgtc3VmZml4L2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1ZyQywrQkFBMkI7UUFDekIseUNBQTZEO1FBQzNELGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQywrQkFBZ0I7UUFBQSx5QkFBUztRQUFBLGlCQUFPO1FBQ2hDLDJCQUFzRDtRQUN0RCxtQ0FBb0I7UUFBQSx5QkFBUztRQUFBLGlCQUFXO1FBQzFDLGlCQUFpQjtRQUNuQixpQkFBTzs7dUZER00sd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXRzIHdpdGggcHJlZml4ZXMgYW5kIHN1ZmZpeGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFByZWZpeFN1ZmZpeEV4YW1wbGUge31cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5UZWxlcGhvbmU8L21hdC1sYWJlbD5cbiAgICA8c3BhbiBtYXRQcmVmaXg+KzEgJm5ic3A7PC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCI1NTUtNTU1LTEyMzRcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4Pm1vZGVfZWRpdDwvbWF0LWljb24+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=