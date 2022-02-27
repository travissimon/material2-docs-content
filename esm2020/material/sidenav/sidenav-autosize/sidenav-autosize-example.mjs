import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
/**
 * @title Autosize sidenav
 */
export class SidenavAutosizeExample {
    constructor() {
        this.showFiller = false;
    }
}
SidenavAutosizeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: SidenavAutosizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidenavAutosizeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: SidenavAutosizeExample, selector: "sidenav-autosize-example", ngImport: i0, template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"], components: [{ type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: SidenavAutosizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-autosize-example', template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWF1dG9zaXplL3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1hdXRvc2l6ZS9zaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFNRSxlQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOzswSEFGWSxzQkFBc0I7OEdBQXRCLHNCQUFzQixnRUNWbkMscWlCQWdCQTtrR0ROYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0UsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBBdXRvc2l6ZSBzaWRlbmF2XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2QXV0b3NpemVFeGFtcGxlIHtcbiAgc2hvd0ZpbGxlciA9IGZhbHNlO1xufVxuIiwiPG1hdC1kcmF3ZXItY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBhdXRvc2l6ZT5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdlwiIG1vZGU9XCJzaWRlXCI+XG4gICAgPHA+QXV0by1yZXNpemluZyBzaWRlbmF2PC9wPlxuICAgIDxwICpuZ0lmPVwic2hvd0ZpbGxlclwiPkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2hvd0ZpbGxlciA9ICFzaG93RmlsbGVyXCIgbWF0LXJhaXNlZC1idXR0b24+XG4gICAgICBUb2dnbGUgZXh0cmEgdGV4dFxuICAgIDwvYnV0dG9uPlxuICA8L21hdC1kcmF3ZXI+XG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdi1jb250ZW50XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiZHJhd2VyLnRvZ2dsZSgpXCI+XG4gICAgICBUb2dnbGUgc2lkZW5hdlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiJdfQ==