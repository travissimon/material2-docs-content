import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Range slider
 */
export class SliderRangeExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: SliderRangeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: SliderRangeExample, isStandalone: true, selector: "slider-range-example", ngImport: i0, template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderRangeThumb, selector: "input[matSliderStartThumb], input[matSliderEndThumb]", exportAs: ["matSliderRangeThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: SliderRangeExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-range-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXJhbmdlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLXJhbmdlL3NsaWRlci1yYW5nZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1yYW5nZS9zbGlkZXItcmFuZ2UtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7QUFFekQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sa0JBQWtCO3FIQUFsQixrQkFBa0I7eUdBQWxCLGtCQUFrQixnRkNiL0IsK0lBSUEsMkZET1ksZUFBZTs7a0dBRWQsa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLHNCQUFzQixjQUdwQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcblxuLyoqXG4gKiBAdGl0bGUgUmFuZ2Ugc2xpZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1yYW5nZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItcmFuZ2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1yYW5nZS1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0U2xpZGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyUmFuZ2VFeGFtcGxlIHt9XG4iLCI8bWF0LXNsaWRlciBtaW49XCIyMDBcIiBtYXg9XCI1MDBcIj5cbiAgPGlucHV0IHZhbHVlPVwiMzAwXCIgbWF0U2xpZGVyU3RhcnRUaHVtYj5cbiAgPGlucHV0IHZhbHVlPVwiNDAwXCIgbWF0U2xpZGVyRW5kVGh1bWI+XG48L21hdC1zbGlkZXI+XG4iXX0=