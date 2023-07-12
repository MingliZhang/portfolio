/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"firebaseApp\": () => (/* binding */ firebaseApp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst { getStorage, connectStorageEmulator } = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.cjs.js\");\n\nconst firebaseConfig = {\n    apiKey: 'AIzaSyDj1fRq4PkW8ES3-0kkHRm6yslX1zBkEGA',\n    authDomain: 'portfolio-7d0c2.firebaseapp.com',\n    projectId: 'portfolio-7d0c2',\n    storageBucket: 'portfolio-7d0c2.appspot.com',\n    messagingSenderId: '87138659755',\n    appId: '1:87138659755:web:85f2e482e28cc4779776ee',\n    measurementId: 'G-JK3CDJ5R6X',\n};\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebaseApp);\n\nconst storage = getStorage(firebaseApp);\n\nif (\n    true\n) {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.connectFirestoreEmulator)(db, 'localhost', 8080);\n    connectStorageEmulator(storage, 'localhost', 9199);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUMrQjtBQUM1RSxRQUFRLHFDQUFxQyxFQUFFLG1CQUFPLENBQUMsMkVBQWtCOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQWE7O0FBRWpDLFdBQVcsZ0VBQVk7O0FBRXZCOztBQUVBO0FBQ0EsSUFBSSxJQUNrQztBQUN0QztBQUNBLElBQUksNEVBQXdCO0FBQzVCO0FBQ0E7O0FBRTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2ZpcmViYXNlLmpzP2RjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbm5lY3RGaXJlc3RvcmVFbXVsYXRvciB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5jb25zdCB7IGdldFN0b3JhZ2UsIGNvbm5lY3RTdG9yYWdlRW11bGF0b3IgfSA9IHJlcXVpcmUoJ2ZpcmViYXNlL3N0b3JhZ2UnKTtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiAnQUl6YVN5RGoxZlJxNFBrVzhFUzMtMGtrSFJtNnlzbFgxekJrRUdBJyxcbiAgICBhdXRoRG9tYWluOiAncG9ydGZvbGlvLTdkMGMyLmZpcmViYXNlYXBwLmNvbScsXG4gICAgcHJvamVjdElkOiAncG9ydGZvbGlvLTdkMGMyJyxcbiAgICBzdG9yYWdlQnVja2V0OiAncG9ydGZvbGlvLTdkMGMyLmFwcHNwb3QuY29tJyxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzg3MTM4NjU5NzU1JyxcbiAgICBhcHBJZDogJzE6ODcxMzg2NTk3NTU6d2ViOjg1ZjJlNDgyZTI4Y2M0Nzc5Nzc2ZWUnLFxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLUpLM0NESjVSNlgnLFxufTtcbmNvbnN0IGZpcmViYXNlQXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGZpcmViYXNlQXBwKTtcblxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoZmlyZWJhc2VBcHApO1xuXG5pZiAoXG4gICAgcHJvY2Vzcy5lbnYuRU5WX1RZUEUgPT09ICdkZXZlbG9wbWVudCcgfHxcbiAgICBwcm9jZXNzLmVudi5FTlZfVFlQRSA9PT0gJ3Rlc3RpbmcnXG4pIHtcbiAgICBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IoZGIsICdsb2NhbGhvc3QnLCA4MDgwKTtcbiAgICBjb25uZWN0U3RvcmFnZUVtdWxhdG9yKHN0b3JhZ2UsICdsb2NhbGhvc3QnLCA5MTk5KTtcbn1cblxuZXhwb3J0IHsgZmlyZWJhc2VBcHAsIGRiIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/firebase.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./src/firebase.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.js */ \"./src/theme.js\");\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\nconst nameElement = document.getElementById('name');\nconst subjectElement = document.getElementById('subject');\nconst emailElement = document.getElementById('email');\nconst messageElement = document.getElementById('message');\nconst respond = document.getElementById('respond');\nconst formElement = document.getElementById('contact-form');\n\nformElement.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    e.stopPropagation();\n    const name = nameElement.value;\n    const subject = subjectElement.value;\n    const email = emailElement.value;\n    const message = messageElement.value;\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.invalidateEmail)(email)) {\n        respond.innerHTML = `<p>Please provide a valid email address!</p>`;\n        return;\n    } else if (\n        name.length === 0 ||\n        subject.length === 0 ||\n        email.length === 0 ||\n        message.length === 0\n    ) {\n        respond.innerHTML = `<p>Please provide all of the fields above!</p>`;\n        return;\n    }\n    try {\n        const docRef = await addDoc(collection(_firebase__WEBPACK_IMPORTED_MODULE_0__.db, 'messages'), {\n            name: name,\n            email: email,\n            message: message,\n            subject: subject,\n        });\n        console.log('Document written with ID: ', docRef.id);\n        formElement.reset();\n    } catch (e) {\n        respond.innerHTML = `<p>An Error has occured, please contact me through email directly.</p>`;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7O0FBRVM7O0FBRXJCOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHlDQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4vZmlyZWJhc2UnO1xuXG5pbXBvcnQgeyBpbnZhbGlkYXRlRW1haWwgfSBmcm9tICcuL3V0aWwnO1xuXG5pbXBvcnQgJy4vdGhlbWUuanMnO1xuXG5jb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG5jb25zdCBzdWJqZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0Jyk7XG5jb25zdCBlbWFpbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbmNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcbmNvbnN0IHJlc3BvbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzcG9uZCcpO1xuY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XG5cbmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVFbGVtZW50LnZhbHVlO1xuICAgIGNvbnN0IHN1YmplY3QgPSBzdWJqZWN0RWxlbWVudC52YWx1ZTtcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsRWxlbWVudC52YWx1ZTtcbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKGludmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICAgICAgcmVzcG9uZC5pbm5lckhUTUwgPSBgPHA+UGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzITwvcD5gO1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgbmFtZS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgc3ViamVjdC5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgZW1haWwubGVuZ3RoID09PSAwIHx8XG4gICAgICAgIG1lc3NhZ2UubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICAgIHJlc3BvbmQuaW5uZXJIVE1MID0gYDxwPlBsZWFzZSBwcm92aWRlIGFsbCBvZiB0aGUgZmllbGRzIGFib3ZlITwvcD5gO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCAnbWVzc2FnZXMnKSwge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0RvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogJywgZG9jUmVmLmlkKTtcbiAgICAgICAgZm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlc3BvbmQuaW5uZXJIVE1MID0gYDxwPkFuIEVycm9yIGhhcyBvY2N1cmVkLCBwbGVhc2UgY29udGFjdCBtZSB0aHJvdWdoIGVtYWlsIGRpcmVjdGx5LjwvcD5gO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (() => {

