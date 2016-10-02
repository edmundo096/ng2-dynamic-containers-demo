
// TODO sin terminar, primer intento de componente personalizado

import { Component, EventEmitter } from "@angular/core";

@Component({
    selector: 'texto-component',
    template: `
    <p>{{ texto }}</p>
    `
})
export class TextoComponent {
    close = new EventEmitter();

    onClickedExit() {
        this.close.emit('event');
    }
}