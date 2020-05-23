(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-detail-order-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-detail/order-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-detail/order-detail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>Order Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-button slot=\"end\" (click)=\"show()\"> Delete</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item>\n  <ion-label>\n    <h6>Order Date</h6>\n    {{ current_order.date |  date: 'MM/dd/yyyy'}}\n  </ion-label>\n  </ion-item>\n\n  <ion-item >\n    <ion-label>\n\n\n     <h6>Products:</h6>\n     <ion-item *ngFor=\"let item of cart\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"item.image\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-label>\n        {{ item.title }}\n      </ion-label>\n      <ion-label>\n        {{ item.quantity }}\n      </ion-label>\n      <ion-label>\n       $ {{ item.cost }}\n      </ion-label>\n    </ion-item>\n\n\n\n    </ion-label>\n  </ion-item>\n\n\n  \n  <ion-item>\n    <ion-label>\n      <h6>  Total Items:</h6>   {{ current_order.quantity }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      <h6>Order Total</h6> $ {{ current_order.total }}\n    </ion-label>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>\n      <h6>User ID</h6> {{ current_order.uid }}\n     </ion-label>\n    </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/order-detail/order-detail-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/order-detail/order-detail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/order-detail/order-detail.page.ts");




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/order-detail/order-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail-routing.module */ "./src/app/order-detail/order-detail-routing.module.ts");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/order-detail/order-detail.page.ts");







let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })
], OrderDetailPageModule);



/***/ }),

/***/ "./src/app/order-detail/order-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/order-detail/order-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.ts ***!
  \***************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "../node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let OrderDetailPage = class OrderDetailPage {
    constructor(route, alertController, itemService, toastController) {
        this.route = route;
        this.alertController = alertController;
        this.itemService = itemService;
        this.toastController = toastController;
        this.eventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.user = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        this.uid = this.user.uid;
        this.cart = [];
    }
    publishEvent(data) {
        this.eventSubject.next(data);
    }
    getObservable() {
        return this.eventSubject;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.current_order = param;
            console.log(this.current_order);
        });
        var self = this;
        this.db.collection("CartOrder").where("oid", "==", this.current_order.oid)
            .onSnapshot(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var item = doc.data();
                self.cart = item.cart;
            });
            self.publishEvent({ foo: 'bar' });
        });
    }
    show() {
        console.log(this.current_order.cart);
    }
    deleteOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete Order?',
                message: 'You are about to delete this order. Are you sure?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Delete Canceled');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.itemService.deleteOrder(this.current_order.id);
                            this.deleteToast();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Order Deleted',
                color: 'tertiary',
                duration: 2000
            });
            toast.present();
        });
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
OrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-detail/order-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/order-detail/order-detail.page.scss")).default]
    })
], OrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=order-detail-order-detail-module-es2015.js.map