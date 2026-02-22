import { ExternalLink, Menu } from "lucide-react";
import { type FC } from "react";
import { REGISTER_URL } from "../lib/constants";

interface NavigationProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (v: boolean) => void;
}

const Navigation: FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => (
	<nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-paper/10 text-paper">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
			{/* Left: Hamburger (mobile only) */}
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="p-2 hover:bg-paper/10 rounded-full transition-colors cursor-pointer md:hidden flex-shrink-0"
				aria-label="Toggle menu"
			>
				<Menu className="w-5 h-5" />
			</button>

			{/* Center: Logos — absolute on mobile so they're truly centered */}
			<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 md:static md:translate-x-0">
				<img
					src="ioit_acm_logo.webp"
					alt="IOIT ACM Logo"
					className="h-8 sm:h-12 w-auto object-contain"
				/>
				<div className="h-6 sm:h-8 w-[1px] bg-paper/20" />
				<img
					src="yp_logo.webp"
					alt="IOIT Youth Parliament Logo"
					className="h-8 sm:h-12 w-auto object-contain"
				/>
			</div>

			{/* Right: Register — always visible */}
			<a
				href={REGISTER_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="ml-auto flex-shrink-0 text-xs sm:text-sm font-medium hover:text-accent transition-colors flex items-center gap-1.5"
			>
				Register <ExternalLink className="w-3 h-3" />
			</a>
		</div>
	</nav>
);

export default Navigation;
