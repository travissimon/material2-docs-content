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
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
export class TableStickyComplexFlexExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TableStickyComplexFlexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: TableStickyComplexFlexExample, isStandalone: true, selector: "table-sticky-complex-flex-example", ngImport: i0, template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\n  <mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\n  </mat-table>\n</section>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-mdc-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-mdc-header-row, .mat-mdc-footer-row, .mat-mdc-row {\n  min-width: 1920px; /* 24 columns, 80px each */\n}\n\n.mat-mdc-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i3.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i3.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i3.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TableStickyComplexFlexExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-complex-flex-example', standalone: true, imports: [MatButtonModule, MatButtonToggleModule, NgFor, MatTableModule], template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\n  <mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\n  </mat-table>\n</section>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-mdc-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-mdc-header-row, .mat-mdc-footer-row, .mat-mdc-row {\n  min-width: 1920px; /* 24 columns, 80px each */\n}\n\n.mat-mdc-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-mdc-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC90YWJsZS1zdGlja3ktY29tcGxleC1mbGV4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zdGlja3ktY29tcGxleC1mbGV4L3RhYmxlLXN0aWNreS1jb21wbGV4LWZsZXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBdUIscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUV6RDs7R0FFRztBQVFILE1BQU0sT0FBTyw2QkFBNkI7SUFNeEM7UUFMQSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUUxQixXQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUdYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsMEZBQTBGO1FBQzFGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxRQUFRLENBQUMsaUJBQXVDLEVBQUUsRUFBVTtRQUMxRCxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzhHQXBCVSw2QkFBNkI7a0dBQTdCLDZCQUE2Qiw2RkNoQjFDLG8ySEE4RUEsNDRCRGhFWSxlQUFlLDJOQUFFLHFCQUFxQix1aEJBQUUsS0FBSyxrSEFBRSxjQUFjOzsyRkFFNUQsNkJBQTZCO2tCQVB6QyxTQUFTOytCQUNFLG1DQUFtQyxjQUdqQyxJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQzs7QUFnQzFFLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZUdyb3VwLCBNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKlxuICogQHRpdGxlIEZsZXgtbGF5b3V0IHRhYmxlcyB3aXRoIHRvZ2dsZS1hYmxlIHN0aWNreSBoZWFkZXJzLCBmb290ZXJzLCBhbmQgY29sdW1uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1zdGlja3ktY29tcGxleC1mbGV4LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXN0aWNreS1jb21wbGV4LWZsZXgtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLCBOZ0ZvciwgTWF0VGFibGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVN0aWNreUNvbXBsZXhGbGV4RXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG5cbiAgdGFibGVzID0gWzBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGggPSAyNDtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsbCgnZmlsbGVyJyk7XG5cbiAgICAvLyBUaGUgZmlyc3QgdHdvIGNvbHVtbnMgc2hvdWxkIGJlIHBvc2l0aW9uIGFuZCBuYW1lOyB0aGUgbGFzdCB0d28gY29sdW1uczogd2VpZ2h0LCBzeW1ib2xcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNbMF0gPSAncG9zaXRpb24nO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1sxXSA9ICduYW1lJztcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNbMjJdID0gJ3dlaWdodCc7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zWzIzXSA9ICdzeW1ib2wnO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGJ1dHRvbiB0b2dnbGUgZ3JvdXAgY29udGFpbnMgdGhlIGlkIGFzIGFuIGFjdGl2ZSB2YWx1ZS4gKi9cbiAgaXNTdGlja3koYnV0dG9uVG9nZ2xlR3JvdXA6IE1hdEJ1dHRvblRvZ2dsZUdyb3VwLCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChidXR0b25Ub2dnbGVHcm91cC52YWx1ZSB8fCBbXSkuaW5kZXhPZihpZCkgIT09IC0xO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcbiIsIjxkaXY+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInRhYmxlcy5wdXNoKHRhYmxlcy5sZW5ndGgpXCI+QWRkIHRhYmxlPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInRhYmxlcy5wb3AoKVwiPlJlbW92ZSB0YWJsZTwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBIZWFkZXJzOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsnaGVhZGVyLTEnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RpY2t5SGVhZGVycz1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGlja3ktdG9nZ2xlLWdyb3VwXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaGVhZGVyLTFcIj4gUm93IDEgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJoZWFkZXItMlwiPiBSb3cgMiA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBGb290ZXJzOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsnZm9vdGVyLTEnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RpY2t5Rm9vdGVycz1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGlja3ktdG9nZ2xlLWdyb3VwXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZm9vdGVyLTFcIj4gUm93IDEgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJmb290ZXItMlwiPiBSb3cgMiA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBDb2x1bW5zOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsncG9zaXRpb24nLCAnc3ltYm9sJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3N0aWNreUNvbHVtbnM9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtc3RpY2t5LXRvZ2dsZS1ncm91cFwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInBvc2l0aW9uXCI+IFBvc2l0aW9uIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwibmFtZVwiPiBOYW1lIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwid2VpZ2h0XCI+IFdlaWdodCA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInN5bWJvbFwiPiBTeW1ib2wgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvZGl2PlxuXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejhcIiB0YWJpbmRleD1cIjBcIj5cbiAgPG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgKm5nRm9yPVwibGV0IHRhYmxlIG9mIHRhYmxlc1wiPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIiBbc3RpY2t5XT1cImlzU3RpY2t5KHN0aWNreUNvbHVtbnMsICdwb3NpdGlvbicpXCI+XG4gICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBQb3NpdGlvbiA8L21hdC1oZWFkZXItY2VsbD5cbiAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvbWF0LWNlbGw+XG4gICAgICA8bWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBQb3NpdGlvbiBGb290ZXIgPC9tYXQtZm9vdGVyLWNlbGw+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIiBbc3RpY2t5XT1cImlzU3RpY2t5KHN0aWNreUNvbHVtbnMsICduYW1lJylcIj5cbiAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvbWF0LWNlbGw+XG4gICAgICA8bWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBOYW1lIEZvb3RlciA8L21hdC1mb290ZXItY2VsbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCIgW3N0aWNreUVuZF09XCJpc1N0aWNreShzdGlja3lDb2x1bW5zLCAnd2VpZ2h0JylcIj5cbiAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L21hdC1oZWFkZXItY2VsbD5cbiAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L21hdC1jZWxsPlxuICAgICAgPG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gV2VpZ2h0IEZvb3RlciA8L21hdC1mb290ZXItY2VsbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCIgW3N0aWNreUVuZF09XCJpc1N0aWNreShzdGlja3lDb2x1bW5zLCAnc3ltYm9sJylcIj5cbiAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L21hdC1oZWFkZXItY2VsbD5cbiAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L21hdC1jZWxsPlxuICAgICAgPG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gU3ltYm9sIEZvb3RlciA8L21hdC1mb290ZXItY2VsbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZmlsbGVyXCI+XG4gICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBGaWxsZXIgaGVhZGVyIGNlbGwgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiBGaWxsZXIgZGF0YSBjZWxsIDwvbWF0LWNlbGw+XG4gICAgICA8bWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBGaWxsZXIgZm9vdGVyIGNlbGwgPC9tYXQtZm9vdGVyLWNlbGw+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogaXNTdGlja3koc3RpY2t5SGVhZGVycywgJ2hlYWRlci0xJylcIj48L21hdC1oZWFkZXItcm93PlxuICAgIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiBpc1N0aWNreShzdGlja3lIZWFkZXJzLCAnaGVhZGVyLTInKVwiPjwvbWF0LWhlYWRlci1yb3c+XG5cbiAgICA8bWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L21hdC1yb3c+XG5cbiAgICA8bWF0LWZvb3Rlci1yb3cgKm1hdEZvb3RlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogaXNTdGlja3koc3RpY2t5Rm9vdGVycywgJ2Zvb3Rlci0xJylcIj48L21hdC1mb290ZXItcm93PlxuICAgIDxtYXQtZm9vdGVyLXJvdyAqbWF0Rm9vdGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiBpc1N0aWNreShzdGlja3lGb290ZXJzLCAnZm9vdGVyLTInKVwiPjwvbWF0LWZvb3Rlci1yb3c+XG4gIDwvbWF0LXRhYmxlPlxuPC9zZWN0aW9uPlxuIl19