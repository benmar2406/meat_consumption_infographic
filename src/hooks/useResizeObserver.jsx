import { useLayoutEffect, useState } from "react";

export const useWidth = (ref, defaultWidth = 600) => {
  const [width, setWidth] = useState(defaultWidth);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    ro.observe(el);

    // set initial width
    setWidth(el.clientWidth);

    return () => ro.disconnect();
  }, [ref]);

  return width;
}