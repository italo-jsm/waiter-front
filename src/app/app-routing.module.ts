import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumingUnitDetailComponent } from './views/consuming-unit-list/consuming-unit-detail/consuming-unit-detail.component';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: 'consuming-unit/:id', component: ConsumingUnitDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
