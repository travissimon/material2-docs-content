/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
/**
 * \@title Tooltip with a show and hide delay
 */
export class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
}
TooltipDelayExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-delay-example',
                templateUrl: 'tooltip-delay-example.html',
                styleUrls: ['tooltip-delay-example.css'],
            },] },
];
/** @nocollapse */ TooltipDelayExample.ngFactoryDef = function TooltipDelayExample_Factory(t) { return new (t || TooltipDelayExample)(); };
/** @nocollapse */ TooltipDelayExample.ngComponentDef = i0.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 6, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "placeholder", "Show delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "placeholder", "Hide delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵtext(5, " Action\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.showDelay);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.hideDelay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TooltipDelayExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-delay-example',
                templateUrl: 'tooltip-delay-example.html',
                styleUrls: ['tooltip-delay-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TooltipDelayExample.prototype.showDelay;
    /** @type {?} */
    TooltipDelayExample.prototype.hideDelay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQVUzQyxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTUUsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDOzs4RkFDWSxtQkFBbUI7a0VBQW5CLG1CQUFtQjtRQ1hoQyx5Q0FDRTtRQUFBLDJCQUlGO1FBQUEsaUJBQWlCO1FBRWpCLHlDQUNFO1FBQUEsMkJBSUY7UUFBQSxpQkFBaUI7UUFFakIsaUNBS0U7UUFBQSx5QkFDRjtRQUFBLGlCQUFTOztRQWhCQSxlQUF5QjtRQUF6QiwyQ0FBeUI7UUFPekIsZUFBeUI7UUFBekIsMkNBQXlCO1FBSzFCLGVBQXVDO1FBQXZDLHlEQUF1Qyw0Q0FBQTs7bUNETGxDLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekM7Ozs7SUFFQyx3Q0FBa0M7O0lBQ2xDLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB3aXRoIGEgc2hvdyBhbmQgaGlkZSBkZWxheVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWRlbGF5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERlbGF5RXhhbXBsZSB7XG4gIHNob3dEZWxheSA9IG5ldyBGb3JtQ29udHJvbCgxMDAwKTtcbiAgaGlkZURlbGF5ID0gbmV3IEZvcm1Db250cm9sKDIwMDApO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNob3cgZGVsYXkgKG1pbGxpc2Vjb25kcylcIlxuICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICBhcmlhLWxhYmVsPVwiQWRkcyBhIGRlbGF5IGJldHdlZW4gaG92ZXJpbmcgb3ZlciB0aGUgYnV0dG9uIGFuZCBkaXNwbGF5aW5nIHRoZSB0b29sdGlwXCJcbiAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzaG93RGVsYXlcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtdXNlci1pbnB1dFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJIaWRlIGRlbGF5IChtaWxsaXNlY29uZHMpXCJcbiAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZHMgYSBkZWxheSBiZXR3ZWVuIGhvdmVyaW5nIGF3YXkgZnJvbSB0aGUgYnV0dG9uIGFuZCBoaWRpbmcgdGhlIHRvb2x0aXBcIlxuICAgICAgICAgW2Zvcm1Db250cm9sXT1cImhpZGVEZWxheVwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgW21hdFRvb2x0aXBTaG93RGVsYXldPVwic2hvd0RlbGF5LnZhbHVlXCJcbiAgICAgICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwiaGlkZURlbGF5LnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB3aXRoIGEgY3VzdG9taXplZCBkZWxheSBpbiBzaG93aW5nIGFuZCBoaWRpbmdcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==