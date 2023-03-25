export interface Preset {
  title: string;
  rows: number;
  cols: number;
}

export interface GameCard {
  uid: string;
  imageId: string;
  isOpen: boolean;
  isResolve: boolean;
}
