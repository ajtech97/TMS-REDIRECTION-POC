import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'poc',
    loadChildren: () =>
      import('./pocr/poc-routing/poc-routing.module').then(
        (m) => m.PocRoutingModule
      ),
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('../app/Components/demo1/demo1.component').then(
        (m) => m.Demo1Component
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
