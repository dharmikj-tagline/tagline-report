import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpclientRoutingModule } from './httpclient-routing.module';
import { HttpclientComponent } from './httpclient.component';


@NgModule({
  declarations: [
    HttpclientComponent
  ],
  imports: [
    CommonModule,
    HttpclientRoutingModule
  ]
})
export class HttpclientModule { }
