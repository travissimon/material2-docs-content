import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
/**
 * @title Select with custom panel styling
 */
var SelectPanelClassExample = /** @class */ (function () {
    function SelectPanelClassExample() {
        this.panelColor = new FormControl('red');
    }
    SelectPanelClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-panel-class-example',
                    templateUrl: 'select-panel-class-example.html',
                    styleUrls: ['select-panel-class-example.css'],
                    // Encapsulation has to be disabled in order for the
                    // component style to apply to the select panel.
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    SelectPanelClassExample.ngFactoryDef = function SelectPanelClassExample_Factory(t) { return new (t || SelectPanelClassExample)(); };
    SelectPanelClassExample.ngComponentDef = i0.ɵɵdefineComponent({ type: SelectPanelClassExample, selectors: [["select-panel-class-example"]], decls: 10, vars: 2, consts: [[3, "formControl", "panelClass"], ["value", "red"], ["value", "green"], ["value", "blue"]], template: function SelectPanelClassExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Panel color");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 0);
            i0.ɵɵelementStart(4, "mat-option", 1);
            i0.ɵɵtext(5, "Red");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-option", 2);
            i0.ɵɵtext(7, "Green");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-option", 3);
            i0.ɵɵtext(9, "Blue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate1("panelClass", "example-panel-", ctx.panelColor.value, "");
            i0.ɵɵproperty("formControl", ctx.panelColor);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption], styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"], encapsulation: 2 });
    return SelectPanelClassExample;
}());
export { SelectPanelClassExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(SelectPanelClassExample, [{
        type: Component,
        args: [{
                selector: 'select-panel-class-example',
                templateUrl: 'select-panel-class-example.html',
                styleUrls: ['select-panel-class-example.css'],
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1wYW5lbC1jbGFzcy9zZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXBhbmVsLWNsYXNzL3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUUzQzs7R0FFRztBQUNIO0lBQUE7UUFTRSxlQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDN0Msb0RBQW9EO29CQUNwRCxnREFBZ0Q7b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEdBQ1ksdUJBQXVCOzBFQUF2Qix1QkFBdUI7WUNkcEMsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLDJCQUFXO1lBQUEsaUJBQVk7WUFDbEMscUNBRUU7WUFBQSxxQ0FBd0I7WUFBQSxtQkFBRztZQUFBLGlCQUFhO1lBQ3hDLHFDQUEwQjtZQUFBLHFCQUFLO1lBQUEsaUJBQWE7WUFDNUMscUNBQXlCO1lBQUEsb0JBQUk7WUFBQSxpQkFBYTtZQUM1QyxpQkFBYTtZQUNmLGlCQUFpQjs7WUFMSCxlQUErQztZQUEvQyxtRkFBK0M7WUFEL0MsNENBQTBCOztrQ0RGeEM7Q0FnQkMsQUFWRCxJQVVDO1NBRlksdUJBQXVCO21DQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxvREFBb0Q7Z0JBQ3BELGdEQUFnRDtnQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBTZWxlY3Qgd2l0aCBjdXN0b20gcGFuZWwgc3R5bGluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS5jc3MnXSxcbiAgLy8gRW5jYXBzdWxhdGlvbiBoYXMgdG8gYmUgZGlzYWJsZWQgaW4gb3JkZXIgZm9yIHRoZVxuICAvLyBjb21wb25lbnQgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIHNlbGVjdCBwYW5lbC5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UGFuZWxDbGFzc0V4YW1wbGUge1xuICBwYW5lbENvbG9yID0gbmV3IEZvcm1Db250cm9sKCdyZWQnKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5QYW5lbCBjb2xvcjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwicGFuZWxDb2xvclwiXG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M9XCJleGFtcGxlLXBhbmVsLXt7cGFuZWxDb2xvci52YWx1ZX19XCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyZWRcIj5SZWQ8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJncmVlblwiPkdyZWVuPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiYmx1ZVwiPkJsdWU8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=