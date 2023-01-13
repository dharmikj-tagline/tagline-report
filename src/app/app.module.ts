import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportHeadingComponent } from './report-heading/report-heading.component';
import { TaglineFormComponent } from './tagline-form/tagline-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportHeadingComponent,
    TaglineFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
