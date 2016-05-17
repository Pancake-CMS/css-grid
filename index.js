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
	
	var _rowAdder = __webpack_require__(1);
	
	var _rowAdder2 = _interopRequireDefault(_rowAdder);
	
	var _cssGrid = __webpack_require__(2);
	
	var _cssGrid2 = _interopRequireDefault(_cssGrid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.registerElement('row-adder', _rowAdder2.default);
	
	document.registerElement('css-grid', _cssGrid2.default);

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
	
	var RowAdder = function (_HTMLElement) {
	    _inherits(RowAdder, _HTMLElement);
	
	    function RowAdder() {
	        _classCallCheck(this, RowAdder);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RowAdder).apply(this, arguments));
	    }
	
	    _createClass(RowAdder, [{
	        key: 'attachedCallback',
	        value: function attachedCallback() {
	            this.render();
	            this.addEvents();
	        }
	    }, {
	        key: 'addEvents',
	        value: function addEvents() {
	            var _this2 = this;
	
	            this.querySelector('.settings').addEventListener('click', function () {
	                _this2.handleClick();
	            });
	
	            this.querySelector('form').addEventListener('submit', function (e) {
	                _this2.handleSubmit(e);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.innerHTML = this.getStyles() + this.renderHtml();
	            this.el = this.querySelector('.element').createShadowRoot();
	            this.renderElements();
	        }
	    }, {
	        key: 'renderElements',
	        value: function renderElements() {
	            var el = document.createElement(this.getAttribute('element'));
	            this.el.appendChild(el);
	        }
	    }, {
	        key: 'renderHtml',
	        value: function renderHtml() {
	            return '\n            <span class="settings"></span>\n            <div class="controls">\n                <form onSubmit="return false;">\n                    <span class="horizontal-contols">Grid Column Start - End : </span>\n                    <input type="text" name="grid-column-start" value="1" />\n                    <input type="text" name="grid-column-end" value="1" />\n                    <span class="vertical-contols">Grid Row Start - End : </span>\n                    <input type="text" name="grid-row-start" value="1" />\n                    <input type="text" name="grid-row-end" value="1" />\n                    <button type="submit">X</button>\n                <form>\n            </div>\n            <div class="element"></div>\n        ';
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	
	            var input = this.querySelectorAll('input');
	            var newData = {};
	            for (var i = 0; i < input.length; i++) {
	                newData[input[i].getAttribute('name')] = input[i].value;
	            }
	
	            this.querySelector('.controls').classList.remove('show-controls');
	            this.handleChange(newData);
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            return '\n            <style>\n                .settings {\n                    position: absolute;\n                    top: 0px;\n                    right: 0px;\n                    width: 20px;\n                    height: 20px;\n                    background: green;\n                }\n\n                form {\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                }\n\n                .controls {\n                    display: none;\n                }\n\n                .show-controls {\n                    display: block;\n                }\n\n                input {\n                    width: 20px;\n                }\n\n                .element /deep/ section {\n                    min-width: 20px;\n                    min-height: 20px;\n                    background: red;\n                }\n                .element /deep/ h1 {\n                    min-width: 20px;\n                    min-height: 20px;\n                    background: blue;\n                }\n            </style>\n        ';
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            this.querySelector('.controls').classList.add('show-controls');
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(newData) {
	
	            var event = new CustomEvent("gridchanged", {
	                detail: {
	                    div: this.classList,
	                    data: newData
	                },
	                bubbles: true,
	                cancelable: true
	            });
	            this.dispatchEvent(event);
	        }
	    }]);
	
	    return RowAdder;
	}(HTMLElement);
	
	exports.default = RowAdder;

/***/ },
/* 2 */
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
	            this.maxRow = 1;
	            this.el = this.createShadowRoot();
	            this.render();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.el.innerHTML = this.getStyles() + this.renderString();
	            this.addDragEvents();
	
	            if (this.addedElements.length > 0) {
	                this.renderComponents();
	            }
	        }
	    }, {
	        key: 'renderString',
	        value: function renderString() {
	            return '\n            <div class="pageArea"></div>\n            <div class="moreArea">\n                <p>Add Components Here</p>\n            </div>\n        ';
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            return '\n            <style>\n                :host {\n                    background: transparent;\n                    width: 100%;\n                    height: auto;\n                    display: block;\n                }\n\n                .pageArea {\n                    display: grid;\n                }\n\n                .moreArea {\n                    width: calc( 100% - 4px );\n                    border: 2px dashed gray;\n                    height: 100px;\n                    display: block;\n                    text-align: center;\n                    color: gray;\n                }\n\n                .showDropArea {\n                    width: calc( 100% - 10px );\n                    border: 5px dashed green;\n                }\n\n                row-adder {\n                    position: relative;\n                    display: block;\n                }\n\n\n            </style>\n        ';
	        }
	    }, {
	        key: 'addDragEvents',
	        value: function addDragEvents() {
	            var _this2 = this;
	
	            var dragEl = this.el.querySelector('.moreArea');
	
	            dragEl.addEventListener('dragend', function (e) {});
	
	            dragEl.addEventListener('drop', function (e) {
	                dragEl.classList.remove('showDropArea');
	                _this2.addNewElement(e.dataTransfer.getData('text'));
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
	        key: 'renderComponents',
	        value: function renderComponents() {
	            var _this3 = this;
	
	            for (var i = 0; i < this.addedElements.length; i++) {
	                var container = document.createElement('row-adder');
	
	                container.setAttribute('element', this.addedElements[i].name);
	                container.classList.add('div-' + i);
	
	                for (var prop in this.addedElements[i]) {
	                    container.style[prop] = this.addedElements[i][prop];
	                }
	
	                container.addEventListener('gridchanged', function (e) {
	                    _this3.updateGrid(e);
	                }, false);
	
	                this.el.querySelector('.pageArea').appendChild(container);
	            }
	        }
	    }, {
	        key: 'addNewElement',
	        value: function addNewElement(newEl) {
	
	            var maxRow = 0,
	                maxCol = 0;
	            for (var i = 0; i < this.addedElements.length; i++) {
	                if (this.addedElements[i]['grid-row-start'] > maxRow) {
	                    maxRow = this.addedElements[i]['grid-row-start'];
	                }
	
	                if (this.addedElements[i]['grid-row-end'] > maxRow) {
	                    maxRow = this.addedElements[i]['grid-row-end'];
	                }
	
	                if (this.addedElements[i]['grid-column-end'] > maxRow) {
	                    maxCol = this.addedElements[i]['grid-column-end'];
	                }
	            }
	
	            this.addedElements.push({
	                name: newEl,
	                'grid-column-start': '1',
	                'grid-column-end': parseInt(maxCol),
	                'grid-row-start': parseInt(maxRow) + 1,
	                'grid-row-end': parseInt(maxRow) + 1
	            });
	
	            this.render();
	        }
	    }, {
	        key: 'updateGrid',
	        value: function updateGrid(e) {
	            var divClass = e.detail.div[0],
	                index = divClass.split('div-')[1],
	                data = e.detail.data;
	
	            for (var prop in data) {
	                this.addedElements[index][prop] = data[prop];
	                this.el.querySelector('.' + divClass).style[prop] = data[prop];
	            }
	        }
	    }]);
	
	    return CSSGrid;
	}(HTMLElement);
	
	exports.default = CSSGrid;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTY3NmU5N2VlYjgyYWZlMmMxOGIiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yb3ctYWRkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jc3MtZ3JpZC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBR0E7Ozs7OztBQUZBLFVBQVMsZUFBVCxDQUF5QixXQUF6Qjs7QUFHQSxVQUFTLGVBQVQsQ0FBeUIsVUFBekIscUI7Ozs7OztBQ0pBOzs7Ozs7Ozs7Ozs7OztLQUVNLFE7Ozs7Ozs7Ozs7OzRDQUNrQjtBQUNoQixrQkFBSyxNQUFMO0FBQ0Esa0JBQUssU0FBTDtBQUNIOzs7cUNBRVc7QUFBQTs7QUFDUixrQkFBSyxhQUFMLENBQW1CLFdBQW5CLEVBQWdDLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUEwRCxZQUFNO0FBQzVELHdCQUFLLFdBQUw7QUFDSCxjQUZEOztBQUlBLGtCQUFLLGFBQUwsQ0FBbUIsTUFBbkIsRUFBMkIsZ0JBQTNCLENBQTRDLFFBQTVDLEVBQXNELFVBQUMsQ0FBRCxFQUFPO0FBQ3pELHdCQUFLLFlBQUwsQ0FBa0IsQ0FBbEI7QUFDSCxjQUZEO0FBR0g7OztrQ0FFUztBQUNOLGtCQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEtBQW1CLEtBQUssVUFBTCxFQUFwQztBQUNBLGtCQUFLLEVBQUwsR0FBVSxLQUFLLGFBQUwsQ0FBbUIsVUFBbkIsRUFBK0IsZ0JBQS9CLEVBQVY7QUFDQSxrQkFBSyxj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bUIsQ0FBbkIsRUFBc0IsaUJBQXRCLElBQTJDLE1BQTlDLEVBQXNEO0FBQ2xELDhCQUFTLEtBQUssYUFBTCxDQUFtQixDQUFuQixFQUFzQixpQkFBdEIsQ0FBVDtBQUNIO0FBRUo7O0FBRUQsa0JBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QjtBQUNwQix1QkFBTSxLQURjO0FBRXBCLHNDQUFzQixHQUZGO0FBR3BCLG9DQUFvQixTQUFTLE1BQVQsQ0FIQTtBQUlwQixtQ0FBbUIsU0FBUyxNQUFULElBQW1CLENBSmxCO0FBS3BCLGlDQUFpQixTQUFTLE1BQVQsSUFBbUI7QUFMaEIsY0FBeEI7O0FBUUEsa0JBQUssTUFBTDtBQUNIOzs7b0NBRVcsQyxFQUFHO0FBQ1gsaUJBQU0sV0FBVyxFQUFFLE1BQUYsQ0FBUyxHQUFULENBQWEsQ0FBYixDQUFqQjtpQkFDSSxRQUFRLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsQ0FBdkIsQ0FEWjtpQkFFSSxPQUFPLEVBQUUsTUFBRixDQUFTLElBRnBCOztBQUlBLGtCQUFJLElBQUksSUFBUixJQUFnQixJQUFoQixFQUFzQjtBQUNsQixzQkFBSyxhQUFMLENBQW1CLEtBQW5CLEVBQTBCLElBQTFCLElBQWtDLEtBQUssSUFBTCxDQUFsQztBQUNBLHNCQUFLLEVBQUwsQ0FBUSxhQUFSLENBQXNCLE1BQU0sUUFBNUIsRUFBc0MsS0FBdEMsQ0FBNEMsSUFBNUMsSUFBb0QsS0FBSyxJQUFMLENBQXBEO0FBQ0g7QUFHSjs7OztHQXhKaUIsVzs7bUJBMkpQLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDU2NzZlOTdlZWI4MmFmZTJjMThiXG4gKiovIiwiaW1wb3J0IFJvd0FkZGVyIGZyb20gJ2NvbXBvbmVudHMvcm93LWFkZGVyJztcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgncm93LWFkZGVyJywgUm93QWRkZXIpO1xuXG5pbXBvcnQgQ1NTR3JpZCBmcm9tICdjb21wb25lbnRzL2Nzcy1ncmlkJztcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnY3NzLWdyaWQnLCBDU1NHcmlkKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2VudHJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSb3dBZGRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBhdHRhY2hlZENhbGxiYWNrICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLnNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHRoaXMuZ2V0U3R5bGVzKCkgKyB0aGlzLnJlbmRlckh0bWwoKTtcbiAgICAgICAgdGhpcy5lbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmVsZW1lbnQnKS5jcmVhdGVTaGFkb3dSb290KCk7XG4gICAgICAgIHRoaXMucmVuZGVyRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICByZW5kZXJFbGVtZW50cyAoKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmdldEF0dHJpYnV0ZSgnZWxlbWVudCcpKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgcmVuZGVySHRtbCAoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldHRpbmdzXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9XCJyZXR1cm4gZmFsc2U7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG9yaXpvbnRhbC1jb250b2xzXCI+R3JpZCBDb2x1bW4gU3RhcnQgLSBFbmQgOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJncmlkLWNvbHVtbi1zdGFydFwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJncmlkLWNvbHVtbi1lbmRcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZlcnRpY2FsLWNvbnRvbHNcIj5HcmlkIFJvdyBTdGFydCAtIEVuZCA6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImdyaWQtcm93LXN0YXJ0XCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImdyaWQtcm93LWVuZFwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnRcIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQgKGUpIHtcblxuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBsZXQgbmV3RGF0YSA9IHt9O1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0RhdGFbaW5wdXRbaV0uZ2V0QXR0cmlidXRlKCduYW1lJyldID0gaW5wdXRbaV0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctY29udHJvbHMnKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UobmV3RGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0U3R5bGVzICgpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAuc2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNob3ctY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5lbGVtZW50IC9kZWVwLyBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lbGVtZW50IC9kZWVwLyBoMSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKS5jbGFzc0xpc3QuYWRkKCdzaG93LWNvbnRyb2xzJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlIChuZXdEYXRhKSB7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxuICAgICAgICAgICAgXCJncmlkY2hhbmdlZFwiLFxuICAgICAgICBcdHtcbiAgICAgICAgXHRcdGRldGFpbDoge1xuICAgICAgICBcdFx0XHRkaXYgOiB0aGlzLmNsYXNzTGlzdCxcbiAgICAgICAgXHRcdFx0ZGF0YSA6IG5ld0RhdGFcbiAgICAgICAgICAgIFx0fSxcbiAgICAgICAgICAgIFx0YnViYmxlczogdHJ1ZSxcbiAgICAgICAgXHRcdGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgXHR9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3dBZGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvcm93LWFkZGVyL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIENTU0dyaWQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgYXR0YWNoZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLm1heFJvdyA9IDE7XG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmdldFN0eWxlcygpICsgdGhpcy5yZW5kZXJTdHJpbmcoKTtcbiAgICAgICAgdGhpcy5hZGREcmFnRXZlbnRzKCk7XG5cbiAgICAgICAgaWYodGhpcy5hZGRlZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU3RyaW5nICgpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlQXJlYVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmVBcmVhXCI+XG4gICAgICAgICAgICAgICAgPHA+QWRkIENvbXBvbmVudHMgSGVyZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGdldFN0eWxlcyAoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBhZ2VBcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubW9yZUFyZWEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDRweCApO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNob3dEcm9wQXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTBweCApO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBkYXNoZWQgZ3JlZW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcm93LWFkZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBhZGREcmFnRXZlbnRzICgpIHtcbiAgICAgICAgY29uc3QgZHJhZ0VsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcubW9yZUFyZWEnKTtcblxuICAgICAgICBkcmFnRWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChlKSA9PiB7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyYWdFbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRyYWdFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93RHJvcEFyZWEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3RWxlbWVudChlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0JykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkcmFnRWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRyYWdFbC5jbGFzc0xpc3QuYWRkKCdzaG93RHJvcEFyZWEnKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBkcmFnRWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0Ryb3BBcmVhJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyYWdFbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckNvbXBvbmVudHMgKCkge1xuXG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgdGhpcy5hZGRlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncm93LWFkZGVyJyk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2VsZW1lbnQnLCB0aGlzLmFkZGVkRWxlbWVudHNbaV0ubmFtZSk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGl2LScgKyBpKTtcblxuICAgICAgICAgICAgZm9yKHZhciBwcm9wIGluIHRoaXMuYWRkZWRFbGVtZW50c1tpXSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IHRoaXMuYWRkZWRFbGVtZW50c1tpXVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2dyaWRjaGFuZ2VkJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWQoZSk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnBhZ2VBcmVhJykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE5ld0VsZW1lbnQgKG5ld0VsKSB7XG5cbiAgICAgICAgbGV0IG1heFJvdyA9IDAsXG4gICAgICAgICAgICBtYXhDb2wgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuYWRkZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5hZGRlZEVsZW1lbnRzW2ldWydncmlkLXJvdy1zdGFydCddID4gbWF4Um93KSB7XG4gICAgICAgICAgICAgICAgbWF4Um93ID0gdGhpcy5hZGRlZEVsZW1lbnRzW2ldWydncmlkLXJvdy1zdGFydCddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmFkZGVkRWxlbWVudHNbaV1bJ2dyaWQtcm93LWVuZCddID4gbWF4Um93KSB7XG4gICAgICAgICAgICAgICAgbWF4Um93ID0gdGhpcy5hZGRlZEVsZW1lbnRzW2ldWydncmlkLXJvdy1lbmQnXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5hZGRlZEVsZW1lbnRzW2ldWydncmlkLWNvbHVtbi1lbmQnXSA+IG1heFJvdykge1xuICAgICAgICAgICAgICAgIG1heENvbCA9IHRoaXMuYWRkZWRFbGVtZW50c1tpXVsnZ3JpZC1jb2x1bW4tZW5kJ107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG5ld0VsLFxuICAgICAgICAgICAgJ2dyaWQtY29sdW1uLXN0YXJ0JyA6ICcxJyxcbiAgICAgICAgICAgICdncmlkLWNvbHVtbi1lbmQnIDogcGFyc2VJbnQobWF4Q29sKSxcbiAgICAgICAgICAgICdncmlkLXJvdy1zdGFydCcgOiBwYXJzZUludChtYXhSb3cpICsgMSxcbiAgICAgICAgICAgICdncmlkLXJvdy1lbmQnIDogcGFyc2VJbnQobWF4Um93KSArIDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVHcmlkIChlKSB7XG4gICAgICAgIGNvbnN0IGRpdkNsYXNzID0gZS5kZXRhaWwuZGl2WzBdLFxuICAgICAgICAgICAgaW5kZXggPSBkaXZDbGFzcy5zcGxpdCgnZGl2LScpWzFdLFxuICAgICAgICAgICAgZGF0YSA9IGUuZGV0YWlsLmRhdGE7XG5cbiAgICAgICAgZm9yKHZhciBwcm9wIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRFbGVtZW50c1tpbmRleF1bcHJvcF0gPSBkYXRhW3Byb3BdO1xuICAgICAgICAgICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuJyArIGRpdkNsYXNzKS5zdHlsZVtwcm9wXSA9IGRhdGFbcHJvcF07XG4gICAgICAgIH1cblxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDU1NHcmlkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9jc3MtZ3JpZC9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=