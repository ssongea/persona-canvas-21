import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 이소영. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
