'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var server = require('react-dom/server');
var server$1 = require('react-router-dom/server');
var reactRouterDom = require('react-router-dom');
var React$1 = require('react');
var antd = require('antd');
var _ = require('lodash');
var require$$0 = require('react-dom');
var icons = require('@ant-design/icons');
var axios = require('axios');
var cssinjs = require('@ant-design/cssinjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

const NotFoundPage = () => {
  return /*#__PURE__*/React.createElement("div", null, "404");
};
var NotFound = NotFoundPage;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var H_Input = function (props) {
    var onChange = props.onChange, _a = props.args, action = _a.action, _b = _a.element, componentOptions = _b.componentOptions, name = _b.name, form = _a.form;
    return React__default["default"].createElement(antd.Input, __assign({ disabled: action == 'view' }, componentOptions, { value: form.getFieldValue(name), onChange: onChange }));
};

var H_Select = function (props) {
    var onChange = props.onChange, _a = props.args, action = _a.action, _b = _a.element, componentOptions = _b.componentOptions, name = _b.name, form = _a.form;
    return React__default["default"].createElement(antd.Select, __assign({ showSearch: true, filterOption: function (input, option) { var _a; return ((_a = option === null || option === void 0 ? void 0 : option.label) !== null && _a !== void 0 ? _a : '').toLowerCase().includes(input.toLowerCase()); }, disabled: action == 'view', value: form.getFieldValue(name), onChange: onChange }, componentOptions));
};

var H_CheckBox = function (props) {
    var onChange = props.onChange, _a = props.args, action = _a.action, _b = _a.element, componentOptions = _b.componentOptions, name = _b.name, form = _a.form;
    return React__default["default"].createElement(antd.Checkbox.Group, __assign({ disabled: action == 'view' }, componentOptions, { value: form.getFieldValue(name), onChange: onChange }));
};

var H_Number = function (props) {
    var onChange = props.onChange, _a = props.args, action = _a.action, _b = _a.element, componentOptions = _b.componentOptions, name = _b.name, form = _a.form;
    return React__default["default"].createElement(antd.InputNumber, __assign({ disabled: action == 'view' }, componentOptions, { value: form.getFieldValue(name), onChange: onChange }));
};

var TextArea = antd.Input.TextArea;
var H_TextArea = function (props) {
    var onChange = props.onChange, _a = props.args, action = _a.action, _b = _a.element, componentOptions = _b.componentOptions, name = _b.name, form = _a.form;
    return React__default["default"].createElement(TextArea, __assign({ disabled: action == 'view' }, componentOptions, { value: form.getFieldValue(name), onChange: onChange }));
};

var H_Components = /** @class */ (function () {
    function H_Components() {
        var _this = this;
        this.init = function () {
            _this.components = {
                'input': React__default["default"].createElement(H_Input, null),
                'select': React__default["default"].createElement(H_Select, null),
                'checkbox': React__default["default"].createElement(H_CheckBox, null),
                'textArea': React__default["default"].createElement(H_TextArea, null),
                'number': React__default["default"].createElement(H_Number, null),
            };
        };
        this.setComponents = function (type, RN) {
            if (type in _this.components)
                throw new Error('组件名称重复');
            ___default["default"].set(_this.components, type, RN);
        };
        if (H_Components.instance) {
            return H_Components.instance;
        }
        this.components = void 0;
        this.init();
        H_Components.instance = this;
    }
    H_Components.prototype.getComponents = function (type, _a) {
        var args = __rest(_a, []);
        if (!type) {
            var ReactNode = this.components['input'];
            return React__default["default"].cloneElement(ReactNode, { args: args });
        }
        else {
            var ReactNode = this.components[type];
            if (!ReactNode)
                throw new Error('没有可选组件');
            return React__default["default"].cloneElement(ReactNode, { args: args });
        }
    };
    return H_Components;
}());

var renderFormItem = function (val, form, content, setContent, traceTree, action) {
    var c = new H_Components();
    var type = val.type;
    var ReactNode = c.getComponents(type, { element: val, form: form, content: content, setContent: setContent, traceTree: traceTree, action: action });
    return ReactNode;
};

var client = {};

var m = require$$0__default["default"];
if (process.env.NODE_ENV === 'production') {
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  client.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  client.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

var DataProcess = /** @class */ (function () {
    function DataProcess() {
        var _this = this;
        this.isEmpty = function (value) {
            return value === null || value === undefined;
        };
        this.getReflect = function (result, content, setContent) {
            result.forEach(function (val) {
                var target = val.target;
                if (___default["default"].get(val, 'condition')) {
                    if (target instanceof Array) {
                        target.forEach(function (ele) {
                            ___default["default"].set(_this.traceTree(ele, content), 'show', true);
                        });
                    }
                    else {
                        ___default["default"].set(_this.traceTree(target, content), 'show', true);
                    }
                }
                else {
                    if (target instanceof Array) {
                        target.forEach(function (ele) {
                            ___default["default"].set(_this.traceTree(ele, content), 'show', false);
                        });
                    }
                    else {
                        ___default["default"].set(_this.traceTree(target, content), 'show', false);
                    }
                }
            });
            console.log(content);
            setContent(function () { return ___default["default"].cloneDeep(content); });
        };
        this.setReflect = function (tree, arr) {
            if (arr === void 0) { arr = []; }
            for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
                var val = tree_1[_i];
                if (___default["default"].has(val, 'reflect') && val['reflect'] instanceof Function && ___default["default"].has(val, 'name')) {
                    arr.push({
                        name: ___default["default"].get(val, 'name', ''),
                        reflect: ___default["default"].get(val, 'reflect', function () { })
                    });
                }
                else if (val === null || val === void 0 ? void 0 : val.formList) {
                    _this.setReflect(val.formList, arr);
                }
                else if (val === null || val === void 0 ? void 0 : val.children) {
                    _this.setReflect(val.children, arr);
                }
            }
            return arr;
        };
        this.traceTree = function (name, tree) {
            for (var _i = 0, tree_2 = tree; _i < tree_2.length; _i++) {
                var val = tree_2[_i];
                if ((val === null || val === void 0 ? void 0 : val.name) === name) {
                    return val;
                }
                else if (val === null || val === void 0 ? void 0 : val.formList) {
                    var result = _this.traceTree(name, val.formList);
                    if (result) {
                        return result;
                    }
                }
                else if (val === null || val === void 0 ? void 0 : val.children) {
                    var result = _this.traceTree(name, val.children);
                    if (result) {
                        return result;
                    }
                }
            }
            return void 0;
        };
        this.reRender = function (data, tree) {
            if (!data)
                return;
            if (data instanceof Object) {
                Object.keys(data).forEach(function (val) {
                    var node = _this.traceTree(val, tree);
                    if (!_this.isEmpty(data[val])) {
                        ___default["default"].set(node, 'show', true);
                    }
                    _this.reRender(data[val], tree);
                });
            }
            if (data instanceof Array) {
                data.forEach(function (val) {
                    var node = _this.traceTree(val, tree);
                    if (!_this.isEmpty(val)) {
                        ___default["default"].set(node, 'show', true);
                    }
                    _this.reRender(val, tree);
                });
            }
        };
    }
    return DataProcess;
}());

var sleep = function (ms) {
    return new Promise(function (res) {
        setTimeout(res, ms);
    });
};
var dp$1 = new DataProcess();
var traceTree$1 = dp$1.traceTree;
var H_Modal = function (props) {
    var close = props.close, detailQuery = props.detailQuery, postQuery = props.postQuery, action = props.action, aveConfig = props.aveConfig, listQuery = props.listQuery, initialValues = props.initialValues, className = props.className, style = props.style;
    var form = antd.Form.useForm()[0];
    var _a = React$1.useState([]), content = _a[0], setContent = _a[1];
    var _b = React$1.useState(false), load = _b[0], setLoad = _b[1];
    React$1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var tree, data, _a, tree_1, tree_1_1, k, _b, _c, _d, i, componentOptions, getOptions, options, e_1_1, e_2_1, reflect, reflectList;
            var _e, e_2, _f, _g, _h, e_1, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        setLoad(true);
                        tree = ___default["default"].cloneDeep(aveConfig());
                        return [4 /*yield*/, sleep(50)];
                    case 1:
                        _l.sent();
                        if (!detailQuery) return [3 /*break*/, 3];
                        return [4 /*yield*/, detailQuery(form, setContent, dp$1.traceTree)];
                    case 2:
                        data = _l.sent();
                        dp$1.reRender(data, tree);
                        _l.label = 3;
                    case 3:
                        _l.trys.push([3, 20, 21, 26]);
                        _a = true, tree_1 = __asyncValues(tree);
                        _l.label = 4;
                    case 4: return [4 /*yield*/, tree_1.next()];
                    case 5:
                        if (!(tree_1_1 = _l.sent(), _e = tree_1_1.done, !_e)) return [3 /*break*/, 19];
                        _g = tree_1_1.value;
                        _a = false;
                        k = _g;
                        _l.label = 6;
                    case 6:
                        _l.trys.push([6, 12, 13, 18]);
                        _b = true, _c = (e_1 = void 0, __asyncValues(k.formList));
                        _l.label = 7;
                    case 7: return [4 /*yield*/, _c.next()];
                    case 8:
                        if (!(_d = _l.sent(), _h = _d.done, !_h)) return [3 /*break*/, 11];
                        _k = _d.value;
                        _b = false;
                        i = _k;
                        componentOptions = i.componentOptions;
                        if (!!___default["default"].isEmpty(componentOptions)) return [3 /*break*/, 10];
                        getOptions = componentOptions.getOptions;
                        if (!getOptions) return [3 /*break*/, 10];
                        return [4 /*yield*/, getOptions(form)];
                    case 9:
                        options = _l.sent();
                        ___default["default"].set(componentOptions, 'options', options);
                        _l.label = 10;
                    case 10:
                        _b = true;
                        return [3 /*break*/, 7];
                    case 11: return [3 /*break*/, 18];
                    case 12:
                        e_1_1 = _l.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 18];
                    case 13:
                        _l.trys.push([13, , 16, 17]);
                        if (!(!_b && !_h && (_j = _c.return))) return [3 /*break*/, 15];
                        return [4 /*yield*/, _j.call(_c)];
                    case 14:
                        _l.sent();
                        _l.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 17: return [7 /*endfinally*/];
                    case 18:
                        _a = true;
                        return [3 /*break*/, 4];
                    case 19: return [3 /*break*/, 26];
                    case 20:
                        e_2_1 = _l.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 26];
                    case 21:
                        _l.trys.push([21, , 24, 25]);
                        if (!(!_a && !_e && (_f = tree_1.return))) return [3 /*break*/, 23];
                        return [4 /*yield*/, _f.call(tree_1)];
                    case 22:
                        _l.sent();
                        _l.label = 23;
                    case 23: return [3 /*break*/, 25];
                    case 24:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 25: return [7 /*endfinally*/];
                    case 26:
                        reflect = function (name) {
                            return function (c) {
                                var x = reflectList.find(function (d) { return d.name == name; }).reflect;
                                var a = x(c)(form, tree, setContent, dp$1.traceTree);
                                dp$1.getReflect(a, tree, setContent);
                            };
                        };
                        reflectList = dp$1.setReflect(tree);
                        ___default["default"].set(H_Modal, 'args', { action: action, content: tree, form: form, setContent: setContent, traceTree: dp$1.traceTree });
                        ___default["default"].set(H_Modal, 'reflect', reflect);
                        setLoad(false);
                        setContent(function () { return ___default["default"].cloneDeep(tree); });
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var getTitle = function () {
        switch (action) {
            case 'view':
                return '查看';
            case 'add':
                return '添加';
            case 'edit':
                return '编辑';
            default:
                return '';
        }
    };
    return (React__default["default"].createElement(antd.Modal, { title: getTitle(), open: true, maskClosable: false, loading: load, onCancel: close, className: "h_modal ".concat(className), onOk: function () { return __awaiter(void 0, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(action !== 'view')) return [3 /*break*/, 2];
                        return [4 /*yield*/, postQuery(form)];
                    case 1:
                        _a.sent();
                        close();
                        listQuery();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        antd.message.error("\u64CD\u4F5C\u5931\u8D25 ".concat(new Error(err_1).message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); } },
        React__default["default"].createElement(antd.Form, { style: style, form: form, initialValues: initialValues }, content &&
            content.map(function (val, idx) {
                return React__default["default"].createElement("div", { key: idx }, (val.show === true || !___default["default"].has(val, 'show')) && React__default["default"].createElement("div", { key: idx, className: 'h_formArea', style: val === null || val === void 0 ? void 0 : val.style },
                    React__default["default"].createElement("div", { className: 'h_title' }, val.title),
                    val.formList.some(function (d) { return d.show === true || !___default["default"].has(d, 'show'); }) && React__default["default"].createElement("div", { className: 'h_modal_formlist' }, val.formList.map(function (ele, idx) {
                        var _ele = ___default["default"].omit(ele, ['componentOptions', 'reflect']);
                        return React__default["default"].createElement(React__default["default"].Fragment, { key: idx }, (ele.show === true || !___default["default"].has(ele, 'show')) && (ele.outsideForm ? React__default["default"].createElement(React__default["default"].Fragment, null,
                            " ",
                            renderFormItem(ele, form, ___default["default"].cloneDeep(content), setContent, traceTree$1, action)) :
                            React__default["default"].createElement(antd.Form.Item, __assign({ className: ele.name }, _ele), renderFormItem(ele, form, ___default["default"].cloneDeep(content), setContent, traceTree$1, action))));
                    }))));
            }))));
};
H_Modal['args'] = {};
H_Modal['reflect'] = function () { };
var create = function (options, ref) {
    var div = document.createElement('div');
    if (ref && ref.current) {
        ref.current.appendChild(div);
    }
    else {
        document.body.appendChild(div);
    }
    var root = client.createRoot(div);
    function close() {
        root.unmount();
        setTimeout(function () {
            var _a;
            if (div.parentNode) {
                (_a = ___default["default"].get(div, 'parentNode')) === null || _a === void 0 ? void 0 : _a.removeChild(div);
            }
        }, 300);
    }
    root.render(React__default["default"].createElement(H_Modal, __assign({}, options, { close: close })));
};

