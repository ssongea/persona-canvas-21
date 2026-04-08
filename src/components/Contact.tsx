import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Copy, Check, Download, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const email = "soyalee0530@naver.com";
  const phone = "010-3053-7216";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-heading text-primary mb-3"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
        >
          연락하기
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-10"
        >
          프로젝트 협업이나 채용 관련 문의를 환영합니다.
        </motion.p>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">{email}</span>
            <button onClick={copyEmail} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
            </button>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone size={16} />
            <span className="text-foreground font-medium">{phone}</span>
          </div>
        </motion.div>

        {/* Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <a
            href="/resume.pdf"
            download="이소영_이력서.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors min-h-[44px]"
          >
            이력서 다운로드 (PDF) <Download size={14} />
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="text-left space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono-label text-muted-foreground mb-1.5 block">이름</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition min-h-[44px]"
              />
            </div>
            <div>
              <label className="font-mono-label text-muted-foreground mb-1.5 block">이메일</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition min-h-[44px]"
              />
            </div>
          </div>
          <div>
            <label className="font-mono-label text-muted-foreground mb-1.5 block">문의 내용</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity min-h-[44px]"
          >
            {sent ? "✓ 전송 완료" : "보내기"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
