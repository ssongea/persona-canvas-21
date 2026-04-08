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
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left - Profile Image */}
          <motion.div {...fadeUp(0)} className="flex-shrink-0 w-fit">
            <div className="relative inline-flex items-center justify-center w-60 h-90 rounded-full bg-transparent shadow-[0_40px_100px_rgba(255,95,77,0.15)] overflow-hidden">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentInstance as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="text-center md:text-left flex-1">
            <motion.p {...fadeUp(0.1)} className="font-heading text-primary mb-6">
              서비스 기획자 · UI UX 기획자
            </motion.p>
            <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              이소영
            </motion.h1>
            <motion.p {...fadeUp(0.3)} className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed">
              사용자를 데이터로 읽고, 화면으로 설계하는 기획자<br />
              — 6년 리서치 + 4년 서비스 기획의 융합형 UX 기획자
            </motion.p>
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
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
          </div>
        </div>

        <motion.div {...fadeUp(0.5)} className="mt-20">
          <ArrowDown className="mx-auto md:mx-0 text-muted-foreground animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
}
