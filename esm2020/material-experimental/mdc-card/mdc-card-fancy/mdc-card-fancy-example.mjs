import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/mdc-card";
import * as i2 from "@angular/material-experimental/mdc-button";
/**
 * @title Card with multiple sections
 */
export class MdcCardFancyExample {
}
MdcCardFancyExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: MdcCardFancyExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MdcCardFancyExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: MdcCardFancyExample, selector: "mdc-card-fancy-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { type: i1.MatCardHeader, selector: "mat-card-header" }, { type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { type: i1.MatCardContent, selector: "mat-card-content" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: MdcCardFancyExample, decorators: [{
            type: Component,
            args: [{ selector: 'mdc-card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRjLWNhcmQtZmFuY3ktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtY2FyZC9tZGMtY2FyZC1mYW5jeS9tZGMtY2FyZC1mYW5jeS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1jYXJkL21kYy1jYXJkLWZhbmN5L21kYy1jYXJkLWZhbmN5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjs7dUhBQW5CLG1CQUFtQjsyR0FBbkIsbUJBQW1CLDhEQ1ZoQywweEJBbUJBO2tHRFRhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBtdWx0aXBsZSBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGMtY2FyZC1mYW5jeS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZGMtY2FyZC1mYW5jeS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWRjLWNhcmQtZmFuY3ktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRjQ2FyZEZhbmN5RXhhbXBsZSB7fVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBtYXQtY2FyZC1hdmF0YXIgY2xhc3M9XCJleGFtcGxlLWhlYWRlci1pbWFnZVwiPjwvZGl2PlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5Eb2cgQnJlZWQ8L21hdC1jYXJkLXN1YnRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgYWx0PVwiUGhvdG8gb2YgYSBTaGliYSBJbnVcIj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgU2hpYmEgSW51IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgc2l4IG9yaWdpbmFsIGFuZCBkaXN0aW5jdCBzcGl0eiBicmVlZHMgb2YgZG9nIGZyb20gSmFwYW4uXG4gICAgICBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhcyBvcmlnaW5hbGx5XG4gICAgICBicmVkIGZvciBodW50aW5nLlxuICAgIDwvcD5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICA8L21hdC1jYXJkLWFjdGlvbnM+XG48L21hdC1jYXJkPlxuIl19