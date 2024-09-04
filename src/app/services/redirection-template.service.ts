import { Injectable } from '@angular/core';
import { DynamicProcessingService } from './dynamic-processing.service';
import { PopUpDetails } from '../interfaces/pop-up-details';

@Injectable({
  providedIn: 'root',
})
export class RedirectionTemplateService {
  constructor(private dynamicProcessiongService: DynamicProcessingService) {}
  async dynamicallyLoad(
    inputParams?: any,
    preProcessing?: any,
    identifier?: any,
    pageConfig?: any,
    loadComponentService?: any
  ) {
    // if page redirection
    if (identifier && pageConfig[identifier]?.route) {
      let routingDetails: any;
      if (preProcessing) {
        routingDetails = preProcessing(...inputParams);
      }
      // here if there are some processing requred before redirection,
      // preProcessing function executes it
      // and preProcessing function also returns the modified
      //  query params i.e it adds new query params with the existing queryParams
      // defined in the config
      this.dynamicProcessiongService.redirectProcessing(
        pageConfig[identifier]?.route?.url,
        // here we are merging config params and custom params if avaiable
        {
          ...pageConfig?.[identifier]?.route?.queryParams,
          ...(routingDetails ?? {}),
        }
      );
      return;
    }
    // if pop up
    else if (identifier && pageConfig[identifier]?.popUp) {
      const popUpConfig = pageConfig[identifier]?.popUp;
      // we load the respective component which is requred for the pop up
      const comp = await loadComponentService?.componentMapping?.[
        popUpConfig?.component_redirection
      ]();
      let customConfigFromComponent: PopUpDetails | any = {};
      // here if some preprocessing is requred from the component
      // preProcessing function is used and
      // it returns config required to load a popup
      if (preProcessing) {
        customConfigFromComponent = preProcessing();
      }
      // here the data input we are merging config meta data and
      // metat data genrated by component
      const meta_data = {
        ...popUpConfig?.component_redirection?.meta_data,
        ...customConfigFromComponent?.meta_data,
      };

      this.dynamicProcessiongService.openDialog(
        comp,
        meta_data,
        customConfigFromComponent?.callbackFunctionOnClose,
        popUpConfig?.width,
        popUpConfig?.height,
        customConfigFromComponent?.panelClass,
        customConfigFromComponent?.autoFocus
      );
      return;
    } else {
      console.error('Error in Configuration setup');
    }
  }
}
