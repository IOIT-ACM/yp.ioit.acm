import { motion } from "framer-motion";
import { type FC } from "react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  scrollToSection: (id: string) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isMenuOpen, scrollToSection }) => (
  <motion.div
    initial={{ opacity: 0, y: "-100%" }}
    animate={{
      opacity: isMenuOpen ? 1 : 0,
      y: isMenuOpen ? "0%" : "-100%",
    }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-0 z-40 bg-ink text-paper pt-24 px-6"
    style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 h-full pb-12">
      <div className="flex flex-col justify-center space-y-6">
        {[
          { label: "Home", id: "hero" },
          { label: "About Us", id: "about" },
          { label: "Committees", id: "committees" },
          { label: "Schedule", id: "schedule" },
          { label: "Contact", id: "footer" },
        ].map((item, i) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              x: isMenuOpen ? 0 : -20,
            }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="font-serif text-4xl md:text-6xl hover:text-accent transition-colors text-left cursor-pointer"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
      <div className="hidden md:flex flex-col justify-center border-l border-paper/10 pl-12">
        <h3 className="text-sm uppercase tracking-widest opacity-50 mb-8">
          Committees
        </h3>
        <ul className="space-y-4 text-xl font-light">
          <li>All India Political Parties Meet</li>
          <li>Maharashtra Legislative Assembly</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export default MobileMenu;

