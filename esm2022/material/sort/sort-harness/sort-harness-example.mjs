import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sort";
/**
 * @title Testing with MatSortHarness
 */
class SortHarnessExample {
    constructor() {
        this.disableThirdHeader = false;
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
        }
        else {
            this.sortedData = data.sort((a, b) => {
                const aValue = a[sort.active];
                const bValue = b[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: SortHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: SortHarnessExample, selector: "sort-harness-example", ngImport: i0, template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i2.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
export { SortHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: SortHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sort-harness-example', template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUd4Qzs7R0FFRztBQUNILE1BSWEsa0JBQWtCO0lBSi9CO1FBS0UsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBRztZQUNULEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDMUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7U0FDckUsQ0FBQztRQUVGLGVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBZXBDO0lBYkMsUUFBUSxDQUFDLElBQVU7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxNQUFNLE1BQU0sR0FBSSxDQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLE1BQU0sR0FBSSxDQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzttSEF4QlUsa0JBQWtCO3VHQUFsQixrQkFBa0IsNERDVi9CLDRqQkFpQkE7O1NEUGEsa0JBQWtCO2dHQUFsQixrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNvcnRIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvcnQtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzb3J0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU29ydEhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzYWJsZVRoaXJkSGVhZGVyID0gZmFsc2U7XG4gIGRlc3NlcnRzID0gW1xuICAgIHtuYW1lOiAnRnJvemVuIHlvZ3VydCcsIGNhbG9yaWVzOiAxNTksIGZhdDogNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIGNhbG9yaWVzOiAyMzcsIGZhdDogOSwgY2FyYnM6IDM3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0VjbGFpcicsIGNhbG9yaWVzOiAyNjIsIGZhdDogMTYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNn0sXG4gICAge25hbWU6ICdDdXBjYWtlJywgY2Fsb3JpZXM6IDMwNSwgZmF0OiA0LCBjYXJiczogNjcsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnR2luZ2VyYnJlYWQnLCBjYWxvcmllczogMzU2LCBmYXQ6IDE2LCBjYXJiczogNDksIHByb3RlaW46IDR9LFxuICBdO1xuXG4gIHNvcnRlZERhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG5cbiAgc29ydERhdGEoc29ydDogU29ydCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG5cbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFWYWx1ZSA9IChhIGFzIGFueSlbc29ydC5hY3RpdmVdO1xuICAgICAgICBjb25zdCBiVmFsdWUgPSAoYiBhcyBhbnkpW3NvcnQuYWN0aXZlXTtcbiAgICAgICAgcmV0dXJuIChhVmFsdWUgPCBiVmFsdWUgPyAtMSA6IDEpICogKHNvcnQuZGlyZWN0aW9uID09PSAnYXNjJyA/IDEgOiAtMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjx0YWJsZSBtYXRTb3J0IChtYXRTb3J0Q2hhbmdlKT1cInNvcnREYXRhKCRldmVudClcIj5cbiAgPHRyPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJuYW1lXCI+RGVzc2VydDwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImNhbG9yaWVzXCI+Q2Fsb3JpZXM8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJmYXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZVRoaXJkSGVhZGVyXCI+RmF0PC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiY2FyYnNcIj5DYXJiczwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cInByb3RlaW5cIj5Qcm90ZWluPC90aD5cbiAgPC90cj5cblxuICA8dHIgKm5nRm9yPVwibGV0IGRlc3NlcnQgb2Ygc29ydGVkRGF0YVwiPlxuICAgIDx0ZD57e2Rlc3NlcnQubmFtZX19PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmNhbG9yaWVzfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQuZmF0fX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQuY2FyYnN9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5wcm90ZWlufX08L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cbiJdfQ==