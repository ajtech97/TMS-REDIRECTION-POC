// export interface PopUpDetails {
//   component?: any;
//   data?: any;
//   callbackFunctionOnClose?: () => void | null | undefined;
//   width?: string | null | undefined;
//   height?: string | null | undefined;
//   panelClass?: string | null | undefined;
//   autoFocus?: boolean | null | undefined;
// }
export interface PopUpDetails {
  component?: any | null | undefined;
  data?: any | null | undefined;
  callbackFunctionOnClose?: (() => void) | null | undefined;
  width?: string | null | undefined;
  height?: string | null | undefined;
  panelClass?: string | null | undefined;
  autoFocus?: boolean | null | undefined;
}
