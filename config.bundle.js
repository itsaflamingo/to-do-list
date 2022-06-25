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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    --border-radius: 20px;\n    --font-size: 1.2rem;\n    --box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.225);\n    --border: 169, 168, 168, 0.352;\n    font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n    margin: 0px;\n}\n#container {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-rows: 0 6fr;\n    grid-template-columns: 1fr 6fr;\n}\n#background {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1.4fr 1fr;\n    gap: 10px;\n}\n.banner {\n    grid-column-start: 1;\n    position: absolute;\n    height: 5vh;\n    width: 15vw;\n    border-radius: var(--border-radius);\n    background-color: rgb(255, 255, 255);\n\n    top: 130px;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    box-shadow: var(--box-shadow);\n    margin-left: 3.5rem;\n}\n#to-do-list, #subtask-pg {\n    height: 70vh;\n    min-width: 272px;\n\n    margin-top: 200px;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    background-color: #FFFFFF;\n}\n#to-do-list {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    width: 65%;\n    min-width: 360px;\n\n    margin-left: 2.5rem;\n}\n#subtask-pg {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    min-width: 200px;\n    margin-right: 7.3rem;\n}\n/* to-do div */\n.to-do {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 0.9rem;\n    width: 80%;\n    gap: 2.5rem;\n    border-bottom: 1px solid var(--border);\n    border-radius: var(--border-radius);\n}\n\n.to-do > * {\n    pointer-events: none;\n}\n.to-do > #delete {\n    pointer-events: all;\n}\n#todo {\n    pointer-events: all;\n}\n.todo-check:hover, .todo-check:focus {\n    background-color: rgb(195, 191, 191);\n    color: white;\n    border-radius: var(--border-radius);\n}\n.todo-check {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.done {\n    text-decoration: line-through;\n    color: rgb(218, 217, 217);\n}\nlabel {\n    display: flex;\n    align-items: center;\n}\n.cat-disp {\n    color: grey;\n}\n#prio-in-task {\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n.low-prio {\n    background-color: rgb(242, 126, 165);\n}\n.med-prio {\n    background-color: rgb(196, 73, 237);\n}\n.high-prio {\n    background-color: rgb(0, 123, 255);\n}\n#delete {\n    display: flex;\n    justify-content: center;\n    align-items: center ;\n    border-style: none;\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n    color: grey;\n    border: 1px solid grey;\n    background-color: white;\n}\n/* menu */\n#menu {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    flex-direction: column;\n    height: 92vh;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    gap: 20px;\n    padding-top: 8vh;\n    align-items: center;\n    box-shadow: var(--box-shadow);\n    min-width: 135px;\n}\n#new-task-btn {\n    height: 4rem;\n    width: 4rem;\n    border-radius: 50%;\n    font-size: 3rem;\n    font-weight: 900;\n    background-color: rgb(255, 207, 49);\n    color: white;\n    border: none;\n}\n.dropdown {\n    height: 3rem;\n    width: 3rem;\n    background-color: white;\n    border: none;\n}\n.menu-app-div {\n    display: flex;\n    width: 100%;\n    height: 10vh;\n    align-items: center;\n}\n.menu-app-div > * {\n    padding-left: 15px;\n}\n.menu-app-div:hover {\n    background-color: pink;\n    color: purple;\n}\n.menu-display {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    width: 20vw;\n}\n.title-div {\n    display: flex;\n}\n.title-div > button {\n    position: relative;\n}\n.menu-app-div > * {\n    pointer-events: none;\n}\n/* modal */\n.modal {\n    background-color: white;\n    position: fixed;\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--box-shadow);\n    transform: scale(0);\n    transition: 200ms ease-in-out;\n    min-width: 300px;\n}\nform {\n    display: flex;\n}\nfieldset {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border: none;\n    gap: 25px;\n}\n#side-modal {\n    height: 100%;\n    width: 30%;\n    border-right: var(--border);\n}\n#priorities {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-top: 20px;\n    height: 50%;\n    width: 90%;\n    font-size: 1rem;\n    font-weight: 900;\n    color: rgb(189, 187, 187);\n}\n#dropdown {\n    width: 20vw;\n}\n#submit {\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\ninput {\n    height: 4vh;\n}\ntextarea {\n    height: 9vh;\n    border: 1px solid rgb(13, 12, 12);\n}\nselect {\n    height: 4vh;\n}\ninput, textarea, select {\n    background-color: rgb(255, 255, 255);\n    padding: 0;\n    border: none;\n    border-radius: var(--border-radius);\n}\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n}\n#high, #med, #low {\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n}\n.radio-btns {\n    width: 1.4rem;\n    height: 1.4rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.radio-btns .checkmark {\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    border-radius: 50%;\n    background-color: black;\n    display: inline-block;\n    opacity: 0;\n    transition: opacity 0.5s ease;\n}\n.radio-btns input:checked + .checkmark {\n    display: inline-block;\n    opacity: 1;\n}\n.radio-btns input {\n    display: none;\n}\n#priorities > :nth-child(1) {\n    border: 2px solid rgb(242, 126, 165);\n}\n#priorities > :nth-child(2) {\n    border: 2px solid rgb(196, 73, 237);\n}\n#priorities > :nth-child(3) {\n    border: 2px solid rgb(0, 123, 255);\n}\n\n#low-prio {\n    background-color: rgb(242, 126, 165);\n}\n#med-prio {\n    background-color: rgb(196, 73, 237);\n}\n#high-prio {\n    background-color: rgb(0, 123, 255);\n}\n/* to-do page */\n.page {\n    height: 100%;\n}\n#to-do-list {\n    display: flex;\n    flex-direction: column;\n}\n#do-do-list > input {\n    width: 100px;\n}\n.node {\n    display: flex;\n}\n.modal.visible {\n    width: 30%;\n    height: 45%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n}\n.visible {\n    transform: scale(1);\n}\n/* checkbox */\n[type=checkbox] {\n    display: flex;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    color: rgb(218, 30, 255);\n    vertical-align: middle;\n    -webkit-appearance: none;\n    background: none;\n    border: 0;\n    outline: 0;\n    flex-grow: 0;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    transition: background 300ms;\n    cursor: pointer;\n  }\n[type=checkbox]::before {\n    content: \"\";\n    color: transparent;\n    display: block;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    border: 0;\n    background-color: transparent;\n    background-size: contain;\n    box-shadow: inset 0 0 0 1px #CCD3D8;\n  }\n[type=checkbox]:checked {\n    background-color: currentcolor;\n  }\n[type=checkbox]:checked::before {\n    box-shadow: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n.finished {\n    text-decoration: line-through;\n    color: grey;\n}\n\n/* project */\n#projects-pg {\n    display: flex;\n    flex-direction: column;\n}\n.proj-div {\n    display: flex;\n    gap: 13px;\n    padding-left: 13px;\n    font-size: 15px;\n    font-weight: 900;\n}\n.proj-div:hover {\n    background-color: rgb(195, 191, 191);\n    color: white;\n}\n#new-proj-btn {\n    margin-top: 10px;\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\n.hide {\n    transform: scale(0);\n}\n#new-proj {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n.new-proj-div {\n    transform: scale(1);\n}\n#new-proj-input {\n    border: 1px solid grey;\n    height: 38px;\n    border-radius: 0px;\n}\n#new-proj-submit, #cancel {\n    margin-top: 10px;\n    width: 10vw;\n    height: 40px;\n    align-self: center;\n    border: none;\n    color: white;\n    font-size: 0.9rem;\n}\n#new-proj-submit {\n    background-color: rgb(165, 85, 194);\n}\n#cancel {\n    background-color: #999999;\n}\n#projects-list {\n    margin-top: 10px;\n}\n/* subtask pg */\n.subtask-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.subtask-node {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 50%;\n\n}\n.subtask-info > #prio-in-task {\n    height: 1rem;\n    width: 1rem;\n}\n.subtask-info {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 50%;\n}\n#subtask-list {\n    height: 30%;\n    width: 85%;\n    border: 1px solid var(--border);\n    color: grey;\n    font-size: 0.9rem;\n}\n.subtask-div > textarea {\n    height: 20%;\n    background-color: var(--border);\n    border: 1px solid rgb(194, 193, 193);\n}\n.subtask-div > button {\n    width: 7vw;\n    height: 4vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.7rem;\n}\n.subtask-div > * {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.8rem;\n}\n#date-prio-div {\n    display: flex;\n    justify-content: space-between;\n}\n#sub-prio {\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n}\n#date-prio-div > :nth-child(1) {\n    font-size: 0.7rem;\n    color: grey;\n}\n#task-name {\n    font-size: var(--font-size);\n    font-weight: 500;\n}\ninput:focus::placeholder, textarea:focus::placeholder {\n    color: transparent;\n  }\n.proj-todo{\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\n\n  \n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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AACf;AACA;IACI,WAAW;IACX,iCAAiC;AACrC;AACA;IACI,WAAW;AACf;AACA;IACI,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;IACd,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;IACV,6BAA6B;AACjC;AACA;IACI,qBAAqB;IACrB,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,kCAAkC;AACtC;AACA,eAAe;AACf;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,UAAU;IACV,WAAW;IACX,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,6BAA6B;AACjC;AACA;IACI,mBAAmB;AACvB;AACA,aAAa;AACb;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,wBAAwB;IACxB,sBAAsB;IACtB,wBAAwB;IACxB,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,4BAA4B;IAC5B,eAAe;EACjB;AACF;IACI,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,SAAS;IACT,6BAA6B;IAC7B,wBAAwB;IACxB,mCAAmC;EACrC;AACF;IACI,8BAA8B;EAChC;AACF;IACI,gBAAgB;IAChB,yDAA8T;EAChU;AACF;IACI,6BAA6B;IAC7B,WAAW;AACf;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,mCAAmC;AACvC;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,gBAAgB;AACpB;AACA,eAAe;AACf;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;;AAEd;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,WAAW;IACX,UAAU;IACV,+BAA+B;IAC/B,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,+BAA+B;IAC/B,oCAAoC;AACxC;AACA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,2BAA2B;IAC3B,gBAAgB;AACpB;AACA;IACI,kBAAkB;EACpB;AACF;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb","sourcesContent":["* {\n    --border-radius: 20px;\n    --font-size: 1.2rem;\n    --box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.225);\n    --border: 169, 168, 168, 0.352;\n    font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n    margin: 0px;\n}\n#container {\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n    grid-template-rows: 0 6fr;\n    grid-template-columns: 1fr 6fr;\n}\n#background {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    background-image: url(./img/wallpaper1.jpg);\n\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1.4fr 1fr;\n    gap: 10px;\n}\n.banner {\n    grid-column-start: 1;\n    position: absolute;\n    height: 5vh;\n    width: 15vw;\n    border-radius: var(--border-radius);\n    background-color: rgb(255, 255, 255);\n\n    top: 130px;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    box-shadow: var(--box-shadow);\n    margin-left: 3.5rem;\n}\n#to-do-list, #subtask-pg {\n    height: 70vh;\n    min-width: 272px;\n\n    margin-top: 200px;\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    background-color: #FFFFFF;\n}\n#to-do-list {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    width: 65%;\n    min-width: 360px;\n\n    margin-left: 2.5rem;\n}\n#subtask-pg {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    min-width: 200px;\n    margin-right: 7.3rem;\n}\n/* to-do div */\n.to-do {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 0.9rem;\n    width: 80%;\n    gap: 2.5rem;\n    border-bottom: 1px solid var(--border);\n    border-radius: var(--border-radius);\n}\n\n.to-do > * {\n    pointer-events: none;\n}\n.to-do > #delete {\n    pointer-events: all;\n}\n#todo {\n    pointer-events: all;\n}\n.todo-check:hover, .todo-check:focus {\n    background-color: rgb(195, 191, 191);\n    color: white;\n    border-radius: var(--border-radius);\n}\n.todo-check {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.done {\n    text-decoration: line-through;\n    color: rgb(218, 217, 217);\n}\nlabel {\n    display: flex;\n    align-items: center;\n}\n.cat-disp {\n    color: grey;\n}\n#prio-in-task {\n    height: 1rem;\n    width: 1rem;\n    border-radius: 50%;\n}\n.low-prio {\n    background-color: rgb(242, 126, 165);\n}\n.med-prio {\n    background-color: rgb(196, 73, 237);\n}\n.high-prio {\n    background-color: rgb(0, 123, 255);\n}\n#delete {\n    display: flex;\n    justify-content: center;\n    align-items: center ;\n    border-style: none;\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n    color: grey;\n    border: 1px solid grey;\n    background-color: white;\n}\n/* menu */\n#menu {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    flex-direction: column;\n    height: 92vh;\n\n    font-size: var(--font-size);\n    font-weight: 900;\n    gap: 20px;\n    padding-top: 8vh;\n    align-items: center;\n    box-shadow: var(--box-shadow);\n    min-width: 135px;\n}\n#new-task-btn {\n    height: 4rem;\n    width: 4rem;\n    border-radius: 50%;\n    font-size: 3rem;\n    font-weight: 900;\n    background-color: rgb(255, 207, 49);\n    color: white;\n    border: none;\n}\n.dropdown {\n    height: 3rem;\n    width: 3rem;\n    background-color: white;\n    border: none;\n}\n.menu-app-div {\n    display: flex;\n    width: 100%;\n    height: 10vh;\n    align-items: center;\n}\n.menu-app-div > * {\n    padding-left: 15px;\n}\n.menu-app-div:hover {\n    background-color: pink;\n    color: purple;\n}\n.menu-display {\n    display: flex;\n    flex-direction: column;\n    height: 20vh;\n    width: 20vw;\n}\n.title-div {\n    display: flex;\n}\n.title-div > button {\n    position: relative;\n}\n.menu-app-div > * {\n    pointer-events: none;\n}\n/* modal */\n.modal {\n    background-color: white;\n    position: fixed;\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--box-shadow);\n    transform: scale(0);\n    transition: 200ms ease-in-out;\n    min-width: 300px;\n}\nform {\n    display: flex;\n}\nfieldset {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border: none;\n    gap: 25px;\n}\n#side-modal {\n    height: 100%;\n    width: 30%;\n    border-right: var(--border);\n}\n#priorities {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-top: 20px;\n    height: 50%;\n    width: 90%;\n    font-size: 1rem;\n    font-weight: 900;\n    color: rgb(189, 187, 187);\n}\n#dropdown {\n    width: 20vw;\n}\n#submit {\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\ninput {\n    height: 4vh;\n}\ntextarea {\n    height: 9vh;\n    border: 1px solid rgb(13, 12, 12);\n}\nselect {\n    height: 4vh;\n}\ninput, textarea, select {\n    background-color: rgb(255, 255, 255);\n    padding: 0;\n    border: none;\n    border-radius: var(--border-radius);\n}\ninput:focus, textarea:focus, select:focus {\n    outline: none;\n}\n#high, #med, #low {\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 50%;\n}\n.radio-btns {\n    width: 1.4rem;\n    height: 1.4rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.radio-btns .checkmark {\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    border-radius: 50%;\n    background-color: black;\n    display: inline-block;\n    opacity: 0;\n    transition: opacity 0.5s ease;\n}\n.radio-btns input:checked + .checkmark {\n    display: inline-block;\n    opacity: 1;\n}\n.radio-btns input {\n    display: none;\n}\n#priorities > :nth-child(1) {\n    border: 2px solid rgb(242, 126, 165);\n}\n#priorities > :nth-child(2) {\n    border: 2px solid rgb(196, 73, 237);\n}\n#priorities > :nth-child(3) {\n    border: 2px solid rgb(0, 123, 255);\n}\n\n#low-prio {\n    background-color: rgb(242, 126, 165);\n}\n#med-prio {\n    background-color: rgb(196, 73, 237);\n}\n#high-prio {\n    background-color: rgb(0, 123, 255);\n}\n/* to-do page */\n.page {\n    height: 100%;\n}\n#to-do-list {\n    display: flex;\n    flex-direction: column;\n}\n#do-do-list > input {\n    width: 100px;\n}\n.node {\n    display: flex;\n}\n.modal.visible {\n    width: 30%;\n    height: 45%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 200ms ease-in-out;\n}\n.visible {\n    transform: scale(1);\n}\n/* checkbox */\n[type=checkbox] {\n    display: flex;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    color: rgb(218, 30, 255);\n    vertical-align: middle;\n    -webkit-appearance: none;\n    background: none;\n    border: 0;\n    outline: 0;\n    flex-grow: 0;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    transition: background 300ms;\n    cursor: pointer;\n  }\n[type=checkbox]::before {\n    content: \"\";\n    color: transparent;\n    display: block;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    border: 0;\n    background-color: transparent;\n    background-size: contain;\n    box-shadow: inset 0 0 0 1px #CCD3D8;\n  }\n[type=checkbox]:checked {\n    background-color: currentcolor;\n  }\n[type=checkbox]:checked::before {\n    box-shadow: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E\");\n  }\n.finished {\n    text-decoration: line-through;\n    color: grey;\n}\n\n/* project */\n#projects-pg {\n    display: flex;\n    flex-direction: column;\n}\n.proj-div {\n    display: flex;\n    gap: 13px;\n    padding-left: 13px;\n    font-size: 15px;\n    font-weight: 900;\n}\n.proj-div:hover {\n    background-color: rgb(195, 191, 191);\n    color: white;\n}\n#new-proj-btn {\n    margin-top: 10px;\n    width: 10vw;\n    height: 5vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.9rem;\n}\n.hide {\n    transform: scale(0);\n}\n#new-proj {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n.new-proj-div {\n    transform: scale(1);\n}\n#new-proj-input {\n    border: 1px solid grey;\n    height: 38px;\n    border-radius: 0px;\n}\n#new-proj-submit, #cancel {\n    margin-top: 10px;\n    width: 10vw;\n    height: 40px;\n    align-self: center;\n    border: none;\n    color: white;\n    font-size: 0.9rem;\n}\n#new-proj-submit {\n    background-color: rgb(165, 85, 194);\n}\n#cancel {\n    background-color: #999999;\n}\n#projects-list {\n    margin-top: 10px;\n}\n/* subtask pg */\n.subtask-div {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.subtask-node {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 50%;\n\n}\n.subtask-info > #prio-in-task {\n    height: 1rem;\n    width: 1rem;\n}\n.subtask-info {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 50%;\n}\n#subtask-list {\n    height: 30%;\n    width: 85%;\n    border: 1px solid var(--border);\n    color: grey;\n    font-size: 0.9rem;\n}\n.subtask-div > textarea {\n    height: 20%;\n    background-color: var(--border);\n    border: 1px solid rgb(194, 193, 193);\n}\n.subtask-div > button {\n    width: 7vw;\n    height: 4vh;\n    align-self: center;\n    border-radius: var(--border-radius);\n    border: none;\n    background-color: rgb(80, 141, 246);\n    color: white;\n    font-size: 0.7rem;\n}\n.subtask-div > * {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.8rem;\n}\n#date-prio-div {\n    display: flex;\n    justify-content: space-between;\n}\n#sub-prio {\n    height: 1.2rem;\n    width: 1.2rem;\n    border-radius: 50%;\n}\n#date-prio-div > :nth-child(1) {\n    font-size: 0.7rem;\n    color: grey;\n}\n#task-name {\n    font-size: var(--font-size);\n    font-weight: 500;\n}\ninput:focus::placeholder, textarea:focus::placeholder {\n    color: transparent;\n  }\n.proj-todo{\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\n\n  \n\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "dropdown": () => (/* binding */ dropdown),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "high": () => (/* binding */ high),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "low": () => (/* binding */ low),
/* harmony export */   "medium": () => (/* binding */ medium),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "newProj": () => (/* binding */ newProj),
/* harmony export */   "newProjBtn": () => (/* binding */ newProjBtn),
/* harmony export */   "newProjDiv": () => (/* binding */ newProjDiv),
/* harmony export */   "newProjInputDiv": () => (/* binding */ newProjInputDiv),
/* harmony export */   "newProjectName": () => (/* binding */ newProjectName),
/* harmony export */   "newProjectSubmit": () => (/* binding */ newProjectSubmit),
/* harmony export */   "priorities": () => (/* binding */ priorities),
/* harmony export */   "projList": () => (/* binding */ projList),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "projectsDiv": () => (/* binding */ projectsDiv),
/* harmony export */   "projectsPg": () => (/* binding */ projectsPg),
/* harmony export */   "subProjDiv": () => (/* binding */ subProjDiv),
/* harmony export */   "subTasksDiv": () => (/* binding */ subTasksDiv),
/* harmony export */   "submitBtn": () => (/* binding */ submitBtn),
/* harmony export */   "subtaskPg": () => (/* binding */ subtaskPg),
/* harmony export */   "taskDiv": () => (/* binding */ taskDiv),
/* harmony export */   "textarea": () => (/* binding */ textarea),
/* harmony export */   "toDoList": () => (/* binding */ toDoList),
/* harmony export */   "toDoPg": () => (/* binding */ toDoPg),
/* harmony export */   "todayDiv": () => (/* binding */ todayDiv),
/* harmony export */   "todayPg": () => (/* binding */ todayPg),
/* harmony export */   "weekPg": () => (/* binding */ weekPg),
/* harmony export */   "weekTasks": () => (/* binding */ weekTasks),
/* harmony export */   "weekTasksDiv": () => (/* binding */ weekTasksDiv)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");


