(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-list-product-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>  Homepage </ion-title>\n      <ion-buttons slot=\"end\">\n       <ion-button (click)=\"openNewItemPage()\">\n         <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"logout()\"><ion-icon name=\"log-in-outline\"></ion-icon></ion-button>\n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-img [src]=\"img\"></ion-img>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\" (click)=\"goToItem(item)\">\n\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"item.image\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-label>\n        {{ item.title }}\n      </ion-label>\n      <ion-label>\n        {{ item.category }}\n      </ion-label>\n      <ion-label>\n       $ {{ item.price }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/product-list/product-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/product-list/product-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function() { return ProductListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list.page */ "./src/app/product-list/product-list.page.ts");




const routes = [
    {
        path: '',
        component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }
];
let ProductListPageRoutingModule = class ProductListPageRoutingModule {
};
ProductListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductListPageRoutingModule);



/***/ }),

/***/ "./src/app/product-list/product-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list-routing.module */ "./src/app/product-list/product-list-routing.module.ts");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list.page */ "./src/app/product-list/product-list.page.ts");







let ProductListPageModule = class ProductListPageModule {
};
ProductListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListPageRoutingModule"]
        ],
        declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })
], ProductListPageModule);



/***/ }),

/***/ "./src/app/product-list/product-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/product-list/product-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/product-list/product-list.page.ts ***!
  \***************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "../node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");








let ProductListPage = class ProductListPage {
    constructor(router, itemService, toastController, camera, navCtrl, file) {
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
        this.itemService.getObservable().subscribe((data) => {
            this.items = this.itemService.items;
        });
        this.items = this.itemService.items;
        if (firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser == null) {
            console.log("User not logged in");
        }
    }
    ngOnInit() {
    }
    logout() {
        var self = this;
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut().then(function () {
            console.log("Loggging Out");
            self.router.navigate(["/login"]);
        }).catch(function (error) {
            console.log("Error! Signout");
        });
        this.itemService.setUsertype("visitor");
        this.logoutToast();
    }
    openNewItemPage() {
        console.log("clicked me");
        if (firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser == null) {
            console.log("user not logged in");
            console.log("log in please");
            this.router.navigate(["/login"]);
        }
        if (this.itemService.getUsertype() == 'owner') {
            this.router.navigate(["/add-product"]);
        }
        else {
            console.log("Only an owner can add items");
            this.presentToast();
        }
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'danger',
                message: 'Only an owner can add items.',
                duration: 2000
            });
            toast.present();
        });
    }
    logoutToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'danger',
                message: 'You have been logged out',
                duration: 2000
            });
            toast.present();
        });
    }
    goToItem(item) {
        this.router.navigate(["/product-detail", item]);
    }
    pickImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const options = {
                    quality: 50,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE
                };
                const result = yield this.camera.getPicture(options);
                const image = `data:image/jpeg;base64,${result}`;
                const pictures = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(this.randomId);
                pictures.putString(image, 'data_url');
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    download() {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
        storageRef.child(this.randomId).getDownloadURL().then(function (url) {
        });
    }
};
ProductListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] }
];
ProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-list.page.scss */ "./src/app/product-list/product-list.page.scss")).default]
    })
], ProductListPage);



/***/ })

}]);
//# sourceMappingURL=product-list-product-list-module-es2015.js.map