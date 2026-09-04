import { Mail, Phone, MapPin, Menu, X, Pencil, Layers, Building2, Sun, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from './components/ui/dialog';

declare global {
  interface ImportMeta {
    glob: (pattern: string, options?: { eager?: boolean; query?: string; import?: string }) => Record<string, unknown>;
  }
}

function loadProjectImages(glob: Record<string, unknown>): string[] {
  return Object.entries(glob)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, url]) => url as string);
}

// Carrega automaticamente os ícones personalizados de software da pasta
// src/images/software-icons/. Para trocar/adicionar um ícone no futuro,
// basta colocar um arquivo com o nome do software (ex: autocad.png) nessa
// pasta — nenhuma mudança de código é necessária. Enquanto o arquivo não
// existir, o badge usa o ícone genérico (lucide-react) como substituto.
const softwareIconFiles = import.meta.glob('../images/software-icons/*.{png,svg,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function getSoftwareIconUrl(softwareName: string): string | null {
  const normalizedName = softwareName.toLowerCase();
  const match = Object.entries(softwareIconFiles).find(([path]) => {
    const fileName = path.split('/').pop() ?? '';
    const nameWithoutExtension = fileName.replace(/\.[^.]+$/, '').toLowerCase();
    return nameWithoutExtension === normalizedName;
  });
  return match ? match[1] : null;
}

