import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadComponentService } from '../services/load-component/load-component.service';
import { Example1Component } from './Components/example1/example1.component';
import { Example2Component } from './Components/example2/example2.component';
import { PocRoutingRoutingModule } from './poc-routing-routing.module';
import { PocRoutingComponent } from './poc-routing.component';

@NgModule({
  declarations: [PocRoutingComponent],
  imports: [
    CommonModule,
    PocRoutingRoutingModule,
    Example2Component,
    Example1Component,
  ],
  providers: [LoadComponentService],
})
export class PocRoutingModule {}
