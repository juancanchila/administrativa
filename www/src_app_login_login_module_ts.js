"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ], providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_juanc_Desktop_ordenar_app_administrativa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);









let LoginPage = class LoginPage {
  constructor(navctrl, router, auth, fb, alertController) {
    this.navctrl = navctrl;
    this.router = router;
    this.auth = auth;
    this.fb = fb;
    this.alertController = alertController;
    this.loginForm = this.fb.group({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }

  ngOnInit() {}

  onLogin() {
    var _this = this;

    return (0,C_Users_juanc_Desktop_ordenar_app_administrativa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.loginForm.get(<formConrolName>).setValue('123');
      //this.loginForm.controls.pass.setValue(this.pass);
      console.log(_this.loginForm.value);

      if (_this.loginForm.invalid) {
        const alert = yield _this.alertController.create({
          header: 'Datos incompletos o usuario incorrecto',
          message: 'llenar todos los datos.',
          buttons: ['Aceptar']
        });
        yield alert.present();
        return;
      }

      _this.auth.login(_this.loginForm.value);
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#logo {\n  text-align: center;\n  padding-top: 5%;\n  --ion-background-color: #007b3c;\n  width: 90%;\n  margin: auto;\n}\n\n#logo_img {\n  width: 325px !important;\n  margin-bottom: 5%;\n  padding: auto;\n}\n\n.form_login {\n  --text-align: center;\n  --padding-top: 5%;\n  --max-height: 500px !important;\n}\n\n.contain {\n  text-align: center;\n  position: center;\n  height: 300px;\n  width: 300px;\n  border-radius: 20px;\n  top: 15%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #262262;\n}\n\nion-label {\n  display: block;\n  text-align: left;\n  color: white;\n  margin-left: 10%;\n  max-width: 50%;\n}\n\nion-input {\n  color: black;\n  height: 25px;\n  background-color: white;\n  max-width: 50% !important;\n  margin: auto;\n}\n\nion-item {\n  --min-height: 0 !important;\n  --border-width: 0 0 0 0 !important;\n  --inner-border-width: 0 !important;\n  --show-full-highlight: 0 !important;\n  --show-inset-highlight: 0 !important;\n  --padding-bottom: 5% !important;\n}\n\na {\n  text-decoration: none;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-icon {\n  color: white;\n  font-size: 2rem;\n}\n\ninput {\n  margin-right: 20px;\n  margin-left: 15px;\n  border: none !important;\n  background-color: #262262;\n  color: white;\n}\n\ninput[type=button] {\n  color: white !important;\n}\n\n.background {\n  --background:#ecf0f1 url('FONDO_LOGIN.jpg') 0 0/100% 100% no-repeat;\n}\n\n.col {\n  border-bottom-style: none;\n  border-right-style: none;\n  text-align: center;\n  margin-top: 5%;\n}\n\n.cover {\n  background: rgba(255, 255, 255, 0.831372549);\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  max-width: 50%;\n  min-width: 200px;\n  margin: auto;\n  padding: 5%;\n  border-radius: 25px;\n  background: #007b3c;\n  padding-top: 5%;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 18px;\n  color: #fff;\n}\n\n.button-solid {\n  --ion-background-color: #007b3c;\n}\n\n.button-native {\n  --background: var(--ion-color-primary, #f8a906) !important;\n  --color: var(--ion-color-primary-contrast, #fff);\n}\n\nion-content {\n  min-height: 500px;\n}\n\n.ion-page {\n  align-items: center;\n}\n\n@media only screen and (min-width: 768px) {\n  /* For desktop: */\n  .content {\n    max-width: 394px;\n    min-width: 200px;\n    margin: auto;\n    padding: 2%;\n    border-radius: 25px;\n    background: #83B551;\n    /* padding-top: 5%; */\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFHQTtFQUVJLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUlFO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURIOztBQUlFO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUROOztBQUdFO0VBQ0ksMEJBQUE7RUFDQSxrQ0FBQTtFQUNOLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0FBQUE7O0FBR0U7RUFDSSxxQkFBQTtBQUFOOztBQUdFO0VBQ0UsWUFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFHQTtFQUNJLG1FQUFBO0FBQUo7O0FBVUE7RUFFSSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUko7O0FBVUE7RUFDSSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUEo7O0FBaUJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWRKOztBQWdCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFiSjs7QUFlQztFQUNHLCtCQUFBO0FBWko7O0FBY0E7RUFDSSwwREFBQTtFQUNBLGdEQUFBO0FBWEo7O0FBYUE7RUFNTSxpQkFBQTtBQWZOOztBQWtCRTtFQUNFLG1CQUFBO0FBZko7O0FBbUJBO0VBQ0ksaUJBQUE7RUFDQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQWhCSjtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDdiM2M7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAvLyBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuI2xvZ29faW1nIHtcclxuICAgIHdpZHRoOiAzMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBwYWRkaW5nOiBhdXRvO1xyXG5cclxuICAgICB9XHJcbi5mb3JtX2xvZ2luIHtcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgICAtLW1heC1oZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uY29udGFpbiB7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyMjYyO1xyXG4gIH1cclxuICBpb24tbGFiZWx7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgIG1heC13aWR0aDogNTAlO1xyXG5cclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAgIC0tbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4tLXNob3ctZnVsbC1oaWdobGlnaHQ6IDAgIWltcG9ydGFudDtcclxuLS1zaG93LWluc2V0LWhpZ2hsaWdodDogMCAhaW1wb3J0YW50O1xyXG4tLXBhZGRpbmctYm90dG9tIDogNSUgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIGF7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LWJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjIyNjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlY2YwZjEgdXJsKC4uLy4uL2Fzc2V0cy9pbWcvRk9ORE9fTE9HSU4uanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjojMDA3YjNjO1xyXG4gIC8vICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YjNjO1xyXG5cclxufVxyXG5cclxuLmhlYWRlciAuY29sIHtcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIC8vICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uY29sOmxhc3QtY2hpbGQge1xyXG4gIC8vICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xyXG59XHJcblxyXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XHJcbiAgLy8gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YjNjO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4gLmJ1dHRvbi1zb2xpZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDdiM2M7XHJcbn1cclxuLmJ1dHRvbi1uYXRpdmV7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjZjhhOTA2KSAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiNlY2YwZjEgdXJsKC4uLy4uL2Fzc2V0cy9pbWcvRk9ORE9fTE9HSU4pIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gICAgIC8vLS1iYWNrZ3JvdW5kOiNlY2YwZjEgdXJsKC4uLy4uL2Fzc2V0cy9ib3RvbmVzL0ZPTkRPRU5WSU8yLnBuZy5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6I2ZGRkY7XHJcblxyXG4gICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5pb24tcGFnZXtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC8qIEZvciBkZXNrdG9wOiAqL1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgIG1heC13aWR0aDogMzk0cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4M0I1NTE7XHJcbiAgICAgIC8qIHBhZGRpbmctdG9wOiA1JTsgKi9cclxuICB9XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding class=\"background\"  scroll-y=\"false\" [fullscreen]=\"false\">\n  <div class = \"cover\">\n  <div id=\"logo\" padding text-center>\n    <img id=\"logo_img\" src=\"./assets/img/logo.png\">\n  </div>\n\n\n    <div scroll-y=\"false\"  >\n\n\n\n      <div class=\"content\">\n\n\n\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" >\n\n        <div class=\"row header\">\n          <div class=\"col\">\n            <h1>Usuario</h1>\n\n        </div>\n          <div class=\"col\">       <ion-input formControlName=\"name\" type=\"text\" ></ion-input></div>\n          <div class=\"col\"><h1>Contraseña</h1></div>\n          <div class=\"col\">    <ion-input  formControlName=\"pass\"  type=\"password\" ></ion-input>  </div>\n        </div>\n        <div class=\"col\">\n          <ion-button  type=\"submit\" color=\"light\" >\n          Sign In\n         </ion-button></div>\n\n\n      </form>\n    </div>\n  </div>\n\n\n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map