import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export interface Vegetable {
    name: string;
}
/**
 * @title Chips Drag and Drop
 */
export declare class ChipsDragDropExample {
    vegetables: Vegetable[];
    drop(event: CdkDragDrop<Vegetable[]>): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<ChipsDragDropExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<ChipsDragDropExample, "chips-drag-drop-example", never, {}, {}, never>;
}
