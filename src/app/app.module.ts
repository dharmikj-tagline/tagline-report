import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatasComponent } from './datas/datas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { TestData } from './services/testdata';
import { LiveScoreComponent } from './live-score/live-score.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasComponent,
    LiveScoreComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
