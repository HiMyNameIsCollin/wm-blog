webpackHotUpdate_N_E("pages/posts",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n\n\nvar _jsxFileName = \"/home/collin/Desktop/Coding/blog/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var setLoading = _ref.setLoading;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function fireOnScroll() {\n      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;\n      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n      var scrolled = winScroll / height * -100;\n      document.documentElement.style.setProperty('--scrollPercentage', scrolled + 'vh');\n    }\n\n    window.addEventListener('scroll', fireOnScroll);\n    return function () {\n      return window.removeEventListener('scroll', fireOnScroll);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    id: \"header\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      src: \"/logo.jpeg\",\n      height: \"64px\",\n      width: \"80px\",\n      alt: \"K-Pop and Cookies logo\",\n      className: \"logo\",\n      onClick: function onClick() {\n        setLoading(true);\n        router.push('/');\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: \"twitterIcon\",\n      href: \"\",\n      target: \"_blank\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"Follow me!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faTwitterSquare\"],\n        size: \"3x\",\n        color: \"black\",\n        background: \"black\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 8\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Header, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZmlyZU9uU2Nyb2xsIiwid2luU2Nyb2xsIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZWQiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZmFUd2l0dGVyU3F1YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUVoQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmLGFBQVNDLFlBQVQsR0FBdUI7QUFDckIsVUFBSUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxJQUEyQkYsUUFBUSxDQUFDRyxlQUFULENBQXlCRCxTQUFwRTtBQUNBLFVBQUlFLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxlQUFULENBQXlCRSxZQUF6QixHQUF3Q0wsUUFBUSxDQUFDRyxlQUFULENBQXlCRyxZQUE5RTtBQUNBLFVBQUlDLFFBQVEsR0FBSVIsU0FBUyxHQUFHSyxNQUFiLEdBQXVCLENBQUMsR0FBdkM7QUFDQUosY0FBUSxDQUFDRyxlQUFULENBQXlCSyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkMsb0JBQTNDLEVBQWlFRixRQUFRLEdBQUcsSUFBNUU7QUFDRDs7QUFDREcsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2IsWUFBbEM7QUFDQSxXQUFPO0FBQUEsYUFBTVksTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ2QsWUFBckMsQ0FBTjtBQUFBLEtBQVA7QUFDQSxHQVRRLEVBU1AsRUFUTyxDQUFUO0FBV0Esc0JBQ0M7QUFBUSxNQUFFLEVBQUMsUUFBWDtBQUFBLDRCQUNDLHFFQUFDLGlEQUFEO0FBQ0MsU0FBRyxFQUFDLFlBREw7QUFFQyxZQUFNLEVBQUMsTUFGUjtBQUdDLFdBQUssRUFBQyxNQUhQO0FBSUMsU0FBRyxFQUFDLHdCQUpMO0FBS0MsZUFBUyxFQUFDLE1BTFg7QUFNQyxhQUFPLEVBQUUsbUJBQU07QUFDZEosa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDR0MsY0FBTSxDQUFDa0IsSUFBUCxDQUFZLEdBQVo7QUFDQTtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQVdLO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBMkIsVUFBSSxFQUFDLEVBQWhDO0FBQW1DLFlBQU0sRUFBQyxRQUExQztBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyxxRUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUVDLGtGQUF2QjtBQUF3QyxZQUFJLEVBQUMsSUFBN0M7QUFBa0QsYUFBSyxFQUFDLE9BQXhEO0FBQWdFLGtCQUFVLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBa0JBLENBakNEOztHQUFNckIsTTtVQUVVRyxxRDs7O0tBRlZILE07QUFtQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7IFxuaW1wb3J0IHsgZmFUd2l0dGVyU3F1YXJlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcblxuY29uc3QgSGVhZGVyID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmdW5jdGlvbiBmaXJlT25TY3JvbGwoKXtcblx0XHQgIGxldCB3aW5TY3JvbGwgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdCAgbGV0IGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdCAgbGV0IHNjcm9sbGVkID0gKHdpblNjcm9sbCAvIGhlaWdodCkgKiAtMTAwOyAgXG5cdFx0ICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Nyb2xsUGVyY2VudGFnZScsIHNjcm9sbGVkICsgJ3ZoJykgXG5cdFx0fVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaXJlT25TY3JvbGwpXG5cdFx0cmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaXJlT25TY3JvbGwpXG5cdH0sW10pXG5cblx0cmV0dXJuKFxuXHRcdDxoZWFkZXIgaWQ9J2hlYWRlcic+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0c3JjPScvbG9nby5qcGVnJ1xuXHRcdFx0XHRoZWlnaHQ9JzY0cHgnXG5cdFx0XHRcdHdpZHRoPSc4MHB4J1xuXHRcdFx0XHRhbHQ9XCJLLVBvcCBhbmQgQ29va2llcyBsb2dvXCJcblx0XHRcdFx0Y2xhc3NOYW1lPSdsb2dvJ1xuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKVxuXHRcdFx0ICAgIFx0cm91dGVyLnB1c2goJy8nKVxuXHRcdFx0ICAgIH19Lz5cbiAgICAgXHRcdDxhIGNsYXNzTmFtZT0ndHdpdHRlckljb24nIGhyZWY9JycgdGFyZ2V0PSdfYmxhbmsnPlxuXHQgICAgIFx0XHQ8aDM+Rm9sbG93IG1lITwvaDM+XG5cdCAgICAgXHRcdDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyU3F1YXJlfSBzaXplPSczeCcgY29sb3I9J2JsYWNrJyBiYWNrZ3JvdW5kPSdibGFjaycvPlx0ICAgICBcdFx0XHRcbiAgICAgXHRcdDwvYT5cblx0XHQ8L2hlYWRlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})