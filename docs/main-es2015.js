(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-data */ "./src/app/menu-data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sections_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/introduction/introduction.component */ "./src/app/sections/introduction/introduction.component.ts");
/* harmony import */ var _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/projects/projects.component */ "./src/app/sections/projects/projects.component.ts");
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/contact/contact.component */ "./src/app/sections/contact/contact.component.ts");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/about/about.component */ "./src/app/sections/about/about.component.ts");










const _c0 = function (a0) { return { "active": a0 }; };
function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const index_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.menuSelect(index_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.currentHash == menu_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", menu_r2.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", menu_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r2.name);
} }
function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.menuSelect(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", menu_r6.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, menu_r6.id == ctx_r1.currentHash));
} }
class AppComponent {
    constructor() {
        this.menus = _menu_data__WEBPACK_IMPORTED_MODULE_1__["MENUS"];
        this.sectionIndex = 0;
        this.currentHash = 'home';
        this.menuIndex = [
            {
                index: 0,
                menu: 'home'
            },
            {
                index: 1,
                menu: 'projects'
            },
            {
                index: 2,
                menu: 'contact'
            },
            {
                index: 3,
                menu: 'about'
            }
        ];
    }
    get currentClass() {
        return `index-${this.sectionIndex}`;
    }
    ngOnInit() {
        this.getInitHash();
        this.onScroll();
        this.onHashChange();
    }
    menuSelect(index) {
        this.sectionIndex = index;
    }
    onScroll() {
        const wheelEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.body, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(1300));
        wheelEvent.subscribe((event) => {
            if (event.deltaY < 0) {
                if (this.sectionIndex > 0) {
                    this.sectionIndex--;
                }
            }
            else if (event.deltaY > 0) {
                if (this.sectionIndex < 3) {
                    this.sectionIndex++;
                }
            }
            this.setHash(this.sectionIndex);
        });
    }
    onHashChange() {
        const hashEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'hashchange');
        hashEvent.subscribe((event) => {
            const urlHash = event.newURL.split('#')[1];
            this.currentHash = urlHash;
        });
    }
    getInitHash() {
        this.currentHash = location.hash.replace('#', '');
        if (this.currentHash) {
            const menuI = this.menuIndex.find(mi => mi.menu == this.currentHash);
            this.sectionIndex = menuI ? menuI.index : 0;
        }
    }
    setHash(index) {
        const menuI = this.menuIndex.find(mi => mi.index == index);
        if (menuI) {
            location.hash = `#${menuI.menu}`;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["coeus-root"]], decls: 25, vars: 3, consts: [[1, "logo"], ["src", "assets/images/logo.png", 1, "logo-img"], [1, "logo-txt"], [1, "menu-wrapper"], ["id", "scroll-menu", 1, "menu"], ["class", "menu-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-points-wrapper"], [4, "ngFor", "ngForOf"], [1, "page-bg"], [1, "bg-cover-mask"], [1, "scroll-container", 3, "ngClass"], [1, "section"], ["href", "http://www.beian.miit.gov.cn", "target", "_blank", 1, "keep-on-record"], [1, "menu-item", 3, "ngClass"], [1, "menu-item-info", 3, "href", "click"], [1, "iconfont", 3, "ngClass"], [1, "name"], [3, "href", "ngClass", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Coeus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_li_7_Template, 5, 6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_li_10_Template, 3, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "coeus-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "coeus-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "coeus-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "coeus-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u8700ICP\u590719022432\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _sections_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"], _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 60px;\n  top: 32px;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.logo-txt[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #ff860d;\n  margin-left: 5px;\n}\n\n.keep-on-record[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n  color: #c5c5c5;\n  font-size: 12px;\n  transition-duration: 0.2s;\n  text-decoration: none;\n}\n\n.keep-on-record[_ngcontent-%COMP%]:hover {\n  color: #D1335B;\n}\n\n.page-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-image: url(/assets/images/bg3.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: -1;\n  top: 0;\n  left: 0;\n}\n\n.page-bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background: linear-gradient(to left, #D1335B, #00152e);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 0.7;\n}\n\n.bg-cover-mask[_ngcontent-%COMP%] {\n  background-color: rgba(2, 3, 10, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.menu-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 60px;\n  z-index: 2;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 60px;\n  z-index: 2;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  width: 14px;\n  height: 13px;\n  margin: 7px;\n  position: relative;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  text-decoration: none;\n  opacity: 0.2;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  z-index: 1;\n  height: 4px;\n  width: 4px;\n  border: 0;\n  background: #fff;\n  left: 50%;\n  top: 50%;\n  margin: -2px 0 0 -2px;\n  transition: all 0.1s ease-in-out;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  background: rgba(255, 255, 255, 0.15);\n  position: absolute;\n  content: \"\";\n  display: block;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  border-radius: 40px;\n  transition: 0.3s;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  margin: -4px 0 0 -4px;\n  border-radius: 100%;\n  background: #fff;\n  position: absolute;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  top: -4px;\n  left: -4px;\n  bottom: -4px;\n  right: -4px;\n  border-color: #ffffff;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n\n.nav-points-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  margin: -5px 0 0 -5px;\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  touch-action: none;\n  transform: translate3d(0px, 0px, 0px);\n  transition: all 0.7s ease 0s;\n}\n\n.scroll-container.index-1[_ngcontent-%COMP%] {\n  transform: translate3d(0px, -100%, 0px);\n}\n\n.scroll-container.index-2[_ngcontent-%COMP%] {\n  transform: translate3d(0px, -200%, 0px);\n}\n\n.scroll-container.index-3[_ngcontent-%COMP%] {\n  transform: translate3d(0px, -300%, 0px);\n}\n\n.scroll-container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  z-index: 1;\n  height: 100%;\n}\n\n.menu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  opacity: 0.5;\n}\n\n.menu-item.active[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.menu-item.active[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover   .iconfont[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #8b8b8b !important;\n}\n\n.menu-item.active[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .menu-item[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.menu-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.menu-item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #8b8b8b;\n  text-decoration: none;\n  transition-duration: 0.2s;\n}\n\n.menu-item-info[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  padding-top: 1px;\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  border-radius: 40px;\n  transition: 0.6s;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2ppbmdxaS9EZXNrdG9wL3Byb2plY3RzL3ByaXZhdGUtcHJvamVjdHMvb2ZmaWNhbC13ZWJzaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxjQUFBO0FDQ1I7O0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0FKOztBREVJO0VBQ0ksV0FBQTtFQUVBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0FSOztBRElBO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDREo7O0FER0k7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0RSOztBREdRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRFo7O0FER1k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDRGhCOztBREdnQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNEcEI7O0FER29CO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEeEI7O0FES2dCO0VBQ0ksVUFBQTtBQ0hwQjs7QURLb0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSHhCOztBREt3QjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0g1Qjs7QURRZ0I7RUFDSSxZQUFBO0FDTnBCOztBRFlvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNWeEI7O0FEa0JBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0FDZko7O0FEaUJJO0VBQ0ksdUNBQUE7QUNmUjs7QURrQkk7RUFDSSx1Q0FBQTtBQ2hCUjs7QURtQkk7RUFDSSx1Q0FBQTtBQ2pCUjs7QURvQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ2xCUjs7QURzQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDbkJKOztBRHNCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QURxQkk7RUFFSSxVQUFBO0FDcEJSOztBRHNCUTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7QUNwQlo7O0FEdUJRO0VBQ0ksY0FBQTtBQ3JCWjs7QUR5Qkk7RUFDSSxnQkFBQTtBQ3ZCUjs7QUQyQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUN4Qko7O0FEMEJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN4QlI7O0FENEJBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQ3pCSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIHRvcDogMzJweDtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby1pbWcge1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4ubG9nby10eHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmY4NjBkO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5rZWVwLW9uLXJlY29yZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiAjYzVjNWM1O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRDEzMzVCO1xuICAgIH1cbn1cblxuLnBhZ2UtYmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmczLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbSgjRDEzMzVCKSwgdG8oIzAwMTUyZSkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0QxMzM1QiwgIzAwMTUyZSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxufVxuXG4uYmctY292ZXItbWFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAzLCAxMCwgMC43KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuLm5hdi1wb2ludHMtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICByaWdodDogNjBweDtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbjogN3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTJweCAwIDAgLTJweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC01cHggMCAwIC01cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zY3JvbGwtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UgMHM7XG5cbiAgICAmLmluZGV4LTEge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTEwMCUsIDBweCk7XG4gICAgfVxuXG4gICAgJi5pbmRleC0yIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC0yMDAlLCAwcHgpO1xuICAgIH1cblxuICAgICYuaW5kZXgtMyB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtMzAwJSwgMHB4KTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5tZW51IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG9wYWNpdHk6IC41O1xuXG4gICAgJi5hY3RpdmUsXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgLmljb25mb250IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjOGI4YjhiICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuXG4ubWVudS1pdGVtLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM4YjhiOGI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcblxuICAgIC5pY29uZm9udCB7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuXG4ubmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSIsImhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA2MHB4O1xuICB0b3A6IDMycHg7XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvLWltZyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ubG9nby10eHQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmY4NjBkO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ua2VlcC1vbi1yZWNvcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgY29sb3I6ICNjNWM1YzU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmtlZXAtb24tcmVjb3JkOmhvdmVyIHtcbiAgY29sb3I6ICNEMTMzNUI7XG59XG5cbi5wYWdlLWJnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmczLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ucGFnZS1iZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbSgjRDEzMzVCKSwgdG8oIzAwMTUyZSkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0QxMzM1QiwgIzAwMTUyZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5iZy1jb3Zlci1tYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAzLCAxMCwgMC43KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51LXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDYwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5uYXYtcG9pbnRzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiA2MHB4O1xuICB6LWluZGV4OiAyO1xufVxuLm5hdi1wb2ludHMtd3JhcHBlciB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5uYXYtcG9pbnRzLXdyYXBwZXIgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTNweDtcbiAgbWFyZ2luOiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXYtcG9pbnRzLXdyYXBwZXIgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwLjI7XG59XG4ubmF2LXBvaW50cy13cmFwcGVyIHVsIGxpIGEgc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDRweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IC0ycHggMCAwIC0ycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuLm5hdi1wb2ludHMtd3JhcHBlciB1bCBsaSBhIHNwYW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ubmF2LXBvaW50cy13cmFwcGVyIHVsIGxpIGEuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5uYXYtcG9pbnRzLXdyYXBwZXIgdWwgbGkgYS5hY3RpdmUgc3BhbiB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBtYXJnaW46IC00cHggMCAwIC00cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5uYXYtcG9pbnRzLXdyYXBwZXIgdWwgbGkgYS5hY3RpdmUgc3Bhbjo6YWZ0ZXIge1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC00cHg7XG4gIGJvdHRvbTogLTRweDtcbiAgcmlnaHQ6IC00cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cbi5uYXYtcG9pbnRzLXdyYXBwZXIgdWwgbGkgYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5uYXYtcG9pbnRzLXdyYXBwZXIgdWwgbGk6aG92ZXIgYSBzcGFuIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luOiAtNXB4IDAgMCAtNXB4O1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UgMHM7XG59XG4uc2Nyb2xsLWNvbnRhaW5lci5pbmRleC0xIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC0xMDAlLCAwcHgpO1xufVxuLnNjcm9sbC1jb250YWluZXIuaW5kZXgtMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtMjAwJSwgMHB4KTtcbn1cbi5zY3JvbGwtY29udGFpbmVyLmluZGV4LTMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTMwMCUsIDBweCk7XG59XG4uc2Nyb2xsLWNvbnRhaW5lciAuc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubWVudS1pdGVtLmFjdGl2ZSwgLm1lbnUtaXRlbTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ubWVudS1pdGVtLmFjdGl2ZSAuaWNvbmZvbnQsIC5tZW51LWl0ZW06aG92ZXIgLmljb25mb250IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzhiOGI4YiAhaW1wb3J0YW50O1xufVxuLm1lbnUtaXRlbS5hY3RpdmUgLm5hbWUsIC5tZW51LWl0ZW06aG92ZXIgLm5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5tZW51LWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tZW51LWl0ZW0taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM4YjhiOGI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5tZW51LWl0ZW0taW5mbyAuaWNvbmZvbnQge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'coeus-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sections_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/introduction/introduction.component */ "./src/app/sections/introduction/introduction.component.ts");
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/contact/contact.component */ "./src/app/sections/contact/contact.component.ts");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/about/about.component */ "./src/app/sections/about/about.component.ts");
/* harmony import */ var _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/projects/projects.component */ "./src/app/sections/projects/projects.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _sections_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"],
        _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _sections_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _sections_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"],
                    _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                    _sections_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/menu-data.ts":
