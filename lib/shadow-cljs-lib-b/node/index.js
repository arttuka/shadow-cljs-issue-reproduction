"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shadowCljsLibA = require("shadow-cljs-lib-a");

Object.keys(_shadowCljsLibA).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _shadowCljsLibA[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _shadowCljsLibA[key];
    }
  });
});

var _foo = require("shadow-cljs-lib-a/foo");

Object.keys(_foo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _foo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foo[key];
    }
  });
});