const body = document.body;

const container = document.createElement('div');
container.setAttribute('id', 'container');

const background = document.createElement('div');
background.setAttribute('id', 'background');

// MENU
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');

        const addNewTaskBtn = document.createElement('button');
        addNewTaskBtn.setAttribute('id', 'new-task-btn');
        addNewTaskBtn.innerHTML = '&#43;';

        const projectsDiv = document.createElement('div');
        projectsDiv.setAttribute('class', 'menu-app-div');
        projectsDiv.setAttribute('id', 'projects-btn');

        const projectDispDiv = document.createElement('div');
        projectDispDiv.setAttribute('class', 'title-div');

        const projects = document.createElement('div');
        projects.innerHTML = 'Projects';

        const todayDiv = document.createElement('div');
        todayDiv.setAttribute('class', 'menu-app-div');
        todayDiv.setAttribute('id', 'today-btn');

        const todayTitle = document.createElement('div');
        todayTitle.setAttribute('class', 'title-div');
        todayTitle.innerHTML = 'Today';

        todayDiv.appendChild(todayTitle);

        const weekTasksDiv = document.createElement('div');
        weekTasksDiv.setAttribute('class', 'menu-app-div');
        weekTasksDiv.setAttribute('id', 'week-btn');

        const weekTasks = document.createElement('div');
        weekTasks.innerHTML = 'Week';

        const allTasksDiv = document.createElement('div');
        allTasksDiv.setAttribute('class', 'menu-app-div');
        allTasksDiv.setAttribute('id', 'all-tasks-btn');

        const allTasks = document.createElement('div');
        allTasks.innerHTML = 'All Tasks';