var copyToClipboard = function (value) {
    var link = document.createElement('input');
    document.body.appendChild(link);
    link.value = value;
    link.select();
    document.execCommand('Copy');
    document.body.removeChild(link);
    antd.message.success('已复制！');
};
var ToolTips = function (props) {
    var name = props.name;
    var _a = React$1.useState(false), show = _a[0], setShow = _a[1];
    return React__default["default"].createElement(antd.Tooltip, { placement: "topLeft", destroyTooltipOnHide: true, onOpenChange: function () {
            setShow(false);
        }, title: function () { return (React__default["default"].createElement("div", { style: {
                position: 'relative',
                paddingRight: '12px'
            } },
            name,
            !show ?
                React__default["default"].createElement("div", { style: {
                        marginLeft: '6px',
                        position: 'absolute',
                        right: 0,
                        top: '-1px'
                    } },
                    React__default["default"].createElement(icons.CopyOutlined, { onClick: function () {
                            setShow(true);
                            copyToClipboard(name);
                        } }))
                : React__default["default"].createElement("div", { style: {
                        marginLeft: '6px',
                        position: 'absolute',
                        right: 0,
                        top: '-1px',
                        color: '#00cc99'
                    } },
                    " ",
                    React__default["default"].createElement(icons.CheckOutlined, null)))); } }, name);
};

