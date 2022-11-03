export interface Loot {
  openBox: {
    boxOpenings: {
      id: string;
      itemVariant: {
        id: string;
        name: string;
        value: number;
      };
    }[];
  };
}
