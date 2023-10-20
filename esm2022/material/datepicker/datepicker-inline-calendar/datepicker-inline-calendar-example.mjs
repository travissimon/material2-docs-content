import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/datepicker";
/** @title Datepicker inline calendar example */
export class DatepickerInlineCalendarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: DatepickerInlineCalendarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: DatepickerInlineCalendarExample, isStandalone: true, selector: "datepicker-inline-calendar-example", ngImport: i0, template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatCalendar, selector: "mat-calendar", inputs: ["headerComponent", "startAt", "startView", "selected", "minDate", "maxDate", "dateFilter", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], outputs: ["selectedChange", "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop"], exportAs: ["matCalendar"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: DatepickerInlineCalendarExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-inline-calendar-example', standalone: true, imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRTNELGdEQUFnRDtBQVFoRCxNQUFNLE9BQU8sK0JBQStCO3FIQUEvQiwrQkFBK0I7eUdBQS9CLCtCQUErQiw4RkNiNUMsOEpBSUEsMkdET1ksYUFBYSw0SUFBRSxtQkFBbUIsMGJBQUUsbUJBQW1COztrR0FFdEQsK0JBQStCO2tCQVAzQyxTQUFTOytCQUNFLG9DQUFvQyxjQUdsQyxJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBpbmxpbmUgY2FsZW5kYXIgZXhhbXBsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItaW5saW5lLWNhbGVuZGFyLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDYXJkTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlcklubGluZUNhbGVuZGFyRXhhbXBsZSB7XG4gIHNlbGVjdGVkOiBEYXRlIHwgbnVsbDtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImRlbW8taW5saW5lLWNhbGVuZGFyLWNhcmRcIj5cbiAgPG1hdC1jYWxlbmRhciBbKHNlbGVjdGVkKV09XCJzZWxlY3RlZFwiPjwvbWF0LWNhbGVuZGFyPlxuPC9tYXQtY2FyZD5cbjxwPlNlbGVjdGVkIGRhdGU6IHt7c2VsZWN0ZWR9fTwvcD5cbiJdfQ==