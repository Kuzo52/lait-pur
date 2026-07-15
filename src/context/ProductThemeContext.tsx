"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product, type ProductId } from "@/data/content";

interface ProductThemeValue {
  product: Product;
  setProductId: (id: ProductId) => void;
}

const ProductThemeContext = createContext<ProductThemeValue | null>(null);

export function ProductThemeProvider({ children }: { children: ReactNode }) {
  const [productId, setProductId] = useState<ProductId>("classic");

  const product = useMemo(
    () => products.find((item) => item.id === productId) ?? products[0],
    [productId],
  );

  const handleSet = useCallback((id: ProductId) => {
    setProductId(id);
  }, []);

  const value = useMemo(
    () => ({ product, setProductId: handleSet }),
    [product, handleSet],
  );

  return (
    <ProductThemeContext.Provider value={value}>
      {children}
    </ProductThemeContext.Provider>
  );
}

export function useProductTheme() {
  const ctx = useContext(ProductThemeContext);
  if (!ctx) {
    throw new Error("useProductTheme must be used within ProductThemeProvider");
  }
  return ctx;
}
