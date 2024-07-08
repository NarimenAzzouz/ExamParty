import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspritComponent } from './esprit/esprit.component';
import { FormationsComponent } from './formations/formations.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailsModulesComponent } from './details-modules/details-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    EspritComponent,
    FormationsComponent,
    NotFoundComponent,
    DetailsModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
