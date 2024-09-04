import { Component } from '@angular/core';
import { LoadComponentService } from './services/load-component.service';
import { DynamicProcessingService } from './services/dynamic-processing.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dummyAngular17Project';
  hideMenu: boolean = false;
  componentName = 'App Component';
  field_familiarization: any = {
    demo_component: {
      // route: {
      //   url: 'demo',
      //   queryParams: { identifer: 'create_batch', name: 'Sohail' },
      // },
      title: 'Create Batch',
      popUp: {
        component_redirection: 'demo_component',
        meta_data: {},
        height: '600px',
        width: '800px',
      },
    },
  };
  constructor(
    private loadComponentService: LoadComponentService,
    private router: Router,
    private dialog: MatDialog
  ) {
    // const { name } = { name: 'Sohail' };
    // console.error('Destructuring', name);
  }
  // async dynamicallyLoad(ve?: any) {
  //   const comp =
  //     await this.loadComponentService.componentMapping.demo_component();

  //   this.dynamicProcessingService.openDialog(comp);
  // }
  async dynamicallyLoad(identifier?: keyof typeof this.field_familiarization) {
    if (identifier && this.field_familiarization[identifier].route) {
      this.hideMenu = true;
      //here we have to do some actions based upon component
      // we may add few extra query params also
      this.router.navigate(
        [this.field_familiarization[identifier]?.route?.url],
        {
          queryParams:
            this.field_familiarization[identifier]?.route?.queryParams,
        }
      );
    } else if (
      identifier &&
      this.field_familiarization[identifier]?.popUp?.component_redirection
    ) {
      const config = this.field_familiarization[identifier]?.popUp;
      const comp = await this.loadComponentService.componentMapping[
        config.component_redirection
      ]();
      //here we have to do some actions based upon component
      // we may add few extra detaisl in data object
      const dialogRef = this.dialog.open(comp, {
        width: config.width,
        height: config.height,
        data: config.meta_data,
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.refreshList();
      });
    }
  }
  refreshList() {
    alert(`refresh list called`);
  }
}
