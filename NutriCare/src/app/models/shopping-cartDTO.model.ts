import { CartItemDTO } from './cart-itemDTO.model';

export interface ShoppingCartDTO {
  id: number;
  userId: number;
  items: CartItemDTO[];
  total?: number;
}
