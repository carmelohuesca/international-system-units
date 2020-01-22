import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternationalSystemUnitsModule } from './international-system-units/international-system-units.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    InternationalSystemUnitsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
