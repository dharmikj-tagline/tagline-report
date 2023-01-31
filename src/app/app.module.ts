import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { TestData } from './services/testdata';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './shared/component/product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { CrudApiComponent } from './shared/component/crud-api/crud-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CrudApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
