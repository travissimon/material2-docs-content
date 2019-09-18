(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/select')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/select', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/checkbox', '@angular/material/input', '@angular/material/select'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.select = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.checkbox, global.ng.material.input, global.ng.material.select));
}(this, function (exports, common, core, forms, checkbox, input, select) { 'use strict';

    /** @title Select with custom trigger text */
    var SelectCustomTriggerExample = /** @class */ (function () {
        function SelectCustomTriggerExample() {
            this.toppings = new forms.FormControl();
            this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        }
        SelectCustomTriggerExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-custom-trigger-example',
                        template: "<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value ? toppings.value[0] : ''}}\n      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                        styles: [".example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n"]
                    }] }
        ];
        return SelectCustomTriggerExample;
    }());

    /** @title Disabled select */
    var SelectDisabledExample = /** @class */ (function () {
        function SelectDisabledExample() {
            this.disableSelect = new forms.FormControl(false);
        }
        SelectDisabledExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-disabled-example',
                        template: "<p>\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\n</p>\n\n<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <mat-select [disabled]=\"disableSelect.value\">\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <select matNativeControl [disabled]=\"disableSelect.value\">\n    <option value=\"\" selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\" disabled>Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectDisabledExample;
    }());

    /** Error when invalid control is dirty, touched, or submitted. */
    var MyErrorStateMatcher = /** @class */ (function () {
        function MyErrorStateMatcher() {
        }
        MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        };
        return MyErrorStateMatcher;
    }());
    /** @title Select with a custom ErrorStateMatcher */
    var SelectErrorStateMatcherExample = /** @class */ (function () {
        function SelectErrorStateMatcherExample() {
            this.selected = new forms.FormControl('valid', [
                forms.Validators.required,
                forms.Validators.pattern('valid'),
            ]);
            this.selectFormControl = new forms.FormControl('valid', [
                forms.Validators.required,
                forms.Validators.pattern('valid'),
            ]);
            this.nativeSelectFormControl = new forms.FormControl('valid', [
                forms.Validators.required,
                forms.Validators.pattern('valid'),
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        SelectErrorStateMatcherExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-error-state-matcher-example',
                        template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose one</mat-label>\n  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field class=\"demo-full-width\">\n  <mat-label>Choose one</mat-label>\n  <select matNativeControl [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\">\n    <option value=\"\"></option>\n    <option value=\"valid\" selected>Valid option</option>\n    <option value=\"invalid\">Invalid option</option>\n  </select>\n  <mat-error *ngIf=\"nativeSelectFormControl.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectErrorStateMatcherExample;
    }());

    /**
     * @title Select in a form
     */
    var SelectFormExample = /** @class */ (function () {
        function SelectFormExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
            this.cars = [
                { value: 'volvo', viewValue: 'Volvo' },
                { value: 'saab', viewValue: 'Saab' },
                { value: 'mercedes', viewValue: 'Mercedes' }
            ];
        }
        SelectFormExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-form-example',
                        template: "<form>\n  <h4>mat-select</h4>\n  <mat-form-field>\n    <mat-label>Favorite food</mat-label>\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <p> Selected food: {{selectedValue}} </p>\n  <h4>native html select</h4>\n  <mat-form-field>\n    <mat-label>Favorite car</mat-label>\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\n      <option value=\"\" selected></option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select>\n  </mat-form-field>\n  <p> Selected car: {{selectedCar}} </p>\n</form>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectFormExample;
    }());

    /** @title Select with form field features */
    var SelectHintErrorExample = /** @class */ (function () {
        function SelectHintErrorExample() {
            this.animalControl = new forms.FormControl('', [forms.Validators.required]);
            this.selectFormControl = new forms.FormControl('', forms.Validators.required);
            this.animals = [
                { name: 'Dog', sound: 'Woof!' },
                { name: 'Cat', sound: 'Meow!' },
                { name: 'Cow', sound: 'Moo!' },
                { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
            ];
        }
        SelectHintErrorExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-hint-error-example',
                        template: "<h4>mat select</h4>\n<mat-form-field>\n  <mat-label>Favorite animal</mat-label>\n  <mat-select [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n      {{animal.name}}\n    </mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car (required)</mat-label>\n  <select matNativeControl required [formControl]=\"selectFormControl\">\n    <option label=\"--select something --\"></option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n  <mat-error *ngIf=\"selectFormControl.hasError('required')\">\n    This field is required\n  </mat-error>\n  <mat-hint>You can pick up your favorite car here</mat-hint>\n</mat-form-field>\n\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectHintErrorExample;
    }());

    /** @title Select with multiple selection */
    var SelectMultipleExample = /** @class */ (function () {
        function SelectMultipleExample() {
            this.toppings = new forms.FormControl();
            this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        }
        SelectMultipleExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-multiple-example',
                        template: "<mat-form-field>\n  <mat-label>Toppings</mat-label>\n  <mat-select [formControl]=\"toppings\" multiple>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectMultipleExample;
    }());

    /** @title Select with no option ripple */
    var SelectNoRippleExample = /** @class */ (function () {
        function SelectNoRippleExample() {
        }
        SelectNoRippleExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-no-ripple-example',
                        template: "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectNoRippleExample;
    }());

    /** @title Select with option groups */
    var SelectOptgroupExample = /** @class */ (function () {
        function SelectOptgroupExample() {
            this.pokemonControl = new forms.FormControl();
            this.pokemonGroups = [
                {
                    name: 'Grass',
                    pokemon: [
                        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                        { value: 'oddish-1', viewValue: 'Oddish' },
                        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                    ]
                },
                {
                    name: 'Water',
                    pokemon: [
                        { value: 'squirtle-3', viewValue: 'Squirtle' },
                        { value: 'psyduck-4', viewValue: 'Psyduck' },
                        { value: 'horsea-5', viewValue: 'Horsea' }
                    ]
                },
                {
                    name: 'Fire',
                    disabled: true,
                    pokemon: [
                        { value: 'charmander-6', viewValue: 'Charmander' },
                        { value: 'vulpix-7', viewValue: 'Vulpix' },
                        { value: 'flareon-8', viewValue: 'Flareon' }
                    ]
                },
                {
                    name: 'Psychic',
                    pokemon: [
                        { value: 'mew-9', viewValue: 'Mew' },
                        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                    ]
                }
            ];
        }
        SelectOptgroupExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-optgroup-example',
                        template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectOptgroupExample;
    }());

    /**
     * @title Basic select
     */
    var SelectOverviewExample = /** @class */ (function () {
        function SelectOverviewExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
        }
        SelectOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-overview-example',
                        template: "<h4>Basic mat-select</h4>\n<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>Basic native select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl required>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectOverviewExample;
    }());

    /**
     * @title Select with custom panel styling
     */
    var SelectPanelClassExample = /** @class */ (function () {
        function SelectPanelClassExample() {
            this.panelColor = new forms.FormControl('red');
        }
        SelectPanelClassExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-panel-class-example',
                        template: "<mat-form-field>\n  <mat-label>Panel color</mat-label>\n  <mat-select [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                        // Encapsulation has to be disabled in order for the
                        // component style to apply to the select panel.
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"]
                    }] }
        ];
        return SelectPanelClassExample;
    }());

    /** @title Select with reset option */
    var SelectResetExample = /** @class */ (function () {
        function SelectResetExample() {
            this.states = [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ];
        }
        SelectResetExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-reset-example',
                        template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectResetExample;
    }());

    /** @title Select with 2-way value binding */
    var SelectValueBindingExample = /** @class */ (function () {
        function SelectValueBindingExample() {
            this.selected = 'option2';
        }
        SelectValueBindingExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-value-binding-example',
                        template: "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<p>You selected: {{selected}}</p>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return SelectValueBindingExample;
    }());

    var EXAMPLES = [
        SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHintErrorExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectResetExample,
        SelectValueBindingExample,
    ];
    var SelectExamplesModule = /** @class */ (function () {
        function SelectExamplesModule() {
        }
        SelectExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            checkbox.MatCheckboxModule,
                            input.MatInputModule,
                            select.MatSelectModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return SelectExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SelectCustomTriggerExample = SelectCustomTriggerExample;
    exports.SelectDisabledExample = SelectDisabledExample;
    exports.SelectErrorStateMatcherExample = SelectErrorStateMatcherExample;
    exports.SelectFormExample = SelectFormExample;
    exports.SelectHintErrorExample = SelectHintErrorExample;
    exports.SelectMultipleExample = SelectMultipleExample;
    exports.SelectNoRippleExample = SelectNoRippleExample;
    exports.SelectOptgroupExample = SelectOptgroupExample;
    exports.SelectOverviewExample = SelectOverviewExample;
    exports.SelectPanelClassExample = SelectPanelClassExample;
    exports.SelectResetExample = SelectResetExample;
    exports.SelectValueBindingExample = SelectValueBindingExample;
    exports.SelectExamplesModule = SelectExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-select.umd.js.map
