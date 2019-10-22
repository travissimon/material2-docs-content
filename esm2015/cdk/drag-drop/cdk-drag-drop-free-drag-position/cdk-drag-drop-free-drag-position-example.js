/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * \@title Programmatically setting the free drag position
 */
export class CdkDragDropFreeDragPositionExample {
    constructor() {
        this.dragPosition = { x: 0, y: 0 };
    }
    /**
     * @return {?}
     */
    changePosition() {
        this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
    }
}
CdkDragDropFreeDragPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ngFactoryDef = function CdkDragDropFreeDragPositionExample_Factory(t) { return new (t || CdkDragDropFreeDragPositionExample)(); };
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ngComponentDef = i0.ɵɵdefineComponent({ type: CdkDragDropFreeDragPositionExample, selectors: [["cdk-drag-drop-free-drag-position-example"]], decls: 5, vars: 1, consts: [[3, "click"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragFreeDragPosition"]], template: function CdkDragDropFreeDragPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function CdkDragDropFreeDragPositionExample_Template_button_click_1_listener($event) { return ctx.changePosition(); });
        i0.ɵɵtext(2, "Change element position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtext(4, " Drag me around\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkDragFreeDragPosition", ctx.dragPosition);
    } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropFreeDragPositionExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CdkDragDropFreeDragPositionExample.prototype.dragPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVV4QyxNQUFNLE9BQU8sa0NBQWtDO0lBTC9DO1FBTUUsaUJBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0tBSzdCOzs7O0lBSEMsY0FBYztRQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQztJQUNqRixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsV0FBVyxFQUFFLCtDQUErQztnQkFDNUQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7YUFDNUQ7OzRIQUNZLGtDQUFrQztpRkFBbEMsa0NBQWtDO1FDVi9DLHlCQUNFO1FBQUEsaUNBQW1DO1FBQTNCLHFIQUFTLG9CQUFnQixJQUFDO1FBQUMsdUNBQXVCO1FBQUEsaUJBQVM7UUFDckUsaUJBQUk7UUFFSiw4QkFDRTtRQUFBLGlDQUNGO1FBQUEsaUJBQU07O1FBRjJCLGVBQXdDO1FBQXhDLDBEQUF3Qzs7bUNETTVELGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsV0FBVyxFQUFFLCtDQUErQztnQkFDNUQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7YUFDNUQ7Ozs7SUFFQywwREFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFByb2dyYW1tYXRpY2FsbHkgc2V0dGluZyB0aGUgZnJlZSBkcmFnIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlIHtcbiAgZHJhZ1Bvc2l0aW9uID0ge3g6IDAsIHk6IDB9O1xuXG4gIGNoYW5nZVBvc2l0aW9uKCkge1xuICAgIHRoaXMuZHJhZ1Bvc2l0aW9uID0ge3g6IHRoaXMuZHJhZ1Bvc2l0aW9uLnggKyA1MCwgeTogdGhpcy5kcmFnUG9zaXRpb24ueSArIDUwfTtcbiAgfVxufVxuIiwiPHA+XG4gIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZVBvc2l0aW9uKClcIj5DaGFuZ2UgZWxlbWVudCBwb3NpdGlvbjwvYnV0dG9uPlxuPC9wPlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiBjZGtEcmFnIFtjZGtEcmFnRnJlZURyYWdQb3NpdGlvbl09XCJkcmFnUG9zaXRpb25cIj5cbiAgRHJhZyBtZSBhcm91bmRcbjwvZGl2PlxuIl19