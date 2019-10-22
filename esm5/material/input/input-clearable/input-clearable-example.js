import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
function InputClearableExample_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function InputClearableExample_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = ""; });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * @title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-clearable-example',
                    templateUrl: './input-clearable-example.html',
                    styleUrls: ['./input-clearable-example.css'],
                },] },
    ];
    InputClearableExample.ngFactoryDef = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
    InputClearableExample.ngComponentDef = i0.ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 3, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", "placeholder", "Clearable input", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "input", 1);
            i0.ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, InputClearableExample_button_2_Template, 3, 0, "button", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.value);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NgIf, i5.MatButton, i1.MatSuffix, i6.MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
    return InputClearableExample;
}());
export { InputClearableExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtY2xlYXJhYmxlL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L2lucHV0LWNsZWFyYWJsZS9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNFdEMsaUNBQ0U7SUFENEUsd0xBQWUsRUFBRSxJQUFDO0lBQzlGLGdDQUFVO0lBQUEscUJBQUs7SUFBQSxpQkFBVztJQUM1QixpQkFBUzs7QURGWDs7R0FFRztBQUNIO0lBQUE7UUFNRSxVQUFLLEdBQUcsVUFBVSxDQUFDO0tBQ3BCOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7aUJBQzdDOztzR0FDWSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtZQ1ZsQyx5Q0FDRTtZQUFBLGdDQUNBO1lBRDBELDZJQUFtQjtZQUE3RSxpQkFDQTtZQUFBLDRFQUNFO1lBRUosaUJBQWlCOztZQUoyQyxlQUFtQjtZQUFuQixtQ0FBbUI7WUFDMUQsZUFBYTtZQUFiLGdDQUFhOztnQ0RGbEM7Q0FZQyxBQVBELElBT0M7U0FGWSxxQkFBcUI7bUNBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIElucHV0IHdpdGggYSBjbGVhciBidXR0b25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENsZWFyYWJsZUV4YW1wbGUge1xuICB2YWx1ZSA9ICdDbGVhciBtZSc7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDbGVhcmFibGUgaW5wdXRcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAqbmdJZj1cInZhbHVlXCIgbWF0U3VmZml4IG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xlYXJcIiAoY2xpY2spPVwidmFsdWU9JydcIj5cbiAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=