const projeto1Images = loadProjectImages(
  import.meta.glob('../images/projetos/projeto1/*', { eager: true, query: '?url', import: 'default' })
);
const projeto2Images = loadProjectImages(
  import.meta.glob('../images/projetos/projeto2/*', { eager: true, query: '?url', import: 'default' })
);
const projeto3Images = loadProjectImages(
  import.meta.glob('../images/projetos/projeto3/*', { eager: true, query: '?url', import: 'default' })
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedGallery, setExpandedGallery] = useState<{ images: string[]; index: number; title: string } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const portfolio = [
    {
      title: 'Petshop PetPlantar',
      category: 'Projeto Executivo Completo',
      description: 'O projeto da PetPlantar pela designer de interiores Paula Bernau foi um projeto que o Estúdio Caju teve uma participação significativa ao longo das etapas. Iniciamos o projeto no levanatamento e passamos esse levantamento para o 3D, para a modelagem inicial foi usado o SketchUp. Na etapa seguinte, a nossa cliente lançou algumas propostas para o projeto e nós modelamos elas no 3D. Aprovada a proposta migramos a proposta para o Revit e graficamos o projeto executivo e o detalhamento de marcenaria. Para o projeto da Pet entregamos renderização do projeto em Lumion, um PDF com o projeto executivo e um PDF com o detalhamento de marcenaria.',
      descriptionLong: 'O projeto da PetPlantar pela designer de interiores Paula Bernau foi um projeto que o Estúdio Caju teve uma participação significativa ao longo das etapas. Iniciamos o projeto no levanatamento e passamos esse levantamento para o 3D, para a modelagem inicial foi usado o SketchUp. Na etapa seguinte, a nossa cliente lançou algumas propostas para o projeto e nós modelamos elas no 3D. Aprovada a proposta migramos a proposta para o Revit e graficamos o projeto executivo e o detalhamento de marcenaria. Para o projeto da Pet entregamos renderização do projeto em Lumion, um PDF com o projeto executivo e um PDF com o detalhamento de marcenaria.',
      location: 'Porto Alegre, RS',
      area: '80 m²',
      year: '2026',
      client: 'Paula Bernau',
      tools: ['Revit', 'SketchUp', 'Lumion'],
      images: projeto1Images,
    },
    {
      title: 'Apartamento Pippa',
      category: 'Detalhamento de Marcenaria',
      description: 'No projeto do Ap. Pipa pelo escritório Campo, o Estúdio Caju entrou na etapa de detalhamento de marcenaria, dessa vez em AutoCAD. Realizamos o detalhamento de marcenaria por ambiente com plantas baixas, cortes e detalhes específicos para que fique claro o entendimento para o marceneiro. Foi entregue ao cliente um caderno de marcenaria em PDF.',
      descriptionLong: 'No projeto do Ap. Pipa pelo escritório Campo, o Estúdio Caju entrou na etapa de detalhamento de marcenaria, dessa vez em AutoCAD. Realizamos o detalhamento de marcenaria por ambiente com plantas baixas, cortes e detalhes específicos para que fique claro o entendimento para o marceneiro. Foi entregue ao cliente um caderno de marcenaria em PDF.',
      location: 'Porto Alegre, RS',
      area: '165 m²',
      year: '2026',
      client: 'Campo Arquitetura e Engenharia',
      tools: ['AutoCAD'],
      images: projeto2Images,
    },
    {
      title: 'Apartamento Vila Bela 1616',
      category: 'Detalhamento de Marcenaria',
      description: 'No projeto do Ap. Vila Bela 1616 pela arq. Tuane Valim, o Estúdio Caju, também entrou no detalhamento de marcenaria. Como o projeto era um apartamento pequeno nós realizamos o detalhamento de forma geral. O detalhamento foi feito em Layout do Sketch Up. Utilizamos a mesma metodologia de Planta Baixa, cortes e detalhes específicos. Foi entregue ao cliente um caderno de marcenaria em PDF.',
      descriptionLong: 'No projeto do Ap. Vila Bela 1616 pela arq. Tuane Valim, o Estúdio Caju, também entrou no detalhamento de marcenaria. Como o projeto era um apartamento pequeno nós realizamos o detalhamento de forma geral. O detalhamento foi feito em Layout do Sketch Up. Utilizamos a mesma metodologia de Planta Baixa, cortes e detalhes específicos. Foi entregue ao cliente um caderno de marcenaria em PDF.',
      location: 'Porto Alegre, RS',
      area: '43 m²',
      year: '2025',
      client: 'Tuane Valim',
      tools: ['SketchUp', 'Layout'],
      images: projeto3Images,
    },
  ];

  const servicosCastanha = [
    {
      title: 'Marcenaria Personalizada',
      description: 'Detalhamento completo de móveis sob medida',
      image: 'https://images.unsplash.com/photo-1684406401783-b599f9e03d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3b29kd29yayUyMGNhcnBlbnRyeXxlbnwxfHx8fDE3NjkxMTEwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Armários de Cozinha',
      description: 'Projetos executivos de armários e gavetas',
      image: 'https://images.unsplash.com/photo-1684846416931-dddf8cbfc2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2FiaW5ldCUyMGRldGFpbHN8ZW58MXx8fHwxNzY5MTExMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Móveis sob Medida',
      description: 'Detalhamento técnico de móveis personalizados',
      image: 'https://images.unsplash.com/photo-1627417831791-0ebccf44076c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBjdXN0b218ZW58MXx8fHwxNzY5MTExMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const softwares = [
    { name: 'AutoCAD', fallbackIcon: Pencil },
    { name: 'SketchUp', fallbackIcon: Layers },
    { name: 'Layout', fallbackIcon: Layers },
    { name: 'Revit', fallbackIcon: Layers },
    { name: 'Archicad', fallbackIcon: Building2 },
    { name: 'Enscape', fallbackIcon: Sun },
    { name: 'Lumion', fallbackIcon: Sparkles },
  ];

  const servicos = [
    {
      title: 'Modelagem 3D + Renderização',
      description: 'Este serviço corresponde a modelagem 3D do seu projeto, com opção de contratar o serviço de Render, uma imagem realista de seu projeto',
      image: import.meta.glob('../images/03-Render/render-01.jpeg', { eager: true, query: '?url', import: 'default' })['../images/03-Render/render-01.jpeg'] as string,
    },
    {
      title: 'Detalhamentos de Obra',
      description: 'O detalhamento de obra é feito com os desenhos técnicos que você está acostumado a apresentar em seus projetos, como: planta de forro, planta de paginação, planta de luminotécnica.',
      image: import.meta.glob('../images/02-Obra/detalhamento_de_obra.jpg', { eager: true, query: '?url', import: 'default' })['../images/02-Obra/detalhamento_de_obra.jpg'] as string,
    },
    {
      title: 'Detalhamento de Marcenaria',
      description: 'Desenhos técnicos que mostram como os móveis serão instalados, com todas as medidas, materiais e acabamentos necessários para a execução. ',
      image: import.meta.glob('../images/01-Marcenaria/marcenaria.jpg', { eager: true, query: '?url', import: 'default' })['../images/01-Marcenaria/marcenaria.jpg'] as string,
    },
  ];

  const about = [
    {
      title: 'Anna Júlia',
      description: 'Sou Anna Júlia Azambuja Rodrigues, o “AJU” do estúdio cAJU e estudante de Arquitetura e Urbanismo na Universidade do Vale do Rio dos Sinos (UNISINOS). Possuo experiência em arquitetura de interiores, com foco no desenvolvimento de detalhamentos técnicos e modelagem 3D. Acredito que um bom projeto está nos detalhes e busco transformar ideias em soluções técnicas bem executadas, aliando precisão, organização e sensibilidade em cada etapa do processo.',
    },
    {
      image: import.meta.glob('../images/pessoas/AnnaImg.jpg', { eager: true, query: '?url', import: 'default' })['../images/pessoas/AnnaJuliaImg.jpg'] as string
    },
    {
      title: 'Catarina',
      description: 'Me chamo Catarina, o CA do Caju. Sou arquiteta e urbanista formada pela Unisinos|POA. Tenho experiência em arquitetura hospitalar, arquitetura de interiores e arquitetura comercial. Minha parte favorita do projeto, além da criação, é a parte de detalhamento executivo, pensar nos detalhes que fazem o projeto único; amo ver os detalhes que desenhamos no 2D se tornando imagens realistas no 3D.',
    },
    {
      image: import.meta.glob('../images/pessoas/CatarinaImg.jpg', { eager: true, query: '?url', import: 'default' })['../images/pessoas/CatarinaImg.jpg'] as string
    },
  ];

  return (
    <div className="size-full bg-[#d2691e]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#fdfaf7]/95 backdrop-blur-sm z-50 border-b border-[#d2691e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl text-[#d2691e] flex items-center gap-1">
              <span style={{ fontFamily: "'Cocomat Pro', serif" }}>Estúdio</span>
              <span
                className="text-5xl leading-none relative -translate-y-2"
                style={{ fontFamily: "'Virtual', sans-serif" }}
              >
                Caju
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#d2691e] transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#d2691e] transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('floor-plans')} className="text-gray-700 hover:text-[#d2691e] transition-colors">
                Projeto Caju
              </button>
              {/* <button onClick={() => scrollToSection('carpentry')} className="text-gray-700 hover:text-[#d2691e] transition-colors">
                Projeto Castanha
              </button> */}
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#d2691e] transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#d2691e] transition-colors">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#d2691e]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
                Sobre
              </button>
              <button onClick={() => scrollToSection('floor-plans')} className="block w-full text-left py-2 text-gray-700">
                Projeto Caju
              </button>
              {/* <button onClick={() => scrollToSection('carpentry')} className="block w-full text-left py-2 text-gray-700">
                Projeto Castanha
              </button> */}
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-700">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">
                Contato
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center mt-16 scroll-mt-16">
        <div className="absolute inset-0">
          <img
            src= {import.meta.glob('../images/background/quarto01.jpg', { eager: true, query: '?url', import: 'default' })['../images/background/quarto01.jpg'] as string}
            alt='Arquitetura Moderna'
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#d2691e]/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl mb-6">Otimizando processos em seu escritório</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Detalhamentos de obra, detalhamentos de marcenaria, modelagem 3D e Render
          </p>
          <button
            onClick={() => scrollToSection('floor-plans')}
            className="bg-[#d2691e] text-white px-8 py-3 rounded-full hover:bg-[#b8591a] transition-colors shadow-lg"
          >
            Conheça Nossos Serviços
          </button>
        </div>
      </section>

      {/* About & Services Section */}
      <section id="about" className="py-20 px-4 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#fdfaf7]">Sobre Nós</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-[#fdfaf7]">
                Olá, somos o Estúdio Caju, uma marca inspirada na fruta que une, em uma única forma, o fruto e a castanha. Assim como o caju, acreditamos que um bom projeto é resultado da integração entre diferentes etapas, formando um processo completo e coeso.
              </p>
              <p className="text-xl text-[#fdfaf7]">
                O nome também representa a união de duas colegas: Catarina e Anna Júlia, que compartilham o cuidado com aquilo que é essencial em cada projeto: o cuidado com os detalhes e a qualidade em cada entrega.
              </p>
              <p className="text-xl text-[#fdfaf7]">
                Nossa atuação se divide em duas frentes: o projeto Caju, voltado para a parceria com profissionais da área de interiores, funcionando como um apoio técnico especializado no desenvolvimento de desenhos 2D e 3D, contribuindo para otimizar o tempo dos profissionais com precisão e qualidade.
              </p>
              <p className="text-xl text-[#fdfaf7]">
                Já o Projeto Castanha traduz a nossa essência por meio de projetos autorais, desenvolvidos com sofisticação, sensibilidade e funcionalidade, sempre buscando atender às necessidades de cada cliente.
              </p>
              <p className="text-xl text-[#fdfaf7]">
                Independentemente da modalidade, nossa essência permanece a mesma: acreditamos que a proximidade com o cliente e a integração entre todas as etapas projetuais resultam em soluções completas, bem executadas e cheias de significado, assim como o CAJU!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#d2691e]/10 overflow-hidden min-h-[420px]"
              >
                {/* Imagem preenchendo o card */}
                {service.image && (
                  <button
                    type="button"
                    onClick={() => setExpandedGallery({ images: [service.image!], index: 0, title: service.title ?? 'Estúdio Caju' })}
                    className="absolute inset-0 w-full h-full cursor-zoom-in"
                    aria-label={`Expandir imagem de ${service.title ?? 'Estúdio Caju'}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                )}

                {/* Overlay opcional */}
                {service.image && (
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                )}

                {/* Conteúdo */}
                <div className="relative z-10 p-6 text-center flex flex-col justify-center h-full">
                  <h3 className="text-xl mb-3 text-[#d2691e]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#d2691e]">Projeto Caju</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Com o projeto caju, você ganha mais tempo para focar na captação de novos clientes,
              enquanto cuidamos do desenvolvimento técnico de seus projetos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {softwares.map((software) => {
                const customIconUrl = getSoftwareIconUrl(software.name);
                return (
                  <div
                    key={software.name}
                    className="flex items-center gap-3 bg-[#fdfaf7] px-6 py-4 rounded-full border border-[#d2691e]/20"
                  >
                    {customIconUrl ? (
                      <img src={customIconUrl} alt={software.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <software.fallbackIcon className="text-[#d2691e]" size={24} />
                    )}
                    <span className="text-gray-700">{software.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((plan, index) => (
              <div key={index} className="group text-center">
                <button
                  type="button"
                  onClick={() => setExpandedGallery({ images: [plan.image], index: 0, title: plan.title })}
                  className="relative overflow-hidden aspect-[4/3] mb-4 rounded-2xl shadow-md w-full cursor-zoom-in"
                >
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d2691e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <h3 className="text-xl mb-2 text-[#d2691e]">{plan.title}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            ))}
            <div className="col-span-1 md:col-span-3 flex justify-center mt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#d2691e] text-white px-8 py-3 rounded-full hover:bg-[#b8591a] transition-colors shadow-lg"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Carpentry Portfolio Section */}
      {/* <section id="carpentry" className="py-20 px-4 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#fdfaf7]">Projeto Castanha</h2>
            <p className="text-xl text-[#fdfaf7] max-w-3xl mx-auto">
              Atrelado à técnica que já carregamos no Projeto Caju, acrescentamos o processo criativo aos nosso projetos dando um toque da nossa essencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {servicosCastanha.map((work, index) => (
              <div key={index} className="group">
                <button
                  type="button"
                  onClick={() => setExpandedGallery({ images: [work.image], index: 0, title: work.title })}
                  className="relative overflow-hidden aspect-[4/3] mb-4 rounded-2xl shadow-md w-full cursor-zoom-in"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d2691e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <h3 className="text-xl mb-2 text-[#d2691e]">{work.title}</h3>
                <p className="text-[#fdfaf7]">{work.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto border border-[#d2691e]/20 shadow-sm">
            <h3 className="text-2xl mb-4 text-[#d2691e] text-center">Nossa Expertise em Marcenaria</h3>
            <p className="text-gray-600 mb-6 text-center">
              Desenvolvemos projetos executivos completos de marcenaria com todos os detalhes técnicos 
              necessários para a fabricação e instalação.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Detalhamento de armários planejados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Móveis sob medida com especificações completas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Projetos de cozinhas e closets</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Detalhes de ferragens e acabamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Planilhas de materiais e quantitativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Desenhos técnicos para execução</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Nossos Projetos</h2>
            <p className="text-xl text-white">
              Uma vitrine das nossas últimas realizações arquitetônicas
            </p>
          </div>

          {/*
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#d2691e]/10 overflow-hidden"
              >
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex}>
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={image}
                            alt={`${project.title} - imagem ${imageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>

                <div className="p-6">
                  <p className="text-gray-600">{project.category}</p>
                  <h3 className="text-xl mb-2 text-[#d2691e]">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 mb-12 text-center">
            <h3 className="text-2xl md:text-3xl text-white mb-2">Visão Detalhada</h3>
            <p className="text-white/80">Conheça cada projeto em profundidade</p>
          </div>
          */}

          <div className="flex flex-col gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-3xl shadow-sm border border-[#d2691e]/10 overflow-hidden"
              >
                <div className="md:w-1/2 relative aspect-[4/3] md:aspect-auto">
                  <div className="md:absolute md:inset-0 h-full">
                    <Carousel className="w-full h-full">
                      <CarouselContent viewportClassName="h-full" className="h-full">
                        {project.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="h-full">
                            <button
                              type="button"
                              onClick={() => setExpandedGallery({ images: project.images, index: imageIndex, title: project.title })}
                              className="block w-full h-full overflow-hidden cursor-zoom-in"
                              aria-label={`Expandir imagem ${imageIndex + 1} de ${project.title}`}
                            >
                              <img
                                src={image}
                                alt={`${project.title} - imagem ${imageIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-sm text-[#d2691e] mb-1">{project.category}</span>
                  <h3 className="text-2xl mb-4 text-[#d2691e]">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.descriptionLong}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Localização</p>
                      <p className="text-gray-700">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Área</p>
                      <p className="text-gray-700">{project.area}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Ano</p>
                      <p className="text-gray-700">{project.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Cliente</p>
                      <p className="text-gray-700">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs bg-[#fdfaf7] text-[#d2691e] px-3 py-1 rounded-full border border-[#d2691e]/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#d2691e]">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Pronto para começar seu projeto? Vamos conversar sobre como podemos dar vida à sua visão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2691e] text-white rounded-full mb-4 shadow-lg">
                <Phone size={24} />
              </div>
              <h3 className="text-xl mb-2 text-[#d2691e]">Telefone</h3>
              <p className="text-gray-600">+55 (51) 99264-4428</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2691e] text-white rounded-full mb-4 shadow-lg">
                <Mail size={24} />
              </div>
              <h3 className="text-xl mb-2 text-[#d2691e]">Email</h3>
              <p className="text-gray-600">projetos.estudiocaju@gmail.com.br</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2691e] text-white rounded-full mb-4 shadow-lg">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl mb-2 text-[#d2691e]">Localização</h3>
              <p className="text-gray-600">Porto Alegre, RS<br />Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d2691e] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* <p className="text-white/80">© 2026 Estúdio Caju. Todos os direitos reservados.</p> */}
        </div>
      </footer>

      {/* Image Lightbox: expande a imagem clicada, mantendo o site visível ao fundo. Suporta navegação entre imagens da mesma galeria sem fechar. */}
      <Dialog open={expandedGallery !== null} onOpenChange={(open) => !open && setExpandedGallery(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-4xl w-full p-2 bg-transparent border-none shadow-none sm:max-w-4xl flex items-center justify-center"
        >
          <DialogTitle className="sr-only">{expandedGallery?.title}</DialogTitle>
          {expandedGallery && (
            <div className="relative inline-block max-w-full max-h-[85vh]">
              <img
                src={expandedGallery.images[expandedGallery.index]}
                alt={`${expandedGallery.title} - imagem ${expandedGallery.index + 1}`}
                className="block w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-2xl"
              />

              {expandedGallery.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedGallery((current) =>
                        current
                          ? {
                              ...current,
                              index: (current.index - 1 + current.images.length) % current.images.length,
                            }
                          : current,
                      )
                    }
                    aria-label="Imagem anterior"
                    className="absolute top-1/2 left-2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/90 text-[#d2691e] rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedGallery((current) =>
                        current
                          ? { ...current, index: (current.index + 1) % current.images.length }
                          : current,
                      )
                    }
                    aria-label="Próxima imagem"
                    className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/90 text-[#d2691e] rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() => setExpandedGallery(null)}
                aria-label="Fechar imagem"
                className="absolute -top-4 -right-4 flex items-center justify-center w-11 h-11 bg-[#d2691e] text-white rounded-full shadow-lg hover:bg-[#b8591a] hover:scale-110 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}