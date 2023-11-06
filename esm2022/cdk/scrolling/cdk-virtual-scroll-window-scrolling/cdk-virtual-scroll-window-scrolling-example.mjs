import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scrolling window */
export class CdkVirtualScrollWindowScrollingExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0-rc.2", type: CdkVirtualScrollWindowScrollingExample, isStandalone: true, selector: "cdk-virtual-scroll-window-scrolling-example", inputs: { shouldRun: "shouldRun" }, ngImport: i0, template: "@if (shouldRun) {\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n}\n\n@if (!shouldRun) {\n  <div>Please open on StackBlitz to see result</div>\n}\n", styles: [".example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i1.CdkVirtualScrollableWindow, selector: "cdk-virtual-scroll-viewport[scrollWindow]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-window-scrolling-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "@if (shouldRun) {\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n}\n\n@if (!shouldRun) {\n  <div>Please open on StackBlitz to see result</div>\n}\n", styles: [".example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"] }]
        }], propDecorators: { shouldRun: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXZELHNDQUFzQztBQVN0QyxNQUFNLE9BQU8sc0NBQXNDO0lBUm5EO1FBU1csY0FBUyxHQUFHLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNGLFVBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xFO21IQUpZLHNDQUFzQzt1R0FBdEMsc0NBQXNDLDJJQ1puRCx1WUFXQSxvTEREWSxlQUFlOztnR0FFZCxzQ0FBc0M7a0JBUmxELFNBQVM7K0JBQ0UsNkNBQTZDLG1CQUd0Qyx1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQzs4QkFHakIsU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsaW5nIHdpbmRvdyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtd2luZG93LXNjcm9sbGluZy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC13aW5kb3ctc2Nyb2xsaW5nLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbU2Nyb2xsaW5nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbFdpbmRvd1Njcm9sbGluZ0V4YW1wbGUge1xuICBASW5wdXQoKSBzaG91bGRSdW4gPSAvKF58Likoc3RhY2tibGl0enx3ZWJjb250YWluZXIpLihpb3xjb20pJC8udGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCk7XG5cbiAgaXRlbXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMDAwMH0pLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7aX1gKTtcbn1cbiIsIkBpZiAoc2hvdWxkUnVuKSB7XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWhlYWRlclwiPkNvbnRlbnQgYmVmb3JlPC9kaXY+XG4gIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgc2Nyb2xsV2luZG93IGl0ZW1TaXplPVwiNTBcIj5cbiAgICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBjbGFzcz1cImV4YW1wbGUtaXRlbVwiPnt7aXRlbX19PC9kaXY+XG4gIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb290ZXJcIj5Db250ZW50IGFmdGVyPC9kaXY+XG59XG5cbkBpZiAoIXNob3VsZFJ1bikge1xuICA8ZGl2PlBsZWFzZSBvcGVuIG9uIFN0YWNrQmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxufVxuIl19