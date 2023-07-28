export const types = {
    ADD: '[Cart] Agregar al Carro',
    REMOVE: '[Cart] Quitar del carrito',
    TOGGLE: '[Cart] Cambiar Carrito',
  };
  
  export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
  };
  
  export type ReducerState = {
    products: Product[];
    showCart: boolean;
  };
  
  export type ProductContext = {
    products: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    showCart: boolean;
    toggleCart: () => void;
  };
  
  export type ActionType = {
    type: string;
    payload: Product;
  };