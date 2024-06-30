'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var server = require('react-dom/server');
var server$1 = require('react-router-dom/server');
var reactRouterDom = require('react-router-dom');
var antd = require('antd');
var React$1 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

var App = function App() {
  return /*#__PURE__*/React.createElement("div", null, "app");
};
var App$1 = App;

var Login = function Login() {
  return /*#__PURE__*/React.createElement("div", null, "home", /*#__PURE__*/React.createElement(antd.Button, {
    onClick: function onClick() {
      console.log(1);
    }
  }, "asadddddas"), /*#__PURE__*/React.createElement(reactRouterDom.Outlet, null));
};
var Login$1 = Login;

var routers = [{
  path: '/',
  element: /*#__PURE__*/React.createElement(Login$1, null),
  children: [{
    path: "/dd",
    element: /*#__PURE__*/React.createElement(App$1, null)
  }]
}
// {
//     path: '*',
//     element: <NotFound />
// }
];

var AppRouters = function AppRouters() {
  var ele = reactRouterDom.useRoutes(routers);
  return ele;
};
var AppRouters$1 = AppRouters;

var render = function render(path) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return server.renderToString( /*#__PURE__*/React__default["default"].createElement(server$1.StaticRouter, {
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
