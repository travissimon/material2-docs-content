import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/material/toolbar";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/sidenav";
import * as i6 from "@angular/material/list";
import * as i7 from "@angular/common";
/** @title Responsive sidenav */
export class SidenavResponsiveExample {
    constructor(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
SidenavResponsiveExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: SidenavResponsiveExample, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.MediaMatcher }], target: i0.ɵɵFactoryTarget.Component });
SidenavResponsiveExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: SidenavResponsiveExample, selector: "sidenav-responsive-example", ngImport: i0, template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Responsive App</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n"], components: [{ type: i2.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i5.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { type: i5.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { type: i6.MatNavList, selector: "mat-nav-list", inputs: ["disableRipple", "disabled"], exportAs: ["matNavList"] }, { type: i6.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { type: i5.MatSidenavContent, selector: "mat-sidenav-content" }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: SidenavResponsiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-responsive-example', template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Responsive App</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.MediaMatcher }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1yZXNwb25zaXZlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtcmVzcG9uc2l2ZS9zaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1yZXNwb25zaXZlL3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQUV0RSxnQ0FBZ0M7QUFNaEMsTUFBTSxPQUFPLHdCQUF3QjtJQWlCbkMsWUFBWSxpQkFBb0MsRUFBRSxLQUFtQjtRQWRyRSxjQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEUsa0JBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUN4QixFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsRUFDWixHQUFHLEVBQUUsQ0FDSDs7Ozs4RkFJd0YsQ0FDM0YsQ0FBQztRQWNGLGNBQVMsR0FBRywwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVRoRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3RCxDQUFDOztxSEF6QlUsd0JBQXdCO3lHQUF4Qix3QkFBd0Isa0VDVHJDLHcvQkFzQkE7MkZEYmEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBSZXNwb25zaXZlIHNpZGVuYXYgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2UmVzcG9uc2l2ZUV4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtb2JpbGVRdWVyeTogTWVkaWFRdWVyeUxpc3Q7XG5cbiAgZmlsbGVyTmF2ID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiA1MH0sIChfLCBpKSA9PiBgTmF2IEl0ZW0gJHtpICsgMX1gKTtcblxuICBmaWxsZXJDb250ZW50ID0gQXJyYXkuZnJvbShcbiAgICB7bGVuZ3RoOiA1MH0sXG4gICAgKCkgPT5cbiAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dFxuICAgICAgIGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXG4gICAgICAgbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0XG4gICAgICAgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5gLFxuICApO1xuXG4gIHByaXZhdGUgX21vYmlsZVF1ZXJ5TGlzdGVuZXI6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBtZWRpYTogTWVkaWFNYXRjaGVyKSB7XG4gICAgdGhpcy5tb2JpbGVRdWVyeSA9IG1lZGlhLm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDYwMHB4KScpO1xuICAgIHRoaXMuX21vYmlsZVF1ZXJ5TGlzdGVuZXIgPSAoKSA9PiBjaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5tb2JpbGVRdWVyeS5hZGRMaXN0ZW5lcih0aGlzLl9tb2JpbGVRdWVyeUxpc3RlbmVyKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubW9iaWxlUXVlcnkucmVtb3ZlTGlzdGVuZXIodGhpcy5fbW9iaWxlUXVlcnlMaXN0ZW5lcik7XG4gIH1cblxuICBzaG91bGRSdW4gPSAvKF58Likoc3RhY2tibGl0enx3ZWJjb250YWluZXIpLihpb3xjb20pJC8udGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCk7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbY2xhc3MuZXhhbXBsZS1pcy1tb2JpbGVdPVwibW9iaWxlUXVlcnkubWF0Y2hlc1wiICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImV4YW1wbGUtdG9vbGJhclwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJzbmF2LnRvZ2dsZSgpXCI+PG1hdC1pY29uPm1lbnU8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cImV4YW1wbGUtYXBwLW5hbWVcIj5SZXNwb25zaXZlIEFwcDwvaDE+XG4gIDwvbWF0LXRvb2xiYXI+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5Ub3AucHhdPVwibW9iaWxlUXVlcnkubWF0Y2hlcyA/IDU2IDogMFwiPlxuICAgIDxtYXQtc2lkZW5hdiAjc25hdiBbbW9kZV09XCJtb2JpbGVRdWVyeS5tYXRjaGVzID8gJ292ZXInIDogJ3NpZGUnXCJcbiAgICAgICAgICAgICAgICAgW2ZpeGVkSW5WaWV3cG9ydF09XCJtb2JpbGVRdWVyeS5tYXRjaGVzXCIgZml4ZWRUb3BHYXA9XCI1NlwiPlxuICAgICAgPG1hdC1uYXYtbGlzdD5cbiAgICAgICAgPGEgbWF0LWxpc3QtaXRlbSByb3V0ZXJMaW5rPVwiLlwiICpuZ0Zvcj1cImxldCBuYXYgb2YgZmlsbGVyTmF2XCI+e3tuYXZ9fTwvYT5cbiAgICAgIDwvbWF0LW5hdi1saXN0PlxuICAgIDwvbWF0LXNpZGVuYXY+XG5cbiAgICA8bWF0LXNpZGVuYXYtY29udGVudD5cbiAgICAgIDxwICpuZ0Zvcj1cImxldCBjb250ZW50IG9mIGZpbGxlckNvbnRlbnRcIj57e2NvbnRlbnR9fTwvcD5cbiAgICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gIDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=