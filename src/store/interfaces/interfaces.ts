export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface Films {
  characters: Array<string>;
  created: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: Array<string>;
  producer: string;
  relase_data: string;
  species: Array<string>;
  starships: Array<string>;
  title: string;
  url: string;
  vehicles: Array<string>;
}
