import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i7 from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i3$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i2$1 from '@angular/material/tooltip';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import * as i1 from '@angular/material/form-field';
import * as i3 from '@angular/material/core';

/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
class TooltipAutoHideExample {
    constructor() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipAutoHideExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipAutoHideExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipAutoHideExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipAutoHideExample, selector: "tooltip-auto-hide-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdkScrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n", styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }, { type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipAutoHideExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-auto-hide-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdkScrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n", styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"] }]
        }] });

/**
 * @title Tooltip that can have a custom class applied.
 */
class TooltipCustomClassExample {
}
TooltipCustomClassExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipCustomClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipCustomClassExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipCustomClassExample, selector: "tooltip-custom-class-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"], components: [{ type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipCustomClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-custom-class-example', encapsulation: ViewEncapsulation.None, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"] }]
        }] });

/**
 * @title Tooltip with a show and hide delay
 */
class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
}
TooltipDelayExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipDelayExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipDelayExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipDelayExample, selector: "tooltip-delay-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button mat-raised-button matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n", styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipDelayExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-delay-example', template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button mat-raised-button matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n", styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Tooltip that can be disabled
 */
class TooltipDisabledExample {
    constructor() {
        this.disabled = new FormControl(false);
    }
}
TooltipDisabledExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipDisabledExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipDisabledExample, selector: "tooltip-disabled-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programmatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n", styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"], components: [{ type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2$2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-disabled-example', template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programmatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n", styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Tooltip that can be manually shown/hidden.
 */
class TooltipManualExample {
}
TooltipManualExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipManualExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipManualExample, selector: "tooltip-manual-example", ngImport: i0, template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"], components: [{ type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-manual-example', template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"] }]
        }] });

/**
 * @title Tooltip with a changing message
 */
class TooltipMessageExample {
    constructor() {
        this.message = new FormControl('Info about the action');
    }
}
TooltipMessageExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipMessageExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipMessageExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipMessageExample, selector: "tooltip-message-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Tooltip message</mat-label>\n  <input matInput [formControl]=\"message\">\n</mat-form-field>\n\n<button mat-raised-button\n        [matTooltip]=\"message.value\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipMessageExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-message-example', template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Tooltip message</mat-label>\n  <input matInput [formControl]=\"message\">\n</mat-form-field>\n\n<button mat-raised-button\n        [matTooltip]=\"message.value\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"] }]
        }] });

/** Custom options the configure the tooltip's default show/hide delays. */
const myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * @title Tooltip with a show and hide delay
 */
class TooltipModifiedDefaultsExample {
}
TooltipModifiedDefaultsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipModifiedDefaultsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipModifiedDefaultsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipModifiedDefaultsExample, selector: "tooltip-modified-defaults-example", providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }], ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n", components: [{ type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipModifiedDefaultsExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-modified-defaults-example', providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }], template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n" }]
        }] });

/**
 * @title Basic tooltip
 */
class TooltipOverviewExample {
}
TooltipOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipOverviewExample, selector: "tooltip-overview-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n", components: [{ type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-overview-example', template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n" }]
        }] });

/**
 * @title Tooltip with a custom position
 */
class TooltipPositionExample {
    constructor() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipPositionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipPositionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipPositionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipPositionExample, selector: "tooltip-position-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i1$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-position-example', template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatTooltipHarness
 */
class TooltipHarnessExample {
    constructor() {
        this.message = 'Tooltip message';
    }
}
TooltipHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TooltipHarnessExample, selector: "tooltip-harness-example", ngImport: i0, template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n", directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-harness-example', template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n" }]
        }] });

const EXAMPLES = [
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipHarnessExample,
    TooltipManualExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
class TooltipExamplesModule {
}
TooltipExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipExamplesModule, declarations: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipHarnessExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        ReactiveFormsModule,
        ScrollingModule], exports: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipHarnessExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample] });
TooltipExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
            ReactiveFormsModule,
            ScrollingModule, // Required for the auto-scrolling example
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TooltipExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        ReactiveFormsModule,
                        ScrollingModule, // Required for the auto-scrolling example
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipExamplesModule, TooltipHarnessExample, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionExample };
//# sourceMappingURL=tooltip.mjs.map
