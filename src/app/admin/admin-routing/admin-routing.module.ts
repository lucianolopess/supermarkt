import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'supermercados', loadChildren: () => import(`../supermercado/supermercado.module`).then(m => m.SupermercadoModule) },
  { path: 'supermercados', loadChildren: '../supermercado/supermercado.module#SupermercadoModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
