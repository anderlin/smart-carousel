/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './ngx-agile-slider-container.component.css.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from './ngx-agile-slider-container.component';
import * as import4 from '../services/lazy-loader.service';
const styles_SliderContainerComponent:any[] = [import0.styles];
export const RenderType_SliderContainerComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 2,
  styles: styles_SliderContainerComponent,
  data: {}
}
);
function View_SliderContainerComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),10,'span',[[
        'class',
        'ngx-agile-slider-prev'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onClickPrev()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,':svg:svg',[
      [
        'height',
        '50'
      ]
      ,
      [
        'viewBox',
        '0 0 501.5 501.5'
      ]
      ,
      [
        'width',
        '50'
      ]
      ,
      [
        'xmlns',
        'http://www.w3.org/2000/svg'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,':svg:g',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,':svg:path',[[
        'd',
        'M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.deactivatePrev;
    ck(v,7,0,currVal_0);
  },(null as any));
}
function View_SliderContainerComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),10,'span',[[
        'class',
        'ngx-agile-slider-next'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onClickNext()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,':svg:svg',[
      [
        'height',
        '50'
      ]
      ,
      [
        'viewBox',
        '0 0 501.5 501.5'
      ]
      ,
      [
        'width',
        '50'
      ]
      ,
      [
        'xmlns',
        'http://www.w3.org/2000/svg'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,':svg:g',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,':svg:path',[[
        'd',
        'M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.deactivateNext;
    ck(v,7,0,currVal_0);
  },(null as any));
}
function View_SliderContainerComponent_4(l:any):import1.ɵViewDefinition {
      return import1.ɵvid(0,[(l()(),import1.ɵeld(0,(null as any),(null as any),0,'li',[[
        'class',
        'ngx-agile-slider-nav-dots'
      ]
      ],[[
        2,
        'active',
        (null as any)
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onClickNavigationItem(v.context.index)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
  },(null as any),(null as any)))],(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit.active;
    ck(v,0,0,currVal_0);
  });
}
function View_SliderContainerComponent_3(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'ul',[[
        'class',
        'ngx-agile-slider-dots'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_SliderContainerComponent_4)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.navigationItems;
    ck(v,3,0,currVal_0);
  },(null as any));
}
export function View_SliderContainerComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵqud(201326592,1,{container: 0}),
    import1.ɵqud(201326592,2,{frame: 0}),
    import1.ɵqud(201326592,3,{sliderList: 0}),
    (l()(),import1.ɵeld(0,[
      [
        1,
        0
      ]
      ,
      [
        'sliderContainer',
        1
      ]

    ]
      ,(null as any),20,'div',[[
        'class',
        'ngx-agile-slider-container'
      ]
      ],[[
        1,
        'id',
        0
      ]
    ],[
      [
        (null as any),
        'swipeleft'
      ]
      ,
      [
        (null as any),
        'swiperight'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.SliderContainerComponent = v.component;
      if (('swipeleft' === en)) {
        const pd_0:any = ((<any>co.onSwipe($event.type)) !== false);
        ad = (pd_0 && ad);
      }
      if (('swiperight' === en)) {
        const pd_1:any = ((<any>co.onSwipe($event.type)) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
    (l()(),import1.ɵeld(0,[
      [
        2,
        0
      ]
      ,
      [
        'sliderFrame',
        1
      ]

    ]
      ,(null as any),8,'div',[[
        'class',
        'ngx-agile-slider-frame'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    import1.ɵpod(['ngx-agile-slider-touch-frame']),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,[
      [
        3,
        0
      ]
      ,
      [
        'sliderList',
        1
      ]

    ]
      ,(null as any),3,'ul',[[
        'class',
        'ngx-agile-slider-slides'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    import1.ɵncd((null as any),0),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_SliderContainerComponent_1)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_SliderContainerComponent_2)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_SliderContainerComponent_3)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.SliderContainerComponent = v.component;
    const currVal_1:any = 'ngx-agile-slider-frame';
    const currVal_2:any = ck(v,7,0,co.touchCursor);
    ck(v,6,0,currVal_1,currVal_2);
    const currVal_3:any = co.sliderActive;
    ck(v,16,0,currVal_3);
    const currVal_4:any = co.sliderActive;
    ck(v,19,0,currVal_4);
    const currVal_5:any = co.navigation;
    ck(v,22,0,currVal_5);
  },(ck,v) => {
    var co:import3.SliderContainerComponent = v.component;
    const currVal_0:any = co.containerId;
    ck(v,3,0,currVal_0);
  });
}
function View_SliderContainerComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'ngx-agile-slider-container',([] as any[]),(null as any),(null as any),(null as any),View_SliderContainerComponent_0,RenderType_SliderContainerComponent)),
    import1.ɵdid(2187264,(null as any),0,import3.SliderContainerComponent,[
      import4.LazyLoaderService,
      import1.Renderer,
      import1.ChangeDetectorRef
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const SliderContainerComponentNgFactory:import1.ComponentFactory<import3.SliderContainerComponent> = import1.ɵccf('ngx-agile-slider-container',import3.SliderContainerComponent,View_SliderContainerComponent_Host_0,{
  sliderOptions: 'sliderOptions',
  containerId: 'containerId'
}
,{
  beforeInit: 'beforeInit',
  afterInit: 'afterInit',
  beforeSlide: 'beforeSlide',
  afterSlide: 'afterSlide',
  next: 'next',
  prev: 'prev'
}
,['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL21udC9oZDIvd29yay9wcm9qZWN0cy9wcml2YXRlL25neC1hZ2lsZS1zbGlkZXIvc3JjL2FwcC9jYXJvdXNlbC9jb21wb25lbnRzL25neC1hZ2lsZS1zbGlkZXItY29udGFpbmVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9tbnQvaGQyL3dvcmsvcHJvamVjdHMvcHJpdmF0ZS9uZ3gtYWdpbGUtc2xpZGVyL3NyYy9hcHAvY2Fyb3VzZWwvY29tcG9uZW50cy9uZ3gtYWdpbGUtc2xpZGVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovLy9tbnQvaGQyL3dvcmsvcHJvamVjdHMvcHJpdmF0ZS9uZ3gtYWdpbGUtc2xpZGVyL3NyYy9hcHAvY2Fyb3VzZWwvY29tcG9uZW50cy9uZ3gtYWdpbGUtc2xpZGVyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCIsIm5nOi8vL21udC9oZDIvd29yay9wcm9qZWN0cy9wcml2YXRlL25neC1hZ2lsZS1zbGlkZXIvc3JjL2FwcC9jYXJvdXNlbC9jb21wb25lbnRzL25neC1hZ2lsZS1zbGlkZXItY29udGFpbmVyLmNvbXBvbmVudC50cy5TbGlkZXJDb250YWluZXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2ICNzbGlkZXJDb250YWluZXJcbiAgICAgY2xhc3M9XCJuZ3gtYWdpbGUtc2xpZGVyLWNvbnRhaW5lclwiXG4gICAgIFthdHRyLmlkXT1cImNvbnRhaW5lcklkXCJcbiAgICAgKHN3aXBlbGVmdCk9XCJvblN3aXBlKCRldmVudC50eXBlKVwiXG4gICAgIChzd2lwZXJpZ2h0KT1cIm9uU3dpcGUoJGV2ZW50LnR5cGUpXCI+XG5cbiAgPGRpdiAjc2xpZGVyRnJhbWUgY2xhc3M9XCJuZ3gtYWdpbGUtc2xpZGVyLWZyYW1lXCIgW25nQ2xhc3NdPVwieyduZ3gtYWdpbGUtc2xpZGVyLXRvdWNoLWZyYW1lJzogdG91Y2hDdXJzb3J9XCI+XG4gICAgPHVsICNzbGlkZXJMaXN0IGNsYXNzPVwibmd4LWFnaWxlLXNsaWRlci1zbGlkZXNcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8c3BhbiBjbGFzcz1cIm5neC1hZ2lsZS1zbGlkZXItcHJldlwiIChjbGljayk9XCJvbkNsaWNrUHJldigpXCIgKm5nSWY9XCJzbGlkZXJBY3RpdmVcIj5cbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiB2aWV3Qm94PVwiMCAwIDUwMS41IDUwMS41XCI+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggW25nQ2xhc3NdPVwiZGVhY3RpdmF0ZVByZXZcIlxuICAgICAgICAgICAgICBkPVwiTTMwMi42NyA5MC44NzdsNTUuNzcgNTUuNTA4TDI1NC41NzUgMjUwLjc1IDM1OC40NCAzNTUuMTE2bC01NS43NyA1NS41MDZMMTQzLjU2IDI1MC43NXpcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvc3Bhbj5cblxuICA8c3BhbiBjbGFzcz1cIm5neC1hZ2lsZS1zbGlkZXItbmV4dFwiIChjbGljayk9XCJvbkNsaWNrTmV4dCgpXCIgKm5nSWY9XCJzbGlkZXJBY3RpdmVcIj5cbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiB2aWV3Qm94PVwiMCAwIDUwMS41IDUwMS41XCI+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggW25nQ2xhc3NdPVwiZGVhY3RpdmF0ZU5leHRcIlxuICAgICAgICAgICAgICBkPVwiTTE5OS4zMyA0MTAuNjIybC01NS43Ny01NS41MDhMMjQ3LjQyNSAyNTAuNzUgMTQzLjU2IDE0Ni4zODRsNTUuNzctNTUuNTA3TDM1OC40NCAyNTAuNzV6XCIvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICA8L3NwYW4+XG5cbiAgPHVsIGNsYXNzPVwibmd4LWFnaWxlLXNsaWRlci1kb3RzXCIgKm5nSWY9XCJuYXZpZ2F0aW9uXCI+XG4gICAgPGxpIGNsYXNzPVwibmd4LWFnaWxlLXNsaWRlci1uYXYtZG90c1wiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXRlbS5hY3RpdmVcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBuYXZpZ2F0aW9uSXRlbXM7IGxldCBpZHggPSBpbmRleFwiXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrTmF2aWdhdGlvbkl0ZW0oaWR4KVwiXG4gICAgPjwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cbiIsIjxuZ3gtYWdpbGUtc2xpZGVyLWNvbnRhaW5lcj48L25neC1hZ2lsZS1zbGlkZXItY29udGFpbmVyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNZRTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQW9DO1FBQUE7UUFBQTtNQUFBO01BQXBDO0lBQUE7SUFBaUY7SUFDL0U7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQXlGO0lBQ3ZGO0lBQUc7TUFDRDtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUNrRztJQUNoRztJQUNBOzs7O0lBSEk7SUFBTixTQUFNLFNBQU47Ozs7O01BTU47UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFvQztRQUFBO1FBQUE7TUFBQTtNQUFwQztJQUFBO0lBQWlGO0lBQy9FO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUF5RjtJQUN2RjtJQUFHO01BQ0Q7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFDbUc7SUFDakc7SUFDQTs7OztJQUhJO0lBQU4sU0FBTSxTQUFOOzs7OzZCQU9KO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BR0k7UUFBQTtRQUFBO01BQUE7TUFISjtFQUFBO0lBQ0k7SUFESixTQUNJLFNBREo7Ozs7O01BREY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxRDtJQUNuRDtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUlNOzs7O0lBRkY7SUFGSixTQUVJLFNBRko7Ozs7Ozs7O0lBL0JKO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BR0s7UUFBQTtRQUFBO01BQUE7TUFDQTtRQUFBO1FBQUE7TUFBQTtNQUpMO0lBQUE7SUFJeUM7SUFFdkM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQWlEO0lBQTBEO0lBQ3pHO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdEO2dCQUM5QztJQUF5QjtJQUN0QjtJQUNEO0lBRU47Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQU9PO0lBRVA7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQU9PO0lBRVA7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQU1LO0lBQ0Q7Ozs7SUEvQmM7SUFBK0I7SUFBakQsU0FBa0IsVUFBK0IsU0FBakQ7SUFNNEQ7SUFBNUQsVUFBNEQsU0FBNUQ7SUFTNEQ7SUFBNUQsVUFBNEQsU0FBNUQ7SUFTa0M7SUFBbEMsVUFBa0MsU0FBbEM7OztJQTVCRztJQUZMLFNBRUssU0FGTDs7Ozs7SUNBQTtnQkFBQTs7OztJQUFBO0tBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7In0=