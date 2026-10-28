import { Wordmark } from '../components/Wordmark';

export function Rodape() {
  return (
    <footer className="rodape">
      <Wordmark className="wordmark--light" />
      <p>© {new Date().getFullYear()} Estúdio Caju · Porto Alegre, RS</p>
    </footer>
  );
}
