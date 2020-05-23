function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditEditPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Product</ion-title>\n     <ion-button size=\"medium\" slot=\"end\" (click)=\"deleteItem()\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class = \"ion-padding\">\n\n  <form [formGroup]=\"edit_item_form\" (submit)=\"updateItem(edit_item_form.value)\">\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Title</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Price</ion-label>\n      <ion-input type=\"number\" formControlName=\"price\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Product Category</ion-label>\n      <ion-select color=\"primary\" formControlName=\"category\" placeholder=\"Select One\">\n        <ion-select-option value=\"Toy\">Toy</ion-select-option>\n        <ion-select-option value=\"Food\">Food</ion-select-option>\n        <ion-select-option value=\"Drink\">Drink</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Product Image URL</ion-label>\n      <ion-input type=\"text\" formControlName=\"image\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Description</ion-label>\n      <ion-input type=\"text\" formControlName=\"description\" required></ion-input>\n    </ion-item>\n\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" >Update</ion-button>\n  </form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/edit/edit-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/edit/edit-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: EditPageRoutingModule */

  /***/
  function srcAppEditEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function () {
      return EditPageRoutingModule;
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


    var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit.page */
    "./src/app/edit/edit.page.ts");

    var routes = [{
      path: '',
      component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }];

    var EditPageRoutingModule = function EditPageRoutingModule() {
      _classCallCheck(this, EditPageRoutingModule);
    };

    EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/edit/edit.module.ts":
  /*!*************************************!*\
    !*** ./src/app/edit/edit.module.ts ***!
    \*************************************/

  /*! exports provided: EditPageModule */

  /***/
  function srcAppEditEditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPageModule", function () {
      return EditPageModule;
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


    var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-routing.module */
    "./src/app/edit/edit-routing.module.ts");
    /* harmony import */


    var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit.page */
    "./src/app/edit/edit.page.ts");

    var EditPageModule = function EditPageModule() {
      _classCallCheck(this, EditPageModule);
    };

    EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]],
      declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })], EditPageModule);
    /***/
  },

  /***/
  "./src/app/edit/edit.page.scss":
  /*!*************************************!*\
    !*** ./src/app/edit/edit.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditEditPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/edit/edit.page.ts":
  /*!***********************************!*\
    !*** ./src/app/edit/edit.page.ts ***!
    \***********************************/

  /*! exports provided: EditPage */

  /***/
  function srcAppEditEditPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPage", function () {
      return EditPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EditPage = /*#__PURE__*/function () {
      function EditPage(formBuilder, itemService, route, router, alertController, toastController) {
        _classCallCheck(this, EditPage);

        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.edit_item_form = this.formBuilder.group({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
      }

      _createClass(EditPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (param) {
            _this.current_item = param;

            _this.edit_item_form.patchValue({
              title: _this.current_item.title
            });

            _this.edit_item_form.patchValue({
              price: _this.current_item.price
            });

            _this.edit_item_form.patchValue({
              category: _this.current_item.category
            });

            _this.edit_item_form.patchValue({
              image: _this.current_item.image
            });

            _this.edit_item_form.patchValue({
              description: _this.current_item.description
            });
          });
        }
      }, {
        key: "updateItem",
        value: function updateItem(value) {
          var newValues = {
            id: this.current_item.id,
            title: value.title,
            price: value.price,
            category: value.category,
            image: value.image,
            description: value.description
          }; // this.itemService.updateItem(newValues);

          this.goBack();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/tabs/tab1']);
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
      }]);

      return EditPage;
    }();

    EditPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit.page.scss */
      "./src/app/edit/edit.page.scss"))["default"]]
    })], EditPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-edit-module-es5.js.map