eval("let theme = localStorage.getItem(\"MingliZhang'sTheme\");\n\nif (theme == null) {\n    setTheme('light');\n} else {\n    setTheme(theme);\n}\n\nlet themeDots = document.getElementsByClassName('theme-dot');\n\nfor (let i = 0; themeDots.length > i; i++) {\n    themeDots[i].addEventListener('click', function () {\n        let mode = this.dataset.mode;\n        setTheme(mode);\n    });\n}\n\nfunction setTheme(mode) {\n    if (mode == 'light') {\n        document.getElementById('theme-style').href = './styles/default.css';\n    } else if (mode == 'green') {\n        document.getElementById('theme-style').href = './styles/green.css';\n    } else if (mode == 'blue') {\n        document.getElementById('theme-style').href = './styles/blue.css';\n    } else if (mode == 'purple') {\n        document.getElementById('theme-style').href = './styles/purple.css';\n    } else {\n        console.log('unknown error occured!');\n    }\n    localStorage.setItem(\"MingliZhang'sTheme\", mode);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy90aGVtZS5qcz9jYzM3Il0sInNvdXJjZXNDb250ZW50IjpbImxldCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTWluZ2xpWmhhbmcnc1RoZW1lXCIpO1xuXG5pZiAodGhlbWUgPT0gbnVsbCkge1xuICAgIHNldFRoZW1lKCdsaWdodCcpO1xufSBlbHNlIHtcbiAgICBzZXRUaGVtZSh0aGVtZSk7XG59XG5cbmxldCB0aGVtZURvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGVtZS1kb3QnKTtcblxuZm9yIChsZXQgaSA9IDA7IHRoZW1lRG90cy5sZW5ndGggPiBpOyBpKyspIHtcbiAgICB0aGVtZURvdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBtb2RlID0gdGhpcy5kYXRhc2V0Lm1vZGU7XG4gICAgICAgIHNldFRoZW1lKG1vZGUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRUaGVtZShtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT0gJ2xpZ2h0Jykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc3R5bGUnKS5ocmVmID0gJy4vc3R5bGVzL2RlZmF1bHQuY3NzJztcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT0gJ2dyZWVuJykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc3R5bGUnKS5ocmVmID0gJy4vc3R5bGVzL2dyZWVuLmNzcyc7XG4gICAgfSBlbHNlIGlmIChtb2RlID09ICdibHVlJykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc3R5bGUnKS5ocmVmID0gJy4vc3R5bGVzL2JsdWUuY3NzJztcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT0gJ3B1cnBsZScpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXN0eWxlJykuaHJlZiA9ICcuL3N0eWxlcy9wdXJwbGUuY3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndW5rbm93biBlcnJvciBvY2N1cmVkIScpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIk1pbmdsaVpoYW5nJ3NUaGVtZVwiLCBtb2RlKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"invalidateEmail\": () => (/* binding */ invalidateEmail)\n/* harmony export */ });\nconst mailformat =\n    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\n\nfunction invalidateEmail(mail) {\n    if (mail.match(mailformat)) {\n        return false;\n    } else {\n        return true;\n    }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxnQ0FBZ0MsRUFBRTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdXRpbC5qcz9lMGViIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haWxmb3JtYXQgPVxuICAgIC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuXG5mdW5jdGlvbiBpbnZhbGlkYXRlRW1haWwobWFpbCkge1xuICAgIGlmIChtYWlsLm1hdGNoKG1haWxmb3JtYXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGludmFsaWRhdGVFbWFpbCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util.js\n");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_storage_dist_index_cjs_js-node_modules_firebase_app_dist_esm_in-6dcc2e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;