import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DynamicProcessingService {
  constructor(private dialog: MatDialog, private router: Router) {}
  redirectProcessing(url: string, queryParams?: [] | null) {
    // let processParam = this.convertArrayOfObjectToASingleObject(queryParams);

    this.router.navigate([url], {
      queryParams: queryParams ? queryParams : undefined,
    });
  }
  // convertArrayOfObjectToASingleObject(queryParams: [] | null | undefined) {
  //   if (queryParams?.length) {
  //     return queryParams.reduce((acc, obj: any) => {
  //       return { ...acc, ...obj };
  //     }, {});
  //   } else return null;
  // }
  openDialog(
    component: any,
    data?: {} | null | undefined,
    handleDialogResult?: ((res: any) => any) | null | undefined,
    width?: string | null | undefined,
    height?: string | null | undefined,
    panelClass?: string | null | undefined,
    autoFocus?: string | null | undefined | boolean
  ): void {
    const dialogRef = this.dialog.open(component, {
      width: width ? width : undefined,
      height: height ? height : undefined,
      data: data ? data : undefined,
      autoFocus: autoFocus ? autoFocus : undefined,
      panelClass: panelClass ? panelClass : undefined,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (handleDialogResult) {
        handleDialogResult(result);
      }
    });
  }
}
