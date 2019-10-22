import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
/**
 * @title Snack-bar with a custom component
 */
export declare class SnackBarComponentExample {
    private _snackBar;
    durationInSeconds: number;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<SnackBarComponentExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<SnackBarComponentExample, "snack-bar-component-example", never, {}, {}, never>;
}
export declare class PizzaPartyComponent {
    static ngFactoryDef: i0.ɵɵFactoryDef<PizzaPartyComponent>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<PizzaPartyComponent, "snack-bar-component-example-snack", never, {}, {}, never>;
}
