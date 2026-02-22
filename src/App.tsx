import { useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import CommitteeSection from "./components/CommitteeSection";
import ChiefGuest from "./components/ChiefGuest";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import StatsSection from "./components/StatsSection";
import FeeSection from "./components/FeeSection"; // Import
import RulesSection from "./components/RulesSection"; // Import

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<div className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white overflow-x-hidden">
			<Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<MobileMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />
			<Hero y={y} />
			<StatsSection />

            {/* Added Rules Section here to establish context before committees */}
            <RulesSection />

			<main className="max-w-7xl mx-auto px-6 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<CommitteeSection />
					<Sidebar />
				</div>
			</main>

            {/* Added Fee Section before Chief Guest/Footer */}
            <FeeSection />

			<ChiefGuest />
			<Footer scrollToSection={scrollToSection} />
		</div>
	);
}
