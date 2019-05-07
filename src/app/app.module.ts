import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoplugginModule} from '../../projects/demopluggin/src/lib/demopluggin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DemoplugginModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
