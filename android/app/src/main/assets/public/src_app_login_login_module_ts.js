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
/* harmony import */ var C_Users_juanc_Desktop_pruebadeconexion_carnet_digital_ipcc_transparente_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Users_juanc_Desktop_pruebadeconexion_carnet_digital_ipcc_transparente_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = "#logo {\n  text-align: center;\n  padding-top: 5%;\n  --ion-background-color: #007b3c;\n  margin-bottom: 15%;\n}\n\n.form_login {\n  --text-align: center;\n  --padding-top: 5%;\n  --max-height: 500px !important;\n}\n\n.contain {\n  text-align: center;\n  position: center;\n  height: 300px;\n  width: 300px;\n  border-radius: 20px;\n  top: 15%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #262262;\n}\n\nion-label {\n  display: block;\n  text-align: left;\n  color: white;\n  margin-left: 10%;\n  max-width: 50%;\n}\n\nion-input {\n  color: black;\n  height: 25px;\n  background-color: white;\n  max-width: 50% !important;\n  margin: auto;\n}\n\nion-item {\n  --min-height: 0 !important;\n  --border-width: 0 0 0 0 !important;\n  --inner-border-width: 0 !important;\n  --show-full-highlight: 0 !important;\n  --show-inset-highlight: 0 !important;\n  --padding-bottom: 5% !important;\n}\n\na {\n  text-decoration: none;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-icon {\n  color: white;\n  font-size: 2rem;\n}\n\ninput {\n  margin-right: 20px;\n  margin-left: 15px;\n  border: none !important;\n  background-color: #262262;\n  color: white;\n}\n\ninput[type=button] {\n  color: white !important;\n}\n\n.col {\n  border-bottom-style: none;\n  border-right-style: none;\n  text-align: center;\n  margin-top: 5%;\n}\n\n.content {\n  max-width: 80%;\n  margin: auto;\n  padding: 5%;\n  border-radius: 25px;\n  background: #007b3c;\n  padding-top: 5%;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n  color: #fff;\n}\n\n.button-solid {\n  --ion-background-color: #007b3c;\n}\n\n.button-native {\n  --background: var(--ion-color-primary, #f8a906) !important;\n  --color: var(--ion-color-primary-contrast, #fff);\n}\n\nion-content {\n  --background-size: 50% 50%;\n  --background:#fFFF;\n  min-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBRUksa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0U7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUg7O0FBR0U7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQU47O0FBRUU7RUFDSSwwQkFBQTtFQUNBLGtDQUFBO0VBQ04sa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUFDQTs7QUFFRTtFQUNJLHFCQUFBO0FBQ047O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQVdBO0VBRUkseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVRKOztBQW9CQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBakJKOztBQW1CQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFoQko7O0FBa0JDO0VBQ0csK0JBQUE7QUFmSjs7QUFpQkE7RUFDSSwwREFBQTtFQUNBLGdEQUFBO0FBZEo7O0FBZ0JBO0VBR0ssMEJBQUE7RUFDQSxrQkFBQTtFQUNDLGlCQUFBO0FBZk4iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwN2IzYztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxufVxyXG5cclxuLmZvcm1fbG9naW4ge1xyXG4gICAgLS10ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1JTtcclxuICAgIC0tbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmNvbnRhaW4ge1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjI2MjtcclxuICB9XHJcbiAgaW9uLWxhYmVse1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICBtYXgtd2lkdGg6IDUwJTtcclxuXHJcbiAgfVxyXG4gIGlvbi1pbnB1dHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIGlvbi1pdGVte1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuLS1zaG93LWZ1bGwtaGlnaGxpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbi0tc2hvdy1pbnNldC1oaWdobGlnaHQ6IDAgIWltcG9ydGFudDtcclxuLS1wYWRkaW5nLWJvdHRvbSA6IDUlICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuICBhe1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS1idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5pbnB1dHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyMjYyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjojMDA3YjNjO1xyXG4gIC8vICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YjNjO1xyXG59XHJcblxyXG4uaGVhZGVyIC5jb2wge1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgLy8gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbiAgLy8gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XHJcbn1cclxuXHJcbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcclxuICAvLyAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2IzYztcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIC5idXR0b24tc29saWR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YjNjO1xyXG59XHJcbi5idXR0b24tbmF0aXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgI2Y4YTkwNikgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDojZWNmMGYxIHVybCguLi8uLi9hc3NldHMvYm90b25lcy9GT05ETykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbiAgICAgLy8tLWJhY2tncm91bmQ6I2VjZjBmMSB1cmwoLi4vLi4vYXNzZXRzL2JvdG9uZXMvRk9ORE9FTlZJTzIucG5nLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbiAgICAgLS1iYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiNmRkZGO1xyXG4gICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICB9Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding class=\"background\" scroll-y=\"false\" [fullscreen]=\"false\">\n  <div id=\"logo\" padding text-center>\n    <img src=\"./assets/img/logo.png\">\n  </div>\n\n\n    <ion-content scroll-y=\"false\" [fullscreen]=\"false\" class=\"background\" >\n\n\n\n      <div class=\"content\">\n\n\n\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" >\n\n        <div class=\"row header\">\n          <div class=\"col\">\n            <h1>Usuario</h1>\n\n\n\n        </div>\n          <div class=\"col\">       <ion-input formControlName=\"name\" type=\"text\" ></ion-input></div>\n          <div class=\"col\"><h1>Contraseña</h1></div>\n          <div class=\"col\">    <ion-input  formControlName=\"pass\"  type=\"password\" ></ion-input>  </div>\n        </div>\n        <div class=\"col\">\n          <ion-button  type=\"submit\" color=\"light\" >\n          Sign In\n         </ion-button></div>\n\n\n      </form>\n    </div>\n    </ion-content>\n\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map