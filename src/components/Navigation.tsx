import { ExternalLink, Menu } from "lucide-react";
import { type FC } from "react";
import { REGISTER_URL } from "../lib/constants";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}

const Navigation: FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-paper/10 text-paper">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-paper/10 rounded-full transition-colors cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <img
          src="ioit_acm_logo.webp"
          alt="IOIT ACM Logo"
          className="h-12 w-auto object-contain"
        />
        <div className="h-8 w-[1px] bg-paper/20"></div>
        <img
          src="yp_logo.webp"
          alt="IOIT Youth Parliament Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-4">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:text-accent transition-colors hidden md:flex items-center gap-2"
        >
          Register <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  </nav>
);

export default Navigation;

