/**
 * Angular 2.x component bootstrapping.
 * Imports Angular bootstrapping to load the Hello Component.
 */

import { bootstrap } from "angular2/platform/browser";
import { HelloComponent } from "./components/hello.js";

//Bootstrapping main Angular Component
bootstrap(HelloComponent);
