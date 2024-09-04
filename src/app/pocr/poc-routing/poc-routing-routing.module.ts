import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocRoutingComponent } from './poc-routing.component';

const routes: Routes = [
  { path: '', component: PocRoutingComponent },
  {
    path: 'ex3',
    loadComponent: () =>
      import('./Components/example3/example3.component').then(
        (m) => m.Example3Component
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocRoutingRoutingModule {}
