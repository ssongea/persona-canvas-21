import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center dot-grid-bg">
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.p {...fadeUp(0)} className="font-mono-label text-primary mb-6">
          서비스 기획자 · UX 기획자
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
          이소영
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          데이터로 시작해 디테일로 완성하는 기획자 —<br className="hidden sm:block" />
          리서치의 눈으로 사용자를 읽고, 실행의 손으로 서비스를 만듭니다.
        </motion.p>
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#projects")}
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity min-h-[44px]"
          >
            프로젝트 보기
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors min-h-[44px]"
          >
            연락하기
          </button>
        </motion.div>
        <motion.div {...fadeUp(0.5)} className="mt-20">
          <ArrowDown className="mx-auto text-muted-foreground animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
}
