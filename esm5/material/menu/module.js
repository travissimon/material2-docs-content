import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { MenuPositionExample } from './menu-position/menu-position-example';
import { NestedMenuExample } from './nested-menu/nested-menu-example';
export { MenuIconsExample, MenuOverviewExample, MenuPositionExample, NestedMenuExample, };
var EXAMPLES = [
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    NestedMenuExample,
];
var MenuExamplesModule = /** @class */ (function () {
    function MenuExamplesModule() {
    }
    MenuExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatMenuModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return MenuExamplesModule;
}());
export { MenuExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFcEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGO0lBQUE7SUFVQSxDQUFDOztnQkFWQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQseUJBQUM7Q0FBQSxBQVZELElBVUM7U0FEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge01lbnVJY29uc0V4YW1wbGV9IGZyb20gJy4vbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUnO1xuaW1wb3J0IHtNZW51T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL21lbnUtb3ZlcnZpZXcvbWVudS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7TWVudVBvc2l0aW9uRXhhbXBsZX0gZnJvbSAnLi9tZW51LXBvc2l0aW9uL21lbnUtcG9zaXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge05lc3RlZE1lbnVFeGFtcGxlfSBmcm9tICcuL25lc3RlZC1tZW51L25lc3RlZC1tZW51LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBNZW51SWNvbnNFeGFtcGxlLFxuICBNZW51T3ZlcnZpZXdFeGFtcGxlLFxuICBNZW51UG9zaXRpb25FeGFtcGxlLFxuICBOZXN0ZWRNZW51RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBNZW51SWNvbnNFeGFtcGxlLFxuICBNZW51T3ZlcnZpZXdFeGFtcGxlLFxuICBNZW51UG9zaXRpb25FeGFtcGxlLFxuICBOZXN0ZWRNZW51RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==