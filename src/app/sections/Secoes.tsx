import { contato, imagens, projetos, servicos, socias } from '../data';

const programas = ['AutoCAD', 'SketchUp', 'Layout', 'Revit'];

export function Hero() {
  return (
    <header id="inicio" className="hero">
      <img
        className="hero__img"
        src={imagens.quarto01}
        alt="Render de quarto com bancada iluminada, prateleiras e quadro abstrato"
        fetchPriority="high"
      />
      <div className="hero__content">
        <h1>Otimizando processos no seu escritório</h1>
        <p>Detalhamento de obra, detalhamento de marcenaria, modelagem 3D e render.</p>
        <a href="#projeto-caju" className="button button--light">
          Conheça nossos serviços
        </a>
      </div>
    </header>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="section section--caju">
      <div className="container">
        <div className="section__intro" data-reveal>
          <h2>Sobre nós</h2>
          <p>
            Somos especializadas em arquitetura de interiores e fazemos o desenvolvimento técnico de
            projetos residenciais e comerciais: detalhamentos precisos, modelagem 3D e renders para
            otimizar os processos do seu escritório.
          </p>
        </div>
        <ul className="equipe">
          {socias.map((s, i) => (
            <li key={s.name} data-reveal style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}>
              <img src={s.image} alt={`${s.name}, sentada ao lado de um piano`} loading="lazy" />
              <h3>{s.name}</h3>
              <p>{s.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProjetoCaju() {
  return (
    <section id="projeto-caju" className="section">
      <div className="container">
        <div className="section__intro" data-reveal>
          <h2>Projeto Caju</h2>
          <p>
            Com o Projeto Caju, você ganha mais tempo para focar na captação de novos clientes,
            enquanto cuidamos do desenvolvimento técnico dos seus projetos.
          </p>
          <ul className="programas" aria-label="Programas que usamos">
            {programas.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <ul className="servicos">
          {servicos.map((s, i) => (
            <li key={s.id} data-reveal style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}>
              <div className="frame">
                <img src={s.image} alt={s.alt} loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
        <div className="center">
          <a href="#contato" className="button">
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

export function Projetos() {
  return (
    <section id="projetos" className="section section--caju">
      <div className="container">
        <div className="section__intro" data-reveal>
          <h2>Nossos projetos</h2>
          <p>Pranchas e renders que desenvolvemos para escritórios parceiros.</p>
        </div>
        <ul className="projetos">
          {projetos.map((p, i) => (
            <li key={p.name} data-reveal style={{ '--delay': `${(i % 3) * 90}ms` } as React.CSSProperties}>
              <a href={p.image} target="_blank" rel="noopener noreferrer" className="frame frame--paper">
                <img src={p.image} alt={p.alt} loading="lazy" className={`fit-${p.fit}`} />
              </a>
              <h3>{p.name}</h3>
              <p>{p.disciplines}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contato() {
  const mensagem = 'Olá, Estúdio Caju! Gostaria de um orçamento.';
  return (
    <section id="contato" className="section">
      <div className="container container--narrow">
        <div className="section__intro" data-reveal>
          <h2>Entre em contato</h2>
          <p>Pronto para começar? Vamos conversar sobre como podemos ajudar no seu próximo projeto.</p>
        </div>
        <ul className="contatos" data-reveal>
          <li>
            <h3>WhatsApp</h3>
            <a href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`} target="_blank" rel="noopener noreferrer">
              {contato.telefone}
            </a>
          </li>
          <li>
            <h3>E-mail</h3>
            <a href={`mailto:${contato.email}`}>{contato.email}</a>
          </li>
          <li>
            <h3>Localização</h3>
            <span>{contato.cidade}, Brasil</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
