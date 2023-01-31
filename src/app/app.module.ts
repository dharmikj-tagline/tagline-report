import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { TestData } from './services/testdata';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './shared/component/product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { CrudApiComponent } from './shared/component/crud-api/crud-api.component';
import { AccessInterceptor } from './shared/interceptor/access.interceptor';

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
  providers: [ClientService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AccessInterceptor,
    multi:true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
