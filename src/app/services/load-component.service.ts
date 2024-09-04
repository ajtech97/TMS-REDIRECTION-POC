import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadComponentService {
  componentMapping: any = {
    demo_component: async () => {
      const { Demo1Component } = await import(
        '../Components/demo1/demo1.component'
      );
      return Demo1Component;
    },
  };

  constructor() {}
}
