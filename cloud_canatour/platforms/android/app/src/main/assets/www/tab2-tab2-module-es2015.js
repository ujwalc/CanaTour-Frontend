(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n\n        <ion-item>\n            <ion-title>\n                Cana Tour\n            </ion-title>\n            <ion-button routerLink=\"/account\">\n                <ion-icon name=\"person-circle-outline\"></ion-icon>\n            </ion-button>\n\n        </ion-item>\n\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n\n    <ion-searchbar></ion-searchbar>\n    <br>\n\n    <ion-item>\n        <ion-label>Source</ion-label>\n        <ion-select placeholder=\"Select One\" [(ngModel)]=\"selectedSoc\" [selectedText]=\"selectedSoc\">\n            <ion-select-option *ngFor=\"let item of sources\" value={{item.cityId}}>{{item.cityName}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Beaches</ion-label>\n        <ion-select value={fPark} placeholder=\"Select One\" [(ngModel)]=\"selectedPark\" [selectedText]=\"selectedPark\">\n            <ion-select-option *ngFor=\"let item of destinations\" value={{item.cityId}}>{{item.cityName}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n        <ion-label>Departure Date</ion-label>\n        <ion-datetime value=\"2020-01-01T15:43:40.394Z\" display-timezone=\"utc\" [(ngModel)]=\"selectedDate\"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n        <ion-label>No of Passengers</ion-label>\n        <ion-select [(ngModel)]=\"selectedpCount\" [selectedText]=\"selectedpCount\" placeholder=\"Select One\">\n            <ion-select-option value=1>1</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <br>\n    <ion-button (click)=\"onSearch()\">Search</ion-button>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91andhbGMvRG9jdW1lbnRzL2RhbC9UZXJtMi9DQy9wcm9qZWN0L3Rlc3QtYXBwL2NhbmF0b3VyL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/apiservice.service */ "./src/app/tabs/apiservice.service.ts");




let Tab2Page = class Tab2Page {
    /*  constructor( _router: Router ) {
        this.router = _router;
      } */
    constructor(apis, _router) {
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedSoc = "";
        this.selectedpCount = "";
        this.selectedDate = "";
        this.selectedPark = "";
        this.source = [];
        this.destination = ['Halifax', 'Toronto', 'Montreal'];
        this.parks = [];
        this.formData = new FormData();
        this.hn = window.location.hostname;
        this.sources = [];
        this.destinations = [];
        this.apis = apis;
        this.router = _router;
        try {
            this.apis.getAllBeaches(this.hn)
                .subscribe(data => {
                this.sampledata = data;
                //console.log(this.sampledata["source_list"]);
                for (var index in this.sampledata["source_list"]) {
                    this.source.push(this.sampledata["source_list"][index].cityname);
                    this.sources.push({
                        cityId: this.sampledata["source_list"][index].cityid,
                        cityName: this.sampledata["source_list"][index].cityname
                    });
                }
                for (var index in this.sampledata["destination_list"]) {
                    this.parks.push(this.sampledata["destination_list"][index].destname);
                    this.destinations.push({
                        cityId: this.sampledata["destination_list"][index].destid,
                        cityName: this.sampledata["destination_list"][index].destname
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    onSearch() {
        this.formData.append("Source", this.selectedSoc);
        this.formData.append("Park", this.selectedPark);
        this.formData.append("Count", this.selectedpCount);
        this.formData.append("Date", this.selectedDate.split("T")[0]);
        try {
            this.apis.getBuses(this.hn, this.formData)
                .subscribe(data => {
                this.sampleBusData = data;
                for (var index in this.sampleBusData["buslists"]) {
                    this.source.push(this.sampleBusData["buslists"][index].busid);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
        this.router.navigateByUrl('/bus');
    }
};
Tab2Page.ctorParameters = () => [
    { type: _tabs_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Tab2Page.prototype, "childEvent", void 0);
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map