import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardPageComponent } from './onboard/onboard-page.component';

const routes: Routes = [
  { path: '**', component:  OnboardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class PagesRoutingModule { }