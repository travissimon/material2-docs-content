import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/listbox";
/** @title Basic listbox. */
export class CdkListboxOverviewExample {
}
CdkListboxOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkListboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkListboxOverviewExample, selector: "cdk-listbox-overview-example", exportAs: ["cdkListboxOverviewExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-fav-color-label\">\n    Favorite color\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-fav-color-label\"\n      class=\"example-listbox\">\n    <!-- #docregion option -->\n    <li cdkOption=\"red\" class=\"example-option\">Red</li>\n    <!-- #enddocregion option -->\n    <li cdkOption=\"green\" class=\"example-option\">Green</li>\n    <li cdkOption=\"blue\" class=\"example-option\">Blue</li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i1.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkListboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-overview-example', exportAs: 'cdkListboxOverviewExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-fav-color-label\">\n    Favorite color\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-fav-color-label\"\n      class=\"example-listbox\">\n    <!-- #docregion option -->\n    <li cdkOption=\"red\" class=\"example-option\">Red</li>\n    <!-- #enddocregion option -->\n    <li cdkOption=\"green\" class=\"example-option\">Green</li>\n    <li cdkOption=\"blue\" class=\"example-option\">Blue</li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LW92ZXJ2aWV3L2Nkay1saXN0Ym94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1vdmVydmlldy9jZGstbGlzdGJveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDLDRCQUE0QjtBQU81QixNQUFNLE9BQU8seUJBQXlCOztzSEFBekIseUJBQXlCOzBHQUF6Qix5QkFBeUIsNkdDVHRDLGdsQkFnQkE7MkZEUGEseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLDhCQUE4QixZQUM5QiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgQmFzaWMgbGlzdGJveC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hPdmVydmlld0V4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94T3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWNvbnRhaW5lclwiPlxuICA8IS0tICNkb2NyZWdpb24gbGlzdGJveCAtLT5cbiAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWxhYmVsXCIgaWQ9XCJleGFtcGxlLWZhdi1jb2xvci1sYWJlbFwiPlxuICAgIEZhdm9yaXRlIGNvbG9yXG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLWZhdi1jb2xvci1sYWJlbFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgIDwhLS0gI2RvY3JlZ2lvbiBvcHRpb24gLS0+XG4gICAgPGxpIGNka09wdGlvbj1cInJlZFwiIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5SZWQ8L2xpPlxuICAgIDwhLS0gI2VuZGRvY3JlZ2lvbiBvcHRpb24gLS0+XG4gICAgPGxpIGNka09wdGlvbj1cImdyZWVuXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPkdyZWVuPC9saT5cbiAgICA8bGkgY2RrT3B0aW9uPVwiYmx1ZVwiIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5CbHVlPC9saT5cbiAgPC91bD5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48L2Rpdj5cbiJdfQ==