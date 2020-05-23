function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductDetailProductDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>Product Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"editItem()\"><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-img [src]=current_item.image></ion-img>\n\n<ion-item>\n  <ion-text>\n    <h3>\n  {{ current_item.title }}\n    </h3>\n</ion-text>\n\n  </ion-item>\n  <ion-text>\n    <h5 class=\"ion-padding\"> $ {{ current_item.price }}</h5>\n  </ion-text>\n\n <ion-item> \n   <h5>Quantity</h5>\n   <ion-button size=\"normal\" slot=\"end\" (click)=\"addToCart()\">Add To Cart</ion-button>\n</ion-item>\n   <ion-range [(ngModel)]=\"quantity\" min=\"0\" max=\"10\" value=\"1\" pin snaps class=\"ion-padding\"> </ion-range>\n  <ion-item>\n    <h4>Description</h4>\n  </ion-item>\n  <ion-text>\n    <h6 class=\"ion-padding\">\n  {{ current_item.description }}\n    </h6>\n</ion-text>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductDetailPageRoutingModule */

  /***/
  function srcAppProductDetailProductDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function () {
      return ProductDetailPageRoutingModule;
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


    var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-detail.page */
    "./src/app/product-detail/product-detail.page.ts");

    var routes = [{
      path: '',
      component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }];

    var ProductDetailPageRoutingModule = function ProductDetailPageRoutingModule() {
      _classCallCheck(this, ProductDetailPageRoutingModule);
    };

    ProductDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/product-detail/product-detail.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProductDetailPageModule */

  /***/
  function srcAppProductDetailProductDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function () {
      return ProductDetailPageModule;
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


    var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-detail-routing.module */
    "./src/app/product-detail/product-detail-routing.module.ts");
    /* harmony import */


    var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-detail.page */
    "./src/app/product-detail/product-detail.page.ts");

    var ProductDetailPageModule = function ProductDetailPageModule() {
      _classCallCheck(this, ProductDetailPageModule);
    };

    ProductDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"]],
      declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
    })], ProductDetailPageModule);
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/product-detail/product-detail.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductDetailProductDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/product-detail/product-detail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/product-detail/product-detail.page.ts ***!
    \*******************************************************/

  /*! exports provided: ProductDetailPage */

  /***/
  function srcAppProductDetailProductDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function () {
      return ProductDetailPage;
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


    var _item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../item.service */
    "./src/app/item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "../node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProductDetailPage = /*#__PURE__*/function () {
      function ProductDetailPage(itemService, route, router, alertController, toastController) {
        _classCallCheck(this, ProductDetailPage);

        this.itemService = itemService;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.quantity = 1;
        this.user = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
        this.uid = this.user.uid;
        this.cost = 1;
      }

      _createClass(ProductDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (param) {
            _this.current_item = param;
            console.log(_this.current_item);
          });
        }
      }, {
        key: "editItem",
        value: function editItem() {
          this.router.navigate(["/update-product", this.current_item]);
        }
      }, {
        key: "orderToast",
        value: function orderToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: 'Item added to cart',
                      color: 'success',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goToEdit",
        value: function goToEdit() {
          this.router.navigate(["/edit", this.current_item]);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(["/tabs/tab1"]);
        } // addToCart() {
        //   this.itemService.addToCart(this.current_item);
        // }

      }, {
        key: "addToCart",
        value: function addToCart() {
          this.cost = this.quantity * this.current_item.price;
          console.log(this.cost);
          console.log(this.quantity);
          console.log(this.current_item.title);
          console.log(Date());
          this.itemService.addToCart(this.cost, this.quantity, this.current_item.title, this.current_item.image, this.uid);
          this.goBack();
          this.orderToast();
        }
      }]);

      return ProductDetailPage;
    }();

    ProductDetailPage.ctorParameters = function () {
      return [{
        type: _item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-detail.page.scss */
      "./src/app/product-detail/product-detail.page.scss"))["default"]]
    })], ProductDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=product-detail-product-detail-module-es5.js.map