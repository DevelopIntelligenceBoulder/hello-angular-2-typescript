/**
 * Angular 2.x component written in TypeScript.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'di-hello'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
class HelloComponent {
    name: string;

    constructor() {
        this.name = 'World';
    }
}

bootstrap(HelloComponent);