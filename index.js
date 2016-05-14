/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _CSSGrid = __webpack_require__(1);
	
	var _CSSGrid2 = _interopRequireDefault(_CSSGrid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.registerElement('css-grid', _CSSGrid2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CSSGrid = function (_HTMLElement) {
	    _inherits(CSSGrid, _HTMLElement);
	
	    function CSSGrid() {
	        _classCallCheck(this, CSSGrid);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CSSGrid).apply(this, arguments));
	    }
	
	    _createClass(CSSGrid, [{
	        key: 'attachedCallback',
	        value: function attachedCallback() {
	            this.addedElements = [];
	            this.el = this.createShadowRoot();
	            this.render();
	            this.addDragEvents();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.el.innerHTML = this.getStyles() + this.renderString();
	        }
	    }, {
	        key: 'renderString',
	        value: function renderString() {
	            return '\n            <div>{this.addedElements}</div>\n            <div class="moreArea">\n                <span>Add Components Here</span>\n            </div>\n        ';
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            return '\n            <style>\n                :host {\n                    background: transparent;\n                    width: 100%;\n                    height: auto;\n                    display: block;\n                }\n                \n                .moreArea {\n                    width: calc( 100% - 4px );\n                    border: 2px dashed gray;\n                    height: 100px;\n                    display: block;\n                    text-align: center;\n                    color: gray;\n                }\n                \n                .showDropArea {\n                    width: calc( 100% - 10px );\n                    border: 5px dashed green;\n                }\n            </style>\n        ';
	        }
	    }, {
	        key: 'addDragEvents',
	        value: function addDragEvents() {
	            var _this2 = this;
	
	            var dragEl = this.el.querySelector('.moreArea');
	
	            dragEl.addEventListener('dragend', function (e) {});
	
	            dragEl.addEventListener('drop', function (e) {
	                dragEl.classList.remove('showDropArea');
	                _this2.addNewElement(e.dataTransfer.getData('text'), e.target);
	            });
	
	            dragEl.addEventListener('dragenter', function (e) {
	                dragEl.classList.add('showDropArea');
	                e.preventDefault();
	            });
	
	            dragEl.addEventListener('dragleave', function (e) {
	                dragEl.classList.remove('showDropArea');
	            });
	
	            dragEl.addEventListener('dragover', function (e) {
	                e.preventDefault();
	            });
	        }
	    }, {
	        key: 'addNewElement',
	        value: function addNewElement(newEl, target) {
	            var element = document.createElement(newEl);
	            target.parentNode.insertBefore(element, target);
	        }
	    }]);
	
	    return CSSGrid;
	}(HTMLElement);
	
	exports.default = CSSGrid;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGZhZjk3MzkzNjc2ODRlNDIzY2MiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DU1NHcmlkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUNBLFVBQVMsZUFBVCxDQUF5QixVQUF6QixxQjs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7O0tBRU0sTzs7Ozs7Ozs7Ozs7NENBQ2tCO0FBQ2hCLGtCQUFLLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxrQkFBSyxFQUFMLEdBQVUsS0FBSyxnQkFBTCxFQUFWO0FBQ0Esa0JBQUssTUFBTDtBQUNBLGtCQUFLLGFBQUw7QUFDSDs7O2tDQUVTO0FBQ04sa0JBQUssRUFBTCxDQUFRLFNBQVIsR0FBb0IsS0FBSyxTQUFMLEtBQW1CLEtBQUssWUFBTCxFQUF2QztBQUNIOzs7d0NBRWU7QUFDWjtBQU1IOzs7cUNBRVk7QUFDVDtBQXdCSDs7O3lDQUVnQjtBQUFBOztBQUNiLGlCQUFNLFNBQVMsS0FBSyxFQUFMLENBQVEsYUFBUixDQUFzQixXQUF0QixDQUFmOztBQUVBLG9CQUFPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUMsQ0FBRCxFQUFPLENBQ3pDLENBREQ7O0FBR0Esb0JBQU8sZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBQyxDQUFELEVBQU87QUFDbkMsd0JBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixjQUF4QjtBQUNBLHdCQUFLLGFBQUwsQ0FBbUIsRUFBRSxZQUFGLENBQWUsT0FBZixDQUF1QixNQUF2QixDQUFuQixFQUFtRCxFQUFFLE1BQXJEO0FBQ0gsY0FIRDs7QUFLQSxvQkFBTyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDLENBQUQsRUFBTztBQUN4Qyx3QkFBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGNBQXJCO0FBQ0EsbUJBQUUsY0FBRjtBQUNILGNBSEQ7O0FBS0Esb0JBQU8sZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQyxDQUFELEVBQU87QUFDeEMsd0JBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixjQUF4QjtBQUNILGNBRkQ7O0FBSUEsb0JBQU8sZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBQyxDQUFELEVBQU87QUFDdkMsbUJBQUUsY0FBRjtBQUNILGNBRkQ7QUFHSDs7O3VDQUVjLEssRUFBTyxNLEVBQVE7QUFDMUIsaUJBQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLG9CQUFPLFVBQVAsQ0FBa0IsWUFBbEIsQ0FBK0IsT0FBL0IsRUFBd0MsTUFBeEM7QUFDSDs7OztHQTVFaUIsVzs7bUJBK0VQLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhmYWY5NzM5MzY3Njg0ZTQyM2NjXG4gKiovIiwiaW1wb3J0IENTU0dyaWQgZnJvbSAnY29tcG9uZW50cy9DU1NHcmlkJztcclxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdjc3MtZ3JpZCcsIENTU0dyaWQpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZW50cnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCdcclxuXHJcbmNsYXNzIENTU0dyaWQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBhdHRhY2hlZENhbGxiYWNrICgpIHtcclxuICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVsID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmFkZERyYWdFdmVudHMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuZ2V0U3R5bGVzKCkgKyB0aGlzLnJlbmRlclN0cmluZygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXJTdHJpbmcgKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXY+e3RoaXMuYWRkZWRFbGVtZW50c308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmVBcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgQ29tcG9uZW50cyBIZXJlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRTdHlsZXMgKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tb3JlQXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA0cHggKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnNob3dEcm9wQXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxMHB4ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggZGFzaGVkIGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZERyYWdFdmVudHMgKCkge1xyXG4gICAgICAgIGNvbnN0IGRyYWdFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLm1vcmVBcmVhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZSkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRyYWdFbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZHJhZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dEcm9wQXJlYScpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5ld0VsZW1lbnQoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpLCBlLnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRyYWdFbC5jbGFzc0xpc3QuYWRkKCdzaG93RHJvcEFyZWEnKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRyYWdFbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkcmFnRWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0Ryb3BBcmVhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGROZXdFbGVtZW50IChuZXdFbCwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsKTtcclxuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGFyZ2V0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ1NTR3JpZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvQ1NTR3JpZC9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=