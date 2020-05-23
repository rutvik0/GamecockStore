function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-list-order-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderListOrderListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>Orders</ion-title>\n    <h6></h6>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item *ngFor=\"let order of orders\" (click)=\"goToOrder(order)\">\n      <!-- <ion-item *ngIf=\"order.uid == userid\"> -->\n      <ion-label>\n        <h6>Order ID</h6> {{ order.oid }}\n      </ion-label>\n      <!-- <ion-item *ngFor=\"let cart of order.cart\">\n        <ion-label>\n          {{ cart.title }}\n        </ion-label>\n      </ion-item> -->\n      <ion-label>\n        <h6>Items </h6> {{ order.quantity }}\n      </ion-label>\n      <ion-label>\n        <h6>Order Total</h6>\n        $ {{ order.total }}\n      </ion-label>\n      <ion-label>\n       <h6> Ordered On </h6>{{ order.date | date: 'MM/dd/yy' }}\n      </ion-label>\n    <!-- </ion-item> -->\n    </ion-item>\n\n\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/order-list/order-list-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/order-list/order-list-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: OrderListPageRoutingModule */

  /***/
  function srcAppOrderListOrderListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListPageRoutingModule", function () {
      return OrderListPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _order_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-list.page */
    "./src/app/order-list/order-list.page.ts");

    var routes = [{
      path: '',
      component: _order_list_page__WEBPACK_IMPORTED_MODULE_3__["OrderListPage"]
    }];

    var OrderListPageRoutingModule = function OrderListPageRoutingModule() {
      _classCallCheck(this, OrderListPageRoutingModule);
    };

    OrderListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/order-list/order-list.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/order-list/order-list.module.ts ***!
    \*************************************************/

  /*! exports provided: OrderListPageModule */

  /***/
  function srcAppOrderListOrderListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function () {
      return OrderListPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-list-routing.module */
    "./src/app/order-list/order-list-routing.module.ts");
    /* harmony import */


    var _order_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-list.page */
    "./src/app/order-list/order-list.page.ts");

    var OrderListPageModule = function OrderListPageModule() {
      _classCallCheck(this, OrderListPageModule);
    };

    OrderListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderListPageRoutingModule"]],
      declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_6__["OrderListPage"]]
    })], OrderListPageModule);
    /***/
  },

  /***/
  "./src/app/order-list/order-list.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/order-list/order-list.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderListOrderListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/order-list/order-list.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/order-list/order-list.page.ts ***!
    \***********************************************/

  /*! exports provided: OrderListPage */

  /***/
  function srcAppOrderListOrderListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListPage", function () {
      return OrderListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../item.service */
    "./src/app/item.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "../node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var OrderListPage = /*#__PURE__*/function () {
      function OrderListPage(router, itemService) {
        var _this = this;

        _classCallCheck(this, OrderListPage);

        this.router = router;
        this.itemService = itemService;
        this.orders = [];
        this.userid = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        this.orders = this.itemService.orders;
        this.itemService.getObservable().subscribe(function (data) {
          console.log('Data Recieved', data);
          _this.orders = _this.itemService.orders;
        });

        if (firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser == null) {
          console.log("User not logged in");
        }
      }

      _createClass(OrderListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToOrder",
        value: function goToOrder(order) {
          this.router.navigate(["/order-detail", order]);
        }
      }]);

      return OrderListPage;
    }();

    OrderListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }];
    };

    OrderListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-list.page.scss */
      "./src/app/order-list/order-list.page.scss"))["default"]]
    })], OrderListPage);
    /***/
  }
}]);
//# sourceMappingURL=order-list-order-list-module-es5.js.map