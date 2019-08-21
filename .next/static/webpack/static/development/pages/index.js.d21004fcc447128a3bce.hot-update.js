webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");
/* harmony import */ var _components_CreateTestVariant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CreateTestVariant */ "./components/CreateTestVariant.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");















var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSelection", function (resources) {
      var idsFromResources = resources.selection.map(function (product) {
        return product.id;
      });

      _this.setState({
        resourcePickerOpen: false,
        variantSelected: true
      });

      store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('ids', idsFromResources);
    });

    _this.state = {
      resourcePickerOpen: false,
      variantSelected: false
    };
    _this.childHandler = _this.childHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "childHandler",
    value: function childHandler(variantSelectedFromChild) {
      this.setState({
        variantSelected: variantSelectedFromChild
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var history = createBrowserHistory();
      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('ids');
      return this.variantSelected ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_14__["Redirect"], {
        to: "/create-test"
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], {
        primaryAction: {
          content: 'Select product to test',
          onAction: function onAction() {
            return _this2.setState({
              resourcePickerOpen: true
            });
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__["ResourcePicker"], {
        resourceType: "Product",
        showVariants: false,
        allowMultiple: false,
        open: this.state.resourcePickerOpen,
        onSelection: function onSelection(resources) {
          return _this2.handleSelection(resources);
        },
        onCancel: function onCancel() {
          return _this2.setState({
            resourcePickerOpen: false
          });
        }
      }), emptyState ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
        heading: "Test product variants",
        action: {
          content: 'Select products',
          onAction: function onAction() {
            return _this2.setState({
              resourcePickerOpen: true
            });
          }
        },
        image: img
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Select a product to create a test variant."))) : !this.state.variantSelected ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ResourceList__WEBPACK_IMPORTED_MODULE_12__["default"], null) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_14__["Router"], {
        history: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        exact: true,
        path: "/",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_14__["Redirect"], {
            to: "/create-test"
          });
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d21004fcc447128a3bce.hot-update.js.map