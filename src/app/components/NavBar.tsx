import { useEffect, useState } from 'react';
import { nav } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';
import { Wordmark } from './Wordmark';

const ids = nav.map((item) => item.id);

export function NavBar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className="bar" aria-label="Principal">
      <div className="bar__inner">
        <a href="#inicio" className="bar__mark" aria-label="Estúdio Caju, voltar ao início">
          <Wordmark aria-hidden />
        </a>

        <ul className="bar__links">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="bar__toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
        >
          <span className="burger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="bar__toggle-label">{open ? 'Fechar' : 'Menu'}</span>
        </button>
      </div>

      <div id="menu-mobile" className={`bar__sheet${open ? ' is-open' : ''}`} {...(open ? {} : { inert: '' })}>
        <ul>
        {nav.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
}
