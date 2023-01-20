import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpclientModule } from './feature/httpclient/httpclient.module';
import { HttpClientModule } from '@angular/common/http';
import { DatasComponent } from './datas/datas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpclientModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
