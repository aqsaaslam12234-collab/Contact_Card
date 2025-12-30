export type CartsType = {
  id: number;
  products: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
  };
};
