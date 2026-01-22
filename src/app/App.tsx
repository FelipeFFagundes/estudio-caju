import { Mail, Phone, MapPin, Menu, X, Pencil, Layers } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: 'Sala de Estar Moderna',
      category: 'Interiores Residenciais',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3NjkwMjc0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Living de Luxo',
      category: 'Interiores Residenciais',
      image: 'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5MDY0NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Quarto Contemporâneo',
      category: 'Interiores Residenciais',
      image: 'https://images.unsplash.com/photo-1613685703237-6628de38ddb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGJlZHJvb20lMjBkZXNpZ258ZW58MXx8fHwxNzY5MTExMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Cozinha Moderna',
      category: 'Interiores Residenciais',
      image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDY3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Escritório Residencial',
      category: 'Interiores Residenciais',
      image: 'https://images.unsplash.com/photo-1723896816059-406463dc43d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjkxMTAxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Lounge Corporativo',
      category: 'Interiores Comerciais',
      image: 'https://images.unsplash.com/photo-1580741753044-b3f303ad361b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5MDY0MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const carpentryWorks = [
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

  const floorPlans = [
    {
      title: 'Planta de Layout',
      description: 'Plantas de ambientes com layout de mobiliário',
      image: 'https://images.unsplash.com/photo-1721244654195-943615c56ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZmxvb3IlMjBwbGFufGVufDF8fHx8MTc2OTA0NjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Detalhamentos de Obra',
      description: 'Desenhos técnicos executivos para construção',
      image: 'https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmUlMjBkcmF3aW5nfGVufDF8fHx8MTc2OTExMDQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Desenhos Técnicos',
      description: 'Documentação completa em CAD para execução',
      image: 'https://images.unsplash.com/photo-1603901622056-0a5bee231395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhZnRpbmd8ZW58MXx8fHwxNzY5MTEwNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const services = [
    {
      title: 'Design de Interiores',
      description: 'Projetos completos de ambientes residenciais e comerciais com foco em funcionalidade e estética.',
    },
    {
      title: 'Detalhamento de Marcenaria',
      description: 'Projetos executivos detalhados de móveis planejados e marcenaria sob medida.',
    },
    {
      title: 'Modelagem 3D',
      description: 'Modelagem tridimensional de ambientes e mobiliário para visualização do projeto.',
    },
    {
      title: 'Render Fotorrealista',
      description: 'Renders de alta qualidade para apresentação e aprovação de projetos.',
    },
  ];

  return (
    <div className="size-full bg-[#fdfaf7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#fdfaf7]/95 backdrop-blur-sm z-50 border-b border-[#d2691e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl text-[#d2691e]">
              <span style={{ fontFamily: "'Cocomat Pro', serif" }}>Estúdio</span>{' '}
              <span style={{ fontFamily: "'Virtual', sans-serif" }}>Caju</span>
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
                Detalhamentos
              </button>
              <button onClick={() => scrollToSection('carpentry')} className="text-gray-700 hover:text-[#d2691e] transition-colors">
                Marcenaria
              </button>
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
                Detalhamentos
              </button>
              <button onClick={() => scrollToSection('carpentry')} className="block w-full text-left py-2 text-gray-700">
                Marcenaria
              </button>
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
      <section id="home" className="relative h-screen flex items-center justify-center mt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkxMDQ3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Arquitetura Moderna"
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
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#d2691e]">Sobre Nós</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especializados em arquitetura de interiores, oferecendo soluções completas para 
              projetos residenciais e comerciais. Nossa equipe trabalha com detalhamentos técnicos precisos, 
              modelagem 3D e renders fotorrealistas para otimizar os processos do seu escritório.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#d2691e]/10">
                <h3 className="text-xl mb-3 text-[#d2691e]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#d2691e]">Plantas Técnicas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Oferecemos serviços especializados de desenho técnico e plantas baixas para arquitetos 
              que precisam de suporte profissional na execução de projetos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-[#fdfaf7] px-6 py-4 rounded-full border border-[#d2691e]/20">
                <Pencil className="text-[#d2691e]" size={24} />
                <span className="text-gray-700">Desenho CAD</span>
              </div>
              <div className="flex items-center gap-3 bg-[#fdfaf7] px-6 py-4 rounded-full border border-[#d2691e]/20">
                <Layers className="text-[#d2691e]" size={24} />
                <span className="text-gray-700">Documentação Técnica</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-2xl shadow-md">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d2691e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl mb-2 text-[#d2691e]">{plan.title}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[#d2691e]/5 rounded-3xl p-8 max-w-4xl mx-auto border border-[#d2691e]/20">
              <h3 className="text-2xl mb-4 text-[#d2691e]">Serviços para Arquitetos</h3>
              <p className="text-gray-600 mb-6">
                Entendemos que o trabalho técnico de desenho pode ser demorado. Oferecemos serviços 
                de alta qualidade para arquitetos que precisam de suporte na produção de plantas baixas, 
                cortes, fachadas e detalhamentos técnicos.
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Plantas baixas e layouts completos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Cortes e elevações técnicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Detalhamentos executivos em CAD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d2691e] mt-1">•</span>
                  <span>Conversão de croquis em plantas técnicas</span>
                </li>
              </ul>
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
      <section id="carpentry" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#d2691e]">Detalhamento de Marcenaria</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projetos executivos detalhados de marcenaria sob medida, incluindo armários, móveis planejados 
              e elementos personalizados para seus projetos de interiores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {carpentryWorks.map((work, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-2xl shadow-md">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d2691e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl mb-2 text-[#d2691e]">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#d2691e]">Nossos Projetos</h2>
            <p className="text-xl text-gray-600">
              Uma vitrine das nossas últimas realizações arquitetônicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-2xl shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#d2691e]/0 group-hover:bg-[#d2691e]/30 transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-1 text-[#d2691e]">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
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
              <p className="text-gray-600">+55 (11) 9999-9999</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2691e] text-white rounded-full mb-4 shadow-lg">
                <Mail size={24} />
              </div>
              <h3 className="text-xl mb-2 text-[#d2691e]">Email</h3>
              <p className="text-gray-600">contato@estudiocaju.com.br</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d2691e] text-white rounded-full mb-4 shadow-lg">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl mb-2 text-[#d2691e]">Localização</h3>
              <p className="text-gray-600">São Paulo, SP<br />Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d2691e] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/80">© 2026 Estúdio Caju. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}