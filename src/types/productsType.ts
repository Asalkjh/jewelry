export interface IProducts {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  group: string;
  proposal: boolean;
}

export interface IProductList {
  first: number | never;
  items: number | never;
  last: number | never;
  next: number | never;
  pages: number | never;
  prev: number | never;
  data: IProducts[];
}
