import { ExternalLink, MapPin } from "lucide-react";
import { type FC } from "react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: FC<FooterProps> = ({ scrollToSection }) => (
  <footer id="footer" className="bg-ink text-paper pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-4xl mb-6">
            IOIT Youth Parliament '26
          </h2>
          <p className="max-w-md opacity-60 leading-relaxed mb-4">
            Organized by AISSMS IOIT ACM Student Chapter.
          </p>
          <div className="flex items-start gap-3 opacity-60 max-w-md">
            <MapPin className="w-5 h-5 shrink-0 mt-1" />
            <p>
              AISSMS Institute of Information Technology,
              <br />
              Kennedy Road, Near R.T.O, Pune - 411001.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest mb-6 opacity-50">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm opacity-80">
            {["About", "Committees", "Schedule"].map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest mb-6 opacity-50">
            Socials
          </h4>
          <ul className="space-y-3 text-sm opacity-80">
            {[
              { name: "Instagram", url: "https://instagram.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Twitter", url: "https://twitter.com" },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  {social.name} <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-paper/10 text-xs opacity-40 font-mono">
        <p>&copy; 2026 AISSMS IOIT ACM Student Chapter. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Code of Conduct
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

