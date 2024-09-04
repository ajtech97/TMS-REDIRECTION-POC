import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DynamicProcessingService {
  componentName = 'Dynamic Process Service';
  constructor(private dialog: MatDialog, private router: Router) {}
  redirectProcessing(url: string, queryParams?: [] | null) {
    this.router.navigate([url], {
      queryParams: queryParams ? queryParams : undefined,
    });
  }

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