var Context = React__default["default"].createContext(undefined);
var H_Layout = function (_a) {
    var children = _a.children;
    var _b = React$1.useState(false), showMore = _b[0], setShowMore = _b[1];
    return (React__default["default"].createElement(Context.Provider, { value: { showMore: showMore, setShowMore: setShowMore } },
        React__default["default"].createElement("div", { className: "H_Layout" }, children)));
};
H_Layout['args'] = {};
H_Layout['reflectUp'] = function () { };
H_Layout['reflectDown'] = function () { };
H_Layout.Block = function (_a) {
    var children = _a.children; __rest(_a, ["children"]);
    return React__default["default"].createElement("div", { className: "block" }, children);
};
var dp = new DataProcess();
var traceTree = dp.traceTree;
H_Layout.Filter = function (props) {
    var formName = props.formName, query = props.query, initData = props.initData, filterUp = props.filterUp, filterDown = props.filterDown, options = __rest(props, ["formName", "query", "initData", "filterUp", "filterDown"]);
    var context = React$1.useContext(Context);
    var _a = React$1.useState(filterUp), up = _a[0], setUp = _a[1];
    var _b = React$1.useState(filterDown), down = _b[0], setDown = _b[1];
    var form = antd.Form.useForm()[0];
    React$1.useEffect(function () {
        var reflectListUp = dp.setReflect(filterUp);
        var reflectListDown = dp.setReflect(filterDown);
        var reflectList = ___default["default"].concat(reflectListUp, reflectListDown);
        var reflectUp = function (name) {
            return function (c) {
                var x = reflectList.find(function (d) { return d.name == name; }).reflect;
                var a = x(c)(form, up, setUp, dp.traceTree);
                dp.getReflect(a, up, setUp);
            };
        };
        var reflectDown = function (name) {
            return function (c) {
                var x = reflectList.find(function (d) { return d.name == name; }).reflect;
                var a = x(c)(form, down, setDown, dp.traceTree);
                dp.getReflect(a, down, setDown);
            };
        };
        ___default["default"].set(H_Layout, "args.".concat(formName), form);
        ___default["default"].set(H_Layout, 'reflectUp', reflectUp);
        ___default["default"].set(H_Layout, 'reflectDown', reflectDown);
        form.setFieldsValue(initData);
    }, []);
    if (!context) {
        throw new Error("H_Layout.Filter must be used within a H_Layout");
    }
    var showMore = context.showMore, setShowMore = context.setShowMore;
    var renderQuery = function (_a, idx, type) {
        var name = _a.name, cb = _a.cb, options = __rest(_a, ["name", "cb"]);
        if (type === void 0) { type = 'btn'; }
        if (type == 'btn') {
            return React__default["default"].createElement(antd.Button, __assign({}, options, { key: idx, onClick: function (e) {
                    cb(e)(form);
                } }), name);
        }
        if (type == 'a') {
            return React__default["default"].createElement("a", { key: idx, onClick: function (e) {
                    cb(e)(form);
                } }, name);
        }
    };
    return React__default["default"].createElement("div", { className: "filter" },
        React__default["default"].createElement(antd.Form, __assign({}, options, { form: form }),
            React__default["default"].createElement("div", { className: "filter_box" },
                React__default["default"].createElement("div", { className: "filter_lay" },
                    React__default["default"].createElement("div", { className: "filter_field" }, up && up.length > 0 && up.map(function (val, idx) {
                        var _val = ___default["default"].omit(val, ['componentOptions', 'reflect']);
                        return React__default["default"].createElement("div", { key: idx }, (val.show === true || !___default["default"].has(val, 'show')) && React__default["default"].createElement(antd.Form.Item, __assign({ key: idx }, _val), renderFormItem(val, form, ___default["default"].cloneDeep(up), setUp, traceTree, void 0)));
                    })),
                    React__default["default"].createElement("div", { className: "query_field" },
                        React__default["default"].createElement("div", { className: "query_btn" },
                            query && query.length > 3 ?
                                React__default["default"].createElement(React__default["default"].Fragment, null,
                                    renderQuery(query[0], '0'),
                                    renderQuery(query[1], '1'),
                                    renderQuery(query[2], '2'),
                                    React__default["default"].createElement(antd.Dropdown, { trigger: ['click'], menu: {
                                            items: (query || []).slice(3).map(function (val, idx) {
                                                return {
                                                    key: idx,
                                                    label: renderQuery(val, 'a')
                                                };
                                            })
                                        } },
                                        React__default["default"].createElement(antd.Button, { type: "text", style: { width: 64 } },
                                            React__default["default"].createElement(icons.CaretDownOutlined, null))))
                                :
                                    React__default["default"].createElement(React__default["default"].Fragment, null, query && query.map(function (val, idx) {
                                        return renderQuery(val, idx, 'btn');
                                    })),
                            down && down.length > 0 && React__default["default"].createElement(antd.Button, { type: "link", onClick: function () {
                                    setShowMore(!showMore);
                                } }, "\u66F4\u591A")))),
                showMore && down && down.length > 0 && React__default["default"].createElement("div", { className: "filter_down" },
                    React__default["default"].createElement("div", { className: "down" }, down.map(function (val, idx) {
                        var _val = ___default["default"].omit(val, ['componentOptions', 'reflect']);
                        return React__default["default"].createElement("div", { key: idx }, (val.show === true || !___default["default"].has(val, 'show')) && React__default["default"].createElement(antd.Form.Item, __assign({ key: idx }, _val), renderFormItem(val, form, ___default["default"].cloneDeep(up), setUp, traceTree, void 0)));
                    }))))));
};
H_Layout.Table = function (props) {
    var context = React$1.useContext(Context);
    if (!context) {
        throw new Error("H_Layout.Table must be used within a H_Layout");
    }
    var showMore = context.showMore;
    var ref = React$1.useRef(null);
    var _a = React$1.useState(0), scrollY = _a[0], setScrollY = _a[1];
    var columns = props.columns;
    var myColumns = React$1.useMemo(function () {
        return columns.map(function (item) {
            if (item.tooltip) {
                return __assign(__assign({}, item), { align: 'center', ellipsis: {
                        showTitle: false,
                    }, render: function (name) {
                        return (React__default["default"].createElement(ToolTips, { name: name }));
                    } });
            }
            else {
                return __assign(__assign({}, item), { align: 'center' });
            }
        });
    }, []);
    React$1.useEffect(function () {
        if (ref.current) {
            setScrollY(ref.current.offsetHeight - 70);
        }
    }, [showMore, ref.current]);
    return React__default["default"].createElement("div", { ref: ref, className: "main" },
        React__default["default"].createElement("div", { className: "main_table" },
            React__default["default"].createElement(antd.Table, __assign({ sticky: true, scroll: {
                    x: 1300,
                    y: scrollY
                } }, props, { pagination: false, columns: myColumns }))));
};
H_Layout.Footer = function (_a) {
    var _b;
    var children = _a.children, props = __rest(_a, ["children"]);
    var carry = props.carry, pageAttr = __rest(props, ["carry"]);
    return React__default["default"].createElement(React__default["default"].Fragment, null, children ? children : React__default["default"].createElement("div", { className: "footer ".concat(carry && 'carry') },
        carry &&
            React__default["default"].createElement("div", { className: "carry" }, carry),
        React__default["default"].createElement("div", { className: "page" },
            React__default["default"].createElement("div", null,
                "\u5171\u00A0", (_b = pageAttr === null || pageAttr === void 0 ? void 0 : pageAttr.total) !== null && _b !== void 0 ? _b : 0,
                "\u00A0\u6761"),
            React__default["default"].createElement(antd.Pagination, __assign({}, pageAttr)))));
};
H_Layout.useDataAjax = function (config) {
    var _a = React$1.useState(config), cc = _a[0], setCc = _a[1];
    var query = function (queryList) { return __awaiter(void 0, void 0, void 0, function () {
        var i, componentOptions, getOptions, data, e_1_1;
        var _a, queryList_1, queryList_1_1;
        var _b, e_1, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 6, 7, 12]);
                    _a = true, queryList_1 = __asyncValues(queryList);
                    _e.label = 1;
                case 1: return [4 /*yield*/, queryList_1.next()];
                case 2:
                    if (!(queryList_1_1 = _e.sent(), _b = queryList_1_1.done, !_b)) return [3 /*break*/, 5];
                    _d = queryList_1_1.value;
                    _a = false;
                    i = _d;
                    componentOptions = i.componentOptions;
                    if (!!___default["default"].isEmpty(componentOptions)) return [3 /*break*/, 4];
                    getOptions = componentOptions.getOptions;
                    if (!getOptions) return [3 /*break*/, 4];
                    return [4 /*yield*/, getOptions()];
                case 3:
                    data = _e.sent();
                    ___default["default"].set(componentOptions, 'options', data);
                    _e.label = 4;
                case 4:
                    _a = true;
                    return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_a && !_b && (_c = queryList_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(queryList_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    setCc(___default["default"].cloneDeep(cc));
                    return [2 /*return*/];
            }
        });
    }); };
    React$1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var filterUpList, filterDownList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filterUpList = cc.filterUpList, filterDownList = cc.filterDownList;
                        return [4 /*yield*/, Promise.all([query(filterUpList), query(filterDownList)])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return [cc];
};

