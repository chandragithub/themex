(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-bootstrap></app-bootstrap>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-color-picker */ "./node_modules/ng-color-picker/lib/index.js");
/* harmony import */ var ng_color_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_color_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _theme_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/bootstrap/bootstrap.component */ "./src/app/theme/bootstrap/bootstrap.component.ts");
/* harmony import */ var _theme_bootstrap_theme_control_theme_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/bootstrap/theme-control/theme-control.component */ "./src/app/theme/bootstrap/theme-control/theme-control.component.ts");
/* harmony import */ var _theme_bootstrap_theme_theme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/bootstrap/theme/theme.component */ "./src/app/theme/bootstrap/theme/theme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _theme_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponent"],
                _theme_bootstrap_theme_control_theme_control_component__WEBPACK_IMPORTED_MODULE_7__["ThemeControlComponent"],
                _theme_bootstrap_theme_theme_component__WEBPACK_IMPORTED_MODULE_8__["ThemeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_color_picker__WEBPACK_IMPORTED_MODULE_2__["ColorPickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-navbar.navbar {\n  box-shadow:0 4px 10px rgba(0,0,0,.1);\n}\n\n@media (min-width:576px) {\n  .navbar {\n    padding-top:1.2rem;\n    padding-bottom:1.2rem;\n  }\n}\n\n.gradient {\n  background:linear-gradient(120deg,#7f70f5,#0ea0ff);\n  color:#fff;\n}\n\n.fixed-bottom, .fixed-top {\n  position:fixed;\n  right:0;\n  left:0;\n  z-index:1030;\n}\n\n.fixed-top {\n  top:0;\n}\n\n.bg-white {\n  background-color:#fff!important;\n}\n\n@media (min-width:992px) {\n  .navbar-expand-lg {\n    flex-flow:row nowrap;\n    justify-content:flex-start;\n  }\n}\n\n.navbar, .navbar > .container, .navbar > .container-fluid {\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  justify-content:space-between;\n}\n\n.navbar {\n  position:relative;\n  padding:.5rem 1rem;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand logo\" href=\"#\">WebTalk</a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarNav\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link\" href=\"\">Compile</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link\" href=\"\">Download</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link\" href=\"\">Pro</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/theme/bootstrap/bootstrap.component.css":
/*!*********************************************************!*\
  !*** ./src/app/theme/bootstrap/bootstrap.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".theme-container {\n    margin-top: 1rem;\n}\n\n.control-panel {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 4rem;\n    z-index: 1000;\n    height: calc(100vh - 4rem);\n    border-right: 1px solid rgb(228, 225, 225);\n    overflow: scroll;\n}"

/***/ }),

/***/ "./src/app/theme/bootstrap/bootstrap.component.html":
/*!**********************************************************!*\
  !*** ./src/app/theme/bootstrap/bootstrap.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid theme-container\">\n    <div class=\"row\">\n        <div class=\"col-md-2 control-panel\">\n            <app-theme-control></app-theme-control>\n        </div>\n        <div class=\"col-md-8\">\n            <app-theme></app-theme>\n        </div>\n        <div class=\"col-md-2\">\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/bootstrap/bootstrap.component.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/bootstrap/bootstrap.component.ts ***!
  \********************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BootstrapComponent = /** @class */ (function () {
    function BootstrapComponent() {
    }
    BootstrapComponent.prototype.ngOnInit = function () {
    };
    BootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bootstrap',
            template: __webpack_require__(/*! ./bootstrap.component.html */ "./src/app/theme/bootstrap/bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./bootstrap.component.css */ "./src/app/theme/bootstrap/bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BootstrapComponent);
    return BootstrapComponent;
}());



/***/ }),

/***/ "./src/app/theme/bootstrap/theme-control/theme-control.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/theme/bootstrap/theme-control/theme-control.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n    display: block;\n    width: 100%;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}"

/***/ }),

