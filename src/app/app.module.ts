import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatasComponent } from './datas/datas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { TestData } from './services/testdata';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiveScoreComponent } from './live-score/live-score.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';

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
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
