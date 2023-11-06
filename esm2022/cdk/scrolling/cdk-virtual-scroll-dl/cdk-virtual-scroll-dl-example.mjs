import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scrolling `<dl>` */
export class CdkVirtualScrollDlExample {
    constructor() {
        this.states = [
            { name: 'Alabama', capital: 'Montgomery' },
            { name: 'Alaska', capital: 'Juneau' },
            { name: 'Arizona', capital: 'Phoenix' },
            { name: 'Arkansas', capital: 'Little Rock' },
            { name: 'California', capital: 'Sacramento' },
            { name: 'Colorado', capital: 'Denver' },
            { name: 'Connecticut', capital: 'Hartford' },
            { name: 'Delaware', capital: 'Dover' },
            { name: 'Florida', capital: 'Tallahassee' },
            { name: 'Georgia', capital: 'Atlanta' },
            { name: 'Hawaii', capital: 'Honolulu' },
            { name: 'Idaho', capital: 'Boise' },
            { name: 'Illinois', capital: 'Springfield' },
            { name: 'Indiana', capital: 'Indianapolis' },
            { name: 'Iowa', capital: 'Des Moines' },
            { name: 'Kansas', capital: 'Topeka' },
            { name: 'Kentucky', capital: 'Frankfort' },
            { name: 'Louisiana', capital: 'Baton Rouge' },
            { name: 'Maine', capital: 'Augusta' },
            { name: 'Maryland', capital: 'Annapolis' },
            { name: 'Massachusetts', capital: 'Boston' },
            { name: 'Michigan', capital: 'Lansing' },
            { name: 'Minnesota', capital: 'St. Paul' },
            { name: 'Mississippi', capital: 'Jackson' },
            { name: 'Missouri', capital: 'Jefferson City' },
            { name: 'Montana', capital: 'Helena' },
            { name: 'Nebraska', capital: 'Lincoln' },
            { name: 'Nevada', capital: 'Carson City' },
            { name: 'New Hampshire', capital: 'Concord' },
            { name: 'New Jersey', capital: 'Trenton' },
            { name: 'New Mexico', capital: 'Santa Fe' },
            { name: 'New York', capital: 'Albany' },
            { name: 'North Carolina', capital: 'Raleigh' },
            { name: 'North Dakota', capital: 'Bismarck' },
            { name: 'Ohio', capital: 'Columbus' },
            { name: 'Oklahoma', capital: 'Oklahoma City' },
            { name: 'Oregon', capital: 'Salem' },
            { name: 'Pennsylvania', capital: 'Harrisburg' },
            { name: 'Rhode Island', capital: 'Providence' },
            { name: 'South Carolina', capital: 'Columbia' },
            { name: 'South Dakota', capital: 'Pierre' },
            { name: 'Tennessee', capital: 'Nashville' },
            { name: 'Texas', capital: 'Austin' },
            { name: 'Utah', capital: 'Salt Lake City' },
            { name: 'Vermont', capital: 'Montpelier' },
            { name: 'Virginia', capital: 'Richmond' },
            { name: 'Washington', capital: 'Olympia' },
            { name: 'West Virginia', capital: 'Charleston' },
            { name: 'Wisconsin', capital: 'Madison' },
            { name: 'Wyoming', capital: 'Cheyenne' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollDlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: CdkVirtualScrollDlExample, isStandalone: true, selector: "cdk-virtual-scroll-dl-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollDlExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-dl-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC9jZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWRsL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUV2RCxzQ0FBc0M7QUFTdEMsTUFBTSxPQUFPLHlCQUF5QjtJQVJ0QztRQVNFLFdBQU0sR0FBRztZQUNQLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDO1lBQ2pDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3RDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7WUFDcEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDdEMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDekMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7WUFDckMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ2xDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUM7WUFDekMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDOUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7U0FDdkMsQ0FBQztLQUNIO21IQXJEWSx5QkFBeUI7dUdBQXpCLHlCQUF5Qix5RkNadEMsNlVBUUEsZ1BERVksZUFBZTs7Z0dBRWQseUJBQXlCO2tCQVJyQyxTQUFTOytCQUNFLCtCQUErQixtQkFHeEIsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsaW5nIGA8ZGw+YCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbU2Nyb2xsaW5nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbERsRXhhbXBsZSB7XG4gIHN0YXRlcyA9IFtcbiAgICB7bmFtZTogJ0FsYWJhbWEnLCBjYXBpdGFsOiAnTW9udGdvbWVyeSd9LFxuICAgIHtuYW1lOiAnQWxhc2thJywgY2FwaXRhbDogJ0p1bmVhdSd9LFxuICAgIHtuYW1lOiAnQXJpem9uYScsIGNhcGl0YWw6ICdQaG9lbml4J30sXG4gICAge25hbWU6ICdBcmthbnNhcycsIGNhcGl0YWw6ICdMaXR0bGUgUm9jayd9LFxuICAgIHtuYW1lOiAnQ2FsaWZvcm5pYScsIGNhcGl0YWw6ICdTYWNyYW1lbnRvJ30sXG4gICAge25hbWU6ICdDb2xvcmFkbycsIGNhcGl0YWw6ICdEZW52ZXInfSxcbiAgICB7bmFtZTogJ0Nvbm5lY3RpY3V0JywgY2FwaXRhbDogJ0hhcnRmb3JkJ30sXG4gICAge25hbWU6ICdEZWxhd2FyZScsIGNhcGl0YWw6ICdEb3Zlcid9LFxuICAgIHtuYW1lOiAnRmxvcmlkYScsIGNhcGl0YWw6ICdUYWxsYWhhc3NlZSd9LFxuICAgIHtuYW1lOiAnR2VvcmdpYScsIGNhcGl0YWw6ICdBdGxhbnRhJ30sXG4gICAge25hbWU6ICdIYXdhaWknLCBjYXBpdGFsOiAnSG9ub2x1bHUnfSxcbiAgICB7bmFtZTogJ0lkYWhvJywgY2FwaXRhbDogJ0JvaXNlJ30sXG4gICAge25hbWU6ICdJbGxpbm9pcycsIGNhcGl0YWw6ICdTcHJpbmdmaWVsZCd9LFxuICAgIHtuYW1lOiAnSW5kaWFuYScsIGNhcGl0YWw6ICdJbmRpYW5hcG9saXMnfSxcbiAgICB7bmFtZTogJ0lvd2EnLCBjYXBpdGFsOiAnRGVzIE1vaW5lcyd9LFxuICAgIHtuYW1lOiAnS2Fuc2FzJywgY2FwaXRhbDogJ1RvcGVrYSd9LFxuICAgIHtuYW1lOiAnS2VudHVja3knLCBjYXBpdGFsOiAnRnJhbmtmb3J0J30sXG4gICAge25hbWU6ICdMb3Vpc2lhbmEnLCBjYXBpdGFsOiAnQmF0b24gUm91Z2UnfSxcbiAgICB7bmFtZTogJ01haW5lJywgY2FwaXRhbDogJ0F1Z3VzdGEnfSxcbiAgICB7bmFtZTogJ01hcnlsYW5kJywgY2FwaXRhbDogJ0FubmFwb2xpcyd9LFxuICAgIHtuYW1lOiAnTWFzc2FjaHVzZXR0cycsIGNhcGl0YWw6ICdCb3N0b24nfSxcbiAgICB7bmFtZTogJ01pY2hpZ2FuJywgY2FwaXRhbDogJ0xhbnNpbmcnfSxcbiAgICB7bmFtZTogJ01pbm5lc290YScsIGNhcGl0YWw6ICdTdC4gUGF1bCd9LFxuICAgIHtuYW1lOiAnTWlzc2lzc2lwcGknLCBjYXBpdGFsOiAnSmFja3Nvbid9LFxuICAgIHtuYW1lOiAnTWlzc291cmknLCBjYXBpdGFsOiAnSmVmZmVyc29uIENpdHknfSxcbiAgICB7bmFtZTogJ01vbnRhbmEnLCBjYXBpdGFsOiAnSGVsZW5hJ30sXG4gICAge25hbWU6ICdOZWJyYXNrYScsIGNhcGl0YWw6ICdMaW5jb2xuJ30sXG4gICAge25hbWU6ICdOZXZhZGEnLCBjYXBpdGFsOiAnQ2Fyc29uIENpdHknfSxcbiAgICB7bmFtZTogJ05ldyBIYW1wc2hpcmUnLCBjYXBpdGFsOiAnQ29uY29yZCd9LFxuICAgIHtuYW1lOiAnTmV3IEplcnNleScsIGNhcGl0YWw6ICdUcmVudG9uJ30sXG4gICAge25hbWU6ICdOZXcgTWV4aWNvJywgY2FwaXRhbDogJ1NhbnRhIEZlJ30sXG4gICAge25hbWU6ICdOZXcgWW9yaycsIGNhcGl0YWw6ICdBbGJhbnknfSxcbiAgICB7bmFtZTogJ05vcnRoIENhcm9saW5hJywgY2FwaXRhbDogJ1JhbGVpZ2gnfSxcbiAgICB7bmFtZTogJ05vcnRoIERha290YScsIGNhcGl0YWw6ICdCaXNtYXJjayd9LFxuICAgIHtuYW1lOiAnT2hpbycsIGNhcGl0YWw6ICdDb2x1bWJ1cyd9LFxuICAgIHtuYW1lOiAnT2tsYWhvbWEnLCBjYXBpdGFsOiAnT2tsYWhvbWEgQ2l0eSd9LFxuICAgIHtuYW1lOiAnT3JlZ29uJywgY2FwaXRhbDogJ1NhbGVtJ30sXG4gICAge25hbWU6ICdQZW5uc3lsdmFuaWEnLCBjYXBpdGFsOiAnSGFycmlzYnVyZyd9LFxuICAgIHtuYW1lOiAnUmhvZGUgSXNsYW5kJywgY2FwaXRhbDogJ1Byb3ZpZGVuY2UnfSxcbiAgICB7bmFtZTogJ1NvdXRoIENhcm9saW5hJywgY2FwaXRhbDogJ0NvbHVtYmlhJ30sXG4gICAge25hbWU6ICdTb3V0aCBEYWtvdGEnLCBjYXBpdGFsOiAnUGllcnJlJ30sXG4gICAge25hbWU6ICdUZW5uZXNzZWUnLCBjYXBpdGFsOiAnTmFzaHZpbGxlJ30sXG4gICAge25hbWU6ICdUZXhhcycsIGNhcGl0YWw6ICdBdXN0aW4nfSxcbiAgICB7bmFtZTogJ1V0YWgnLCBjYXBpdGFsOiAnU2FsdCBMYWtlIENpdHknfSxcbiAgICB7bmFtZTogJ1Zlcm1vbnQnLCBjYXBpdGFsOiAnTW9udHBlbGllcid9LFxuICAgIHtuYW1lOiAnVmlyZ2luaWEnLCBjYXBpdGFsOiAnUmljaG1vbmQnfSxcbiAgICB7bmFtZTogJ1dhc2hpbmd0b24nLCBjYXBpdGFsOiAnT2x5bXBpYSd9LFxuICAgIHtuYW1lOiAnV2VzdCBWaXJnaW5pYScsIGNhcGl0YWw6ICdDaGFybGVzdG9uJ30sXG4gICAge25hbWU6ICdXaXNjb25zaW4nLCBjYXBpdGFsOiAnTWFkaXNvbid9LFxuICAgIHtuYW1lOiAnV3lvbWluZycsIGNhcGl0YWw6ICdDaGV5ZW5uZSd9LFxuICBdO1xufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIiBpdGVtU2l6ZT1cIjYwXCI+XG4gIDxkbCBjbGFzcz1cImV4YW1wbGUtZGxcIj5cbiAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IHN0YXRlIG9mIHN0YXRlc1wiPlxuICAgICAgPGR0IGNsYXNzPVwiZXhhbXBsZS1kdFwiPnt7c3RhdGUubmFtZX19PC9kdD5cbiAgICAgIDxkZCBjbGFzcz1cImV4YW1wbGUtZGRcIj57e3N0YXRlLmNhcGl0YWx9fTwvZGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGw+XG48L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiJdfQ==