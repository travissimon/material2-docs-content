import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CdkVirtualScrollAppendOnlyExample } from './cdk-virtual-scroll-append-only/cdk-virtual-scroll-append-only-example';
import { CdkVirtualScrollContextExample } from './cdk-virtual-scroll-context/cdk-virtual-scroll-context-example';
import { CdkVirtualScrollCustomStrategyExample } from './cdk-virtual-scroll-custom-strategy/cdk-virtual-scroll-custom-strategy-example';
import { CdkVirtualScrollDataSourceExample } from './cdk-virtual-scroll-data-source/cdk-virtual-scroll-data-source-example';
import { CdkVirtualScrollDlExample } from './cdk-virtual-scroll-dl/cdk-virtual-scroll-dl-example';
import { CdkVirtualScrollFixedBufferExample } from './cdk-virtual-scroll-fixed-buffer/cdk-virtual-scroll-fixed-buffer-example';
import { CdkVirtualScrollHorizontalExample } from './cdk-virtual-scroll-horizontal/cdk-virtual-scroll-horizontal-example';
import { CdkVirtualScrollOverviewExample } from './cdk-virtual-scroll-overview/cdk-virtual-scroll-overview-example';
import { CdkVirtualScrollTemplateCacheExample } from './cdk-virtual-scroll-template-cache/cdk-virtual-scroll-template-cache-example';
import * as i0 from "@angular/core";
export { CdkVirtualScrollAppendOnlyExample, CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollTemplateCacheExample, };
const EXAMPLES = [
    CdkVirtualScrollAppendOnlyExample,
    CdkVirtualScrollContextExample,
    CdkVirtualScrollCustomStrategyExample,
    CdkVirtualScrollDataSourceExample,
    CdkVirtualScrollDlExample,
    CdkVirtualScrollFixedBufferExample,
    CdkVirtualScrollHorizontalExample,
    CdkVirtualScrollOverviewExample,
    CdkVirtualScrollTemplateCacheExample,
];
export class CdkScrollingExamplesModule {
}
CdkScrollingExamplesModule.ɵfac = function CdkScrollingExamplesModule_Factory(t) { return new (t || CdkScrollingExamplesModule)(); };
CdkScrollingExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkScrollingExamplesModule });
CdkScrollingExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ScrollingModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkScrollingExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [ScrollingModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkScrollingExamplesModule, { declarations: [CdkVirtualScrollAppendOnlyExample,
        CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample], imports: [ScrollingModule], exports: [CdkVirtualScrollAppendOnlyExample,
        CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSx5RUFBeUUsQ0FBQztBQUNqRixPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0saUVBQWlFLENBQUM7QUFDekUsT0FBTyxFQUNMLHFDQUFxQyxFQUN0QyxNQUFNLGlGQUFpRixDQUFDO0FBQ3pGLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSx5RUFBeUUsQ0FBQztBQUNqRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sMkVBQTJFLENBQUM7QUFDbkYsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxtRUFBbUUsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsb0NBQW9DLEVBQ3JDLE1BQU0sK0VBQStFLENBQUM7O0FBRXZGLE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsOEJBQThCLEVBQzlCLHFDQUFxQyxFQUNyQyxpQ0FBaUMsRUFDakMseUJBQXlCLEVBQ3pCLGtDQUFrQyxFQUNsQyxpQ0FBaUMsRUFDakMsK0JBQStCLEVBQy9CLG9DQUFvQyxHQUNyQyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLG9DQUFvQztDQUNyQyxDQUFDO0FBUUYsTUFBTSxPQUFPLDBCQUEwQjs7b0dBQTFCLDBCQUEwQjs0RUFBMUIsMEJBQTBCO2dGQUw1QixDQUFDLGVBQWUsQ0FBQzt1RkFLZiwwQkFBMEI7Y0FOdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDMUIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQjs7d0ZBQ1ksMEJBQTBCLG1CQWpCckMsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUM5QixxQ0FBcUM7UUFDckMsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQixvQ0FBb0MsYUFJMUIsZUFBZSxhQVp6QixpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxpQ0FBaUM7UUFDakMseUJBQXlCO1FBQ3pCLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2Nyb2xsaW5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbEFwcGVuZE9ubHlFeGFtcGxlXG59IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLWFwcGVuZC1vbmx5L2Nkay12aXJ0dWFsLXNjcm9sbC1hcHBlbmQtb25seS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxDb250ZXh0RXhhbXBsZVxufSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZXh0L2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZXh0LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbEN1c3RvbVN0cmF0ZWd5RXhhbXBsZVxufSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3kvY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZVxufSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1ZpcnR1YWxTY3JvbGxEbEV4YW1wbGV9IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLWRsL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxGaXhlZEJ1ZmZlckV4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyL2Nkay12aXJ0dWFsLXNjcm9sbC1maXhlZC1idWZmZXItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtWaXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC9jZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxPdmVydmlld0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtb3ZlcnZpZXcvY2RrLXZpcnR1YWwtc2Nyb2xsLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbFRlbXBsYXRlQ2FjaGVFeGFtcGxlXG59IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlL2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbEFwcGVuZE9ubHlFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsQ29udGV4dEV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxDdXN0b21TdHJhdGVneUV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbERsRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEZpeGVkQnVmZmVyRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEhvcml6b250YWxFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsVGVtcGxhdGVDYWNoZUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrVmlydHVhbFNjcm9sbEFwcGVuZE9ubHlFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsQ29udGV4dEV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxDdXN0b21TdHJhdGVneUV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbERsRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEZpeGVkQnVmZmVyRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEhvcml6b250YWxFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsVGVtcGxhdGVDYWNoZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2Nyb2xsaW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1Njcm9sbGluZ0V4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==