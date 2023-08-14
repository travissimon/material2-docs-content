import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
export class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TabGroupLazyLoadedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: TabGroupLazyLoadedExample, isStandalone: true, selector: "tab-group-lazy-loaded-example", ngImport: i0, template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabContent, selector: "[matTabContent]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TabGroupLazyLoadedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-lazy-loaded-example', standalone: true, imports: [MatTabsModule, DatePipe], template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFckQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8seUJBQXlCO0lBTnRDO1FBT0UsaUJBQVksR0FBVyxFQUFFLENBQUM7S0FTM0I7SUFQQyxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs4R0FUVSx5QkFBeUI7a0dBQXpCLHlCQUF5Qix5RkNidEMsbWxCQW1CQSwyQ0RSWSxhQUFhLG1yQkFBRSxRQUFROzsyRkFFdEIseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLCtCQUErQixjQUU3QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aGVyZSB0aGUgdGFiIGNvbnRlbnQgaXMgbG9hZGVkIGxhemlseSAod2hlbiBhY3RpdmF0ZWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRhYnNNb2R1bGUsIERhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBMYXp5TG9hZGVkRXhhbXBsZSB7XG4gIHRhYkxvYWRUaW1lczogRGF0ZVtdID0gW107XG5cbiAgZ2V0VGltZUxvYWRlZChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF0pIHtcbiAgICAgIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiPG1hdC10YWItZ3JvdXA+XG48IS0tICNkb2NyZWdpb24gbWF0LXRhYi1jb250ZW50IC0tPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDEgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgxKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtdGFiLWNvbnRlbnQgLS0+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDIgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgyKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgQ29udGVudCAzIC0gTG9hZGVkOiB7e2dldFRpbWVMb2FkZWQoMykgfCBkYXRlOidtZWRpdW0nfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=