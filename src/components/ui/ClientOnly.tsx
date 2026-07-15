"use client";

import { useEffect, useState, type ReactNode } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

/** Рендерит children только после mount — без рассинхрона SSR/hydration на GitHub Pages. */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const mounted = useMounted();
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
