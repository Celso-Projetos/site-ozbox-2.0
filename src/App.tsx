import { useEffect, useState } from "react";
import {
  CalendarCheck, MessageCircle, MapPin, Navigation, Share2, Copy, Check,
  Dumbbell, Flame, HeartPulse, Users, ChevronDown, ChevronLeft, ChevronRight, Star,
  Clock, Sparkles, ArrowRight, ArrowUpRight, Play, Pause, ShieldCheck, Zap,
  ClipboardList, Search, MousePointerClick, BadgeCheck, Smartphone, Eye, Gauge,
  Link2, Globe
} from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);
}
function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
}

/* ============ LINKS OFICIAIS (fonte: brief + site atual) ============ */
const TECNOFIT = "https://app.tecnofit.com.br/tfRedirect?u=03820F0F6B6A";
const WA_BASE = "https://wa.me/553599362983";
const GOOGLE_PROFILE = "https://share.google/g6cbvBqnA2j05sSpQ";
const ADDRESS = "Rua Nazareto, 145, Bairro de Fátima, Pouso Alegre–MG, CEP 37554-172";
const MAPS_ROUTE = "https://www.google.com/maps/dir/?api=1&destination=Rua+Nazareto,+145,+Bairro+de+F%C3%A1tima,+Pouso+Alegre+-+MG,+37554-172";
const WAZE_ROUTE = "https://waze.com/ul?q=Rua%20Nazareto%20145%20Pouso%20Alegre%20MG&navigate=yes";
const MAP_EMBED = "https://www.google.com/maps?q=Rua+Nazareto,+145,+Bairro+de+F%C3%A1tima,+Pouso+Alegre+-+MG,+37554-172&output=embed";
const INSTAGRAM = "https://instagram.com/ctozzybox";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61562041643680";
const LINKTREE = "https://linktr.ee/ctozzybox";

const wa = (msg: string) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

const WA_MSGS = {
  comecando: "Olá! Estou começando e gostaria de conhecer os planos da OzzyBox. Podem me informar os valores, horários e como funciona a aula experimental?",
  frequencia: "Olá! Gostaria de conhecer os planos da OzzyBox para treinar com frequência. Podem me informar os valores e horários disponíveis?",
  comparar: "Olá! Quero comparar as opções de planos da OzzyBox. Podem me enviar as modalidades, frequências e valores para eu avaliar?",
  localizacao: `Olá! Segue a localização da OzzyBox: ${ADDRESS} — Rota: ${MAPS_ROUTE}`,
  geral: "Olá! Vim pelo site da OzzyBox e gostaria de mais informações sobre treinos e planos.",
};

function GoogleG({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.3h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.7 2.9c2.2-2.1 3.7-5.1 3.7-8.8z"/>
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.2-6.8-5l-3.9 3C3.3 21.3 7.3 24 12 24z"/>
      <path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-3.9-3C.5 8.2 0 10 0 12s.5 3.8 1.3 5.4l3.9-3z"/>
      <path fill="#EA4335" d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.6l3.9 3c.9-2.8 3.6-4.9 6.8-4.9z"/>
    </svg>
  );
}

const GOOGLE_REVIEWS = [
  {
    author: "Alzira Baldoni",
    stars: 5,
    quote: "Profissionais maravilhosos, equipamentos novos e ambiente impecável.",
    url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s117505768830215680143!2s0x94cbc73afd94e90f:0x88e40b808906c06f",
  },
  {
    author: "Darkwyllian Aquino",
    stars: 5,
    quote: "Estrutura top e professores muito qualificados.",
    url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s104829320646126862408!2s0x94cbc73afd94e90f:0x88e40b808906c06f",
  },
  {
    author: "Germania Santos Couto",
    stars: 5,
    quote: "Melhor box da região, excelente atendimento, treinos, materiais impecáveis.",
    url: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s111011534380773116634!2s0x94cbc73afd94e90f:0x88e40b808906c06f",
  },
];

