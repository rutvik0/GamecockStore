function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-add-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddProductAddProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>Add New Product</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-button (click)=\"pickImage()\" expand=\"block\">Take Picture</ion-button>\n  <img src=\"test\" onerror=\"this.src = '/assets/default.png'\" />\n  <form [formGroup]=\"new_item_form\" (submit)=\"createItem(new_item_form.value)\">\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\"> Product Title </ion-label>\n      <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n    </ion-item>\n\n    <ion-item >\n      <ion-label color=\"primary\" position=\"floating\" > Product Price (numbers only) </ion-label>\n      <ion-input type=\"number\" formControlName=\"price\" required> </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Product Category</ion-label>\n      <ion-select color=\"primary\" formControlName=\"category\" placeholder=\"Select One\">\n        <ion-select-option value=\"Toy\">Toy</ion-select-option>\n        <ion-select-option value=\"Food\">Food</ion-select-option>\n        <ion-select-option value=\"Drink\">Drink</ion-select-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\">Product Description</ion-label>\n    <ion-textarea formControlName=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!new_item_form.valid\" (click)=\"goBack()\">Create</ion-button>\n  </form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/add-product/add-product-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-product/add-product-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddProductPageRoutingModule */

  /***/
  function srcAppAddProductAddProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductPageRoutingModule", function () {
      return AddProductPageRoutingModule;
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


    var _add_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-product.page */
    "./src/app/add-product/add-product.page.ts");

    var routes = [{
      path: '',
      component: _add_product_page__WEBPACK_IMPORTED_MODULE_3__["AddProductPage"]
    }];

    var AddProductPageRoutingModule = function AddProductPageRoutingModule() {
      _classCallCheck(this, AddProductPageRoutingModule);
    };

    AddProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-product/add-product.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-product/add-product.module.ts ***!
    \***************************************************/

  /*! exports provided: AddProductPageModule */

  /***/
  function srcAppAddProductAddProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function () {
      return AddProductPageModule;
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


    var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-product-routing.module */
    "./src/app/add-product/add-product-routing.module.ts");
    /* harmony import */


    var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-product.page */
    "./src/app/add-product/add-product.page.ts");

    var AddProductPageModule = function AddProductPageModule() {
      _classCallCheck(this, AddProductPageModule);
    };

    AddProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProductPageRoutingModule"]],
      declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]]
    })], AddProductPageModule);
    /***/
  },

  /***/
  "./src/app/add-product/add-product.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/add-product/add-product.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddProductAddProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-product/add-product.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-product/add-product.page.ts ***!
    \*************************************************/

  /*! exports provided: AddProductPage */

  /***/
  function srcAppAddProductAddProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductPage", function () {
      return AddProductPage;
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


    var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../item.service */
    "./src/app/item.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase */
    "../node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);

    var AddProductPage = /*#__PURE__*/function () {
      function AddProductPage(router, formBuilder, itemService, toastController, camera, file) {
        _classCallCheck(this, AddProductPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.toastController = toastController;
        this.camera = camera;
        this.file = file;
        this.randomId = Math.random().toString(36).substr(2, 5);
        this.addPicId = 'thumb_' + this.randomId;
        this.downloadURL = [];
      }

      _createClass(AddProductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.new_item_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "createItem",
        value: function createItem(value) {
          var self = this;
          var storageRef = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref();
          storageRef.child(this.addPicId).getDownloadURL().then(function (url) {
            var image = url;

            if (image == null) {
              image = "/assets/default.png";
            }

            self.itemService.createItem(value.title, value.price, value.category, image, value.description);
          });
          this.new_item_form.reset();
          this.goBack();
          this.presentToast();
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      color: 'success',
                      message: 'Item Added Successfully',
                      position: 'top',
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
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/tabs/tab1']);
        }
      }, {
        key: "pickImage",
        value: function pickImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var self, options, result, image, pictures;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    self = this;
                    _context2.prev = 1;
                    options = {
                      quality: 50,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE
                    };
                    _context2.next = 5;
                    return this.camera.getPicture(options);

                  case 5:
                    result = _context2.sent;
                    image = "data:image/jpeg;base64,".concat(result);
                    pictures = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref(this.randomId);
                    pictures.putString(image, 'data_url');
                    setTimeout(function () {
                      _this.showImage();
                    }, 2000);
                    _context2.next = 15;
                    break;

                  case 12:
                    _context2.prev = 12;
                    _context2.t0 = _context2["catch"](1);
                    console.error(_context2.t0);

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 12]]);
          }));
        }
      }, {
        key: "showImage",
        value: function showImage() {
          var storageRef = firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref();
          storageRef.child(this.randomId).getDownloadURL().then(function (url) {
            var test = url;
            document.querySelector('img').src = test;
          });
        }
      }]);

      return AddProductPage;
    }();

    AddProductPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
      }];
    };

    AddProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-product.page.scss */
      "./src/app/add-product/add-product.page.scss"))["default"]]
    })], AddProductPage);
    /***/
  }
}]);
//# sourceMappingURL=add-product-add-product-module-es5.js.map