"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4006],{2529:(it,j,c)=>{c.d(j,{Pe:()=>A,Ph:()=>K,lG:()=>k,sU:()=>p});var v=c(8617),D=c(7987),o=c(6860),f=c(6939),T=c(177),r=c(4438),R=c(7336),y=c(1413),W=c(9030),N=c(7673),x=c(8203),w=c(9172);function z(m,u){}class A{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let p=(()=>{class m extends f.lb{constructor(t,e,s,d,g,h,C,O){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=d,this._interactivityChecker=g,this._ngZone=h,this._overlayRef=C,this._focusMonitor=O,this._platform=(0,r.WQX)(o.OD),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=(0,r.WQX)(r.gRc),this.attachDomPortal=H=>{this._portalOutlet.hasAttached();const V=this._portalOutlet.attachDomPortal(H);return this._contentAttached(),V},this._document=s,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){const e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const s=()=>{t.removeEventListener("blur",s),t.removeEventListener("mousedown",s),t.removeAttribute("tabindex")};t.addEventListener("blur",s),t.addEventListener("mousedown",s)})),t.focus(e)}_focusByCssSelector(t,e){let s=this._elementRef.nativeElement.querySelector(t);s&&this._forceFocus(s,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const s=(0,o.vc)(),d=this._elementRef.nativeElement;(!s||s===this._document.body||s===d||d.contains(s))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,o.vc)();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,o.vc)()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static#t=this.\u0275fac=function(e){return new(e||m)(r.rXU(r.aKT),r.rXU(v.GX),r.rXU(T.qQ,8),r.rXU(A),r.rXU(v.Z7),r.rXU(r.SKi),r.rXU(D.yY),r.rXU(v.FN))};static#e=this.\u0275cmp=r.VBU({type:m,selectors:[["cdk-dialog-container"]],viewQuery:function(e,s){if(1&e&&r.GBs(f.I3,7),2&e){let d;r.mGM(d=r.lsd())&&(s._portalOutlet=d.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,s){2&e&&r.BMQ("id",s._config.id||null)("role",s._config.role)("aria-modal",s._config.ariaModal)("aria-labelledby",s._config.ariaLabel?null:s._ariaLabelledByQueue[0])("aria-label",s._config.ariaLabel)("aria-describedby",s._config.ariaDescribedBy||null)},standalone:!0,features:[r.Vt3,r.aNF],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,s){1&e&&r.DNE(0,z,0,0,"ng-template",0)},dependencies:[f.I3],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return m})();class P{constructor(u,t){this.overlayRef=u,this.config=t,this.closed=new y.B,this.disableClose=t.disableClose,this.backdropClick=u.backdropClick(),this.keydownEvents=u.keydownEvents(),this.outsidePointerEvents=u.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===R._f&&!this.disableClose&&!(0,R.rp)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=u.detachments().subscribe(()=>{!1!==t.closeOnOverlayDetachments&&this.close()})}close(u,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(u),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(u="",t=""){return this.overlayRef.updateSize({width:u,height:t}),this}addPanelClass(u){return this.overlayRef.addPanelClass(u),this}removePanelClass(u){return this.overlayRef.removePanelClass(u),this}}const M=new r.nKC("DialogScrollStrategy",{providedIn:"root",factory:()=>{const m=(0,r.WQX)(D.hJ);return()=>m.scrollStrategies.block()}}),I=new r.nKC("DialogData"),S=new r.nKC("DefaultDialogConfig");let X=0,k=(()=>{class m{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,s,d,g,h){this._overlay=t,this._injector=e,this._defaultOptions=s,this._parentDialog=d,this._overlayContainer=g,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new y.B,this._afterOpenedAtThisLevel=new y.B,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,W.v)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,w.Z)(void 0))),this._scrollStrategy=h}open(t,e){(e={...this._defaultOptions||new A,...e}).id=e.id||"cdk-dialog-"+X++,e.id&&this.getDialogById(e.id);const d=this._getOverlayConfig(e),g=this._overlay.create(d),h=new P(g,e),C=this._attachContainer(g,h,e);return h.containerInstance=C,this._attachDialogContent(t,h,C,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){L(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){L(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),L(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new D.rR({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,s){const d=s.injector||s.viewContainerRef?.injector,g=[{provide:A,useValue:s},{provide:P,useValue:e},{provide:D.yY,useValue:t}];let h;s.container?"function"==typeof s.container?h=s.container:(h=s.container.type,g.push(...s.container.providers(s))):h=p;const C=new f.A8(h,s.viewContainerRef,r.zZn.create({parent:d||this._injector,providers:g}),s.componentFactoryResolver);return t.attach(C).instance}_attachDialogContent(t,e,s,d){if(t instanceof r.C4Q){const g=this._createInjector(d,e,s,void 0);let h={$implicit:d.data,dialogRef:e};d.templateContext&&(h={...h,..."function"==typeof d.templateContext?d.templateContext():d.templateContext}),s.attachTemplatePortal(new f.VA(t,null,h,g))}else{const g=this._createInjector(d,e,s,this._injector),h=s.attachComponentPortal(new f.A8(t,d.viewContainerRef,g,d.componentFactoryResolver));e.componentRef=h,e.componentInstance=h.instance}}_createInjector(t,e,s,d){const g=t.injector||t.viewContainerRef?.injector,h=[{provide:I,useValue:t.data},{provide:P,useValue:e}];return t.providers&&("function"==typeof t.providers?h.push(...t.providers(e,t,s)):h.push(...t.providers)),t.direction&&(!g||!g.get(x.dS,null,{optional:!0}))&&h.push({provide:x.dS,useValue:{value:t.direction,change:(0,N.of)()}}),r.zZn.create({parent:g||d,providers:h})}_removeOpenDialog(t,e){const s=this.openDialogs.indexOf(t);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((d,g)=>{d?g.setAttribute("aria-hidden",d):g.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let s=e.length-1;s>-1;s--){const d=e[s];d!==t&&"SCRIPT"!==d.nodeName&&"STYLE"!==d.nodeName&&!d.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(d,d.getAttribute("aria-hidden")),d.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static#t=this.\u0275fac=function(e){return new(e||m)(r.KVO(D.hJ),r.KVO(r.zZn),r.KVO(S,8),r.KVO(m,12),r.KVO(D.Sf),r.KVO(M))};static#e=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();function L(m,u){let t=m.length;for(;t--;)u(m[t])}let K=(()=>{class m{static#t=this.\u0275fac=function(e){return new(e||m)};static#e=this.\u0275mod=r.$C({type:m});static#i=this.\u0275inj=r.G2t({providers:[k],imports:[D.z_,f.jc,v.Pd,f.jc]})}return m})()},4006:(it,j,c)=>{c.d(j,{BI:()=>Z,CP:()=>u,E7:()=>J,Vh:()=>e,Yi:()=>$,bZ:()=>O,hM:()=>at,tx:()=>V});var v=c(7987),D=c(177),o=c(4438),f=c(8617),T=c(2529),r=c(4085),R=c(6939),y=c(1413),W=c(7786),N=c(9030),x=c(5964),w=c(6697),z=c(9172),A=c(7336),G=c(6600);function P(a,_){}c(9969);class M{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const I="mdc-dialog--open",S="mdc-dialog--opening",U="mdc-dialog--closing";let k=(()=>{class a extends T.sU{constructor(i,n,l,E,b,B,F,et,ot){super(i,n,l,E,b,B,F,ot),this._animationMode=et,this._animationStateChanged=new o.bkB,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?K(this._config.enterAnimationDuration)??150:0,this._exitAnimationDuration=this._animationsEnabled?K(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(L,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(S,I)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(I),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(I),this._animationsEnabled?(this._hostElement.style.setProperty(L,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(U)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(i){this._actionSectionCount+=i,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(S,U)}_waitForAnimationToComplete(i,n){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,i)}_requestAnimationFrame(i){this._ngZone.runOutsideAngular(()=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(i):i()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(i){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:i})}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}attachComponentPortal(i){const n=super.attachComponentPortal(i);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static#t=this.\u0275fac=function(n){return new(n||a)(o.rXU(o.aKT),o.rXU(f.GX),o.rXU(D.qQ,8),o.rXU(M),o.rXU(f.Z7),o.rXU(o.SKi),o.rXU(v.yY),o.rXU(o.bc$,8),o.rXU(f.FN))};static#e=this.\u0275cmp=o.VBU({type:a,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,l){2&n&&(o.Mr5("id",l._config.id),o.BMQ("aria-modal",l._config.ariaModal)("role",l._config.role)("aria-labelledby",l._config.ariaLabel?null:l._ariaLabelledByQueue[0])("aria-label",l._config.ariaLabel)("aria-describedby",l._config.ariaDescribedBy||null),o.AVh("_mat-animation-noopable",!l._animationsEnabled)("mat-mdc-dialog-container-with-actions",l._actionSectionCount>0))},standalone:!0,features:[o.Vt3,o.aNF],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,l){1&n&&(o.j41(0,"div",0)(1,"div",1),o.DNE(2,P,0,0,"ng-template",2),o.k0s()())},dependencies:[R.I3],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2})}return a})();const L="--mat-dialog-transition-duration";function K(a){return null==a?null:"number"==typeof a?a:a.endsWith("ms")?(0,r.OE)(a.substring(0,a.length-2)):a.endsWith("s")?1e3*(0,r.OE)(a.substring(0,a.length-1)):"0"===a?0:null}var m=function(a){return a[a.OPEN=0]="OPEN",a[a.CLOSING=1]="CLOSING",a[a.CLOSED=2]="CLOSED",a}(m||{});class u{constructor(_,i,n){this._ref=_,this._containerInstance=n,this._afterOpened=new y.B,this._beforeClosed=new y.B,this._state=m.OPEN,this.disableClose=i.disableClose,this.id=_.id,_.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe((0,x.p)(l=>"opened"===l.state),(0,w.s)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe((0,x.p)(l=>"closed"===l.state),(0,w.s)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),_.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,W.h)(this.backdropClick(),this.keydownEvents().pipe((0,x.p)(l=>l.keyCode===A._f&&!this.disableClose&&!(0,A.rp)(l)))).subscribe(l=>{this.disableClose||(l.preventDefault(),t(this,"keydown"===l.type?"keyboard":"mouse"))})}close(_){this._result=_,this._containerInstance._animationStateChanged.pipe((0,x.p)(i=>"closing"===i.state),(0,w.s)(1)).subscribe(i=>{this._beforeClosed.next(_),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=m.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(_){let i=this._ref.config.positionStrategy;return _&&(_.left||_.right)?_.left?i.left(_.left):i.right(_.right):i.centerHorizontally(),_&&(_.top||_.bottom)?_.top?i.top(_.top):i.bottom(_.bottom):i.centerVertically(),this._ref.updatePosition(),this}updateSize(_="",i=""){return this._ref.updateSize(_,i),this}addPanelClass(_){return this._ref.addPanelClass(_),this}removePanelClass(_){return this._ref.removePanelClass(_),this}getState(){return this._state}_finishDialogClose(){this._state=m.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function t(a,_,i){return a._closeInteractionType=_,a.close(i)}const e=new o.nKC("MatMdcDialogData"),s=new o.nKC("mat-mdc-dialog-default-options"),d=new o.nKC("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{const a=(0,o.WQX)(v.hJ);return()=>a.scrollStrategies.block()}});let C=0,O=(()=>{class a{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const i=this._parentDialog;return i?i._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(i,n,l,E,b,B,F,et){this._overlay=i,this._defaultOptions=E,this._scrollStrategy=b,this._parentDialog=B,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new y.B,this._afterOpenedAtThisLevel=new y.B,this.dialogConfigClass=M,this.afterAllClosed=(0,N.v)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,z.Z)(void 0))),this._dialog=n.get(T.lG),this._dialogRefConstructor=u,this._dialogContainerType=k,this._dialogDataToken=e}open(i,n){let l;(n={...this._defaultOptions||new M,...n}).id=n.id||"mat-mdc-dialog-"+C++,n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();const E=this._dialog.open(i,{...n,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:T.Pe,useValue:n}]},templateContext:()=>({dialogRef:l}),providers:(b,B,F)=>(l=new this._dialogRefConstructor(b,n,F),l.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:F},{provide:this._dialogDataToken,useValue:B.data},{provide:this._dialogRefConstructor,useValue:l}])});return l.componentRef=E.componentRef,l.componentInstance=E.componentInstance,this.openDialogs.push(l),this.afterOpened.next(l),l.afterClosed().subscribe(()=>{const b=this.openDialogs.indexOf(l);b>-1&&(this.openDialogs.splice(b,1),this.openDialogs.length||this._getAfterAllClosed().next())}),l}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(i){return this.openDialogs.find(n=>n.id===i)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(i){let n=i.length;for(;n--;)i[n].close()}static#t=this.\u0275fac=function(n){return new(n||a)(o.KVO(v.hJ),o.KVO(o.zZn),o.KVO(D.aZ,8),o.KVO(s,8),o.KVO(d),o.KVO(a,12),o.KVO(v.Sf),o.KVO(o.bc$,8))};static#e=this.\u0275prov=o.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),H=0,V=(()=>{class a{constructor(i,n,l){this.dialogRef=i,this._elementRef=n,this._dialog=l,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=q(this._elementRef,this._dialog.openDialogs))}ngOnChanges(i){const n=i._matDialogClose||i._matDialogCloseResult;n&&(this.dialogResult=n.currentValue)}_onButtonClick(i){t(this.dialogRef,0===i.screenX&&0===i.screenY?"keyboard":"mouse",this.dialogResult)}static#t=this.\u0275fac=function(n){return new(n||a)(o.rXU(u,8),o.rXU(o.aKT),o.rXU(O))};static#e=this.\u0275dir=o.FsC({type:a,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(n,l){1&n&&o.bIt("click",function(b){return l._onButtonClick(b)}),2&n&&o.BMQ("aria-label",l.ariaLabel||null)("type",l.type)},inputs:{ariaLabel:[o.Mj6.None,"aria-label","ariaLabel"],type:"type",dialogResult:[o.Mj6.None,"mat-dialog-close","dialogResult"],_matDialogClose:[o.Mj6.None,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[o.OA$]})}return a})(),Y=(()=>{class a{constructor(i,n,l){this._dialogRef=i,this._elementRef=n,this._dialog=l}ngOnInit(){this._dialogRef||(this._dialogRef=q(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static#t=this.\u0275fac=function(n){return new(n||a)(o.rXU(u,8),o.rXU(o.aKT),o.rXU(O))};static#e=this.\u0275dir=o.FsC({type:a,standalone:!0})}return a})(),Z=(()=>{class a extends Y{constructor(){super(...arguments),this.id="mat-mdc-dialog-title-"+H++}_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static#t=this.\u0275fac=(()=>{let i;return function(l){return(i||(i=o.xGo(a)))(l||a)}})();static#e=this.\u0275dir=o.FsC({type:a,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,l){2&n&&o.Mr5("id",l.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0,features:[o.Vt3]})}return a})(),$=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275dir=o.FsC({type:a,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0})}return a})(),J=(()=>{class a extends Y{_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static#t=this.\u0275fac=(()=>{let i;return function(l){return(i||(i=o.xGo(a)))(l||a)}})();static#e=this.\u0275dir=o.FsC({type:a,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(n,l){2&n&&o.AVh("mat-mdc-dialog-actions-align-start","start"===l.align)("mat-mdc-dialog-actions-align-center","center"===l.align)("mat-mdc-dialog-actions-align-end","end"===l.align)},inputs:{align:"align"},standalone:!0,features:[o.Vt3]})}return a})();function q(a,_){let i=a.nativeElement.parentElement;for(;i&&!i.classList.contains("mat-mdc-dialog-container");)i=i.parentElement;return i?_.find(n=>n.id===i.id):null}let at=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=o.$C({type:a});static#i=this.\u0275inj=o.G2t({providers:[O],imports:[T.Ph,v.z_,R.jc,G.yE,G.yE]})}return a})()}}]);