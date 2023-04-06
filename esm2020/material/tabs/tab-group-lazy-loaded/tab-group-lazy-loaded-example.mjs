import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TabGroupLazyLoadedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupLazyLoadedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: TabGroupLazyLoadedExample, selector: "tab-group-lazy-loaded-example", ngImport: i0, template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "directive", type: i1.MatTabContent, selector: "[matTabContent]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: i2.DatePipe, name: "date" }] });
export { TabGroupLazyLoadedExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: TabGroupLazyLoadedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-lazy-loaded-example', template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUNILE1BSWEseUJBQXlCO0lBSnRDO1FBS0UsaUJBQVksR0FBVyxFQUFFLENBQUM7S0FTM0I7SUFQQyxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7NkhBVFUseUJBQXlCO2lIQUF6Qix5QkFBeUIscUVDVHRDLG1sQkFtQkE7U0RWYSx5QkFBeUI7a0dBQXpCLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aGVyZSB0aGUgdGFiIGNvbnRlbnQgaXMgbG9hZGVkIGxhemlseSAod2hlbiBhY3RpdmF0ZWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBMYXp5TG9hZGVkRXhhbXBsZSB7XG4gIHRhYkxvYWRUaW1lczogRGF0ZVtdID0gW107XG5cbiAgZ2V0VGltZUxvYWRlZChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF0pIHtcbiAgICAgIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiPG1hdC10YWItZ3JvdXA+XG48IS0tICNkb2NyZWdpb24gbWF0LXRhYi1jb250ZW50IC0tPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDEgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgxKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtdGFiLWNvbnRlbnQgLS0+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDIgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgyKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgQ29udGVudCAzIC0gTG9hZGVkOiB7e2dldFRpbWVMb2FkZWQoMykgfCBkYXRlOidtZWRpdW0nfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=