import { ReservedKeys } from "@/constants";
import type { CartAction, CartItem, CartState } from "@/types";

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find((i) => i.id === action.payload.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }

      const items = [...state.items, action.payload];

      localStorage.setItem(ReservedKeys.CART, JSON.stringify(items));

      return { ...state, items };
    }

    case "REMOVE_FROM_CART": {
      const items = state.items.filter((i) => i.id !== action.payload);

      localStorage.setItem(ReservedKeys.CART, JSON.stringify(items));

      return {
        ...state,
        items,
      };
    }

    case "UPDATE_QUANTITY": {
      const items = state.items.map((i) =>
        i.id === action.payload.id
          ? { ...i, quantity: Math.max(1, action.payload.quantity) }
          : i
      );

      localStorage.setItem(ReservedKeys.CART, JSON.stringify(items));

      return {
        ...state,
        items,
      };
    }

    case "CLEAR_CART":
      localStorage.setItem(ReservedKeys.CART, JSON.stringify([]));
      return { ...state, items: [] };

    case "LOAD_CART": {
      const saved = localStorage.getItem(ReservedKeys.CART);

      if (saved) {
        try {
          const items = JSON.parse(saved) as CartItem[];
          return { ...state, items: items };
        } catch (e) {
          console.error("Failed to load cart from localStorage", e);
        }
      }

      return state;
    }

    default:
      return state;
  }
}
