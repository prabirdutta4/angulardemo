import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [];
const routes: Routes = [
  { path: '', loadChildren: () => import('./account/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
