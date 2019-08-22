webpackHotUpdate("static\\development\\pages\\create-test.js",{

/***/ "./pages/create-test.js":
/*!******************************!*\
  !*** ./pages/create-test.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _data_classes_product_Product__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../data_classes/product/Product */ "./data_classes/product/Product.js");
/* harmony import */ var _data_classes_product_Product__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_data_classes_product_Product__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _data_classes_variant_Variant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../data_classes/variant/Variant */ "./data_classes/variant/Variant.js");
/* harmony import */ var _data_classes_variant_Variant__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_data_classes_variant_Variant__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _shopify_app_bridge_react_components_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shopify/app-bridge-react/components/Modal */ "./node_modules/@shopify/app-bridge-react/components/Modal/index.js");
/* harmony import */ var _shopify_app_bridge_react_components_Modal__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react_components_Modal__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_22__);













function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        description\n        id\n        totalVariants\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 10) {\n          edges {\n            node {\n              price\n              id\n              image {\n                originalSrc\n                altText\n              }\n              displayName\n              compareAtPrice\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n    query getShopID {\n            shop{\n                id\n            }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











 //TODO: fetch all variants, not first 10

var GET_SHOP_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());
var GET_PRODUCT_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject2());

var CreateTestVariant =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CreateTestVariant, _React$Component);

  function CreateTestVariant(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CreateTestVariant);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CreateTestVariant).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "redirect", function () {
      _this.props.variantCreated(false);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "itemToBeConsumed", function () {
      var item = store_js__WEBPACK_IMPORTED_MODULE_16___default.a.get('item');
      var price = item.variants.edges[0].node.price;
      var variantId = item.variants.edges[0].node.id;
      var discounter = price * 0.1;

      _this.setState({
        price: price,
        variantId: variantId
      });

      return (price - discounter).toFixed(2);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleTextChange", function (value) {
      _this.setState({
        value: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleProductOrVariantSelectChange", function (data, newValue) {
      _this.setState({
        productTitle: data.nodes[0].title,
        productDescription: data.nodes[0].description,
        productSelected: newValue,
        variantTitle: data.nodes[0].variants.edges[0].node.displayName,
        variantPrice: data.nodes[0].variants.edges[0].node.price,
        variantDiscount: data.nodes[0].variants.edges[0].node.compareAtPrice
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleVariantSelectChange", function (variantsArray, newValue) {
      newValue = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(newValue, 10);

      _this.setState({
        variantSelected: newValue,
        variantTitle: variantsArray[newValue].node.displayName,
        variantPrice: variantsArray[newValue].node.price,
        variantDiscount: variantsArray[newValue].node.compareAtPrice
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleProductOrVariantSubmit", function (data, shopID) {
      //data param is retrieved from gql, "old data", new data is stored in this.state
      //send all relevant fields form old and new data with request
      switch (_this.state.productSelected) {
        case "product":
          var product = new _data_classes_product_Product__WEBPACK_IMPORTED_MODULE_18___default.a(data.nodes[0].id, shopID, data.nodes[0].title, data.nodes[0].images.edges[0].node.originalSrc, data.nodes[0].description, 0, 0, 0, _this.state.productTitle, _this.state.productImage, _this.state.productDescription, 0, 0, 0);
          jquery__WEBPACK_IMPORTED_MODULE_22___default.a.ajax({
            type: "POST",
            url: "/create-product-test",
            contentType: "application/json; charset=utf-8",
            data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(product),
            dataType: 'text'
          });
          break;

        case "variants":
          var variant = new _data_classes_variant_Variant__WEBPACK_IMPORTED_MODULE_19___default.a(data.nodes[0].variants.edges[_this.state.variantSelected].node.id, data.nodes[0].id, shopID, data.nodes[0].variants.edges[_this.state.variantSelected].node.displayName, data.nodes[0].variants.edges[_this.state.variantSelected].node.image ? data.nodes[0].variants.edges[_this.state.variantSelected].node.image.originalSrc : data.nodes[0].images.edges[0].node.originalSrc, data.nodes[0].variants.edges[_this.state.variantSelected].node.price, data.nodes[0].variants.edges[_this.state.variantSelected].node.compareAtPrice, 0, 0, 0, _this.state.variantTitle, _this.state.variantImage, _this.state.variantPrice, _this.state.variantDiscount, 0, 0, 0);
          jquery__WEBPACK_IMPORTED_MODULE_22___default.a.ajax({
            type: "POST",
            url: "/create-variant-test",
            contentType: "application/json; charset=utf-8",
            data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(variant),
            dataType: 'json'
          });
      }
    });

    _this.state = {
      files: [],
      productSelected: 'product',
      variantSelected: 0,
      productTitle: '',
      productDescription: '',
      productImage: '',
      variantTitle: '',
      variantImage: '',
      variantPrice: '',
      variantDiscount: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CreateTestVariant, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var productOrVariantSelectOptions = [{
        label: 'Product',
        value: 'product'
      }, {
        label: 'Variants',
        value: 'variants'
      }];
      var app = this.context;
      var files = this.state.files;
      var validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      console.log(this.state.files);

      if (this.state.files.length != 0) {
        console.log(window.URL.createObjectURL(this.state.files[0]));
      }

      var fileUpload = !files.length && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["DropZone"].FileUpload, null);
      var uploadedFiles = files.length > 0 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Stack"], {
        vertical: true
      }, files.map(function (file, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Stack"], {
          alignment: "center",
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Thumbnail"], {
          size: "large",
          alt: file.name,
          source: validImageTypes.indexOf(file.type) > 0 ? window.URL.createObjectURL(file) : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, file.name, " ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Caption"], null, file.size, " bytes")));
      }));
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_17__["Query"], {
        query: GET_PRODUCT_BY_ID,
        variables: {
          ids: store_js__WEBPACK_IMPORTED_MODULE_16___default.a.get('ids')
        }
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;

        if (loading) {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, "Loading\u2026");
        }

        if (error) {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, error.message);
        }

        var variantsArray = data.nodes[0].variants.edges;
        var variantSelectOptions = [];
        variantsArray.forEach(function (variant, index) {
          variantSelectOptions.push({
            label: variant.node.displayName,
            value: index
          });
        });
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_17__["Query"], {
          query: GET_SHOP_ID
        }, function (_ref2) {
          var shop = _ref2.data.shop,
              loading = _ref2.loading,
              error = _ref2.error;

          if (loading) {
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, "Loading\u2026");
          }

          if (error) {
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, error.message);
          }

          console.log("ID", shop.id);
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Page"], {
            primaryAction: {
              content: 'Create A/B Test',
              onAction: function onAction() {
                return _this2.handleProductOrVariantSubmit(data, shop.id);
              }
            }
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Select"], {
            label: "Create test for:",
            disabled: false,
            options: productOrVariantSelectOptions,
            onChange: _this2.handleProductOrVariantSelectChange.bind(_this2, data),
            value: _this2.state.productSelected
          }), _this2.state.productSelected === 'product' ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Form"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Thumbnail"], {
            size: "large",
            source: data.nodes[0].images.edges[0] ? data.nodes[0].images.edges[0].node.originalSrc : '',
            alt: data.nodes[0].images.edges[0] ? data.nodes[0].images.edges[0].node.altText : ''
          }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["DropZone"], {
            onDrop: function onDrop(files, acceptedFiles, rejectedFiles) {
              _this2.setState({
                files: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.state.files), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acceptedFiles))
              });
            }
          }, uploadedFiles, fileUpload)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
            readOnly: false,
            value: _this2.state.productTitle,
            onChange: _this2.handleTextChange,
            label: "Product Name",
            type: "text"
          }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
            readOnly: false,
            value: _this2.state.productDescription,
            onChange: _this2.handleTextChange,
            label: "Product Description",
            type: "text"
          }))) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Form"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Select"], {
            label: "Select product variant to create test for:",
            disabled: false,
            options: variantSelectOptions,
            value: _this2.state.variantSelected,
            onChange: _this2.handleVariantSelectChange.bind(_this2, variantsArray)
          }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Thumbnail"], {
            size: "large",
            source: data.nodes[0].variants.edges[_this2.state.variantSelected].node.image ? data.nodes[0].variants.edges[_this2.state.variantSelected].node.image.originalSrc : data.nodes[0].images.edges[0].node.originalSrc,
            alt: data.nodes[0].variants.edges[_this2.state.variantSelected].node.image ? data.nodes[0].variants.edges[_this2.state.variantSelected].node.image.altText : data.nodes[0].images.edges[0].node.altText
          }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["DropZone"], {
            onDrop: function onDrop(files, acceptedFiles, rejectedFiles) {
              _this2.setState({
                files: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.state.files), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acceptedFiles))
              });
            }
          }, uploadedFiles, fileUpload)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
            readOnly: false,
            value: _this2.state.variantTitle,
            onChange: _this2.handleTextChange,
            label: "Product Name",
            type: "text"
          }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
            readOnly: false,
            value: _this2.state.variantPrice,
            onChange: _this2.handleTextChange,
            label: "Original Price",
            type: "text"
          }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
            readOnly: false,
            value: _this2.state.variantDiscount,
            onChange: _this2.handleTextChange,
            label: "Discounted Price",
            type: "text"
          }))));
        });
      });
    }
  }]);

  return CreateTestVariant;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(CreateTestVariant, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateTestVariant);

/***/ })

})
//# sourceMappingURL=create-test.js.22f0b0c1f1eca9aad5a6.hot-update.js.map