import { useEffect } from 'react';

// Reveals every [data-reveal] element once, when it enters the viewport.
// Content is only hidden while the `js` class is on <html>, so it never stays invisible.
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );
    targets.forEach((el) => io.observe(el));
    const safety = window.setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
}
