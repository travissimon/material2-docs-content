import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavAutosizeExample } from './sidenav-autosize/sidenav-autosize-example';
import { SidenavBackdropExample } from './sidenav-backdrop/sidenav-backdrop-example';
import { SidenavDisableCloseExample } from './sidenav-disable-close/sidenav-disable-close-example';
import { SidenavDrawerOverviewExample } from './sidenav-drawer-overview/sidenav-drawer-overview-example';
import { SidenavFixedExample } from './sidenav-fixed/sidenav-fixed-example';
import { SidenavModeExample } from './sidenav-mode/sidenav-mode-example';
import { SidenavOpenCloseExample } from './sidenav-open-close/sidenav-open-close-example';
import { SidenavOverviewExample } from './sidenav-overview/sidenav-overview-example';
import { SidenavPositionExample } from './sidenav-position/sidenav-position-example';
import { SidenavResponsiveExample } from './sidenav-responsive/sidenav-responsive-example';
export { SidenavAutosizeExample, SidenavBackdropExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavFixedExample, SidenavModeExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample, SidenavResponsiveExample, };
var EXAMPLES = [
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
];
var SidenavExamplesModule = /** @class */ (function () {
    function SidenavExamplesModule() {
    }
    SidenavExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatListModule,
                        MatRadioModule,
                        MatSidenavModule,
                        MatSelectModule,
                        MatToolbarModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return SidenavExamplesModule;
}());
export { SidenavExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFDTCw0QkFBNEIsRUFDN0IsTUFBTSwyREFBMkQsQ0FBQztBQUNuRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUV6RixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QiwwQkFBMEIsRUFDMUIsNEJBQTRCLEVBQzVCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtDQUN6QixDQUFDO0FBRUY7SUFBQTtJQWtCQSxDQUFDOztnQkFsQkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCw0QkFBQztDQUFBLEFBbEJELElBa0JDO1NBRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHtTaWRlbmF2QXV0b3NpemVFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtYXV0b3NpemUvc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdkJhY2tkcm9wRXhhbXBsZX0gZnJvbSAnLi9zaWRlbmF2LWJhY2tkcm9wL3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZEaXNhYmxlQ2xvc2VFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS9zaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBTaWRlbmF2RHJhd2VyT3ZlcnZpZXdFeGFtcGxlXG59IGZyb20gJy4vc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZGaXhlZEV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1maXhlZC9zaWRlbmF2LWZpeGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtTaWRlbmF2TW9kZUV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1tb2RlL3NpZGVuYXYtbW9kZS1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdk9wZW5DbG9zZUV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1vcGVuLWNsb3NlL3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zaWRlbmF2LW92ZXJ2aWV3L3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1wb3NpdGlvbi9zaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtTaWRlbmF2UmVzcG9uc2l2ZUV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1yZXNwb25zaXZlL3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2lkZW5hdkF1dG9zaXplRXhhbXBsZSxcbiAgU2lkZW5hdkJhY2tkcm9wRXhhbXBsZSxcbiAgU2lkZW5hdkRpc2FibGVDbG9zZUV4YW1wbGUsXG4gIFNpZGVuYXZEcmF3ZXJPdmVydmlld0V4YW1wbGUsXG4gIFNpZGVuYXZGaXhlZEV4YW1wbGUsXG4gIFNpZGVuYXZNb2RlRXhhbXBsZSxcbiAgU2lkZW5hdk9wZW5DbG9zZUV4YW1wbGUsXG4gIFNpZGVuYXZPdmVydmlld0V4YW1wbGUsXG4gIFNpZGVuYXZQb3NpdGlvbkV4YW1wbGUsXG4gIFNpZGVuYXZSZXNwb25zaXZlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTaWRlbmF2QXV0b3NpemVFeGFtcGxlLFxuICBTaWRlbmF2QmFja2Ryb3BFeGFtcGxlLFxuICBTaWRlbmF2RGlzYWJsZUNsb3NlRXhhbXBsZSxcbiAgU2lkZW5hdkRyYXdlck92ZXJ2aWV3RXhhbXBsZSxcbiAgU2lkZW5hdkZpeGVkRXhhbXBsZSxcbiAgU2lkZW5hdk1vZGVFeGFtcGxlLFxuICBTaWRlbmF2T3BlbkNsb3NlRXhhbXBsZSxcbiAgU2lkZW5hdk92ZXJ2aWV3RXhhbXBsZSxcbiAgU2lkZW5hdlBvc2l0aW9uRXhhbXBsZSxcbiAgU2lkZW5hdlJlc3BvbnNpdmVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=