import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Basic tooltip
 */
class TooltipOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TooltipOverviewExample, isStandalone: true, selector: "tooltip-overview-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] }); }
}
export { TooltipOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-overview-example', standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLW92ZXJ2aWV3L3Rvb2x0aXAtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1vdmVydmlldy90b29sdGlwLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUV6RDs7R0FFRztBQUNILE1BTWEsc0JBQXNCOzhHQUF0QixzQkFBc0I7a0dBQXRCLHNCQUFzQixvRkNibkMscUxBS0EsMkNETVksZUFBZSwyUUFBRSxnQkFBZ0I7O1NBRWhDLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQU5sQyxTQUFTOytCQUNFLDBCQUEwQixjQUV4QixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHRvb2x0aXBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYSB0b29sdGlwIHdoZW4gZm9jdXNlZCBvciBob3ZlcmVkIG92ZXJcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==