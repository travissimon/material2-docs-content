import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
/**
 * @title Select in a reactive form
 */
export class SelectReactiveFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' },
        ];
        this.foodControl = new FormControl(this.foods[2].value);
        this.carControl = new FormControl(this.cars[1].value);
        this.form = new FormGroup({
            food: this.foodControl,
            car: this.carControl,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: SelectReactiveFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0", type: SelectReactiveFormExample, isStandalone: true, selector: "select-reactive-form-example", ngImport: i0, template: "<form [formGroup]=\"form\">\n  <h4>mat-select</h4>\n  <mat-form-field>\n    <mat-label>Favorite Food</mat-label>\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\n      <mat-option>None</mat-option>\n      @for (food of foods; track food) {\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n  <p>Selected: {{foodControl.value}}</p>\n  <h4>Native select</h4>\n  <mat-form-field>\n    <mat-label>Favorite Car</mat-label>\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\n      <option value=\"\">None</option>\n      @for (car of cars; track car) {\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\n      }\n    </select>\n  </mat-form-field>\n  <p>Selected: {{carControl.value}}</p>\n</form>\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: SelectReactiveFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reactive-form-example', standalone: true, imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule], template: "<form [formGroup]=\"form\">\n  <h4>mat-select</h4>\n  <mat-form-field>\n    <mat-label>Favorite Food</mat-label>\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\n      <mat-option>None</mat-option>\n      @for (food of foods; track food) {\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n  <p>Selected: {{foodControl.value}}</p>\n  <h4>Native select</h4>\n  <mat-form-field>\n    <mat-label>Favorite Car</mat-label>\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\n      <option value=\"\">None</option>\n      @for (car of cars; track car) {\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\n      }\n    </select>\n  </mat-form-field>\n  <p>Selected: {{carControl.value}}</p>\n</form>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFZaEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8seUJBQXlCO0lBTnRDO1FBT0UsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO1NBQzNDLENBQUM7UUFDRixnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsZUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDckIsQ0FBQyxDQUFDO0tBQ0o7OEdBakJZLHlCQUF5QjtrR0FBekIseUJBQXlCLHdGQ3pCdEMsd3pCQXdCQSwyQ0REWSxXQUFXLHN5QkFBRSxtQkFBbUIsa1dBQUUsa0JBQWtCLDBTQUFFLGVBQWUsbXJCQUFFLGNBQWM7OzJGQUVwRix5QkFBeUI7a0JBTnJDLFNBQVM7K0JBQ0UsOEJBQThCLGNBRTVCLElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgU2VsZWN0IGluIGEgcmVhY3RpdmUgZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBNYXRJbnB1dE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFJlYWN0aXZlRm9ybUV4YW1wbGUge1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9LFxuICBdO1xuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICd2b2x2bycsIHZpZXdWYWx1ZTogJ1ZvbHZvJ30sXG4gICAge3ZhbHVlOiAnc2FhYicsIHZpZXdWYWx1ZTogJ1NhYWInfSxcbiAgICB7dmFsdWU6ICdtZXJjZWRlcycsIHZpZXdWYWx1ZTogJ01lcmNlZGVzJ30sXG4gIF07XG4gIGZvb2RDb250cm9sID0gbmV3IEZvcm1Db250cm9sKHRoaXMuZm9vZHNbMl0udmFsdWUpO1xuICBjYXJDb250cm9sID0gbmV3IEZvcm1Db250cm9sKHRoaXMuY2Fyc1sxXS52YWx1ZSk7XG4gIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBmb29kOiB0aGlzLmZvb2RDb250cm9sLFxuICAgIGNhcjogdGhpcy5jYXJDb250cm9sLFxuICB9KTtcbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICA8aDQ+bWF0LXNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZvb2Q8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiZm9vZENvbnRyb2xcIiBuYW1lPVwiZm9vZFwiPlxuICAgICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICAgIEBmb3IgKGZvb2Qgb2YgZm9vZHM7IHRyYWNrIGZvb2QpIHtcbiAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cImZvb2QudmFsdWVcIj57e2Zvb2Qudmlld1ZhbHVlfX08L21hdC1vcHRpb24+XG4gICAgICB9XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD5TZWxlY3RlZDoge3tmb29kQ29udHJvbC52YWx1ZX19PC9wPlxuICA8aDQ+TmF0aXZlIHNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxuICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbZm9ybUNvbnRyb2xdPVwiY2FyQ29udHJvbFwiIG5hbWU9XCJjYXJcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Ob25lPC9vcHRpb24+XG4gICAgICBAZm9yIChjYXIgb2YgY2FyczsgdHJhY2sgY2FyKSB7XG4gICAgICAgIDxvcHRpb24gW3ZhbHVlXT1cImNhci52YWx1ZVwiPnt7Y2FyLnZpZXdWYWx1ZX19PC9vcHRpb24+XG4gICAgICB9XG4gICAgPC9zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPlNlbGVjdGVkOiB7e2NhckNvbnRyb2wudmFsdWV9fTwvcD5cbjwvZm9ybT5cbiJdfQ==