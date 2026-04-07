import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 이소영 · soyalee0530@naver.com
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:soyalee0530@naver.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
