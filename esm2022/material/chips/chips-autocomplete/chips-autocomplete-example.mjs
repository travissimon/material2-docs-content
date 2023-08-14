import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/core";
/**
 * @title Chips Autocomplete
 */
export class ChipsAutocompleteExample {
    constructor() {
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl('');
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.announcer = inject(LiveAnnouncer);
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allFruits.slice())));
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
        this.fruitCtrl.setValue(null);
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit}`);
        }
    }
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ChipsAutocompleteExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: ChipsAutocompleteExample, isStandalone: true, selector: "chips-autocomplete-example", viewQueries: [{ propertyName: "fruitInput", first: true, predicate: ["fruitInput"], descendants: true }], ngImport: i0, template: "<form>\n  <mat-form-field class=\"example-chip-list\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      <mat-chip-row *ngFor=\"let fruit of fruits\" (removed)=\"remove(fruit)\">\n        {{fruit}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"/>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n        {{fruit}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i3.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i3.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i3.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i5.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i5.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ChipsAutocompleteExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-autocomplete-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        NgFor,
                        MatIconModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        AsyncPipe,
                    ], template: "<form>\n  <mat-form-field class=\"example-chip-list\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      <mat-chip-row *ngFor=\"let fruit of fruits\" (removed)=\"remove(fruit)\">\n        {{fruit}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"/>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n        {{fruit}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { fruitInput: [{
                type: ViewChild,
                args: ['fruitInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQStCLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkcsT0FBTyxFQUFvQixjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRSxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFFaEQ7O0dBRUc7QUFpQkgsTUFBTSxPQUFPLHdCQUF3QjtJQVduQztRQVZB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT01NQSwgRU5URVJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCwgTWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRDaGlwSW5wdXRFdmVudCwgTWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtOZ0ZvciwgQXN5bmNQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtMaXZlQW5ub3VuY2VyfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIEF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBOZ0ZvcixcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEFzeW5jUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNBdXRvY29tcGxldGVFeGFtcGxlIHtcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xuICBmcnVpdEN0cmwgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBmaWx0ZXJlZEZydWl0czogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIGZydWl0czogc3RyaW5nW10gPSBbJ0xlbW9uJ107XG4gIGFsbEZydWl0czogc3RyaW5nW10gPSBbJ0FwcGxlJywgJ0xlbW9uJywgJ0xpbWUnLCAnT3JhbmdlJywgJ1N0cmF3YmVycnknXTtcblxuICBAVmlld0NoaWxkKCdmcnVpdElucHV0JykgZnJ1aXRJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBhbm5vdW5jZXIgPSBpbmplY3QoTGl2ZUFubm91bmNlcik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZEZydWl0cyA9IHRoaXMuZnJ1aXRDdHJsLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgbWFwKChmcnVpdDogc3RyaW5nIHwgbnVsbCkgPT4gKGZydWl0ID8gdGhpcy5fZmlsdGVyKGZydWl0KSA6IHRoaXMuYWxsRnJ1aXRzLnNsaWNlKCkpKSxcbiAgICApO1xuICB9XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnZhbHVlIHx8ICcnKS50cmltKCk7XG5cbiAgICAvLyBBZGQgb3VyIGZydWl0XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZydWl0cy5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcbiAgICBldmVudC5jaGlwSW5wdXQhLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZydWl0Q3RybC5zZXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHJlbW92ZShmcnVpdDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZydWl0cy5pbmRleE9mKGZydWl0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZydWl0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLmFubm91bmNlci5hbm5vdW5jZShgUmVtb3ZlZCAke2ZydWl0fWApO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkKGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mcnVpdHMucHVzaChldmVudC5vcHRpb24udmlld1ZhbHVlKTtcbiAgICB0aGlzLmZydWl0SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZnJ1aXRDdHJsLnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuYWxsRnJ1aXRzLmZpbHRlcihmcnVpdCA9PiBmcnVpdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cbn1cbiIsIjxmb3JtPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWNoaXAtbGlzdFwiPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgRnJ1aXRzPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1jaGlwLWdyaWQgI2NoaXBHcmlkIGFyaWEtbGFiZWw9XCJGcnVpdCBzZWxlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hpcC1yb3cgKm5nRm9yPVwibGV0IGZydWl0IG9mIGZydWl0c1wiIChyZW1vdmVkKT1cInJlbW92ZShmcnVpdClcIj5cbiAgICAgICAge3tmcnVpdH19XG4gICAgICAgIDxidXR0b24gbWF0Q2hpcFJlbW92ZSBbYXR0ci5hcmlhLWxhYmVsXT1cIidyZW1vdmUgJyArIGZydWl0XCI+XG4gICAgICAgICAgPG1hdC1pY29uPmNhbmNlbDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9tYXQtY2hpcC1yb3c+XG4gICAgPC9tYXQtY2hpcC1ncmlkPlxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk5ldyBGcnVpdC4uLlwiICNmcnVpdElucHV0IFtmb3JtQ29udHJvbF09XCJmcnVpdEN0cmxcIlxuICAgICAgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwR3JpZFwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCJcbiAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiLz5cbiAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiIChvcHRpb25TZWxlY3RlZCk9XCJzZWxlY3RlZCgkZXZlbnQpXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZnJ1aXQgb2YgZmlsdGVyZWRGcnVpdHMgfCBhc3luY1wiIFt2YWx1ZV09XCJmcnVpdFwiPlxuICAgICAgICB7e2ZydWl0fX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=