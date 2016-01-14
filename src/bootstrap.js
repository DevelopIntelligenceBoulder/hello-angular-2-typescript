/**
 * Angular 2.x component bootstrapping.
 * Imports Angular bootstrapping to load the Hello Component.
 */
var browser_1 = require("angular2/platform/browser");
var hello_js_1 = require("./components/hello.js");
//Bootstrapping main Angular Component
browser_1.bootstrap(hello_js_1.HelloComponent);
