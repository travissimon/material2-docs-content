/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableExpandableRowsExample_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r45, " ");
} }
function TableExpandableRowsExample_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    const column_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r49[column_r45], " ");
} }
function TableExpandableRowsExample_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 7);
    i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_th_1_Template, 2, 1, "th", 8);
    i0.ɵɵtemplate(2, TableExpandableRowsExample_ng_container_1_td_2_Template, 2, 1, "td", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r45 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", column_r45);
} }
function TableExpandableRowsExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 15);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 16);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 17);
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span", 18);
    i0.ɵɵtext(14, " -- Wikipedia ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r51 = ctx.$implicit;
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵattribute("colspan", ctx_r41.columnsToDisplay.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@detailExpand", element_r51 == ctx_r41.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", element_r51.position, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.symbol, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.weight, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r51.description, " ");
} }
function TableExpandableRowsExample_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TableExpandableRowsExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 20);
    i0.ɵɵlistener("click", function TableExpandableRowsExample_tr_5_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r54); const element_r52 = ctx.$implicit; const ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.expandedElement = ctx_r53.expandedElement === element_r52 ? null : element_r52; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r52 = ctx.$implicit;
    const ctx_r43 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-expanded-row", ctx_r43.expandedElement === element_r52);
} }
function TableExpandableRowsExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
const _c0 = ["expandedDetail"];
/**
 * \@title Table with expandable rows
 */
