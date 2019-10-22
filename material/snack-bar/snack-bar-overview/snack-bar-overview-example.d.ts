import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    private _snackBar;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(message: string, action: string): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<SnackBarOverviewExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<SnackBarOverviewExample, "snack-bar-overview-example", never, {}, {}, never>;
}