/*!******************************!*\
  !*** ./src/app/menu-data.ts ***!
  \******************************/
/*! exports provided: MENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUS", function() { return MENUS; });
const MENUS = [
    {
        id: 'home',
        icon: 'icon-home',
        name: '简介'
    },
    {
        id: 'projects',
        icon: 'icon-projects',
        name: '产品'
    },
    {
        id: 'contact',
        icon: 'icon-contact',
        name: '联系我们'
    },
    {
        id: 'about',
        icon: 'icon-about',
        name: '关于'
    }
];


/***/ }),

/***/ "./src/app/sections/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["coeus-about"]], decls: 5, vars: 0, consts: [[1, "title"], [1, "desc"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5173\u4E8E\u6211\u4EEC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5173\u4E8E\u6211\u4EEC\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5173\u4E8E\u6211\u4EEC\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5173\u4E8E\u6211\u4EEC\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5173\u4E8E\u6211\u4EEC\u7684\u63CF\u8FF0\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 60px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  text-align: center;\n  color: #ffffff;\n}\n\n[_nghost-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2ppbmdxaS9EZXNrdG9wL3Byb2plY3RzL3ByaXZhdGUtcHJvamVjdHMvb2ZmaWNhbC13ZWJzaXRlL3NyYy9hcHAvc2VjdGlvbnMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY3Rpb25zL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGVzYyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSIsIi50aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGVzYyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'coeus-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sections/contact/contact.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/sections/contact/contact.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["coeus-contact"]], decls: 20, vars: 0, consts: [[1, "contact"], [1, "desc"], [1, "contact-info"], [1, "contact-item"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8054\u7CFB\u6211\u4EEC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5982\u679C\u5BF9\u6211\u4EEC\u7684\u516C\u53F8\u548C\u4EA7\u54C1\u6709\u7591\u95EE\uFF0C\u6B22\u8FCE\u548C\u6211\u4EEC\u8054\u7CFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u8054\u7CFB\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u7535\u8BDD\uFF1A028-123456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u90AE\u7BB1\uFF1Acoeus@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5730\u5740\uFF1A\u56DB\u5DDD\u6210\u90FDXX\u4E2D\u5FC3X\u697CX\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.desc[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n\n[_nghost-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2ppbmdxaS9EZXNrdG9wL3Byb2plY3RzL3ByaXZhdGUtcHJvamVjdHMvb2ZmaWNhbC13ZWJzaXRlL3NyYy9hcHAvc2VjdGlvbnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9ucy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxPQUFBO0FDQ1I7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmNvbnRhY3QtaXRlbSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuXG4uZGVzYyB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuOmhvc3Qge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59IiwiLmNvbnRhY3Qge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFjdC1pbmZvIC5jb250YWN0LWl0ZW0ge1xuICBmbGV4OiAxO1xufVxuXG4uZGVzYyB7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbjpob3N0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'coeus-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sections/introduction/introduction.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sections/introduction/introduction.component.ts ***!
  \*****************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroductionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["coeus-introduction"]], decls: 5, vars: 0, consts: [[1, "title"], [1, "desc"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u7B80\u4ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u9879\u76EE/\u516C\u53F8\u7684\u7B80\u5355\u4ECB\u7ECD\uFF0C\u9879\u76EE/\u516C\u53F8\u7684\u7B80\u5355\u4ECB\u7ECD\uFF0C\u9879\u76EE/\u516C\u53F8\u7684\u7B80\u5355\u4ECB\u7ECD\uFF0C\u9879\u76EE/\u516C\u53F8\u7684\u7B80\u5355\u4ECB\u7ECD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 60px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  text-align: center;\n  color: #ffffff;\n}\n\n[_nghost-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2ppbmdxaS9EZXNrdG9wL3Byb2plY3RzL3ByaXZhdGUtcHJvamVjdHMvb2ZmaWNhbC13ZWJzaXRlL3NyYy9hcHAvc2VjdGlvbnMvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VjdGlvbnMvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGVzYyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSIsIi50aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGVzYyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'coeus-introduction',
                templateUrl: './introduction.component.html',
                styleUrls: ['./introduction.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sections/projects/projects.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/sections/projects/projects.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["coeus-projects"]], decls: 2, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'coeus-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhangjingqi/Desktop/projects/private-projects/offical-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map