/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollCustomStrategyExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r9);
} }
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}
/**
 * \@title Virtual scroll with a custom strategy
 */
export class CdkVirtualScrollCustomStrategyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollCustomStrategyExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
            },] },
];
/** @nocollapse */ CdkVirtualScrollCustomStrategyExample.ngFactoryDef = function CdkVirtualScrollCustomStrategyExample_Factory(t) { return new (t || CdkVirtualScrollCustomStrategyExample)(); };
/** @nocollapse */ CdkVirtualScrollCustomStrategyExample.ngComponentDef = i0.ɵɵdefineComponent({ type: CdkVirtualScrollCustomStrategyExample, selectors: [["cdk-virtual-scroll-custom-strategy-example"]], features: [i0.ɵɵProvidersFeature([{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }])], decls: 2, vars: 1, consts: [[1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollCustomStrategyExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollCustomStrategyExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkVirtualScrollCustomStrategyExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CdkVirtualScrollCustomStrategyExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS9jZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5L2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3ktZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsOEJBQThCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0lDQS9ELDhCQUE2RDtJQUFBLFlBQVE7SUFBQSxpQkFBTTs7O0lBQWQsZUFBUTtJQUFSLDZCQUFROztBREV2RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsOEJBQThCO0lBQzdFO1FBQ0UsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGOzs7O0FBVUQsTUFBTSxPQUFPLHFDQUFxQztJQVBsRDtRQVFFLFVBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztLQUNsRTs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxDQUFDO2dCQUM3RCxXQUFXLEVBQUUsaURBQWlEO2dCQUM5RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFDLENBQUM7YUFDdkY7O2tJQUNZLHFDQUFxQztvRkFBckMscUNBQXFDLGdHQUZyQyxDQUFDLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO1FDZnhGLHNEQUNFO1FBQUEsc0ZBQTZEO1FBQy9ELGlCQUE4Qjs7UUFEdkIsZUFBa0M7UUFBbEMsMkNBQWtDOzttQ0RnQjVCLHFDQUFxQztjQVBqRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsU0FBUyxFQUFFLENBQUMsZ0RBQWdELENBQUM7Z0JBQzdELFdBQVcsRUFBRSxpREFBaUQ7Z0JBQzlELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQzthQUN2Rjs7OztJQUVDLHNEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5LCBWSVJUVUFMX1NDUk9MTF9TVFJBVEVHWX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmlydHVhbFNjcm9sbFN0cmF0ZWd5IGV4dGVuZHMgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoNTAsIDI1MCwgNTAwKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIHdpdGggYSBjdXN0b20gc3RyYXRlZ3kgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3ktZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFZJUlRVQUxfU0NST0xMX1NUUkFURUdZLCB1c2VDbGFzczogQ3VzdG9tVmlydHVhbFNjcm9sbFN0cmF0ZWd5fV1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbEN1c3RvbVN0cmF0ZWd5RXhhbXBsZSB7XG4gIGl0ZW1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDAwMDB9KS5tYXAoKF8sIGkpID0+IGBJdGVtICMke2l9YCk7XG59XG4iLCI8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IGNsYXNzPVwiZXhhbXBsZS12aWV3cG9ydFwiPlxuICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBjbGFzcz1cImV4YW1wbGUtaXRlbVwiPnt7aXRlbX19PC9kaXY+XG48L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiJdfQ==