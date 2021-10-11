import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Button toggle selection mode
 */
export class ButtonToggleModeExample {
}
ButtonToggleModeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonToggleModeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleModeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: ButtonToggleModeExample, selector: "button-toggle-mode-example", ngImport: i0, template: "<h3>Single selection</h3>\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n</mat-button-toggle-group>\n\n<h3>Multiple selection</h3>\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n</mat-button-toggle-group>\n", components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonToggleModeExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-mode-example', template: "<h3>Single selection</h3>\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n</mat-button-toggle-group>\n\n<h3>Multiple selection</h3>\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtbW9kZS9idXR0b24tdG9nZ2xlLW1vZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1tb2RlL2J1dHRvbi10b2dnbGUtbW9kZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1Qjs7NEhBQXZCLHVCQUF1QjtnSEFBdkIsdUJBQXVCLGtFQ1RwQyxncEJBYUE7bUdESmEsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQnV0dG9uIHRvZ2dsZSBzZWxlY3Rpb24gbW9kZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tdG9nZ2xlLW1vZGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1tb2RlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZU1vZGVFeGFtcGxlIHt9XG4iLCI8aDM+U2luZ2xlIHNlbGVjdGlvbjwvaDM+XG48bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbmFtZT1cImZhdm9yaXRlQ29sb3JcIiBhcmlhLWxhYmVsPVwiRmF2b3JpdGUgQ29sb3JcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwicmVkXCI+UmVkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZ3JlZW5cIj5HcmVlbjwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJsdWVcIj5CbHVlPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbjwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG5cbjxoMz5NdWx0aXBsZSBzZWxlY3Rpb248L2gzPlxuPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG5hbWU9XCJpbmdyZWRpZW50c1wiIGFyaWEtbGFiZWw9XCJJbmdyZWRpZW50c1wiIG11bHRpcGxlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJmbG91clwiPkZsb3VyPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZWdnc1wiPkVnZ3M8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJzdWdhclwiPlN1Z2FyPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbjwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4iXX0=