export class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
}
TableExpandableRowsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-expandable-rows-example',
                styleUrls: ['table-expandable-rows-example.css'],
                templateUrl: 'table-expandable-rows-example.html',
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            },] },
];
/** @nocollapse */ TableExpandableRowsExample.ngFactoryDef = function TableExpandableRowsExample_Factory(t) { return new (t || TableExpandableRowsExample)(); };
/** @nocollapse */ TableExpandableRowsExample.ngComponentDef = i0.ɵɵdefineComponent({ type: TableExpandableRowsExample, selectors: [["table-expandable-rows-example"]], decls: 7, vars: 5, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-position"], [1, "example-element-symbol"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function TableExpandableRowsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableExpandableRowsExample_td_3_Template, 15, 7, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(4, TableExpandableRowsExample_tr_4_Template, 1, 0, "tr", 4);
        i0.ɵɵtemplate(5, TableExpandableRowsExample_tr_5_Template, 1, 1, "tr", 5);
        i0.ɵɵtemplate(6, TableExpandableRowsExample_tr_6_Template, 1, 0, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columnsToDisplay);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", _c0);
    } }, directives: [i1.MatTable, i2.NgForOf, i1.MatColumnDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCellDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}"], data: { animation: [
            trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ i0.ɵsetClassMetadata(TableExpandableRowsExample, [{
        type: Component,
        args: [{
                selector: 'table-expandable-rows-example',
                styleUrls: ['table-expandable-rows-example.css'],
                templateUrl: 'table-expandable-rows-example.html',
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TableExpandableRowsExample.prototype.dataSource;
    /** @type {?} */
    TableExpandableRowsExample.prototype.columnsToDisplay;
    /** @type {?} */
    TableExpandableRowsExample.prototype.expandedElement;
}
/**
 * @record
 */
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
    /** @type {?} */
    PeriodicElement.prototype.description;
}
/** @type {?} */
const ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtZXhwYW5kYWJsZS1yb3dzL3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWV4cGFuZGFibGUtcm93cy90YWJsZS1leHBhbmRhYmxlLXJvd3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0lDRzNFLDZCQUF1QztJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCwyQ0FBVzs7O0lBQ2xELDhCQUF3QztJQUFBLFlBQW9CO0lBQUEsaUJBQUs7Ozs7SUFBekIsZUFBb0I7SUFBcEIsd0RBQW9COzs7SUFGOUQsZ0NBQ0U7SUFBQSx3RkFBdUM7SUFDdkMsd0ZBQXdDO0lBQzFDLDBCQUFlOzs7SUFIRCxvREFBeUI7OztJQU9yQyw4QkFDRTtJQUFBLCtCQUVFO0lBQUEsK0JBQ0U7SUFBQSwrQkFBdUM7SUFBQSxZQUFxQjtJQUFBLGlCQUFNO0lBQ2xFLCtCQUFxQztJQUFBLFlBQW1CO0lBQUEsaUJBQU07SUFDOUQsK0JBQW1DO0lBQUEsWUFBaUI7SUFBQSxpQkFBTTtJQUMxRCwrQkFBcUM7SUFBQSxhQUFtQjtJQUFBLGlCQUFNO0lBQ2hFLGlCQUFNO0lBQ04sZ0NBQ0U7SUFBQSxhQUNBO0lBQUEsaUNBQXVEO0lBQUEsK0JBQWE7SUFBQSxp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SSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFOzs2RkFFNEU7S0FDMUYsRUFBRTtRQUNELFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRTs7b0JBRUc7S0FDakIsRUFBRTtRQUNELFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFOzt1Q0FFc0I7S0FDcEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBleHBhbmRhYmxlIHJvd3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe2hlaWdodDogJyonfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVFeHBhbmRhYmxlUm93c0V4YW1wbGUge1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuICBjb2x1bW5zVG9EaXNwbGF5ID0gWyduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnLCAncG9zaXRpb24nXTtcbiAgZXhwYW5kZWRFbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7XG4gICAgcG9zaXRpb246IDEsXG4gICAgbmFtZTogJ0h5ZHJvZ2VuJyxcbiAgICB3ZWlnaHQ6IDEuMDA3OSxcbiAgICBzeW1ib2w6ICdIJyxcbiAgICBkZXNjcmlwdGlvbjogYEh5ZHJvZ2VuIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBIIGFuZCBhdG9taWMgbnVtYmVyIDEuIFdpdGggYSBzdGFuZGFyZFxuICAgICAgICBhdG9taWMgd2VpZ2h0IG9mIDEuMDA4LCBoeWRyb2dlbiBpcyB0aGUgbGlnaHRlc3QgZWxlbWVudCBvbiB0aGUgcGVyaW9kaWMgdGFibGUuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDIsXG4gICAgbmFtZTogJ0hlbGl1bScsXG4gICAgd2VpZ2h0OiA0LjAwMjYsXG4gICAgc3ltYm9sOiAnSGUnLFxuICAgIGRlc2NyaXB0aW9uOiBgSGVsaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBIZSBhbmQgYXRvbWljIG51bWJlciAyLiBJdCBpcyBhXG4gICAgICAgIGNvbG9ybGVzcywgb2Rvcmxlc3MsIHRhc3RlbGVzcywgbm9uLXRveGljLCBpbmVydCwgbW9uYXRvbWljIGdhcywgdGhlIGZpcnN0IGluIHRoZSBub2JsZSBnYXNcbiAgICAgICAgZ3JvdXAgaW4gdGhlIHBlcmlvZGljIHRhYmxlLiBJdHMgYm9pbGluZyBwb2ludCBpcyB0aGUgbG93ZXN0IGFtb25nIGFsbCB0aGUgZWxlbWVudHMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDMsXG4gICAgbmFtZTogJ0xpdGhpdW0nLFxuICAgIHdlaWdodDogNi45NDEsXG4gICAgc3ltYm9sOiAnTGknLFxuICAgIGRlc2NyaXB0aW9uOiBgTGl0aGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTGkgYW5kIGF0b21pYyBudW1iZXIgMy4gSXQgaXMgYSBzb2Z0LFxuICAgICAgICBzaWx2ZXJ5LXdoaXRlIGFsa2FsaSBtZXRhbC4gVW5kZXIgc3RhbmRhcmQgY29uZGl0aW9ucywgaXQgaXMgdGhlIGxpZ2h0ZXN0IG1ldGFsIGFuZCB0aGVcbiAgICAgICAgbGlnaHRlc3Qgc29saWQgZWxlbWVudC5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNCxcbiAgICBuYW1lOiAnQmVyeWxsaXVtJyxcbiAgICB3ZWlnaHQ6IDkuMDEyMixcbiAgICBzeW1ib2w6ICdCZScsXG4gICAgZGVzY3JpcHRpb246IGBCZXJ5bGxpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEJlIGFuZCBhdG9taWMgbnVtYmVyIDQuIEl0IGlzIGFcbiAgICAgICAgcmVsYXRpdmVseSByYXJlIGVsZW1lbnQgaW4gdGhlIHVuaXZlcnNlLCB1c3VhbGx5IG9jY3VycmluZyBhcyBhIHByb2R1Y3Qgb2YgdGhlIHNwYWxsYXRpb24gb2ZcbiAgICAgICAgbGFyZ2VyIGF0b21pYyBudWNsZWkgdGhhdCBoYXZlIGNvbGxpZGVkIHdpdGggY29zbWljIHJheXMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDUsXG4gICAgbmFtZTogJ0Jvcm9uJyxcbiAgICB3ZWlnaHQ6IDEwLjgxMSxcbiAgICBzeW1ib2w6ICdCJyxcbiAgICBkZXNjcmlwdGlvbjogYEJvcm9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBCIGFuZCBhdG9taWMgbnVtYmVyIDUuIFByb2R1Y2VkIGVudGlyZWx5XG4gICAgICAgIGJ5IGNvc21pYyByYXkgc3BhbGxhdGlvbiBhbmQgc3VwZXJub3ZhZSBhbmQgbm90IGJ5IHN0ZWxsYXIgbnVjbGVvc3ludGhlc2lzLCBpdCBpcyBhXG4gICAgICAgIGxvdy1hYnVuZGFuY2UgZWxlbWVudCBpbiB0aGUgU29sYXIgc3lzdGVtIGFuZCBpbiB0aGUgRWFydGgncyBjcnVzdC5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNixcbiAgICBuYW1lOiAnQ2FyYm9uJyxcbiAgICB3ZWlnaHQ6IDEyLjAxMDcsXG4gICAgc3ltYm9sOiAnQycsXG4gICAgZGVzY3JpcHRpb246IGBDYXJib24gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEMgYW5kIGF0b21pYyBudW1iZXIgNi4gSXQgaXMgbm9ubWV0YWxsaWNcbiAgICAgICAgYW5kIHRldHJhdmFsZW504oCUbWFraW5nIGZvdXIgZWxlY3Ryb25zIGF2YWlsYWJsZSB0byBmb3JtIGNvdmFsZW50IGNoZW1pY2FsIGJvbmRzLiBJdCBiZWxvbmdzXG4gICAgICAgIHRvIGdyb3VwIDE0IG9mIHRoZSBwZXJpb2RpYyB0YWJsZS5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogNyxcbiAgICBuYW1lOiAnTml0cm9nZW4nLFxuICAgIHdlaWdodDogMTQuMDA2NyxcbiAgICBzeW1ib2w6ICdOJyxcbiAgICBkZXNjcmlwdGlvbjogYE5pdHJvZ2VuIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBOIGFuZCBhdG9taWMgbnVtYmVyIDcuIEl0IHdhcyBmaXJzdFxuICAgICAgICBkaXNjb3ZlcmVkIGFuZCBpc29sYXRlZCBieSBTY290dGlzaCBwaHlzaWNpYW4gRGFuaWVsIFJ1dGhlcmZvcmQgaW4gMTc3Mi5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogOCxcbiAgICBuYW1lOiAnT3h5Z2VuJyxcbiAgICB3ZWlnaHQ6IDE1Ljk5OTQsXG4gICAgc3ltYm9sOiAnTycsXG4gICAgZGVzY3JpcHRpb246IGBPeHlnZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE8gYW5kIGF0b21pYyBudW1iZXIgOC4gSXQgaXMgYSBtZW1iZXIgb2ZcbiAgICAgICAgIHRoZSBjaGFsY29nZW4gZ3JvdXAgb24gdGhlIHBlcmlvZGljIHRhYmxlLCBhIGhpZ2hseSByZWFjdGl2ZSBub25tZXRhbCwgYW5kIGFuIG94aWRpemluZ1xuICAgICAgICAgYWdlbnQgdGhhdCByZWFkaWx5IGZvcm1zIG94aWRlcyB3aXRoIG1vc3QgZWxlbWVudHMgYXMgd2VsbCBhcyB3aXRoIG90aGVyIGNvbXBvdW5kcy5gXG4gIH0sIHtcbiAgICBwb3NpdGlvbjogOSxcbiAgICBuYW1lOiAnRmx1b3JpbmUnLFxuICAgIHdlaWdodDogMTguOTk4NCxcbiAgICBzeW1ib2w6ICdGJyxcbiAgICBkZXNjcmlwdGlvbjogYEZsdW9yaW5lIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBGIGFuZCBhdG9taWMgbnVtYmVyIDkuIEl0IGlzIHRoZVxuICAgICAgICBsaWdodGVzdCBoYWxvZ2VuIGFuZCBleGlzdHMgYXMgYSBoaWdobHkgdG94aWMgcGFsZSB5ZWxsb3cgZGlhdG9taWMgZ2FzIGF0IHN0YW5kYXJkXG4gICAgICAgIGNvbmRpdGlvbnMuYFxuICB9LCB7XG4gICAgcG9zaXRpb246IDEwLFxuICAgIG5hbWU6ICdOZW9uJyxcbiAgICB3ZWlnaHQ6IDIwLjE3OTcsXG4gICAgc3ltYm9sOiAnTmUnLFxuICAgIGRlc2NyaXB0aW9uOiBgTmVvbiBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgTmUgYW5kIGF0b21pYyBudW1iZXIgMTAuIEl0IGlzIGEgbm9ibGUgZ2FzLlxuICAgICAgICBOZW9uIGlzIGEgY29sb3JsZXNzLCBvZG9ybGVzcywgaW5lcnQgbW9uYXRvbWljIGdhcyB1bmRlciBzdGFuZGFyZCBjb25kaXRpb25zLCB3aXRoIGFib3V0XG4gICAgICAgIHR3by10aGlyZHMgdGhlIGRlbnNpdHkgb2YgYWlyLmBcbiAgfSxcbl07XG4iLCI8dGFibGUgbWF0LXRhYmxlXG4gICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG11bHRpVGVtcGxhdGVEYXRhUm93c1xuICAgICAgIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInt7Y29sdW1ufX1cIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNUb0Rpc3BsYXlcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbHVtbn19IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2NvbHVtbl19fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEV4cGFuZGVkIENvbnRlbnQgQ29sdW1uIC0gVGhlIGRldGFpbCByb3cgaXMgbWFkZSB1cCBvZiB0aGlzIG9uZSBjb2x1bW4gdGhhdCBzcGFucyBhY3Jvc3MgYWxsIGNvbHVtbnMgLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZXhwYW5kZWREZXRhaWxcIj5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uc1RvRGlzcGxheS5sZW5ndGhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtZGV0YWlsXCJcbiAgICAgICAgICAgW0BkZXRhaWxFeHBhbmRdPVwiZWxlbWVudCA9PSBleHBhbmRlZEVsZW1lbnQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1kaWFncmFtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1wb3NpdGlvblwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LXN5bWJvbFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1uYW1lXCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC13ZWlnaHRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHt7ZWxlbWVudC5kZXNjcmlwdGlvbn19XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb25cIj4gLS0gV2lraXBlZGlhIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImNvbHVtbnNUb0Rpc3BsYXlcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IGVsZW1lbnQ7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXk7XCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LXJvd1wiXG4gICAgICBbY2xhc3MuZXhhbXBsZS1leHBhbmRlZC1yb3ddPVwiZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50XCJcbiAgICAgIChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQgPyBudWxsIDogZWxlbWVudFwiPlxuICA8L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogWydleHBhbmRlZERldGFpbCddXCIgY2xhc3M9XCJleGFtcGxlLWRldGFpbC1yb3dcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==