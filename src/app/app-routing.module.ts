import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatasComponent } from './datas/datas.component';
import { LiveScoreComponent } from './live-score/live-score.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path:'product',
    component:ProductDetailComponent
  },
  {
    path: 'live-score',
    component: LiveScoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
