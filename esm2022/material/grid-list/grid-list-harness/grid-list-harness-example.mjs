import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Testing with MatGridListHarness
 */
export class GridListHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: GridListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: GridListHarnessExample, isStandalone: true, selector: "grid-list-harness-example", ngImport: i0, template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n", dependencies: [{ kind: "ngmodule", type: MatGridListModule }, { kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { kind: "component", type: i1.MatGridTileText, selector: "mat-grid-tile-header, mat-grid-tile-footer" }, { kind: "directive", type: i1.MatGridTileHeaderCssMatStyler, selector: "mat-grid-tile-header" }, { kind: "directive", type: i1.MatGridTileFooterCssMatStyler, selector: "mat-grid-tile-footer" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: GridListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-harness-example', standalone: true, imports: [MatGridListModule], template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtaGFybmVzcy9ncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFFOUQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sc0JBQXNCO3FIQUF0QixzQkFBc0I7eUdBQXRCLHNCQUFzQixxRkNabkMsa2ZBYUEsMkNESFksaUJBQWlCOztrR0FFaEIsc0JBQXNCO2tCQU5sQyxTQUFTOytCQUNFLDJCQUEyQixjQUV6QixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0R3JpZExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRHcmlkTGlzdEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEdyaWRMaXN0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC1ncmlkLWxpc3QgY29scz1cIjJcIiByb3dIZWlnaHQ9XCIxMDBweFwiPlxuICA8bWF0LWdyaWQtdGlsZT5UaWxlIDEgKG5vIGhlYWRlciwgbm8gZm9vdGVyKTwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+XG4gICAgPG1hdC1ncmlkLXRpbGUtaGVhZGVyPlRpbGUgMjwvbWF0LWdyaWQtdGlsZS1oZWFkZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjJcIj5cbiAgICA8bWF0LWdyaWQtdGlsZS1oZWFkZXI+VGlsZSAzPC9tYXQtZ3JpZC10aWxlLWhlYWRlcj5cbiAgICA8bWF0LWdyaWQtdGlsZS1mb290ZXI+VGlsZSAzIGZvb3RlcjwvbWF0LWdyaWQtdGlsZS1mb290ZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+XG4gICAgPG1hdC1ncmlkLXRpbGUtaGVhZGVyPlRpbGUgNDwvbWF0LWdyaWQtdGlsZS1oZWFkZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==