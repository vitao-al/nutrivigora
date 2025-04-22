import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          total: state.total + item.price,
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        total: state.total + item.price,
      };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
      total: state.total - state.items.find((i) => i.id === id)!.price * state.items.find((i) => i.id === id)!.quantity,
    })),
  updateQuantity: (id, quantity) =>
    set((state) => {
      const item = state.items.find((i) => i.id === id);
      if (!item) return state;
      const priceDiff = item.price * (quantity - item.quantity);
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        ),
        total: state.total + priceDiff,
      };
    }),
  total: 0,
}));