async function getPageList(params) {
  return axios__default["default"](`/kg-economics/material/pageList`, {
    method: 'GET',
    params
  });
}
async function getDetail(params) {
  return axios__default["default"](`/kg-economics/material/detail`, {
    method: 'GET',
    params
  });
}

const aveConfig = function () {
  return [{
    title: '基础信息',
    name: 'basic',
    formList: [{
      label: '企业名称',
      name: 'enterpriseName',
      rules: [{
        required: true,
        message: ''
      }],
      type: 'select',
      reflect: function (_ref) {
        let [c, v] = _ref;
        return (form, content, setContent, traceTree) => {
          return [{
            condition: c == '起落架',
            target: 'airms_top'
          }, {
            condition: c == '电子维修',
            target: 'airf_top'
          }];
        };
      },
      componentOptions: {
        onChange: function (c, v) {
          const {
            reflect,
            args: {
              form
            }
          } = H_Modal;
          form.setFieldValue('enterpriseName', c);
          reflect('enterpriseName')(arguments);
        },
        options: [{
          label: '起落架',
          value: '起落架'
        }, {
          label: '电子维修',
          value: '电子维修'
        }]
      }
    }, {
      label: '联系人',
      name: 'contactName'
    }, {
      label: '联系电话',
      name: 'contactPhone'
    }]
  }, {
    title: '航材供应',
    name: 'airms_top',
    show: false,
    formList: [{
      label: '供应配置',
      name: 'airms',
      type: 'formList',
      btnname: '航材供应',
      children: [{
        label: '航材名称',
        name: 'materialName'
      }, {
        label: '航材类型',
        name: 'materialType'
      }, {
        label: '自制/外购',
        name: 'makeWay',
        type: 'select',
        componentOptions: {
          options: [{
            value: '1',
            label: '外部采购'
          }, {
            value: '2',
            label: '自己生产'
          }]
        }
      }, {
        label: '备注',
        name: 'remark'
      }],
      componentOptions: {
        name: 'materialSupplyList'
      }
    }]
  }, {
    title: '航材维修',
    name: 'airf_top',
    show: false,
    formList: [{
      label: '维修配置',
      name: '',
      type: 'formList',
      btnname: '航材维修',
      children: [{
        label: '维修名称',
        name: 'repairName'
      }, {
        label: '维修类型',
        name: 'repairType',
        type: 'select',
        componentOptions: {
          options: [{
            label: '起落架',
            value: '起落架'
          }, {
            label: '电子维修',
            value: '电子维修'
          }]
        }
      }, {
        label: '备注',
        name: 'remark'
      }],
      componentOptions: {
        name: 'materialRepairList'
      }
    }]
  }];
};
const detailQuery = async (form, setContent, traceTree, v) => {
  const {
    id
  } = v;
  const result = await getDetail({
    id
  });
  if (result) {
    form.setFieldsValue({
      ...result['data']
    });
  }
};
const config = query => {
  return {
    filterUpList: [{
      label: '企业名称',
      name: 'enterpriseName',
      componentOptions: {
        placeholder: 'aa'
      }
    }, {
      label: '业务类型',
      name: 'enterpriseType',
      type: 'select',
      reflect: function (_ref2) {
        let [c, v] = _ref2;
        return () => {
          return [{
            condition: c == '1',
            target: 'enterpriseName'
          }];
        };
      },
      componentOptions: {
        onChange: function () {},
        options: [{
          value: '1',
          label: '航材供应'
        }, {
          value: '2',
          label: '航材维修'
        }, {
          value: '3',
          label: '航材供应、航材维修'
        }]
      }
    }],
    filterDownList: [{
      label: '企业名称',
      name: 'enterpriseName',
      componentOptions: {
        placeholder: 'aa'
      }
    }],
    queryList: [{
      name: '查询',
      type: "primary",
      cb: function (e) {
        console.log();
        return form => {
          form.getFieldsValue();
        };
      }
    }, {
      name: '重置',
      type: "dashed",
      cb: function () {
        return form => {
          form.resetFields();
        };
      }
    }, {
      name: '添加',
      danger: true,
      cb: function () {
        return form => {
          const postQuery = async form => {
            const formValue = form.getFieldsValue();
            console.log(formValue);
            antd.message.success('添加成功！');
          };
          create({
            aveConfig,
            action: 'add',
            postQuery,
            listQuery: query,
            close: function () {},
            detailQuery: function (form, setContent, traceTree) {
              // throw new Error('Function not implemented.');
            },
            initialValues: undefined
          });
        };
      }
    }],
    col: [{
      title: '序号',
      dataIndex: 'num',
      key: 'num',
      align: 'center',
      width: 100,
      render: (value, item, index) => /*#__PURE__*/React.createElement("span", null, index + 1)
    }, {
      title: '企业名称',
      dataIndex: 'enterpriseName',
      key: 'enterpriseName',
      tooltip: true
    }, {
      title: '联系人',
      dataIndex: 'contactName',
      key: 'contactName',
      align: 'center'
    }, {
      title: '联系电话',
      dataIndex: 'contactPhone',
      key: 'contactPhone',
      align: 'center'
    }, {
      title: '业务',
      dataIndex: 'enterpriseTypeText',
      key: 'enterpriseTypeText',
      align: 'center'
    }, {
      title: '操作',
      dataIndex: 'cc',
      fixed: 'right',
      key: 'cc',
      width: '150px',
      align: 'center',
      render: (c, v) => {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: '12px',
            justifyContent: 'space-around'
          }
        }, /*#__PURE__*/React.createElement("a", {
          onClick: async () => {
            create({
              aveConfig,
              action: 'view',
              detailQuery: (form, setContent, traceTree) => detailQuery(form, setContent, traceTree, v),
              close: function () {
                throw new Error('Function not implemented.');
              },
              postQuery: function (form) {
                throw new Error('Function not implemented.');
              },
              listQuery: function () {
                throw new Error('Function not implemented.');
              },
              initialValues: undefined
            });
          }
        }, " \u67E5\u770B "), /*#__PURE__*/React.createElement("a", {
          onClick: () => {
            const postQuery = async form => {
              await form.validateFields();
              const formValue = form.getFieldsValue();
              const {
                id
              } = v;
              ___default["default"].set(formValue, 'id', id);
              formValue?.materialSupplyList?.forEach(val => {
                delete val.id;
              });
              formValue?.materialRepairList?.forEach(val => {
                delete val.id;
              });
              antd.message.success('编辑成功！');
            };
            create({
              aveConfig,
              action: 'edit',
              postQuery,
              listQuery: query,
              detailQuery: (form, setContent, traceTree) => detailQuery(form, setContent, traceTree, v),
              close: function () {
                throw new Error('Function not implemented.');
              },
              initialValues: undefined
            });
          }
        }, " \u7F16\u8F91 "), /*#__PURE__*/React.createElement(antd.Popconfirm, {
          title: "\u5220\u9664",
          description: "\u786E\u5B9A\u5220\u9664\u6B64\u9879\u5417\uFF1F",
          placement: "leftTop",
          onConfirm: async () => {
            query();
          },
          okText: "Yes",
          cancelText: "No"
        }, /*#__PURE__*/React.createElement("a", null, " \u5220\u9664 ")));
      }
    }]
  };
};

