import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropDisabledSortingExample_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r19);
} }
function CdkDragDropDisabledSortingExample_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r20);
} }
/**
 * @title Drag&Drop disabled sorting
 */
var CdkDragDropDisabledSortingExample = /** @class */ (function () {
    function CdkDragDropDisabledSortingExample() {
        this.items = [
            'Carrots',
            'Tomatoes',
            'Onions',
            'Apples',
            'Avocados'
        ];
        this.basket = [
            'Oranges',
            'Bananas',
            'Cucumbers'
        ];
    }
    CdkDragDropDisabledSortingExample.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    CdkDragDropDisabledSortingExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-disabled-sorting-example',
                    templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
                    styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
                },] },
    ];
    CdkDragDropDisabledSortingExample.ngFactoryDef = function CdkDragDropDisabledSortingExample_Factory(t) { return new (t || CdkDragDropDisabledSortingExample)(); };
    CdkDragDropDisabledSortingExample.ngComponentDef = i0.ɵɵdefineComponent({ type: CdkDragDropDisabledSortingExample, selectors: [["cdk-drag-drop-disabled-sorting-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropDisabledSortingExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "Available items");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(5, CdkDragDropDisabledSortingExample_div_5_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "h2");
            i0.ɵɵtext(8, "Shopping basket");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(10, CdkDragDropDisabledSortingExample_div_10_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.items);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.basket);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.basket);
        } }, directives: [i1.CdkDropListGroup, i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    return CdkDragDropDisabledSortingExample;
}());
export { CdkDragDropDisabledSortingExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropDisabledSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-disabled-sorting-example',
                templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
                styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7SUNTakYsOEJBQTREO0lBQUEsWUFBUTtJQUFBLGlCQUFNOzs7SUFBZCxlQUFRO0lBQVIsOEJBQVE7OztJQVlwRSw4QkFBNkQ7SUFBQSxZQUFRO0lBQUEsaUJBQU07OztJQUFkLGVBQVE7SUFBUiw4QkFBUTs7QURuQjNFOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFVBQUssR0FBRztZQUNOLFNBQVM7WUFDVCxVQUFVO1lBQ1YsUUFBUTtZQUNSLFFBQVE7WUFDUixVQUFVO1NBQ1gsQ0FBQztRQUVGLFdBQU0sR0FBRztZQUNQLFNBQVM7WUFDVCxTQUFTO1lBQ1QsV0FBVztTQUNaLENBQUM7S0FZSDtJQVZDLGdEQUFJLEdBQUosVUFBSyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsV0FBVyxFQUFFLDZDQUE2QztvQkFDMUQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7aUJBQzFEOzs4SEFDWSxpQ0FBaUM7b0ZBQWpDLGlDQUFpQztZQ1g5Qyw4QkFDRTtZQUFBLDhCQUNFO1lBQUEsMEJBQUk7WUFBQSwrQkFBZTtZQUFBLGlCQUFLO1lBRXhCLDhCQU1FO1lBREEsMklBQXNCLGdCQUFZLElBQUM7WUFDbkMsa0ZBQTREO1lBQzlELGlCQUFNO1lBQ1IsaUJBQU07WUFFTiw4QkFDRTtZQUFBLDBCQUFJO1lBQUEsK0JBQWU7WUFBQSxpQkFBSztZQUV4Qiw4QkFLRTtZQURBLDJJQUFzQixnQkFBWSxJQUFDO1lBQ25DLG9GQUE2RDtZQUMvRCxpQkFBTTtZQUNSLGlCQUFNO1lBQ1IsaUJBQU07O1lBbkJBLGVBQXlCO1lBQXpCLDJDQUF5QjtZQUlBLGVBQTBCO1lBQTFCLG1DQUEwQjtZQVNuRCxlQUEwQjtZQUExQiw0Q0FBMEI7WUFHRCxlQUEyQjtZQUEzQixvQ0FBMkI7OzRDRHRCMUQ7Q0FvQ0MsQUE5QkQsSUE4QkM7U0F6QlksaUNBQWlDO21DQUFqQyxpQ0FBaUM7Y0FMN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2FBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBkaXNhYmxlZCBzb3J0aW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcERpc2FibGVkU29ydGluZ0V4YW1wbGUge1xuICBpdGVtcyA9IFtcbiAgICAnQ2Fycm90cycsXG4gICAgJ1RvbWF0b2VzJyxcbiAgICAnT25pb25zJyxcbiAgICAnQXBwbGVzJyxcbiAgICAnQXZvY2Fkb3MnXG4gIF07XG5cbiAgYmFza2V0ID0gW1xuICAgICdPcmFuZ2VzJyxcbiAgICAnQmFuYW5hcycsXG4gICAgJ0N1Y3VtYmVycydcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2RrRHJvcExpc3RHcm91cD5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPGgyPkF2YWlsYWJsZSBpdGVtczwvaDI+XG5cbiAgICA8ZGl2XG4gICAgICBjZGtEcm9wTGlzdFxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJpdGVtc1wiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgICBjZGtEcm9wTGlzdFNvcnRpbmdEaXNhYmxlZFxuICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICA8aDI+U2hvcHBpbmcgYmFza2V0PC9oMj5cblxuICAgIDxkaXZcbiAgICAgIGNka0Ryb3BMaXN0XG4gICAgICBbY2RrRHJvcExpc3REYXRhXT1cImJhc2tldFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYmFza2V0XCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19