/***/ "./src/app/theme/bootstrap/theme-control/theme-control.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/bootstrap/theme-control/theme-control.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\">\n  <div class=\"form-group\">\n      <label>Basic:</label>\n      <input [(colorPicker)]=\"message.basic_text\" [value]=\"message.basic_text\" [style.background]=\"message.basic_text\" class=\"form-control color-field\"  [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\" [cpSaveClickOutside]=\"false\" [cpOKButtonClass]= \"'btn btn-primary btn-xs'\"/>\n  </div>\n  <div class=\"form-group\">\n    <label>Primary:</label>\n    <input [(colorPicker)]=\"message.primary_text\" [value]=\"message.primary_text\" [style.background]=\"message.primary_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Secondary:</label>\n    <input [(colorPicker)]=\"message.secondary_text\" [value]=\"message.secondary_text\" [style.background]=\"message.secondary_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Success:</label>\n    <input [(colorPicker)]=\"message.success_text\" [value]=\"message.success_text\" [style.background]=\"message.success_text \" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Info:</label>\n    <input [(colorPicker)]=\"message.info_text\" [value]=\"message.info_text\" [style.background]=\"message.info_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Warning:</label>\n    <input [(colorPicker)]=\"message.warning_text\" [value]=\"message.warning_text\" [style.background]=\"message.warning_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Danger:</label>\n    <input [(colorPicker)]=\"message.danger_text\" [value]=\"message.danger_text\" [style.background]=\"message.danger_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Dark:</label>\n    <input [(colorPicker)]=\"message.dark_text\" [value]=\"message.dark_text\" [style.background]=\"message.dark_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Light:</label>\n    <input [(colorPicker)]=\"message.light_text\" [value]=\"message.light_text\" [style.background]=\"message.light_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Link:</label>\n    <input [(colorPicker)]=\"message.link_text\" [value]=\"message.link_text\" [style.background]=\"message.link_text\" class=\"form-control color-field\" [cpPosition]=\"'bottom'\" [cpOKButton]=\"true\"\n      [cpSaveClickOutside]=\"false\" [cpOKButtonClass]=\"'btn btn-primary btn-xs'\" />\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/theme/bootstrap/theme-control/theme-control.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/bootstrap/theme-control/theme-control.component.ts ***!
  \**************************************************************************/
/*! exports provided: ThemeControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeControlComponent", function() { return ThemeControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color.service */ "./src/app/theme/color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeControlComponent = /** @class */ (function () {
    function ThemeControlComponent(colorService) {
        this.colorService = colorService;
        this.message = {
            "basic_text": "#5AA572",
            "primary_text": "#000",
            "secondary_text": "#000",
            "success_text": "#000",
            "info_text": "#000",
            "warning_text": "#000",
            "danger_text": "#000",
            "dark_text": "#000",
            "light_text": "#000",
            "link_text": "#000"
        };
        this.colorService.changeMessage(this.message);
    }
    ThemeControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.currentMessage.subscribe(function (message) {
            _this.message = message;
        });
    };
    ThemeControlComponent.prototype.ngAfterContentChecked = function () {
        this.theme = this.message;
        this.colorService.changeMessage(this.theme);
    };
    ThemeControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theme-control',
            template: __webpack_require__(/*! ./theme-control.component.html */ "./src/app/theme/bootstrap/theme-control/theme-control.component.html"),
            styles: [__webpack_require__(/*! ./theme-control.component.css */ "./src/app/theme/bootstrap/theme-control/theme-control.component.css")]
        }),
        __metadata("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"]])
    ], ThemeControlComponent);
    return ThemeControlComponent;
}());



/***/ }),

/***/ "./src/app/theme/bootstrap/theme/theme.component.css":
/*!***********************************************************!*\
  !*** ./src/app/theme/bootstrap/theme/theme.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlight-blue {\n    color: #fff;\n    background-color: #1e6add;\n    padding: 50px 0;\n}\n\n.button-outline-top {\n    margin: 10px;\n    border-bottom: 1px solid #d6d6d6;\n    padding: 10px;\n}\n\n.preview-theme {\n    border: 1px solid #e8e9eb;\n}"

/***/ }),

