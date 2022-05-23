import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/list";
/**
 * @title List with single selection
 */
export class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSingleSelectionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: ListSingleSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSingleSelectionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: ListSingleSelectionExample, selector: "list-single-selection-example", ngImport: i0, template: "<mat-selection-list #shoes [multiple]=\"false\">\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\" [value]=\"shoe\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.selected[0]?.value}}\n</p>\n", styles: ["/** No styles for this example. */\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatSelectionList, selector: "mat-selection-list", inputs: ["disableRipple", "color", "compareWith", "disabled", "multiple"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i2.MatListOption, selector: "mat-list-option", inputs: ["disableRipple", "checkboxPosition", "color", "value", "disabled", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: ListSingleSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-single-selection-example', template: "<mat-selection-list #shoes [multiple]=\"false\">\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\" [value]=\"shoe\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.selected[0]?.value}}\n</p>\n", styles: ["/** No styles for this example. */\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFNRSxpQkFBWSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ2pGOzs0SEFGWSwwQkFBMEI7Z0hBQTFCLDBCQUEwQixxRUNWdkMsdVFBU0E7Z0dEQ2EsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNpbmdsZSBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTaW5nbGVTZWxlY3Rpb25FeGFtcGxlIHtcbiAgdHlwZXNPZlNob2VzOiBzdHJpbmdbXSA9IFsnQm9vdHMnLCAnQ2xvZ3MnLCAnTG9hZmVycycsICdNb2NjYXNpbnMnLCAnU25lYWtlcnMnXTtcbn1cbiIsIjxtYXQtc2VsZWN0aW9uLWxpc3QgI3Nob2VzIFttdWx0aXBsZV09XCJmYWxzZVwiPlxuICA8bWF0LWxpc3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBzaG9lIG9mIHR5cGVzT2ZTaG9lc1wiIFt2YWx1ZV09XCJzaG9lXCI+XG4gICAge3tzaG9lfX1cbiAgPC9tYXQtbGlzdC1vcHRpb24+XG48L21hdC1zZWxlY3Rpb24tbGlzdD5cblxuPHA+XG4gIE9wdGlvbiBzZWxlY3RlZDoge3tzaG9lcy5zZWxlY3RlZE9wdGlvbnMuc2VsZWN0ZWRbMF0/LnZhbHVlfX1cbjwvcD5cbiJdfQ==