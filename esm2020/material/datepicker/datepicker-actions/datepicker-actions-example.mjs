import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/form-field";
/** @title Datepicker action buttons */
export class DatepickerActionsExample {
}
DatepickerActionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DatepickerActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerActionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: DatepickerActionsExample, selector: "datepicker-actions-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i2.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i2.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i2.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: DatepickerActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-actions-example', template: "<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItYWN0aW9ucy9kYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hY3Rpb25zL2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLHVDQUF1QztBQU12QyxNQUFNLE9BQU8sd0JBQXdCOztxSEFBeEIsd0JBQXdCO3lHQUF4Qix3QkFBd0Isa0VDUnJDLDI5Q0FnQ0E7MkZEeEJhLHdCQUF3QjtrQkFMcEMsU0FBUzsrQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBhY3Rpb24gYnV0dG9ucyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJBY3Rpb25zRXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYSBkYXRlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkYXRlcGlja2VyXCI+XG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwiZGF0ZXBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuPCEtLSAjZG9jcmVnaW9uIGRhdGVwaWNrZXItYWN0aW9ucyAtLT5cbiAgPG1hdC1kYXRlcGlja2VyICNkYXRlcGlja2VyPlxuICAgIDxtYXQtZGF0ZXBpY2tlci1hY3Rpb25zPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdERhdGVwaWNrZXJDYW5jZWw+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdERhdGVwaWNrZXJBcHBseT5BcHBseTwvYnV0dG9uPlxuICAgIDwvbWF0LWRhdGVwaWNrZXItYWN0aW9ucz5cbiAgPC9tYXQtZGF0ZXBpY2tlcj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBkYXRlcGlja2VyLWFjdGlvbnMgLS0+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW3JhbmdlUGlja2VyXT1cInJhbmdlUGlja2VyXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZIOKAkyBNTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwicmFuZ2VQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbjwhLS0gI2RvY3JlZ2lvbiBkYXRlLXJhbmdlLXBpY2tlci1hY3Rpb25zIC0tPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNyYW5nZVBpY2tlcj5cbiAgICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnM+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RGF0ZVJhbmdlUGlja2VyQ2FuY2VsPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXREYXRlUmFuZ2VQaWNrZXJBcHBseT5BcHBseTwvYnV0dG9uPlxuICAgIDwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnM+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnMgLS0+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19