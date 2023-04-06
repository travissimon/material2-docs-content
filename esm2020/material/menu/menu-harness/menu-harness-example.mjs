import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/menu";
/**
 * @title Testing with MatMenuHarness
 */
class MenuHarnessExample {
}
MenuHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MenuHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MenuHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: MenuHarnessExample, selector: "menu-harness-example", ngImport: i0, template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n", dependencies: [{ kind: "component", type: i1.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i1.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] });
export { MenuHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MenuHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-harness-example', template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L21lbnUtaGFybmVzcy9tZW51LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1oYXJuZXNzL21lbnUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFJYSxrQkFBa0I7O3NIQUFsQixrQkFBa0I7MEdBQWxCLGtCQUFrQiw0RENUL0IscVNBT0E7U0RFYSxrQkFBa0I7a0dBQWxCLGtCQUFrQjtrQkFKOUIsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRNZW51SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW21hdE1lbnVUcmlnZ2VyRm9yXT1cInNldHRpbmdzTWVudVwiPlNldHRpbmdzPC9idXR0b24+XG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZCBbbWF0TWVudVRyaWdnZXJGb3JdPVwic2V0dGluZ3NNZW51XCI+RGlzYWJsZWQgbWVudTwvYnV0dG9uPlxuXG48bWF0LW1lbnUgI3NldHRpbmdzTWVudT5cbiAgPG1lbnUgbWF0LW1lbnUtaXRlbT5Qcm9maWxlPC9tZW51PlxuICA8bWVudSBtYXQtbWVudS1pdGVtPkFjY291bnQ8L21lbnU+XG48L21hdC1tZW51PlxuIl19