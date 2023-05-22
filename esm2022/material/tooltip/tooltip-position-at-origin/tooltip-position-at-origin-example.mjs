import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/forms";
/**
 * @title Basic tooltip
 */
class TooltipPositionAtOriginExample {
    constructor() {
        this.enabled = new FormControl(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipPositionAtOriginExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TooltipPositionAtOriginExample, isStandalone: true, selector: "tooltip-position-at-origin-example", ngImport: i0, template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
export { TooltipPositionAtOriginExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipPositionAtOriginExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-position-at-origin-example', standalone: true, imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, ReactiveFormsModule], template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQUV6RDs7R0FFRztBQUNILE1BT2EsOEJBQThCO0lBUDNDO1FBUUUsWUFBTyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzhHQUZZLDhCQUE4QjtrR0FBOUIsOEJBQThCLDhGQ2hCM0MsMFlBV0EsNEtER1ksZUFBZSwyUUFBRSxnQkFBZ0IsOEhBQUUsaUJBQWlCLGdMQUFFLFdBQVcsc0lBQUUsbUJBQW1COztTQUVyRiw4QkFBOEI7MkZBQTlCLDhCQUE4QjtrQkFQMUMsU0FBUzsrQkFDRSxvQ0FBb0MsY0FHbEMsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHRvb2x0aXBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtcG9zaXRpb24tYXQtb3JpZ2luLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBQb3NpdGlvbkF0T3JpZ2luRXhhbXBsZSB7XG4gIGVuYWJsZWQgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBjbGFzcz1cImRlbW8tYnV0dG9uXCJcbiAgICAgICAgbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXG4gICAgICAgIFttYXRUb29sdGlwUG9zaXRpb25BdE9yaWdpbl09XCJlbmFibGVkLnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB3aGVuIGZvY3VzZWQgb3IgaG92ZXJlZCBvdmVyXCI+XG4gIEFjdGlvblxuPC9idXR0b24+XG5cbjxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImVuYWJsZWRcIiBjbGFzcz1cImV4YW1wbGUtZW5hYmxlZC1jaGVja2JveFwiPlxuICBQb3NpdGlvbiBhdCBvcmlnaW4gZW5hYmxlZFxuPC9tYXQtY2hlY2tib3g+XG4iXX0=