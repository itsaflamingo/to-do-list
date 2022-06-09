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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    --border-radius: 20px;\n    --font-size: 1.2rem;\n    --box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.225);\n    --border: 169, 168, 168, 0.352;\n    font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n    margin: 0px;\n}\n#container {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-rows: 0 6fr;\n    grid-template-columns: 1fr 6fr;\n}\n#background {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1.4fr 1fr;\n    gap: 10px;\n}\n.banner {\n    grid-column-start: 1;\n    position: absolute;\n    height: 5vh;\n    width: 15vw;\n    border-radius: var(--border-radius);\n    background-color: rgb(255, 255, 255);\n\n    top: 130px;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    box-shadow: var(--box-shadow);\n    margin-left: 3.5rem;\n}\n#to-do-list, #subtask-pg {\n    height: 70vh;\n    width: 30vw;\n    min-width: 272px;\n\n    margin-top: 200px;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    background-color: #FFFFFF;\n}\n#to-do-list {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    width: 80%;\n    min-width: 360px;\n\n    margin-left: 2.5rem;\n}\n#subtask-pg {\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n/* to-do div */\n.to-do {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 0.9rem;\n    width: 80%;\n    gap: 3rem;\n    border-bottom: 1px solid var(--border);\n    border-radius: var(--border-radius);\n}\n\n.to-do > * {\n    pointer-events: none;\n}\n#todo {\n    pointer-events: all;\n}\n.to-do:hover, .to-do:focus {\n    background-color: rgb(195, 191, 191);\n    color: white;\n}\n.todo-check {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.done {\n    text-decoration: line-through;\n    color: rgb(218, 217, 217);\n}\nlabel {\n    display: flex;\n    align-items: center;\n}\n.cat-disp {\n    color: grey;\n}\n#prio-in-task {\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n}\n.low-prio {\n    background-color: rgb(242, 126, 165);\n}\n.med-prio {\n    background-color: rgb(196, 73, 237);\n}\n.high-prio {\n    background-color: rgb(0, 123, 255);\n}\n#delete {\n    display: flex;\n    justify-content: center;\n    align-items: center ;\n    border-style: none;\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n    color: grey;\n    border: 1px solid grey;\n    background-color: white;\n}\n/* menu */\n#menu {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    flex-direction: column;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    gap: 20px;\n    margin-top: 50px;\n    align-items: center;\n    box-shadow: var(--box-shadow);\n    min-width: 135px;\n}\n#new-task-btn {\n    height: 4rem;\n    width: 4rem;\n    border-radius: 50%;\n    font-size: 3rem;\n    font-weight: 900;\n    background-color: rgb(255, 207, 49);\n    color: white;\n    border: none;\n}\n.dropdown {\n    height: 3rem;\n    width: 3rem;\n    background-color: white;\n    border: none;\n}\n.menu-app-div {\n    display: flex;\n    width: 100%;\n    height: 10vh;\n    align-items: center;\n}\n.menu-app-div > * {\n    padding-left: 15px;\n}\n.menu-app-div:hover {\n    background-color: pink;\n    color: purple;\n}\n.menu-display {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    width: 20vw;\n}\n.title-div {\n    display: flex;\n}\n.title-div > button {\n    position: relative;\n}\n.menu-app-div > * {\n    pointer-events: none;\n}\n/* modal */\n.modal {\n    background-color: white;\n    position: fixed;\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--box-shadow);\n    transform: scale(0);\n    transition: 200ms ease-in-out;\n}\nform {\n    display: flex;\n}\nfieldset {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border: none;\n    gap: 25px;\n}\n#side-modal {\n    height: 100%;\n    width: 30%;\n    border-right: var(--border);\n}\n#priorities {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-top: 20px;\n    height: 50%;\n    width: 90%;\n    font-size: 1rem;\n    font-weight: 900;\n    color: rgb(189, 187, 187);\n}\n#dropdown {\n    width: 20vw;\n}\n#submit {\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\ninput {\n    height: 4vh;\n}\ntextarea {\n    height: 9vh;\n    border: 1px solid rgb(13, 12, 12);\n}\nselect {\n    height: 4vh;\n}\ninput, textarea, select {\n    background-color: rgb(255, 255, 255);\n    padding: 0;\n    border: none;\n    border-radius: var(--border-radius);\n}\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n}\n#high, #med, #low {\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n}\n.radio-btns {\n    width: 1.4rem;\n    height: 1.4rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.radio-btns .checkmark {\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    border-radius: 50%;\n    background-color: black;\n    display: inline-block;\n    opacity: 0;\n    transition: opacity 0.5s ease;\n}\n.radio-btns input:checked + .checkmark {\n    display: inline-block;\n    opacity: 1;\n}\n.radio-btns input {\n    display: none;\n}\n#priorities > :nth-child(1) {\n    border: 2px solid rgb(242, 126, 165);\n}\n#priorities > :nth-child(2) {\n    border: 2px solid rgb(196, 73, 237);\n}\n#priorities > :nth-child(3) {\n    border: 2px solid rgb(0, 123, 255);\n}\n\n#low-prio {\n    background-color: rgb(242, 126, 165);\n}\n#med-prio {\n    background-color: rgb(196, 73, 237);\n}\n#high-prio {\n    background-color: rgb(0, 123, 255);\n}\n/* to-do page */\n.page {\n    height: 100%;\n}\n#to-do-list {\n    display: flex;\n    flex-direction: column;\n}\n#do-do-list > input {\n    width: 100px;\n}\n.node {\n    display: flex;\n}\n.modal.visible {\n    width: 30%;\n    height: 45%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n}\n.visible {\n    transform: scale(1);\n}\n/* checkbox */\n[type=checkbox] {\n    display: flex;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    color: rgb(218, 30, 255);\n    vertical-align: middle;\n    -webkit-appearance: none;\n    background: none;\n    border: 0;\n    outline: 0;\n    flex-grow: 0;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    transition: background 300ms;\n    cursor: pointer;\n  }\n[type=checkbox]::before {\n    content: \"\";\n    color: transparent;\n    display: block;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    border: 0;\n    background-color: transparent;\n    background-size: contain;\n    box-shadow: inset 0 0 0 1px #CCD3D8;\n  }\n[type=checkbox]:checked {\n    background-color: currentcolor;\n  }\n[type=checkbox]:checked::before {\n    box-shadow: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n.finished {\n    text-decoration: line-through;\n    color: grey;\n}\n\n/* project */\n.proj-node {\n\n}\n/* subtask pg */\n.subtask-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n#subtask-list {\n    height: 30%;\n    width: 85%;\n    border: 1px solid var(--border);\n    color: grey;\n    font-size: 0.9rem;\n}\n.subtask-div > textarea {\n    height: 20%;\n    background-color: var(--border);\n}\n.subtask-div > button {\n    width: 7vw;\n    height: 4vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.7rem;\n}\n.subtask-div > * {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.8rem;\n}\n#date-prio-div {\n    display: flex;\n    justify-content: space-between;\n}\n#date-prio-div > :nth-child(1) {\n    font-size: 0.7rem;\n    color: grey;\n}\n#task-name {\n    font-size: var(--font-size);\n    font-weight: 500;\n}\ninput:focus::placeholder, textarea:focus::placeholder {\n    color: transparent;\n  }\n\n  \n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,wDAAwD;IACxD,8BAA8B;IAC9B,yCAAyC;AAC7C;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,yBAAyB;IACzB,8BAA8B;AAClC;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;;IAEf,yDAA2C;;IAE3C,aAAa;IACb,uBAAuB;IACvB,gCAAgC;IAChC,SAAS;AACb;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mCAAmC;IACnC,oCAAoC;;IAEpC,UAAU;;IAEV,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;;IAEhB,iBAAiB;IACjB,mCAAmC;IACnC,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;IACV,gBAAgB;;IAEhB,mBAAmB;AACvB;AACA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;AACA,cAAc;AACd;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,oCAAoC;IACpC,YAAY;AAChB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,cAAc;IACd,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,sBAAsB;IACtB,uBAAuB;AAC3B;AACA,SAAS;AACT;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;;IAEtB,2BAA2B;IAC3B,gBAAgB;IAChB,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mCAAmC;IACnC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,oBAAoB;AACxB;AACA,UAAU;AACV;IACI,uBAAuB;IACvB,eAAe;IACf,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,SAAS;AACb;AACA;IACI,YAAY;IACZ,UAAU;IACV,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,WAAW;IACX,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,iCAAiC;AACrC;AACA;IACI,WAAW;AACf;AACA;IACI,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;IACd,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;IACV,6BAA6B;AACjC;AACA;IACI,qBAAqB;IACrB,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,kCAAkC;AACtC;AACA,eAAe;AACf;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,UAAU;IACV,WAAW;IACX,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,mBAAmB;AACvB;AACA,aAAa;AACb;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,wBAAwB;IACxB,sBAAsB;IACtB,wBAAwB;IACxB,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,4BAA4B;IAC5B,eAAe;EACjB;AACF;IACI,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,SAAS;IACT,6BAA6B;IAC7B,wBAAwB;IACxB,mCAAmC;EACrC;AACF;IACI,8BAA8B;EAChC;AACF;IACI,gBAAgB;IAChB,yDAA8T;EAChU;AACF;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA,YAAY;AACZ;;AAEA;AACA,eAAe;AACf;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,WAAW;IACX,UAAU;IACV,+BAA+B;IAC/B,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,+BAA+B;AACnC;AACA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,2BAA2B;IAC3B,gBAAgB;AACpB;AACA;IACI,kBAAkB;EACpB","sourcesContent":["* {\n    --border-radius: 20px;\n    --font-size: 1.2rem;\n    --box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.225);\n    --border: 169, 168, 168, 0.352;\n    font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n    margin: 0px;\n}\n#container {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-rows: 0 6fr;\n    grid-template-columns: 1fr 6fr;\n}\n#background {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    background-image: url(./img/wallpaper1.jpg);\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1.4fr 1fr;\n    gap: 10px;\n}\n.banner {\n    grid-column-start: 1;\n    position: absolute;\n    height: 5vh;\n    width: 15vw;\n    border-radius: var(--border-radius);\n    background-color: rgb(255, 255, 255);\n\n    top: 130px;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    box-shadow: var(--box-shadow);\n    margin-left: 3.5rem;\n}\n#to-do-list, #subtask-pg {\n    height: 70vh;\n    width: 30vw;\n    min-width: 272px;\n\n    margin-top: 200px;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    background-color: #FFFFFF;\n}\n#to-do-list {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    width: 80%;\n    min-width: 360px;\n\n    margin-left: 2.5rem;\n}\n#subtask-pg {\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n/* to-do div */\n.to-do {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 0.9rem;\n    width: 80%;\n    gap: 3rem;\n    border-bottom: 1px solid var(--border);\n    border-radius: var(--border-radius);\n}\n\n.to-do > * {\n    pointer-events: none;\n}\n#todo {\n    pointer-events: all;\n}\n.to-do:hover, .to-do:focus {\n    background-color: rgb(195, 191, 191);\n    color: white;\n}\n.todo-check {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.done {\n    text-decoration: line-through;\n    color: rgb(218, 217, 217);\n}\nlabel {\n    display: flex;\n    align-items: center;\n}\n.cat-disp {\n    color: grey;\n}\n#prio-in-task {\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n}\n.low-prio {\n    background-color: rgb(242, 126, 165);\n}\n.med-prio {\n    background-color: rgb(196, 73, 237);\n}\n.high-prio {\n    background-color: rgb(0, 123, 255);\n}\n#delete {\n    display: flex;\n    justify-content: center;\n    align-items: center ;\n    border-style: none;\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n    color: grey;\n    border: 1px solid grey;\n    background-color: white;\n}\n/* menu */\n#menu {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    flex-direction: column;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    gap: 20px;\n    margin-top: 50px;\n    align-items: center;\n    box-shadow: var(--box-shadow);\n    min-width: 135px;\n}\n#new-task-btn {\n    height: 4rem;\n    width: 4rem;\n    border-radius: 50%;\n    font-size: 3rem;\n    font-weight: 900;\n    background-color: rgb(255, 207, 49);\n    color: white;\n    border: none;\n}\n.dropdown {\n    height: 3rem;\n    width: 3rem;\n    background-color: white;\n    border: none;\n}\n.menu-app-div {\n    display: flex;\n    width: 100%;\n    height: 10vh;\n    align-items: center;\n}\n.menu-app-div > * {\n    padding-left: 15px;\n}\n.menu-app-div:hover {\n    background-color: pink;\n    color: purple;\n}\n.menu-display {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    width: 20vw;\n}\n.title-div {\n    display: flex;\n}\n.title-div > button {\n    position: relative;\n}\n.menu-app-div > * {\n    pointer-events: none;\n}\n/* modal */\n.modal {\n    background-color: white;\n    position: fixed;\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--box-shadow);\n    transform: scale(0);\n    transition: 200ms ease-in-out;\n}\nform {\n    display: flex;\n}\nfieldset {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border: none;\n    gap: 25px;\n}\n#side-modal {\n    height: 100%;\n    width: 30%;\n    border-right: var(--border);\n}\n#priorities {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-top: 20px;\n    height: 50%;\n    width: 90%;\n    font-size: 1rem;\n    font-weight: 900;\n    color: rgb(189, 187, 187);\n}\n#dropdown {\n    width: 20vw;\n}\n#submit {\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\ninput {\n    height: 4vh;\n}\ntextarea {\n    height: 9vh;\n    border: 1px solid rgb(13, 12, 12);\n}\nselect {\n    height: 4vh;\n}\ninput, textarea, select {\n    background-color: rgb(255, 255, 255);\n    padding: 0;\n    border: none;\n    border-radius: var(--border-radius);\n}\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n}\n#high, #med, #low {\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n}\n.radio-btns {\n    width: 1.4rem;\n    height: 1.4rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.radio-btns .checkmark {\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    border-radius: 50%;\n    background-color: black;\n    display: inline-block;\n    opacity: 0;\n    transition: opacity 0.5s ease;\n}\n.radio-btns input:checked + .checkmark {\n    display: inline-block;\n    opacity: 1;\n}\n.radio-btns input {\n    display: none;\n}\n#priorities > :nth-child(1) {\n    border: 2px solid rgb(242, 126, 165);\n}\n#priorities > :nth-child(2) {\n    border: 2px solid rgb(196, 73, 237);\n}\n#priorities > :nth-child(3) {\n    border: 2px solid rgb(0, 123, 255);\n}\n\n#low-prio {\n    background-color: rgb(242, 126, 165);\n}\n#med-prio {\n    background-color: rgb(196, 73, 237);\n}\n#high-prio {\n    background-color: rgb(0, 123, 255);\n}\n/* to-do page */\n.page {\n    height: 100%;\n}\n#to-do-list {\n    display: flex;\n    flex-direction: column;\n}\n#do-do-list > input {\n    width: 100px;\n}\n.node {\n    display: flex;\n}\n.modal.visible {\n    width: 30%;\n    height: 45%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n}\n.visible {\n    transform: scale(1);\n}\n/* checkbox */\n[type=checkbox] {\n    display: flex;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    color: rgb(218, 30, 255);\n    vertical-align: middle;\n    -webkit-appearance: none;\n    background: none;\n    border: 0;\n    outline: 0;\n    flex-grow: 0;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    transition: background 300ms;\n    cursor: pointer;\n  }\n[type=checkbox]::before {\n    content: \"\";\n    color: transparent;\n    display: block;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    border: 0;\n    background-color: transparent;\n    background-size: contain;\n    box-shadow: inset 0 0 0 1px #CCD3D8;\n  }\n[type=checkbox]:checked {\n    background-color: currentcolor;\n  }\n[type=checkbox]:checked::before {\n    box-shadow: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E\");\n  }\n.finished {\n    text-decoration: line-through;\n    color: grey;\n}\n\n/* project */\n.proj-node {\n\n}\n/* subtask pg */\n.subtask-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n#subtask-list {\n    height: 30%;\n    width: 85%;\n    border: 1px solid var(--border);\n    color: grey;\n    font-size: 0.9rem;\n}\n.subtask-div > textarea {\n    height: 20%;\n    background-color: var(--border);\n}\n.subtask-div > button {\n    width: 7vw;\n    height: 4vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.7rem;\n}\n.subtask-div > * {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.8rem;\n}\n#date-prio-div {\n    display: flex;\n    justify-content: space-between;\n}\n#date-prio-div > :nth-child(1) {\n    font-size: 0.7rem;\n    color: grey;\n}\n#task-name {\n    font-size: var(--font-size);\n    font-weight: 500;\n}\ninput:focus::placeholder, textarea:focus::placeholder {\n    color: transparent;\n  }\n\n  \n\n\n\n"],"sourceRoot":""}]);
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

        const sideModal = document.createElement('div');
        sideModal.setAttribute('id', 'side-modal');

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
        option2.text = "Work";
        option3.text = "Home";


        dropdown.appendChild(option1);
        dropdown.appendChild(option2);
        dropdown.appendChild(option3);


        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'textarea');
        textarea.setAttribute('placeholder', 'Add note');

        const priorities = document.createElement('div');
        priorities.setAttribute('id', 'priorities');
        priorities.innerHTML = 'Priority';

        const radioLabelLow = document.createElement("label");
        radioLabelLow.setAttribute('class', 'radio-btns');

        const radioLabelMed = document.createElement("label");
        radioLabelMed.setAttribute('class', 'radio-btns');

        const radioLabelHigh = document.createElement("label");
        radioLabelHigh.setAttribute('class', 'radio-btns');


        const checkmarkLow = document.createElement("span");
        checkmarkLow.setAttribute('class', 'checkmark');
        checkmarkLow.setAttribute('id', 'low-prio');
        const checkmarkMed = document.createElement("span");
        checkmarkMed.setAttribute('class', 'checkmark');
        checkmarkMed.setAttribute('id', 'med-prio');
        const checkmarkHigh = document.createElement("span");
        checkmarkHigh.setAttribute('class', 'checkmark');
        checkmarkHigh.setAttribute('id', 'high-prio');




        const low = document.createElement('input');
        low.setAttribute('type', 'radio');
        low.setAttribute('id', 'low');
        low.setAttribute('name', 'priority');
        low.setAttribute('value', 'low');

        const medium = document.createElement('input');
        medium.setAttribute('type', 'radio');
        medium.setAttribute('id', 'med');
        medium.setAttribute('name', 'priority');
        medium.setAttribute('value', 'medium');

        const high = document.createElement('input');
        high.setAttribute('type', 'radio');
        high.setAttribute('id', 'high');
        high.setAttribute('name', 'priority');
        high.setAttribute('value', 'high');



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
        subTasksDiv.setAttribute('class', 'subtask-div');

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

