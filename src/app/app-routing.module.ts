import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumingUnitDetailComponent } from './views/consuming-unit-list/consuming-unit-detail/consuming-unit-detail.component';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'consuming-unit/:id', component: ConsumingUnitDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
