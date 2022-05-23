import { Component } from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
/**
 * @title Snack-bar with configurable position
 */
export class SnackBarPositionExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    openSnackBar() {
        this._snackBar.open('Cannonball!!', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
SnackBarPositionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarPositionExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
SnackBarPositionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: SnackBarPositionExample, selector: "snack-bar-position-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Horizontal position</mat-label>\n  <mat-select [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Vertical position</mat-label>\n  <mat-select [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n", styles: [".mat-form-field {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "component", type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: SnackBarPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-position-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Horizontal position</mat-label>\n  <mat-select [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Vertical position</mat-label>\n  <mat-select [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n", styles: [".mat-form-field {\n  margin-right: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1wb3NpdGlvbi9zbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLFdBQVcsR0FHWixNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBRXJDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUFvQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBSDFDLHVCQUFrQixHQUFrQyxPQUFPLENBQUM7UUFDNUQscUJBQWdCLEdBQWdDLFFBQVEsQ0FBQztJQUVaLENBQUM7SUFFOUMsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUU7WUFDNUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7O3lIQVhVLHVCQUF1Qjs2R0FBdkIsdUJBQXVCLGtFQ2ZwQyxtekJBcUJBO2dHRE5hLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRTbmFja0JhcixcbiAgTWF0U25hY2tCYXJIb3Jpem9udGFsUG9zaXRpb24sXG4gIE1hdFNuYWNrQmFyVmVydGljYWxQb3NpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgU25hY2stYmFyIHdpdGggY29uZmlndXJhYmxlIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSB7XG4gIGhvcml6b250YWxQb3NpdGlvbjogTWF0U25hY2tCYXJIb3Jpem9udGFsUG9zaXRpb24gPSAnc3RhcnQnO1xuICB2ZXJ0aWNhbFBvc2l0aW9uOiBNYXRTbmFja0JhclZlcnRpY2FsUG9zaXRpb24gPSAnYm90dG9tJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlblNuYWNrQmFyKCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oJ0Nhbm5vbmJhbGwhIScsICdTcGxhc2gnLCB7XG4gICAgICBob3Jpem9udGFsUG9zaXRpb246IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uLFxuICAgICAgdmVydGljYWxQb3NpdGlvbjogdGhpcy52ZXJ0aWNhbFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5Ib3Jpem9udGFsIHBvc2l0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFsodmFsdWUpXT1cImhvcml6b250YWxQb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic3RhcnRcIj5TdGFydDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPkNlbnRlcjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVuZFwiPkVuZDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImxlZnRcIj5MZWZ0PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmlnaHRcIj5SaWdodDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlZlcnRpY2FsIHBvc2l0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFsodmFsdWUpXT1cInZlcnRpY2FsUG9zaXRpb25cIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRvcFwiPlRvcDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImJvdHRvbVwiPkJvdHRvbTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5TbmFja0JhcigpXCIgYXJpYS1sYWJlbD1cIlNob3cgYW4gZXhhbXBsZSBzbmFjay1iYXJcIj5cbiAgUG9vbCBwYXJ0eSFcbjwvYnV0dG9uPlxuIl19