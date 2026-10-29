import { contato, nav } from '../data';
import { Wordmark } from '../components/Wordmark';

export function Rodape() {
  return (
    <footer className="rodape">
      <Wordmark className="wordmark--light rodape__marca" />
      <nav className="rodape__links" aria-label="Rodapé">
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href={`mailto:${contato.email}`}>E-mail</a>
          </li>
        </ul>
      </nav>
      <p className="rodape__nota">© {new Date().getFullYear()} Estúdio Caju · Porto Alegre, RS</p>
    </footer>
  );
}
