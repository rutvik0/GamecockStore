function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-list-product-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductListProductListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>  Homepage </ion-title>\n      <ion-buttons slot=\"end\">\n       <ion-button (click)=\"openNewItemPage()\">\n         <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"logout()\"><ion-icon name=\"log-in-outline\"></ion-icon></ion-button>\n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-img [src]=\"img\"></ion-img>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\" (click)=\"goToItem(item)\">\n\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"item.image\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-label>\n        {{ item.title }}\n      </ion-label>\n      <ion-label>\n        {{ item.category }}\n      </ion-label>\n      <ion-label>\n       $ {{ item.price }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/product-list/product-list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/product-list/product-list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ProductListPageRoutingModule */

  /***/
  function srcAppProductListProductListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function () {
      return ProductListPageRoutingModule;
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


    var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/product-list/product-list.page.ts");

    var routes = [{
      path: '',
      component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }];

    var ProductListPageRoutingModule = function ProductListPageRoutingModule() {
      _classCallCheck(this, ProductListPageRoutingModule);
    };

    ProductListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/product-list/product-list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/product-list/product-list.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductListPageModule */

  /***/
  function srcAppProductListProductListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function () {
      return ProductListPageModule;
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


    var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-list-routing.module */
    "./src/app/product-list/product-list-routing.module.ts");
    /* harmony import */


    var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/product-list/product-list.page.ts");

    var ProductListPageModule = function ProductListPageModule() {
      _classCallCheck(this, ProductListPageModule);
    };

    ProductListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListPageRoutingModule"]],
      declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })], ProductListPageModule);
    /***/
  },

  /***/
  "./src/app/product-list/product-list.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/product-list/product-list.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductListProductListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/product-list/product-list.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/product-list/product-list.page.ts ***!
    \***************************************************/

  /*! exports provided: ProductListPage */

  /***/
  function srcAppProductListProductListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPage", function () {
      return ProductListPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "../node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../item.service */
    "./src/app/item.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");

    var ProductListPage = /*#__PURE__*/function () {
      function ProductListPage(router, itemService, toastController, camera, navCtrl, file) {
        var _this = this;

        _classCallCheck(this, ProductListPage);

        this.router = router;
        this.itemService = itemService;
        this.toastController = toastController;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.file = file;
        this.img = "assets/white.png";
        this.display = "";
        this.imgfile = "";
        this.items = [];
        this.image = "";
        this.test = "";
        this.randomId = Math.random().toString(36).substr(2, 5);
        this.itemService.getObservable().subscribe(function (data) {
          _this.items = _this.itemService.items;
        });
        this.items = this.itemService.items;

        if (firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser == null) {
          console.log("User not logged in");
        }
      }

      _createClass(ProductListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          var self = this;
          firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut().then(function () {
            console.log("Loggging Out");
            self.router.navigate(["/login"]);
          })["catch"](function (error) {
            console.log("Error! Signout");
          });
          this.itemService.setUsertype("visitor");
          this.logoutToast();
        }
      }, {
        key: "openNewItemPage",
        value: function openNewItemPage() {
          console.log("clicked me");

          if (firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser == null) {
            console.log("user not logged in");
            console.log("log in please");
            this.router.navigate(["/login"]);
          }

          if (this.itemService.getUsertype() == 'owner') {
            this.router.navigate(["/add-product"]);
          } else {
            console.log("Only an owner can add items");
            this.presentToast();
          }
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
                      color: 'danger',
                      message: 'Only an owner can add items.',
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
        key: "logoutToast",
        value: function logoutToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      color: 'danger',
                      message: 'You have been logged out',
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
        key: "goToItem",
        value: function goToItem(item) {
          this.router.navigate(["/product-detail", item]);
        }
      }, {
        key: "pickImage",
        value: function pickImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var options, result, image, pictures;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    options = {
                      quality: 50,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE
                    };
                    _context3.next = 4;
                    return this.camera.getPicture(options);

                  case 4:
                    result = _context3.sent;
                    image = "data:image/jpeg;base64,".concat(result);
                    pictures = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(this.randomId);
                    pictures.putString(image, 'data_url');
                    _context3.next = 13;
                    break;

                  case 10:
                    _context3.prev = 10;
                    _context3.t0 = _context3["catch"](0);
                    console.error(_context3.t0);

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 10]]);
          }));
        }
      }, {
        key: "download",
        value: function download() {
          var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
          storageRef.child(this.randomId).getDownloadURL().then(function (url) {});
        }
      }]);

      return ProductListPage;
    }();

    ProductListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
      }];
    };

    ProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-list.page.scss */
      "./src/app/product-list/product-list.page.scss"))["default"]]
    })], ProductListPage);
    /***/
  }
}]);
//# sourceMappingURL=product-list-product-list-module-es5.js.map