import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with the headers on the bottom
 */
export class TabGroupHeaderBelowExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TabGroupHeaderBelowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: TabGroupHeaderBelowExample, isStandalone: true, selector: "tab-group-header-below-example", ngImport: i0, template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TabGroupHeaderBelowExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-header-below-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWhlYWRlci1iZWxvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtaGVhZGVyLWJlbG93L3RhYi1ncm91cC1oZWFkZXItYmVsb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWhlYWRlci1iZWxvdy90YWItZ3JvdXAtaGVhZGVyLWJlbG93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXJEOztHQUVHO0FBT0gsTUFBTSxPQUFPLDBCQUEwQjs4R0FBMUIsMEJBQTBCO2tHQUExQiwwQkFBMEIsMEZDWnZDLHFOQUtBLDJDREtZLGFBQWE7OzJGQUVaLDBCQUEwQjtrQkFOdEMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FFOUIsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggdGhlIGhlYWRlcnMgb24gdGhlIGJvdHRvbVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtaGVhZGVyLWJlbG93LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1oZWFkZXItYmVsb3ctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRhYnNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEhlYWRlckJlbG93RXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXAgaGVhZGVyUG9zaXRpb249XCJiZWxvd1wiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+IENvbnRlbnQgMSA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+IENvbnRlbnQgMiA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj4gQ29udGVudCAzIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==