radioLabelLow.appendChild(low);
radioLabelLow.appendChild(checkmarkLow)

radioLabelMed.appendChild(medium);
radioLabelMed.appendChild(checkmarkMed);

radioLabelHigh.appendChild(high);
radioLabelHigh.appendChild(checkmarkHigh);


fieldset.appendChild(taskDiv);
fieldset.appendChild(date);
fieldset.appendChild(dropdown);
fieldset.appendChild(textarea);
fieldset.appendChild(submitBtn);

form.appendChild(fieldset);
priorities.appendChild(radioLabelLow);
priorities.appendChild(radioLabelMed);
priorities.appendChild(radioLabelHigh);

sideModal.appendChild(priorities);

modal.appendChild(form);
modal.appendChild(sideModal);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFL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QSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5Qjs7QUFFekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR2lTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvd2FsbHBhcGVyMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzI0JTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyUzRSAlM0NwYXRoIGQ9JTI3TTE1Ljg4IDguMjlMMTAgMTQuMTdsLTEuODgtMS44OGEuOTk2Ljk5NiAwIDEgMC0xLjQxIDEuNDFsMi41OSAyLjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMEwxNy4zIDkuN2EuOTk2Ljk5NiAwIDAgMCAwLTEuNDFjLS4zOS0uMzktMS4wMy0uMzktMS40MiAweiUyNyBmaWxsPSUyNyUyM2ZmZiUyNy8lM0UgJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAtLWZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAtLWJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjI1KTtcXG4gICAgLS1ib3JkZXI6IDE2OSwgMTY4LCAxNjgsIDAuMzUyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAgNmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcbiNiYWNrZ3JvdW5kIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuICAgIHRvcDogMTMwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcXG59XFxuI3RvLWRvLWxpc3QsICNzdWJ0YXNrLXBnIHtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgbWluLXdpZHRoOiAyNzJweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuI3RvLWRvLWxpc3Qge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xcblxcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbn1cXG4jc3VidGFzay1wZyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcbi8qIHRvLWRvIGRpdiAqL1xcbi50by1kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi50by1kbyA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuI3RvZG8ge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4udG8tZG86aG92ZXIsIC50by1kbzpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE5MSwgMTkxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4udG9kby1jaGVjayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZG9uZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogcmdiKDIxOCwgMjE3LCAyMTcpO1xcbn1cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXQtZGlzcCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG4jcHJpby1pbi10YXNrIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmxvdy1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMTI2LCAxNjUpO1xcbn1cXG4ubWVkLXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA3MywgMjM3KTtcXG59XFxuLmhpZ2gtcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjMsIDI1NSk7XFxufVxcbiNkZWxldGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciA7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBtZW51ICovXFxuI21lbnUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIG1pbi13aWR0aDogMTM1cHg7XFxufVxcbiNuZXctdGFzay1idG4ge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA3LCA0OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uZHJvcGRvd24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4ubWVudS1hcHAtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1lbnUtYXBwLWRpdiA+ICoge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcbi5tZW51LWFwcC1kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbn1cXG4ubWVudS1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuLnRpdGxlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50aXRsZS1kaXYgPiBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZW51LWFwcC1kaXYgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi8qIG1vZGFsICovXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5maWVsZHNldCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGdhcDogMjVweDtcXG59XFxuI3NpZGUtbW9kYWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcXG59XFxuI3ByaW9yaXRpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiByZ2IoMTg5LCAxODcsIDE4Nyk7XFxufVxcbiNkcm9wZG93biB7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG4jc3VibWl0IHtcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTQxLCAyNDYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG50ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDEyLCAxMik7XFxufVxcbnNlbGVjdCB7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jaGlnaCwgI21lZCwgI2xvdyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5yYWRpby1idG5zIHtcXG4gICAgd2lkdGg6IDEuNHJlbTtcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yYWRpby1idG5zIC5jaGVja21hcmsge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG4ucmFkaW8tYnRucyBpbnB1dDpjaGVja2VkICsgLmNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnJhZGlvLWJ0bnMgaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jcHJpb3JpdGllcyA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQyLCAxMjYsIDE2NSk7XFxufVxcbiNwcmlvcml0aWVzID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOTYsIDczLCAyMzcpO1xcbn1cXG4jcHJpb3JpdGllcyA+IDpudGgtY2hpbGQoMykge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTIzLCAyNTUpO1xcbn1cXG5cXG4jbG93LXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAxMjYsIDE2NSk7XFxufVxcbiNtZWQtcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDczLCAyMzcpO1xcbn1cXG4jaGlnaC1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyMywgMjU1KTtcXG59XFxuLyogdG8tZG8gcGFnZSAqL1xcbi5wYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jdG8tZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNkby1kby1saXN0ID4gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcbi5ub2RlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsLnZpc2libGUge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDQ1JTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4udmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIGNoZWNrYm94ICovXFxuW3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigyMTgsIDMwLCAyNTUpO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMzAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5bdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjQ0NEM0Q4O1xcbiAgfVxcblt0eXBlPWNoZWNrYm94XTpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgfVxcblt0eXBlPWNoZWNrYm94XTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgfVxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLyogcHJvamVjdCAqL1xcbi5wcm9qLW5vZGUge1xcblxcbn1cXG4vKiBzdWJ0YXNrIHBnICovXFxuLnN1YnRhc2stZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jc3VidGFzay1saXN0IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLnN1YnRhc2stZGl2ID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyKTtcXG59XFxuLnN1YnRhc2stZGl2ID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDd2dztcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNDEsIDI0Nik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcbi5zdWJ0YXNrLWRpdiA+ICoge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcbiNkYXRlLXByaW8tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jZGF0ZS1wcmlvLWRpdiA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcbiN0YXNrLW5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0RBQXdEO0lBQ3hELDhCQUE4QjtJQUM5Qix5Q0FB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QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7RUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLS1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIyNSk7XFxuICAgIC0tYm9yZGVyOiAxNjksIDE2OCwgMTY4LCAwLjM1MjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbn1cXG4jYmFja2dyb3VuZCB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy93YWxscGFwZXIxLmpwZyk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uYmFubmVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcbiAgICB0b3A6IDEzMHB4O1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XFxufVxcbiN0by1kby1saXN0LCAjc3VidGFzay1wZyB7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIG1pbi13aWR0aDogMjcycHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbiN0by1kby1saXN0IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiAzNjBweDtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG59XFxuI3N1YnRhc2stcGcge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG4vKiB0by1kbyBkaXYgKi9cXG4udG8tZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4udG8tZG8gPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbiN0b2RvIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuLnRvLWRvOmhvdmVyLCAudG8tZG86Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTEsIDE5MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRvZG8tY2hlY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IHJnYigyMTgsIDIxNywgMjE3KTtcXG59XFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2F0LWRpc3Age1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuI3ByaW8taW4tdGFzayB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5sb3ctcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDEyNiwgMTY1KTtcXG59XFxuLm1lZC1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNzMsIDIzNyk7XFxufVxcbi5oaWdoLXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIzLCAyNTUpO1xcbn1cXG4jZGVsZXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLyogbWVudSAqL1xcbiNtZW51IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBtaW4td2lkdGg6IDEzNXB4O1xcbn1cXG4jbmV3LXRhc2stYnRuIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwNywgNDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmRyb3Bkb3duIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLm1lbnUtYXBwLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tZW51LWFwcC1kaXYgPiAqIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG4ubWVudS1hcHAtZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gICAgY29sb3I6IHB1cnBsZTtcXG59XFxuLm1lbnUtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcbi50aXRsZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGl0bGUtZGl2ID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWVudS1hcHAtZGl2ID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4vKiBtb2RhbCAqL1xcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZmllbGRzZXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbiNzaWRlLW1vZGFsIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlcik7XFxufVxcbiNwcmlvcml0aWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg3LCAxODcpO1xcbn1cXG4jZHJvcGRvd24ge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuI3N1Ym1pdCB7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE0MSwgMjQ2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDR2aDtcXG59XFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDl2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCAxMiwgMTIpO1xcbn1cXG5zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDR2aDtcXG59XFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI2hpZ2gsICNtZWQsICNsb3cge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ucmFkaW8tYnRucyB7XFxuICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmFkaW8tYnRucyAuY2hlY2ttYXJrIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcXG59XFxuLnJhZGlvLWJ0bnMgaW5wdXQ6Y2hlY2tlZCArIC5jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5yYWRpby1idG5zIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI3ByaW9yaXRpZXMgPiA6bnRoLWNoaWxkKDEpIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MiwgMTI2LCAxNjUpO1xcbn1cXG4jcHJpb3JpdGllcyA+IDpudGgtY2hpbGQoMikge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk2LCA3MywgMjM3KTtcXG59XFxuI3ByaW9yaXRpZXMgPiA6bnRoLWNoaWxkKDMpIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDEyMywgMjU1KTtcXG59XFxuXFxuI2xvdy1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMTI2LCAxNjUpO1xcbn1cXG4jbWVkLXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA3MywgMjM3KTtcXG59XFxuI2hpZ2gtcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjMsIDI1NSk7XFxufVxcbi8qIHRvLWRvIHBhZ2UgKi9cXG4ucGFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI3RvLWRvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jZG8tZG8tbGlzdCA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG4ubm9kZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbC52aXNpYmxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4vKiBjaGVja2JveCAqL1xcblt0eXBlPWNoZWNrYm94XSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMjE4LCAzMCwgMjU1KTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuW3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI0NDRDNEODtcXG4gIH1cXG5bdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcXG4gIH1cXG5bdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnJTNFICUzQ3BhdGggZD0nTTE1Ljg4IDguMjlMMTAgMTQuMTdsLTEuODgtMS44OGEuOTk2Ljk5NiAwIDEgMC0xLjQxIDEuNDFsMi41OSAyLjU5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMEwxNy4zIDkuN2EuOTk2Ljk5NiAwIDAgMCAwLTEuNDFjLS4zOS0uMzktMS4wMy0uMzktMS40MiAweicgZmlsbD0nJTIzZmZmJy8lM0UgJTNDL3N2ZyUzRVxcXCIpO1xcbiAgfVxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLyogcHJvamVjdCAqL1xcbi5wcm9qLW5vZGUge1xcblxcbn1cXG4vKiBzdWJ0YXNrIHBnICovXFxuLnN1YnRhc2stZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jc3VidGFzay1saXN0IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLnN1YnRhc2stZGl2ID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyKTtcXG59XFxuLnN1YnRhc2stZGl2ID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDd2dztcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNDEsIDI0Nik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcbi5zdWJ0YXNrLWRpdiA+ICoge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcbiNkYXRlLXByaW8tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jZGF0ZS1wcmlvLWRpdiA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcbiN0YXNrLW5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3JjL3N0eWxlLmNzcydcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5cbiAgICAgICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaCcpO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gICAgICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkTmV3VGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy10YXNrLWJ0bicpO1xuICAgICAgICBhZGROZXdUYXNrQnRuLmlubmVySFRNTCA9ICcmIzQzOyc7XG5cbiAgICAgICAgY29uc3QgY2FsZW5kYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FsZW5kYXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWFwcC1kaXYnKTtcbiAgICAgICAgY2FsZW5kYXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYWxlbmRhci1idG4nKTtcblxuICAgICAgICBjb25zdCBjYWxlbmRhclBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhbGVuZGFyUGcuc2V0QXR0cmlidXRlKCdpZCcsICdjYWxlbmRhci1wYWdlJyk7XG4gICAgICAgIGNhbGVuZGFyUGcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlJyk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhbGVuZGFyLmlubmVySFRNTCA9ICdDYWxlbmRhcic7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWFwcC1kaXYnKTtcbiAgICAgICAgcHJvamVjdHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1idG4nKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGlzcERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlLWRpdicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RzLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNQZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0c1BnLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMtcGcnKTtcbiAgICAgICAgcHJvamVjdHNQZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BhZ2UnKTtcblxuICAgICAgICBjb25zdCBuZXdQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Byb2pCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvai1idG4nKTtcbiAgICAgICAgbmV3UHJvakJ0bi5pbm5lckhUTUwgPSAnTmV3IFByb2plY3QnO1xuXG5cbiAgICAgICAgY29uc3Qgd2Vla1Rhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlZWtUYXNrc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtYXBwLWRpdicpO1xuICAgICAgICB3ZWVrVGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWVrLWJ0bicpO1xuICAgIFxuICAgICAgICBjb25zdCB3ZWVrVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Vla1Rhc2tzLmlubmVySFRNTCA9ICdXZWVrJztcblxuICAgICAgICBjb25zdCB3ZWVrUGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Vla1BnLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vlay1wYWdlJyk7XG4gICAgICAgIHdlZWtQZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BhZ2UnKTtcblxuICAgICAgICBjb25zdCBhbGxUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbGxUYXNrc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtYXBwLWRpdicpO1xuICAgICAgICBhbGxUYXNrc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbC10YXNrcy1idG4nKTtcblxuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbGxUYXNrcy5pbm5lckhUTUwgPSAnQWxsIFRhc2tzJztcbiAgICAgICAgXG5cbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrZ3JvdW5kJyk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2RhbCcpO1xuXG4gICAgICAgIGNvbnN0IHNpZGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlTW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlLW1vZGFsJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0nKTtcblxuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzaycpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIG5ldyB0YXNrJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0R1ZSBkYXRlOiBNTS9ERC9ZWVlZJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBkcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnQWRkIHRvIHByb2plY3QnKTtcbiAgICAgICAgZHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICdkcm9wZG93bicpO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG5cbiAgICAgICAgb3B0aW9uMS50ZXh0ID0gXCJBbGwgdGFza3NcIjtcbiAgICAgICAgb3B0aW9uMi50ZXh0ID0gXCJXb3JrXCI7XG4gICAgICAgIG9wdGlvbjMudGV4dCA9IFwiSG9tZVwiO1xuXG5cbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuXG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0YXJlYScpO1xuICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBub3RlJyk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0aWVzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdGllcycpO1xuICAgICAgICBwcmlvcml0aWVzLmlubmVySFRNTCA9ICdQcmlvcml0eSc7XG5cbiAgICAgICAgY29uc3QgcmFkaW9MYWJlbExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgcmFkaW9MYWJlbExvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhZGlvLWJ0bnMnKTtcblxuICAgICAgICBjb25zdCByYWRpb0xhYmVsTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICByYWRpb0xhYmVsTWVkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFkaW8tYnRucycpO1xuXG4gICAgICAgIGNvbnN0IHJhZGlvTGFiZWxIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICByYWRpb0xhYmVsSGlnaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhZGlvLWJ0bnMnKTtcblxuXG4gICAgICAgIGNvbnN0IGNoZWNrbWFya0xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBjaGVja21hcmtMb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja21hcmsnKTtcbiAgICAgICAgY2hlY2ttYXJrTG93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG93LXByaW8nKTtcbiAgICAgICAgY29uc3QgY2hlY2ttYXJrTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNoZWNrbWFya01lZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbWFyaycpO1xuICAgICAgICBjaGVja21hcmtNZWQuc2V0QXR0cmlidXRlKCdpZCcsICdtZWQtcHJpbycpO1xuICAgICAgICBjb25zdCBjaGVja21hcmtIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNoZWNrbWFya0hpZ2guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja21hcmsnKTtcbiAgICAgICAgY2hlY2ttYXJrSGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZ2gtcHJpbycpO1xuXG5cblxuXG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxvdy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgbG93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG93Jyk7XG4gICAgICAgIGxvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgbG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG5cbiAgICAgICAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbWVkaXVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICBtZWRpdW0uc2V0QXR0cmlidXRlKCdpZCcsICdtZWQnKTtcbiAgICAgICAgbWVkaXVtLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICBtZWRpdW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcblxuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZ2gnKTtcbiAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcblxuXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ1N1Ym1pdCc7XG5cbiAgICAgICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhbm5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Jhbm5lcicpO1xuICAgICAgICBiYW5uZXIuaW5uZXJIVE1MID0gJ1RvZGF5JztcblxuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvLWRvLWxpc3QnKTtcblxuICAgICAgICBjb25zdCB0b0RvUGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb1BnLnNldEF0dHJpYnV0ZSgnaWQnLCAndG8tZG8tcGFnZScpO1xuICAgICAgICB0b0RvUGcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlJyk7XG5cbiAgICAgICAgY29uc3Qgc3VidGFza1BnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN1YnRhc2tQZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1YnRhc2stcGcnKTtcblxuICAgICAgICBjb25zdCBzdWJUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdWJUYXNrc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1YnRhc2stZGl2Jyk7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbmhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuXG5jYWxlbmRhckRpdi5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG5cbnByb2plY3REaXNwRGl2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbnByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXNwRGl2KTtcbnByb2plY3RzUGcuYXBwZW5kQ2hpbGQobmV3UHJvakJ0bik7XG5cbndlZWtUYXNrc0Rpdi5hcHBlbmRDaGlsZCh3ZWVrVGFza3MpO1xuXG5hbGxUYXNrc0Rpdi5hcHBlbmRDaGlsZChhbGxUYXNrcyk7XG5cbm1lbnUuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG5tZW51LmFwcGVuZENoaWxkKGNhbGVuZGFyRGl2KTtcbm1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xubWVudS5hcHBlbmRDaGlsZCh3ZWVrVGFza3NEaXYpO1xubWVudS5hcHBlbmRDaGlsZChhbGxUYXNrc0Rpdik7XG5cbnRhc2tEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5yYWRpb0xhYmVsTG93LmFwcGVuZENoaWxkKGxvdyk7XG5yYWRpb0xhYmVsTG93LmFwcGVuZENoaWxkKGNoZWNrbWFya0xvdylcblxucmFkaW9MYWJlbE1lZC5hcHBlbmRDaGlsZChtZWRpdW0pO1xucmFkaW9MYWJlbE1lZC5hcHBlbmRDaGlsZChjaGVja21hcmtNZWQpO1xuXG5yYWRpb0xhYmVsSGlnaC5hcHBlbmRDaGlsZChoaWdoKTtcbnJhZGlvTGFiZWxIaWdoLmFwcGVuZENoaWxkKGNoZWNrbWFya0hpZ2gpO1xuXG5cbmZpZWxkc2V0LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5maWVsZHNldC5hcHBlbmRDaGlsZChkcm9wZG93bik7XG5maWVsZHNldC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5maWVsZHNldC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG5mb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbnByaW9yaXRpZXMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbExvdyk7XG5wcmlvcml0aWVzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxNZWQpO1xucHJpb3JpdGllcy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsSGlnaCk7XG5cbnNpZGVNb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0aWVzKTtcblxubW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5tb2RhbC5hcHBlbmRDaGlsZChzaWRlTW9kYWwpO1xuXG5iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJhbm5lcik7XG5iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRvRG9MaXN0KTtcbmJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc3VidGFza1BnKTtcbmJhY2tncm91bmQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcblxuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5cbmV4cG9ydCB7Y2FsZW5kYXJEaXYsIGNhbGVuZGFyUGcsIHByb2plY3RzLCB3ZWVrVGFza3MsIHdlZWtUYXNrc0Rpdiwgd2Vla1BnLCBhbGxUYXNrcywgYWxsVGFza3NEaXYsIG1lbnUsIGFkZE5ld1Rhc2tCdG4sIHByb2plY3RzRGl2LCBwcm9qZWN0c1BnLCBuZXdQcm9qQnRuLCBpbnB1dCwgZm9ybSwgdGFza0RpdiwgZHJvcGRvd24sIHRleHRhcmVhLCBzdWJtaXRCdG4sIG1vZGFsLCB0b0RvTGlzdCwgdG9Eb1BnLCBzdWJ0YXNrUGcsIHN1YlRhc2tzRGl2LCBwcmlvcml0aWVzLCBsb3csIG1lZGl1bSwgaGlnaH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==