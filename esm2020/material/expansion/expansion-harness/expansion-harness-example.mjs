import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
export class ExpansionHarnessExample {
}
ExpansionHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: ExpansionHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpansionHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.1", type: ExpansionHarnessExample, selector: "expansion-harness-example", ngImport: i0, template: "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Welcome\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <p>I am the content!</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", dependencies: [{ kind: "directive", type: i1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i1.MatExpansionPanelTitle, selector: "mat-panel-title" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: ExpansionHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-harness-example', template: "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Welcome\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <p>I am the content!</p>\n  </mat-expansion-panel>\n</mat-accordion>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24taGFybmVzcy9leHBhbnNpb24taGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1oYXJuZXNzL2V4cGFuc2lvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sdUJBQXVCOzt5SEFBdkIsdUJBQXVCOzZHQUF2Qix1QkFBdUIsaUVDVHBDLCtQQVVBO2dHRERhLHVCQUF1QjtrQkFKbkMsU0FBUzsrQkFDRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRFeHBhbnNpb25QYW5lbEhhcm5lc3MgYW5kIE1hdEFjY29yZGlvbkhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5zaW9uLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZXhwYW5zaW9uLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uSGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtYWNjb3JkaW9uPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBXZWxjb21lXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgIDxwPkkgYW0gdGhlIGNvbnRlbnQhPC9wPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG48L21hdC1hY2NvcmRpb24+XG4iXX0=