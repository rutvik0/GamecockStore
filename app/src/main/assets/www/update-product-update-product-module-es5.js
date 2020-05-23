function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-product-update-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateProductUpdateProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Product</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteItem()\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"edit_item_form\" (submit)=\"updateItem(edit_item_form.value)\">\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Title</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label color=\"primary\" position=\"floating\" > Product Price (numbers only) </ion-label>\n      <ion-input type=\"number\" formControlName=\"price\" required> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Description</ion-label>\n      <ion-input type=\"text\" formControlName=\"description\" required></ion-input>\n    </ion-item>\n\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" >Update</ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/update-product/update-product-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/update-product/update-product-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateProductPageRoutingModule */

  /***/
  function srcAppUpdateProductUpdateProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductPageRoutingModule", function () {
      return UpdateProductPageRoutingModule;
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


    var _update_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-product.page */
    "./src/app/update-product/update-product.page.ts");

    var routes = [{
      path: '',
      component: _update_product_page__WEBPACK_IMPORTED_MODULE_3__["UpdateProductPage"]
    }];

    var UpdateProductPageRoutingModule = function UpdateProductPageRoutingModule() {
      _classCallCheck(this, UpdateProductPageRoutingModule);
    };

    UpdateProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/update-product/update-product.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/update-product/update-product.module.ts ***!
    \*********************************************************/

  /*! exports provided: UpdateProductPageModule */

  /***/
  function srcAppUpdateProductUpdateProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductPageModule", function () {
      return UpdateProductPageModule;
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


    var _update_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-product-routing.module */
    "./src/app/update-product/update-product-routing.module.ts");
    /* harmony import */


    var _update_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-product.page */
    "./src/app/update-product/update-product.page.ts");

    var UpdateProductPageModule = function UpdateProductPageModule() {
      _classCallCheck(this, UpdateProductPageModule);
    };

    UpdateProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _update_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateProductPageRoutingModule"]],
      declarations: [_update_product_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProductPage"]]
    })], UpdateProductPageModule);
    /***/
  },

  /***/
  "./src/app/update-product/update-product.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/update-product/update-product.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateProductUpdateProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wcm9kdWN0L3VwZGF0ZS1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/update-product/update-product.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/update-product/update-product.page.ts ***!
    \*******************************************************/

  /*! exports provided: UpdateProductPage */

  /***/
  function srcAppUpdateProductUpdateProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductPage", function () {
      return UpdateProductPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../item.service */
    "./src/app/item.service.ts");

    var UpdateProductPage = /*#__PURE__*/function () {
      function UpdateProductPage(formBuilder, route, itemService, router, alertController, toastController) {
        _classCallCheck(this, UpdateProductPage);

        this.formBuilder = formBuilder;
        this.route = route;
        this.itemService = itemService;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.edit_item_form = this.formBuilder.group({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      _createClass(UpdateProductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("onInit");
          this.route.params.subscribe(function (param) {
            _this.current_item = param;
            console.log(_this.current_item);

            _this.edit_item_form.patchValue({
              title: _this.current_item.title
            });

            _this.edit_item_form.patchValue({
              price: _this.current_item.price
            });

            _this.edit_item_form.patchValue({
              description: _this.current_item.description
            });
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.itemService.getUsertype() == 'owner')) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 3;
                    return this.alertController.create({
                      header: 'Delete Item?',
                      message: 'You are about to delete this item. Are you sure?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Delete Canceled');
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this2.itemService.deleteItem(_this2.current_item.id);

                          _this2.deleteToast();
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                    _context.next = 9;
                    break;

                  case 8:
                    this.presentToast();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: 'Only an owner can delete items.',
                      color: 'danger',
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "deleteToast",
        value: function deleteToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: 'Item Deleted',
                      color: 'tertiary',
                      duration: 2000
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "updateItem",
        value: function updateItem(value) {
          console.log(this.current_item.id);
          console.log(this.current_item.title);
          var newValues = {
            id: this.current_item.id,
            category: this.current_item.category,
            description: value.description,
            image: this.current_item.image,
            price: value.price,
            title: value.title,
            uid: this.current_item.uid
          };
          this.itemService.updateProduct(newValues, this.current_item.id);
          this.goBack();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(["tabs/tab1"]);
        }
      }]);

      return UpdateProductPage;
    }();

    UpdateProductPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    UpdateProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./update-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./update-product.page.scss */
      "./src/app/update-product/update-product.page.scss"))["default"]]
    })], UpdateProductPage);
    /***/
  }
}]);
//# sourceMappingURL=update-product-update-product-module-es5.js.map