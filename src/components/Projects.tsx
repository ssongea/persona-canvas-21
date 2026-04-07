import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, categories } from "@/data/projects";
import type { Project } from "@/data/projects";

interface Props {
  onSelect: (project: Project) => void;
}

export default function Projects({ onSelect }: Props) {
  const [active, setActive] = useState("전체");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "전체"
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono-label text-primary mb-3"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-foreground mb-8"
        >
          프로젝트
        </motion.h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                onClick={() => onSelect(p)}
                className="group text-left rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Cover */}
                <div className={`aspect-[16/9] bg-gradient-to-br ${p.coverGradient} overflow-hidden flex items-center justify-center`}>
                  <span className="text-4xl md:text-5xl font-bold text-white/20 group-hover:scale-105 transition-transform duration-500">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.category.map((cat) => (
                      <span key={cat} className="font-mono-label text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                        {cat}
                      </span>
                    ))}
                    <span className="font-mono-label text-muted-foreground">{p.duration}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    자세히 보기 <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