const initPage = {
  current: 1,
  size: 30
};
const Page = /*#__PURE__*/React$1.memo(props => {
  const pl = props.context.pl;
  const _records = pl[0]['pageList'].data.records.map((val, idx) => {
    return {
      ...val,
      key: idx
    };
  });
  const [load, setLoad] = React$1.useState(false);
  const [data, setData] = React$1.useState();
  const handleQuery = async params => {
    setLoad(true);
    try {
      const result = await getPageList({
        ...initPage,
        ...params
      });
      if (result) {
        const {
          data
        } = result.data;
        const {
          records,
          current,
          size,
          total
        } = data;
        const _records = records.map((val, idx) => {
          return {
            ...val,
            key: idx
          };
        });
        const _data = {
          list: _records,
          current: current,
          size: size,
          total: total
        };
        setData(() => ___default["default"].cloneDeep(_data));
      }
    } catch (error) {
      antd.message.error(new Error(error).message);
    } finally {
      setLoad(false);
    }
  };
  React$1.useEffect(() => {
    !pl && handleQuery();
    H_Layout['args']['layout'].setFieldValue('enterpriseName', '11');
  }, []);
  const [_config] = H_Layout.useDataAjax(config(handleQuery));
  const layoutDom = /*#__PURE__*/React__default["default"].createElement(H_Layout, null, /*#__PURE__*/React__default["default"].createElement(H_Layout.Block, null), /*#__PURE__*/React__default["default"].createElement(H_Layout.Filter, {
    formName: 'layout',
    query: _config.queryList,
    filterUp: _config.filterUpList,
    filterDown: _config.filterDownList
  }), /*#__PURE__*/React__default["default"].createElement(H_Layout.Block, null, "aa"), /*#__PURE__*/React__default["default"].createElement(H_Layout.Table, {
    loading: load,
    dataSource: _records || ___default["default"].get(data, 'list', []),
    columns: _config.col
  }), /*#__PURE__*/React__default["default"].createElement(H_Layout.Footer, {
    total: ___default["default"].get(data, 'total', 0),
    current: ___default["default"].get(data, 'current', initPage.current),
    pageSize: ___default["default"].get(data, 'size', initPage.size),
    onChange: (current, size) => {
      const formData = H_Layout['formStore']['layout'].getFieldsValue();
      handleQuery({
        ...formData,
        current,
        size
      });
    }
  }));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "overflow-hidden h-[calc(100vh)]"
  }, layoutDom);
});
Page.loadData = () => {
  return [{
    name: 'pageList',
    url: '/kg-economics/material/pageList',
    params: initPage,
    data: void 0
  }];
};
var Main = Page;

