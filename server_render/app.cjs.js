'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var server = require('react-dom/server');
var server$1 = require('react-router-dom/server');
var reactRouterDom = require('react-router-dom');
var React$1 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

var App = function App() {
  return /*#__PURE__*/React.createElement("div", null, "app");
};
var App$1 = App;

var Login = function Login() {
  return /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement(reactRouterDom.Outlet, null));
};
var Login$1 = Login;

var NotFoundPage = function NotFoundPage() {
  return /*#__PURE__*/React.createElement("div", null, "404");
};
var NotFound = NotFoundPage;

var routers = [{
  path: '/',
  element: /*#__PURE__*/React.createElement(Login$1, null),
  children: [{
    path: "/dd",
    element: /*#__PURE__*/React.createElement(App$1, null)
  }]
}, {
  path: '*',
  element: /*#__PURE__*/React.createElement(NotFound, null)
}];

var AppRouters = function AppRouters() {
  var ele = reactRouterDom.useRoutes(routers);
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

var baseName = defaultConfig.baseName;
var render = function render(path) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return server.renderToString( /*#__PURE__*/React__default["default"].createElement(server$1.StaticRouter, {
    basename: baseName,
    location: path,
    context: context
  }, /*#__PURE__*/React__default["default"].createElement(AppRouters$1, null)));
};
var matchRouters = function matchRouters(path) {
  var matchedRoutes = reactRouterDom.matchRoutes(routers, path);
  return matchedRoutes;
};

exports.matchRouters = matchRouters;
exports.render = render;
