export interface Car {
  manufacturer: string;
  model: string;
  price: number;
  body: string;
  wiki: string;
  img: string;
}

export interface Filter {
  manufacturer?: string;
  body?: string;
  priceFrom?: string;
  priceTo?: string;
}
