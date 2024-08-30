import { Order } from "./order.interface";

export interface Customer {
  id: string;
  name: string;
  image: string;
  sex: string;
  category: string;
  tt: string;
  tedu: string;
  tcnea: string;
  orders: Order[];
}
