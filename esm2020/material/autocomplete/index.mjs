import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AutocompleteAutoActiveFirstOptionExample } from './autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example';
import { AutocompleteDisplayExample } from './autocomplete-display/autocomplete-display-example';
import { AutocompleteFilterExample } from './autocomplete-filter/autocomplete-filter-example';
import { AutocompleteOptgroupExample } from './autocomplete-optgroup/autocomplete-optgroup-example';
import { AutocompleteOverviewExample } from './autocomplete-overview/autocomplete-overview-example';
import { AutocompletePlainInputExample } from './autocomplete-plain-input/autocomplete-plain-input-example';
import { AutocompleteSimpleExample } from './autocomplete-simple/autocomplete-simple-example';
import { AutocompleteHarnessExample } from './autocomplete-harness/autocomplete-harness-example';
import * as i0 from "@angular/core";
export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteHarnessExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample, };
const EXAMPLES = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteHarnessExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
];
export class AutocompleteExamplesModule {
}
AutocompleteExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AutocompleteExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AutocompleteExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AutocompleteExamplesModule, declarations: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteHarnessExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample], imports: [CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule], exports: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteHarnessExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample] });
AutocompleteExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AutocompleteExamplesModule, imports: [[
            CommonModule,
            MatAutocompleteModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: AutocompleteExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatAutocompleteModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSlideToggleModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsd0NBQXdDLEVBQ3pDLE1BQU0sdUZBQXVGLENBQUM7QUFDL0YsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUUvRixPQUFPLEVBQ0wsd0NBQXdDLEVBQ3hDLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQiwyQkFBMkIsRUFDM0IsNkJBQTZCLEVBQzdCLHlCQUF5QixHQUMxQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IseUJBQXlCO0NBQzFCLENBQUM7QUFnQkYsTUFBTSxPQUFPLDBCQUEwQjs7K0hBQTFCLDBCQUEwQjtnSUFBMUIsMEJBQTBCLGlCQXhCckMsd0NBQXdDO1FBQ3hDLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLHlCQUF5QixhQUt2QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxtQkFBbUIsYUFsQnJCLHdDQUF3QztRQUN4QywwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3Qix5QkFBeUI7Z0lBaUJkLDBCQUEwQixZQWI1QjtZQUNQLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsV0FBVztZQUNYLG1CQUFtQjtTQUNwQjttR0FLVSwwQkFBMEI7a0JBZHRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZVxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS1hdXRvLWFjdGl2ZS1maXJzdC1vcHRpb24vYXV0b2NvbXBsZXRlLWF1dG8tYWN0aXZlLWZpcnN0LW9wdGlvbi1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWRpc3BsYXkvYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWZpbHRlci9hdXRvY29tcGxldGUtZmlsdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZVxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLXNpbXBsZS9hdXRvY29tcGxldGUtc2ltcGxlLWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZUhhcm5lc3NFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZUhhcm5lc3NFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==