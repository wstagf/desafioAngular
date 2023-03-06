import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardPageComponent } from './presentation/view/pages/onboard/onboard-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: OnboardPageComponent
  }
//  {path: 'home', loadChildren:  () => import('./presentation/presentation.module').then(m => m.PresentationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