// TO-DO-LIST PG

        const banner = document.createElement('div');
        banner.setAttribute('class', 'banner');
        banner.innerHTML = 'All Tasks';

        const toDoList = document.createElement('div');
        toDoList.setAttribute('id', 'to-do-list');

        const toDoPg = document.createElement('div');
        toDoPg.setAttribute('id', 'to-do-page');
        toDoPg.setAttribute('class', 'page');

        // TO-DO-LIST PROJECTS PG

        const projectsPg = document.createElement('div');
        projectsPg.setAttribute('id', 'projects-pg');
        projectsPg.setAttribute('class', 'page');

        const projList = document.createElement('div');
        projList.setAttribute('id', 'projects-list');

        const newProjBtn = document.createElement('button');
        newProjBtn.setAttribute('id', 'new-proj-btn');
        newProjBtn.innerHTML = 'New Project';

        const newProj = document.createElement('div');
        newProj.setAttribute('id', 'new-proj');

        const newProjDiv = document.createElement('div');
        newProjDiv.setAttribute('id', 'new-proj-div');

        const newProjInputDiv = document.createElement('div');
        newProjInputDiv.setAttribute('id', 'proj-input-div');

        const newProjectName = document.createElement('input');
        newProjectName.setAttribute('type', 'text');
        newProjectName.setAttribute('id', 'new-proj-input');

        const newProjectSubmit = document.createElement('button');
        newProjectSubmit.setAttribute('type', 'submit');
        newProjectSubmit.setAttribute('id', 'new-proj-submit');
        newProjectSubmit.innerHTML = 'Submit';

        const cancelInput = document.createElement('button');
        cancelInput.setAttribute('id', 'cancel');
        cancelInput.innerHTML = 'Cancel';

        // TO-DO-LIST WEEK PG

        const weekPg = document.createElement('div');
        weekPg.setAttribute('id', 'week-page');
        weekPg.setAttribute('class', 'page');

        // TO-DO-LIST TODAY PG

        const todayPg = document.createElement('div');
        todayPg.setAttribute('id', 'today-page');
        todayPg.setAttribute('class', 'page');


