import quarto01 from '../images/quarto01.jpg';
import quarto02 from '../images/quarto02.jpg';
import quarto03 from '../images/quarto03.jpg';
import detalhamento01 from '../images/detalhamento01.jpeg';
import detalhamento02 from '../images/detalhamento02.jpeg';
import detalhamento03 from '../images/detalhamento03.jpeg';
import detalhamento04 from '../images/detalhamento04.jpeg';
import annaJulia from '../images/AnnaJuliaImg.jpg';
import catarina from '../images/CatarinaImg.jpg';

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

export type Servico = {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  alt: string;
};

export const servicos: Servico[] = [
  {
    id: 'obra',
    title: 'Detalhamento de obra',
    description:
      'Os desenhos técnicos que você já apresenta nos seus projetos, prontos para a obra.',
    items: [
      'Planta de layout',
      'Planta de forro',
      'Planta de paginação',
      'Planta luminotécnica',
      'Planta de pontos elétricos',
      'Cortes e vistas',
    ],
    image: detalhamento03,
    alt: 'Prancha de planta luminotécnica com legenda elétrica, Apartamento Vila Bela',
  },
  {
    id: 'marcenaria',
    title: 'Detalhamento de marcenaria',
    description:
      'Como cada móvel será instalado, com medidas, materiais e acabamentos para a execução.',
    items: [
      'Armários planejados',
      'Móveis sob medida',
      'Cozinhas e closets',
      'Ferragens e acabamentos',
      'Especificação de MDF',
      'Planilha de materiais',
    ],
    image: detalhamento01,
    alt: 'Elevação de marcenaria cotada com especificação de MDF Alecrim Guararapes',
  },
  {
    id: 'render',
    title: 'Modelagem 3D e render',
    description:
      'A modelagem 3D do seu projeto, com a opção de render: uma imagem realista de cada ambiente.',
    items: [
      'Modelagem em SketchUp',
      'Modelagem em Revit',
      'Vistas isométricas',
      'Render por ambiente',
      'Ajustes de material e luz',
    ],
    image: quarto03,
    alt: 'Render de quarto com armários em madeira e portas brancas',
  },
];


export type Projeto = {
  name: string;
  disciplines: string;
  image: string;
  alt: string;
  fit: 'contain' | 'cover';
};

export const projetos: Projeto[] = [
  {
    name: 'Quarto Greta',
    disciplines: 'Planta baixa · Isométrica',
    image: detalhamento02,
    alt: 'Prancha com planta baixa cotada e vista isométrica do dormitório Greta',
    fit: 'contain',
  },
  {
    name: 'Marcenaria Greta',
    disciplines: 'Elevação · AutoCAD',
    image: detalhamento01,
    alt: 'Elevação de marcenaria do dormitório Greta com cotas e acabamentos',
    fit: 'contain',
  },
  {
    name: 'Vila Bela, 1616',
    disciplines: 'Elétrica · Luminotécnica',
    image: detalhamento03,
    alt: 'Planta luminotécnica do Apartamento Vila Bela com legenda elétrica',
    fit: 'contain',
  },
  {
    name: 'Dormitório Vila Bela',
    disciplines: 'Marcenaria · Layout',
    image: detalhamento04,
    alt: 'Planta baixa e corte AA de dormitório com especificação de MDF',
    fit: 'contain',
  },
  {
    name: 'Quarto e home office',
    disciplines: 'Modelagem 3D · Render',
    image: quarto02,
    alt: 'Render de home office com bancada branca, janela e armários em madeira',
    fit: 'cover',
  },
];

export const socias = [
  {
    name: 'Anna Júlia',
    role: 'Arquiteta. Cuida do detalhamento de obra e de marcenaria.',
    image: annaJulia,
  },
  {
    name: 'Catarina',
    role: 'Arquiteta. Cuida da modelagem 3D e dos renders.',
    image: catarina,
  },
];

