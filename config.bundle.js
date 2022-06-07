"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["config"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/wallpaper1.jpg */ "./src/img/wallpaper1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E %3Cpath d=%27M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z%27 fill=%27%23fff%27/%3E %3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E %3Cpath d=%27M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z%27 fill=%27%23fff%27/%3E %3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    --border-radius: 20px;\n    --font-size: 1.2rem;\n    --box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.225);\n    font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n    margin: 0px;\n}\n#container {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-rows: 0 6fr;\n    grid-template-columns: 1fr 6fr;\n}\n#background {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n}\n.banner {\n    grid-column-start: 1;\n    position: absolute;\n    height: 5vh;\n    width: 15vw;\n    border-radius: var(--border-radius);\n    background-color: rgb(255, 255, 255);\n\n    top: 130px;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    box-shadow: var(--box-shadow);\n    margin-left: 3.5rem;\n}\n#to-do-list, #subtask-pg {\n    height: 70vh;\n    width: 30vw;\n    min-width: 272px;\n\n    margin-top: 200px;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    background-color: #FFFFFF;\n}\n#to-do-list {\n    grid-column-start: 1;\n    grid-column-end: 2;\n\n    margin-left: 2.5rem;\n}\n#subtask-pg {\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n.to-do > * {\n    pointer-events: none;\n}\n.to-do:hover, .to-do:focus {\n    background-color: rgb(195, 191, 191);\n    color: white;\n}\n/* menu */\n#menu {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    flex-direction: column;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    gap: 20px;\n    margin-top: 50px;\n    align-items: center;\n    box-shadow: var(--box-shadow);\n}\n#new-task-btn {\n    height: 4rem;\n    width: 4rem;\n    border-radius: 50%;\n    font-size: 3rem;\n    font-weight: 900;\n    background-color: rgb(255, 207, 49);\n    color: white;\n    border: none;\n}\n.dropdown {\n    height: 3rem;\n    width: 3rem;\n    background-color: white;\n    border: none;\n}\n.menu-app-div {\n    display: flex;\n    width: 100%;\n    height: 10vh;\n    align-items: center;\n}\n.menu-app-div > * {\n    padding-left: 15px;\n}\n.menu-app-div:hover {\n    background-color: pink;\n    color: purple;\n}\n.menu-display {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    width: 20vw;\n}\n.title-div {\n    display: flex;\n}\n.title-div > button {\n    position: relative;\n}\n/* modal */\n.modal {\n    background-color: rgb(249, 205, 234);\n    position: fixed;\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--box-shadow);\n    transform: scale(0);\n    transition: 200ms ease-in-out;\n}\nfieldset {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border: none;\n    gap: 25px;\n}\n#dropdown {\n    width: 20vw;\n}\n#submit {\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\ninput {\n    height: 4vh;\n}\ntextarea {\n    height: 9vh;\n    border: 1px solid rgb(13, 12, 12);\n}\nselect {\n    height: 4vh;\n}\ninput, textarea, select {\n    background-color: rgb(255, 255, 255);\n    padding: 0;\n    border: none;\n    border-radius: var(--border-radius);\n}\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n}\n/* to-do page */\n.page {\n    height: 100%;\n}\n#to-do-list {\n    display: flex;\n    flex-direction: column;\n}\n#do-do-list > input {\n    width: 100px;\n}\n.node {\n    display: flex;\n}\n.modal.visible {\n    width: 30%;\n    height: 45%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n}\n.visible {\n    transform: scale(1);\n}\n/* checkbox */\n[type=checkbox] {\n    display: flex;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    color: rgb(218, 30, 255);\n    vertical-align: middle;\n    -webkit-appearance: none;\n    background: none;\n    border: 0;\n    outline: 0;\n    flex-grow: 0;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    transition: background 300ms;\n    cursor: pointer;\n  }\n[type=checkbox]::before {\n    content: \"\";\n    color: transparent;\n    display: block;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    border: 0;\n    background-color: transparent;\n    background-size: contain;\n    box-shadow: inset 0 0 0 1px #CCD3D8;\n  }\n[type=checkbox]:checked {\n    background-color: currentcolor;\n  }\n[type=checkbox]:checked::before {\n    box-shadow: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n/* to-do div */\n.to-do {\n    display: flex;\n    font-size: 0.9rem;\n    gap: 1.3rem;\n    border-bottom: 1px solid rgba(169, 168, 168, 0.352);\n    border-radius: var(--border-radius);\n}\nlabel {\n    display: flex;\n    align-items: center;\n}\n.cat-disp {\n    color: grey;\n}\n/* project */\n.proj-node {\n\n}\n/* subtask pg */\n#subtask-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n#subtask-list {\n    height: 30%;\n    width: 85%;\n    border: 1px solid rgba(169, 168, 168, 0.352);\n}\n#subtask-div > textarea {\n    height: 20%;\n    background-color: rgba(237, 237, 237, 0.352);;\n}\n#subtask-div > button {\n    width: 7vw;\n    height: 4vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.7rem;\n}\n#subtask-div > * {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.8rem;\n}\n#date-prio-div {\n    display: flex;\n    justify-content: space-around;\n}\n#date-prio-div > :nth-child(1) {\n    font-size: 0.7rem;\n    color: grey;\n}\n#task-name {\n    font-size: var(--font-size);\n    font-weight: 500;\n}\n\n  \n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,wDAAwD;IACxD,yCAAyC;AAC7C;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,yBAAyB;IACzB,8BAA8B;AAClC;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;;IAEf,yDAA2C;;IAE3C,aAAa;IACb,uBAAuB;IACvB,8BAA8B;IAC9B,SAAS;AACb;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mCAAmC;IACnC,oCAAoC;;IAEpC,UAAU;;IAEV,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;;IAEhB,iBAAiB;IACjB,mCAAmC;IACnC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,oBAAoB;IACpB,kBAAkB;;IAElB,mBAAmB;AACvB;AACA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,oCAAoC;IACpC,YAAY;AAChB;AACA,SAAS;AACT;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;;IAEtB,2BAA2B;IAC3B,gBAAgB;IAChB,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mCAAmC;IACnC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA,UAAU;AACV;IACI,oCAAoC;IACpC,eAAe;IACf,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,SAAS;AACb;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,iCAAiC;AACrC;AACA;IACI,WAAW;AACf;AACA;IACI,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,aAAa;AACjB;AACA,eAAe;AACf;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,UAAU;IACV,WAAW;IACX,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,mBAAmB;AACvB;AACA,aAAa;AACb;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,wBAAwB;IACxB,sBAAsB;IACtB,wBAAwB;IACxB,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,4BAA4B;IAC5B,eAAe;EACjB;AACF;IACI,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,SAAS;IACT,6BAA6B;IAC7B,wBAAwB;IACxB,mCAAmC;EACrC;AACF;IACI,8BAA8B;EAChC;AACF;IACI,gBAAgB;IAChB,yDAA8T;EAChU;AACF,cAAc;AACd;IACI,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX,mDAAmD;IACnD,mCAAmC;AACvC;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA,YAAY;AACZ;;AAEA;AACA,eAAe;AACf;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,WAAW;IACX,UAAU;IACV,4CAA4C;AAChD;AACA;IACI,WAAW;IACX,4CAA4C;AAChD;AACA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,2BAA2B;IAC3B,gBAAgB;AACpB","sourcesContent":["* {\n    --border-radius: 20px;\n    --font-size: 1.2rem;\n    --box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.225);\n    font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n    margin: 0px;\n}\n#container {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-rows: 0 6fr;\n    grid-template-columns: 1fr 6fr;\n}\n#background {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    background-image: url(./img/wallpaper1.jpg);\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n}\n.banner {\n    grid-column-start: 1;\n    position: absolute;\n    height: 5vh;\n    width: 15vw;\n    border-radius: var(--border-radius);\n    background-color: rgb(255, 255, 255);\n\n    top: 130px;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    box-shadow: var(--box-shadow);\n    margin-left: 3.5rem;\n}\n#to-do-list, #subtask-pg {\n    height: 70vh;\n    width: 30vw;\n    min-width: 272px;\n\n    margin-top: 200px;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    background-color: #FFFFFF;\n}\n#to-do-list {\n    grid-column-start: 1;\n    grid-column-end: 2;\n\n    margin-left: 2.5rem;\n}\n#subtask-pg {\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n.to-do > * {\n    pointer-events: none;\n}\n.to-do:hover, .to-do:focus {\n    background-color: rgb(195, 191, 191);\n    color: white;\n}\n/* menu */\n#menu {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    flex-direction: column;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    gap: 20px;\n    margin-top: 50px;\n    align-items: center;\n    box-shadow: var(--box-shadow);\n}\n#new-task-btn {\n    height: 4rem;\n    width: 4rem;\n    border-radius: 50%;\n    font-size: 3rem;\n    font-weight: 900;\n    background-color: rgb(255, 207, 49);\n    color: white;\n    border: none;\n}\n.dropdown {\n    height: 3rem;\n    width: 3rem;\n    background-color: white;\n    border: none;\n}\n.menu-app-div {\n    display: flex;\n    width: 100%;\n    height: 10vh;\n    align-items: center;\n}\n.menu-app-div > * {\n    padding-left: 15px;\n}\n.menu-app-div:hover {\n    background-color: pink;\n    color: purple;\n}\n.menu-display {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    width: 20vw;\n}\n.title-div {\n    display: flex;\n}\n.title-div > button {\n    position: relative;\n}\n/* modal */\n.modal {\n    background-color: rgb(249, 205, 234);\n    position: fixed;\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--box-shadow);\n    transform: scale(0);\n    transition: 200ms ease-in-out;\n}\nfieldset {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border: none;\n    gap: 25px;\n}\n#dropdown {\n    width: 20vw;\n}\n#submit {\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\ninput {\n    height: 4vh;\n}\ntextarea {\n    height: 9vh;\n    border: 1px solid rgb(13, 12, 12);\n}\nselect {\n    height: 4vh;\n}\ninput, textarea, select {\n    background-color: rgb(255, 255, 255);\n    padding: 0;\n    border: none;\n    border-radius: var(--border-radius);\n}\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n}\n/* to-do page */\n.page {\n    height: 100%;\n}\n#to-do-list {\n    display: flex;\n    flex-direction: column;\n}\n#do-do-list > input {\n    width: 100px;\n}\n.node {\n    display: flex;\n}\n.modal.visible {\n    width: 30%;\n    height: 45%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n}\n.visible {\n    transform: scale(1);\n}\n/* checkbox */\n[type=checkbox] {\n    display: flex;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    color: rgb(218, 30, 255);\n    vertical-align: middle;\n    -webkit-appearance: none;\n    background: none;\n    border: 0;\n    outline: 0;\n    flex-grow: 0;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    transition: background 300ms;\n    cursor: pointer;\n  }\n[type=checkbox]::before {\n    content: \"\";\n    color: transparent;\n    display: block;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    border: 0;\n    background-color: transparent;\n    background-size: contain;\n    box-shadow: inset 0 0 0 1px #CCD3D8;\n  }\n[type=checkbox]:checked {\n    background-color: currentcolor;\n  }\n[type=checkbox]:checked::before {\n    box-shadow: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E\");\n  }\n/* to-do div */\n.to-do {\n    display: flex;\n    font-size: 0.9rem;\n    gap: 1.3rem;\n    border-bottom: 1px solid rgba(169, 168, 168, 0.352);\n    border-radius: var(--border-radius);\n}\nlabel {\n    display: flex;\n    align-items: center;\n}\n.cat-disp {\n    color: grey;\n}\n/* project */\n.proj-node {\n\n}\n/* subtask pg */\n#subtask-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n#subtask-list {\n    height: 30%;\n    width: 85%;\n    border: 1px solid rgba(169, 168, 168, 0.352);\n}\n#subtask-div > textarea {\n    height: 20%;\n    background-color: rgba(237, 237, 237, 0.352);;\n}\n#subtask-div > button {\n    width: 7vw;\n    height: 4vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.7rem;\n}\n#subtask-div > * {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.8rem;\n}\n#date-prio-div {\n    display: flex;\n    justify-content: space-around;\n}\n#date-prio-div > :nth-child(1) {\n    font-size: 0.7rem;\n    color: grey;\n}\n#task-name {\n    font-size: var(--font-size);\n    font-weight: 500;\n}\n\n  \n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTaskBtn": () => (/* binding */ addNewTaskBtn),
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "allTasksDiv": () => (/* binding */ allTasksDiv),
/* harmony export */   "calendarDiv": () => (/* binding */ calendarDiv),
/* harmony export */   "calendarPg": () => (/* binding */ calendarPg),
/* harmony export */   "dropdown": () => (/* binding */ dropdown),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "high": () => (/* binding */ high),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "low": () => (/* binding */ low),
/* harmony export */   "medium": () => (/* binding */ medium),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "newProjBtn": () => (/* binding */ newProjBtn),
/* harmony export */   "prioDueDateDiv": () => (/* binding */ prioDueDateDiv),
/* harmony export */   "priorities": () => (/* binding */ priorities),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "projectsDiv": () => (/* binding */ projectsDiv),
/* harmony export */   "projectsPg": () => (/* binding */ projectsPg),
/* harmony export */   "subTasksDiv": () => (/* binding */ subTasksDiv),
/* harmony export */   "submitBtn": () => (/* binding */ submitBtn),
/* harmony export */   "subtaskPg": () => (/* binding */ subtaskPg),
/* harmony export */   "taskDiv": () => (/* binding */ taskDiv),
/* harmony export */   "textarea": () => (/* binding */ textarea),
/* harmony export */   "toDoList": () => (/* binding */ toDoList),
/* harmony export */   "toDoPg": () => (/* binding */ toDoPg),
/* harmony export */   "weekPg": () => (/* binding */ weekPg),
/* harmony export */   "weekTasks": () => (/* binding */ weekTasks),
/* harmony export */   "weekTasksDiv": () => (/* binding */ weekTasksDiv)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");


