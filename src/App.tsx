import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  Lock,
  Play,
  ChevronRight,
  Clock,
  Users,
  Globe,
  Instagram,
  Youtube,
  Facebook,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bonuses = [
    {
      title: "12 sessões de terapia em PDF",
      desc: "12 sessões de terapia em PDF para aplicar em casa. O mesmo protocolo usado na sessão direta com a Dra. Karinne",
      oldPrice: "R$ 197,00",
      newPrice: "R$ 0",
      img: "https://i.ibb.co/bj1fcQxd/Chat-GPT-Image-25-de-fev-de-2026-17-20-57.png"
    },
    {
      title: "Comunidade Exclusiva",
      desc: "Acesso ao nosso grupo fechado para troca de experiências e suporte mútuo entre mulheres.",
      oldPrice: "R$ 97,00",
      newPrice: "R$ 0",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Mariana S.",
      role: "Casada há 8 anos",
      content: "O método mudou minha forma de ver o relacionamento. Em 2 semanas meu marido já era outra pessoa.",
      avatar: "https://i.pravatar.cc/150?u=mariana"
    },
    {
      name: "Camila R.",
      role: "Casada há 12 anos",
      content: "Eu achei que não tinha mais volta, mas as técnicas de comunicação foram a chave para nossa restauração.",
      avatar: "https://i.pravatar.cc/150?u=camila"
    },
    {
      name: "Juliana F.",
      role: "Noiva",
      content: "Aprendi a colocar limites sem brigar. Hoje me sinto muito mais valorizada e ouvida.",
      avatar: "https://i.pravatar.cc/150?u=juliana"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-200">
              <Heart className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">Terapia de Bolso</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#metodo" className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">O Método</a>
            <a href="#depoimentos" className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">Depoimentos</a>
            <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">Sobre</a>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-violet-600 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200">
              Quero Restaurar Meu Lar
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full text-violet-600 text-sm font-bold mb-8 border border-violet-100"
            >
              <Sparkles className="w-4 h-4" />
              <span>MÉTODO EXCLUSIVO DE RESTAURAÇÃO FAMILIAR</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-8xl text-slate-900 mb-8 leading-[1.05] tracking-tight font-bold"
            >
              Recupere a conexão e o <span className="text-violet-600 italic">respeito</span> no seu casamento
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 mb-12 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Um guia prático e direto para mulheres que desejam transformar o clima do lar e reconquistar o valor que merecem.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <button className="w-full md:w-auto bg-violet-600 text-white px-10 py-6 rounded-2xl text-lg font-bold hover:bg-violet-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-violet-200 flex items-center justify-center gap-3">
                Sim, Quero Salvar Meu Casamento
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  ))}
                </div>
                <span className="text-sm font-medium">+2.000 mulheres transformadas</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6 font-bold tracking-tight">Você sente que seu casamento está por um fio?</h2>
            <p className="text-slate-500 text-lg md:text-xl font-light">Se você se identifica com algum desses pontos, o Terapia de Bolso foi feito para você:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Falta de Diálogo", desc: "Vocês mal conversam e, quando conversam, acaba em briga ou silêncio absoluto." },
              { title: "Desvalorização", desc: "Você sente que faz tudo, mas não é vista, ouvida ou valorizada pelo seu parceiro." },
              { title: "Distância Física", desc: "A intimidade esfriou e vocês parecem mais dois colegas de quarto do que um casal." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-500 transition-colors duration-500">
                  <Heart className="text-rose-500 w-7 h-7 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 leading-[1.1] tracking-tight font-bold">
                São técnicas únicas e exclusivas, onde você vai aplicar <span className="italic text-violet-400">sozinha.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed">
                E seu parceiro vai sentir a diferença na mesma semana! O método foca no que você tem controle para mudar o ambiente:
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  "Sua comunicação",
                  "Sua postura emocional",
                  "Seu nível de valor dentro da relação",
                  "Sua energia feminina",
                  "Seus limites"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-violet-500 w-6 h-6 flex-shrink-0" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-slate-900 text-white px-10 py-6 rounded-2xl text-lg font-bold hover:bg-violet-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-200">
                Quero Começar Agora
              </button>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516589174184-c68526614af0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Casal feliz" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
                </div>
                <p className="text-slate-600 italic font-light">"Em menos de 10 dias meu marido voltou a me olhar com admiração. O clima em casa mudou completamente."</p>
                <p className="mt-4 font-bold text-slate-900">— Ana Paula, Aluna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/10 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Oferta Especial</span>
            <h2 className="font-serif text-4xl md:text-7xl mb-6 font-bold tracking-tight">Bônus Exclusivos</h2>
            <p className="text-slate-400 text-lg md:text-xl font-light">Ao garantir o método hoje, você também leva:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {bonuses.map((bonus, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] overflow-hidden hover:bg-white/10 transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{bonus.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">{bonus.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 line-through text-sm block mb-1">{bonus.oldPrice}</span>
                      <span className="text-3xl font-bold text-violet-400">{bonus.newPrice}</span>
                    </div>
                    <div className="px-6 py-2 bg-violet-600/20 text-violet-400 rounded-full text-sm font-bold border border-violet-600/30">
                      GRÁTIS
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 md:py-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-violet-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">A Especialista</span>
              <h2 className="font-serif text-4xl md:text-8xl mb-6 md:mb-12 leading-tight font-bold tracking-tighter">Dra. Karinne Bruno</h2>
              <div className="space-y-4 md:space-y-10 text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                <p>
                  Sou Psicóloga, Psicanalista e Sexóloga, Pós graduada em Psicologia Analítica Junguiana. Já ajudei mais de 2.000 casais no Brasil e em mais de 14 países a reconquistarem a conexão que já havia se perdido.
                </p>
                <div className="flex flex-wrap gap-6 md:gap-12 pt-4 md:pt-10">
                  <div className="flex flex-col items-center gap-2 md:gap-4">
                    <span className="text-4xl md:text-6xl font-serif text-slate-900 font-bold">14+</span>
                    <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">Países</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 md:gap-4">
                    <span className="text-4xl md:text-6xl font-serif text-slate-900 font-bold">2k+</span>
                    <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">Alunas</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 md:gap-4">
                    <span className="text-4xl md:text-6xl font-serif text-slate-900 font-bold">10+</span>
                    <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">Anos Exp.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://i.ibb.co/3m2X2D3J/Chat-GPT-Image-25-de-fev-de-2026-17-18-02.png" 
                    alt="Dra. Karinne Bruno" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600 rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl border-8 border-white animate-bounce">
                  <span className="font-bold text-sm leading-tight uppercase tracking-tighter">Especialista em Casais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-32">
            <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-8 block">Resultados Reais</span>
            <h2 className="font-serif text-4xl md:text-7xl text-slate-900 mb-4 md:mb-6 font-bold tracking-tight">O que as pessoas dizem sobre o método</h2>
            <p className="text-slate-400 text-lg md:text-xl font-light">Veja o impacto do método na vida de quem já aplicou</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 text-amber-400 fill-current" />)}
                </div>
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-40 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500 via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-20 rounded-[60px] border border-white/10 shadow-2xl">
            <h2 className="font-serif text-4xl md:text-7xl mb-8 font-bold tracking-tight">Comece sua transformação hoje</h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light">Acesso imediato ao método completo + todos os bônus.</p>
            
            <div className="mb-12">
              <span className="text-slate-500 line-through text-xl block mb-2">De R$ 497,00</span>
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl md:text-3xl text-slate-400">Por apenas 12x de</span>
                <span className="text-6xl md:text-8xl font-serif font-bold text-violet-400">R$ 19,70</span>
              </div>
              <span className="text-slate-400 mt-4 block">Ou R$ 197,00 à vista</span>
            </div>

            <button className="w-full bg-violet-600 text-white px-10 py-8 rounded-3xl text-2xl font-bold hover:bg-violet-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-violet-500/20 mb-8">
              Quero Garantir Minha Vaga
            </button>

            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>7 Dias de Garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-emerald-400" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                  <Heart className="text-white w-5 h-5 fill-current" />
                </div>
                <span className="font-serif text-xl font-bold tracking-tight text-slate-900">Terapia de Bolso</span>
              </div>
              <p className="text-slate-500 max-w-sm font-light leading-relaxed">
                Ajudando mulheres a restaurarem seus lares e reconquistarem a felicidade no casamento através de técnicas práticas e embasamento psicológico.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-500 font-light">
                <li><a href="#metodo" className="hover:text-violet-600 transition-colors">O Método</a></li>
                <li><a href="#depoimentos" className="hover:text-violet-600 transition-colors">Depoimentos</a></li>
                <li><a href="#sobre" className="hover:text-violet-600 transition-colors">Sobre a Dra.</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 text-center text-slate-400 text-sm font-light">
            <p>© 2024 Terapia de Bolso - Dra. Karinne Bruno. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
