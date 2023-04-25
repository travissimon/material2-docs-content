import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/table";
/**
 * @title Table with expandable rows
 */
class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TableExpandableRowsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TableExpandableRowsExample, selector: "table-expandable-rows-example", ngImport: i0, template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"expand\">\n    <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-icon-button aria-label=\"expand row\" (click)=\"(expandedElement = expandedElement === element ? null : element); $event.stopPropagation()\">\n        <mat-icon *ngIf=\"expandedElement !== element\">keyboard_arrow_down</mat-icon>\n        <mat-icon *ngIf=\"expandedElement === element\">keyboard_arrow_up</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplayWithExpand.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayWithExpand\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplayWithExpand;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i4.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i4.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i4.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i4.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i4.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i4.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i4.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i4.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i4.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i4.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }], animations: [
            trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] }); }
}
export { TableExpandableRowsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TableExpandableRowsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-expandable-rows-example', animations: [
                        trigger('detailExpand', [
                            state('collapsed', style({ height: '0px', minHeight: '0' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ], template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"expand\">\n    <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-icon-button aria-label=\"expand row\" (click)=\"(expandedElement = expandedElement === element ? null : element); $event.stopPropagation()\">\n        <mat-icon *ngIf=\"expandedElement !== element\">keyboard_arrow_down</mat-icon>\n        <mat-icon *ngIf=\"expandedElement === element\">keyboard_arrow_up</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplayWithExpand.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayWithExpand\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplayWithExpand;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"] }]
        }] });
const ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    },
    {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
    },
    {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
    },
    {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
    },
    {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
    },
    {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
    },
    {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
    },
    {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
    },
    {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
    },
    {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1leHBhbmRhYmxlLXJvd3MvdGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1leHBhbmRhYmxlLXJvd3MvdGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7OztBQUUvRTs7R0FFRztBQUNILE1BWWEsMEJBQTBCO0lBWnZDO1FBYUUsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVELCtCQUEwQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FFbkU7bUhBTFksMEJBQTBCO3VHQUExQiwwQkFBMEIscUVDbEJ2QywwMEVBNENBLHl5RURsQ2M7WUFDVixPQUFPLENBQUMsY0FBYyxFQUFFO2dCQUN0QixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQzFELEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUN0RixDQUFDO1NBQ0g7O1NBRVUsMEJBQTBCO2dHQUExQiwwQkFBMEI7a0JBWnRDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRzdCO3dCQUNWLE9BQU8sQ0FBQyxjQUFjLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQzs0QkFDMUQsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQzs0QkFDdkMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3lCQUN0RixDQUFDO3FCQUNIOztBQWlCSCxNQUFNLFlBQVksR0FBc0I7SUFDdEM7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUU7d0ZBQ3VFO0tBQ3JGO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7NkZBRTRFO0tBQzFGO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLEtBQUs7UUFDYixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7Z0NBRWU7S0FDN0I7SUFDRDtRQUNFLFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7a0VBRWlEO0tBQy9EO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRTs7NEVBRTJEO0tBQ3pFO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRTs7MkNBRTBCO0tBQ3hDO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUU7aUZBQ2dFO0tBQzlFO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRTs7NkZBRTRFO0tBQzFGO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLEdBQUc7UUFDWCxXQUFXLEVBQUU7O29CQUVHO0tBQ2pCO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLFdBQVcsRUFBRTs7dUNBRXNCO0tBQ3BDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBleHBhbmRhYmxlIHJvd3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe2hlaWdodDogJyonfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVFeHBhbmRhYmxlUm93c0V4YW1wbGUge1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuICBjb2x1bW5zVG9EaXNwbGF5ID0gWyduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnLCAncG9zaXRpb24nXTtcbiAgY29sdW1uc1RvRGlzcGxheVdpdGhFeHBhbmQgPSBbLi4udGhpcy5jb2x1bW5zVG9EaXNwbGF5LCAnZXhwYW5kJ107XG4gIGV4cGFuZGVkRWxlbWVudDogUGVyaW9kaWNFbGVtZW50IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge1xuICAgIHBvc2l0aW9uOiAxLFxuICAgIG5hbWU6ICdIeWRyb2dlbicsXG4gICAgd2VpZ2h0OiAxLjAwNzksXG4gICAgc3ltYm9sOiAnSCcsXG4gICAgZGVzY3JpcHRpb246IGBIeWRyb2dlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgSCBhbmQgYXRvbWljIG51bWJlciAxLiBXaXRoIGEgc3RhbmRhcmRcbiAgICAgICAgYXRvbWljIHdlaWdodCBvZiAxLjAwOCwgaHlkcm9nZW4gaXMgdGhlIGxpZ2h0ZXN0IGVsZW1lbnQgb24gdGhlIHBlcmlvZGljIHRhYmxlLmAsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMixcbiAgICBuYW1lOiAnSGVsaXVtJyxcbiAgICB3ZWlnaHQ6IDQuMDAyNixcbiAgICBzeW1ib2w6ICdIZScsXG4gICAgZGVzY3JpcHRpb246IGBIZWxpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEhlIGFuZCBhdG9taWMgbnVtYmVyIDIuIEl0IGlzIGFcbiAgICAgICAgY29sb3JsZXNzLCBvZG9ybGVzcywgdGFzdGVsZXNzLCBub24tdG94aWMsIGluZXJ0LCBtb25hdG9taWMgZ2FzLCB0aGUgZmlyc3QgaW4gdGhlIG5vYmxlIGdhc1xuICAgICAgICBncm91cCBpbiB0aGUgcGVyaW9kaWMgdGFibGUuIEl0cyBib2lsaW5nIHBvaW50IGlzIHRoZSBsb3dlc3QgYW1vbmcgYWxsIHRoZSBlbGVtZW50cy5gLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDMsXG4gICAgbmFtZTogJ0xpdGhpdW0nLFxuICAgIHdlaWdodDogNi45NDEsXG4gICAgc3ltYm9sOiAnTGknLFxuICAgIGRlc2NyaXB0aW9uOiBgTGl0aGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTGkgYW5kIGF0b21pYyBudW1iZXIgMy4gSXQgaXMgYSBzb2Z0LFxuICAgICAgICBzaWx2ZXJ5LXdoaXRlIGFsa2FsaSBtZXRhbC4gVW5kZXIgc3RhbmRhcmQgY29uZGl0aW9ucywgaXQgaXMgdGhlIGxpZ2h0ZXN0IG1ldGFsIGFuZCB0aGVcbiAgICAgICAgbGlnaHRlc3Qgc29saWQgZWxlbWVudC5gLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDQsXG4gICAgbmFtZTogJ0JlcnlsbGl1bScsXG4gICAgd2VpZ2h0OiA5LjAxMjIsXG4gICAgc3ltYm9sOiAnQmUnLFxuICAgIGRlc2NyaXB0aW9uOiBgQmVyeWxsaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBCZSBhbmQgYXRvbWljIG51bWJlciA0LiBJdCBpcyBhXG4gICAgICAgIHJlbGF0aXZlbHkgcmFyZSBlbGVtZW50IGluIHRoZSB1bml2ZXJzZSwgdXN1YWxseSBvY2N1cnJpbmcgYXMgYSBwcm9kdWN0IG9mIHRoZSBzcGFsbGF0aW9uIG9mXG4gICAgICAgIGxhcmdlciBhdG9taWMgbnVjbGVpIHRoYXQgaGF2ZSBjb2xsaWRlZCB3aXRoIGNvc21pYyByYXlzLmAsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNSxcbiAgICBuYW1lOiAnQm9yb24nLFxuICAgIHdlaWdodDogMTAuODExLFxuICAgIHN5bWJvbDogJ0InLFxuICAgIGRlc2NyaXB0aW9uOiBgQm9yb24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEIgYW5kIGF0b21pYyBudW1iZXIgNS4gUHJvZHVjZWQgZW50aXJlbHlcbiAgICAgICAgYnkgY29zbWljIHJheSBzcGFsbGF0aW9uIGFuZCBzdXBlcm5vdmFlIGFuZCBub3QgYnkgc3RlbGxhciBudWNsZW9zeW50aGVzaXMsIGl0IGlzIGFcbiAgICAgICAgbG93LWFidW5kYW5jZSBlbGVtZW50IGluIHRoZSBTb2xhciBzeXN0ZW0gYW5kIGluIHRoZSBFYXJ0aCdzIGNydXN0LmAsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNixcbiAgICBuYW1lOiAnQ2FyYm9uJyxcbiAgICB3ZWlnaHQ6IDEyLjAxMDcsXG4gICAgc3ltYm9sOiAnQycsXG4gICAgZGVzY3JpcHRpb246IGBDYXJib24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEMgYW5kIGF0b21pYyBudW1iZXIgNi4gSXQgaXMgbm9ubWV0YWxsaWNcbiAgICAgICAgYW5kIHRldHJhdmFsZW504oCUbWFraW5nIGZvdXIgZWxlY3Ryb25zIGF2YWlsYWJsZSB0byBmb3JtIGNvdmFsZW50IGNoZW1pY2FsIGJvbmRzLiBJdCBiZWxvbmdzXG4gICAgICAgIHRvIGdyb3VwIDE0IG9mIHRoZSBwZXJpb2RpYyB0YWJsZS5gLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDcsXG4gICAgbmFtZTogJ05pdHJvZ2VuJyxcbiAgICB3ZWlnaHQ6IDE0LjAwNjcsXG4gICAgc3ltYm9sOiAnTicsXG4gICAgZGVzY3JpcHRpb246IGBOaXRyb2dlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTiBhbmQgYXRvbWljIG51bWJlciA3LiBJdCB3YXMgZmlyc3RcbiAgICAgICAgZGlzY292ZXJlZCBhbmQgaXNvbGF0ZWQgYnkgU2NvdHRpc2ggcGh5c2ljaWFuIERhbmllbCBSdXRoZXJmb3JkIGluIDE3NzIuYCxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA4LFxuICAgIG5hbWU6ICdPeHlnZW4nLFxuICAgIHdlaWdodDogMTUuOTk5NCxcbiAgICBzeW1ib2w6ICdPJyxcbiAgICBkZXNjcmlwdGlvbjogYE94eWdlbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTyBhbmQgYXRvbWljIG51bWJlciA4LiBJdCBpcyBhIG1lbWJlciBvZlxuICAgICAgICAgdGhlIGNoYWxjb2dlbiBncm91cCBvbiB0aGUgcGVyaW9kaWMgdGFibGUsIGEgaGlnaGx5IHJlYWN0aXZlIG5vbm1ldGFsLCBhbmQgYW4gb3hpZGl6aW5nXG4gICAgICAgICBhZ2VudCB0aGF0IHJlYWRpbHkgZm9ybXMgb3hpZGVzIHdpdGggbW9zdCBlbGVtZW50cyBhcyB3ZWxsIGFzIHdpdGggb3RoZXIgY29tcG91bmRzLmAsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogOSxcbiAgICBuYW1lOiAnRmx1b3JpbmUnLFxuICAgIHdlaWdodDogMTguOTk4NCxcbiAgICBzeW1ib2w6ICdGJyxcbiAgICBkZXNjcmlwdGlvbjogYEZsdW9yaW5lIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBGIGFuZCBhdG9taWMgbnVtYmVyIDkuIEl0IGlzIHRoZVxuICAgICAgICBsaWdodGVzdCBoYWxvZ2VuIGFuZCBleGlzdHMgYXMgYSBoaWdobHkgdG94aWMgcGFsZSB5ZWxsb3cgZGlhdG9taWMgZ2FzIGF0IHN0YW5kYXJkXG4gICAgICAgIGNvbmRpdGlvbnMuYCxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAxMCxcbiAgICBuYW1lOiAnTmVvbicsXG4gICAgd2VpZ2h0OiAyMC4xNzk3LFxuICAgIHN5bWJvbDogJ05lJyxcbiAgICBkZXNjcmlwdGlvbjogYE5lb24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE5lIGFuZCBhdG9taWMgbnVtYmVyIDEwLiBJdCBpcyBhIG5vYmxlIGdhcy5cbiAgICAgICAgTmVvbiBpcyBhIGNvbG9ybGVzcywgb2Rvcmxlc3MsIGluZXJ0IG1vbmF0b21pYyBnYXMgdW5kZXIgc3RhbmRhcmQgY29uZGl0aW9ucywgd2l0aCBhYm91dFxuICAgICAgICB0d28tdGhpcmRzIHRoZSBkZW5zaXR5IG9mIGFpci5gLFxuICB9LFxuXTtcbiIsIjx0YWJsZSBtYXQtdGFibGVcbiAgICAgICBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbXVsdGlUZW1wbGF0ZURhdGFSb3dzXG4gICAgICAgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwie3tjb2x1bW59fVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1RvRGlzcGxheVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7Y29sdW1ufX0gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnRbY29sdW1uXX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgYXJpYS1sYWJlbD1cInJvdyBhY3Rpb25zXCI+Jm5ic3A7PC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cImV4cGFuZCByb3dcIiAoY2xpY2spPVwiKGV4cGFuZGVkRWxlbWVudCA9IGV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCA/IG51bGwgOiBlbGVtZW50KTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImV4cGFuZGVkRWxlbWVudCAhPT0gZWxlbWVudFwiPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJleHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnRcIj5rZXlib2FyZF9hcnJvd191cDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEV4cGFuZGVkIENvbnRlbnQgQ29sdW1uIC0gVGhlIGRldGFpbCByb3cgaXMgbWFkZSB1cCBvZiB0aGlzIG9uZSBjb2x1bW4gdGhhdCBzcGFucyBhY3Jvc3MgYWxsIGNvbHVtbnMgLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZXhwYW5kZWREZXRhaWxcIj5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uc1RvRGlzcGxheVdpdGhFeHBhbmQubGVuZ3RoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRldGFpbFwiXG4gICAgICAgICAgIFtAZGV0YWlsRXhwYW5kXT1cImVsZW1lbnQgPT0gZXhwYW5kZWRFbGVtZW50ID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtZGlhZ3JhbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtcG9zaXRpb25cIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1zeW1ib2xcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtbmFtZVwiPiB7e2VsZW1lbnQubmFtZX19IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtd2VpZ2h0XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7e2VsZW1lbnQuZGVzY3JpcHRpb259fVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uXCI+IC0tIFdpa2lwZWRpYSA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zVG9EaXNwbGF5V2l0aEV4cGFuZFwiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgZWxlbWVudDsgY29sdW1uczogY29sdW1uc1RvRGlzcGxheVdpdGhFeHBhbmQ7XCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LXJvd1wiXG4gICAgICBbY2xhc3MuZXhhbXBsZS1leHBhbmRlZC1yb3ddPVwiZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50XCJcbiAgICAgIChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQgPyBudWxsIDogZWxlbWVudFwiPlxuICA8L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogWydleHBhbmRlZERldGFpbCddXCIgY2xhc3M9XCJleGFtcGxlLWRldGFpbC1yb3dcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==