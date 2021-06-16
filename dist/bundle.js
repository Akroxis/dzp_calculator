/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Roboto_Medium_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/Roboto-Medium.ttf */ \"./src/assets/fonts/Roboto-Medium.ttf\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Roboto_Medium_ttf__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-style: normal;\\n  font-weight: normal;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"ttf\\\");\\n}\\nhtml, body {\\n  width: 380px;\\n  height: 483px;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.calculator-container {\\n  width: 380px;\\n  height: 483px;\\n  border-radius: 4px;\\n  background-color: #FFFFFF;\\n}\\n\\n.padding_container {\\n  padding: 49px 32px 24px 32px;\\n  border-top: 1px solid #ECECEF;\\n  border-bottom: 1px solid #ECECEF;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  height: 55px;\\n  justify-content: space-between;\\n  padding: 0 46px 2px 32px;\\n}\\n\\n.header_tab {\\n  cursor: pointer;\\n  width: 151px;\\n  height: 56px;\\n  text-align: center;\\n  align-items: center;\\n  user-select: none;\\n  display: flex;\\n  justify-content: center;\\n}\\n.header_tab span {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 16px;\\n  line-height: 19px;\\n  color: #A2A2B2;\\n}\\n.header_tab:active span {\\n  color: #787891;\\n}\\n.header_tab:hover {\\n  border-bottom: 3px solid #A2A2B2;\\n}\\n.header_tab.little-loan {\\n  border-bottom: 3px solid #57B560;\\n}\\n.header_tab.large-loan {\\n  border-bottom: 3px solid #ffc800;\\n}\\n\\n.icon {\\n  margin-right: 10px;\\n}\\n\\n.input-container {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  border: 1px solid #D6D6D6;\\n  border-radius: 3px;\\n  box-sizing: border-box;\\n  position: relative;\\n  height: 64px;\\n  margin-bottom: 44px;\\n}\\n\\n.text-input {\\n  border: none;\\n  outline: none;\\n  width: 60%;\\n  margin-top: 5px;\\n  padding-top: 14px;\\n  padding-left: 15px;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 24px;\\n  line-height: 24px;\\n  color: #4E4E64;\\n}\\n\\n.input_mock-container {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  position: absolute;\\n  border: none;\\n  outline: none;\\n  background: white;\\n  width: 60%;\\n  margin-top: 5px;\\n  padding-top: 16px;\\n  padding-left: 15px;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 24px;\\n  line-height: 24px;\\n  color: #4E4E64;\\n}\\n\\n.date-text-input_row {\\n  display: flex;\\n  flex-flow: row nowrap;\\n}\\n\\n.date-tip {\\n  width: 55px;\\n  height: 15px;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 16px;\\n  text-align: right;\\n  color: #A0A0A0;\\n  align-items: center;\\n}\\n\\n.main-label {\\n  position: absolute;\\n  top: -10px;\\n  left: 15px;\\n  background: white;\\n  width: 90px;\\n  text-align: center;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 16px;\\n  color: #A2A2B2;\\n}\\n\\n.time-label {\\n  width: 80px;\\n}\\n\\n.input_range {\\n  width: 100%;\\n}\\n\\n.button {\\n  background: #57B560;\\n  color: #fff;\\n  height: 56px;\\n  width: 100%;\\n  font-size: 16px;\\n  font-weight: bold;\\n  border-radius: 4px;\\n  border: none;\\n  cursor: pointer;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n.button.large-loan {\\n  color: #4e4e64;\\n  background: #ffc800;\\n}\\n\\n.calculator_footer {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  height: 82px;\\n  justify-content: space-between;\\n  padding: 0 32px;\\n  margin-top: 16px;\\n}\\n\\n.footer_item {\\n  display: flex;\\n  flex-flow: column nowrap;\\n}\\n\\n.footer-item_title {\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  line-height: 16px;\\n  color: #A0A0A0;\\n  margin-bottom: 10px;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.footer-item_content {\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 21px;\\n  line-height: 24px;\\n  color: #4E4E64;\\n}\\n\\n.footer-countdown_container {\\n  display: flex;\\n  flex-flow: row nowrap;\\n}\\n\\n/* Стили для input-range */\\ninput[type=range] {\\n  height: 28px;\\n  -webkit-appearance: none;\\n  width: 316px;\\n  margin: 0;\\n  background: transparent;\\n  overflow: hidden;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 2px;\\n  cursor: pointer;\\n  animate: 0.2s;\\n  box-shadow: 0px 0px 0px #000000;\\n  background: #57B560;\\n  border-radius: 0px;\\n  border: 0px solid #000000;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track.large-loan {\\n  background: #ffc800;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  box-shadow: 0px 0px 0px #000000;\\n  border: 0px solid #000000;\\n  height: 22px;\\n  width: 22px;\\n  border-radius: 50px;\\n  background: #57B560;\\n  cursor: pointer;\\n  -webkit-appearance: none;\\n  margin-top: -10px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #57B560;\\n}\\n\\ninput[type=range]::-moz-range-track {\\n  width: 100%;\\n  height: 2px;\\n  cursor: pointer;\\n  animate: 0.2s;\\n  box-shadow: 0px 0px 0px #000000;\\n  background: #57B560;\\n  border-radius: 0px 0px 0px 3px;\\n  border: 0px solid #000000;\\n}\\n\\ninput[type=range]::-moz-range-thumb {\\n  box-shadow: 0px 0px 0px #000000;\\n  border: 0px solid #000000;\\n  height: 22px;\\n  width: 22px;\\n  border-radius: 50px;\\n  background: #57B560;\\n  cursor: pointer;\\n}\\n\\ninput[type=range]::-ms-track {\\n  width: 100%;\\n  height: 2px;\\n  cursor: pointer;\\n  animate: 0.2s;\\n  background: transparent;\\n  border-color: transparent;\\n  color: transparent;\\n}\\n\\ninput[type=range]::-ms-fill-lower {\\n  background: #57B560;\\n  border: 0px solid #000000;\\n  border-radius: 0px;\\n  box-shadow: 0px 0px 0px #000000;\\n}\\n\\ninput[type=range]::-ms-fill-upper {\\n  background: #D6D6D6;\\n  border: 0px solid #000000;\\n  border-radius: 0px;\\n  box-shadow: 0px 0px 0px #000000;\\n}\\n\\ninput[type=range]::-ms-thumb {\\n  margin-top: 1px;\\n  box-shadow: 0px 0px 0px #000000;\\n  border: 0px solid #000000;\\n  height: 22px;\\n  width: 22px;\\n  border-radius: 50px;\\n  background: #57B560;\\n  cursor: pointer;\\n}\\n\\ninput[type=range]:focus::-ms-fill-lower {\\n  background: #D6D6D6;\\n}\\n\\ninput[type=range]:focus::-ms-fill-upper {\\n  background: #D6D6D6 !important;\\n  color: #13bba4;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dzp-calculator/./src/assets/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dzp-calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://dzp-calculator/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Medium.ttf ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/fonts/Roboto-Medium.ttf\");\n\n//# sourceURL=webpack://dzp-calculator/./src/assets/fonts/Roboto-Medium.ttf?");

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dzp-calculator/./src/assets/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dzp-calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/countdown */ \"./src/js/countdown.js\");\n/* harmony import */ var _js_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_countdown__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/script */ \"./src/js/script.js\");\n/* harmony import */ var _js_usersCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/usersCount */ \"./src/js/usersCount.js\");\n/* harmony import */ var _js_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/helper */ \"./src/js/helper.js\");\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dzp-calculator/./src/app.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MIN_LOAN_AMOUNT\": () => (/* binding */ MIN_LOAN_AMOUNT),\n/* harmony export */   \"MAX_LOAN_AMOUNT\": () => (/* binding */ MAX_LOAN_AMOUNT),\n/* harmony export */   \"MIN_LOAN_TIME\": () => (/* binding */ MIN_LOAN_TIME),\n/* harmony export */   \"MAX_LOAN_TIME\": () => (/* binding */ MAX_LOAN_TIME),\n/* harmony export */   \"TIME_RIGHT_CORNER_VALUE\": () => (/* binding */ TIME_RIGHT_CORNER_VALUE),\n/* harmony export */   \"TIME_LEFT_CORNER_VALUE\": () => (/* binding */ TIME_LEFT_CORNER_VALUE),\n/* harmony export */   \"AMOUNT_RIGHT_CORNER_VALUE\": () => (/* binding */ AMOUNT_RIGHT_CORNER_VALUE),\n/* harmony export */   \"AMOUNT_LEFT_CORNER_VALUE\": () => (/* binding */ AMOUNT_LEFT_CORNER_VALUE)\n/* harmony export */ });\nconst MIN_LOAN_AMOUNT = 2000; // Минимальная сумма займа\r\nconst MAX_LOAN_AMOUNT = 100000; // Максимальная сумма займа\r\nconst MIN_LOAN_TIME = 7; // Минимальный срок займа\r\nconst MAX_LOAN_TIME = 41; // Максимальный срок займа\r\nconst TIME_RIGHT_CORNER_VALUE = 31; // Минимальный рендж месяца\r\nconst TIME_LEFT_CORNER_VALUE = 30; // Максимальный рендж дней\r\nconst AMOUNT_RIGHT_CORNER_VALUE = 21000; // Сумма для смены дней на месяц;\r\nconst AMOUNT_LEFT_CORNER_VALUE = 20000; // Сумма для смены месяца на дни;\n\n//# sourceURL=webpack://dzp-calculator/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/countdown.js":
/*!*****************************!*\
  !*** ./src/js/countdown.js ***!
  \*****************************/
