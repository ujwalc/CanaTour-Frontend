(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingBookingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-item>\n            <ion-button routerLink=\"/bus\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n            <ion-title>\n                Booking\n            </ion-title>\n\n\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br>\n    <ion-input placeholder=\"Enter Name on Card\"></ion-input>\n    <ion-input placeholder=\"Enter Card Number\"></ion-input>\n    <ion-item>\n        <ion-input placeholder=\"Enter CVV\"></ion-input>\n        <ion-label>Expire: </ion-label>\n        <ion-datetime value=\"2019-10T15:43:40.394Z\" display-timezone=\"utc\"></ion-datetime>\n    </ion-item>\n    <br>\n    <ion-item>\n        <ion-button>Pay\n        </ion-button>\n        <ion-button slot=\"end\" routerLink=\"/\">Cancel\n        </ion-button>\n    </ion-item>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/booking/booking-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/booking/booking-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: BookingPageRoutingModule */

  /***/
  function srcAppBookingBookingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function () {
      return BookingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./booking.page */
    "./src/app/booking/booking.page.ts");

    const routes = [{
      path: '',
      component: _booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]
    }];
    let BookingPageRoutingModule = class BookingPageRoutingModule {};
    BookingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/booking/booking.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/booking/booking.module.ts ***!
    \*******************************************/

  /*! exports provided: BookingPageModule */

  /***/
  function srcAppBookingBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPageModule", function () {
      return BookingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./booking-routing.module */
    "./src/app/booking/booking-routing.module.ts");
    /* harmony import */


    var _booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./booking.page */
    "./src/app/booking/booking.page.ts");

    let BookingPageModule = class BookingPageModule {};
    BookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingPageRoutingModule"]],
      declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]]
    })], BookingPageModule);
    /***/
  },

  /***/
  "./src/app/booking/booking.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/booking/booking.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingBookingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/booking/booking.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/booking/booking.page.ts ***!
    \*****************************************/

  /*! exports provided: BookingPage */

  /***/
  function srcAppBookingBookingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPage", function () {
      return BookingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BookingPage = class BookingPage {
      constructor() {}

      ngOnInit() {}

    };
    BookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking.page.scss */
      "./src/app/booking/booking.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BookingPage);
    /***/
  }
}]);
//# sourceMappingURL=booking-booking-module-es5.js.map