function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const total = GOOGLE_REVIEWS.length;
  const review = GOOGLE_REVIEWS[index];
  const move = (direction: -1 | 1) => setIndex(current => (current + direction + total) % total);
  const controlClass = "grid size-12 shrink-0 cursor-pointer place-items-center rounded-full border border-zinc-500 transition-colors hover:border-[#FFB800] hover:text-[#FFB800] active:bg-white/10";

  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-titulo" className="bg-zinc-950 border-y border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[#FFB800] font-bold tracking-[.2em] text-xs flex items-center gap-2"><GoogleG className="w-4 h-4" /> AVALIAÇÕES NO GOOGLE</p>
            <h2 id="avaliacoes-titulo" className="font-display font-black text-4xl sm:text-5xl mt-2">Veja o que dizem sobre a OzzyBox.</h2>
          </div>
          <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" className="bg-white text-black font-bold px-4 py-3 min-h-12 rounded-xl inline-flex items-center gap-2 hover:bg-zinc-200 text-sm">
            <GoogleG className="w-4 h-4" /> Ver todas no Google <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>

        <div role="group" aria-roledescription="carrossel" aria-label="Comentários do Google" className="mt-7 rounded-3xl border border-white/10 bg-zinc-900 p-5 sm:p-8">
          <div id="avaliacao-atual" aria-live="polite" aria-atomic="true">
            <p className="sr-only">Avaliação {index + 1} de {total}</p>
            <figure className="flex min-h-44 flex-col">
              <p className="flex items-center gap-1 text-[#FFB800]">
                <span className="sr-only">{review.stars} de 5 estrelas</span>
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} aria-hidden="true" className={`size-5 ${star < review.stars ? "fill-current" : ""}`} />
                ))}
              </p>
              <blockquote cite={review.url} className="max-w-3xl py-4 text-lg leading-relaxed text-zinc-100 sm:text-2xl">
                <p>“{review.quote}”</p>
              </blockquote>
              <figcaption className="mt-auto flex flex-wrap items-baseline gap-x-4">
                <span className="font-bold">{review.author}</span>
                <a href={review.url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-zinc-300 underline underline-offset-4 hover:text-[#FFB800]">
                  Ver comentário original <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="mt-4 flex items-center justify-end gap-3 border-t border-white/10 pt-4">
            <button type="button" onClick={() => move(-1)} aria-label="Avaliação anterior" aria-controls="avaliacao-atual" className={controlClass}>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <span aria-hidden="true" className="text-sm tabular-nums text-zinc-300">{index + 1} / {total}</span>
            <button type="button" onClick={() => move(1)} aria-label="Próxima avaliação" aria-controls="avaliacao-atual" className={controlClass}>
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    id: "comecando", tag: "INTENÇÃO DE CONSULTA", icon: Sparkles, title: "Estou começando",
    desc: "Nunca treinou em box ou está voltando agora? Comece pela aula experimental e receba a opção ideal para o seu ritmo.",
    points: ["Aula experimental guiada", "Adaptação de carga e movimentos", "Consulte condições da experimental"],
    msg: WA_MSGS.comecando, cta: "Perguntar começando do zero",
  },
  {
    id: "frequencia", tag: "INTENÇÃO DE CONSULTA", icon: Flame, title: "Quero treinar com frequência",
    desc: "Já tem rotina ou quer treinar mais vezes por semana? Peça as frequências, horários e condições para o seu objetivo.",
    points: ["Frequências semanais variadas", "Horários disponíveis*", "Condições de matrícula"],
    msg: WA_MSGS.frequencia, cta: "Pedir orçamento para treinar direto", highlight: true,
  },
  {
    id: "comparar", tag: "INTENÇÃO DE CONSULTA", icon: Gauge, title: "Quero comparar as opções",
    desc: "Quer ver tudo lado a lado antes de decidir? Receba modalidades, frequências e valores e compare sem pressa.",
    points: ["Todas as opções de uma vez", "Valores e condições claros", "Tire dúvidas sem compromisso"],
    msg: WA_MSGS.comparar, cta: "Receber comparativo completo",
  },
];

const FAQS = [
  { q: "Como agendo a aula experimental?", a: "Toque em “Agendar aula experimental”, abra a agenda da Tecnofit, escolha o melhor horário com vaga e siga as instruções da plataforma. A confirmação acontece dentro da Tecnofit — leva poucos minutos." },
  { q: "Como consulto valores e planos?", a: "Na seção Planos, escolha o caminho que combina com você (começando, frequência ou comparar). O WhatsApp abre com a mensagem já preenchida — é só revisar e enviar. A equipe responde com valores, horários e condições atualizados." },
  { q: "Preciso ter experiência para começar?", a: "Não. O treino híbrido da OzzyBox adapta força e condicionamento ao seu nível. Na aula experimental a equipe conhece seu ritmo e ajusta cargas e movimentos para você treinar com segurança." },
  { q: "Onde fica a OzzyBox e como chego?", a: `Ficamos na ${ADDRESS}. Na seção “Como chegar” você abre a rota no Google Maps ou Waze, ou compartilha a localização pelo WhatsApp.` },
  { q: "Posso só conhecer o espaço antes de fechar?", a: "Pode — e é o ideal. Agende a aula experimental, conheça o box, a equipe e a comunidade. Se quiser confirmar horários especiais ou condições, chame no WhatsApp pelo botão de planos." },
];

