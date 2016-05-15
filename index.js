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
	            this.elements = [];
	            this.elements.push({
	                name: this.getAttribute('element'),
	                gridColumn: '1 / last-line',
	                gridRow: '1 / 1'
	            });
	            //this.el = this.createShadowRoot();
	            this.render();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.innerHTML = this.renderStyles();
	            this.renderElements();
	        }
	    }, {
	        key: 'renderElements',
	        value: function renderElements() {
	            for (i = 0; i < this.elements.length; i++) {
	                var el = document.createElement(this.elements[i].name);
	                this.appendChild(el);
	            }
	        }
	    }, {
	        key: 'renderStyles',
	        value: function renderStyles() {
	            var styles = '<style>\n';
	
	            for (i = 0; i < this.elements.length; i++) {
	                styles += '' + this.elements[i].name + ' {\n' + '\tgrid-column: ' + this.elements[i].gridColumn + ';\n' + '\tgrid-row: ' + this.elements[i].gridRow + ';\n' + '}\n';
	            }
	
	            styles += '</style>';
	
	            return styles;
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
	            return '\n            <div class="moreArea">\n                <span>Add Components Here</span>\n            </div>\n        ';
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            return '\n            <style>\n                :host {\n                    background: transparent;\n                    width: 100%;\n                    height: auto;\n                    display: block;\n                }\n                \n                .moreArea {\n                    width: calc( 100% - 4px );\n                    border: 2px dashed gray;\n                    height: 100px;\n                    display: block;\n                    text-align: center;\n                    color: gray;\n                }\n                \n                .showDropArea {\n                    width: calc( 100% - 10px );\n                    border: 5px dashed green;\n                }\n                \n                section {\n                    min-width: 20px;\n                    min-height: 20px;\n                    background: red;\n                }\n                h1 {\n                    min-width: 20px;\n                    min-height: 20px;\n                    background: blue;\n                }\n            </style>\n        ';
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
	            var container = document.createElement('row-adder');
	
	            container.setAttribute('element', newEl);
	            target.parentNode.insertBefore(container, target);
	        }
	    }]);
	
	    return CSSGrid;
	}(HTMLElement);
	
	exports.default = CSSGrid;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWZmZGVjNjdlOTY0MTY3OGNiMzEiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yb3ctYWRkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jc3MtZ3JpZC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBR0E7Ozs7OztBQUZBLFVBQVMsZUFBVCxDQUF5QixXQUF6Qjs7QUFHQSxVQUFTLGVBQVQsQ0FBeUIsVUFBekIscUI7Ozs7OztBQ0pBOzs7Ozs7Ozs7Ozs7OztLQUVNLFE7Ozs7Ozs7Ozs7OzRDQUNrQjtBQUNoQixrQkFBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0Esa0JBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUI7QUFDZix1QkFBTSxLQUFLLFlBQUwsQ0FBa0IsU0FBbEIsQ0FEUztBQUVmLDZCQUFZLGVBRkc7QUFHZiwwQkFBUztBQUhNLGNBQW5COztBQU1BLGtCQUFLLE1BQUw7QUFDSDs7O2tDQUVTO0FBQ04sa0JBQUssU0FBTCxHQUFpQixLQUFLLFlBQUwsRUFBakI7QUFDQSxrQkFBSyxjQUFMO0FBQ0g7OzswQ0FFaUI7QUFDZCxrQkFBSSxJQUFJLENBQVIsRUFBWSxJQUFJLEtBQUssUUFBTCxDQUFjLE1BQTlCLEVBQXNDLEdBQXRDLEVBQTJDO0FBQ3ZDLHFCQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsSUFBeEMsQ0FBWDtBQUNBLHNCQUFLLFdBQUwsQ0FBaUIsRUFBakI7QUFDSDtBQUNKOzs7d0NBRWU7QUFDWixpQkFBSSxTQUFTLFdBQWI7O0FBRUEsa0JBQUksSUFBSSxDQUFSLEVBQVksSUFBSSxLQUFLLFFBQUwsQ0FBYyxNQUE5QixFQUFzQyxHQUF0QyxFQUEyQztBQUN2QywyQkFBVSxLQUFLLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsSUFBdEIsR0FBNkIsTUFBN0IsR0FDRSxpQkFERixHQUNzQixLQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLFVBRHZDLEdBQ29ELEtBRHBELEdBRUUsY0FGRixHQUVtQixLQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLE9BRnBDLEdBRThDLEtBRjlDLEdBR0UsS0FIWjtBQUlIOztBQUVELHVCQUFVLFVBQVY7O0FBRUEsb0JBQU8sTUFBUDtBQUNIOzs7O0dBckNrQixXOzttQkF3Q1IsUTs7Ozs7O0FDMUNmOzs7Ozs7Ozs7Ozs7OztLQUVNLE87Ozs7Ozs7Ozs7OzRDQUNrQjtBQUNoQixrQkFBSyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0Esa0JBQUssRUFBTCxHQUFVLEtBQUssZ0JBQUwsRUFBVjtBQUNBLGtCQUFLLE1BQUw7QUFDQSxrQkFBSyxhQUFMO0FBQ0g7OztrQ0FFUztBQUNOLGtCQUFLLEVBQUwsQ0FBUSxTQUFSLEdBQW9CLEtBQUssU0FBTCxLQUFtQixLQUFLLFlBQUwsRUFBdkM7QUFDSDs7O3dDQUVlO0FBQ1o7QUFLSDs7O3FDQUVZO0FBQ1Q7QUFtQ0g7Ozt5Q0FFZ0I7QUFBQTs7QUFDYixpQkFBTSxTQUFTLEtBQUssRUFBTCxDQUFRLGFBQVIsQ0FBc0IsV0FBdEIsQ0FBZjs7QUFFQSxvQkFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDLENBQUQsRUFBTyxDQUN6QyxDQUREOztBQUdBLG9CQUFPLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFVBQUMsQ0FBRCxFQUFPO0FBQ25DLHdCQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsY0FBeEI7QUFDQSx3QkFBSyxhQUFMLENBQW1CLEVBQUUsWUFBRixDQUFlLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBbkIsRUFBbUQsRUFBRSxNQUFyRDtBQUNILGNBSEQ7O0FBS0Esb0JBQU8sZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQyxDQUFELEVBQU87QUFDeEMsd0JBQU8sU0FBUCxDQUFpQixHQUFqQixDQUFxQixjQUFyQjtBQUNBLG1CQUFFLGNBQUY7QUFDSCxjQUhEOztBQUtBLG9CQUFPLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLFVBQUMsQ0FBRCxFQUFPO0FBQ3hDLHdCQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsY0FBeEI7QUFDSCxjQUZEOztBQUlBLG9CQUFPLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLFVBQUMsQ0FBRCxFQUFPO0FBQ3ZDLG1CQUFFLGNBQUY7QUFDSCxjQUZEO0FBR0g7Ozt1Q0FFYyxLLEVBQU8sTSxFQUFRO0FBQzFCLGlCQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFdBQXZCLENBQWhCOztBQUVBLHVCQUFVLFlBQVYsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEM7QUFDQSxvQkFBTyxVQUFQLENBQWtCLFlBQWxCLENBQStCLFNBQS9CLEVBQTBDLE1BQTFDO0FBQ0g7Ozs7R0F4RmlCLFc7O21CQTJGUCxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxZmZkZWM2N2U5NjQxNjc4Y2IzMVxuICoqLyIsImltcG9ydCBSb3dBZGRlciBmcm9tICdjb21wb25lbnRzL3Jvdy1hZGRlcic7XHJcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgncm93LWFkZGVyJywgUm93QWRkZXIpO1xyXG5cclxuaW1wb3J0IENTU0dyaWQgZnJvbSAnY29tcG9uZW50cy9jc3MtZ3JpZCc7XHJcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnY3NzLWdyaWQnLCBDU1NHcmlkKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2VudHJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgUm93QWRkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBhdHRhY2hlZENhbGxiYWNrICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5nZXRBdHRyaWJ1dGUoJ2VsZW1lbnQnKSxcclxuICAgICAgICAgICAgZ3JpZENvbHVtbjogJzEgLyBsYXN0LWxpbmUnLFxyXG4gICAgICAgICAgICBncmlkUm93OiAnMSAvIDEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy90aGlzLmVsID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHRoaXMucmVuZGVyU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJFbGVtZW50cygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXJFbGVtZW50cyAoKSB7XHJcbiAgICAgICAgZm9yKGkgPSAwIDsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudHNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyU3R5bGVzICgpIHtcclxuICAgICAgICB2YXIgc3R5bGVzID0gJzxzdHlsZT5cXG4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihpID0gMCA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0eWxlcyArPSAnJyArIHRoaXMuZWxlbWVudHNbaV0ubmFtZSArICcge1xcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFx0Z3JpZC1jb2x1bW46ICcgKyB0aGlzLmVsZW1lbnRzW2ldLmdyaWRDb2x1bW4gKyAnO1xcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFx0Z3JpZC1yb3c6ICcgKyB0aGlzLmVsZW1lbnRzW2ldLmdyaWRSb3cgKyAnO1xcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnfVxcbic7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzdHlsZXMgKz0gJzwvc3R5bGU+JztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc3R5bGVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3dBZGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvcm93LWFkZGVyL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jbGFzcyBDU1NHcmlkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgYXR0YWNoZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5lbCA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGREcmFnRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmdldFN0eWxlcygpICsgdGhpcy5yZW5kZXJTdHJpbmcoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyU3RyaW5nICgpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9yZUFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkFkZCBDb21wb25lbnRzIEhlcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0eWxlcyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vcmVBcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDRweCApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc2hvd0Ryb3BBcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDEwcHggKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBkYXNoZWQgZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZERyYWdFdmVudHMgKCkge1xyXG4gICAgICAgIGNvbnN0IGRyYWdFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLm1vcmVBcmVhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZSkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRyYWdFbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZHJhZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dEcm9wQXJlYScpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5ld0VsZW1lbnQoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpLCBlLnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRyYWdFbC5jbGFzc0xpc3QuYWRkKCdzaG93RHJvcEFyZWEnKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRyYWdFbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkcmFnRWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0Ryb3BBcmVhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHJhZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGROZXdFbGVtZW50IChuZXdFbCwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Jvdy1hZGRlcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2VsZW1lbnQnLCBuZXdFbCk7XHJcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgdGFyZ2V0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ1NTR3JpZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbXBvbmVudHMvY3NzLWdyaWQvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9