/***/ (() => {

eval("window.onload = () => {\r\n    const countdownSpan = document.getElementById('time_countdown');\r\n\r\n    const countDownDate = new Date().getTime() + 15 * 60 * 1000;\r\n\r\n    const countDown = setInterval(function() {\r\n        const now = new Date().getTime();\r\n\r\n        const distance = countDownDate - now;\r\n\r\n        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\r\n        const seconds = Math.floor((distance % (1000 * 60)) / 1000);\r\n\r\n        const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;\r\n        const formattedSeconds = seconds >= 10 ? seconds : `0${seconds}`;\r\n        countdownSpan.innerHTML = formattedMinutes + \":\" + formattedSeconds;\r\n\r\n        if (distance < 0) {\r\n            clearInterval(countDown);\r\n        }\r\n    }, 1000);\r\n}\n\n//# sourceURL=webpack://dzp-calculator/./src/js/countdown.js?");

/***/ }),

/***/ "./src/js/helper.js":
/*!**************************!*\
  !*** ./src/js/helper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberWithSpaces\": () => (/* binding */ numberWithSpaces),\n/* harmony export */   \"sumRound\": () => (/* binding */ sumRound),\n/* harmony export */   \"timeRound\": () => (/* binding */ timeRound),\n/* harmony export */   \"getCorrectDeclension\": () => (/* binding */ getCorrectDeclension),\n/* harmony export */   \"formattedDays\": () => (/* binding */ formattedDays)\n/* harmony export */ });\nconst numberWithSpaces = (value) => {\r\n    return value.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \");\r\n}\r\n\r\nconst sumRound = (value) => Math.round(value/1000)*1000;\r\n\r\nconst timeRound = (value) => Math.round(value);\r\n\r\nconst getCorrectDeclension = (value, words) => {\r\n    value = Math.abs(value) % 100;\r\n    const num = value % 10;\r\n    if(value > 10 && value < 20) return words[2];\r\n    if(num > 1 && num < 5) return words[1];\r\n    if(num === 1) return words[0];\r\n    return words[2];\r\n}\r\n\r\nconst daysWithDeclension = ['день', 'дня', 'дней'];\r\n\r\nconst formattedDays = (value) => getCorrectDeclension(value, daysWithDeclension);\r\n\r\n\n\n//# sourceURL=webpack://dzp-calculator/./src/js/helper.js?");

