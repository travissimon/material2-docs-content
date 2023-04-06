import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/forms";
/**
 * @title Chips with form control
 */
class ChipsFormControlExample {
    constructor() {
        this.keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
        this.formControl = new FormControl(['angular']);
    }
    removeKeyword(keyword) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.keywords.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
    }
}
ChipsFormControlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsFormControlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: ChipsFormControlExample, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <i>Enter video keywords</i>\n</p>\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    <mat-chip-row *ngFor=\"let keyword of keywords\" (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n      <button matChipRemove aria-label=\"'remove ' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are entered:</b> {{formControl.value}}\n</p>", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i3.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i3.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
export { ChipsFormControlExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <i>Enter video keywords</i>\n</p>\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    <mat-chip-row *ngFor=\"let keyword of keywords\" (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n      <button matChipRemove aria-label=\"'remove ' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are entered:</b> {{formControl.value}}\n</p>", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFHM0M7O0dBRUc7QUFDSCxNQUthLHVCQUF1QjtJQUxwQztRQU1FLGFBQVEsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzlELGdCQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBb0I1QztJQWxCQyxhQUFhLENBQUMsT0FBZTtRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDLEtBQXdCO1FBQzFCLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QyxrQkFBa0I7UUFDbEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUVELHdCQUF3QjtRQUN4QixLQUFLLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7OzJIQXJCVSx1QkFBdUI7K0dBQXZCLHVCQUF1QixrRUNacEMsbzlCQXdCSTtTRFpTLHVCQUF1QjtrR0FBdkIsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgd2l0aCBmb3JtIGNvbnRyb2xcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRm9ybUNvbnRyb2xFeGFtcGxlIHtcbiAga2V5d29yZHMgPSBbJ2FuZ3VsYXInLCAnaG93LXRvJywgJ3R1dG9yaWFsJywgJ2FjY2Vzc2liaWxpdHknXTtcbiAgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woWydhbmd1bGFyJ10pO1xuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmtleXdvcmRzLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMua2V5d29yZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBhZGQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudmFsdWUgfHwgJycpLnRyaW0oKTtcblxuICAgIC8vIEFkZCBvdXIga2V5d29yZFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5rZXl3b3Jkcy5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcbiAgICBldmVudC5jaGlwSW5wdXQhLmNsZWFyKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZm9ybUNvbnRyb2wuZGlzYWJsZSgpXCI+RGlzYWJsZSBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZm9ybUNvbnRyb2wuZW5hYmxlKClcIj5FbmFibGUgZm9ybSBjb250cm9sPC9idXR0b24+XG48L2Rpdj5cbjxwPlxuICA8aT5FbnRlciB2aWRlbyBrZXl3b3JkczwvaT5cbjwvcD5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+VmlkZW8ga2V5d29yZHM8L21hdC1sYWJlbD5cbiAgPG1hdC1jaGlwLWdyaWQgI2NoaXBHcmlkIGFyaWEtbGFiZWw9XCJFbnRlciBrZXl3b3Jkc1wiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiID5cbiAgICA8bWF0LWNoaXAtcm93ICpuZ0Zvcj1cImxldCBrZXl3b3JkIG9mIGtleXdvcmRzXCIgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZChrZXl3b3JkKVwiPlxuICAgICAge3trZXl3b3JkfX1cbiAgICAgIDxidXR0b24gbWF0Q2hpcFJlbW92ZSBhcmlhLWxhYmVsPVwiJ3JlbW92ZSAnICsga2V5d29yZFwiPlxuICAgICAgICA8bWF0LWljb24+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LWNoaXAtcm93PlxuICA8L21hdC1jaGlwLWdyaWQ+XG4gIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk5ldyBrZXl3b3JkLi4uXCJcbiAgICAgICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBHcmlkXCJcbiAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIi8+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48cD5cbiAgPGI+VGhlIGZvbGxvd2luZyBrZXl3b3JkcyBhcmUgZW50ZXJlZDo8L2I+IHt7Zm9ybUNvbnRyb2wudmFsdWV9fVxuPC9wPiJdfQ==