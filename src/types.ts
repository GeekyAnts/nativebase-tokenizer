export type configLayout = {
  proximity?: boolean;
  proximityRange?: number;
  increasing?: boolean;
};
export type AbsoluteToNBProps = {
  value: any;
  prop: string;
  config?: configLayout;
};
