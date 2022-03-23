import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClockDigitalComponent } from './clock-digital/clock-digital.component';

const routes: Routes = [
  {path:'digital', component: ClockDigitalComponent},
  {path: '', redirectTo: '/digital', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
