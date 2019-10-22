import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with editable steps
 */
export declare class StepperEditableExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isEditable: boolean;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<StepperEditableExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<StepperEditableExample, "stepper-editable-example", never, {}, {}, never>;
}
