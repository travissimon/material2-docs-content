import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with stretched labels
 */
class TabGroupStretchedExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupStretchedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TabGroupStretchedExample, isStandalone: true, selector: "tab-group-stretched-example", ngImport: i0, template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
export { TabGroupStretchedExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupStretchedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-stretched-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtc3RyZXRjaGVkL3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXN0cmV0Y2hlZC90YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXJEOztHQUVHO0FBQ0gsTUFPYSx3QkFBd0I7OEdBQXhCLHdCQUF3QjtrR0FBeEIsd0JBQXdCLHVGQ2JyQywrUEFLQSw0R0RNWSxhQUFhOztTQUVaLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLDZCQUE2QixjQUczQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBzdHJldGNoZWQgbGFiZWxzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VGFic01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwU3RyZXRjaGVkRXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXAgbWF0LXN0cmV0Y2gtdGFicyBjbGFzcz1cImV4YW1wbGUtc3RyZXRjaGVkLXRhYnMgbWF0LWVsZXZhdGlvbi16NFwiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+IENvbnRlbnQgMSA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+IENvbnRlbnQgMiA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj4gQ29udGVudCAzIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==