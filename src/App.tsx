/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  Brain,
  Users,
  Sparkles,
  ShieldCheck,
  Smartphone,
  FileText,
  Clock,
  Globe,
  Star,
  Zap,
  Headphones
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-violet-600 rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-sm">
            K
          </div>
          <span className="font-serif text-lg font-medium tracking-tight text-slate-800">
            Karinne Bruno
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-slate-500 hover:text-violet-400 transition-colors">Início</a>
          <a href="#about" className="text-sm font-medium text-slate-500 hover:text-violet-400 transition-colors">Sobre</a>
          <a href="#offer" className="text-sm font-medium text-slate-500 hover:text-violet-400 transition-colors">Oferta</a>
        </div>

        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Início</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Sobre</a>
            <a href="#offer" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Oferta</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-10 md:pt-20 md:pb-24 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Animated Background Shapes - More subtle and dark */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-violet-400 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-violet-800 rounded-full blur-[120px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-violet-400/10 text-violet-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-10 border border-violet-400/20">
              Método Exclusivo Dra. Karinne Bruno
            </span>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.95] mb-6 md:mb-12 tracking-tighter font-bold">
              Terapia de Bolso <br />
              <span className="italic font-light text-violet-400">para Casais</span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 md:mb-12 max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="https://i.ibb.co/F4pVPYN4/Chat-GPT-Image-25-de-fev-de-2026-13-36-25.png" 
                alt="Terapia de Bolso" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <p className="text-lg md:text-2xl text-slate-400 mb-8 md:mb-16 leading-relaxed max-w-3xl mx-auto font-light">
              O método exclusivo da Dra. Karinne Bruno, utilizado nas sessões de terapia de casal, com técnicas para virar o jogo do seu relacionamento sem que seu parceiro perceba!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-10 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-8 block">Transformação Real</span>
          <h2 className="font-serif text-4xl md:text-7xl text-slate-900 mb-6 md:mb-10 leading-[1.1] tracking-tight">
            O material que <br />
            <span className="italic font-light text-violet-400">reconecta casais</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-6 md:mb-12 leading-relaxed font-light">
            Receba diretamente no seu celular o mesmo material terapêutico que já foi responsável por reconectar +2.000 casais, no Brasil e no Mundo! São áudio-books práticos desenvolvidos para você ouvir e transformar sua relação passo a passo. Totalmente direcionado para:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto text-left">
            {[
              "Reacender conexão",
              "Restaurar respeito",
              "Diminuir conflitos",
              "Reposicionar você dentro da relação",
              "Reconstruir intimidade",
              "Recuperar admiração"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-6 group">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-violet-50 flex items-center justify-center text-violet-400 group-hover:bg-violet-400 group-hover:text-white transition-all duration-300">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-base md:text-lg font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  return (
    <section className="py-10 md:py-40 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-400 rounded-full blur-[160px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-8 md:mb-32">
          <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl mb-6 md:mb-12 leading-[1.1] tracking-tight font-bold">
            Se você continuar esperando uma atitude dessa pessoa, seu relacionamento <span className="italic font-light text-violet-400 underline decoration-violet-400/30 underline-offset-8">vai morrer</span>
          </h2>
          <div className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto space-y-4">
            <p>Relacionamentos não acabam do nada. Ele esfria. Distancia. Desgasta. Silencia.</p>
            <p className="text-white font-medium">Mas aqui está a verdade que ninguém te contou: Quando seu parceiro (a) muda o posicionamento emocional, o relacionamento inteiro se reorganiza.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            "Ele esteja frio",
            "Já tenha pedido divórcio",
            "Não queira terapia",
            "Já tenha saído de casa",
            "Você esteja cansada de tentar"
          ].map((text, i) => (
            <div key={i} className="p-8 md:p-12 rounded-[32px] md:rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group">
              <div className="flex items-start gap-6 md:gap-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-400/20 rounded-2xl flex items-center justify-center text-violet-300 shrink-0 group-hover:bg-violet-400 group-hover:text-white transition-all duration-500">
                  <Zap className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrategicAction = () => {
  return (
    <section className="py-10 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 leading-[1.1] tracking-tight font-bold">
              São técnicas únicas e exclusivas, onde você vai aplicar <span className="italic text-violet-400">sozinha.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed">
              E seu parceiro vai sentir a diferença na mesma semana!
            </p>
            <ul className="space-y-4 text-lg text-slate-600">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-violet-400" size={20} /> Você não vai precisar pedir para ele (a) para participar.</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-violet-400" size={20} /> Você não vai implorar dialogo.</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-violet-400" size={20} /> Você não vai forçar conversa.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-10 md:p-16 rounded-[40px] border border-slate-100">
            <h3 className="text-2xl font-serif font-bold mb-8 text-slate-900">Você vai ajustar:</h3>
            <div className="grid gap-4">
              {[
                "Sua comunicação",
                "Sua postura emocional",
                "Seu nível de valor dentro da relação",
                "Sua energia feminina",
                "Seus limites"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-violet-400 font-bold italic">E isso muda tudo.</p>
          </div>
        </div>

        <div className="mt-20 md:mt-40 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-7xl text-slate-900 mb-12 leading-tight font-bold tracking-tight">
            Pare de lutar sozinha. <br />
            <span className="italic text-violet-400">Agir estrategicamente vai mudar tudo!</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {["Brigar não resolve", "Cobrar não resolve", "Chorar não resolve", "Ameaçar sair não resolve"].map((text, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-slate-500 font-medium">
                {text}
              </div>
            ))}
          </div>
          <p className="text-2xl text-slate-600 font-light">
            O que resolve é <span className="text-violet-400 font-bold">estratégia emocional.</span> E é exatamente isso que você vai receber.
          </p>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audiences = [
    {
      title: "Perda de Conexão",
      desc: "Para quem sente que esta perdendo o parceiro e a relação esfriou completamente."
    },
    {
      title: "Diálogo Inexistente",
      desc: "Para quem já tentou conversar mil vezes e nada muda, sentindo que fala com as paredes."
    },
    {
      title: "Sobrecarga Emocional",
      desc: "Para quem sente que faz tudo sozinha na relação e não aguenta mais carregar esse peso."
    },
    {
      title: "Medo do Divórcio",
      desc: "Para quem tem medo do divórcio e quer salvar o casamento antes que seja tarde demais."
    },
    {
      title: "Falta de Admiração",
      desc: "Para quem quer reconquistar a admiração do parceiro e voltar a ser respeitada."
    },
    {
      title: "Desejo e Atração",
      desc: "Para quem quer voltar a se sentir desejada e reacender a chama da paixão."
    }
  ];

  return (
    <section className="py-10 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-32">
          <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-8 block">Público Alvo</span>
          <h2 className="font-serif text-5xl md:text-8xl text-slate-900 mb-6 md:mb-8 tracking-tighter font-bold">Pra quem é:</h2>
          <div className="w-20 md:w-24 h-1 md:h-1.5 bg-violet-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {audiences.map((item, i) => (
            <div key={i} className="bg-slate-50 p-6 md:p-12 rounded-[32px] md:rounded-[48px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-violet-200/30 transition-all duration-700 group">
              <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3 md:mb-6 tracking-tight font-bold group-hover:text-violet-400 transition-colors">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base md:text-lg font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-40 bg-[#0a0a0a] p-8 md:p-32 rounded-[40px] md:rounded-[60px] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <h3 className="font-serif text-2xl md:text-6xl text-white leading-[1.1] max-w-4xl mx-auto relative z-10 font-bold tracking-tight">
            “HOJE É O ÚLTIMO DIA QUE VOCÊ PRECISA GRITAR PARA SER OUVIDA (O)”
          </h3>
          <div className="mt-8 text-slate-400 text-lg md:text-xl font-light space-y-2 relative z-10">
            <p>Você será ouvida porque mudou a forma de se posicionar.</p>
            <p>Você será valorizada porque mudou sua energia.</p>
            <p>Você será respeitada por que estabeleceu limites.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Bonuses = () => {
  const bonuses = [
    {
      title: "Cine & Leitura Terapêutica",
      desc: "Uma lista curada de filmes e livros com técnicas e reflexões para restaurar a conexão e o diálogo na relação.",
      oldPrice: "R$ 97,00",
      newPrice: "R$ 0",
      img: "https://i.ibb.co/JjH2XGGg/Chat-GPT-Image-25-de-fev-de-2026-17-19-10.png"
    },
    {
      title: "12 PDFs de Técnicas",
      desc: "12 sessões de terapia em PDF para aplicar em casa. O mesmo protocolo usado na sessão direta com a Dra. Karinne",
      oldPrice: "R$ 197,00",
      newPrice: "R$ 0",
      img: "https://i.ibb.co/bj1fcQxd/Chat-GPT-Image-25-de-fev-de-2026-17-20-57.png"
    }
  ];

  return (
    <section className="py-10 md:py-40 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-32">
          <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-8 block">Presentes Exclusivos</span>
          <h2 className="font-serif text-4xl md:text-7xl mb-4 md:mb-6 font-bold tracking-tight leading-tight">Vou te oferecer alguns <br /> <span className="italic text-violet-400">Bônus exclusivos</span></h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">Que você só consegue aqui!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {bonuses.map((bonus, i) => (
            <div key={i} className="flex flex-col group">
              <div className="aspect-video overflow-hidden rounded-[32px] md:rounded-[48px] mb-8 md:mb-10 shadow-2xl group-hover:shadow-violet-400/20 transition-all duration-700 border border-white/5">
                <img 
                  src={bonus.img} 
                  alt={bonus.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 font-bold tracking-tight">{bonus.title}</h3>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-light">{bonus.desc}</p>
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-xs md:text-sm text-slate-500 line-through font-bold">{bonus.oldPrice}</span>
                  <span className="text-xl md:text-2xl font-bold text-violet-400">{bonus.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyStart = () => {
  return (
    <section className="py-10 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-8 md:mb-32">
          <h2 className="font-serif text-3xl md:text-6xl text-slate-900 mb-6 md:mb-10 leading-[1.2] font-bold tracking-tight">
            Você não vai fazer terapia. <br />
            <span className="italic text-violet-400">Você vai aplicar o método por conta própria.</span>
          </h2>
          <div className="text-xl text-slate-500 font-light space-y-4">
            <p>Sem depender da vontade dele (a). Sem esperar boa vontade. Sem implorar atenção.</p>
            <p className="text-violet-400 font-bold">Você executa. A relação responde!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="py-10 md:py-40 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-32 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_0_80px_rgba(167,139,250,0.2)] border border-white/10">
              <img 
                src="https://i.ibb.co/ccvVPSKt/Chat-GPT-Image-25-de-fev-de-2026-17-24-58.png" 
                alt="Dra. Karinne Bruno" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-12 md:-right-12 bg-violet-400 p-4 md:p-12 rounded-[24px] md:rounded-[48px] shadow-2xl border border-white/10">
              <p className="text-3xl md:text-6xl font-serif italic text-white font-bold tracking-tighter">+2000</p>
              <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/70">Casais Ajudados</p>
            </div>
          </div>
          
          <div>
            <span className="text-violet-300 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-10 block">Quem sou eu?</span>
            <h2 className="font-serif text-4xl md:text-8xl mb-6 md:mb-12 leading-tight font-bold tracking-tighter">Dra. Karinne Bruno</h2>
            <div className="space-y-4 md:space-y-10 text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              <p>
                Sou Psicóloga, Psicanalista e Sexóloga, Pós graduada em Psicologia Analítica Junguiana. Já ajudei mais de 2.000 casais no Brasil e em mais de 14 países a reconquistarem a conexão que já havia se perdido.
              </p>
              <div className="flex flex-wrap gap-6 md:gap-12 pt-4 md:pt-10">
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-3xl bg-white/5 flex items-center justify-center text-violet-300 border border-white/10">
                    <Globe className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">14 Países</span>
                </div>
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-3xl bg-white/5 flex items-center justify-center text-violet-300 border border-white/10">
                    <Users className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">2k+ Casais</span>
                </div>
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-3xl bg-white/5 flex items-center justify-center text-violet-300 border border-white/10">
                    <Star className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Especialista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="offer" className="py-10 md:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-7xl text-slate-900 mb-8 leading-tight font-bold tracking-tight">
            Você pode continuar esperando ele (a) mudar... <br />
            <span className="italic text-violet-400">ou pode virar o jogo agora</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light">
            Se você não fizer nada, nada muda. Mas se você aplicar o Método TBC, você verá a diferença nas primeiras semanas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-[#0a0a0a] rounded-[32px] md:rounded-[60px] shadow-[0_0_100px_rgba(167,139,250,0.2)] border border-white/10 overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 p-8 md:p-24 bg-violet-400 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <span className="inline-block px-6 py-2 rounded-full bg-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-12 border border-white/20 relative z-10">
              Oferta por tempo limitado
            </span>
            <h2 className="font-serif text-4xl md:text-7xl mb-6 md:mb-12 leading-tight font-bold tracking-tight relative z-10">Método TBC <br /> Completo</h2>
            <ul className="space-y-4 md:space-y-8 mb-4 relative z-10">
              {[
                "Acesso vitalício",
                "12 Áudio-books práticos",
                "2 Bônus exclusivos",
                "Suporte via e-mail"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 md:gap-6 text-lg md:text-xl text-white/90 font-light">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-violet-400 shrink-0">
                    {i === 1 ? <Headphones className="w-4 h-4 md:w-5 md:h-5" /> : <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 p-10 md:p-24 flex flex-col justify-center items-center text-center bg-white text-slate-900">
            <p className="text-slate-300 line-through text-xl md:text-2xl mb-2 md:mb-4 font-bold">De R$ 297,00</p>
            <p className="text-slate-400 text-sm md:text-base mb-6 md:mb-10 uppercase tracking-[0.3em] font-bold">por apenas</p>
            <div className="flex items-baseline gap-2 md:gap-4 mb-4">
              <span className="text-2xl md:text-4xl font-bold text-slate-900">R$</span>
              <span className="text-7xl md:text-[10rem] font-serif font-bold text-violet-400 leading-none tracking-tighter">67,00</span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm mb-8 md:mb-16 uppercase tracking-[0.3em] font-bold">ou em até 12x no cartão</p>
            
            <a 
              href="https://pay.kiwify.com.br/fsmum7Z"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-violet-400 text-white py-6 md:py-8 rounded-[24px] md:rounded-[32px] font-bold text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-violet-500 transition-all shadow-[0_20px_60px_rgba(167,139,250,0.3)] mb-8 md:mb-10 flex items-center justify-center"
            >
              QUERO MEU ACESSO AGORA
            </a>
            
            <div className="flex items-center gap-3 text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
              <span>Compra 100% segura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const images = [
    "https://i.ibb.co/gZ8PH7tt/p5.jpg",
    "https://i.ibb.co/C3vMv11t/p4.jpg",
    "https://i.ibb.co/RGgSFMZQ/p1.jpg",
    "https://i.ibb.co/d01NrrNS/p2.jpg",
    "https://i.ibb.co/dJKz2zqf/p3.jpg"
  ];

  return (
    <section className="py-10 md:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-32">
          <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-8 block">Resultados Reais</span>
          <h2 className="font-serif text-4xl md:text-7xl text-slate-900 mb-4 md:mb-6 font-bold tracking-tight">O que as pessoas dizem sobre o método</h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">Veja o impacto do método na vida de quem já aplicou</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden shadow-xl border border-white/10 aspect-[3/4]"
            >
              <img 
                src={img} 
                alt={`Resultado ${i + 1}`} 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Guarantee = () => {
  return (
    <section className="py-10 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 md:mb-12 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-violet-50 text-violet-400">
          <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" />
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 md:mb-10 font-bold tracking-tight">Garantia de 7 dias!</h2>
        <div className="bg-slate-50 p-6 md:p-16 rounded-[32px] md:rounded-[40px] border border-slate-100 text-left">
          <p className="text-violet-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6">A proposta é simples e clara:</p>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            <p>
              Atualmente o Conselho Federal de Psicologia limita em sua tabela de honorários o valor MÍNIMO de uma sessão por R$275,00.
            </p>
            <p>
              Eu estou te dando a oportunidade de testar um protocolo inteiro de 12 sessões (é óbvio que não substitui a terapia), mas é o mesmo material que os pacientes de consultório recebem ao sair da sessão por menos da metade da metade desse valor rs, e ainda estou dando 7 dias de garantia sem você precisar explicar o motivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é o Terapia de Bolso para Casais (TBC)?",
      answer: "O TBC é um método prático desenvolvido pela Dra. Karinne Bruno, composto por 12 áudio-books com exercícios terapêuticos que você pode ouvir e aplicar em casa para reconectar seu relacionamento sem a necessidade de sessões presenciais imediatas."
    },
    {
      question: "Como recebo o material?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso ao material digital (Áudio-books) para ouvir no seu celular, tablet ou computador."
    },
    {
      question: "Preciso que meu parceiro(a) participe?",
      answer: "Não necessariamente. Muitos dos exercícios podem ser iniciados por você individualmente, o que muitas vezes acaba gerando uma mudança positiva que inspira o outro a também se engajar na relação."
    },
    {
      question: "O material é vitalício?",
      answer: "Sim! Uma vez adquirido, o acesso aos 12 áudio-books e aos bônus é seu para sempre. Você pode ouvir e refazer os exercícios sempre que sentir necessidade."
    },
    {
      question: "Tenho suporte se tiver dúvidas?",
      answer: "Sim, oferecemos suporte via e-mail para questões técnicas de acesso e dúvidas gerais sobre o material adquirido."
    }
  ];

  return (
    <section className="py-10 md:py-40 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 md:mb-8 block">FAQ</span>
          <h2 className="font-serif text-4xl md:text-7xl text-slate-900 mb-6 font-bold tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">Tudo o que você precisa saber sobre o TBC</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[24px] md:rounded-[32px] overflow-hidden hover:border-violet-200 transition-all duration-500">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-10 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-violet-400"
                >
                  <Menu className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="p-6 md:p-10 pt-0 text-base md:text-lg text-slate-500 font-light leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-12 md:pt-32 pb-8 md:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 mb-12 md:mb-24">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-400 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-serif italic text-lg md:text-xl font-bold">
              K
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter">
              Dra. Karinne Bruno
            </span>
          </div>
          <div className="flex gap-8 md:gap-10">
            <a 
              href="https://www.instagram.com/psi.karinnebruno/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-violet-300 transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
        <div className="pt-10 md:pt-16 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Dra. Karinne Bruno. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-violet-50 selection:text-violet-400 scroll-smooth bg-white text-slate-900">
      <main>
        <Hero />
        <PainPoints />
        <StrategicAction />
        <Features />
        <TargetAudience />
        <SocialProof />
        <Bonuses />
        <WhyStart />
        <AboutMe />
        <Pricing />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
