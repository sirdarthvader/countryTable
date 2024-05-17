export interface Country {
  name: string;
  abbreviation: string;
  capital: string;
  population: number;
  media: {
    emblem: string;
    flag: string;
  };
}
