import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadComponentService {
  componentMapping: any = {
    example_1: async () => {
      const { Example1Component } = await import(
        '../../poc-routing/Components/example1/example1.component'
      );

      return Example1Component;
    },
    example_2: async () => {
      const { Example2Component } = await import(
        '../../poc-routing/Components/example2/example2.component'
      );

      return Example2Component;
    },
  };
  constructor() {}
}
