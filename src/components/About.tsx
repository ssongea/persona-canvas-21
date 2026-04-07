import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { company: "회사명 A", role: "서비스 기획자", period: "2022.03 – 2023.08" },
  { company: "회사명 B", role: "UX 기획자", period: "2023.09 – 현재" },
];

const skills = [
  "서비스 기획", "UX 리서치", "IA 설계", "기능정의서",
  "Figma", "데이터 분석", "애자일", "화면정의서", "프로토타이핑",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-foreground mb-4"
    >
      {children}
    </motion.h2>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono-label text-primary mb-3"
        >
          About
        </motion.p>
        <SectionHeading>소개</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Bio */}
          <motion.div {...fadeUp} animate={inView ? fadeUp.animate : fadeUp.initial}>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              사용자 중심의 서비스 기획을 통해 비즈니스 가치를 만들어내는 기획자입니다.
              데이터 기반의 문제 정의부터 IA 설계, 기능정의서 작성, 사용성 테스트까지
              서비스 기획 전 과정을 경험하였습니다. 다양한 직군과의 원활한 협업을 통해
              사용자 경험을 개선하고 비즈니스 목표를 달성합니다.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative pl-6 border-l-2 border-border space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[calc(0.375rem+1.5px)] top-1.5 w-3 h-3 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">{item.company}</h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                  <p className="font-mono-label text-muted-foreground mt-1">{item.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="font-mono-label text-muted-foreground mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm bg-secondary text-secondary-foreground border border-border"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <h3 className="font-mono-label text-muted-foreground mb-4">Education & Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <p>OO대학교 — OO학과 졸업 (20XX)</p>
            <p>SQLD / Google UX Design Certificate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
