/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/**
 * \@title Select with 2-way value binding
 */
export class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
}
SelectValueBindingExample.decorators = [
    { type: Component, args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
                styleUrls: ['select-value-binding-example.css'],
            },] },
];
/** @nocollapse */ SelectValueBindingExample.ngFactoryDef = function SelectValueBindingExample_Factory(t) { return new (t || SelectValueBindingExample)(); };
/** @nocollapse */ SelectValueBindingExample.ngComponentDef = i0.ɵɵdefineComponent({ type: SelectValueBindingExample, selectors: [["select-value-binding-example"]], decls: 14, vars: 2, consts: [[3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function SelectValueBindingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Select an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0);
        i0.ɵɵlistener("valueChange", function SelectValueBindingExample_Template_mat_select_valueChange_3_listener($event) { return ctx.selected = $event; });
        i0.ɵɵelementStart(4, "mat-option");
        i0.ɵɵtext(5, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 1);
        i0.ɵɵtext(7, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 2);
        i0.ɵɵtext(9, "Option 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Option 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.selected);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selected, "");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SelectValueBindingExample, [{
        type: Component,
        args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
                styleUrls: ['select-value-binding-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    SelectValueBindingExample.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXZhbHVlLWJpbmRpbmcvc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXZhbHVlLWJpbmRpbmcvc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVF4QyxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTUUsYUFBUSxHQUFHLFNBQVMsQ0FBQztLQUN0Qjs7O1lBUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOzswR0FDWSx5QkFBeUI7d0VBQXpCLHlCQUF5QjtRQ1J0QyxzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsZ0NBQWdCO1FBQUEsaUJBQVk7UUFDdkMscUNBQ0U7UUFEVSxxSkFBb0I7UUFDOUIsa0NBQVk7UUFBQSxvQkFBSTtRQUFBLGlCQUFhO1FBQzdCLHFDQUE0QjtRQUFBLHdCQUFRO1FBQUEsaUJBQWE7UUFDakQscUNBQTRCO1FBQUEsd0JBQVE7UUFBQSxpQkFBYTtRQUNqRCxzQ0FBNEI7UUFBQSx5QkFBUTtRQUFBLGlCQUFhO1FBQ25ELGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLDBCQUFHO1FBQUEsYUFBMEI7UUFBQSxpQkFBSTs7UUFSbkIsZUFBb0I7UUFBcEIsb0NBQW9CO1FBUS9CLGdCQUEwQjtRQUExQix5REFBMEI7O21DREZoQix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOzs7O0lBRUMsNkNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIDItd2F5IHZhbHVlIGJpbmRpbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RWYWx1ZUJpbmRpbmdFeGFtcGxlIHtcbiAgc2VsZWN0ZWQgPSAnb3B0aW9uMic7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IGFuIG9wdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJzZWxlY3RlZFwiPlxuICAgIDxtYXQtb3B0aW9uPk5vbmU8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24xXCI+T3B0aW9uIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24yXCI+T3B0aW9uIDI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24zXCI+T3B0aW9uIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZH19PC9wPlxuIl19