import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ExampleOneComponent } from './example-one/example-one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private primengConfig: PrimeNGConfig,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  @ViewChild('overlayPanel', { static: true }) overlayPanel: OverlayPanel;
  @ViewChild('overlayContainer', { read: ViewContainerRef, static: true })
  overlayContainer: ViewContainerRef;
  dynamicComponent: any;
  // ...

  ngOnInit() {}

  showOverlay(event: MouseEvent) {
    if (this.dynamicComponent) {
      return;
    }
    this.dynamicComponent = this.createComponent(
      ExampleOneComponent,
      this.overlayContainer
    );
    this.overlayPanel.toggle(event, event.target);
  }
  hideOverlay(event: MouseEvent) {
    this.dynamicComponent = undefined;
    this.overlayPanel.toggle(event);
  }

  createComponent(componentType: any, viewContainerRef: ViewContainerRef): any {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    return componentRef.instance;
  }
}
