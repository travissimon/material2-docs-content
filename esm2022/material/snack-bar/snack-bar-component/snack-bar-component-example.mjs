import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
/**
 * @title Snack-bar with a custom component
 */
export class SnackBarComponentExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarComponentExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SnackBarComponentExample, isStandalone: true, selector: "snack-bar-component-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatSnackBarModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SnackBarComponentExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-component-example', standalone: true, imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule], template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
export class PizzaPartyComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: PizzaPartyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: PizzaPartyComponent, isStandalone: true, selector: "snack-bar-component-example-snack", ngImport: i0, template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n", styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: PizzaPartyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-component-example-snack', standalone: true, template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n", styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUVoRTs7R0FFRztBQVFILE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsWUFBb0IsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUYxQyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFdUIsQ0FBQztJQUU5QyxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRTtZQUNwRCxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUk7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FUVSx3QkFBd0I7a0dBQXhCLHdCQUF3Qix1RkNqQnJDLGlTQVFBLHFHRE9ZLGtCQUFrQiwwU0FBRSxXQUFXLGd4QkFBRSxjQUFjLDBXQUFFLGVBQWUsMk5BQUUsaUJBQWlCOzsyRkFFbEYsd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLDZCQUE2QixjQUczQixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQzs7QUEwQmhHLE1BQU0sT0FBTyxtQkFBbUI7OEdBQW5CLG1CQUFtQjtrR0FBbkIsbUJBQW1CLDZGRXpDaEMsZ0ZBR0E7OzJGRnNDYSxtQkFBbUI7a0JBWi9CLFNBQVM7K0JBQ0UsbUNBQW1DLGNBU2pDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNuYWNrQmFyLCBNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKipcbiAqIEB0aXRsZSBTbmFjay1iYXIgd2l0aCBhIGN1c3RvbSBjb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyQ29tcG9uZW50RXhhbXBsZSB7XG4gIGR1cmF0aW9uSW5TZWNvbmRzID0gNTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlblNuYWNrQmFyKCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFBpenphUGFydHlDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMCxcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2snLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICAgIGNvbG9yOiBob3RwaW5rO1xuICAgIH1cbiAgYCxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUGl6emFQYXJ0eUNvbXBvbmVudCB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNuYWNrIGJhciBkdXJhdGlvbiAoc2Vjb25kcyk8L21hdC1sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImR1cmF0aW9uSW5TZWNvbmRzXCIgbWF0SW5wdXQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlblNuYWNrQmFyKClcIiBhcmlhLWxhYmVsPVwiU2hvdyBhbiBleGFtcGxlIHNuYWNrLWJhclwiPlxuICBQaXp6YSBwYXJ0eVxuPC9idXR0b24+XG4iLCI8c3BhbiBjbGFzcz1cImV4YW1wbGUtcGl6emEtcGFydHlcIj5cbiAgUGl6emEgcGFydHkhISEg8J+NlVxuPC9zcGFuPlxuIl19