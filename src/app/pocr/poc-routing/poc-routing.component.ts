import { Component } from '@angular/core';
import { LoadComponentService } from '../services/load-component/load-component.service';
import { DynamicProcessingService } from '../../services/dynamic-processing.service';
import { RedirectionTemplateService } from '../../services/redirection-template.service';

@Component({
  selector: 'app-poc-routing',
  templateUrl: './poc-routing.component.html',
  styleUrl: './poc-routing.component.scss',
})
export class PocRoutingComponent {
  field_familiarization: any = {
    create_batch: {
      route: {
        url: 'poc/ex3',
        queryParams: { identifer: 'create_batch', name: 'Sohail' },
      },
      title: 'Create Batch',
      popUp: {
        component_redirection: 'example_1',
        meta_data: {},
        height: '600px',
        width: '800px',
      },
    },

    edit_batch: {
      // route: {
      //   url: 'poc/ex3',
      //   queryParams: { identifer: 'edit_batch' },
      // },
      title: 'Edit Batch',
      popUp: {
        component_redirection: 'example_1',
        meta_data: {},
        height: '600px',
        width: '800px',
      },
    },

    batch_notification: {
      // route: {
      //   url: 'poc/ex3',
      //   queryParams: { identifer: 'batch_notification' },
      // },
      title: 'Batch notification',
      popUp: {
        component_redirection: 'example_1',
        meta_data: {},
        height: '600px',
        width: '800px',
      },
    },
  };

  constructor(
    private redirectionTemplateService: RedirectionTemplateService,
    private loadComponentService: LoadComponentService,
    private dynamicProcessiongService: DynamicProcessingService
  ) {}
  // async dynamicallyLoad(identifier?: keyof typeof this.field_familiarization) {
  //   if (identifier && this.field_familiarization[identifier].route) {
  //     this.dynamicProcessiongService.redirectProcessing(
  //       this.field_familiarization[identifier]?.route?.url,
  //       this.field_familiarization[identifier]?.route?.queryParams
  //     );
  //   } else if (
  //     identifier &&
  //     this.field_familiarization[identifier].component_redirection
  //   ) {
  //     const identif =
  //       this.field_familiarization[identifier].component_redirection;
  //     const comp = await this.loadComponentService.componentMapping[identif]();

  //     this.dynamicProcessiongService.openDialog(
  //       comp,
  //       null,
  //       undefined,
  //       '700px',
  //       '500px'
  //     );
  //     return;
  //   }
  // }
  async dynamicallyLoad(valu?: any) {
    // let componentPresent =
    //   this.field_familiarization?.[valu]?.component_redirection;
    // // if (componentPresent) {
    // //   const comp = await this.loadComponentService.componentMapping[valu]();
    // //   // componentReference = comp;
    // // }

    // since this function is called inside a service
    //  the 'this' keyword will reference  the service
    // to maintain the 'this' reference we are binding current
    // component reference to  the function
    this.redirectionTemplateService.dynamicallyLoad(
      [valu, 'hero'],
      this.runComponentFunction.bind(this),
      valu,
      this.field_familiarization,
      this.loadComponentService
    );
  }
  runComponentFunction(params?: any) {
    console.error('this', this, params);
    const self = this.closePopUp.bind(this);
    return { callbackFunctionOnClose: self };
  }
  closePopUp(result?: any) {
    alert(`Pop up closed ${result}`);
    console.error('This ', this);
  }
}
