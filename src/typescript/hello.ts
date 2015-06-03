/**
 * Angular 2.x component written in TypeScript.
 * Imports Component and View Angular Annotations
 * Imports Angular bootstrapping to load the Hello Component.
 *
 * See the generated/compiled code within ../components/hello.js
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'di-hello'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
//Creating HelloComponent via Typescript Class syntax
class HelloComponent {
    //Defining name model property as a string
    name: string;

    //Constructor utilized to define model properties
    constructor() {
        this.name = 'World';
    }
}

//Bootstrapping main Angular Component
bootstrap(HelloComponent);