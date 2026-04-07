import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    company: "㈜위즈블 / 기획팀",
    role: "서비스기획, 앱기획 (과장)",
    period: "2023.03 – 2025.12",
  },
  {
    company: "㈜위즈블 / 기획팀",
    role: "경영기획, 사업기획 (프리랜서)",
    period: "2021.09 – 2023.02",
  },
  {
    company: "㈜한국리서치 / 마케팅조사 사업6부",
    role: "사회조사·CS조사 기획 및 데이터 분석 (대리)",
    period: "2017.04 – 2021.08",
  },
  {
    company: "㈜포커스컴퍼니 / CS컨설팅부",
    role: "CS조사 연구 & 통계 분석 (사원)",
    period: "2015.03 – 2017.03",
  },
];

const skills = [
  "서비스 기획", "UX 기획", "IA 설계", "기능정의서 작성", "Figma",
  "사용자 리서치", "SPSS·SAS 데이터 분석", "FGD·IDI 정성조사",
  "QA 테스트", "바이브코딩(BASE44)", "AI 툴 활용", "애자일 기획",
];

const certifications = [
  "가톨릭대학교 심리학과 졸업 (2015.02)",
  "사회조사분석사 2급 (2014)",
  "MOS 2007 MASTER (2014)",
  "한국사능력검정 1급 (2014)",
];

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          소개
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              지난 10년간 리서치와 서비스 기획, 두 가지 역량을 균형 있게 쌓아왔습니다.
              6년의 조사 연구 경험으로 N=2,000명 이상의 데이터 속에서 사용자의 진짜 니즈를
              발굴하는 눈을 길렀고, 4년의 스타트업 기획 경험으로 블록체인 지갑부터 글로벌
              스트리밍 플랫폼까지 프로덕트의 전 생애주기를 직접 경험했습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
              최근에는 BASE44, Perplexity, NotebookLM 등 AI 툴을 적극 활용하여
              작동하는 프로토타입을 직접 구현하며 개발팀과의 협업 효율을 높이고 있습니다.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative pl-10 border-l-2 border-border space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[calc(0.375rem+1.5px)] top-1.5 w-3 h-3 rounded-full bg-primary" />
                  <div className="ml-8">
                    <h3 className="font-semibold text-foreground text-sm">{item.company}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.role}</p>
                    <p className="font-mono-label text-muted-foreground mt-1">{item.period}</p>
                  </div>
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
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
            {certifications.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
