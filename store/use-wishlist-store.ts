"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  items: string[];
  toggleItem: (productId: string) => void;
  hasItem: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (productId) =>
        set((state) => ({
          items: state.items.includes(productId) ? state.items.filter((item) => item !== productId) : [...state.items, productId],
        })),
      hasItem: (productId) => get().items.includes(productId),
      clearWishlist: () => set({ items: [] }),
    }),
    { name: "nex-wishlist" },
  ),
);
