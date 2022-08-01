import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/legacy-form-field";
import * as i4 from "@angular/material/legacy-select";
import * as i5 from "@angular/material/legacy-core";
/** @title Select with custom trigger text */
export class SelectCustomTriggerExample {
    constructor() {
        this.toppings = new FormControl('');
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectCustomTriggerExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SelectCustomTriggerExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectCustomTriggerExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SelectCustomTriggerExample, selector: "select-custom-trigger-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Toppings</mat-label>\n  <mat-select [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value?.[0] || ''}}\n      <span *ngIf=\"(toppings.value?.length || 0) > 1\" class=\"example-additional-selection\">\n        (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "component", type: i3.MatLegacyFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLegacyLabel, selector: "mat-label" }, { kind: "component", type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "directive", type: i4.MatSelectTrigger, selector: "mat-select-trigger" }, { kind: "component", type: i5.MatLegacyOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SelectCustomTriggerExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-custom-trigger-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Toppings</mat-label>\n  <mat-select [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value?.[0] || ''}}\n      <span *ngIf=\"(toppings.value?.length || 0) > 1\" class=\"example-additional-selection\">\n        (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWN1c3RvbS10cmlnZ2VyL3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1jdXN0b20tdHJpZ2dlci9zZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRTNDLDZDQUE2QztBQU03QyxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTUUsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLGdCQUFXLEdBQWEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2pHOzt1SEFKWSwwQkFBMEI7MkdBQTFCLDBCQUEwQixxRUNUdkMseWpCQVlBOzJGREhhLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggY3VzdG9tIHRyaWdnZXIgdGV4dCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEN1c3RvbVRyaWdnZXJFeGFtcGxlIHtcbiAgdG9wcGluZ3MgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuXG4gIHRvcHBpbmdMaXN0OiBzdHJpbmdbXSA9IFsnRXh0cmEgY2hlZXNlJywgJ011c2hyb29tJywgJ09uaW9uJywgJ1BlcHBlcm9uaScsICdTYXVzYWdlJywgJ1RvbWF0byddO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+VG9wcGluZ3M8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInRvcHBpbmdzXCIgbXVsdGlwbGU+XG4gICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICAgIHt7dG9wcGluZ3MudmFsdWU/LlswXSB8fCAnJ319XG4gICAgICA8c3BhbiAqbmdJZj1cIih0b3BwaW5ncy52YWx1ZT8ubGVuZ3RoIHx8IDApID4gMVwiIGNsYXNzPVwiZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvblwiPlxuICAgICAgICAoK3t7KHRvcHBpbmdzLnZhbHVlPy5sZW5ndGggfHwgMCkgLSAxfX0ge3t0b3BwaW5ncy52YWx1ZT8ubGVuZ3RoID09PSAyID8gJ290aGVyJyA6ICdvdGhlcnMnfX0pXG4gICAgICA8L3NwYW4+XG4gICAgPC9tYXQtc2VsZWN0LXRyaWdnZXI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRvcHBpbmcgb2YgdG9wcGluZ0xpc3RcIiBbdmFsdWVdPVwidG9wcGluZ1wiPnt7dG9wcGluZ319PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19