"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "@/types/catalog";

interface CartState {
  items: CartItem[];
  addItem: (product: Product, options?: { quantity?: number; selectedColor?: string; selectedSize?: string }) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  subtotal: () => number;
  totalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, options) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id);
          const quantity = options?.quantity ?? 1;

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity, selectedColor: options?.selectedColor ?? item.selectedColor, selectedSize: options?.selectedSize ?? item.selectedSize }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                product,
                quantity,
                selectedColor: options?.selectedColor,
                selectedSize: options?.selectedSize,
              },
            ],
          };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) => (item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item)),
        })),
      removeItem: (productId) => set((state) => ({ items: state.items.filter((item) => item.product.id !== productId) })),
      clearCart: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce((sum, item) => {
          return sum + item.product.price * item.quantity;
        }, 0),
      totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    { name: "nex-cart" },
  ),
);
