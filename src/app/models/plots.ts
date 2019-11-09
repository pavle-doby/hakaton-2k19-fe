export interface IPlots {
  upper_left_point: any;
  bottom_right_point: any;
  name: string;
  zone: any;
}

export const PesticideTypeStrings = [
  "Capsaicin",
  "Dicamba",
  "Methoprene",
  "Pyrethrins",
  "2,4-D"
];

export enum PesticideType {
  Capsaicin,
  Dicamba,
  Methoprene,
  Pyrethrins,
  _24_D
}

export class PlotsDTO {
  constructor(public id: number, public type: PesticideType) {}
}
