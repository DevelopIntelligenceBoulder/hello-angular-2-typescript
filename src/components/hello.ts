/**
 * Angular 2.x component written in TypeScript.
 * Imports Component and View Angular Annotations
 *
 * See the generated/compiled code within ../components/hello.js
 */
import { Component } from "angular2/core";

@Component({
    selector: 'di-hello',
    template: '<h1>Hello {{ name }}</h1>'
})
//Creating HelloComponent via Typescript Class syntax
export class HelloComponent {
    //Defining name model property as a string
    name: string;

    //Constructor utilized to define model properties
    constructor() {
        this.name = 'World';
    }
}
