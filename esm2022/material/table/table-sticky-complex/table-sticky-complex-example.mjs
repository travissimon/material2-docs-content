import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/button-toggle";
import * as i3 from "@angular/material/table";
/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
export class TableStickyComplexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TableStickyComplexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: TableStickyComplexExample, isStandalone: true, selector: "table-sticky-complex-example", ngImport: i0, template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\n  <table mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      <td mat-footer-cell *matFooterCellDef> Position Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      <td mat-footer-cell *matFooterCellDef> Name Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\n      <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\n      <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\n  </table>\n</section>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-mdc-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-mdc-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i3.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i3.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i3.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TableStickyComplexExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-complex-example', standalone: true, imports: [MatButtonModule, MatButtonToggleModule, NgFor, MatTableModule], template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\n  <table mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      <td mat-footer-cell *matFooterCellDef> Position Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      <td mat-footer-cell *matFooterCellDef> Name Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\n      <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\n      <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\n  </table>\n</section>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-mdc-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-mdc-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"] }]
        }], ctorParameters: function () { return []; } });
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWNvbXBsZXgtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXN0aWNreS1jb21wbGV4L3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zdGlja3ktY29tcGxleC90YWJsZS1zdGlja3ktY29tcGxleC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUF1QixxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzVGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRXpEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHlCQUF5QjtJQU1wQztRQUxBLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsWUFBWSxDQUFDO1FBRTFCLFdBQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQywwRkFBMEY7UUFDMUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLFFBQVEsQ0FBQyxpQkFBdUMsRUFBRSxFQUFVO1FBQzFELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7OEdBcEJVLHlCQUF5QjtrR0FBekIseUJBQXlCLHdGQ2hCdEMsNnNIQThFQSwyeEJEaEVZLGVBQWUsMk5BQUUscUJBQXFCLHVoQkFBRSxLQUFLLGtIQUFFLGNBQWM7OzJGQUU1RCx5QkFBeUI7a0JBUHJDLFNBQVM7K0JBQ0UsOEJBQThCLGNBRzVCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDOztBQWdDMUUsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlR3JvdXAsIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGVzIHdpdGggdG9nZ2xlLWFibGUgc3RpY2t5IGhlYWRlcnMsIGZvb3RlcnMsIGFuZCBjb2x1bW5zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXN0aWNreS1jb21wbGV4LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtc3RpY2t5LWNvbXBsZXgtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zdGlja3ktY29tcGxleC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsIE5nRm9yLCBNYXRUYWJsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU3RpY2t5Q29tcGxleEV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuXG4gIHRhYmxlcyA9IFswXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoID0gMjQ7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmZpbGwoJ2ZpbGxlcicpO1xuXG4gICAgLy8gVGhlIGZpcnN0IHR3byBjb2x1bW5zIHNob3VsZCBiZSBwb3NpdGlvbiBhbmQgbmFtZTsgdGhlIGxhc3QgdHdvIGNvbHVtbnM6IHdlaWdodCwgc3ltYm9sXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zWzBdID0gJ3Bvc2l0aW9uJztcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNbMV0gPSAnbmFtZSc7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zWzIyXSA9ICd3ZWlnaHQnO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1syM10gPSAnc3ltYm9sJztcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBidXR0b24gdG9nZ2xlIGdyb3VwIGNvbnRhaW5zIHRoZSBpZCBhcyBhbiBhY3RpdmUgdmFsdWUuICovXG4gIGlzU3RpY2t5KGJ1dHRvblRvZ2dsZUdyb3VwOiBNYXRCdXR0b25Ub2dnbGVHcm91cCwgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiAoYnV0dG9uVG9nZ2xlR3JvdXAudmFsdWUgfHwgW10pLmluZGV4T2YoaWQpICE9PSAtMTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG4iLCI8ZGl2PlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJ0YWJsZXMucHVzaCh0YWJsZXMubGVuZ3RoKVwiPkFkZCB0YWJsZTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJ0YWJsZXMucG9wKClcIj5SZW1vdmUgdGFibGU8L2J1dHRvbj5cbjwvZGl2PlxuXG48ZGl2PlxuICBTdGlja3kgSGVhZGVyczpcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG11bHRpcGxlIFt2YWx1ZV09XCJbJ2hlYWRlci0xJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3N0aWNreUhlYWRlcnM9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtc3RpY2t5LXRvZ2dsZS1ncm91cFwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImhlYWRlci0xXCI+IFJvdyAxIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaGVhZGVyLTJcIj4gUm93IDIgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvZGl2PlxuXG48ZGl2PlxuICBTdGlja3kgRm9vdGVyczpcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG11bHRpcGxlIFt2YWx1ZV09XCJbJ2Zvb3Rlci0xJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3N0aWNreUZvb3RlcnM9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtc3RpY2t5LXRvZ2dsZS1ncm91cFwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImZvb3Rlci0xXCI+IFJvdyAxIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZm9vdGVyLTJcIj4gUm93IDIgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvZGl2PlxuXG48ZGl2PlxuICBTdGlja3kgQ29sdW1uczpcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG11bHRpcGxlIFt2YWx1ZV09XCJbJ3Bvc2l0aW9uJywgJ3N5bWJvbCddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICNzdGlja3lDb2x1bW5zPVwibWF0QnV0dG9uVG9nZ2xlR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXN0aWNreS10b2dnbGUtZ3JvdXBcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJwb3NpdGlvblwiPiBQb3NpdGlvbiA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIm5hbWVcIj4gTmFtZSA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIndlaWdodFwiPiBXZWlnaHQgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJzeW1ib2xcIj4gU3ltYm9sIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48L2Rpdj5cblxuPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lciBtYXQtZWxldmF0aW9uLXo4XCIgdGFiaW5kZXg9XCIwXCI+XG4gIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiICpuZ0Zvcj1cImxldCB0YWJsZSBvZiB0YWJsZXNcIj5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCIgW3N0aWNreV09XCJpc1N0aWNreShzdGlja3lDb2x1bW5zLCAncG9zaXRpb24nKVwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gUG9zaXRpb24gPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gICAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBQb3NpdGlvbiBGb290ZXIgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiIFtzdGlja3ldPVwiaXNTdGlja3koc3RpY2t5Q29sdW1ucywgJ25hbWUnKVwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICAgICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gTmFtZSBGb290ZXIgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCIgW3N0aWNreUVuZF09XCJpc1N0aWNreShzdGlja3lDb2x1bW5zLCAnd2VpZ2h0JylcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvdGQ+XG4gICAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBXZWlnaHQgRm9vdGVyIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiIFtzdGlja3lFbmRdPVwiaXNTdGlja3koc3RpY2t5Q29sdW1ucywgJ3N5bWJvbCcpXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICAgICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gU3ltYm9sIEZvb3RlciA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJmaWxsZXJcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEZpbGxlciBoZWFkZXIgY2VsbCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4gRmlsbGVyIGRhdGEgY2VsbCA8L3RkPlxuICAgICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gRmlsbGVyIGZvb3RlciBjZWxsIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogaXNTdGlja3koc3RpY2t5SGVhZGVycywgJ2hlYWRlci0xJylcIj48L3RyPlxuICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiBpc1N0aWNreShzdGlja3lIZWFkZXJzLCAnaGVhZGVyLTInKVwiPjwvdHI+XG5cbiAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gICAgPHRyIG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zOyBzdGlja3k6IGlzU3RpY2t5KHN0aWNreUZvb3RlcnMsICdmb290ZXItMScpXCI+PC90cj5cbiAgICA8dHIgbWF0LWZvb3Rlci1yb3cgKm1hdEZvb3RlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogaXNTdGlja3koc3RpY2t5Rm9vdGVycywgJ2Zvb3Rlci0yJylcIj48L3RyPlxuICA8L3RhYmxlPlxuPC9zZWN0aW9uPlxuIl19