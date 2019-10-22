(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/divider'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/divider', ['exports', '@angular/core', '@angular/material/divider', '@angular/material/list'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.divider = {}), global.ng.core, global.ng.material.divider, global.ng.material.list));
}(this, function (exports, i0, i2, i1) { 'use strict';

    /**
     * @title Basic divider
     */
    var DividerOverviewExample = /** @class */ (function () {
        function DividerOverviewExample() {
        }
        DividerOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'divider-overview-example',
                        templateUrl: 'divider-overview-example.html',
                        styleUrls: ['divider-overview-example.css'],
                    },] },
        ];
        DividerOverviewExample.ngFactoryDef = function DividerOverviewExample_Factory(t) { return new (t || DividerOverviewExample)(); };
        DividerOverviewExample.ngComponentDef = i0.ɵɵdefineComponent({ type: DividerOverviewExample, selectors: [["divider-overview-example"]], decls: 9, vars: 0, template: function DividerOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-list");
                i0.ɵɵelementStart(1, "mat-list-item");
                i0.ɵɵtext(2, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "mat-divider");
                i0.ɵɵelementStart(4, "mat-list-item");
                i0.ɵɵtext(5, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "mat-divider");
                i0.ɵɵelementStart(7, "mat-list-item");
                i0.ɵɵtext(8, "Item 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatList, i1.MatListItem, i2.MatDivider], styles: [""] });
        return DividerOverviewExample;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DividerOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'divider-overview-example',
                    templateUrl: 'divider-overview-example.html',
                    styleUrls: ['divider-overview-example.css'],
                }]
        }], null, null);

    var EXAMPLES = [
        DividerOverviewExample,
    ];
    var DividerExamplesModule = /** @class */ (function () {
        function DividerExamplesModule() {
        }
        DividerExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.MatDividerModule,
                            i1.MatListModule,
                        ],
                        declarations: EXAMPLES,
                    },] },
        ];
        DividerExamplesModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: DividerExamplesModule });
        DividerExamplesModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); }, imports: [[
                    i2.MatDividerModule,
                    i1.MatListModule,
                ]] });
        return DividerExamplesModule;
    }());
    /*@__PURE__*/ i0.ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerOverviewExample], imports: [i2.MatDividerModule,
            i1.MatListModule] });
    /*@__PURE__*/ i0.ɵsetClassMetadata(DividerExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i2.MatDividerModule,
                        i1.MatListModule,
                    ],
                    declarations: EXAMPLES,
                }]
        }], null, null);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DividerOverviewExample = DividerOverviewExample;
    exports.DividerExamplesModule = DividerExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-divider.umd.js.map
