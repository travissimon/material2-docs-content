import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/input";
/** @title Datepicker with custom date classes */
export class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (cellDate, view) => {
            // Only highligh dates inside the month view.
            if (view === 'month') {
                const date = cellDate.getDate();
                // Highlight the 1st and 20th day of each month.
                return date === 1 || date === 20 ? 'example-custom-date-class' : '';
            }
            return '';
        };
    }
}
DatepickerDateClassExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatepickerDateClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerDateClassExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: DatepickerDateClassExample, selector: "datepicker-date-class-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n", styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: DatepickerDateClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-date-class-example', encapsulation: ViewEncapsulation.None, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n", styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kYXRlLWNsYXNzL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHM0QsaURBQWlEO0FBT2pELE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFPRSxjQUFTLEdBQXVDLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2pFLDZDQUE2QztZQUM3QyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFaEMsZ0RBQWdEO2dCQUNoRCxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUNyRTtZQUVELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO0tBQ0g7O3VIQVpZLDBCQUEwQjsyR0FBMUIsMEJBQTBCLHFFQ1Z2QyxvVUFNQTsyRkRJYSwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsK0JBQStCLGlCQUcxQixpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2FsZW5kYXJDZWxsQ2xhc3NGdW5jdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGN1c3RvbSBkYXRlIGNsYXNzZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRGF0ZUNsYXNzRXhhbXBsZSB7XG4gIGRhdGVDbGFzczogTWF0Q2FsZW5kYXJDZWxsQ2xhc3NGdW5jdGlvbjxEYXRlPiA9IChjZWxsRGF0ZSwgdmlldykgPT4ge1xuICAgIC8vIE9ubHkgaGlnaGxpZ2ggZGF0ZXMgaW5zaWRlIHRoZSBtb250aCB2aWV3LlxuICAgIGlmICh2aWV3ID09PSAnbW9udGgnKSB7XG4gICAgICBjb25zdCBkYXRlID0gY2VsbERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAvLyBIaWdobGlnaHQgdGhlIDFzdCBhbmQgMjB0aCBkYXkgb2YgZWFjaCBtb250aC5cbiAgICAgIHJldHVybiBkYXRlID09PSAxIHx8IGRhdGUgPT09IDIwID8gJ2V4YW1wbGUtY3VzdG9tLWRhdGUtY2xhc3MnIDogJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9O1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYSBkYXRlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyIFtkYXRlQ2xhc3NdPVwiZGF0ZUNsYXNzXCIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==