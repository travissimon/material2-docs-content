/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-bar";
import * as i6 from "@angular/material/slider";
function ProgressBarConfigurableExample_section_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Progress:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_26_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.value);
} }
function ProgressBarConfigurableExample_section_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Buffer:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_27_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.bufferValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.bufferValue);
} }
/**
 * \@title Configurable progress-bar
 */
export class ProgressBarConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
}
ProgressBarConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-configurable-example',
                templateUrl: 'progress-bar-configurable-example.html',
                styleUrls: ['progress-bar-configurable-example.css'],
            },] },
];
/** @nocollapse */ ProgressBarConfigurableExample.ngFactoryDef = function ProgressBarConfigurableExample_Factory(t) { return new (t || ProgressBarConfigurableExample)(); };
/** @nocollapse */ ProgressBarConfigurableExample.ngComponentDef = i0.ɵɵdefineComponent({ type: ProgressBarConfigurableExample, selectors: [["progress-bar-configurable-example"]], decls: 34, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressBarConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Progress bar configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "label", 2);
        i0.ɵɵtext(6, "Color:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
        i0.ɵɵelementStart(8, "mat-radio-button", 4);
        i0.ɵɵtext(9, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-radio-button", 5);
        i0.ɵɵtext(11, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-radio-button", 6);
        i0.ɵɵtext(13, " Warn ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "section", 1);
        i0.ɵɵelementStart(15, "label", 2);
        i0.ɵɵtext(16, "Mode:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
        i0.ɵɵelementStart(18, "mat-radio-button", 7);
        i0.ɵɵtext(19, " Determinate ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-radio-button", 8);
        i0.ɵɵtext(21, " Indeterminate ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-radio-button", 9);
        i0.ɵɵtext(23, " Buffer ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-radio-button", 10);
        i0.ɵɵtext(25, " Query ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(26, ProgressBarConfigurableExample_section_26_Template, 4, 1, "section", 11);
        i0.ɵɵtemplate(27, ProgressBarConfigurableExample_section_27_Template, 4, 1, "section", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-card");
        i0.ɵɵelementStart(29, "mat-card-content");
        i0.ɵɵelementStart(30, "h2", 0);
        i0.ɵɵtext(31, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "section", 1);
        i0.ɵɵelement(33, "mat-progress-bar", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.color);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngModel", ctx.mode);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.mode === "determinate" || ctx.mode === "buffer");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === "buffer");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("bufferValue", ctx.bufferValue);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i5.MatProgressBar, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ProgressBarConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-configurable-example',
                templateUrl: 'progress-bar-configurable-example.html',
                styleUrls: ['progress-bar-configurable-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.color;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.mode;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.value;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.bufferValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ3FDcEMsa0NBQ0U7SUFBQSxnQ0FBOEI7SUFBQSx5QkFBUztJQUFBLGlCQUFRO0lBQy9DLHNDQUFvRTtJQUFqQyxtT0FBbUI7SUFBQyxpQkFBYTtJQUN0RSxpQkFBVTs7O0lBRDJCLGVBQW1CO0lBQW5CLHNDQUFtQjs7OztJQUV4RCxrQ0FDRTtJQUFBLGdDQUE4QjtJQUFBLHVCQUFPO0lBQUEsaUJBQVE7SUFDN0Msc0NBQTBFO0lBQXZDLHlPQUF5QjtJQUFDLGlCQUFhO0lBQzVFLGlCQUFVOzs7SUFEMkIsZUFBeUI7SUFBekIsNENBQXlCOzs7OztBRC9CbEUsTUFBTSxPQUFPLDhCQUE4QjtJQUwzQztRQU1FLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBQ2hDLFNBQUksR0FBb0IsYUFBYSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztLQUNsQjs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOztvSEFDWSw4QkFBOEI7NkVBQTlCLDhCQUE4QjtRQ1ozQyxnQ0FDRTtRQUFBLHdDQUNFO1FBQUEsNkJBQXVCO1FBQUEsMENBQTBCO1FBQUEsaUJBQUs7UUFFdEQsa0NBQ0U7UUFBQSxnQ0FBOEI7UUFBQSxzQkFBTTtRQUFBLGlCQUFRO1FBQzVDLDBDQUNFO1FBRGUsZ0tBQW1CO1FBQ2xDLDJDQUNFO1FBQUEseUJBQ0Y7UUFBQSxpQkFBbUI7UUFDbkIsNENBQ0U7UUFBQSx5QkFDRjtRQUFBLGlCQUFtQjtRQUNuQiw0Q0FDRTtRQUFBLHVCQUNGO1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFrQjtRQUNwQixpQkFBVTtRQUVWLG1DQUNFO1FBQUEsaUNBQThCO1FBQUEsc0JBQUs7UUFBQSxpQkFBUTtRQUMzQywyQ0FDRTtRQURlLGdLQUFrQjtRQUNqQyw0Q0FDRTtRQUFBLDhCQUNGO1FBQUEsaUJBQW1CO1FBQ25CLDRDQUNFO1FBQUEsZ0NBQ0Y7UUFBQSxpQkFBbUI7UUFDbkIsNENBQ0U7UUFBQSx5QkFDRjtRQUFBLGlCQUFtQjtRQUNuQiw2Q0FDRTtRQUFBLHdCQUNGO1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFrQjtRQUNwQixpQkFBVTtRQUVWLDBGQUNFO1FBR0YsMEZBQ0U7UUFHSixpQkFBbUI7UUFDckIsaUJBQVc7UUFFWCxpQ0FDRTtRQUFBLHlDQUNFO1FBQUEsOEJBQXVCO1FBQUEsdUJBQU07UUFBQSxpQkFBSztRQUVsQyxtQ0FDRTtRQUFBLHdDQU1tQjtRQUNyQixpQkFBVTtRQUNaLGlCQUFtQjtRQUNyQixpQkFBVzs7UUF4RFksZUFBbUI7UUFBbkIsbUNBQW1CO1FBZW5CLGdCQUFrQjtRQUFsQixrQ0FBa0I7UUFnQkosZUFBbUQ7UUFBbkQsMEVBQW1EO1FBSW5ELGVBQXlCO1FBQXpCLDRDQUF5QjtRQWNwRCxlQUFlO1FBQWYsaUNBQWUsa0JBQUEsb0JBQUEsZ0NBQUE7O21DRDNDWiw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOzs7O0lBRUMsK0NBQWdDOztJQUNoQyw4Q0FBc0M7O0lBQ3RDLCtDQUFXOztJQUNYLHFEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJNb2RlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcHJvZ3Jlc3MtYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBQcm9ncmVzc0Jhck1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xuICB2YWx1ZSA9IDUwO1xuICBidWZmZXJWYWx1ZSA9IDc1O1xufVxuIiwiPG1hdC1jYXJkPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UHJvZ3Jlc3MgYmFyIGNvbmZpZ3VyYXRpb248L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+Q29sb3I6PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJjb2xvclwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgUHJpbWFyeVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImFjY2VudFwiPlxuICAgICAgICAgIEFjY2VudFxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cIndhcm5cIj5cbiAgICAgICAgICBXYXJuXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPk1vZGU6PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJtb2RlXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImRldGVybWluYXRlXCI+XG4gICAgICAgICAgRGV0ZXJtaW5hdGVcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJpbmRldGVybWluYXRlXCI+XG4gICAgICAgICAgSW5kZXRlcm1pbmF0ZVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImJ1ZmZlclwiPlxuICAgICAgICAgIEJ1ZmZlclxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cInF1ZXJ5XCI+XG4gICAgICAgICAgUXVlcnlcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiAqbmdJZj1cIm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgfHwgbW9kZSA9PT0gJ2J1ZmZlcidcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+UHJvZ3Jlc3M6PC9sYWJlbD5cbiAgICAgIDxtYXQtc2xpZGVyIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+PC9tYXQtc2xpZGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiICpuZ0lmPVwibW9kZSA9PT0gJ2J1ZmZlcidcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+QnVmZmVyOjwvbGFiZWw+XG4gICAgICA8bWF0LXNsaWRlciBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJidWZmZXJWYWx1ZVwiPjwvbWF0LXNsaWRlcj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1wcm9ncmVzcy1iYXJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgW2J1ZmZlclZhbHVlXT1cImJ1ZmZlclZhbHVlXCI+XG4gICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgPC9zZWN0aW9uPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19