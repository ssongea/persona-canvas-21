import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    if (project) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl mx-auto my-8 md:my-16 bg-card rounded-2xl border border-border shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary text-muted-foreground z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <p className="font-mono-label text-primary mb-2">Project Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
                <span>{project.role}</span>
                <span className="text-border">|</span>
                <span>{project.duration}</span>
                <span className="text-border">|</span>
                <span>{project.teamSize}</span>
              </div>

              {/* 배경 & 문제정의 */}
              <div className="mb-10">
                <h3 className="font-mono-label text-muted-foreground mb-3">배경 & 문제정의</h3>
                <p className="text-foreground leading-relaxed">{project.background}</p>
              </div>

              {/* 내 R&R */}
              <div className="mb-10">
                <h3 className="font-mono-label text-muted-foreground mb-3">내 R&R</h3>
                <ul className="space-y-2">
                  {project.myRole.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 수행 과정 */}
              <div className="mb-10">
                <h3 className="font-mono-label text-muted-foreground mb-4">수행 과정</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
                  {project.process.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-0">
                      <div className="flex flex-col items-center text-center px-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-2">
                          {i + 1}
                        </div>
                        <span className="text-sm font-medium text-foreground">{p.step}</span>
                        <span className="text-xs text-muted-foreground mt-1 max-w-[120px]">
                          {p.description}
                        </span>
                      </div>
                      {i < project.process.length - 1 && (
                        <ArrowRight size={16} className="text-muted-foreground hidden sm:block shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 산출물 갤러리 */}
              <div className="mb-10">
                <h3 className="font-mono-label text-muted-foreground mb-4">산출물 갤러리</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((g, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-lg bg-gradient-to-br from-muted to-secondary flex items-center justify-center"
                    >
                      <span className="text-sm text-muted-foreground">{g.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 주요 성과 */}
              <div>
                <h3 className="font-mono-label text-muted-foreground mb-4">주요 성과</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.outcomes.map((o, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-surface p-6 text-center"
                    >
                      <div className="text-3xl font-bold text-primary mb-1">{o.value}</div>
                      <div className="text-sm text-muted-foreground">{o.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
