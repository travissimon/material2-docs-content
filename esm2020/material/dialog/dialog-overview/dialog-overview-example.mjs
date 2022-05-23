import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
/**
 * @title Dialog Overview
 */
export class DialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
DialogOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: DialogOverviewExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: DialogOverviewExample, selector: "dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: DialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example', template: "<ol>\n  <li>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
export class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: DialogOverviewExampleDialog, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
DialogOverviewExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: DialogOverviewExampleDialog, selector: "dialog-overview-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n", dependencies: [{ kind: "component", type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: DialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example-dialog', template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7QUFPbEY7O0dBRUc7QUFLSCxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUM5RCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1NBQzdDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7dUhBaEJVLHFCQUFxQjsyR0FBckIscUJBQXFCLCtEQ2ZsQyw2VkFjQTtnR0RDYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UseUJBQXlCOztBQTBCckMsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUNTLFNBQW9ELEVBQzNCLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQTJDO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDL0MsQ0FBQztJQUVKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OzZIQVJVLDJCQUEyQiw4Q0FHNUIsZUFBZTtpSEFIZCwyQkFBMkIsc0VFdEN4QywwY0FZQTtnR0YwQmEsMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLGdDQUFnQzs7MEJBTXZDLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVydmlld0V4YW1wbGUge1xuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHtuYW1lOiB0aGlzLm5hbWUsIGFuaW1hbDogdGhpcy5hbmltYWx9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhLFxuICApIHt9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiIsIjxvbD5cbiAgPGxpPlxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5XaGF0J3MgeW91ciBuYW1lPzwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5QaWNrIG9uZTwvYnV0dG9uPlxuICA8L2xpPlxuICA8bGkgKm5nSWY9XCJhbmltYWxcIj5cbiAgICBZb3UgY2hvc2U6IDxpPnt7YW5pbWFsfX08L2k+XG4gIDwvbGk+XG48L29sPlxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+SGkge3tkYXRhLm5hbWV9fTwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgPHA+V2hhdCdzIHlvdXIgZmF2b3JpdGUgYW5pbWFsPzwvcD5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBBbmltYWw8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJkYXRhLmFuaW1hbFwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvbk5vQ2xpY2soKVwiPk5vIFRoYW5rczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwiZGF0YS5hbmltYWxcIiBjZGtGb2N1c0luaXRpYWw+T2s8L2J1dHRvbj5cbjwvZGl2PlxuIl19