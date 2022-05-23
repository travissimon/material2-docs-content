import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/badge";
import * as i2 from "@angular/material/button";
/**
 * @title Testing with MatBadgeHarness
 */
export class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
}
BadgeHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: BadgeHarnessExample, selector: "badge-harness-example", ngImport: i0, template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n", dependencies: [{ kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYmFkZ2UvYmFkZ2UtaGFybmVzcy9iYWRnZS1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1oYXJuZXNzL2JhZGdlLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBS0Usa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFDcEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLENBQUM7S0FDakI7O3FIQUpZLG1CQUFtQjt5R0FBbkIsbUJBQW1CLDZEQ1RoQyxrVUFVQTtnR0REYSxtQkFBbUI7a0JBSi9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QmFkZ2VIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhZGdlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYmFkZ2UtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUhhcm5lc3NFeGFtcGxlIHtcbiAgc2ltcGxlQ29udGVudCA9ICdTJztcbiAgb3ZlcmxhcCA9IHRydWU7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbn1cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiBpZD1cInNpbXBsZVwiIFttYXRCYWRnZV09XCJzaW1wbGVDb250ZW50XCI+U2ltcGxlPC9idXR0b24+XG48YnV0dG9uIG1hdC1idXR0b25cbiAgICBpZD1cIm92ZXJsYXBwaW5nXCJcbiAgICBtYXRCYWRnZT1cIk9cIlxuICAgIFttYXRCYWRnZU92ZXJsYXBdPVwib3ZlcmxhcFwiPk92ZXJsYXBwaW5nPC9idXR0b24+XG48YnV0dG9uXG4gICAgbWF0LWJ1dHRvblxuICAgIGlkPVwiZGlzYWJsZWRcIlxuICAgIG1hdEJhZGdlPVwiRFwiXG4gICAgW21hdEJhZGdlRGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvYnV0dG9uPlxuIl19