// MODAL 
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


// SUBTASK PG

        const subtaskPg = document.createElement('div');
        subtaskPg.setAttribute('id', 'subtask-pg');

        const subTasksDiv = document.createElement('div');
        subTasksDiv.setAttribute('class', 'subtask-div');

        const subProjDiv = document.createElement('div');
        subProjDiv.setAttribute('class', 'sub-proj-div');


newProjInputDiv.appendChild(newProjectName);
newProjInputDiv.appendChild(newProjectSubmit);
newProjInputDiv.appendChild(cancelInput);

newProjDiv.appendChild(newProjInputDiv);

projectDispDiv.appendChild(projects);
projectsDiv.appendChild(projectDispDiv);

newProj.appendChild(newProjBtn);

projectsPg.appendChild(newProj);
projectsPg.appendChild(projList);

weekTasksDiv.appendChild(weekTasks);

allTasksDiv.appendChild(allTasks);

menu.appendChild(addNewTaskBtn);
menu.appendChild(projectsDiv);
menu.appendChild(todayDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxVQUFV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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnlCOztBQUV6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUd5WCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3dhbGxwYXBlcjEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjclM0UgJTNDcGF0aCBkPSUyN00xNS44OCA4LjI5TDEwIDE0LjE3bC0xLjg4LTEuODhhLjk5Ni45OTYgMCAxIDAtMS40MSAxLjQxbDIuNTkgMi41OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTcuMyA5LjdhLjk5Ni45OTYgMCAwIDAgMC0xLjQxYy0uMzktLjM5LTEuMDMtLjM5LTEuNDIgMHolMjcgZmlsbD0lMjclMjNmZmYlMjcvJTNFICUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLS1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS1ib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIyNSk7XFxuICAgIC0tYm9yZGVyOiAxNjksIDE2OCwgMTY4LCAwLjM1MjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbn1cXG4jYmFja2dyb3VuZCB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uYmFubmVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcbiAgICB0b3A6IDEzMHB4O1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XFxufVxcbiN0by1kby1saXN0LCAjc3VidGFzay1wZyB7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgbWluLXdpZHRoOiAyNzJweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuI3RvLWRvLWxpc3Qge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xcblxcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbn1cXG4jc3VidGFzay1wZyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNy4zcmVtO1xcbn1cXG4vKiB0by1kbyBkaXYgKi9cXG4udG8tZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi50by1kbyA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnRvLWRvID4gI2RlbGV0ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbiN0b2RvIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuLnRvZG8tY2hlY2s6aG92ZXIsIC50b2RvLWNoZWNrOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTkxLCAxOTEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG4udG9kby1jaGVjayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZG9uZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogcmdiKDIxOCwgMjE3LCAyMTcpO1xcbn1cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXQtZGlzcCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG4jcHJpby1pbi10YXNrIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubG93LXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAxMjYsIDE2NSk7XFxufVxcbi5tZWQtcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDczLCAyMzcpO1xcbn1cXG4uaGlnaC1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyMywgMjU1KTtcXG59XFxuI2RlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyIDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi8qIG1lbnUgKi9cXG4jbWVudSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogOTJ2aDtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA4dmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBtaW4td2lkdGg6IDEzNXB4O1xcbn1cXG4jbmV3LXRhc2stYnRuIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwNywgNDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmRyb3Bkb3duIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLm1lbnUtYXBwLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tZW51LWFwcC1kaXYgPiAqIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG4ubWVudS1hcHAtZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gICAgY29sb3I6IHB1cnBsZTtcXG59XFxuLm1lbnUtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcbi50aXRsZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGl0bGUtZGl2ID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWVudS1hcHAtZGl2ID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4vKiBtb2RhbCAqL1xcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZmllbGRzZXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbiNzaWRlLW1vZGFsIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLWJvcmRlcik7XFxufVxcbiNwcmlvcml0aWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg3LCAxODcpO1xcbn1cXG4jZHJvcGRvd24ge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuI3N1Ym1pdCB7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE0MSwgMjQ2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDR2aDtcXG59XFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDl2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLCAxMiwgMTIpO1xcbn1cXG5zZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDR2aDtcXG59XFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuI2hpZ2gsICNtZWQsICNsb3cge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ucmFkaW8tYnRucyB7XFxuICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmFkaW8tYnRucyAuY2hlY2ttYXJrIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcXG59XFxuLnJhZGlvLWJ0bnMgaW5wdXQ6Y2hlY2tlZCArIC5jaGVja21hcmsge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5yYWRpby1idG5zIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI3ByaW9yaXRpZXMgPiA6bnRoLWNoaWxkKDEpIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MiwgMTI2LCAxNjUpO1xcbn1cXG4jcHJpb3JpdGllcyA+IDpudGgtY2hpbGQoMikge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk2LCA3MywgMjM3KTtcXG59XFxuI3ByaW9yaXRpZXMgPiA6bnRoLWNoaWxkKDMpIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDEyMywgMjU1KTtcXG59XFxuXFxuI2xvdy1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMTI2LCAxNjUpO1xcbn1cXG4jbWVkLXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA3MywgMjM3KTtcXG59XFxuI2hpZ2gtcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjMsIDI1NSk7XFxufVxcbi8qIHRvLWRvIHBhZ2UgKi9cXG4ucGFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI3RvLWRvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jZG8tZG8tbGlzdCA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG4ubm9kZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbC52aXNpYmxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnZpc2libGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4vKiBjaGVja2JveCAqL1xcblt0eXBlPWNoZWNrYm94XSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMjE4LCAzMCwgMjU1KTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuW3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI0NDRDNEODtcXG4gIH1cXG5bdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcXG4gIH1cXG5bdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIH1cXG4uZmluaXNoZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIHByb2plY3QgKi9cXG4jcHJvamVjdHMtcGcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvai1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4ucHJvai1kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTEsIDE5MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI25ldy1wcm9qLWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE0MSwgMjQ2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLmhpZGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4jbmV3LXByb2oge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5uZXctcHJvai1kaXYge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4jbmV3LXByb2otaW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuI25ldy1wcm9qLXN1Ym1pdCwgI2NhbmNlbCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4jbmV3LXByb2otc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgODUsIDE5NCk7XFxufVxcbiNjYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xcbn1cXG4jcHJvamVjdHMtbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi8qIHN1YnRhc2sgcGcgKi9cXG4uc3VidGFzay1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5zdWJ0YXNrLW5vZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG5cXG59XFxuLnN1YnRhc2staW5mbyA+ICNwcmlvLWluLXRhc2sge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG4uc3VidGFzay1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcbiNzdWJ0YXNrLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uc3VidGFzay1kaXYgPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk0LCAxOTMsIDE5Myk7XFxufVxcbi5zdWJ0YXNrLWRpdiA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA3dnc7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTQxLCAyNDYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG4uc3VidGFzay1kaXYgPiAqIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC44cmVtO1xcbn1cXG4jZGF0ZS1wcmlvLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3N1Yi1wcmlvIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuI2RhdGUtcHJpby1kaXYgPiA6bnRoLWNoaWxkKDEpIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG4jdGFzay1uYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4ucHJvai10b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5cXG4gIFxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHdEQUF3RDtJQUN4RCw4QkFBOEI7SUFDOUIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZOztJQUVaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLHlEQUEyQzs7SUFFM0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsU0FBUztBQUNiO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLG9DQUFvQzs7SUFFcEMsVUFBVTs7SUFFViwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7O0lBRWhCLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCOztJQUVoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQSxTQUFTO0FBQ1Q7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTs7SUFFWiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQSxVQUFVO0FBQ1Y7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQSxlQUFlO0FBQ2Y7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixtQ0FBbUM7RUFDckM7QUFDRjtJQUNJLDhCQUE4QjtFQUNoQztBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlEQUE4VDtFQUNoVTtBQUNGO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtJQUMvQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAtLWZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAtLWJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjI1KTtcXG4gICAgLS1ib3JkZXI6IDE2OSwgMTY4LCAxNjgsIDAuMzUyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAgNmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcbiNiYWNrZ3JvdW5kIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3dhbGxwYXBlcjEuanBnKTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuICAgIHRvcDogMTMwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcXG59XFxuI3RvLWRvLWxpc3QsICNzdWJ0YXNrLXBnIHtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBtaW4td2lkdGg6IDI3MnB4O1xcblxcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbn1cXG4jdG8tZG8tbGlzdCB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1pbi13aWR0aDogMzYwcHg7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxufVxcbiNzdWJ0YXNrLXBnIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA3LjNyZW07XFxufVxcbi8qIHRvLWRvIGRpdiAqL1xcbi50by1kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLnRvLWRvID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4udG8tZG8gPiAjZGVsZXRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuI3RvZG8ge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4udG9kby1jaGVjazpob3ZlciwgLnRvZG8tY2hlY2s6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTEsIDE5MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcbi50b2RvLWNoZWNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kb25lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiByZ2IoMjE4LCAyMTcsIDIxNyk7XFxufVxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNhdC1kaXNwIHtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcbiNwcmlvLWluLXRhc2sge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5sb3ctcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDEyNiwgMTY1KTtcXG59XFxuLm1lZC1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgNzMsIDIzNyk7XFxufVxcbi5oaWdoLXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIzLCAyNTUpO1xcbn1cXG4jZGVsZXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLyogbWVudSAqL1xcbiNtZW51IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA5MnZoO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDh2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIG1pbi13aWR0aDogMTM1cHg7XFxufVxcbiNuZXctdGFzay1idG4ge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA3LCA0OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uZHJvcGRvd24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4ubWVudS1hcHAtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1lbnUtYXBwLWRpdiA+ICoge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcbi5tZW51LWFwcC1kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbn1cXG4ubWVudS1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuLnRpdGxlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50aXRsZS1kaXYgPiBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZW51LWFwcC1kaXYgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi8qIG1vZGFsICovXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5maWVsZHNldCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGdhcDogMjVweDtcXG59XFxuI3NpZGUtbW9kYWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyKTtcXG59XFxuI3ByaW9yaXRpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiByZ2IoMTg5LCAxODcsIDE4Nyk7XFxufVxcbiNkcm9wZG93biB7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG4jc3VibWl0IHtcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTQxLCAyNDYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG50ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDEyLCAxMik7XFxufVxcbnNlbGVjdCB7XFxuICAgIGhlaWdodDogNHZoO1xcbn1cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4jaGlnaCwgI21lZCwgI2xvdyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5yYWRpby1idG5zIHtcXG4gICAgd2lkdGg6IDEuNHJlbTtcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yYWRpby1idG5zIC5jaGVja21hcmsge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG4ucmFkaW8tYnRucyBpbnB1dDpjaGVja2VkICsgLmNoZWNrbWFyayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnJhZGlvLWJ0bnMgaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jcHJpb3JpdGllcyA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQyLCAxMjYsIDE2NSk7XFxufVxcbiNwcmlvcml0aWVzID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOTYsIDczLCAyMzcpO1xcbn1cXG4jcHJpb3JpdGllcyA+IDpudGgtY2hpbGQoMykge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTIzLCAyNTUpO1xcbn1cXG5cXG4jbG93LXByaW8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAxMjYsIDE2NSk7XFxufVxcbiNtZWQtcHJpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDczLCAyMzcpO1xcbn1cXG4jaGlnaC1wcmlvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyMywgMjU1KTtcXG59XFxuLyogdG8tZG8gcGFnZSAqL1xcbi5wYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jdG8tZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNkby1kby1saXN0ID4gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcbi5ub2RlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsLnZpc2libGUge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDQ1JTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4udmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIGNoZWNrYm94ICovXFxuW3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigyMTgsIDMwLCAyNTUpO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMzAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5bdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjQ0NEM0Q4O1xcbiAgfVxcblt0eXBlPWNoZWNrYm94XTpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xcbiAgfVxcblt0eXBlPWNoZWNrYm94XTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCclM0UgJTNDcGF0aCBkPSdNMTUuODggOC4yOUwxMCAxNC4xN2wtMS44OC0xLjg4YS45OTYuOTk2IDAgMSAwLTEuNDEgMS40MWwyLjU5IDIuNTljLjM5LjM5IDEuMDIuMzkgMS40MSAwTDE3LjMgOS43YS45OTYuOTk2IDAgMCAwIDAtMS40MWMtLjM5LS4zOS0xLjAzLS4zOS0xLjQyIDB6JyBmaWxsPSclMjNmZmYnLyUzRSAlM0Mvc3ZnJTNFXFxcIik7XFxuICB9XFxuLmZpbmlzaGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4vKiBwcm9qZWN0ICovXFxuI3Byb2plY3RzLXBnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2otZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLnByb2otZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTkxLCAxOTEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNuZXctcHJvai1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNDEsIDI0Nik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5oaWRlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuI25ldy1wcm9qIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubmV3LXByb2otZGl2IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuI25ldy1wcm9qLWlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcbiNuZXctcHJvai1zdWJtaXQsICNjYW5jZWwge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuI25ldy1wcm9qLXN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDg1LCAxOTQpO1xcbn1cXG4jY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcXG59XFxuI3Byb2plY3RzLWxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4vKiBzdWJ0YXNrIHBnICovXFxuLnN1YnRhc2stZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uc3VidGFzay1ub2RlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuXFxufVxcbi5zdWJ0YXNrLWluZm8gPiAjcHJpby1pbi10YXNrIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuLnN1YnRhc2staW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG4jc3VidGFzay1saXN0IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLnN1YnRhc2stZGl2ID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NCwgMTkzLCAxOTMpO1xcbn1cXG4uc3VidGFzay1kaXYgPiBidXR0b24ge1xcbiAgICB3aWR0aDogN3Z3O1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE0MSwgMjQ2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuLnN1YnRhc2stZGl2ID4gKiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcXG59XFxuI2RhdGUtcHJpby1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNzdWItcHJpbyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbiNkYXRlLXByaW8tZGl2ID4gOm50aC1jaGlsZCgxKSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuI3Rhc2stbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuLnByb2otdG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuICBcXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zcmMvc3R5bGUuY3NzJ1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcblxuY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2tncm91bmQnKTtcblxuLy8gTUVOVVxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxuICAgICAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZE5ld1Rhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXctdGFzay1idG4nKTtcbiAgICAgICAgYWRkTmV3VGFza0J0bi5pbm5lckhUTUwgPSAnJiM0MzsnO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1hcHAtZGl2Jyk7XG4gICAgICAgIHByb2plY3RzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMtYnRuJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpc3BEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1kaXYnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0cy5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZGF5RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1hcHAtZGl2Jyk7XG4gICAgICAgIHRvZGF5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXktYnRuJyk7XG5cbiAgICAgICAgY29uc3QgdG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RheVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUtZGl2Jyk7XG4gICAgICAgIHRvZGF5VGl0bGUuaW5uZXJIVE1MID0gJ1RvZGF5JztcblxuICAgICAgICB0b2RheURpdi5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKTtcblxuICAgICAgICBjb25zdCB3ZWVrVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Vla1Rhc2tzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1hcHAtZGl2Jyk7XG4gICAgICAgIHdlZWtUYXNrc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWstYnRuJyk7XG5cbiAgICAgICAgY29uc3Qgd2Vla1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlZWtUYXNrcy5pbm5lckhUTUwgPSAnV2Vlayc7XG5cbiAgICAgICAgY29uc3QgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsVGFza3NEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWFwcC1kaXYnKTtcbiAgICAgICAgYWxsVGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhbGwtdGFza3MtYnRuJyk7XG5cbiAgICAgICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsVGFza3MuaW5uZXJIVE1MID0gJ0FsbCBUYXNrcyc7XG5cbi8vIFRPLURPLUxJU1QgUEdcblxuICAgICAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmFubmVyJyk7XG4gICAgICAgIGJhbm5lci5pbm5lckhUTUwgPSAnQWxsIFRhc2tzJztcblxuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvLWRvLWxpc3QnKTtcblxuICAgICAgICBjb25zdCB0b0RvUGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb1BnLnNldEF0dHJpYnV0ZSgnaWQnLCAndG8tZG8tcGFnZScpO1xuICAgICAgICB0b0RvUGcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlJyk7XG5cbiAgICAgICAgLy8gVE8tRE8tTElTVCBQUk9KRUNUUyBQR1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzUGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHNQZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzLXBnJyk7XG4gICAgICAgIHByb2plY3RzUGcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlJyk7XG5cbiAgICAgICAgY29uc3QgcHJvakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1saXN0Jyk7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdQcm9qQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXByb2otYnRuJyk7XG4gICAgICAgIG5ld1Byb2pCdG4uaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0JztcblxuICAgICAgICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvaicpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UHJvakRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy1wcm9qLWRpdicpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2pJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdQcm9qSW5wdXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qLWlucHV0LWRpdicpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvai1pbnB1dCcpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3UHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIG5ld1Byb2plY3RTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvai1zdWJtaXQnKTtcbiAgICAgICAgbmV3UHJvamVjdFN1Ym1pdC5pbm5lckhUTUwgPSAnU3VibWl0JztcblxuICAgICAgICBjb25zdCBjYW5jZWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbCcpO1xuICAgICAgICBjYW5jZWxJbnB1dC5pbm5lckhUTUwgPSAnQ2FuY2VsJztcblxuICAgICAgICAvLyBUTy1ETy1MSVNUIFdFRUsgUEdcblxuICAgICAgICBjb25zdCB3ZWVrUGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Vla1BnLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vlay1wYWdlJyk7XG4gICAgICAgIHdlZWtQZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BhZ2UnKTtcblxuICAgICAgICAvLyBUTy1ETy1MSVNUIFRPREFZIFBHXG5cbiAgICAgICAgY29uc3QgdG9kYXlQZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RheVBnLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXktcGFnZScpO1xuICAgICAgICB0b2RheVBnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZScpO1xuXG5cbi8vIE1PREFMIFxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsJyk7XG5cbiAgICAgICAgY29uc3Qgc2lkZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZGUtbW9kYWwnKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgbmV3IHRhc2snKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRHVlIGRhdGU6IE1NL0REL1lZWVknKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGRyb3Bkb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsICdBZGQgdG8gcHJvamVjdCcpO1xuICAgICAgICBkcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Ryb3Bkb3duJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cblxuICAgICAgICBvcHRpb24xLnRleHQgPSBcIkFsbCB0YXNrc1wiO1xuICAgICAgICBvcHRpb24yLnRleHQgPSBcIldvcmtcIjtcbiAgICAgICAgb3B0aW9uMy50ZXh0ID0gXCJIb21lXCI7XG5cblxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG5cbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHRhcmVhJyk7XG4gICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIG5vdGUnKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXRpZXMuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0aWVzJyk7XG4gICAgICAgIHByaW9yaXRpZXMuaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcblxuICAgICAgICBjb25zdCByYWRpb0xhYmVsTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICByYWRpb0xhYmVsTG93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFkaW8tYnRucycpO1xuXG4gICAgICAgIGNvbnN0IHJhZGlvTGFiZWxNZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHJhZGlvTGFiZWxNZWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYWRpby1idG5zJyk7XG5cbiAgICAgICAgY29uc3QgcmFkaW9MYWJlbEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHJhZGlvTGFiZWxIaWdoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFkaW8tYnRucycpO1xuXG5cbiAgICAgICAgY29uc3QgY2hlY2ttYXJrTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNoZWNrbWFya0xvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbWFyaycpO1xuICAgICAgICBjaGVja21hcmtMb3cuc2V0QXR0cmlidXRlKCdpZCcsICdsb3ctcHJpbycpO1xuICAgICAgICBjb25zdCBjaGVja21hcmtNZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY2hlY2ttYXJrTWVkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2ttYXJrJyk7XG4gICAgICAgIGNoZWNrbWFya01lZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lZC1wcmlvJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbWFya0hpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY2hlY2ttYXJrSGlnaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbWFyaycpO1xuICAgICAgICBjaGVja21hcmtIaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlnaC1wcmlvJyk7XG5cbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbG93LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICBsb3cuc2V0QXR0cmlidXRlKCdpZCcsICdsb3cnKTtcbiAgICAgICAgbG93LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICBsb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcblxuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBtZWRpdW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgIG1lZGl1bS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lZCcpO1xuICAgICAgICBtZWRpdW0uc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIG1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBoaWdoLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICBoaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlnaCcpO1xuICAgICAgICBoaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICBoaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuXG5cblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnU3VibWl0JztcblxuXG4vLyBTVUJUQVNLIFBHXG5cbiAgICAgICAgY29uc3Qgc3VidGFza1BnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN1YnRhc2tQZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1YnRhc2stcGcnKTtcblxuICAgICAgICBjb25zdCBzdWJUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdWJUYXNrc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1YnRhc2stZGl2Jyk7XG5cbiAgICAgICAgY29uc3Qgc3ViUHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdWJQcm9qRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3ViLXByb2otZGl2Jyk7XG5cblxubmV3UHJvaklucHV0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbm5ld1Byb2pJbnB1dERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0U3VibWl0KTtcbm5ld1Byb2pJbnB1dERpdi5hcHBlbmRDaGlsZChjYW5jZWxJbnB1dCk7XG5cbm5ld1Byb2pEaXYuYXBwZW5kQ2hpbGQobmV3UHJvaklucHV0RGl2KTtcblxucHJvamVjdERpc3BEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xucHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BEaXYpO1xuXG5uZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pCdG4pO1xuXG5wcm9qZWN0c1BnLmFwcGVuZENoaWxkKG5ld1Byb2opO1xucHJvamVjdHNQZy5hcHBlbmRDaGlsZChwcm9qTGlzdCk7XG5cbndlZWtUYXNrc0Rpdi5hcHBlbmRDaGlsZCh3ZWVrVGFza3MpO1xuXG5hbGxUYXNrc0Rpdi5hcHBlbmRDaGlsZChhbGxUYXNrcyk7XG5cbm1lbnUuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG5tZW51LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbm1lbnUuYXBwZW5kQ2hpbGQodG9kYXlEaXYpO1xubWVudS5hcHBlbmRDaGlsZCh3ZWVrVGFza3NEaXYpO1xubWVudS5hcHBlbmRDaGlsZChhbGxUYXNrc0Rpdik7XG5cbnRhc2tEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5yYWRpb0xhYmVsTG93LmFwcGVuZENoaWxkKGxvdyk7XG5yYWRpb0xhYmVsTG93LmFwcGVuZENoaWxkKGNoZWNrbWFya0xvdylcblxucmFkaW9MYWJlbE1lZC5hcHBlbmRDaGlsZChtZWRpdW0pO1xucmFkaW9MYWJlbE1lZC5hcHBlbmRDaGlsZChjaGVja21hcmtNZWQpO1xuXG5yYWRpb0xhYmVsSGlnaC5hcHBlbmRDaGlsZChoaWdoKTtcbnJhZGlvTGFiZWxIaWdoLmFwcGVuZENoaWxkKGNoZWNrbWFya0hpZ2gpO1xuXG5cbmZpZWxkc2V0LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5maWVsZHNldC5hcHBlbmRDaGlsZChkcm9wZG93bik7XG5maWVsZHNldC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5maWVsZHNldC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG5mb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbnByaW9yaXRpZXMuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbExvdyk7XG5wcmlvcml0aWVzLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxNZWQpO1xucHJpb3JpdGllcy5hcHBlbmRDaGlsZChyYWRpb0xhYmVsSGlnaCk7XG5cbnNpZGVNb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0aWVzKTtcblxubW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5tb2RhbC5hcHBlbmRDaGlsZChzaWRlTW9kYWwpO1xuXG5iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJhbm5lcik7XG5iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRvRG9MaXN0KTtcbmJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc3VidGFza1BnKTtcbmJhY2tncm91bmQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG5leHBvcnQge3Byb2plY3RzLCB3ZWVrVGFza3MsIHdlZWtUYXNrc0Rpdiwgd2Vla1BnLCB0b2RheVBnLCB0b2RheURpdiwgYWxsVGFza3MsIGFsbFRhc2tzRGl2LCBtZW51LCBhZGROZXdUYXNrQnRuLCBwcm9qZWN0c0RpdiwgcHJvamVjdHNQZywgbmV3UHJvaklucHV0RGl2LCBwcm9qTGlzdCwgbmV3UHJvaiwgbmV3UHJvamVjdE5hbWUsIG5ld1Byb2plY3RTdWJtaXQsIG5ld1Byb2pEaXYsIG5ld1Byb2pCdG4sIHN1YlByb2pEaXYsIGlucHV0LCBmb3JtLCB0YXNrRGl2LCBkcm9wZG93biwgdGV4dGFyZWEsIHN1Ym1pdEJ0biwgbW9kYWwsIHRvRG9MaXN0LCB0b0RvUGcsIHN1YnRhc2tQZywgc3ViVGFza3NEaXYsIHByaW9yaXRpZXMsIGxvdywgbWVkaXVtLCBoaWdofVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9