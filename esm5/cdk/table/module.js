import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CdkTableBasicFlexExample } from './cdk-table-basic-flex/cdk-table-basic-flex-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
import * as i0 from "@angular/core";
export { CdkTableBasicExample, CdkTableBasicFlexExample, };
var EXAMPLES = [
    CdkTableBasicExample,
    CdkTableBasicFlexExample,
];
var CdkTableExamplesModule = /** @class */ (function () {
    function CdkTableExamplesModule() {
    }
    CdkTableExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkTableModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkTableExamplesModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: CdkTableExamplesModule });
    CdkTableExamplesModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); }, imports: [[
                CdkTableModule,
            ]] });
    return CdkTableExamplesModule;
}());
export { CdkTableExamplesModule };
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
        CdkTableBasicFlexExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableBasicFlexExample] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkTableExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90YWJsZS9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRS9FLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDekIsQ0FBQztBQUVGO0lBQUE7S0FRQzs7Z0JBUkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O3FFQUNZLHNCQUFzQjt3SUFBdEIsc0JBQXNCLGtCQU54QjtnQkFDUCxjQUFjO2FBQ2Y7aUNBbEJIO0NBdUJDLEFBUkQsSUFRQztTQURZLHNCQUFzQjtvQ0FBdEIsc0JBQXNCLG1CQVhqQyxvQkFBb0I7UUFDcEIsd0JBQXdCLGFBS3RCLGNBQWMsYUFOaEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjttQ0FVYixzQkFBc0I7Y0FQbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrVGFibGVCYXNpY0ZsZXhFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1iYXNpYy1mbGV4L2Nkay10YWJsZS1iYXNpYy1mbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUYWJsZUJhc2ljRXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtYmFzaWMvY2RrLXRhYmxlLWJhc2ljLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtUYWJsZUJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVCYXNpY0ZsZXhFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1RhYmxlQmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUJhc2ljRmxleEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUYWJsZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==