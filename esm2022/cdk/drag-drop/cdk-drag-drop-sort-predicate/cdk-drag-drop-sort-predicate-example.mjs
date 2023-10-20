import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop sort predicate
 */
export class CdkDragDropSortPredicateExample {
    constructor() {
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    }
    drop(event) {
        moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
    /**
     * Predicate function that only allows even numbers to be
     * sorted into even indices and odd numbers at odd indices.
     */
    sortPredicate(index, item) {
        return (index + 1) % 2 === item.data % 2;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkDragDropSortPredicateExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: CdkDragDropSortPredicateExample, isStandalone: true, selector: "cdk-drag-drop-sort-predicate-example", ngImport: i0, template: "<div\n  cdkDropList\n  class=\"example-list\"\n  (cdkDropListDropped)=\"drop($event)\"\n  [cdkDropListSortPredicate]=\"sortPredicate\">\n  <div\n    class=\"example-box\"\n    *ngFor=\"let number of numbers\"\n    [cdkDragData]=\"number\"\n    cdkDrag>{{number}}</div>\n</div>\n", styles: [".example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkDragDropSortPredicateExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-sort-predicate-example', standalone: true, imports: [CdkDropList, NgFor, CdkDrag], template: "<div\n  cdkDropList\n  class=\"example-list\"\n  (cdkDropListDropped)=\"drop($event)\"\n  [cdkDropListSortPredicate]=\"sortPredicate\">\n  <div\n    class=\"example-box\"\n    *ngFor=\"let number of numbers\"\n    [cdkDragData]=\"number\"\n    cdkDrag>{{number}}</div>\n</div>\n", styles: [".example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlL2Nkay1kcmFnLWRyb3Atc29ydC1wcmVkaWNhdGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQWMsZUFBZSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUY7O0dBRUc7QUFRSCxNQUFNLE9BQU8sK0JBQStCO0lBUDVDO1FBUUUsWUFBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBYXBDO0lBWEMsSUFBSSxDQUFDLEtBQTJCO1FBQzlCLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsS0FBYSxFQUFFLElBQXFCO1FBQ2hELE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7cUhBYlUsK0JBQStCO3lHQUEvQiwrQkFBK0IsZ0dDZDVDLHdSQVdBLHlrQ0RDWSxXQUFXLCtkQUFFLEtBQUssbUhBQUUsT0FBTzs7a0dBRTFCLCtCQUErQjtrQkFQM0MsU0FBUzsrQkFDRSxzQ0FBc0MsY0FHcEMsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCBDZGtEcmFnLCBDZGtEcm9wTGlzdH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBzb3J0IHByZWRpY2F0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3Atc29ydC1wcmVkaWNhdGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3Atc29ydC1wcmVkaWNhdGUtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka0Ryb3BMaXN0LCBOZ0ZvciwgQ2RrRHJhZ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wU29ydFByZWRpY2F0ZUV4YW1wbGUge1xuICBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHVua25vd24+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMubnVtYmVycywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBvbmx5IGFsbG93cyBldmVuIG51bWJlcnMgdG8gYmVcbiAgICogc29ydGVkIGludG8gZXZlbiBpbmRpY2VzIGFuZCBvZGQgbnVtYmVycyBhdCBvZGQgaW5kaWNlcy5cbiAgICovXG4gIHNvcnRQcmVkaWNhdGUoaW5kZXg6IG51bWJlciwgaXRlbTogQ2RrRHJhZzxudW1iZXI+KSB7XG4gICAgcmV0dXJuIChpbmRleCArIDEpICUgMiA9PT0gaXRlbS5kYXRhICUgMjtcbiAgfVxufVxuIiwiPGRpdlxuICBjZGtEcm9wTGlzdFxuICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCJcbiAgW2Nka0Ryb3BMaXN0U29ydFByZWRpY2F0ZV09XCJzb3J0UHJlZGljYXRlXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICAqbmdGb3I9XCJsZXQgbnVtYmVyIG9mIG51bWJlcnNcIlxuICAgIFtjZGtEcmFnRGF0YV09XCJudW1iZXJcIlxuICAgIGNka0RyYWc+e3tudW1iZXJ9fTwvZGl2PlxuPC9kaXY+XG4iXX0=