var routers = [{
  path: '/',
  element: /*#__PURE__*/React.createElement(Main, null),
  loadData: Main.loadData
  // children: [
  //     {
  //         path: `/dd`,
  //         element: <App />,
  //     }
  // ]
}, {
  path: '*',
  element: /*#__PURE__*/React.createElement(NotFound, null)
}];

const traceRouters = (routers, context) => {
  if (!routers) return;
  routers.forEach(val => {
    if (val.element) {
      val.element = /*#__PURE__*/React__default["default"].cloneElement(val.element, {
        context
      });
    }
    if (routers.chlidren) {
      traceRouters(routers.chlidren, context);
    }
  });
};
const AppRouters = _ref => {
  let {
    context
  } = _ref;
  traceRouters(routers, context);
  const ele = reactRouterDom.useRoutes(routers);
  return ele;
};
var AppRouters$1 = AppRouters;

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var default_config = {
  baseName: '/dqp',
  ssr: true
};

var defaultConfig = /*@__PURE__*/getDefaultExportFromCjs(default_config);

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

const FormList = props => {
  const {
    onChange,
    reflect,
    args: {
      action,
      content,
      element: {
        componentOptions,
        btnname,
        children,
        name
      },
      form,
      traceTree,
      setContent
    }
  } = props;
  return /*#__PURE__*/React.createElement(antd.Form.List, componentOptions, (fields, _ref) => {
    let {
      add,
      remove
    } = _ref;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map((_ref2, idx_f) => {
      let {
        key,
        name,
        ...restField
      } = _ref2;
      return /*#__PURE__*/React.createElement("div", {
        key: idx_f,
        className: "flex  mb-[12px] active  py-[12px] relative "
      }, action !== 'view' && /*#__PURE__*/React.createElement("div", {
        className: "flex absolute top-[27px] left-[28px]"
      }, /*#__PURE__*/React.createElement(icons.MinusCircleOutlined, {
        className: "z-10",
        onClick: () => remove(name)
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap pr-[18px]"
      }, children.map((item, idx) => {
        const _item = ___default["default"].omit(item, ['componentOptions', 'reflect']);
        return /*#__PURE__*/React.createElement("div", {
          key: idx
        }, item.show !== false && /*#__PURE__*/React.createElement(antd.Form.Item, _extends({
          key: idx
        }, _item, restField, {
          name: [name, item.name],
          label: item.label + (idx_f + 1)
        }), renderFormItem(item, form, content, setContent, traceTree, action)));
      })));
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(antd.Button, {
      danger: true,
      className: "w-full",
      type: "dashed",
      disabled: action == 'view',
      onClick: e => {
        add();
      },
      block: true,
      icon: /*#__PURE__*/React.createElement(icons.PlusOutlined, null)
    }, btnname));
  });
};

const load = () => {
  const hc = new H_Components();
  hc.setComponents('formList', /*#__PURE__*/React.createElement(FormList, null));
};

const {
  baseName
} = defaultConfig;
load();
const render = function (path) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let cache = arguments.length > 2 ? arguments[2] : undefined;
  return server.renderToString( /*#__PURE__*/React.createElement(server$1.StaticRouter, {
    basename: baseName,
    location: path
  }, /*#__PURE__*/React.createElement(cssinjs.StyleProvider, {
    cache: cache
  }, /*#__PURE__*/React.createElement(AppRouters$1, {
    context: context
  }))));
};
const matchRouters = path => {
  const matchedRoutes = reactRouterDom.matchRoutes(routers, path, baseName);
  return matchedRoutes;
};

exports.matchRouters = matchRouters;
exports.render = render;
