import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCustomStepperWithoutFormExample, CustomStepper } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
import * as i0 from "@angular/core";
export { CdkCustomStepperWithoutFormExample, CustomStepper, };
var EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
];
var CdkStepperExamplesModule = /** @class */ (function () {
    function CdkStepperExamplesModule() {
    }
    CdkStepperExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CdkStepperModule,
                        CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkStepperExamplesModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
    CdkStepperExamplesModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); }, imports: [[
                CdkStepperModule,
                CommonModule,
            ]] });
    return CdkStepperExamplesModule;
}());
export { CdkStepperExamplesModule };
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
        CustomStepper], imports: [CdkStepperModule,
        CommonModule], exports: [CdkCustomStepperWithoutFormExample,
        CustomStepper] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkStepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkStepperModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zdGVwcGVyL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsRUFDZCxNQUFNLDJFQUEyRSxDQUFDOztBQUVuRixPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsR0FDZCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixrQ0FBa0M7SUFDbEMsYUFBYTtDQUNkLENBQUM7QUFFRjtJQUFBO0tBU0M7O2dCQVRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O3VFQUNZLHdCQUF3Qjs0SUFBeEIsd0JBQXdCLGtCQVAxQjtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFlBQVk7YUFDYjttQ0F0Qkg7Q0EyQkMsQUFURCxJQVNDO1NBRFksd0JBQXdCO29DQUF4Qix3QkFBd0IsbUJBWm5DLGtDQUFrQztRQUNsQyxhQUFhLGFBS1gsZ0JBQWdCO1FBQ2hCLFlBQVksYUFQZCxrQ0FBa0M7UUFDbEMsYUFBYTttQ0FXRix3QkFBd0I7Y0FScEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlclxufSBmcm9tICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlcixcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1N0ZXBwZXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==