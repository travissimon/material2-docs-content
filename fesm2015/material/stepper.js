import { Component, NgModule } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper with editable steps
 */
class StepperEditableExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperEditableExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-editable-example',
                template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">\n  {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\n</button>\n\n<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
StepperEditableExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StepperEditableExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperEditableExample.prototype.secondFormGroup;
    /** @type {?} */
    StepperEditableExample.prototype.isEditable;
    /**
     * @type {?}
     * @private
     */
    StepperEditableExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = { showError: true };
/**
 * \@title Stepper that displays errors in the steps
 */
class StepperErrorsExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperErrorsExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-errors-example',
                template: "<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Address is required.\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: ɵ0
                    }],
                styles: [""]
            }] }
];
/** @nocollapse */
StepperErrorsExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StepperErrorsExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperErrorsExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    StepperErrorsExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper label bottom position
 */
class StepperLabelPositionBottomExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperLabelPositionBottomExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-label-position-bottom-example',
                template: "<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Fill out your name</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\" optional>\n        <form [formGroup]=\"secondFormGroup\">\n            <ng-template matStepLabel>Fill out your address</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        You are now done.\n        <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\n        </div>\n    </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
StepperLabelPositionBottomExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StepperLabelPositionBottomExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperLabelPositionBottomExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    StepperLabelPositionBottomExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper with optional steps
 */
class StepperOptionalExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    }
}
StepperOptionalExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-optional-example',
                template: "<button mat-raised-button (click)=\"isOptional = !isOptional\">\n  {{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}\n</button>\n\n<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
StepperOptionalExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StepperOptionalExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperOptionalExample.prototype.secondFormGroup;
    /** @type {?} */
    StepperOptionalExample.prototype.isOptional;
    /**
     * @type {?}
     * @private
     */
    StepperOptionalExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper overview
 */
class StepperOverviewExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-overview-example',
                template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
StepperOverviewExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StepperOverviewExample.prototype.isLinear;
    /** @type {?} */
    StepperOverviewExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperOverviewExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    StepperOverviewExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = { displayDefaultIndicatorType: false };
/**
 * \@title Stepper with customized states
 */
class StepperStatesExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperStatesExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-states-example',
                template: "<mat-horizontal-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<mat-horizontal-stepper>\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-horizontal-stepper>\n",
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$1
                    }],
                styles: [""]
            }] }
];
/** @nocollapse */
StepperStatesExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StepperStatesExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperStatesExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    StepperStatesExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Stepper vertical
 */
class StepperVerticalExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperVerticalExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-vertical-example',
                template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
StepperVerticalExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StepperVerticalExample.prototype.isLinear;
    /** @type {?} */
    StepperVerticalExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperVerticalExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    StepperVerticalExample.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
];
class StepperExamplesModule {
}
StepperExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatStepperModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { StepperEditableExample, StepperErrorsExample, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample, StepperExamplesModule };
//# sourceMappingURL=stepper.js.map
