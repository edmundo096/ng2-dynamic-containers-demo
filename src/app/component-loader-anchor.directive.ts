import { Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { DialogComponent } from "./dialog.component";

@Directive({
    selector: '[componentLoaderAnchor]'
})
export class ComponentLoaderAnchorDirective {

    constructor(
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    createCustomComponent(
            dialogComponent: { new(): DialogComponent },
            id: string,
            options: {}
        ): ComponentRef<DialogComponent> {

            // Limpiar
            this.viewContainer.clear();

            // Obtener componente
            let dialogComponentFactory =
                this.componentFactoryResolver.resolveComponentFactory(dialogComponent);

            // Construir componente
            let dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);


            // Configurar enlaces (ej. evento on close).
            dialogComponentRef.instance.close.subscribe(() => {
                dialogComponentRef.destroy();
            });

            return dialogComponentRef;
    }
}