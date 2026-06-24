'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/menu';

export interface CartItem {
  product: MenuItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: MenuItem, quantity: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  activeDetailsProduct: MenuItem | null;
  setActiveDetailsProduct: (product: MenuItem | null) => void;
  triggerWhatsAppOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [activeDetailsProduct, setActiveDetailsProduct] = useState<MenuItem | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('dessert_groove_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem('dessert_groove_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: MenuItem, quantity: number) => {
    if (quantity <= 0) return;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const triggerWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const phoneNumber = '919158555032';
    
    let itemsText = '';
    cart.forEach((item) => {
      itemsText += `* ${item.product.name} x ${item.quantity} (₹${item.product.price * item.quantity})\n`;
    });

    const message = `Hi Dessert Groove,

I would like to place an order.

*Items Ordered:*
${itemsText}
*Total Amount:* ₹${cartTotal}

Please let me know the next steps.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setCartOpen,
        activeDetailsProduct,
        setActiveDetailsProduct,
        triggerWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
