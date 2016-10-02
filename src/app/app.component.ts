
// Based on
// https://www.lucidchart.com/techblog/2016/07/19/building-angular-2-components-on-the-fly-a-dialog-box-example/

import { Component } from '@angular/core';

import '../../public/css/styles.css';
import { DialogComponent } from "./dialog.component";
import { ComponentLoaderAnchorDirective } from "./component-loader-anchor.directive";
import { ViewChild } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <main>
            <h1>Hello</h1>
            
            <textarea [(ngModel)]="jsonValue"></textarea>
            
            <pre>{{ jsonValue | json }}</pre>
            
            <div componentLoaderAnchor></div>
            <!--Componentes se insertan aqui-->
            
        </main>
    `,
    //templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    entryComponents: [DialogComponent]
})
export class AppComponent {

    @ViewChild(ComponentLoaderAnchorDirective) componentLoaderAnchor: ComponentLoaderAnchorDirective;

    json = [{}];

    get jsonValue () {
        return JSON.stringify(this.json);//, null, 4);
    }

    set jsonValue (v) {
        try {
            this.json = JSON.parse(v);
            this.createComponents();
        }
        catch(e) {
            console.log('JSON invalido.', v);
        }
    }

    createComponents() {
        if (!this.json instanceof Array) {
            console.log('JSON no es arreglo.');
        }

        for (var i = 0; i < this.json.length; i++) {
            var obj = this.json[i];

            let id = obj['id'];
            let model = obj['model'];
            let options = obj['options'] || {};

            let component;
            switch (model) {
                case 'texto':   component = DialogComponent;  break;
                case 'numero':  component = DialogComponent;  break;
                case 'color':   component = DialogComponent;  break;
                default:        component = DialogComponent;
            }

            this.componentLoaderAnchor.createCustomComponent(component, id, options);
        }
    }

}
