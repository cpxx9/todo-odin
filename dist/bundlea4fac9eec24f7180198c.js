/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ 354:
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
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

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ 540:
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

/***/ 56:
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

/***/ 825:
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ 113:
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/js/todo.js


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Todo = /*#__PURE__*/_createClass(function Todo() {
  _classCallCheck(this, Todo);
  this.title = arguments[0];
  this.project = 0;
  if (arguments.length > 1) {
    this.project = arguments[1];
  }
  if (arguments.length > 2) {
    this.date = arguments[2];
  }
  if (arguments.length > 3) {
    this.priority = arguments[3];
  }
  if (arguments.length > 4) {
    this.description = arguments[4];
  }
});

;// CONCATENATED MODULE: ./src/js/projects.js


function projects_typeof(o) { "@babel/helpers - typeof"; return projects_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, projects_typeof(o); }
function projects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function projects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, projects_toPropertyKey(descriptor.key), descriptor); } }
function projects_createClass(Constructor, protoProps, staticProps) { if (protoProps) projects_defineProperties(Constructor.prototype, protoProps); if (staticProps) projects_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function projects_toPropertyKey(t) { var i = projects_toPrimitive(t, "string"); return "symbol" == projects_typeof(i) ? i : String(i); }
function projects_toPrimitive(t, r) { if ("object" != projects_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != projects_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Project = /*#__PURE__*/function () {
  function Project() {
    projects_classCallCheck(this, Project);
    this.title = arguments[0];
    this.index = 0;
    this.todos = [];
    if (arguments.length > 1) {
      this.description = arguments[1];
    }
    if (arguments.length > 2) {
      this.color = arguments[2];
    }
    if (arguments.length > 3) {
      this.todos = Array.from(arguments).slice(3);
    }
  }
  projects_createClass(Project, [{
    key: "addTodo",
    value: function addTodo(todo) {
      this.todos.push(todo);
      this.todos[this.todos.length - 1].project = this.index;
      this.todos[this.todos.length - 1].currentProjectIndex = this.todos.length - 1;
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(index) {
      this.todos[index].project = 0;
      delete this.todos[index].currentProjectIndex;
      this.todos.splice(index, 1);
      this.todos.forEach(function (todo) {
        if (todo.currentProjectIndex >= index) {
          todo.currentProjectIndex--;
        }
      });
    }
  }]);
  return Project;
}();

;// CONCATENATED MODULE: ./src/img/main/edit.svg
const edit_namespaceObject = __webpack_require__.p + "edit.svg";
;// CONCATENATED MODULE: ./src/img/main/cancel.svg
const cancel_namespaceObject = __webpack_require__.p + "cancel.svg";
;// CONCATENATED MODULE: ./src/img/main/delete.svg
const delete_namespaceObject = __webpack_require__.p + "delete.svg";
;// CONCATENATED MODULE: ./src/js/domController.js




var cardArea = document.querySelector('.content-left-cards');
var projectArea = document.querySelector('.projects-wrapper');
var currentLoadedProject = 0;
function loadCards(project) {
  cardArea.innerHTML = '';
  currentLoadedProject = project.index;
  project.todos.forEach(function (todo) {
    var card = document.createElement('div');
    card.classList.add('card', 'main-card');
    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    var cardTitle = document.createElement('h3');
    cardTitle.textContent = todo.title;
    var cardPara = document.createElement('p');
    if (todo.description) {
      cardPara.textContent = todo.description;
    }
    cardContent.appendChild(cardTitle);
    if (todo.project !== 0) {
      var cardProject = document.createElement('p');
      cardProject.classList.add('card-project-title');
      cardProject.textContent = "Project: ".concat(projects[todo.project].title);
      cardContent.appendChild(cardProject);
    }
    cardContent.appendChild(cardPara);
    var cardTools = document.createElement('div');
    cardTools.classList.add('card-tools');
    var editTool = document.createElement('p');
    var editToolImg = document.createElement('img');
    editToolImg.id = 'editBtn';
    editToolImg.dataset.defaultIndex = todo.defaultProjectIndex;
    if (todo.currentProjectIndex >= 0) {
      editToolImg.dataset.currentIndex = todo.currentProjectIndex;
    }
    editToolImg.src = edit_namespaceObject;
    editTool.appendChild(editToolImg);
    var cancelTool = document.createElement('p');
    var cancelToolImg = document.createElement('img');
    cancelToolImg.id = 'cancelBtn';
    cancelToolImg.dataset.defaultIndex = todo.defaultProjectIndex;
    if (todo.currentProjectIndex >= 0) {
      cancelToolImg.dataset.currentIndex = todo.currentProjectIndex;
      cancelToolImg.dataset.currentProject = todo.project;
    }
    cancelToolImg.src = cancel_namespaceObject;
    cancelTool.appendChild(cancelToolImg);
    var deleteTool = document.createElement('p');
    var deleteToolImg = document.createElement('img');
    deleteToolImg.id = 'deleteBtn';
    deleteToolImg.dataset.defaultIndex = todo.defaultProjectIndex;
    if (todo.currentProjectIndex >= 0) {
      deleteToolImg.dataset.currentIndex = todo.currentProjectIndex;
    }
    deleteToolImg.src = delete_namespaceObject;
    deleteTool.appendChild(deleteToolImg);
    cardTools.appendChild(editTool);
    cardTools.appendChild(cancelTool);
    cardTools.appendChild(deleteTool);
    card.appendChild(cardContent);
    card.appendChild(cardTools);
    cardArea.appendChild(card);
  });
}
function loadProjects(projectArr) {
  projectArea.innerHTML = '';
  projectArr.forEach(function (project) {
    if (project.index === 0) {
      return;
    }
    var projectNav = document.createElement('p');
    projectNav.textContent = project.title;
    projectNav.dataset.projectIndex = project.index;
    projectNav.classList.add('project-nav-btn');
    projectArea.appendChild(projectNav);
  });
}

;// CONCATENATED MODULE: ./src/js/formControls.js




var currentTodo;
var editFormWrapper = document.querySelector('#editFormWrapper');
var editForm = document.querySelector('#editForm');
var pushChnageBtn = document.querySelector('#formSubmitBtn');
function formControls(todo) {
  currentTodo = todo;
  pushChnageBtn.addEventListener('click', pushTodoEdits);
  editFormWrapper.classList.add('form-open');
  if (todo) {
    loadFormOptions(todo);
    fillFormFields(editForm, todo);
  } else {
    editForm.reset();
    var formTitle = document.querySelector('#formTitle');
    formTitle.textContent = 'New todo';
  }
  var hideBtn = document.querySelector('#hideBtn');
  hideBtn.addEventListener('click', function () {
    editFormWrapper.classList.remove('form-open');
  });
}
function pushTodoEdits(e) {
  e.preventDefault();
  e.stopPropagation();
  Array.from(editForm).forEach(function (element) {
    var todoID = String(element.id).slice(4).toLowerCase();
    if (todoID === 'btn' || todoID === 'submitbtn') {
      return;
    } else if (todoID === 'project') {
      if (currentTodo.project !== 0) {
        projects[currentTodo.project].removeTodo(currentTodo.currentProjectIndex);
      }
      currentTodo.project = Number(element.value);
      if (currentTodo.project !== 0) {
        projects[currentTodo.project].addTodo(currentTodo);
      }
      // moveTodo(currentTodo, projects[Number(element.value)]);
    } else if (todoID === 'priority') {
      currentTodo[todoID] = Number(element.value);
    } else {
      currentTodo[todoID] = element.value;
    }
  });
  loadCards(projects[currentLoadedProject]);
  console.log(todos);
  console.log(projects);
  editFormWrapper.classList.remove('form-open');
}
function loadFormOptions(todo) {
  var projectFormInput = document.querySelector('#todoProject');
  var formTitle = document.querySelector('#formTitle');
  formTitle.textContent = todo.title;
  loadProjectOptions(projectFormInput);
  projectFormInput.selectedIndex = todo.project;
}
function fillFormFields(form, todo) {
  Array.from(form).forEach(function (element) {
    var todoID = String(element.id).slice(4).toLowerCase();
    if (todoID === 'btn') {
      return;
    }
    if (todo[todoID]) {
      element.value = String(todo[todoID]);
    }
  });
}
function loadProjectOptions(formSelect) {
  formSelect.innerHTML = '';
  projects.forEach(function (project) {
    var projectOption = document.createElement('option');
    projectOption.value = project.index;
    if (project.index === 0) {
      projectOption.textContent = 'Main Project';
    } else {
      projectOption.textContent = project.title;
    }
    formSelect.appendChild(projectOption);
  });
}

;// CONCATENATED MODULE: ./src/js/appController.js
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var todos = [];
var projects = [new Project('All Your', 'This is the default project')];
function createTodo() {
  var newTodo = _construct(Todo, Array.prototype.slice.call(arguments));
  todos.push(newTodo);
  newTodo.defaultProjectIndex = projects[0].todos.length;
  projects[0].todos.push(newTodo);
  if (newTodo.project <= projects.length - 1) {
    if (newTodo.project) {
      newTodo.currentProjectIndex = projects[newTodo.project].todos.length;
      projects[newTodo.project].todos.push(newTodo);
    }
  }
  loadCards(projects[currentLoadedProject]);
}
function moveTodo(todo, project) {
  projects[todo.project].todos.splice(todo.currentProjectIndex, 1);
  projects[todo.project].todos.forEach(function (newTodo) {
    if (newTodo.currentProjectIndex >= todo.currentProjectIndex) {
      newTodo.currentProjectIndex--;
    }
  });
  todo.currentProjectIndex = project.todos.length;
  project.todos.push(todo);
  todo.project = project.index;
}
function removeTodo(todo) {
  todos.splice(todo.defaultProjectIndex, 1);
  todos.forEach(function (newTodo) {
    if (newTodo.defaultProjectIndex >= todo.defaultProjectIndex) {
      newTodo.defaultProjectIndex--;
    }
  });
  projects[0].todos.splice(todo.defaultProjectIndex, 1);
  if (todo.project > 0) {
    projects[todo.project].todos.splice(todo.currentProjectIndex, 1);
    projects[todo.project].todos.forEach(function (newTodo) {
      if (newTodo.currentProjectIndex >= todo.currentProjectIndex) {
        newTodo.currentProjectIndex--;
      }
    });
  }
  loadCards(projects[currentLoadedProject]);
}
function createProject() {
  var newProject = _construct(Project, Array.prototype.slice.call(arguments));
  projects.push(newProject);
  newProject.index = projects.length - 1;
  loadProjects(projects);
}

;// CONCATENATED MODULE: ./src/img/header/bell-ring-outline.svg
const bell_ring_outline_namespaceObject = __webpack_require__.p + "bell-ring-outline.svg";
;// CONCATENATED MODULE: ./src/img/header/search.svg
const search_namespaceObject = __webpack_require__.p + "search.svg";
;// CONCATENATED MODULE: ./src/img/header/user-logo.svg
const user_logo_namespaceObject = __webpack_require__.p + "user-logo.svg";
;// CONCATENATED MODULE: ./src/img/sidebar/home.svg
const home_namespaceObject = __webpack_require__.p + "home.svg";
;// CONCATENATED MODULE: ./src/img/sidebar/main-logo.svg
const main_logo_namespaceObject = __webpack_require__.p + "main-logo.svg";
;// CONCATENATED MODULE: ./src/img/sidebar/privacy.svg
const privacy_namespaceObject = __webpack_require__.p + "privacy.svg";
;// CONCATENATED MODULE: ./src/img/sidebar/projects.svg
const sidebar_projects_namespaceObject = __webpack_require__.p + "projects.svg";
;// CONCATENATED MODULE: ./src/img/sidebar/settings.svg
const settings_namespaceObject = __webpack_require__.p + "settings.svg";
;// CONCATENATED MODULE: ./src/img/sidebar/support.svg
const support_namespaceObject = __webpack_require__.p + "support.svg";
;// CONCATENATED MODULE: ./src/img/icon-logo-github.png
const icon_logo_github_namespaceObject = __webpack_require__.p + "icon-logo-github.png";
;// CONCATENATED MODULE: ./src/img/icon-logo-instagram.png
const icon_logo_instagram_namespaceObject = __webpack_require__.p + "icon-logo-instagram.png";
;// CONCATENATED MODULE: ./src/img/icon-logo-linkedin.png
const icon_logo_linkedin_namespaceObject = __webpack_require__.p + "icon-logo-linkedin.png";
;// CONCATENATED MODULE: ./src/js/loadImages.js












function loadImages() {
  var bell = document.querySelector('#bell');
  bell.src = bell_ring_outline_namespaceObject;
  var search = document.querySelector('#search');
  search.src = search_namespaceObject;
  var userLogo = document.querySelector('#userLogo');
  userLogo.src = user_logo_namespaceObject;
  var userLogo2 = document.querySelector('#userLogo2');
  userLogo2.src = user_logo_namespaceObject;
  var home = document.querySelector('#home');
  home.src = home_namespaceObject;
  var mainLogo = document.querySelector('#mainLogo');
  mainLogo.src = main_logo_namespaceObject;
  var privacy = document.querySelector('#privacy');
  privacy.src = privacy_namespaceObject;
  var projects = document.querySelector('#projects');
  projects.src = sidebar_projects_namespaceObject;
  var settings = document.querySelector('#settings');
  settings.src = settings_namespaceObject;
  var github = document.querySelector('#github');
  github.src = icon_logo_github_namespaceObject;
  var instagram = document.querySelector('#instagram');
  instagram.src = icon_logo_instagram_namespaceObject;
  var linkedIn = document.querySelector('#linkedIn');
  linkedIn.src = icon_logo_linkedin_namespaceObject;
}

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/css/style.css
var style = __webpack_require__(189);
;// CONCATENATED MODULE: ./src/css/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const css_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/js/index.js







document.addEventListener('click', function (e) {
  var target = e.target.closest('.project-nav-btn');
  if (target) {
    var projectDOMTitle = document.querySelector('#projectTitle');
    projectDOMTitle.textContent = "".concat(projects[e.target.dataset.projectIndex].title, " Todos");
    loadCards(projects[e.target.dataset.projectIndex]);
  }
});
document.addEventListener('click', function (e) {
  var target = e.target.closest('#newTodoBtn');
  if (target) {
    formControls();
  }
});
document.addEventListener('click', function (e) {
  var target = e.target.closest('#editBtn');
  if (target) {
    formControls(todos[e.target.dataset.defaultIndex]);
  }
});
document.addEventListener('click', function (e) {
  var target = e.target.closest('#cancelBtn');
  if (target) {
    if (!e.target.dataset.currentIndex && e.target.dataset.currentIndex !== 0) {
      alert('Cannot remove from main project!\nUse delete if you would like to fully remove it!');
    } else {
      if (confirm('Are you sure you want to remove this todo from the project?')) {
        projects[e.target.dataset.currentProject].removeTodo(e.target.dataset.currentIndex);
        loadCards(projects[currentLoadedProject]);
        console.log(todos);
        console.log(projects);
      }
    }
  }
});
document.addEventListener('click', function (e) {
  var target = e.target.closest('#deleteBtn');
  if (target) {
    if (confirm('Are you sure you want to delete this todo?')) {
      removeTodo(todos[e.target.dataset.defaultIndex]);
      console.log(todos);
      console.log(projects);
    }
  }
});
createProject('Work', 'This is a test project', 'red');
createProject('Personal', 'This is a test project 1', 'green');
createTodo('Test', 1, '2022-03-17', 1, 'Test todo 1');
createTodo('Default Test', 0, '2022-03-18', 2, 'Test todo 2');
createTodo('Skip', 2, '2022-03-19', 4, 'Test todo 4');
loadImages();
loadCards(projects[0]);
loadProjects(projects);
})();

/******/ })()
;
//# sourceMappingURL=bundlea4fac9eec24f7180198c.js.map