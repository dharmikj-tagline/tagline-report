import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpclientComponent } from './httpclient.component';

const routes: Routes = [
  {
    path:'',
    component:HttpclientComponent
  },
  {
    path:'**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpclientRoutingModule { }
