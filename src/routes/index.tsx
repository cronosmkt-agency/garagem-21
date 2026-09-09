import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Stethoscope, Activity, ShieldCheck, HeartHandshake, Smile, Sparkles, CheckCircle2,
  Calendar, Clock, MapPin, Phone, MessageCircle, ChevronDown, Star, ArrowRight, Menu, X,
  Award, Car, Wrench, GraduationCap, ShoppingBag, Dumbbell, Flame, Send, Zap, KeyRound,
  Coffee, Compass, Check, AlertCircle, FileText
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: ClientLandingPage,
});

export default function ClientLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("Comprar Seminovo \u00e0 Vista / Financiado");
  const [notes, setNotes] = useState("");

  const phone = "552136410020";
  const phoneDisplay = "(21) 3641-0020";
  const address = "R. Ten. Luiz Meirelles, 540 - Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta das 08:30 às 18:00 | Sábados até às 13:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial e gostaria de mais informações e atendimento."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site oficial e gostaria de atendimento.

*Nome:* ${name || "Não informado"}
*Interesse / Serviço:* ${selectedService}
${notes ? `*Observações:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const services = [["Venda de Seminovos Selecionados", "Veículos com baixa quilometragem, histórico verificado e laudo cautelar.", "Estoque"], ["Financiamento com Taxas Exclusivas", "Simulação rápida com as menores parcelas em até 60 vezes.", "Financiamento"], ["Avaliação Justa do Seu Usado", "Pegamos seu carro na troca com avaliação transparente de mercado.", "Troca"], ["Consignação Segura", "Venda seu carro pelo preço justo com segurança e sem dor de cabeça.", "Consignação"]];
  const features = [["ShieldCheck", "Garantia Mecânica & Procedência", "Todos os carros revisados com garantia de motor e câmbio documentada."], ["HeartHandshake", "Atendimento Humano do Sr. Alexandre", "Transparência total sem letras miúdas ou taxas surpresa."], ["Award", "Linha Collection Selecionada", "SUVs de alto padrão, picapes e seminovos em estado impecável de zero km."]];
  const testimonials = [["Robson Altoe", "Excelente atendimento. O Sr Alexandre é muito prestativo e Humano... Preço muito bom no carro. Comprei sem ver... fui depositando na confiança e finalizei com uma ótima taxa! Indico para todos!", 5], ["Patricia S Brandão Alves", "Fidelidade se conquista com seriedade. Este é o quarto carro que compro com a loja, sempre pela confiança, honestidade e qualidade dos veículos. Obrigada Alexandre!", 5], ["Xandão Oliveira", "Experiência maravilhosa, atendimento 5 estrelas e o mais importante: credibilidade ímpar!", 5]];
  const stats = [["231 ★", "Avaliações 5 Estrelas"], ["Nº 540", "Tenente Luiz Meirelles"], ["100%", "Laudo Cautelar Aprovado"]];
  const faq = [["Os carros têm laudo cautelar?", "Sim! Todos os nossos veículos possuem laudo cautelar emitido por empresa credenciada atestando originalidade de chassi, estrutura e ausência de sinistros."], ["Posso financiar sem entrada?", "Sim, dependendo da análise do seu score bancário temos planos sem entrada ou com entrada facilitada."], ["Onde fica a loja?", "Na Rua Tenente Luiz Meirelles, 540 - Várzea, Teresópolis - RJ."]];
  const simulatorOptions = ["Comprar Seminovo à Vista / Financiado", "Trocar de Carro (Dar Usado na Troca)", "Troca com Troco (Sair com Dinheiro)", "Vender Meu Carro para a Loja"];
  const reassuranceItems = [["100% dos Carros Periciados", "Laudo cautelar estrutural e de procedência sem leilão e sem batida."], ["Clientes que Compram Sem Ver", "Reputação tão sólida que compradores fecham negócio à distância."], ["Menores Taxas Bancárias", "Parceria direta com os principais bancos para aprovação rápida de crédito."]];

  // Icon mapping
  const renderIcon = (name: string) => {
    switch (name) {
      case "Stethoscope": return <Stethoscope className="h-6 w-6" />;
      case "Activity": return <Activity className="h-6 w-6" />;
      case "ShieldCheck": return <ShieldCheck className="h-6 w-6" />;
      case "HeartHandshake": return <HeartHandshake className="h-6 w-6" />;
      case "Smile": return <Smile className="h-6 w-6" />;
      case "Sparkles": return <Sparkles className="h-6 w-6" />;
      case "Award": return <Award className="h-6 w-6" />;
      case "Car": return <Car className="h-6 w-6" />;
      case "Wrench": return <Wrench className="h-6 w-6" />;
      case "GraduationCap": return <GraduationCap className="h-6 w-6" />;
      case "ShoppingBag": return <ShoppingBag className="h-6 w-6" />;
      case "Dumbbell": return <Dumbbell className="h-6 w-6" />;
      case "Flame": return <Flame className="h-6 w-6" />;
      case "KeyRound": return <KeyRound className="h-6 w-6" />;
      case "Coffee": return <Coffee className="h-6 w-6" />;
      case "Compass": return <Compass className="h-6 w-6" />;
      case "Clock": return <Clock className="h-6 w-6" />;
      default: return <CheckCircle2 className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-500/30 selection:text-white">
      {/* 1. NAVBAR - ZERO EMOJIS */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#09090b]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-zinc-800 text-red-500 border border-red-500/40 shadow-md">
              {renderIcon("Car")}
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-white sm:text-xl">
                Garagem 21 Collection
              </span>
              <span className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Concessionária de Seminovos Selecionados
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#diferenciais" className="text-sm font-medium text-zinc-400 transition hover:text-white">
              Diferenciais
            </a>
            <a href="#servicos" className="text-sm font-medium text-zinc-400 transition hover:text-white">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium text-zinc-400 transition hover:text-white">
              Sobre
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-zinc-400 transition hover:text-white">
              Avaliações
            </a>
            <a href="#faq" className="text-sm font-medium text-zinc-400 transition hover:text-white">
              Dúvidas
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Simular Financiamento com Alexandre
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-border bg-card px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Diferenciais
              </a>
              <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Serviços
              </a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Sobre
              </a>
              <a href="#avaliacoes" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Avaliações
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Dúvidas Frequentes
              </a>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Fale no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Text Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-foreground">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ⭐ 5,0 com Mais de 230 Avaliações · Recorde de Confiança · Tenente Luiz Meirelles
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                A revendedora de carros mais confiável de Teresópolis: <span className="text-accent underline decoration-accent/30 underline-offset-8">honestidade comprovada por mais de 230 clientes.</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Seminovos periciados com laudo cautelar aprovado, as menores taxas de financiamento da região e o atendimento honesto do Sr. Alexandre na Tenente Luiz Meirelles, 540.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  Simular Financiamento com Alexandre
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-bold text-foreground transition-all hover:bg-secondary"
                >
                  Conhecer Nossos Serviços
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Social Proof Pill */}
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex gap-1 text-amber-500">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    5.0 Estrelas · 5,0 Estrelas no Google Maps
                  </p>
                  <p className="text-xs text-muted-foreground">231 avaliações 100% 5 estrelas unânimes</p>
                </div>
              </div>
            </div>

            {/* Reassurance Card Right */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-red-500 border border-red-500/40">
                      {renderIcon("Car")}
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-foreground">
                        Garagem 21 Collection
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        Atendimento direto com Sr. Alexandre
                      </span>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                    Credibilidade Rara
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  {reassuranceItems.map(([title, desc]: [string, string], idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <p className="text-sm text-zinc-300">
                        <strong className="text-foreground">{title}:</strong> {desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border bg-secondary p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Atendimento & Informações</p>
                      <p className="text-sm font-bold text-foreground">{phoneDisplay}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="border-y border-zinc-800/80 bg-zinc-900/50 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {stats.map(([num, label]: [string, string], idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-white sm:text-4xl">{num}</span>
                <span className="mt-1 text-sm font-medium text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PILARES / DIFERENCIAIS */}
      <section id="diferenciais" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              Por que nos escolher
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Diferenciais que Inspiram Confiança
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map(([iconName, title, desc]: [string, string, string], idx: number) => (
              <div key={idx} className="group rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {renderIcon(iconName)}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVIÇOS & ESPECIALIDADES */}
      <section id="servicos" className="border-t border-border bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              Nossa Atuação
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Nossos Serviços Automotivos
            </p>
            <p className="mt-4 text-base text-zinc-400">
              Segurança jurídica e financeira para sua compra ou venda de veículo
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, desc, tag]: [string, string, string], idx: number) => (
              <div key={idx} className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/90 p-7 shadow-sm transition hover:border-zinc-700 hover:shadow-xl">
                <div>
                  <span className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
                    {tag}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de mais informações sobre: ${title}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:opacity-80"
                  >
                    Consultar Detalhes <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOBRE / O ESPAÇO - ZERO EMOJIS */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-zinc-800 text-red-500 border border-red-500/40 shadow-xl">
                  {renderIcon("Car")}
                </div>
                <h4 className="mt-5 text-2xl font-bold text-foreground">Garagem 21 Collection</h4>
                <p className="mt-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Seminovos de Confiança · R. Tenente Luiz Meirelles, 540
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-xs font-medium text-muted-foreground">Endereço Físico</p>
                    <p className="mt-1 text-xs font-bold text-foreground">{address}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-xs font-medium text-muted-foreground">Horários de Atendimento</p>
                    <p className="mt-1 text-xs font-bold text-foreground">{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Conheça Nossa Estrutura
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Tradição na Tenente Luiz Meirelles
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Situada no número 540 da R. Tenente Luiz Meirelles, a Garagem 21 Collection é um marco de idoneidade no comércio automotivo da serra.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Nossa maior medalha são as mais de 230 avaliações 5 estrelas no Google, onde clientes compram repetidas vezes e indicam para amigos e familiares.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROVA SOCIAL / AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-zinc-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              Depoimentos Reais
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              O Que Dizem os Compradores
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(([name, text, stars]: [string, string, number], idx: number) => (
              <div key={idx} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 italic">
                    "{text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                    {name.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-foreground">{name}</span>
                  <span className="text-xs text-muted-foreground">· Avaliação Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIMULADOR INTERATIVO / AGENDAMENTO WHATSAPP */}
      <section id="contato" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl sm:p-12">
            <div className="text-center">
              <span className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-foreground">
                Atendimento Rápido
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
                Simulador de Financiamento & Troca
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Preencha para receber uma proposta personalizada no WhatsApp:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-800/90 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground">
                  Tipo de Negociação:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-800/90 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
                >
                  {simulatorOptions.map((opt: string, idx: number) => (
                    <option key={idx} value={opt} className="bg-card text-foreground">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground">Mensagem ou Dúvida (Opcional):</label>
                <textarea
                  rows={3}
                  placeholder="Descreva detalhes ou dúvidas para adiantar o atendimento..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-800/90 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white focus:ring-2 focus:ring-white/10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-bold text-primary-foreground shadow-xl transition-all hover:opacity-90 active:scale-95"
              >
                <Send className="h-5 w-5" />
                Falar Direto com Sr. Alexandre
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FAQ SANFONADO */}
      <section id="faq" className="bg-zinc-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              Tire Suas Dúvidas
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Perguntas Frequentes
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faq.map(([q, a]: [string, string], idx: number) => (
              <div key={idx} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-white hover:bg-zinc-800/50"
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER - ZERO EMOJIS */}
      <footer className="border-t border-zinc-900 bg-black py-12 text-zinc-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-800 text-red-500 border border-red-500/40">
                  {renderIcon("Car")}
                </div>
                <span className="text-lg font-bold text-white">Garagem 21 Collection</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                A concessionária de seminovos mais confiável de Teresópolis com mais de 230 avaliações 5 estrelas. Carros com laudo cautelar aprovado e taxas reduzidas.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-white uppercase">Endereço</h4>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{address}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-white uppercase">Horários</h4>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{hours}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-white uppercase">Contato Direto</h4>
              <p className="mt-3 text-xs text-muted-foreground">Telefone / WhatsApp:</p>
              <p className="text-sm font-bold text-foreground">{phoneDisplay}</p>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Garagem 21 Collection · Todos os direitos reservados · Desenvolvimento e Performance por Cronos Agency
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={defaultWhatsAppLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all hover:scale-110 active:scale-95"
        aria-label="WhatsApp direto"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
