import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
/**
 * @title Testing with MatToolbarHarness
 */
export class ToolbarHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ToolbarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: ToolbarHarnessExample, isStandalone: true, selector: "toolbar-harness-example", ngImport: i0, template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n", dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ToolbarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-harness-example', standalone: true, imports: [MatToolbarModule, MatButtonModule], template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL3Rvb2xiYXItaGFybmVzcy90b29sYmFyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1oYXJuZXNzL3Rvb2xiYXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFM0Q7O0dBRUc7QUFPSCxNQUFNLE9BQU8scUJBQXFCOzhHQUFyQixxQkFBcUI7a0dBQXJCLHFCQUFxQixtRkNibEMsdVRBWUEsMkNERFksZ0JBQWdCLHlQQUFFLGVBQWU7OzJGQUVoQyxxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFRvb2xiYXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRvb2xiYXJNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC10b29sYmFyPjxzcGFuPk15IEFwcDwvc3Bhbj48L21hdC10b29sYmFyPlxuPG1hdC10b29sYmFyPlxuICA8bWF0LXRvb2xiYXItcm93PjxzcGFuPlJvdyAxPC9zcGFuPjwvbWF0LXRvb2xiYXItcm93PlxuICA8bWF0LXRvb2xiYXItcm93PjxzcGFuPlJvdyAyPC9zcGFuPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5cbiAgICAgIEJ1dHRvbiAxXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlxuICAgICAgQnV0dG9uIDJcbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48L21hdC10b29sYmFyPlxuIl19