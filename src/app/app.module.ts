import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockDigitalComponent } from './clock-digital/clock-digital.component';
import { ThemeManagerComponent } from './theme-manager/theme-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockDigitalComponent,
    ThemeManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