export default function App() {
  const [motionOff, setMotionOff] = useState(false);
  const [paused, setPaused] = useState(false);
  const [treinoTab, setTreinoTab] = useState<"forca" | "cond" | "hibrido">("hibrido");
  const [openFaq, setOpenFaq] = useState(0);
  const [toast, setToast] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  // Plan builder
  const [intention, setIntention] = useState("Estou começando");
  const [freq, setFreq] = useState("3x por semana");
  const [shift, setShift] = useState("noite");
  const [goal, setGoal] = useState("condicionamento e saúde");
  const builtMsg = `Olá! ${intention === "Estou começando" ? "Estou começando" : intention === "Quero comparar" ? "Quero comparar as opções de planos" : "Quero treinar com frequência"} na OzzyBox. Tenho interesse em treinar ${freq}, prefiro o período da ${shift} e meu objetivo é ${goal}. Podem me informar valores, horários disponíveis e condições de matrícula?`;
  const copyText = async (text: string, label: string) => {
    try { await navigator.clipboard.writeText(text); setToast(`${label}!`); }
    catch { setToast(text); }
    setTimeout(() => setToast(""), 2600);
  };
  const shareLocation = async () => {
    const data = { title: "OzzyBox — Pouso Alegre, MG", text: `OzzyBox · ${ADDRESS}`, url: GOOGLE_PROFILE };
    if (navigator.share) { try { await navigator.share(data); setToast("Localização compartilhada!"); } catch { /* cancelado */ } }
    else { await copyText(`${data.text} — ${MAPS_ROUTE}`, "Link da localização copiado"); }
    setTimeout(() => setToast(""), 2600);
  };
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setMotionOff(true);
  }, []);

  return (
    <div className={`${motionOff ? "reduce-motion" : ""} bg-[#050505] text-white antialiased pb-[76px] md:pb-0`}>
      <a href="#planos" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#FFB800] focus:text-black focus:px-4 focus:py-2 focus:rounded-full focus:font-bold">Pular para planos</a>

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between gap-3">
          <a href="#topo" className="flex items-center gap-2.5 shrink-0" aria-label="OzzyBox - início">
            <span className="w-9 h-9 rounded-xl bg-[#FFB800] text-black font-display font-black text-xl grid place-items-center shadow-[0_0_22px_rgba(255,184,0,.5)]">Z</span>
            <span className="font-display font-black tracking-tight leading-none">OZZY<span className="text-[#FFB800]">BOX</span><span className="block text-[9px] tracking-[.18em] text-zinc-400 font-sans font-semibold">POUSO ALEGRE · MG</span></span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm text-zinc-300" aria-label="Navegação principal">
            <a className="hover:text-[#FFB800]" href="#treino">Treino</a>
            <a className="hover:text-[#FFB800]" href="#planos">Planos</a>
            <a className="hover:text-[#FFB800]" href="#experimental">Aula experimental</a>
            <a className="hover:text-[#FFB800]" href="#avaliacoes">Avaliações</a>
            <a className="hover:text-[#FFB800]" href="#como-chegar">Como chegar</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => { setMotionOff(!motionOff); }} className="hidden sm:inline-flex items-center gap-1.5 text-xs border border-white/15 rounded-full px-3 py-2 hover:border-[#FFB800]/60" aria-pressed={motionOff}>
              {motionOff ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />} {motionOff ? "Ativar movimento" : "Reduzir movimento"}
            </button>
            <a href={TECNOFIT} target="_blank" rel="noreferrer" className="bg-[#FFB800] text-black font-bold text-sm px-3 sm:px-4 py-2.5 rounded-full hover:bg-[#FFCF3D] inline-flex items-center gap-1.5"> <CalendarCheck className="w-4 h-4" /> Agendar</a>
          </div>
        </div>
      </header>

      <main>
      {/* ===== HERO / ABERTURA — inspiração Nopal: aproximação lenta + tipografia em movimento ===== */}
      <section id="topo" className="relative min-h-[100svh] overflow-hidden pt-[64px]">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}images/mascot-ozzy.jpg`} alt="" width={1254} height={1254} decoding="async" className={`w-full h-full object-cover object-[72%_center] sm:object-[68%_center] opacity-90 ${paused || motionOff ? "hero-zoom-paused" : "hero-zoom"}`} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/50" />
          <div className="absolute -right-10 top-24 font-display font-black text-[26rem] leading-none neon-z opacity-25 select-none hidden md:block animate-float-z">Z</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100svh-64px)]">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 backdrop-blur px-3 py-1.5 rounded-full text-xs"><MapPin className="w-3.5 h-3.5 text-[#FFB800]" /> Bairro de Fátima · Pouso Alegre, MG</span>
              <span className="inline-flex items-center gap-1.5 bg-[#FFB800] text-black px-3 py-1.5 rounded-full text-xs font-bold"><Zap className="w-3.5 h-3.5" /> CENTRO DE TREINAMENTO HÍBRIDO</span>
            </div>
            <h1 className="font-display font-black text-[13vw] sm:text-7xl lg:text-[86px] leading-[.92] tracking-tight">
              TREINO<br /><span className="text-[#FFB800] drop-shadow-[0_0_26px_rgba(255,184,0,.45)]">HÍBRIDO</span><br />
              <span className="text-stroke">DE VERDADE.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-zinc-200 max-w-xl leading-relaxed">
              Força + condicionamento no mesmo treino, em Pouso Alegre. Você fica mais forte, ganha fôlego e treina junto de uma comunidade que não te deixa parar — <strong className="text-white">começando pela aula experimental.</strong>
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl">
              <a href={TECNOFIT} target="_blank" rel="noreferrer" className="glow-cta flex-1 bg-[#FFB800] text-black font-display font-black text-base sm:text-lg px-6 py-4 rounded-2xl inline-flex items-center justify-center gap-2 hover:bg-[#FFCF3D] min-h-[56px]">
                <CalendarCheck className="w-5 h-5" /> Agendar aula experimental <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#planos" className="flex-1 bg-white/10 border border-white/25 backdrop-blur font-bold px-6 py-4 rounded-2xl inline-flex items-center justify-center gap-2 hover:bg-white/20 min-h-[56px]">Conhecer os planos</a>
            </div>
            <p className="mt-3 text-xs text-zinc-400 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Agendamento confirmado na Tecnofit · Vagas por horário</p>

            <div className="mt-8 grid grid-cols-3 max-w-xl divide-x divide-white/10 bg-black/50 backdrop-blur border border-white/10 rounded-2xl overflow-hidden text-center">
              {[["Força", "carga & técnica"], ["Condicionamento", "fôlego & ritmo"], ["Comunidade", "ninguém sozinho"]].map(([t, s]) => (
                <div key={t} className="p-2 sm:p-4"><p className="font-display font-black text-xs sm:text-base text-[#FFB800]">{t}</p><p className="text-[11px] sm:text-xs text-zinc-400">{s}</p></div>
              ))}
            </div>
            <button onClick={() => setPaused(!paused)} className="mt-4 text-xs text-zinc-400 underline underline-offset-4 hover:text-white inline-flex items-center gap-1.5" aria-pressed={paused}>
              {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />} {paused ? "Retomar aproximação do mascote" : "Pausar movimento do mascote"}
            </button>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-black/70 backdrop-blur-xl border border-[#FFB800]/30 rounded-3xl p-5 shadow-2xl">
              <p className="text-xs tracking-[.2em] text-[#FFB800] font-bold">COMECE HOJE EM 3 PASSOS</p>
              <ol className="mt-4 space-y-3 text-sm">
                {["Abra a agenda na Tecnofit", "Consulte as vagas do melhor horário", "Confirme pela plataforma e venha treinar"].map((s, i) => (
                  <li key={s} className="flex gap-3"><span className="w-7 h-7 shrink-0 rounded-full bg-[#FFB800] text-black font-black grid place-items-center">{i + 1}</span><span className="pt-1">{s}</span></li>
                ))}
              </ol>
              <a href={TECNOFIT} target="_blank" rel="noreferrer" className="mt-5 w-full bg-white text-black font-bold py-3.5 rounded-xl inline-flex justify-center items-center gap-2 hover:bg-zinc-200">Ver horários disponíveis <ArrowUpRight className="w-4 h-4" /></a>
              <a href={wa(WA_MSGS.geral)} target="_blank" rel="noreferrer" className="mt-2 w-full border border-white/20 py-3.5 rounded-xl inline-flex justify-center items-center gap-2 hover:bg-white/10 text-sm"><MessageCircle className="w-4 h-4 text-emerald-400" /> Tirar dúvida no WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="relative border-y border-white/10 bg-black/70 backdrop-blur overflow-hidden" aria-hidden="true">
          <div className={`flex whitespace-nowrap py-2.5 font-display font-black text-sm tracking-widest ${motionOff ? "" : "animate-marquee"}`}>
            {[0, 1].map(k => <span key={k} className="pr-2">FORÇA • CONDICIONAMENTO • COMUNIDADE • POUSO ALEGRE • AULA EXPERIMENTAL • FORÇA • CONDICIONAMENTO • COMUNIDADE • POUSO ALEGRE • AULA EXPERIMENTAL •&nbsp;</span>)}
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM É ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-3">
          {[
            [Sparkles, "Nunca treinou em box", "Comece do zero, com adaptação em cada movimento."],
            [HeartPulse, "Está voltando a treinar", "Retome no seu ritmo, com acompanhamento de perto."],
            [Flame, "Já treina e quer evoluir", "Força, técnica e intensidade para subir de nível."],
          ].map(([Icon, t, d]: any) => (
            <a key={t} href="#planos" className="group bg-zinc-900/70 border border-white/10 rounded-2xl p-5 hover:border-[#FFB800]/60 transition">
              <Icon className="w-6 h-6 text-[#FFB800]" /><h3 className="font-display font-black mt-3">{t}</h3><p className="text-sm text-zinc-400 mt-1">{d}</p><span className="text-sm text-[#FFB800] font-semibold inline-flex gap-1 mt-3">Ver meu caminho <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== TREINO HÍBRIDO ===== */}
      <section id="treino" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 scroll-mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-[#FFB800] font-bold tracking-[.2em] text-xs">O TREINO</p><h2 className="font-display font-black text-3xl sm:text-5xl mt-2">Força + condicionamento,<br className="hidden sm:block" /> explicados sem complicação.</h2></div>
          <div className="flex bg-zinc-900 border border-white/10 rounded-full p-1" role="tablist" aria-label="Tipo de treino">
            {([["forca", "Só força"], ["cond", "Só condicionamento"], ["hibrido", "Híbrido OzzyBox"]] as const).map(([id, label]) => (
              <button key={id} role="tab" aria-selected={treinoTab === id} onClick={() => setTreinoTab(id)} className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold ${treinoTab === id ? "bg-[#FFB800] text-black" : "text-zinc-300 hover:text-white"}`}>{label}</button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mt-8">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] bg-zinc-900">
            <img loading="lazy" width={1200} height={900} src={treinoTab === "cond" ? "https://images.pexels.com/photos/20231074/pexels-photo-20231074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" : treinoTab === "forca" ? "https://images.pexels.com/photos/7674492/pexels-photo-7674492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" : "https://images.pexels.com/photos/14679050/pexels-photo-14679050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"} alt={treinoTab === "cond" ? "Atleta treinando condicionamento com cordas navais" : treinoTab === "forca" ? "Atleta levantando barra em treino de força" : "Turma treinando junta em treino híbrido"} decoding="async" className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-black/80 backdrop-blur text-[11px] px-2.5 py-1.5 rounded-full border border-white/15">Foto ilustrativa</span>
          </div>
          <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-6 sm:p-8">
            {treinoTab === "forca" && <><Dumbbell className="w-8 h-8 text-[#FFB800]" /><h3 className="font-display font-black text-2xl mt-3">Força: construir base</h3><p className="text-zinc-300 mt-2 leading-relaxed">Agachamento, terra, empurrar e puxar com técnica e progressão de carga. É a base para treinar forte, com segurança, em qualquer idade ou nível.</p><ul className="mt-4 space-y-2 text-sm text-zinc-300">{["Técnica corrigida em toda aula", "Carga adaptada ao seu nível", "Evolução acompanhada pelos coaches"].map(x => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-.5" />{x}</li>)}</ul></>}
            {treinoTab === "cond" && <><HeartPulse className="w-8 h-8 text-[#FFB800]" /><h3 className="font-display font-black text-2xl mt-3">Condicionamento: ganhar fôlego</h3><p className="text-zinc-300 mt-2 leading-relaxed">Circuitos, cordas, remo, corrida e movimentos funcionais em ritmo progressivo. Você melhora fôlego, resistência e disposição para o dia a dia.</p><ul className="mt-4 space-y-2 text-sm text-zinc-300">{["Intensidade no seu ritmo", "Gasto calórico alto", "Resultado que você sente na rotina"].map(x => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-.5" />{x}</li>)}</ul></>}
            {treinoTab === "hibrido" && <><Zap className="w-8 h-8 text-[#FFB800]" /><h3 className="font-display font-black text-2xl mt-3">Híbrido: os dois, na mesma aula</h3><p className="text-zinc-300 mt-2 leading-relaxed">A OzzyBox combina força e condicionamento na mesma sessão. Você não escolhe entre ficar forte ou ter fôlego: evolui nos dois, com a turma puxando junto.</p><ul className="mt-4 space-y-2 text-sm text-zinc-300">{["Treino diferente a cada dia", "Para iniciantes e avançados", "Comunidade que motiva e acolhe"].map(x => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-.5" />{x}</li>)}</ul></>}
            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <a href={TECNOFIT} target="_blank" rel="noreferrer" className="bg-[#FFB800] text-black font-bold px-5 py-3.5 rounded-xl inline-flex justify-center gap-2">Experimentar na prática <ArrowRight className="w-4 h-4" /></a>
              <a href="#experimental" className="border border-white/20 px-5 py-3.5 rounded-xl inline-flex justify-center">Como é a 1ª aula?</a>
            </div>
          </div>
        </div>

        {/* Comunidade / Murph */}
        <div className="mt-10">
          <div className="flex items-center gap-2"><Users className="w-5 h-5 text-[#FFB800]" /><h3 className="font-display font-black text-2xl">Comunidade que treina junta</h3><span className="text-[11px] bg-white/10 border border-white/15 px-2 py-1 rounded-full">Material de divulgação</span></div>
          <p className="text-zinc-400 text-sm mt-1 max-w-2xl">Peças de divulgação de treinos em grupo e do desafio Murph. Quando houver fotos originais autorizadas das aulas, da equipe e do espaço, elas terão prioridade nesta seção.</p>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            {[
              ["https://images.pexels.com/photos/4853324/pexels-photo-4853324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", "Treino em grupo — divulgação", "Energia de turma em treinos coletivos e eventos do box."],
              ["https://images.pexels.com/photos/36534261/pexels-photo-36534261.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", "Desafio Murph — divulgação", "Referência visual do desafio em grupo: superação compartilhada."],
              ["https://images.pexels.com/photos/917656/pexels-photo-917656.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", "Comunidade OzzyBox — divulgação", "Quem treina junto, evolui junto. Conheça a turma na experimental."],
            ].map(([src, cap, sub]) => (
              <figure key={cap} className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <div className="aspect-[4/3] overflow-hidden"><img loading="lazy" decoding="async" width={800} height={600} src={src} alt={cap} className="w-full h-full object-cover hover:scale-105 transition duration-500" /></div>
                <figcaption className="p-3"><p className="font-bold text-sm">{cap}</p><p className="text-xs text-zinc-400 mt-.5">{sub}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANOS — SEÇÃO CENTRAL ===== */}
      <section id="planos" className="bg-[#0B0B0B] border-y border-[#FFB800]/20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="bg-[#FFB800] text-black text-xs font-black tracking-widest px-3 py-1.5 rounded-full">PLANOS & ORÇAMENTO</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl mt-4">Escolha como quer começar.<br /><span className="text-[#FFB800]">A gente responde no WhatsApp.</span></h2>
            <p className="text-zinc-400 mt-3">Valores e condições são confirmados pela equipe no WhatsApp — sem preço desatualizado no site. Escolha uma intenção abaixo: a mensagem já vai preenchida, é só revisar e enviar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {PLANS.map(p => (
              <article key={p.id} className={`relative rounded-3xl p-6 flex flex-col ${p.highlight ? "bg-[#FFB800] text-black shadow-[0_18px_50px_rgba(255,184,0,.25)]" : "bg-zinc-900 border border-white/10"}`}>
                <span className={`text-[10px] font-black tracking-widest ${p.highlight ? "text-black/70" : "text-[#FFB800]"}`}>{p.tag}</span>
                <p.icon className={`w-8 h-8 mt-3 ${p.highlight ? "text-black" : "text-[#FFB800]"}`} />
                <h3 className="font-display font-black text-2xl mt-2">{p.title}</h3>
                <p className={`text-sm mt-2 leading-relaxed ${p.highlight ? "text-black/75" : "text-zinc-400"}`}>{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm flex-1">{p.points.map(x => <li key={x} className="flex gap-2"><Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.highlight ? "text-black" : "text-emerald-400"}`} />{x}</li>)}</ul>
                <a href={wa(p.msg)} target="_blank" rel="noreferrer" className={`mt-6 font-bold py-3.5 px-4 rounded-xl inline-flex justify-center items-center gap-2 min-h-[52px] ${p.highlight ? "bg-black text-white hover:bg-zinc-900" : "bg-[#FFB800] text-black hover:bg-[#FFCF3D]"}`}><MessageCircle className="w-5 h-5" /> {p.cta}</a>
                <p className={`text-[11px] mt-2 text-center ${p.highlight ? "text-black/60" : "text-zinc-500"}`}>Abre o WhatsApp com a mensagem pronta</p>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-500 mt-3">* Horários e frequências sujeitos à disponibilidade — confirmados no atendimento.</p>

          {/* Montador de mensagem */}
          <div className="grid lg:grid-cols-5 gap-4 mt-8">
            <div className="lg:col-span-3 bg-zinc-900 border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-black text-xl flex items-center gap-2"><ClipboardList className="w-5 h-5 text-[#FFB800]" /> Monte sua mensagem em 10 segundos</h3>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <label className="text-xs text-zinc-400">Sua situação<select value={intention} onChange={e => setIntention(e.target.value)} className="mt-1 w-full bg-black border border-white/15 rounded-xl px-3 py-3 text-white text-sm"><option>Estou começando</option><option>Quero treinar com frequência</option><option>Quero comparar</option></select></label>
                <label className="text-xs text-zinc-400">Frequência desejada<select value={freq} onChange={e => setFreq(e.target.value)} className="mt-1 w-full bg-black border border-white/15 rounded-xl px-3 py-3 text-white text-sm"><option>2x por semana</option><option>3x por semana</option><option>5x por semana</option><option>todos os dias</option></select></label>
                <label className="text-xs text-zinc-400">Melhor período<select value={shift} onChange={e => setShift(e.target.value)} className="mt-1 w-full bg-black border border-white/15 rounded-xl px-3 py-3 text-white text-sm"><option>manhã</option><option>tarde</option><option>noite</option></select></label>
                <label className="text-xs text-zinc-400">Objetivo<select value={goal} onChange={e => setGoal(e.target.value)} className="mt-1 w-full bg-black border border-white/15 rounded-xl px-3 py-3 text-white text-sm"><option>condicionamento e saúde</option><option>ganhar força</option><option>perder peso</option><option>performance</option></select></label>
              </div>
              <div className="bg-black border border-emerald-500/25 rounded-2xl p-4 mt-4">
                <p className="text-[11px] tracking-widest text-emerald-400 font-bold flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> PRÉVIA NO WHATSAPP — REVISE ANTES DE ENVIAR</p>
                <p className="text-sm text-zinc-200 mt-2 leading-relaxed">“{builtMsg}”</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <a href={wa(builtMsg)} target="_blank" rel="noreferrer" className="flex-1 bg-emerald-500 text-black font-black py-3.5 rounded-xl inline-flex justify-center items-center gap-2 hover:bg-emerald-400 min-h-[52px]"><MessageCircle className="w-5 h-5" /> Enviar esta mensagem</a>
                <button onClick={() => copyText(builtMsg, "Mensagem copiada")} className="border border-white/20 px-5 py-3.5 rounded-xl inline-flex justify-center items-center gap-2 hover:bg-white/10"><Copy className="w-4 h-4" /> Copiar texto</button>
              </div>
            </div>
            <div className="lg:col-span-2 bg-black border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-black text-lg">Pergunte antes de contratar</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-zinc-300">
                {["Qual frequência semanal combina com minha rotina?", "Quais horários têm vaga no meu período?", "Qual o valor e as condições de matrícula?", "A aula experimental está incluída?", "Existe fidelidade ou taxa de matrícula?", "Posso pausar ou trocar de plano depois?"].map(q => <li key={q} className="flex gap-2"><BadgeCheck className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />{q}</li>)}
              </ul>
              <p className="text-xs text-zinc-500 mt-4">Toque em qualquer caminho acima e essa conversa já começa com a sua dúvida. Resposta direta da equipe OzzyBox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AULA EXPERIMENTAL ===== */}
      <section id="experimental" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#FFB800] font-bold tracking-[.2em] text-xs">AULA EXPERIMENTAL</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl mt-2">Conheça o box treinando.<br />Sem compromisso.</h2>
            <p className="text-zinc-400 mt-3 max-w-lg">A melhor forma de entender o treino híbrido é vivendo uma aula: você conhece o espaço, a equipe e a turma, e descobre seu ritmo com tudo adaptado para você.</p>
            <div className="mt-7 space-y-3">
              {[
                [MousePointerClick, "1 · Abra a agenda", "Toque no botão e acesse a campanha da OzzyBox na Tecnofit."],
                [Search, "2 · Consulte as vagas", "Veja os horários com vaga e escolha o melhor para a sua rotina."],
                [BadgeCheck, "3 · Confirme na Tecnofit", "Siga as instruções da plataforma. A confirmação acontece lá — simples e rápido."],
              ].map(([Icon, t, d]: any) => (
                <div key={t} className="flex gap-4 bg-zinc-900/70 border border-white/10 rounded-2xl p-4"><span className="w-11 h-11 shrink-0 rounded-xl bg-[#FFB800]/15 border border-[#FFB800]/30 grid place-items-center"><Icon className="w-5 h-5 text-[#FFB800]" /></span><div><p className="font-bold">{t}</p><p className="text-sm text-zinc-400">{d}</p></div></div>
              ))}
            </div>
            <a href={TECNOFIT} target="_blank" rel="noreferrer" className="mt-6 bg-[#FFB800] text-black font-display font-black px-6 py-4 rounded-2xl inline-flex items-center gap-2 hover:bg-[#FFCF3D] min-h-[56px]"><CalendarCheck className="w-5 h-5" /> Abrir agenda na Tecnofit <ArrowUpRight className="w-5 h-5" /></a>
            <p className="text-xs text-zinc-500 mt-2">Você será direcionado para app.tecnofit.com.br · Confirmação na plataforma</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] bg-zinc-900">
            <img loading="lazy" width={1200} height={900} src="https://images.pexels.com/photos/4162444/pexels-photo-4162444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Atleta em aula experimental segurando kettlebell com orientação" decoding="async" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-16">
              <p className="font-display font-black text-lg">Na 1ª aula você recebe:</p>
              <div className="flex flex-wrap gap-2 mt-2">{["Conheça o box", "Treino adaptado", "Conversa sobre planos"].map(x => <span key={x} className="bg-white/15 backdrop-blur border border-white/20 text-xs px-2.5 py-1.5 rounded-full">{x}</span>)}</div>
            </div>
            <span className="absolute top-3 left-3 bg-black/80 text-[11px] px-2.5 py-1.5 rounded-full border border-white/15">Foto ilustrativa</span>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ===== COMO CHEGAR ===== */}
      <section id="como-chegar" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <p className="text-[#FFB800] font-bold tracking-[.2em] text-xs">COMO CHEGAR</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl mt-2">A gente se encontra aqui.</h2>
            <address className="not-italic bg-zinc-900 border border-white/10 rounded-2xl p-5 mt-5">
              <p className="flex gap-2 font-bold"><MapPin className="w-5 h-5 text-[#FFB800] shrink-0" /> Rua Nazareto, 145</p>
              <p className="text-zinc-400 text-sm ml-7">Bairro de Fátima · Pouso Alegre–MG<br />CEP 37554-172</p>
              <button onClick={() => copyText(ADDRESS, "Endereço copiado")} className="ml-7 mt-3 text-sm text-[#FFB800] font-semibold inline-flex items-center gap-1.5 hover:underline"><Copy className="w-4 h-4" /> Copiar endereço</button>
            </address>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <a href={MAPS_ROUTE} target="_blank" rel="noreferrer" className="bg-[#FFB800] text-black font-bold py-3.5 px-3 rounded-xl inline-flex justify-center items-center gap-2 min-h-[52px]"><Navigation className="w-4 h-4" /> Google Maps</a>
              <a href={WAZE_ROUTE} target="_blank" rel="noreferrer" className="bg-sky-500 text-white font-bold py-3.5 px-3 rounded-xl inline-flex justify-center items-center gap-2 min-h-[52px]"><Navigation className="w-4 h-4" /> Waze</a>
              <a href={wa(WA_MSGS.localizacao)} target="_blank" rel="noreferrer" className="bg-emerald-600 text-white font-bold py-3.5 px-3 rounded-xl inline-flex justify-center items-center gap-2 min-h-[52px]"><MessageCircle className="w-4 h-4" /> Enviar no WhatsApp</a>
              <button onClick={shareLocation} className="bg-white text-black font-bold py-3.5 px-3 rounded-xl inline-flex justify-center items-center gap-2 min-h-[52px]"><Share2 className="w-4 h-4" /> Compartilhar</button>
            </div>
            <button onClick={() => copyText(MAPS_ROUTE, "Link de rota copiado")} className="mt-2 w-full border border-white/15 py-3 rounded-xl text-sm inline-flex justify-center items-center gap-2 hover:bg-white/5"><Link2 className="w-4 h-4" /> Copiar link da localização (alternativa ao compartilhar)</button>
            <p className="text-xs text-zinc-500 mt-3 flex gap-1.5"><Clock className="w-4 h-4 shrink-0" /> Horários de aula confirmados na agenda da Tecnofit e no WhatsApp — consulte antes da primeira visita.</p>
          </div>
          <div className="lg:col-span-3 relative w-full min-w-0 rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 min-h-[380px] aspect-[4/3] lg:aspect-auto">
            {!mapLoaded ? (
              <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,#2a2100,transparent_55%),linear-gradient(145deg,#141414,#050505)] p-6 text-center">
                <div><MapPin className="w-10 h-10 text-[#FFB800] mx-auto" /><p className="font-display font-black text-xl mt-3">Rua Nazareto, 145 · Bairro de Fátima</p><p className="text-sm text-zinc-400 mt-1">O mapa carrega sob demanda para a página ficar rápida.</p><button onClick={() => setMapLoaded(true)} className="mt-4 bg-[#FFB800] text-black font-bold px-5 py-3.5 rounded-xl inline-flex items-center gap-2"><Eye className="w-4 h-4" /> Carregar mapa interativo</button></div>
              </div>
            ) : (
              <iframe title="Mapa da OzzyBox — Rua Nazareto, 145, Bairro de Fátima, Pouso Alegre, MG" src={MAP_EMBED} className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 scroll-mt-20">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-center">Dúvidas antes do próximo passo</h2>
        <div className="mt-6 space-y-2">
          {FAQS.map((f, i) => (
            <div key={f.q} className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i} className="w-full flex items-center justify-between gap-3 text-left font-bold p-4 sm:p-5 min-h-[56px]">{f.q}<ChevronDown className={`w-5 h-5 shrink-0 text-[#FFB800] transition ${openFaq === i ? "rotate-180" : ""}`} /></button>
              {openFaq === i && <p className="px-4 sm:px-5 pb-5 text-sm text-zinc-300 leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-8 justify-between">
          <div>
            <p className="font-display font-black text-2xl">OZZY<span className="text-[#FFB800]">BOX</span> <span className="text-xs bg-white/10 px-2 py-1 rounded-full align-middle">V2</span></p>
            <p className="text-sm text-zinc-400 mt-2 max-w-sm">Centro de treinamento híbrido e cross training em Pouso Alegre, MG.<br />{ADDRESS}</p>
            <p className="text-xs text-zinc-600 mt-2">Mascote e Z em neon âmbar — identidade OzzyBox.</p>
          </div>
          <nav aria-label="Redes sociais e links">
            <p className="text-xs tracking-widest text-zinc-500 font-bold">SIGA E FALE COM A OZZYBOX</p>
            <div className="flex gap-2 mt-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram @ctozzybox" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 grid place-items-center hover:border-[#FFB800] hover:text-[#FFB800]"><InstagramIcon className="w-5 h-5" /></a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook da OzzyBox" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 grid place-items-center hover:border-[#FFB800] hover:text-[#FFB800]"><FacebookIcon className="w-5 h-5" /></a>
              <a href={wa(WA_MSGS.geral)} target="_blank" rel="noreferrer" aria-label="WhatsApp da OzzyBox" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 grid place-items-center hover:border-emerald-400 hover:text-emerald-400"><MessageCircle className="w-5 h-5" /></a>
              <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" aria-label="Perfil da OzzyBox no Google" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 grid place-items-center hover:border-white/50"><GoogleG className="w-5 h-5" /></a>
              <a href={LINKTREE} target="_blank" rel="noreferrer" aria-label="Linktree da OzzyBox" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 grid place-items-center hover:border-[#FFB800] hover:text-[#FFB800]"><Globe className="w-5 h-5" /></a>
            </div>
            <p className="text-sm text-zinc-400 mt-3">Instagram: <a className="text-[#FFB800] font-semibold hover:underline" href={INSTAGRAM} target="_blank" rel="noreferrer">@ctozzybox</a></p>
          </nav>
          <nav aria-label="Links rápidos" className="text-sm space-y-2">
            <p className="text-xs tracking-widest text-zinc-500 font-bold">ATALHOS</p>
            <a className="block hover:text-[#FFB800]" href="#planos">Planos e orçamento</a>
            <a className="block hover:text-[#FFB800]" href="#experimental">Aula experimental</a>
            <a className="block hover:text-[#FFB800]" href="#como-chegar">Como chegar</a>
            <a className="block hover:text-[#FFB800]" href="#faq">Dúvidas frequentes</a>
          </nav>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-600 px-4">OzzyBox · Agendamento pela Tecnofit · Orçamentos pelo WhatsApp oficial</div>
      </footer>

      {/* ===== BARRA MOBILE DE POLEGAR (não cobre o conteúdo: respiro pb no container) ===== */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-black/92 backdrop-blur-xl border-t border-white/15 px-3 pt-2 pb-[max(10px,env(safe-area-inset-bottom))] flex gap-2">
        <a href={TECNOFIT} target="_blank" rel="noreferrer" className="flex-[1.35] bg-[#FFB800] text-black font-display font-black text-[15px] py-3.5 rounded-xl inline-flex justify-center items-center gap-1.5 min-h-[52px]"><CalendarCheck className="w-5 h-5" /> Agendar experimental</a>
        <a href="#planos" className="flex-1 bg-white/12 border border-white/25 font-bold py-3.5 rounded-xl inline-flex justify-center items-center gap-1.5 min-h-[52px]"><MessageCircle className="w-4 h-4 text-emerald-400" /> Planos</a>
      </div>

      {toast && <div role="status" className="fixed left-1/2 -translate-x-1/2 bottom-24 md:bottom-6 z-[60] bg-[#FFB800] text-black font-bold text-sm px-4 py-3 rounded-full shadow-2xl inline-flex items-center gap-2"><Check className="w-4 h-4" /> {toast}</div>}
    </div>
  );
}
