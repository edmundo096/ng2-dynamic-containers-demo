import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentLoaderAnchorDirective } from "./component-loader-anchor.directive";
import { DialogComponent } from "./dialog.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DialogComponent,
        ComponentLoaderAnchorDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
