import React, { useState } from 'react';
import { Menu, Search, Heart, Phone, ShoppingCart, User, ChevronDown, X, Facebook, Instagram, Youtube, Twitter, Instagram as Telegram } from 'lucide-react';
import { CartModal } from './components/CartModal';
import { useCartStore } from './store/cartStore';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, addItem } = useCartStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  const images = [
    "https://integralmedica.vtexassets.com/assets/vtex.file-manager-graphql/images/912f1118-8785-4a7a-a02b-110294d884c2___d44b8dc6d7c473af66300be6631ead3a.jpg",
    "https://acdn-us.mitiendanube.com/stores/002/218/616/themes/amazonas/1-slide-1739458446721-8374110724-469d4dee6bc9f3aa40e4bec1de5489b61739458448-1920-1920.png?1469350160",
    "https://imgproxy2.cdn-retailhub.com/rs:fit/q:75/w:1920/format:webp/plain/https://cdn-retailhub.com/max-titanium/ff86246e-420e-46e3-99f8-6ec19ea28a21.jpg",
    "https://imgproxy2.cdn-retailhub.com/rs:fit/q:75/w:1920/format:webp/plain/https://cdn-retailhub.com/max-titanium/09b6e3b1-cfd3-465d-bac1-da85f953b3b6.jpg"
  ];

  const benefits = [
    {
      icon: "https://www.gsuplementos.com.br/_nuxt/img/01.f99ef1a.svg",
      title: "Frete grátis a partir de R$ 150*",
      link: "Consulte condições"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMy40NzciIGhlaWdodD0iMjUuMTA4IiB2aWV3Qm94PSIwIDAgMzMuNDc3IDI1LjEwOCI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1iYXJjb2RlIiBkYXRhLW5hbWU9Ikljb24gYXdlc29tZS1iYXJjb2RlIiBkPSJNMCwyOS42MDhWNC41SDEuMTc3VjI5LjYwOFptMS43NTYtLjAxOFY0LjVoLjZWMjkuNTlabTEuNzc1LDBWNC41SDQuMTFWMjkuNTlabTIuOTMzLDBWNC41aC41NzlWMjkuNTlabTIuMzU0LDBWNC41SDkuOTc2VjI5LjU5Wm0yLjkzMywwVjQuNWguNTc5VjI5LjU5Wm0xLjE3NywwVjQuNWguNTc5VjI5LjU5Wm0xLjE3NywwVjQuNWguNTc5VjI5LjU5Wm0yLjMzNSwwVjQuNWgxLjE3N1YyOS41OVptMi45MzMsMFY0LjVoMS4xNzdWMjkuNTlabTIuMzU0LDBWNC41SDIyLjlWMjkuNTlabTIuMzU0LDBWNC41aDEuMTc3VjI5LjU5Wm0xLjc1NiwwVjQuNWgxLjE3N1YyOS41OVptMi45NTIsMFY0LjVoMS43NTZWMjkuNTlabTIuMzM1LDBWNC41aC42VjI5LjU5Wm0xLjE3Ny4wMThWNC41aDEuMTc3VjI5LjYwOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQuNSkiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==",
      title: "10% OFF no boleto ou PIX",
      link: "Saiba mais"
    },
    {
      icon: "https://www.gsuplementos.com.br/_nuxt/img/03.fd04bd1.svg",
      title: "CASHBACK",
      link: "Consulte condições"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNi40NTYiIGhlaWdodD0iMzYuNDU2IiB2aWV3Qm94PSIwIDAgMzYuNDU2IDM2LjQ1NiI+CiAgPHBhdGggaWQ9Ikljb25fbWF0ZXJpYWwtY2hhdF9idWJibGVfb3V0bGluZSIgZGF0YS1uYW1lPSJJY29uIG1hdGVyaWFsLWNoYXRfYnViYmxlX291dGxpbmUiIGQ9Ik0zNS44MSwzSDYuNjQ2QTMuNjU2LDMuNjU2LDAsMCwwLDMsNi42NDZ2MzIuODFsNy4yOTEtNy4yOTFIMzUuODFhMy42NTYsMy42NTYsMCwwLDAsMy42NDYtMy42NDZWNi42NDZBMy42NTYsMy42NTYsMCwwLDAsMzUuODEsM1ptMCwyNS41MTlIMTAuMjkxTDYuNjQ2LDMyLjE2NVY2LjY0NkgzNS44MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",
      title: "Nutricionista Esportivo",
      link: "Clique aqui"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0Mi4xNTMiIGhlaWdodD0iMjcuNjEiIHZpZXdCb3g9IjAgMCA0Mi4xNTMgMjcuNjEiPgogIDxwYXRoIGlkPSJJY29uX3BheW1lbnQtY3JlZGl0LWNhcmQiIGRhdGEtbmFtZT0iSWNvbiBwYXltZW50LWNyZWRpdC1jYXJkIiBkPSJNNDUuNDc4LDE2LjM1YTIuNjQsMi42NCwwLDAsMSwyLjAyMS44NzUsMi42MzcsMi42MzcsMCwwLDEsLjg3NSwyLjAyMVY0MS4wNjRhMi45OTQsMi45OTQsMCwwLDEtMi45LDIuOUg5LjExNkEyLjYzNiwyLjYzNiwwLDAsMSw3LjEsNDMuMDg1YTIuNjM1LDIuNjM1LDAsMCwxLS44NzUtMi4wMjFWMTkuMjQ1QTIuNjM2LDIuNjM2LDAsMCwxLDcuMSwxNy4yMjVhMi42MzksMi42MzksMCwwLDEsMi4wMjEtLjg3NUg0NS40NzhaTTkuMTE2LDE4LjYzOXEtLjMzNywwLS40LjJhLjU4Mi41ODIsMCwwLDAtLjIuNHY0LjA0SDQ2LjA4NHYtNC4wNGEuNTgyLjU4MiwwLDAsMC0uMi0uNHEtLjA2OC0uMi0uNC0uMlpNNDUuNDc4LDQxLjY3MXEuMzM2LDAsLjQtLjJhLjU4Mi41ODIsMCwwLDAsLjItLjRWMzAuMTU1SDguNTFWNDEuMDY0YS41ODIuNTgyLDAsMCwwLC4yLjRxLjA2Ni4yLjQuMkg0NS40NzhaTTEwLjgsMzkuMzgxVjM3LjAyNGg0LjY0N3YyLjM1N1ptNi45MzYsMFYzNy4wMjRoNi44Njl2Mi4zNTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4yMjEgLTE2LjM1KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",
      title: "Compras em até 6x sem juros",
      link: "Saiba mais"
    }
  ];

 const products = [
  {
    category: 'MASSA MUSCULAR',
    id: 1,
    name: "Nutri Whey Protein Pote 900g",
    price: 83.59,
    installments: "6x de R$ 14,00",
    image: "https://integralmedica.vtexassets.com/arquivos/ids/165374-1200-auto?v=638203748743470000&width=1200&height=auto&aspect=true",
    features: [
      "AJUDA NA HIPERTROFIA",
      "MELHOR CUSTO X BENEFÍCIO",
      "ALTA CONCENTRAÇÃO DE PROTEÍNA"
    ]
  },
  {
    id: 2,
    name: "Gomas Creatinadas PowerGummy",
    price: 109.90,
    installments: "6x de R$ 20,35",
    image: "https://www.instagram.com/p/DIhGPVYJHnO/",
    features: [
      "ESTIMULA A HIPERTROFIA",
      "AUXILIA NA RECUPERAÇÃO MUSCULAR",
      "AUMENTO DE FORÇA"
    ]
  },
  {
    category: 'ENERGIA',
    id: 3,
    name: "Horus - Pré Treino (300g) Max Titanium",
    price: 75.04,
    installments: "6x de R$ 24,15",
    image: "https://a-static.mlcdn.com.br/800x560/horus-pre-treino-300g-max-titanium/acsuplementos/13372881762/7915e33bd9fc83443dcb7b1d8638027c.jpeg",
    features: [
      "ENERGIA EXPLOSIVA",
      "FOCO INTENSO",
      "PUMP INSANO"
    ]
  },
  {
    id: 5,
    name: "Creatina Pura 300g - Dark Lab",
    price: 49.90,
    installments: "6x de R$ 8,31",
    image: "https://acdn-us.mitiendanube.com/stores/002/218/616/products/crea1-abd8ff086c388782e017183634041853-1024-1024.webp",   
    features: [
      "AUMENTO DE FORÇA",
      "MELHORA O DESEMPENHO FÍSICO",
      "AUXILIA NA HIPERTROFIA"
    ]
  },
  {
    id: 6,
    name: "BCAA 2400 (60 cápsulas)",
    price: 44.52,
    installments: "6x de R$ 7,42",
    image: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/157359-1920-0/bcaa-2400-max-titanium-60-capsulas-1.jpg?v=638343756607670000",
    features: [
      "RECUPERAÇÃO MUSCULAR RÁPIDA",
      "REDUZ A FADIGA",
      "AMINOÁCIDOS ESSENCIAIS"
    ]
  },
  {
    id: 7,
    name: "Termogenico Integralmédica Therma Pro Hardcore - 60 Cápsulas",
    price: 48.75,
    installments: "6x de R$ 8,12",
    image: "https://m.media-amazon.com/images/I/61F-TYjyn1L._AC_SX425_.jpg",
    features: [
      "AUMENTA A TERMOGÊNESE",
      "ACELERA O METABOLISMO",
      "AUXILIA NA QUEIMA DE GORDURA"
    ]
  },
  {
    id: 8,
    name: "Glutamina em Pó 150g",
    price: 49.41,
    installments: "6x de R$ 8,23",
    image: "https://integralmedica.vtexassets.com/arquivos/ids/166796-1200-auto?v=638573390522100000&width=1200&height=auto&aspect=true",
    features: [
      "FORTALECE O SISTEMA IMUNOLÓGICO",
      "RECUPERAÇÃO MUSCULAR",
      "IDEAL PARA TREINOS INTENSOS"
    ]
  },
  {
    id: 9,
    name: "Multimax Complex 90 Caps",
    price: 55.68,
    installments: "6x de R$ 9,28",
    image: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/157556-1920-0/multimax-complex-max-titanium-90-capsulas-1.jpg?v=638351326253770000https://lojamaxtitanium.vtexassets.com/arquivos/ids/157556-1920-0/multimax-complex-max-titanium-90-capsulas-1.jpg?v=638351326253770000",
    features: [
      "REPOSIÇÃO DE VITAMINAS",
      "AUMENTA A DISPOSIÇÃO",
      "APOIA A SAÚDE GERAL"
    ]
  },
  {
    id: 10,
    name: "Albumix Integralmedica Pouch 500g",
    price: 54.90,
    installments: "5x de R$ 10,98",
    image: "https://paguemenos.vtexassets.com/arquivos/ids/807924-1200-auto?v=638422599573830000&width=1200&height=auto&aspect=true",
    features: [
      "LIBERAÇÃO LENTA DE PROTEÍNA",
      "INDICADA PARA O PÓS-TREINO",
      "ÓTIMA PARA GANHO DE MASSA"
    ]
  },
  {
    id: 11,
    name: "Hipercalórico Dark Mass 3kg - Dark Lab",
    price: 99.90,
    installments: "6x de R$ 16,65",
    image: "https://acdn-us.mitiendanube.com/stores/002/218/616/products/dark-mass-1-2-5e8864355cac25cd0b17196045528588-1024-1024.webp",
    features: [
      "GANHO DE MASSA RÁPIDO",
      "CALORIAS DE QUALIDADE",
      "FÁCIL PREPARO"
    ]
  },
  {
    category: "MASSA MUSCULAR",
    id: 12,
    name: "Whey One Refil 900g - Dark Lab",
    price: 149.90,
    installments: "6x de R$ 24,98",
    image: "https://acdn-us.mitiendanube.com/stores/002/218/616/products/whey-one-5d89a3094d735286b717193467774389-240-0.webp",
    features: [
      "PROTEÍNA PURA",
      "SEM LACTOSE",
      "RÁPIDA ABSORÇÃO"
    ],

  },
];


  const footerLinks = {
    about: [
      { title: 'Sobre a Nutri Vigorá', href: 'https://www.canva.com/design/DAGhEtf36vU/TEKRl5MKL9v84HD48LfGvQ/edit?utm_content=DAGhEtf36vU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
      { title: 'Fale Conosco', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Segurança e Privacidade', href: '#' },
    ],
    help: [
      { title: 'Formas de Pagamento', href: '#' },
      { title: 'Política de Troca e Devolução', href: '#' },
      { title: 'Envio da encomenda', href: '#' },
      { title: 'Política de Entrega', href: '#' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f4f5e7]">
      {/* Header */}
      <header className="bg-[#f4f5e7] text-black py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo and Search */}
            <div className="flex items-center flex-1 md:space-x-8">
              <img 
                src="/logonv.png" 
                alt="Nutri Vigorá" 
                className="h-8"
              />
              <div className="hidden md:block flex-1 max-w-xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Encontre o suplemento ideal para você"
                    className="w-full py-2 px-4 pr-10 rounded-md border text-black"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="flex items-center hover:text-gray-200">
                <Phone className="h-6 w-6" />
                <div className="ml-2 text-left">
                  <span className="block text-sm">Fale Conosco</span>
                  <span className="block text-sm font-semibold">Clique aqui</span>
                  <a href="https://www.instagram.com/nutri_vigora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="></a>
                </div>
              </button>
              <button 
                className="flex items-center hover:text-gray-200 relative" 
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="ml-4">Carrinho</span>
              </button>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center space-x-4 bg-[#f4f5e7]">
              <Search className="h-6 w-6" />
              <button className="relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mt-4 bg-[#f4f5e7]`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
              <li className="flex items-center cursor-pointer hover:text-gray-200">
                <Menu className="h-5 w-5 mr-2" />
                <span className="font-semibold">CATEGORIAS</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </li>
              {['LANÇAMENTOS', 'WHEY PROTEIN', 'CREATINA', 'PRÉ-TREINO', 'OBJETIVOS'].map((item) => (
                <li key={item}  className="cursor-pointer hover:text-gray-200">
                {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="relative">
      <img
        src={images[currentIndex]}
        alt="Slide"
        className="w-full h-auto object-cover transition-opacity duration-700"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="text-center">
                <div className="bg-[#00A7E1] rounded-full p-4 inline-block mb-2">
                  <img src={benefit.icon} alt={benefit.title} className="h-8 w-8" />
                </div>
                <p className="text-sm">{benefit.title}</p>
                <a href="#" className="text-xs text-[#00A7E1] hover:underline">{benefit.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*objetivos*/}
      <section id="objetivos" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Saiba seu OBJETIVO</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e deixe-se inspirar para sua próxima construção.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/110/05.jpg"
                alt="Ganhar músculos"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">Ganhar Músculos</h3>
                  <p className="text-gray-200">O processo de ganho de massa muscular se dá pela combinação de uma boa alimentação e de uma rotina de exercícios 
                    físicos intensos. Além disso, fazer musculação é muito importante para alcançar a hipertrofia, sendo indicada a realização de exercícios de 
                    grupos musculares alternados, já que o processo de desenvolvimento dos músculos ocorre durante a recuperação¹.
                     Porém, é importante se consultar previamente com profissionais que podem guiar você da melhor maneira possível.</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/categoria/83/10.jpg"
                alt="Emagrecimento"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">Emagrecimento</h3>
                  <p className="text-white">
                  Emagrecer não é uma tarefa impossível. Com uma rotina disciplinada de exercícios e a dieta certa, você consegue garantir a perda de gorduras localizadas sem grandes complicações.

Os melhores suplementos para isso, você encontra aqui, na Growth Supplements. São diferentes produtos para se encaixar na sua rotina e garantir estratégias para queimar de vez aquela gordura localizada, além de garantir o aumento da disposição durante os treinos.

                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/categoria/91/02.jpg"
                alt="Energia"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">Energia</h3>
                  <p className="text-gray-200">Muitas vezes, somente a alimentação não é suficiente para termos a energia necessária para encarar um treino pesado - e é aí que entram os suplementos. Esses produtos facilitam o dia a dia de quem quer aumentar o desempenho e alcançar o corpo tão desejado.

Vale lembrar que a prescrição deve ser feita pelo nutricionista, pois é o profissional capacitado para identificar as necessidades do organismo e suplementar de forma adequada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Objectives Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          CONHEÇA OS SUPLEMENTOS QUE TRANSFORMARÃO SEUS RESULTADOS
        </h2>
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="space-y-1 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-[#00A7E1] font-bold text-xl">R$ {product.price.toFixed(2)}</div>
                <div className="text-sm text-gray-600 mb-4">ou {product.installments} sem juros</div>
                <button 
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                  onClick={() => addItem(product)}
                >
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f4f5e7] border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Institucional</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-600 hover:text-[#00A7E1]">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Ajuda</h3>
              <ul className="space-y-2">
                {footerLinks.help.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-600 hover:text-[#00A7E1]">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <div className="space-y-2 text-gray-600">
                <p>E-mail: sac@nutrivigora.com.br</p>
                <p>Telefone: (82) 1234-5678</p>
                <p>Seg a Sex das 8h às 12h | das 13h30 às 18h</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg mb-4">Rede Social</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/nutri_vigora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#00A7E1] hover:text-[#1B4B68]">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-sm text-gray-600">
            <p className="mb-4">
              * Preços e condições de pagamento apresentados neste "site" somente
              são válidos para as compras efetuadas no ato da sua exibição.
            </p>
            <p className="mb-4">
              * Condições de pagamento: à vista somente para depósitos,
              transferência e boleto bancário.
            </p>
            <p>
              * O preço dos produtos prevalecerá os que estão dentro de cada
              categoria, podendo sofrer alterações.
            </p>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>Nutri Vigorá - Todos os direitos reservados - CNPJ: 07.993.973/0001-80</p>
            <p>R.Dr. Oswaldo Cruz, 193 - Chã de Bebedouro, Maceió - AL- CEP 57018-630</p>
          </div>
        </div>
      </footer>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;