/***/ }),

/***/ "./src/js/observer.js":
/*!****************************!*\
  !*** ./src/js/observer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EventObserver {\r\n    constructor() {\r\n        this.observers = [];\r\n    }\r\n\r\n    subscribe(fn) {\r\n        this.observers.push(fn)\r\n    }\r\n\r\n    unsubscribe(fn) {\r\n        this.observers = this.observers.filter(subscriber => subscriber !== fn)\r\n    }\r\n\r\n    broadcast(data) {\r\n        this.observers.forEach(subscriber => subscriber(data))\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventObserver);\n\n//# sourceURL=webpack://dzp-calculator/./src/js/observer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./src/js/observer.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/js/helper.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    // Моки для текстовых инпутов\r\n    const loanSumMock = document.getElementById('loanSumMock');\r\n    const loanTimeMock = document.getElementById('loanTimeMock');\r\n\r\n    // Инпуты суммы займа\r\n    const loanSumRange = document.getElementById('loanSumRange');\r\n    const loanSumText = document.getElementById('loanSumValue');\r\n\r\n    // Инпуты срока займа\r\n    const loanTimeRange = document.getElementById('loanTimeRange');\r\n    const loanTimeText = document.getElementById('loanTimeValue');\r\n\r\n    // Кнопка получения суммы\r\n    const confirmButton = document.getElementById('getLoanButton');\r\n\r\n// Табы\r\n    const firstTab = document.getElementById('firstTab');\r\n    const secondTab = document.getElementById('secondTab');\r\n\r\n\r\n\r\n// INIT-значения\r\n    const formattedMinLoanAmount = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.numberWithSpaces)(_constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_AMOUNT);\r\n    confirmButton.innerText = `ПОЛУЧИТЬ ${formattedMinLoanAmount} ₽`;\r\n    firstTab.classList.add('little-loan');\r\n    loanSumMock.innerText = `${formattedMinLoanAmount} ₽`;\r\n    loanTimeMock.innerText = `${_constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_TIME} ${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.formattedDays)(_constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_TIME)}`;\r\n\r\n// Переменные для хранения текущих значений инпутов перед новым вводом\r\n    let currentLoanSum = _constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_AMOUNT;\r\n    let currentLoanTime = _constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_TIME;\r\n\r\n// Логика скрытия мока и отображения инпута\r\n    loanSumMock.onclick = () => {\r\n        const inputLength = loanSumText.value.length;\r\n        loanSumMock.style.display = 'none';\r\n        loanSumText.focus();\r\n        loanSumText.setSelectionRange(inputLength, inputLength);\r\n    };\r\n\r\n    loanTimeMock.onclick = () => {\r\n        const inputLength = loanTimeText.value.length\r\n        loanTimeMock.style.display = 'block';\r\n        loanTimeText.focus();\r\n        loanTimeText.setSelectionRange(inputLength, inputLength);\r\n    }\r\n\r\n// Запись значений инпутов (для корректной смены рендж-инпутов)\r\n    loanSumText.onfocus = (event) => {\r\n        currentLoanSum = event.target.value;\r\n        loanSumMock.style.display = 'none';\r\n    };\r\n\r\n    loanTimeText.onfocus = (event) => {\r\n        currentLoanTime = event.target.value;\r\n        loanTimeMock.style.display = 'none';\r\n    };\r\n\r\n    loanSumRange.onfocus = (event) => {\r\n        currentLoanSum = event.target.value;\r\n    };\r\n\r\n    loanTimeRange.onfocus = (event) => {\r\n        currentLoanTime = event.target.value;\r\n    };\r\n\r\n\r\n// Изменение текста кнопки\r\n    const setButtonText = (value) => {\r\n        confirmButton.innerText = `ПОЛУЧИТЬ ${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.numberWithSpaces)(value)} ₽`;\r\n    };\r\n\r\n// Изменение текста мока суммы\r\n    const setSumMockText = (value) => {\r\n        loanSumMock.innerText = `${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.numberWithSpaces)(value)} ₽`;\r\n    };\r\n\r\n// Изменение текста мока времени\r\n    const setTimeMockText = (value) => {\r\n        loanTimeMock.innerText = `${value} ${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.formattedDays)(value)}`\r\n    }\r\n\r\n// Переключение табов\r\n    const setFirstTabActive = () => {\r\n        firstTab.classList.add('little-loan');\r\n        secondTab.classList.remove('large-loan');\r\n        confirmButton.classList.remove('large-loan');\r\n    };\r\n\r\n    const setSecondTabActive = () => {\r\n        firstTab.classList.remove('little-loan');\r\n        secondTab.classList.add('large-loan');\r\n        confirmButton.classList.add('large-loan');\r\n    };\r\n\r\n// Выставление левых границ суммы/срока займа\r\n    const setLeftCornerValues = () => {\r\n        loanSumText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE;\r\n        loanSumRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE;\r\n        loanTimeText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE;\r\n        loanTimeRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE;\r\n        setButtonText(_constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE);\r\n        setSumMockText(_constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE);\r\n        setTimeMockText(_constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE);\r\n    };\r\n\r\n// Выставление правых границ суммы/срока займа\r\n    const setRightCornerValues = () => {\r\n        loanSumText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE;\r\n        loanSumRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE;\r\n        loanTimeText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE;\r\n        loanTimeRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE;\r\n        setButtonText(_constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE);\r\n        setSumMockText(_constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE);\r\n        setTimeMockText(_constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE);\r\n    };\r\n\r\n// Обсервер левого таба до 20 000 рублей.\r\n    const firstTabObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n    firstTabObserver.subscribe(() => {\r\n        setFirstTabActive();\r\n        setLeftCornerValues();\r\n    });\r\n\r\n    firstTab.onclick = (event) => {\r\n        event.stopPropagation();\r\n        firstTabObserver.broadcast();\r\n    };\r\n\r\n// Обсервер второго таба до 100 000 рублей.\r\n    const secondTabObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n    secondTabObserver.subscribe(() => {\r\n        setSecondTabActive();\r\n        setRightCornerValues();\r\n    });\r\n\r\n    secondTab.onclick = (event) => {\r\n        event.stopPropagation();\r\n        secondTabObserver.broadcast();\r\n    };\r\n\r\n// Установка суммы займа\r\n    const setLoanSumValues = (value) => {\r\n        loanSumText.value = value;\r\n        loanSumRange.value = value;\r\n        setButtonText(value);\r\n        setSumMockText(value);\r\n    };\r\n\r\n// Установка времени займа\r\n    const setLoanTimeValues = (value) => {\r\n        loanTimeText.value = value;\r\n        loanTimeRange.value = value;\r\n        setTimeMockText(value);\r\n    };\r\n\r\n// Проверка того, что предыдущее и новое значения суммы/времени находятся по разную сторону левой и правой границ всего ренджа\r\n    const validateSumsForRange = () => (currentLoanSum <= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE && loanSumText.value >= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE) ||\r\n        (currentLoanSum <= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE && loanSumRange.value >= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE) ||\r\n        (currentLoanSum >= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE && loanSumText.value <= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE) ||\r\n        (currentLoanSum >= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE && loanSumRange.value <= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE);\r\n    const validateTimesForRange = () => (currentLoanTime <= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE && loanTimeText.value >= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE) ||\r\n        (currentLoanTime <= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE && loanTimeRange.value >= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE) ||\r\n        (currentLoanTime >= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE && loanTimeText.value <= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE) ||\r\n        (currentLoanTime >= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE && loanTimeRange.value <= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE);\r\n\r\n// Обсервер суммы займа\r\n    const loanSumObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n// Смена рендж-инпута времени в зависимости от суммы, сопутствующая смена текста кнопки/табов\r\n    const setActualLoanTime = (value) => {\r\n        if (value < _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE) {\r\n            loanTimeRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE;\r\n            loanTimeText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE;\r\n            setFirstTabActive();\r\n        }\r\n        if(value >= _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE) {\r\n            loanTimeRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE;\r\n            loanTimeText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE;\r\n            setSecondTabActive();\r\n        }\r\n        setSumMockText(value);\r\n        setTimeMockText(loanTimeText.value);\r\n        setButtonText(value);\r\n    };\r\n\r\n\r\n    loanSumObserver.subscribe(value => {\r\n        const validationResult = validateSumsForRange();\r\n        setLoanSumValues(value);\r\n        if(validationResult) {\r\n            setActualLoanTime(value);\r\n        }\r\n    });\r\n\r\n    loanSumText.oninput = (event) => {\r\n        loanSumObserver.broadcast(event.target.value)\r\n    };\r\n\r\n// Валидация инпута суммы: соответствие диапазону, округление до ближайшей тысячи, проверка на NaN\r\n    const setCorrectLoanSum = (currentValue) => {\r\n        if(currentValue < _constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_AMOUNT || isNaN(currentValue)) {\r\n            currentValue = _constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_AMOUNT;\r\n        } else if(currentValue > _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_LOAN_AMOUNT) {\r\n            currentValue = _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_LOAN_AMOUNT;\r\n        } else {\r\n            if(currentValue % 1000 !== 0) {\r\n                currentValue = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.sumRound)(currentValue);\r\n            }\r\n        }\r\n        loanSumObserver.broadcast(currentValue);\r\n    };\r\n\r\n// Валидация суммы займа по завершению ввода\r\n    loanSumText.onchange = (event) => {\r\n        let currentValue = event.target.value;\r\n        setCorrectLoanSum(currentValue);\r\n    };\r\n\r\n//\r\n    loanSumText.onblur = (event) => {\r\n        let currentValue = event.target.value;\r\n        loanSumMock.style.display = 'block';\r\n        setCorrectLoanSum(currentValue);\r\n    };\r\n\r\n    loanSumRange.onchange = (event) => {\r\n        loanSumObserver.broadcast(event.target.value)\r\n    };\r\n\r\n    loanSumRange.oninput = (event) => {\r\n        loanSumObserver.broadcast(event.target.value)\r\n    };\r\n\r\n    const loanTimeObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n    const setActualLoanSum = (value) => {\r\n        if(value >= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_RIGHT_CORNER_VALUE) {\r\n            loanSumText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE;\r\n            loanSumRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE;\r\n            setSumMockText(_constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_RIGHT_CORNER_VALUE);\r\n            setSecondTabActive();\r\n        }\r\n        if(value <= _constants__WEBPACK_IMPORTED_MODULE_2__.TIME_LEFT_CORNER_VALUE) {\r\n            loanSumText.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE;\r\n            loanSumRange.value = _constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE;\r\n            setSumMockText(_constants__WEBPACK_IMPORTED_MODULE_2__.AMOUNT_LEFT_CORNER_VALUE);\r\n            setFirstTabActive();\r\n        }\r\n        setTimeMockText(value);\r\n        setButtonText(loanSumText.value);\r\n    };\r\n\r\n    loanTimeObserver.subscribe(value => {\r\n        const validationResult = validateTimesForRange();\r\n        setLoanTimeValues(value);\r\n        if(validationResult) {\r\n            setActualLoanSum(value)\r\n        }\r\n    });\r\n\r\n    loanTimeText.oninput = (event) => {\r\n        loanTimeObserver.broadcast(event.target.value)\r\n    };\r\n\r\n\r\n// Валидация инпута времени: соответствие диапазону, округление до ближайшего целого, проверка на NaN\r\n    const setCorrectLoanTime = (currentValue) => {\r\n        if(currentValue < _constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_TIME || isNaN(currentValue)) {\r\n            currentValue = _constants__WEBPACK_IMPORTED_MODULE_2__.MIN_LOAN_TIME;\r\n        }\r\n        if(currentValue > _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_LOAN_TIME) {\r\n            currentValue = _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_LOAN_TIME;\r\n        }\r\n        loanTimeObserver.broadcast((0,_helper__WEBPACK_IMPORTED_MODULE_1__.timeRound)(currentValue))\r\n    };\r\n\r\n    loanTimeText.onchange = (event) => {\r\n        let currentValue = event.target.value;\r\n        setCorrectLoanTime(currentValue);\r\n    };\r\n\r\n    loanTimeText.onblur = (event) => {\r\n        let currentValue = event.target.value;\r\n        loanTimeMock.style.display = 'block';\r\n        setCorrectLoanTime(currentValue);\r\n        setButtonText(loanSumText.value);\r\n    };\r\n\r\n    loanTimeRange.onchange = (event) => {\r\n        loanTimeObserver.broadcast(event.target.value);\r\n    };\r\n\r\n    loanTimeRange.oninput = (event) => {\r\n        loanTimeObserver.broadcast(event.target.value);\r\n    };\r\n\r\n    confirmButton.onclick = () => {\r\n        console.log(loanSumText.value, loanTimeRange.value);\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack://dzp-calculator/./src/js/script.js?");

/***/ }),

/***/ "./src/js/usersCount.js":
/*!******************************!*\
  !*** ./src/js/usersCount.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/js/helper.js\");\n\r\n\r\nconst usersCountSpan = document.getElementById('users_count');\r\n\r\nconst userWithDeclension = ['клиент', 'клиента', 'клиентов'];\r\n\r\nconst getCount = () => {\r\n    const today = new Date();\r\n    const currentYear = today.getFullYear();\r\n    const currentMonth = today.getMonth() + 1;\r\n    const currentDay = today.getDate();\r\n    const currentHour = today.getHours();\r\n\r\n    const commonValue = currentYear * (currentMonth / 10) + currentDay;\r\n\r\n    if(currentHour === 0 || currentHour === 1) {\r\n        return Math.round(commonValue * 0.1);\r\n    }\r\n    if(currentHour > 10) {\r\n        Math.round(commonValue * currentHour / 10)\r\n    }\r\n    return Math.round(commonValue * currentHour / (currentHour - 1));\r\n};\r\n\r\nusersCountSpan.innerText = `${getCount()} ${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.getCorrectDeclension)(getCount(), userWithDeclension)}`;\r\n\r\n\n\n//# sourceURL=webpack://dzp-calculator/./src/js/usersCount.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;