/***/ "./src/app/theme/bootstrap/theme/theme.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/bootstrap/theme/theme.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div c class=\"preview-theme\">\n  <div >\n    <nav  class=\"navbar navbar-light navbar-expand-md navigation-clean\" [ngStyle]=\"{'background-color': message.basic_text}\">\n      <div  class=\"container\">\n        <a  class=\"navbar-brand\" href=\"#\">Company Name</a>\n        <button  class=\"navbar-toggler\" data-target=\"#navcol-1\" data-toggle=\"collapse\">\n          <span  class=\"sr-only\">Toggle navigation</span>\n          <span  class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div  class=\"collapse navbar-collapse\" id=\"navcol-1\">\n          <ul  class=\"nav navbar-nav ml-auto\">\n            <li  class=\"nav-item\" role=\"presentation\">\n              <a  class=\"nav-link active\" href=\"#\"> Utilities</a>\n            </li>\n            <li  class=\"nav-item\" role=\"presentation\">\n              <a  class=\"nav-link\" href=\"#\">Components</a>\n            </li>\n            <li  class=\"nav-item\" role=\"presentation\">\n              <a  class=\"nav-link\" href=\"#\">Third Item</a>\n            </li>\n            <li  class=\"dropdown\">\n              <a  aria-expanded=\"false\" class=\"dropdown-toggle nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Dropdown</a>\n              <div  class=\"dropdown-menu\" role=\"menu\">\n                <a  class=\"dropdown-item\" href=\"#\" role=\"presentation\">First Item</a>\n                <a  class=\"dropdown-item\" href=\"#\" role=\"presentation\">Second Item</a>\n                <a  class=\"dropdown-item\" href=\"#\" role=\"presentation\">Third Item</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n  <div  class=\"highlight-blue\" style=\"background-color: rgb(147, 103, 214);\">\n    <div  class=\"container\">\n      <div  class=\"intro\">\n        <h2  class=\"text-center\">Bootstrap Design Theme</h2>\n        <p  class=\"text-center\"> </p>\n      </div>\n\n    </div>\n  </div>\n  <div >\n    <div class=\"buttons text-left button-outline-top\">\n      <p> Text Colors</p>\n      <span class=\"text-primary\">.text-primary</span>\n      <span class=\"text-secondary\">.text-secondary</span>\n      <span class=\"text-success\">.text-success</span>\n      <span class=\"text-danger\">.text-danger</span>\n      <span class=\"text-warning\">.text-warning</span>\n      <span class=\"text-info\">.text-info</span>\n      <span class=\"text-light bg-dark\">.text-light</span>\n      <span class=\"text-dark\">.text-dark</span>\n      <span class=\"text-muted\">.text-muted</span>\n      <span class=\"text-white bg-dark\">.text-white</span>\n    </div>\n    <div class=\"buttons text-left button-outline-top\">\n      <p>Anchor Text Colors</p>\n      <span><a class=\"text-primary\" href=\"#\">Primary link</a></span>\n      <span> <a class=\"text-secondary\" href=\"#\">Secondary link</a> </span>\n      <span> <a class=\"text-success\" href=\"#\">Success link</a> </span>\n      <span> <a class=\"text-danger\" href=\"#\">Danger link</a> </span>\n      <span> <a class=\"text-warning\" href=\"#\">Warning link</a> </span>\n      <span> <a class=\"text-info\" href=\"#\">Info link</a> </span>\n      <span> <a class=\"text-light bg-dark\" href=\"#\">Light link</a> </span>\n      <span> <a class=\"text-dark\" href=\"#\">Dark link</a> </span>\n      <span> <a class=\"text-muted\" href=\"#\">Muted link</a> </span>\n      <span> <a class=\"text-white bg-dark\" href=\"#\">White link</a> </span>\n    </div>\n    <div  class=\"buttons text-left button-outline-top\">\n      <p > Button Colors</p>\n      <button  class=\"btn\" type=\"button\">Basic</button>\n      <button  class=\"btn btn-primary\" type=\"button\" style=\"background-color: rgb(147, 103, 214);\">Primary</button>\n      <button  class=\"btn btn-secondary\" type=\"button\" style=\"background-color: rgb(30, 106, 221);\">Secondary</button>\n      <button  class=\"btn btn-success\" type=\"button\">Success</button>\n      <button  class=\"btn btn-info\" type=\"button\">Info</button>\n      <button  class=\"btn btn-warning\" type=\"button\">Warning</button>\n      <button  class=\"btn btn-danger\" type=\"button\">Danger</button>\n      <button  class=\"btn btn-dark\" type=\"button\">Dark</button>\n      <button  class=\"btn btn-light\" type=\"button\">Light</button>\n      <button  class=\"btn btn-link\" type=\"button\">Link</button>\n    </div>\n    <div  class=\"buttons text-left button-outline-top\">\n      <p > Button ouline Colors</p>\n      <button  class=\"btn btn-outline-primary\" type=\"button\">Primary</button>\n      <button  class=\"btn btn-outline-secondary\" type=\"button\">Secondary</button>\n      <button  class=\"btn btn-outline-success\" type=\"button\">Success</button>\n      <button  class=\"btn btn-outline-info\" type=\"button\">Info</button>\n      <button  class=\"btn btn-outline-warning\" type=\"button\">Warning</button>\n      <button  class=\"btn btn-outline-danger\" type=\"button\">Danger</button>\n      <button  class=\"btn btn-outline-dark\" type=\"button\">Dark</button>\n      <button  class=\"btn btn-outline-light text-dark\" type=\"button\">Light</button>\n    </div>\n    \n    <div  class=\"buttons text-left button-outline-top\">\n      <p > Background Colors</p>\n      <div  class=\"p-3 mb-2 bg-primary text-white\">.bg-primary</div>\n      <div  class=\"p-3 mb-2 bg-secondary text-white\">.bg-secondary</div>\n      <div  class=\"p-3 mb-2 bg-success text-white\">.bg-success</div>\n      <div  class=\"p-3 mb-2 bg-danger text-white\">.bg-danger</div>\n      <div  class=\"p-3 mb-2 bg-warning text-dark\">.bg-warning</div>\n      <div  class=\"p-3 mb-2 bg-info text-white\">.bg-info</div>\n      <div  class=\"p-3 mb-2 bg-light text-dark\">.bg-light</div>\n      <div  class=\"p-3 mb-2 bg-dark text-white\">.bg-dark</div>\n      <div  class=\"p-3 mb-2 bg-white text-dark\">.bg-white</div>\n    </div>\n    <div  class=\"buttons text-left button-outline-top\">\n      <p > Border Colors</p>\n      <span  class=\"border border-primary size\"></span>\n      <span  class=\"border border-secondary\"></span>\n      <span  class=\"border border-success\"></span>\n      <span  class=\"border border-danger\"></span>\n      <span  class=\"border border-warning\"></span>\n      <span  class=\"border border-info\"></span>\n      <span  class=\"border border-light\"></span>\n      <span  class=\"border border-dark\"></span>\n      <span class=\"border border-white\"></span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/theme/bootstrap/theme/theme.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/bootstrap/theme/theme.component.ts ***!
  \**********************************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color.service */ "./src/app/theme/color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(colorService) {
        this.colorService = colorService;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.currentMessage.subscribe(function (message) { return _this.message = message; });
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theme',
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/bootstrap/theme/theme.component.html"),
            styles: [__webpack_require__(/*! ./theme.component.css */ "./src/app/theme/bootstrap/theme/theme.component.css")]
        }),
        __metadata("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/theme/color.service.ts":
/*!****************************************!*\
  !*** ./src/app/theme/color.service.ts ***!
  \****************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorService = /** @class */ (function () {
    function ColorService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentMessage = this.messageSource.asObservable();
        console.log(this.currentMessage);
    }
    ColorService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    ColorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ColorService);
    return ColorService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chandrashekher/Education/Projects/Angularjs/webxclient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map