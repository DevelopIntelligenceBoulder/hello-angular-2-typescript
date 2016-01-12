# hello-angular-2-typescript
A simple example of Hello World in [Angular 2.x](https://angular.io/) coded in [Microsoft's TypeScript](http://www.typescriptlang.org/). Here is a [repo](https://github.com/DevelopIntelligenceBoulder/hello-angular-2) with abasic example of Angular 2 without Typescript.

Somethings to know:


1. This utilizes the [SystemJS](https://github.com/systemjs/systemjs) module loader
  * npm install systemjs
2. This utilizes [RxJS](https://github.com/ReactiveX/RxJS) for Observables 
  * npm install rxjs
3. This utilizes Angular 2 beta [Angular 2.x](https://code.angularjs.org/)
  * npm install angular2
4. [Angular 2.x developer documentation](https://angular.io/)

## What is this?
This example shows how to take a model property defined in an Angular 2.x Component and populate it within an Angular view.

### Within the hello.ts
This TypeScript file imports the pieces of Angular 2.x that will be utilized to build our component. These are based on ES6 module imports. Hence the need for SystemJS to load the modules.

A component annotation is attached to the JavaScript class, marking it as an Angular component and allowing us to specify its custom tag selector and its associate template.

A model property place has been added to the component instance via `this`. Why? Components in Angular 2.0 are simply objects created via constructors.

The main Angular module is bootstrapped, linking the DOM and the JavaScript of the component. Angular 2 does not bootstrap the application for us.

### Within the index.html
An Angular component is placed within the DOM.

The module to load via SystemJS is specified (i.e. `components/hello.js`)


## Instructions 
1. Install [NodeJS](https://nodejs.org/) 
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. Angular and Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src` in your web browser

## How to utilize the TypeScript Compiler
This application was created via [WebStorm](https://www.jetbrains.com/webstorm/) on OSx

1. You will need to get TypeScript installed on WebStorm
    * TypeScript will be installed via NPM (i.e. the NodeJS Package Manager)
    * Run `npm install -g typescript` to install TypeScript globally
    * Run `tsc -v` to see what version of TypeScript was installed ... it should be over version 1.5
2. Get WebStorm to utilize TypeScript for compilation
    * Go to `Preferences > Languages & Frameworks > TypeScript` and select enable TypeScript compiler click `enable`
    * Modify the TypeScript compiler options `-m commonjs -t es5` allowing us to use CommonJS modular format and output into ECMAScript 5
    * When WebStorm asks if you want to enable the TypeScript compiler say yes
    
##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on Angular](http://www.developintelligence.com/catalog/web-development-training/angularjs). Check out [Advanced AngularJS](http://www.developintelligence.com/catalog/web-development-training/angularjs/advanced-angularjs-development) or the [AngularJS Boot Camp](http://www.developintelligence.com/catalog/web-development-training/angularjs/angularjs-boot-camp) to get your team up to speed.

