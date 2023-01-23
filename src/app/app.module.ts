import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpclientModule } from './feature/httpclient/httpclient.module';
import { HttpClientModule } from '@angular/common/http';
import { DatasComponent } from './datas/datas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClientService } from './services/client.service';
import { TestData } from './services/testdata';

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
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
