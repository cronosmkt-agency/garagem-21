import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car, ShieldCheck, Award, Star, Clock, MapPin, Phone, MessageCircle,
  ChevronDown, ArrowRight, Menu, X, Check, ExternalLink, KeyRound,
  Sparkles, SlidersHorizontal, Calculator, FileCheck, DollarSign,
  TrendingUp, CheckCircle2, Navigation, Eye, Fuel, Gauge, CheckCircle
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Garagem21LandingPage,
});

export default function Garagem21LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedVehicleModal, setSelectedVehicleModal] = useState<{
    id: string;
    category: string;
    name: string;
    year: string;
    km: string;
    price: string;
    tag: string;
    image: string;
    imageFallback: string;
    transmission: string;
    fuel: string;
    specs: string[];
  } | null>(null);

  // Finance & Trade-in Simulator State
  const [clientName, setClientName] = useState("");
  const [vehicleOfInterest, setVehicleOfInterest] = useState("SUV Premium / Médio");
  const [hasTradeIn, setHasTradeIn] = useState("Sim, tenho veículo para dar na troca");
  const [downPayment, setDownPayment] = useState("R$ 20.000 a R$ 40.000");
  const [notes, setNotes] = useState("");

  const phone = "552136410020";
  const phoneDisplay = "(21) 3641-0020";
  const address = "R. Ten. Luiz Meirelles, 540 - Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta das 08:30 às 18:00 | Sábados até às 13:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, Sr. Alexandre! Vim pelo site da Garagem 21 Collection e gostaria de consultar os veículos disponíveis no estoque."
  )}`;

  const handleSimulatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITAÇÃO DE CONSULTORIA / FINANCIAMENTO - GARAGEM 21 COLLECTION*
---------------------------------------
*Cliente:* ${clientName || "Não informado"}
*Interesse:* ${vehicleOfInterest}
*Possui Carro na Troca?* ${hasTradeIn}
*Faixa de Entrada Estimada:* ${downPayment}
${notes ? `*Detalhes / Carro na Troca:* ${notes}` : ""}
---------------------------------------
Vim pelo site oficial e gostaria de falar com o Sr. Alexandre sobre as condições e taxa de financiamento!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const showroomVehicles = [
    {
      id: "compass",
      category: "suv",
      name: "Jeep Compass Limited 1.3 Turbo Flex",
      year: "2023 / 2023",
      km: "24.000 km",
      price: "R$ 159.900",
      tag: "Laudo 100% Aprovado",
      image: "/cars/jeep-compass.webp",
      imageFallback: "/cars/jeep-compass.jpg",
      transmission: "Automático 6M",
      fuel: "Flex Turbo",
      specs: ["Bancos em Couro", "Teto Solar Panorâmico", "Painel Full Digital", "Único Dono", "Piloto Adaptativo"]
    },
    {
      id: "corolla-cross",
      category: "suv",
      name: "Toyota Corolla Cross XRE 2.0 Dynamic Force",
      year: "2022 / 2023",
      km: "31.000 km",
      price: "R$ 144.900",
      tag: "Revisões em Concessionária",
      image: "/cars/corolla-cross.webp",
      imageFallback: "/cars/corolla-cross.jpg",
      transmission: "Direct Shift CVT",
      fuel: "Flex 177cv",
      specs: ["Chave Presencial Smart Entry", "Multimídia 9 pol", "Faróis Full LED", "Garantia Toyota", "7 Airbags"]
    },
    {
      id: "honda-hrv",
      category: "suv",
      name: "Honda HR-V Touring 1.5 Turbo Flex",
      year: "2021 / 2022",
      km: "35.000 km",
      price: "R$ 138.900",
      tag: "Procedência Impecável",
      image: "/cars/honda-hrv.webp",
      imageFallback: "/cars/honda-hrv.jpg",
      transmission: "Automático CVT",
      fuel: "Turbo 173cv",
      specs: ["Teto Solar Elétrico", "Bancos em Couro Claro", "Honda LaneWatch", "Sensores Diant/Tras", "Manual e Chave Reserva"]
    },
    {
      id: "hilux",
      category: "picape",
      name: "Toyota Hilux SRX 2.8 4x4 Diesel Turbo",
      year: "2022 / 2022",
      km: "42.000 km",
      price: "R$ 248.900",
      tag: "Selo Collection",
      image: "/cars/hilux-srx.webp",
      imageFallback: "/cars/hilux-srx.jpg",
      transmission: "Automático 6M",
      fuel: "Diesel 4x4",
      specs: ["Tração 4x4 com Reduzida", "Som JBL Premium", "Câmera 360 Graus", "Faróis Full LED", "Capota Marítima"]
    },
    {
      id: "bmw-320i",
      category: "sedan",
      name: "BMW 320i M Sport GP 2.0 Turbo ActiveFlex",
      year: "2022 / 2023",
      km: "26.000 km",
      price: "R$ 249.900",
      tag: "Selo Collection",
      image: "/cars/bmw-320i.webp",
      imageFallback: "/cars/bmw-320i.jpg",
      transmission: "Steptronic 8M",
      fuel: "Turbo 184cv",
      specs: ["Pacote M Sport Completo", "Live Cockpit Professional", "Teto Solar", "Couro Vernasca", "Pinças M Sport"]
    },
    {
      id: "corolla-altis",
      category: "sedan",
      name: "Toyota Corolla Altis Premium Hybrid",
      year: "2023 / 2024",
      km: "18.000 km",
      price: "R$ 168.900",
      tag: "Máxima Economia",
      image: "/cars/corolla-altis.webp",
      imageFallback: "/cars/corolla-altis.jpg",
      transmission: "Hybrid Transaxle",
      fuel: "Híbrido Flex",
      specs: ["Piloto Automático Adaptativo", "IPVA com Desconto Verde", "Toyota Safety Sense", "Garantia Baterias"]
    },
    {
      id: "civic",
      category: "sedan",
      name: "Honda Civic Touring 1.5 Turbo Touring",
      year: "2021 / 2021",
      km: "38.000 km",
      price: "R$ 139.900",
      tag: "Laudo 100% Aprovado",
      image: "/cars/civic-touring.webp",
      imageFallback: "/cars/civic-touring.jpg",
      transmission: "Automático CVT",
      fuel: "Gasolina Turbo",
      specs: ["Motor Turbo 173cv", "LaneWatch", "Teto Solar Elétrico", "Som 450W com Subwoofer", "Estado de 0km"]
    },
    {
      id: "polo",
      category: "hatch",
      name: "Volkswagen Polo Highline 200 TSI",
      year: "2023 / 2023",
      km: "22.000 km",
      price: "R$ 96.900",
      tag: "Custo-Benefício",
      image: "/cars/polo-tsi.webp",
      imageFallback: "/cars/polo-tsi.jpg",
      transmission: "Automático 6M",
      fuel: "Flex TSI",
      specs: ["Painel Digital Active Info", "Ar Climatronic Touch", "Rodas 17 pol diamantadas", "Revisões em Dia"]
    }
  ];

  const filteredShowroom = selectedCategory === "todos"
    ? showroomVehicles
    : showroomVehicles.filter(v => v.category === selectedCategory);

  const pillars = [
    {
      icon: Star,
      title: "5,0 com 231 Avaliações no Google",
      desc: "Um recorde histórico de credibilidade unânime em Teresópolis e toda a Região Serrana. A loja de seminovos mais bem avaliada pelos clientes."
    },
    {
      icon: FileCheck,
      title: "100% com Laudo Cautelar Aprovado",
      desc: "Transparência inegociável: nenhum veículo de leilão, sinistro ou histórico duvidoso. Você recebe a perícia técnica completa em mãos."
    },
    {
      icon: KeyRound,
      title: "Confiança que Vende à Distância",
      desc: "Histórias reais de clientes que compram sem ver o carro presencialmente, confiando integralmente na palavra e honestidade do Sr. Alexandre."
    },
    {
      icon: TrendingUp,
      title: "Financiamento com Menores Taxas",
      desc: "Parceria direta com as principais instituições financeiras, aprovação de crédito ágil e avaliação justa do seu seminovo na troca."
    }
  ];

  const realTestimonials = [
    {
      name: "Robson Altoe",
      badge: "Local Guide Google Maps",
      text: "Excelente atendimento. O Sr. Alexandre é muito prestativo e Humano... Preço muito bom no carro. Comprei sem ver... Fui depositando na confiança e finalizei com uma ótima taxa. Indico para todos... pois adorei tudo!",
      highlight: "Comprei sem ver... confiança total!"
    },
    {
      name: "Patricia S. Brandão Alves",
      badge: "Cliente em 4ª Compra",
      text: "Fidelidade se conquista com seriedade. Este é o quarto carro que compro com a loja, sempre pela confiança, honestidade, atenção aos detalhes e qualidade dos veículos. Uma experiência que vale a recomendação. Obrigada Alexandre! Continuaremos sendo clientes!",
      highlight: "4º carro que compro na Garagem 21"
    },
    {
      name: "Xandão Oliveira",
      badge: "Avaliação 5 Estrelas",
      text: "Experiência maravilhosa, atendimento 5 estrelas e o mais importante: credibilidade ímpar! Não tem como não virar cliente fiel.",
      highlight: "Credibilidade ímpar e atendimento 5 estrelas"
    }
  ];

  const faqList = [
    {
      q: "Como funciona a garantia e o laudo cautelar dos veículos?",
      a: "Todos os veículos da Garagem 21 Collection passam por rigorosa perícia cautelar que atesta a integridade estrutural, mecânica e procedência sem qualquer passagem por leilão ou sinistro. Além do laudo entregue em mãos, oferecemos garantia legal completa de 90 dias de motor e câmbio."
    },
    {
      q: "Vocês aceitam meu carro atual como parte do pagamento?",
      a: "Sim! Avaliamos o seu veículo seminovo de forma justa, transparente e mercadológica. Também operamos na modalidade de Troca com Troco (quando você compra um carro e recebe dinheiro de volta no seu)."
    },
    {
      q: "É possível financiar sem entrada ou com score baixo?",
      a: "Trabalhamos com mais de 10 financeiras e bancos credenciados. As condições de entrada dependem da análise cadastral do CPF, mas conseguimos as menores taxas do mercado e montamos simulações personalizadas com parcelas que cabem no seu orçamento."
    },
    {
      q: "A Garagem 21 aceita carta de crédito de consórcio?",
      a: "Sim, aceitamos cartas de crédito contempladas de todas as administradoras de consórcio bancárias e independentes do Brasil, com trâmite documental ágil."
    },
    {
      q: "Onde fica a loja física da Garagem 21 em Teresópolis?",
      a: "Estamos localizados na Rua Tenente Luiz Meirelles, 540, no tradicional polo automotivo do bairro da Várzea em Teresópolis - RJ. Dispomos de showroom coberto e café para receber você com toda comodidade."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F8FAFC] selection:bg-[#D4AF37]/30 selection:text-white pb-24 lg:pb-0">
      {/* 1. TOP GOLD STRIP */}
      <div className="border-b border-[#D4AF37]/25 bg-gradient-to-r from-[#09090B] via-[#141419] to-[#09090B] px-4 py-2.5 text-xs text-[#E2E8F0]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="font-medium text-[#FDE68A]">
              Garagem 21 Collection:
            </span>
            <span className="text-[#D1D5DB] flex items-center gap-1">
              Mais de 230 avaliações 5 estrelas unânimes no Google Maps.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#A1A1AA]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-[#D4AF37]" />
              Seg a Sex: 08:30 às 18:00 | Sáb: até 13:00
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-[#D4AF37]" />
              R. Ten. Luiz Meirelles, 540 - Várzea
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR - TOTALMENTE SEM ÍCONE NA HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#D4AF37]/20 bg-[#09090B]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo EXCLUSIVAMENTE Tipográfica SEM NENHUM ÍCONE */}
          <a href="#" className="group flex flex-col transition-opacity hover:opacity-90">
            <span className="font-[Outfit,sans-serif] text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Garagem 21 <span className="bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B45309] bg-clip-text text-transparent">Collection</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase sm:text-[11px]">
              Seminovos Selecionados & Especiais · Teresópolis
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#estoque" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#D4AF37]">
              Estoque Selecionado
            </a>
            <a href="#diferenciais" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#D4AF37]">
              Por que a Garagem 21
            </a>
            <a href="#simulador" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#D4AF37]">
              Simular Financiamento
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#D4AF37]">
              231 Avaliações 5 Estrelas
            </a>
            <a href="#localizacao" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#D4AF37]">
              Showroom
            </a>
            <a href="#faq" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#D4AF37]">
              Dúvidas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${phone}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-[#D4AF37] px-3 py-2"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
              {phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá, Sr. Alexandre! Gostaria de falar sobre os veículos do estoque da Garagem 21.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B45309] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#09090B] shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-[#09090B]" />
              Falar com Sr. Alexandre
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/30 text-[#D4AF37] lg:hidden hover:bg-[#181820]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-[#D4AF37]/20 bg-[#0D0D11] px-6 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3.5">
              <a
                href="#estoque"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F8FAFC] py-1 hover:text-[#D4AF37]"
              >
                Estoque Selecionado
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F8FAFC] py-1 hover:text-[#D4AF37]"
              >
                Por que a Garagem 21
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F8FAFC] py-1 hover:text-[#D4AF37]"
              >
                Simular Financiamento & Troca
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F8FAFC] py-1 hover:text-[#D4AF37]"
              >
                231 Avaliações 5 Estrelas
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F8FAFC] py-1 hover:text-[#D4AF37]"
              >
                Localização do Showroom
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#F8FAFC] py-1 hover:text-[#D4AF37]"
              >
                Dúvidas Frequentes
              </a>

              <div className="pt-3 border-t border-[#D4AF37]/15 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá, Sr. Alexandre! Gostaria de consultar o estoque da Garagem 21.")}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B45309] py-3 text-sm font-bold text-[#09090B]"
                >
                  <MessageCircle className="h-4 w-4 text-[#09090B]" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/30 py-2.5 text-xs font-semibold text-[#D4AF37]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Ligar: {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO PRESTIGE SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Gold Luxury Radial Orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[130px]"></div>
        <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#B45309]/10 blur-[120px]"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#181820]/90 px-4 py-1.5 text-xs font-bold text-[#FDE68A] shadow-lg shadow-[#D4AF37]/5">
                <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-ping"></span>
                <span className="flex items-center gap-1">
                  Recorde Histórico: <Star className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" /> 5,0 no Google com 231 Avaliações Reais
                </span>
              </div>

              <h1 className="mt-6 font-[Outfit,sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                A concessionária mais confiável de Teresópolis.{" "}
                <span className="bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#EAB308] bg-clip-text text-transparent">
                  Seminovos com laudo 100% aprovado.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-[#D1D5DB] sm:text-lg sm:leading-relaxed max-w-2xl">
                Onde clientes compram à distância pela reputação inabalável e voltam para a 4ª compra. Atendimento direto com o Sr. Alexandre, laudo cautelar em mãos e as menores taxas de financiamento da Região Serrana.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#estoque"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#EAB308] to-[#B45309] px-7 py-4 text-sm sm:text-base font-extrabold text-[#09090B] shadow-xl shadow-[#D4AF37]/25 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Car className="h-5 w-5 text-[#09090B]" />
                  Ver Veículos Disponíveis com Foto
                </a>
                <a
                  href="#simulador"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#121216] px-7 py-4 text-sm sm:text-base font-bold text-[#F8FAFC] shadow-sm transition-all hover:border-[#D4AF37] hover:bg-[#181820]"
                >
                  Simular Financiamento ou Troca
                  <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
                </a>
              </div>

              {/* Social Proof Google Review Strip */}
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#D4AF37]/20 pt-6">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-[#D1D5DB]">
                  <strong className="text-white font-bold">231 Avaliações 5 Estrelas no Google:</strong>{" "}
                  <span className="text-[#FDE68A] italic">"Comprei sem ver... confiança total!"</span> — Robson Altoe
                </div>
              </div>
            </div>

            {/* Right Card / Gold Trimmed Showroom Cockpit WITH VEHICLE PHOTOS */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#181820] to-[#0D0D11] p-6 sm:p-8 shadow-2xl shadow-black/80">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase">
                      Selo de Garantia Collection
                    </span>
                    <h3 className="font-[Outfit,sans-serif] text-lg font-bold text-white">
                      Rua Tenente Luiz Meirelles, 540
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/15 px-3 py-1 text-xs font-bold text-[#FDE68A] border border-[#D4AF37]/30">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                    Perícia Aprovada
                  </span>
                </div>

                <div className="mt-5 space-y-3.5">
                  {/* Mini Card 1: Jeep Compass */}
                  <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#09090B]/80 p-3.5 transition-all hover:border-[#D4AF37]/50 flex items-center gap-3.5">
                    <img
                      src="/cars/jeep-compass.webp"
                      alt="Jeep Compass Limited"
                      className="w-20 h-14 object-cover rounded-xl border border-[#D4AF37]/25 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white truncate">Jeep Compass Limited</span>
                        <span className="rounded-md bg-[#D4AF37] px-1.5 py-0.5 text-[9px] font-black text-[#09090B] uppercase shrink-0">Destaque</span>
                      </div>
                      <p className="mt-0.5 text-xs text-[#A1A1AA] truncate">
                        2023 · 24.000km · Teto solar & couro
                      </p>
                      <span className="text-xs font-extrabold text-[#FDE68A]">R$ 159.900</span>
                    </div>
                  </div>

                  {/* Mini Card 2: Toyota Hilux */}
                  <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#09090B]/80 p-3.5 transition-all hover:border-[#D4AF37]/50 flex items-center gap-3.5">
                    <img
                      src="/cars/hilux-srx.webp"
                      alt="Toyota Hilux SRX"
                      className="w-20 h-14 object-cover rounded-xl border border-[#D4AF37]/25 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white truncate">Toyota Hilux SRX 4x4</span>
                        <span className="rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-1.5 py-0.5 text-[9px] font-bold text-[#FDE68A] uppercase shrink-0">Diesel</span>
                      </div>
                      <p className="mt-0.5 text-xs text-[#A1A1AA] truncate">
                        2022 · 42.000km · Sistema JBL & LED
                      </p>
                      <span className="text-xs font-extrabold text-[#FDE68A]">R$ 248.900</span>
                    </div>
                  </div>

                  {/* Mini Card 3: BMW 320i */}
                  <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#09090B]/80 p-3.5 transition-all hover:border-[#D4AF37]/50 flex items-center gap-3.5">
                    <img
                      src="/cars/bmw-320i.webp"
                      alt="BMW 320i M Sport"
                      className="w-20 h-14 object-cover rounded-xl border border-[#D4AF37]/25 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white truncate">BMW 320i M Sport GP</span>
                        <span className="rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B45309] px-1.5 py-0.5 text-[9px] font-black text-[#09090B] uppercase shrink-0">Collection</span>
                      </div>
                      <p className="mt-0.5 text-xs text-[#A1A1AA] truncate">
                        2022 · 26.000km · Pacote M Sport
                      </p>
                      <span className="text-xs font-extrabold text-[#FDE68A]">R$ 249.900</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#09090B] border border-[#D4AF37]/20 p-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#A1A1AA]">Atendimento VIP direto com proprietário:</span>
                    <span className="font-bold text-[#FDE68A]">Sr. Alexandre</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="text-[#D1D5DB] flex items-center gap-1.5">
                      <Phone className="h-3 w-3 text-[#D4AF37]" /> {phoneDisplay}
                    </span>
                    <span className="text-emerald-400 font-semibold">Taxas a partir de 0,99% a.m.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METRICS / STATS BAR PRETO E DOURADO */}
      <section className="border-y border-[#D4AF37]/25 bg-[#0D0D11] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            <div className="p-2">
              <span className="font-[Outfit,sans-serif] text-2xl sm:text-4xl font-extrabold text-[#D4AF37] flex items-center justify-center gap-1.5">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 fill-[#D4AF37] text-[#D4AF37]" /> 5,0
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                231 Avaliações 5 Estrelas no Google
              </p>
            </div>
            <div className="p-2">
              <span className="font-[Outfit,sans-serif] text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
                100%
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                Laudo Cautelar Periciado e Aprovado
              </p>
            </div>
            <div className="p-2">
              <span className="font-[Outfit,sans-serif] text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
                4ª Compra
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                Fidelidade Rara de Clientes Consecutivos
              </p>
            </div>
            <div className="p-2">
              <span className="font-[Outfit,sans-serif] text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
                +10 Bancos
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                Aprovação Rápida com Menores Taxas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS / 4 PILARES DA GARAGEM 21 */}
      <section id="diferenciais" className="py-16 md:py-24 bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase">
              Por que nos escolher
            </span>
            <h2 className="mt-2 font-[Outfit,sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A Autoridade Definitiva em Seminovos
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              Em um mercado repleto de incertezas, a Garagem 21 Collection entrega o bem mais precioso: segurança jurídica, mecânica e transparência total.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl border border-[#D4AF37]/25 bg-[#121216] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] transition-colors group-hover:bg-[#D4AF37] group-hover:text-[#09090B]">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-[Outfit,sans-serif] text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#D1D5DB]">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SHOWROOM / ESTOQUE DE SEMINOVOS COM FOTOS REAIS */}
      <section id="estoque" className="border-t border-[#D4AF37]/20 bg-[#0D0D11] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase">
              Showroom Collection com Fotos Reais
            </span>
            <h2 className="mt-2 font-[Outfit,sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Estoque Selecionado a Dedo
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              Veículos periciados com laudo cautelar em mãos, fotos reais em alta definição, baixa quilometragem e procedência checada.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { id: "todos", label: "Todos os Veículos" },
                { id: "suv", label: "SUVs Premium" },
                { id: "sedan", label: "Sedans Executivos" },
                { id: "picape", label: "Picapes & 4x4" },
                { id: "hatch", label: "Hatches Selecionados" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#B45309] text-[#09090B] shadow-md shadow-[#D4AF37]/20"
                      : "bg-[#141419] text-[#D1D5DB] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Vehicles WITH ENHANCED HIGH-RES PHOTOS */}
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredShowroom.map((car) => (
              <div
                key={car.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#121216] shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              >
                <div>
                  {/* Photo Container 16:9 with Badges */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#09090B]">
                    <img
                      src={car.image}
                      alt={car.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = car.imageFallback;
                      }}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30 pointer-events-none" />

                    {/* Tag Badge Top Left */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#09090B]/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-extrabold text-[#FDE68A] border border-[#D4AF37]/40 uppercase tracking-wider shadow-md">
                        <ShieldCheck className="h-3 w-3 text-[#D4AF37]" />
                        {car.tag}
                      </span>
                    </div>

                    {/* Year Badge Top Right */}
                    <div className="absolute top-3 right-3">
                      <span className="rounded-lg bg-[#09090B]/90 backdrop-blur-md px-2 py-0.5 text-[11px] font-bold text-white border border-white/10 shadow-md">
                        {car.year}
                      </span>
                    </div>

                    {/* Quick View Button on Image Hover */}
                    <button
                      onClick={() => setSelectedVehicleModal(car)}
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-[#09090B]/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-[#D4AF37] border border-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4AF37] hover:text-[#09090B]"
                      aria-label="Ver fotos e ficha técnica"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Ver Ficha
                    </button>
                  </div>

                  {/* Car Content Body */}
                  <div className="p-5 sm:p-6">
                    <h3
                      onClick={() => setSelectedVehicleModal(car)}
                      className="font-[Outfit,sans-serif] text-base sm:text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors cursor-pointer leading-snug"
                    >
                      {car.name}
                    </h3>

                    {/* Specs Row: KM + Fuel + Transmission */}
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[#D1D5DB] border-y border-[#D4AF37]/15 py-2.5">
                      <span className="flex items-center gap-1.5 font-semibold text-[#D4AF37]">
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        {car.km}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#E2E8F0]">
                        <Gauge className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                        {car.transmission}
                      </span>
                    </div>

                    {/* Features Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {car.specs.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md bg-[#09090B] px-2 py-0.5 text-[10px] font-medium text-[#A1A1AA] border border-[#D4AF37]/10"
                        >
                          {spec}
                        </span>
                      ))}
                      {car.specs.length > 3 && (
                        <span className="rounded-md bg-[#09090B] px-1.5 py-0.5 text-[10px] font-medium text-[#D4AF37] border border-[#D4AF37]/20">
                          +{car.specs.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & WhatsApp Action */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between bg-[#0e0e13]">
                  <div>
                    <span className="text-[9px] text-[#A1A1AA] block uppercase tracking-wider font-semibold">Valor À Vista</span>
                    <span className="font-[Outfit,sans-serif] text-lg sm:text-xl font-extrabold text-[#D4AF37]">
                      {car.price}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá, Sr. Alexandre! Gostaria de saber mais informações e simular financiamento para o veículo: ${car.name} (${car.year}) anunciado por ${car.price} com laudo periciado.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B45309] px-3.5 py-2 text-xs font-extrabold text-[#09090B] transition hover:scale-105 active:scale-95 shadow-md shadow-[#D4AF37]/15"
                  >
                    Proposta
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Showroom Subtitle CTA */}
          <div className="mt-14 rounded-3xl border border-[#D4AF37]/25 bg-[#141419] p-6 text-center text-xs sm:text-sm text-[#D1D5DB] max-w-2xl mx-auto">
            <p>
              Procurando algum modelo específico que não está na lista? O <strong>Sr. Alexandre</strong> localiza o veículo ideal para você através da nossa rede de captação qualificada com laudo 100% periciado.
            </p>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá, Sr. Alexandre! Estou procurando um carro específico e gostaria da sua consultoria.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-bold text-[#D4AF37] hover:underline"
            >
              Encomendar Carro com o Sr. Alexandre <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* MODAL DE FICHA TÉCNICA E FOTO AMPLIADA */}
      {selectedVehicleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in-50 duration-200">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#D4AF37]/50 bg-[#121216] shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedVehicleModal(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:text-[#D4AF37] border border-white/10"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={selectedVehicleModal.image}
                alt={selectedVehicleModal.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#09090B]/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#FDE68A] border border-[#D4AF37]/40">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                  {selectedVehicleModal.tag}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-[Outfit,sans-serif] text-xl sm:text-2xl font-bold text-white">
                    {selectedVehicleModal.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-[#D1D5DB]">
                    <span className="text-[#D4AF37] font-semibold">{selectedVehicleModal.year}</span>
                    <span>•</span>
                    <span>{selectedVehicleModal.km}</span>
                    <span>•</span>
                    <span>{selectedVehicleModal.transmission}</span>
                    <span>•</span>
                    <span>{selectedVehicleModal.fuel}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#A1A1AA] uppercase block font-semibold">Preço Especial</span>
                  <span className="font-[Outfit,sans-serif] text-2xl font-extrabold text-[#D4AF37]">
                    {selectedVehicleModal.price}
                  </span>
                </div>
              </div>

              {/* Specs Grid in Modal */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Destaques e Opcionais Inclusos:
                </h4>
                <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {selectedVehicleModal.specs.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 rounded-lg bg-[#09090B] px-3 py-2 text-xs text-[#E2E8F0] border border-[#D4AF37]/15"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warranty note */}
              <div className="mt-4 rounded-xl bg-[#09090B]/60 p-3 text-[11px] text-[#A1A1AA] border border-[#D4AF37]/10 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Garantia legal de 90 dias de motor e câmbio + laudo cautelar entregue em mãos.</span>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    `Olá, Sr. Alexandre! Vi a ficha técnica e fotos do veículo: ${selectedVehicleModal.name} (${selectedVehicleModal.year}) por ${selectedVehicleModal.price} no site da Garagem 21. Gostaria de agendar uma visita ou simular financiamento!`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B45309] py-3.5 text-sm font-extrabold text-[#09090B] shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-98 transition"
                >
                  <MessageCircle className="h-4 w-4 text-[#09090B]" />
                  Negociar com Sr. Alexandre no WhatsApp
                </a>
                <button
                  onClick={() => setSelectedVehicleModal(null)}
                  className="rounded-xl border border-[#D4AF37]/30 bg-[#141419] px-5 py-3 text-xs font-bold text-white hover:bg-[#1f1f26]"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. SIMULADOR DE FINANCIAMENTO & TROCA VIA WHATSAPP */}
      <section id="simulador" className="py-16 md:py-24 bg-[#09090B]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#181820] to-[#0D0D11] p-6 sm:p-10 shadow-2xl shadow-black">
            <div className="text-center max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/15 px-3.5 py-1 text-xs font-bold text-[#FDE68A] border border-[#D4AF37]/30">
                <Calculator className="h-3.5 w-3.5 text-[#D4AF37]" />
                Simulação Sem Compromisso
              </span>

              <h2 className="mt-3 font-[Outfit,sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Simule Financiamento ou Troca
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA]">
                Preencha os campos e receba a prévia de parcelas e avaliação no seu WhatsApp diretamente com o Sr. Alexandre.
              </p>
            </div>

            <form onSubmit={handleSimulatorSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silveira"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#09090B] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Categoria ou Carro de Interesse:
                  </label>
                  <select
                    value={vehicleOfInterest}
                    onChange={(e) => setVehicleOfInterest(e.target.value)}
                    className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#09090B] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                  >
                    <option value="SUV Premium / Médio">SUV Premium / Médio (Compass, Corolla Cross, HR-V)</option>
                    <option value="Picape 4x4 Diesel">Picape 4x4 Diesel (Hilux, Ranger, Toro)</option>
                    <option value="Sedan Executivo">Sedan Executivo (Corolla, Civic, BMW 320i)</option>
                    <option value="Hatch Econômico / Novo">Hatch Econômico (Polo, Yaris, HB20)</option>
                    <option value="Outro Modelo Específico">Outro Modelo Específico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Tem veículo na troca?
                  </label>
                  <select
                    value={hasTradeIn}
                    onChange={(e) => setHasTradeIn(e.target.value)}
                    className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#09090B] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                  >
                    <option value="Sim, tenho veículo para dar na troca">Sim, tenho veículo para dar na troca</option>
                    <option value="Não, pretendo comprar sem troca">Não, pretendo comprar sem troca</option>
                    <option value="Quero apenas vender meu carro (Troca com Troco)">Quero apenas vender meu carro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                  Valor Estimado de Entrada:
                </label>
                <select
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#09090B] px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                >
                  <option value="Sem entrada (100% financiado)">Sem entrada (100% financiado)</option>
                  <option value="R$ 10.000 a R$ 20.000">R$ 10.000 a R$ 20.000</option>
                  <option value="R$ 20.000 a R$ 40.000">R$ 20.000 a R$ 40.000</option>
                  <option value="R$ 40.000 a R$ 70.000">R$ 40.000 a R$ 70.000</option>
                  <option value="Mais de 50% de entrada / Pagamento À Vista">Mais de 50% de entrada / À Vista</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                  Dados do seu Carro Atual / Observações:
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Tenho um Gol 2018 com 65.000km completo para dar de entrada..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#09090B] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#EAB308] to-[#B45309] py-4 text-sm sm:text-base font-extrabold text-[#09090B] shadow-xl shadow-[#D4AF37]/20 transition-all hover:scale-[1.01] active:scale-98"
              >
                <MessageCircle className="h-5 w-5 text-[#09090B]" />
                Receber Proposta com Sr. Alexandre no WhatsApp
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#A1A1AA]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Simulação 100% segura sem custo e sem compromisso</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL MONUMENTAL: 231 AVALIAÇÕES 5 ESTRELAS */}
      <section id="depoimentos" className="border-t border-[#D4AF37]/20 bg-[#0D0D11] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase">
              Credibilidade Imbatível
            </span>
            <h2 className="mt-2 font-[Outfit,sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              231 Clientes e Nota Máxima no Google
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              Depoimentos públicos e auditados no Google Maps que comprovam por que somos referência em honestidade.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {realTestimonials.map((test, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-[#D4AF37]/30 bg-[#121216] p-7 shadow-lg transition-all hover:border-[#D4AF37] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="font-[Outfit,sans-serif] text-base font-bold text-[#FDE68A] mb-2">
                    "{test.highlight}"
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#D1D5DB] italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-white">{test.name}</span>
                    <span className="block text-[10px] font-semibold text-[#D4AF37]">{test.badge}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                    Google Maps
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO SHOWROOM & MAPA */}
      <section id="localizacao" className="py-16 md:py-24 bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Address Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase">
                Venha Conhecer o Showroom
              </span>
              <h2 className="mt-2 font-[Outfit,sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Tradição no Polo Automotivo da Várzea
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#D1D5DB]">
                A Garagem 21 Collection está sediada no coração automotivo de Teresópolis, na Rua Tenente Luiz Meirelles, nº 540. Um showroom moderno, coberto e com estacionamento próprio para você tomar um café com o Sr. Alexandre e examinar cada detalhe do veículo com calma.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl bg-[#121216] border border-[#D4AF37]/25 p-4">
                  <MapPin className="h-5 w-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-white">Endereço Completo:</span>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] mt-0.5">{address}</p>
                    <span className="mt-1 inline-block text-[11px] font-semibold text-[#FDE68A]">
                      Ponto de referência: Polo Automotivo da Várzea
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-[#121216] border border-[#D4AF37]/25 p-4">
                  <Clock className="h-5 w-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-white">Horário de Funcionamento:</span>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] mt-0.5">{hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-[#121216] border border-[#D4AF37]/25 p-4">
                  <Phone className="h-5 w-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-white">Telefone & WhatsApp Comercial:</span>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] mt-0.5">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline"
                >
                  Abrir Rota no Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/35 bg-[#121216] shadow-2xl">
                <div className="bg-[#181820] border-b border-[#D4AF37]/20 px-6 py-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-xs font-bold text-white">Showroom Garagem 21 Collection</span>
                  </div>
                  <span className="text-[11px] text-[#D4AF37]">Rua Ten. Luiz Meirelles, 540</span>
                </div>
                <div className="h-[340px] w-full bg-[#09090B]">
                  <iframe
                    title="Mapa Garagem 21 Collection"
                    src="https://maps.google.com/maps?q=R.+Ten.+Luiz+Meirelles,+540+-+V%C3%A1rzea,+Teres%C3%B3polis+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SANFONADO */}
      <section id="faq" className="border-t border-[#D4AF37]/20 bg-[#0D0D11] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 font-[Outfit,sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-sm text-[#A1A1AA]">
              Respostas diretas e transparentes sobre financiamento, laudo cautelar e trocas.
            </p>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#121216] transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-[Outfit,sans-serif] text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-[#D1D5DB] border-t border-[#D4AF37]/15 pt-3 animate-in fade-in-50 duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER PRETO E DOURADO */}
      <footer className="border-t border-[#D4AF37]/25 bg-[#09090B] text-[#E2E8F0] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div>
              <span className="font-[Outfit,sans-serif] text-xl font-extrabold text-white block">
                Garagem 21 Collection
              </span>
              <span className="text-xs font-bold text-[#D4AF37] block mt-0.5 tracking-wider uppercase">
                Seminovos Selecionados & Especiais
              </span>
              <p className="mt-3 text-xs leading-relaxed text-[#A1A1AA]">
                Mais de 230 avaliações 5 estrelas no Google Maps. A concessionária de maior credibilidade de Teresópolis, laudo cautelar 100% periciado e taxas reduzidas.
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase">
                Showroom Físico
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-[#D1D5DB]">
                {address}
              </p>
              <p className="mt-1 text-xs text-[#FDE68A] font-semibold">
                Polo Automotivo de Teresópolis
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase">
                Horários
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-[#D1D5DB]">
                Segunda a Sexta: 08:30 às 18:00
              </p>
              <p className="text-xs text-[#D1D5DB]">
                Sábados: 08:30 às 13:00
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#D4AF37] uppercase">
                Contato Direto
              </h4>
              <p className="mt-3 text-xs text-[#A1A1AA]">Atendimento Sr. Alexandre:</p>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-[#D4AF37] hover:underline"
              >
                {phoneDisplay}
              </a>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">
                Atendimento rápido pelo WhatsApp
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-[#D4AF37]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#A1A1AA]">
            <span>
              © {new Date().getFullYear()} Garagem 21 Collection · Todos os direitos reservados.
            </span>
            <span>
              Design & Performance por Cronos Agency
            </span>
          </div>
        </div>
      </footer>

      {/* 12. MOBILE FLOATING ACTION BAR PRETO E DOURADO (Fixed bottom bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D4AF37]/30 bg-[#09090B]/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-2xl">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] bg-[#141419]"
            aria-label="Ligar para Garagem 21"
          >
            <Phone className="h-5 w-5 text-[#D4AF37]" />
          </a>
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá, Sr. Alexandre! Vim pelo site da Garagem 21 e gostaria de ver os carros disponíveis.")}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B45309] py-3 text-sm font-extrabold text-[#09090B] shadow-lg shadow-[#D4AF37]/20 active:scale-98"
          >
            <MessageCircle className="h-4 w-4 text-[#09090B]" />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Garagem%2021%20Collection%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
