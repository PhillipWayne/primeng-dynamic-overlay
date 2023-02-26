import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule,
    ButtonModule,
    RippleModule,
    OverlayPanelModule,
    ChartModule,
    InputTextModule,
  ],
  declarations: [AppComponent, ExampleOneComponent, ExampleTwoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
