import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Range slider
 */
export class SliderRangeExample {
}
SliderRangeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderRangeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderRangeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: SliderRangeExample, selector: "slider-range-example", ngImport: i0, template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb], input[matSliderStartThumb], input[matSliderEndThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd", "_blur", "_focus"], exportAs: ["matSliderThumb"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderRangeExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-range-example', template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXJhbmdlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLXJhbmdlL3NsaWRlci1yYW5nZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1yYW5nZS9zbGlkZXItcmFuZ2UtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxrQkFBa0I7O3NIQUFsQixrQkFBa0I7MEdBQWxCLGtCQUFrQiw0RENWL0IsK0lBSUE7a0dETWEsa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUmFuZ2Ugc2xpZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlci1yYW5nZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItcmFuZ2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1yYW5nZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJSYW5nZUV4YW1wbGUge31cbiIsIjxtYXQtc2xpZGVyIG1pbj1cIjIwMFwiIG1heD1cIjUwMFwiPlxuICA8aW5wdXQgdmFsdWU9XCIzMDBcIiBtYXRTbGlkZXJTdGFydFRodW1iPlxuICA8aW5wdXQgdmFsdWU9XCI0MDBcIiBtYXRTbGlkZXJFbmRUaHVtYj5cbjwvbWF0LXNsaWRlcj5cbiJdfQ==