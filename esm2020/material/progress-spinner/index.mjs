import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressSpinnerConfigurableExample } from './progress-spinner-configurable/progress-spinner-configurable-example';
import { ProgressSpinnerOverviewExample } from './progress-spinner-overview/progress-spinner-overview-example';
import { ProgressSpinnerHarnessExample } from './progress-spinner-harness/progress-spinner-harness-example';
import * as i0 from "@angular/core";
export { ProgressSpinnerConfigurableExample, ProgressSpinnerHarnessExample, ProgressSpinnerOverviewExample, };
const EXAMPLES = [
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerHarnessExample,
    ProgressSpinnerOverviewExample,
];
export class ProgressSpinnerExamplesModule {
}
ProgressSpinnerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ProgressSpinnerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressSpinnerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ProgressSpinnerExamplesModule, declarations: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample], imports: [CommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample] });
ProgressSpinnerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ProgressSpinnerExamplesModule, imports: [[
            CommonModule,
            MatCardModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ProgressSpinnerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCw2QkFBNkIsRUFDOUIsTUFBTSw2REFBNkQsQ0FBQzs7QUFFckUsT0FBTyxFQUNMLGtDQUFrQyxFQUNsQyw2QkFBNkIsRUFDN0IsOEJBQThCLEdBQy9CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsOEJBQThCO0NBQy9CLENBQUM7QUFlRixNQUFNLE9BQU8sNkJBQTZCOztrSUFBN0IsNkJBQTZCO21JQUE3Qiw2QkFBNkIsaUJBbEJ4QyxrQ0FBa0M7UUFDbEMsNkJBQTZCO1FBQzdCLDhCQUE4QixhQUs1QixZQUFZO1FBQ1osYUFBYTtRQUNiLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QsZUFBZTtRQUNmLFdBQVcsYUFaYixrQ0FBa0M7UUFDbEMsNkJBQTZCO1FBQzdCLDhCQUE4QjttSUFnQm5CLDZCQUE2QixZQVovQjtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsV0FBVztTQUNaO21HQUtVLDZCQUE2QjtrQkFiekMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVyQ29uZmlndXJhYmxlRXhhbXBsZVxufSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVyT3ZlcnZpZXdFeGFtcGxlXG59IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci1vdmVydmlldy9wcm9ncmVzcy1zcGlubmVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVySGFybmVzc0V4YW1wbGVcbn0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLWhhcm5lc3MvcHJvZ3Jlc3Mtc3Bpbm5lci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc1NwaW5uZXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NTcGlubmVyT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzU3Bpbm5lckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzU3Bpbm5lckhhcm5lc3NFeGFtcGxlLFxuICBQcm9ncmVzc1NwaW5uZXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==