import quarto01 from '../images/background/quarto01.jpg';
import marcenaria from '../images/01-Marcenaria/marcenaria.jpg';
import obra from '../images/02-Obra/detalhamento_de_obra.jpg';
import render01 from '../images/03-Render/render-01.jpeg';
import annaJulia from '../images/pessoas/AnnaJuliaImg.jpg';
import catarina from '../images/pessoas/CatarinaImg.jpg';

type UrlGlob = Record<string, string>;

// Every image dropped into a project's folder joins its gallery, in file-name order.
const galeria = (glob: UrlGlob) =>
  Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);


// Software icons: a file named after the software (e.g. autocad.png) in
// src/images/software-icons/ is picked up automatically.
const iconFiles = import.meta.glob('../images/software-icons/*.{png,svg,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }) as UrlGlob;

export const iconeDoPrograma = (nome: string) =>
  Object.entries(iconFiles).find(
    ([path]) => (path.split('/').pop() ?? '').replace(/\.[^.]+$/, '').toLowerCase() === nome.toLowerCase(),
  )?.[1] ?? null;

export const contato = {
  telefone: '+55 (51) 99264-4428',
  telefoneLink: 'tel:+5551992644428',
  whatsapp: '5551992644428',
  email: 'projetos.estudiocaju@gmail.com.br',
  cidade: 'Porto Alegre, RS',
};

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projeto-caju', label: 'Projeto Caju' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
];

export const imagens = { quarto01 };

export const sobre = [
  'Olá, somos o Estúdio Caju, uma marca inspirada na fruta que une, em uma única forma, o fruto e a castanha. Assim como o caju, acreditamos que um bom projeto é resultado da integração entre diferentes etapas, formando um processo completo e coeso.',
  'O nome também representa a união de duas colegas: Catarina e Anna Júlia, que compartilham o cuidado com aquilo que é essencial em cada projeto: o cuidado com os detalhes e a qualidade em cada entrega.',
  'Nossa atuação se divide em duas frentes: o Projeto Caju, voltado para a parceria com profissionais da área de interiores, funcionando como um apoio técnico especializado no desenvolvimento de desenhos 2D e 3D, contribuindo para otimizar o tempo dos profissionais com precisão e qualidade.',
  'Já o Projeto Castanha traduz a nossa essência por meio de projetos autorais, desenvolvidos com sofisticação, sensibilidade e funcionalidade, sempre buscando atender às necessidades de cada cliente.',
  'Independentemente da modalidade, nossa essência permanece a mesma: acreditamos que a proximidade com o cliente e a integração entre todas as etapas projetuais resultam em soluções completas, bem executadas e cheias de significado, assim como o CAJU!',
];

export const socias = [
  {
    name: 'Anna Júlia',
    bio: 'Sou Anna Júlia Azambuja Rodrigues, o “AJU” do estúdio cAJU e estudante de Arquitetura e Urbanismo na Universidade do Vale do Rio dos Sinos (UNISINOS). Possuo experiência em arquitetura de interiores, com foco no desenvolvimento de detalhamentos técnicos e modelagem 3D. Acredito que um bom projeto está nos detalhes e busco transformar ideias em soluções técnicas bem executadas, aliando precisão, organização e sensibilidade em cada etapa do processo.',
    image: annaJulia,
  },
  {
    name: 'Catarina',
    bio: 'Me chamo Catarina, o CA do Caju. Sou arquiteta e urbanista formada pela Unisinos|POA. Tenho experiência em arquitetura hospitalar, arquitetura de interiores e arquitetura comercial. Minha parte favorita do projeto, além da criação, é a parte de detalhamento executivo, pensar nos detalhes que fazem o projeto único; amo ver os detalhes que desenhamos no 2D se tornando imagens realistas no 3D.',
    image: catarina,
  },
];

export const programas = ['AutoCAD', 'SketchUp', 'Layout', 'Revit', 'Archicad', 'Enscape', 'Lumion'];

export const servicos = [
  {
    title: 'Modelagem 3D + Renderização',
    description:
      'Este serviço corresponde à modelagem 3D do seu projeto, com opção de contratar o serviço de render, uma imagem realista do seu projeto.',
    image: render01,
  },
  {
    title: 'Detalhamentos de Obra',
    description:
      'O detalhamento de obra é feito com os desenhos técnicos que você está acostumado a apresentar em seus projetos, como: planta de forro, planta de paginação, planta de luminotécnica.',
    image: obra,
  },
  {
    title: 'Detalhamento de Marcenaria',
    description:
      'Desenhos técnicos que mostram como os móveis serão instalados, com todas as medidas, materiais e acabamentos necessários para a execução.',
    image: marcenaria,
  },
];

export type Projeto = {
  title: string;
  category: string;
  description: string;
  location: string;
  area: string;
  year: string;
  client: string;
  tools: string[];
  images: string[];
};

export const projetos: Projeto[] = [
  {
    title: 'Petshop PetPlantar',
    category: 'Projeto Executivo Completo',
    description:
      'O projeto da PetPlantar pela designer de interiores Paula Bernau foi um projeto em que o Estúdio Caju teve uma participação significativa ao longo das etapas. Iniciamos o projeto no levantamento e passamos esse levantamento para o 3D; para a modelagem inicial foi usado o SketchUp. Na etapa seguinte, a nossa cliente lançou algumas propostas para o projeto e nós as modelamos no 3D. Aprovada a proposta, migramos para o Revit e graficamos o projeto executivo e o detalhamento de marcenaria. Para a Pet entregamos a renderização do projeto em Lumion, um PDF com o projeto executivo e um PDF com o detalhamento de marcenaria.',
    location: 'Porto Alegre, RS',
    area: '80 m²',
    year: '2026',
    client: 'Paula Bernau',
    tools: ['Revit', 'SketchUp', 'Lumion'],
    images: galeria(import.meta.glob('../images/projetos/projeto1/*', { eager: true, query: '?url', import: 'default' }) as UrlGlob),
  },
  {
    title: 'Apartamento Pippa',
    category: 'Detalhamento de Marcenaria',
    description:
      'No projeto do Ap. Pippa pelo escritório Campo, o Estúdio Caju entrou na etapa de detalhamento de marcenaria, dessa vez em AutoCAD. Realizamos o detalhamento de marcenaria por ambiente com plantas baixas, cortes e detalhes específicos para que fique claro o entendimento para o marceneiro. Foi entregue ao cliente um caderno de marcenaria em PDF.',
    location: 'Porto Alegre, RS',
    area: '165 m²',
    year: '2026',
    client: 'Campo Arquitetura e Engenharia',
    tools: ['AutoCAD'],
    images: galeria(import.meta.glob('../images/projetos/projeto2/*', { eager: true, query: '?url', import: 'default' }) as UrlGlob),
  },
  {
    title: 'Apartamento Vila Bela 1616',
    category: 'Detalhamento de Marcenaria',
    description:
      'No projeto do Ap. Vila Bela 1616 pela arq. Tuane Valim, o Estúdio Caju também entrou no detalhamento de marcenaria. Como o projeto era um apartamento pequeno, realizamos o detalhamento de forma geral, no Layout do SketchUp, com a mesma metodologia de planta baixa, cortes e detalhes específicos. Foi entregue ao cliente um caderno de marcenaria em PDF.',
    location: 'Porto Alegre, RS',
    area: '43 m²',
    year: '2025',
    client: 'Tuane Valim',
    tools: ['SketchUp', 'Layout'],
    images: galeria(import.meta.glob('../images/projetos/projeto3/*', { eager: true, query: '?url', import: 'default' }) as UrlGlob),
  },
];
