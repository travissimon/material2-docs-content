import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/scrolling";
/** @title Virtual scrolling window */
class CdkVirtualScrollWindowScrollingExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: CdkVirtualScrollWindowScrollingExample, selector: "cdk-virtual-scroll-window-scrolling-example", inputs: { shouldRun: "shouldRun" }, ngImport: i0, template: "<ng-container *ngIf=\"shouldRun\">\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on StackBlitz to see result</div>\n", styles: [".example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i2.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i2.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i2.CdkVirtualScrollableWindow, selector: "cdk-virtual-scroll-viewport[scrollWindow]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { CdkVirtualScrollWindowScrollingExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-window-scrolling-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"shouldRun\">\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on StackBlitz to see result</div>\n", styles: [".example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"] }]
        }], propDecorators: { shouldRun: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhFLHNDQUFzQztBQUN0QyxNQU1hLHNDQUFzQztJQU5uRDtRQU9XLGNBQVMsR0FBRywwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzRixVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsRTttSEFKWSxzQ0FBc0M7dUdBQXRDLHNDQUFzQyx1SENUbkQsa2FBU0E7O1NEQWEsc0NBQXNDO2dHQUF0QyxzQ0FBc0M7a0JBTmxELFNBQVM7K0JBQ0UsNkNBQTZDLG1CQUd0Qyx1QkFBdUIsQ0FBQyxNQUFNOzhCQUd0QyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGxpbmcgd2luZG93ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtd2luZG93LXNjcm9sbGluZy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC13aW5kb3ctc2Nyb2xsaW5nLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxXaW5kb3dTY3JvbGxpbmdFeGFtcGxlIHtcbiAgQElucHV0KCkgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xuXG4gIGl0ZW1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDAwMDB9KS5tYXAoKF8sIGkpID0+IGBJdGVtICMke2l9YCk7XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWhlYWRlclwiPkNvbnRlbnQgYmVmb3JlPC9kaXY+XG4gIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgc2Nyb2xsV2luZG93IGl0ZW1TaXplPVwiNTBcIj5cbiAgICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBjbGFzcz1cImV4YW1wbGUtaXRlbVwiPnt7aXRlbX19PC9kaXY+XG4gIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb290ZXJcIj5Db250ZW50IGFmdGVyPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja0JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==