const body = document.body;

const container = document.createElement('div');
container.setAttribute('id', 'container');

const header = document.createElement('div');
header.setAttribute('id', 'header');

        const nameDiv = document.createElement('div');
        nameDiv.setAttribute('id', 'name');
        
        const search = document.createElement('div');
        search.setAttribute('id', 'search');

const menu = document.createElement('div');
menu.setAttribute('id', 'menu');

        const addNewTaskBtn = document.createElement('button');
        addNewTaskBtn.setAttribute('id', 'new-task-btn');
        addNewTaskBtn.innerHTML = '&#43;';

        const calendarDiv = document.createElement('div');
        calendarDiv.setAttribute('class', 'menu-app-div');
        calendarDiv.setAttribute('id', 'calendar-btn');

        const calendarPg = document.createElement('div');
        calendarPg.setAttribute('id', 'calendar-page');
        calendarPg.setAttribute('class', 'page');

        
        const calendar = document.createElement('div');
        calendar.innerHTML = 'Calendar';

        const projectsDiv = document.createElement('div');
        projectsDiv.setAttribute('class', 'menu-app-div');
        projectsDiv.setAttribute('id', 'projects-btn');

        const projectDispDiv = document.createElement('div');
        projectDispDiv.setAttribute('class', 'title-div');

        const projects = document.createElement('div');
        projects.innerHTML = 'Projects';

        const projectsPg = document.createElement('div');
        projectsPg.setAttribute('id', 'projects-pg');
        projectsPg.setAttribute('class', 'page');

        const newProjBtn = document.createElement('button');
        newProjBtn.setAttribute('id', 'new-proj-btn');
        newProjBtn.innerHTML = 'New Project';


        const weekTasksDiv = document.createElement('div');
        weekTasksDiv.setAttribute('class', 'menu-app-div');
        weekTasksDiv.setAttribute('id', 'week-btn');
    
        const weekTasks = document.createElement('div');
        weekTasks.innerHTML = 'Week';

        const weekPg = document.createElement('div');
        weekPg.setAttribute('id', 'week-page');
        weekPg.setAttribute('class', 'page');

        const allTasksDiv = document.createElement('div');
        allTasksDiv.setAttribute('class', 'menu-app-div');
        allTasksDiv.setAttribute('id', 'all-tasks-btn');

        const allTasks = document.createElement('div');
        allTasks.innerHTML = 'All Tasks';
        

const background = document.createElement('div');
background.setAttribute('id', 'background');

        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal');

        const form = document.createElement('form');
        form.setAttribute('id', 'form');

        const fieldset = document.createElement('fieldset');

        const taskDiv = document.createElement('div');
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('id', 'task');
                input.setAttribute('placeholder', 'Add new task');

        const date = document.createElement('input');
                date.setAttribute('type', 'text');
                date.setAttribute('id', 'date');
                date.setAttribute('placeholder', 'Due date: MM/DD/YYYY');

        
        const dropdown = document.createElement('select');
        dropdown.setAttribute('name', 'Add to project');
        dropdown.setAttribute('id', 'dropdown');
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');


        option1.text = "All tasks";
        option2.text = "Project1";
        option3.text = "Project2";


        dropdown.appendChild(option1);
        dropdown.appendChild(option2);
        dropdown.appendChild(option3);


        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'textarea');

        const prioDueDateDiv = document.createElement('div');
        const priorities = document.createElement('div');

        const low = document.createElement('div');
        const medium = document.createElement('div');
        const high = document.createElement('div');

        const dueDate = document.createElement('div');


        const submitBtn = document.createElement('button');
        submitBtn.setAttribute('type', 'button');
        submitBtn.setAttribute('id', 'submit');
        submitBtn.innerHTML = 'Submit';

        const banner = document.createElement('div');
        banner.setAttribute('class', 'banner');
        banner.innerHTML = 'Today';

        const toDoList = document.createElement('div');
        toDoList.setAttribute('id', 'to-do-list');

        const toDoPg = document.createElement('div');
        toDoPg.setAttribute('id', 'to-do-page');
        toDoPg.setAttribute('class', 'page');

        const subtaskPg = document.createElement('div');
        subtaskPg.setAttribute('id', 'subtask-pg');

        const subTasksDiv = document.createElement('div');
        subTasksDiv.setAttribute('id', 'subtask-div');

header.appendChild(nameDiv);
header.appendChild(search);

calendarDiv.appendChild(calendar);

projectDispDiv.appendChild(projects);
projectsDiv.appendChild(projectDispDiv);
projectsPg.appendChild(newProjBtn);

weekTasksDiv.appendChild(weekTasks);

allTasksDiv.appendChild(allTasks);

menu.appendChild(addNewTaskBtn);
menu.appendChild(calendarDiv);
menu.appendChild(projectsDiv);
menu.appendChild(weekTasksDiv);
menu.appendChild(allTasksDiv);

taskDiv.appendChild(input);


form.appendChild(fieldset);
fieldset.appendChild(taskDiv);
fieldset.appendChild(date);
fieldset.appendChild(dropdown);
fieldset.appendChild(textarea);
fieldset.appendChild(submitBtn);
modal.appendChild(form);

priorities.appendChild(low);
priorities.appendChild(medium);
priorities.appendChild(high);
prioDueDateDiv.appendChild(priorities);
prioDueDateDiv.appendChild(dueDate);

modal.appendChild(prioDueDateDiv);

background.appendChild(banner);
background.appendChild(toDoList);
background.appendChild(subtaskPg);
background.appendChild(modal);

container.appendChild(header);
container.appendChild(menu);
container.appendChild(background);

body.appendChild(container);





/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E %3Cpath d=%27M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z%27 fill=%27%23fff%27/%3E %3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E %3Cpath d=%27M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z%27 fill=%27%23fff%27/%3E %3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E %3Cpath d=%27M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z%27 fill=%27%23fff%27/%3E %3C/svg%3E";

/***/ }),

/***/ "./src/img/wallpaper1.jpg":
/*!********************************!*\
  !*** ./src/img/wallpaper1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "464d5ef925857cae9bd6.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/config.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsNkJBQTZCLDRC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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHaVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy93YWxscGFwZXIxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3JTNFICUzQ3BhdGggZD0lMjdNMTUuODggOC4yOUwxMCAxNC4xN2wtMS44OC0xLjg4YS45OTYuOTk2IDAgMSAwLTEuNDEgMS40MWwyLjU5IDIuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwTDE3LjMgOS43YS45OTYuOTk2IDAgMCAwIDAtMS40MWMtLjM5LS4zOS0xLjAzLS4zOS0xLjQyIDB6JTI3IGZpbGw9JTI3JTIzZmZmJTI3LyUzRSAlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIC0tZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC0tYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMjUpO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAgNmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcbiNiYWNrZ3JvdW5kIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4uYmFubmVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcbiAgICB0b3A6IDEzMHB4O1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XFxufVxcbiN0by1kby1saXN0LCAjc3VidGFzay1wZyB7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIG1pbi13aWR0aDogMjcycHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbiN0by1kby1saXN0IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG59XFxuI3N1YnRhc2stcGcge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG4udG8tZG8gPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi50by1kbzpob3ZlciwgLnRvLWRvOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTkxLCAxOTEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIG1lbnUgKi9cXG4jbWVudSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG59XFxuI25ldy10YXNrLWJ0biB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDcsIDQ5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5kcm9wZG93biB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5tZW51LWFwcC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWVudS1hcHAtZGl2ID4gKiB7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuLm1lbnUtYXBwLWRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICAgIGNvbG9yOiBwdXJwbGU7XFxufVxcbi5tZW51LWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG4udGl0bGUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnRpdGxlLWRpdiA+IGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLyogbW9kYWwgKi9cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyMDUsIDIzNCk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbmZpZWxkc2V0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4jZHJvcGRvd24ge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuI3N1Ym1pdCB7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE0MSwgMjQ2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDR2aDtcXG59XFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDl2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCAxMiwgMTIpO1xcbn1cXG5zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDR2aDtcXG59XFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLyogdG8tZG8gcGFnZSAqL1xcbi5wYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jdG8tZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNkby1kby1saXN0ID4gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcbi5ub2RlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsLnZpc2libGUge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDQ1JTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4udmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIGNoZWNrYm94ICovXFxuW3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigyMTgsIDMwLCAyNTUpO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMzAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5bdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjQ0NEM0Q4O1xcbiAgfVxcblt0eXBlPWNoZWNrYm94XTpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgfVxcblt0eXBlPWNoZWNrYm94XTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgfVxcbi8qIHRvLWRvIGRpdiAqL1xcbi50by1kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBnYXA6IDEuM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjgsIDE2OCwgMC4zNTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2F0LWRpc3Age1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuLyogcHJvamVjdCAqL1xcbi5wcm9qLW5vZGUge1xcblxcbn1cXG4vKiBzdWJ0YXNrIHBnICovXFxuI3N1YnRhc2stZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jc3VidGFzay1saXN0IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjgsIDE2OCwgMC4zNTIpO1xcbn1cXG4jc3VidGFzay1kaXYgPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyMzcsIDAuMzUyKTs7XFxufVxcbiNzdWJ0YXNrLWRpdiA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA3dnc7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTQxLCAyNDYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG4jc3VidGFzay1kaXYgPiAqIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC44cmVtO1xcbn1cXG4jZGF0ZS1wcmlvLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jZGF0ZS1wcmlvLWRpdiA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcbiN0YXNrLW5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiAgXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0RBQXdEO0lBQ3hELHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTs7SUFFWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZix5REFBMkM7O0lBRTNDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxvQ0FBb0M7O0lBRXBDLFVBQVU7O0lBRVYsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjs7SUFFaEIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtC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QUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksV0FBVztJQUNYLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLS1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIyNSk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMCA2ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG59XFxuI2JhY2tncm91bmQge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvd2FsbHBhcGVyMS5qcGcpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuICAgIHRvcDogMTMwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcXG59XFxuI3RvLWRvLWxpc3QsICNzdWJ0YXNrLXBnIHtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgbWluLXdpZHRoOiAyNzJweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuI3RvLWRvLWxpc3Qge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcblxcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbn1cXG4jc3VidGFzay1wZyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcbi50by1kbyA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnRvLWRvOmhvdmVyLCAudG8tZG86Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTEsIDE5MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogbWVudSAqL1xcbiNtZW51IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG4jbmV3LXRhc2stYnRuIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwNywgNDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmRyb3Bkb3duIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLm1lbnUtYXBwLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tZW51LWFwcC1kaXYgPiAqIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG4ubWVudS1hcHAtZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gICAgY29sb3I6IHB1cnBsZTtcXG59XFxuLm1lbnUtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcbi50aXRsZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGl0bGUtZGl2ID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4vKiBtb2RhbCAqL1xcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDIwNSwgMjM0KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuZmllbGRzZXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbiNkcm9wZG93biB7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG4jc3VibWl0IHtcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTQxLCAyNDYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG50ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDEyLCAxMik7XFxufVxcbnNlbGVjdCB7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4vKiB0by1kbyBwYWdlICovXFxuLnBhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiN0by1kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2RvLWRvLWxpc3QgPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuLm5vZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWwudmlzaWJsZSB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNDUlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi52aXNpYmxlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLyogY2hlY2tib3ggKi9cXG5bdHlwZT1jaGVja2JveF0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBjb2xvcjogcmdiKDIxOCwgMzAsIDI1NSk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblt0eXBlPWNoZWNrYm94XTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNDQ0QzRDg7XFxuICB9XFxuW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Y29sb3I7XFxuICB9XFxuW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyUzRSAlM0NwYXRoIGQ9J00xNS44OCA4LjI5TDEwIDE0LjE3bC0xLjg4LTEuODhhLjk5Ni45OTYgMCAxIDAtMS40MSAxLjQxbDIuNTkgMi41OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTcuMyA5LjdhLjk5Ni45OTYgMCAwIDAgMC0xLjQxYy0uMzktLjM5LTEuMDMtLjM5LTEuNDIgMHonIGZpbGw9JyUyM2ZmZicvJTNFICUzQy9zdmclM0VcXFwiKTtcXG4gIH1cXG4vKiB0by1kbyBkaXYgKi9cXG4udG8tZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZ2FwOiAxLjNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE2OSwgMTY4LCAxNjgsIDAuMzUyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNhdC1kaXNwIHtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcbi8qIHByb2plY3QgKi9cXG4ucHJvai1ub2RlIHtcXG5cXG59XFxuLyogc3VidGFzayBwZyAqL1xcbiNzdWJ0YXNrLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI3N1YnRhc2stbGlzdCB7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2OSwgMTY4LCAxNjgsIDAuMzUyKTtcXG59XFxuI3N1YnRhc2stZGl2ID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjM3LCAwLjM1Mik7O1xcbn1cXG4jc3VidGFzay1kaXYgPiBidXR0b24ge1xcbiAgICB3aWR0aDogN3Z3O1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE0MSwgMjQ2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuI3N1YnRhc2stZGl2ID4gKiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcXG59XFxuI2RhdGUtcHJpby1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI2RhdGUtcHJpby1kaXYgPiA6bnRoLWNoaWxkKDEpIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG4jdGFzay1uYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4gIFxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL3NyYy9zdHlsZS5jc3MnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gnKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxuICAgICAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZE5ld1Rhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXctdGFzay1idG4nKTtcbiAgICAgICAgYWRkTmV3VGFza0J0bi5pbm5lckhUTUwgPSAnJiM0MzsnO1xuXG4gICAgICAgIGNvbnN0IGNhbGVuZGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhbGVuZGFyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1hcHAtZGl2Jyk7XG4gICAgICAgIGNhbGVuZGFyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FsZW5kYXItYnRuJyk7XG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXJQZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYWxlbmRhclBnLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FsZW5kYXItcGFnZScpO1xuICAgICAgICBjYWxlbmRhclBnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZScpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYWxlbmRhci5pbm5lckhUTUwgPSAnQ2FsZW5kYXInO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1hcHAtZGl2Jyk7XG4gICAgICAgIHByb2plY3RzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMtYnRuJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpc3BEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1kaXYnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0cy5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzUGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHNQZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzLXBnJyk7XG4gICAgICAgIHByb2plY3RzUGcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlJyk7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdQcm9qQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXByb2otYnRuJyk7XG4gICAgICAgIG5ld1Byb2pCdG4uaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0JztcblxuXG4gICAgICAgIGNvbnN0IHdlZWtUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWVrVGFza3NEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWFwcC1kaXYnKTtcbiAgICAgICAgd2Vla1Rhc2tzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vlay1idG4nKTtcbiAgICBcbiAgICAgICAgY29uc3Qgd2Vla1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlZWtUYXNrcy5pbm5lckhUTUwgPSAnV2Vlayc7XG5cbiAgICAgICAgY29uc3Qgd2Vla1BnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlZWtQZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWstcGFnZScpO1xuICAgICAgICB3ZWVrUGcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlJyk7XG5cbiAgICAgICAgY29uc3QgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsVGFza3NEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWFwcC1kaXYnKTtcbiAgICAgICAgYWxsVGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhbGwtdGFza3MtYnRuJyk7XG5cbiAgICAgICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsVGFza3MuaW5uZXJIVE1MID0gJ0FsbCBUYXNrcyc7XG4gICAgICAgIFxuXG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFja2dyb3VuZCcpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kYWwnKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgbmV3IHRhc2snKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRHVlIGRhdGU6IE1NL0REL1lZWVknKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgZHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ0FkZCB0byBwcm9qZWN0Jyk7XG4gICAgICAgIGRyb3Bkb3duLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHJvcGRvd24nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuXG4gICAgICAgIG9wdGlvbjEudGV4dCA9IFwiQWxsIHRhc2tzXCI7XG4gICAgICAgIG9wdGlvbjIudGV4dCA9IFwiUHJvamVjdDFcIjtcbiAgICAgICAgb3B0aW9uMy50ZXh0ID0gXCJQcm9qZWN0MlwiO1xuXG5cbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuXG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0YXJlYScpO1xuXG4gICAgICAgIGNvbnN0IHByaW9EdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnU3VibWl0JztcblxuICAgICAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmFubmVyJyk7XG4gICAgICAgIGJhbm5lci5pbm5lckhUTUwgPSAnVG9kYXknO1xuXG4gICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvRG9MaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG8tZG8tbGlzdCcpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9QZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvUGcuc2V0QXR0cmlidXRlKCdpZCcsICd0by1kby1wYWdlJyk7XG4gICAgICAgIHRvRG9QZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BhZ2UnKTtcblxuICAgICAgICBjb25zdCBzdWJ0YXNrUGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3VidGFza1BnLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VidGFzay1wZycpO1xuXG4gICAgICAgIGNvbnN0IHN1YlRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN1YlRhc2tzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VidGFzay1kaXYnKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG5cbmNhbGVuZGFyRGl2LmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcblxucHJvamVjdERpc3BEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xucHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BEaXYpO1xucHJvamVjdHNQZy5hcHBlbmRDaGlsZChuZXdQcm9qQnRuKTtcblxud2Vla1Rhc2tzRGl2LmFwcGVuZENoaWxkKHdlZWtUYXNrcyk7XG5cbmFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKGFsbFRhc2tzKTtcblxubWVudS5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnRuKTtcbm1lbnUuYXBwZW5kQ2hpbGQoY2FsZW5kYXJEaXYpO1xubWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5tZW51LmFwcGVuZENoaWxkKHdlZWtUYXNrc0Rpdik7XG5tZW51LmFwcGVuZENoaWxkKGFsbFRhc2tzRGl2KTtcblxudGFza0Rpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cblxuZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5maWVsZHNldC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbmZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGUpO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbm1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5wcmlvcml0aWVzLmFwcGVuZENoaWxkKGxvdyk7XG5wcmlvcml0aWVzLmFwcGVuZENoaWxkKG1lZGl1bSk7XG5wcmlvcml0aWVzLmFwcGVuZENoaWxkKGhpZ2gpO1xucHJpb0R1ZURhdGVEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdGllcyk7XG5wcmlvRHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxubW9kYWwuYXBwZW5kQ2hpbGQocHJpb0R1ZURhdGVEaXYpO1xuXG5iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJhbm5lcik7XG5iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRvRG9MaXN0KTtcbmJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc3VidGFza1BnKTtcbmJhY2tncm91bmQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcblxuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5cbmV4cG9ydCB7Y2FsZW5kYXJEaXYsIGNhbGVuZGFyUGcsIHByb2plY3RzLCB3ZWVrVGFza3MsIHdlZWtUYXNrc0Rpdiwgd2Vla1BnLCBhbGxUYXNrcywgYWxsVGFza3NEaXYsIG1lbnUsIGFkZE5ld1Rhc2tCdG4sIHByb2plY3RzRGl2LCBwcm9qZWN0c1BnLCBuZXdQcm9qQnRuLCBpbnB1dCwgZm9ybSwgdGFza0RpdiwgZHJvcGRvd24sIHRleHRhcmVhLCBzdWJtaXRCdG4sIG1vZGFsLCB0b0RvTGlzdCwgdG9Eb1BnLCBzdWJ0YXNrUGcsIHN1YlRhc2tzRGl2LCBwcmlvRHVlRGF0ZURpdiwgcHJpb3JpdGllcywgbG93LCBtZWRpdW0sIGhpZ2h9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=