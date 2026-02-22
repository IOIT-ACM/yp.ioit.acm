import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowRight,
	Calendar,
	Download,
	ExternalLink,
	MapPin,
	Menu,
} from "lucide-react";
import { useState, useRef } from "react";

// Previous MUN Stats
const STATS = [
	{ label: "Previous Editions", value: "3" },
	{ label: "Delegates Hosted", value: "400+" },
	{ label: "Prize Pool", value: "₹50k+" },
	{ label: "Colleges", value: "25+" },
];

// Committee Data
const COMMITTEES = [
	{
		id: "aippm",
		title: "All India Political Parties Meet (AIPPM)",
		agenda:
			"Deliberation on the Uniform Civil Code and its implications on the socio-political fabric of India.",
		guideLink: "#",
		image: "https://picsum.photos/seed/aippm_new/800/600",
		chair: "TBD",
		description:
			"A specialized committee designed to simulate the diverse political landscape of India, fostering debate on critical national issues.",
	},
	{
		id: "mla",
		title: "Maharashtra Legislative Assembly (MLA)",
		agenda:
			"Reviewing the infrastructure development policies and addressing the agrarian crisis in Maharashtra.",
		guideLink: "#",
		image: "https://picsum.photos/seed/mla_new/800/600",
		chair: "TBD",
		description:
			"A regional simulation focusing on state-level governance, policy-making, and the specific challenges faced by Maharashtra.",
	},
];

// Itinerary Data
const SCHEDULE = [
	{
		day: "Day 1",
		date: "March 13, 2026",
		events: [
			{ time: "09:00 AM", title: "Registration & Breakfast" },
			{ time: "10:00 AM", title: "Opening Ceremony" },
			{ time: "11:30 AM", title: "Committee Session I" },
			{ time: "01:30 PM", title: "Lunch Break" },
			{ time: "02:30 PM", title: "Committee Session II" },
			{ time: "05:30 PM", title: "High Tea & Networking" },
		],
	},
	{
		day: "Day 2",
		date: "March 14, 2026",
		events: [
			{ time: "09:30 AM", title: "Breakfast" },
			{ time: "10:00 AM", title: "Committee Session III" },
			{ time: "01:00 PM", title: "Lunch Break" },
			{ time: "02:00 PM", title: "Committee Session IV" },
			{ time: "04:30 PM", title: "Closing Ceremony & Awards" },
		],
	},
];
const REGISTER_URL =
	"https://unstop.com/competitions/ioit-youth-parliament-2026-aissms-ioit-acm-1631021";
export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const heroRef = useRef(null);
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
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-paper/10 text-paper">
				<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 hover:bg-paper/10 rounded-full transition-colors"
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

			{/* Full Screen Menu Overlay */}
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
								className="font-serif text-4xl md:text-6xl hover:text-accent transition-colors text-left"
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

			{/* Hero Section */}
			<header
				id="hero"
				ref={heroRef}
				className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 border-b border-ink overflow-hidden"
			>
				{/* Background Video */}
				<div className="absolute inset-0 z-0">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover grayscale opacity-80"
					>
						<source src="hero_bg.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div className="absolute inset-0 bg-black/60 z-10"></div>
				</div>

				<div className="max-w-7xl mx-auto relative z-20 text-paper">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
						<div className="lg:col-span-8">
							<motion.div style={{ y }}>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
								>
									<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-white drop-shadow-2xl">
										Youth <br />
										<span className="italic font-light text-paper">
											Parliament
										</span>
									</h1>
									<p className="text-lg md:text-xl max-w-xl leading-relaxed opacity-90 text-paper drop-shadow-md mb-8">
										Join us for two days of intense debate, diplomacy, and
										leadership. The premier youth parliament simulation at
										AISSMS IOIT.
									</p>

									<motion.a
										href={REGISTER_URL}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-medium text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-accent/20"
									>
										Register Now <ArrowRight className="w-5 h-5" />
									</motion.a>
								</motion.div>
							</motion.div>
						</div>
						<div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
							<div className="w-full h-[1px] bg-paper/30 mb-6 lg:hidden"></div>
							<div className="space-y-4 text-sm font-mono text-paper/90">
								<div className="flex items-center gap-3 drop-shadow-md">
									<MapPin className="w-4 h-4" />
									<span>AISSMS IOIT, Pune</span>
								</div>
								<div className="flex items-center gap-3 drop-shadow-md">
									<Calendar className="w-4 h-4" />
									<span>March 13-14, 2026</span>
								</div>
								<a
									href="#schedule"
									className="group flex items-center gap-2 mt-4 text-white font-medium hover:underline underline-offset-4 drop-shadow-md"
								>
									View Schedule{" "}
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Stats Section */}
			<section
				id="about"
				className="py-20 border-b border-ink bg-ink text-paper"
			>
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
						{STATS.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<div className="font-serif text-4xl md:text-6xl mb-2">
									{stat.value}
								</div>
								<div className="text-xs uppercase tracking-widest opacity-60">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
					<div className="mt-16 text-center max-w-3xl mx-auto">
						<h2 className="font-serif text-3xl mb-6">A Legacy of Excellence</h2>
						<p className="opacity-80 leading-relaxed">
							Building on the success of our previous Model United Nations
							conferences, the IOIT ACM Student Chapter is proud to present the
							IOIT Youth Parliament. We aim to provide a platform for students
							to engage in meaningful discourse about our nation's most pressing
							issues.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content Grid */}
			<main className="max-w-7xl mx-auto px-6 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Left Column: Committees */}
					<div id="committees" className="lg:col-span-8 space-y-20">
						<div className="flex items-baseline justify-between border-b border-ink pb-4 mb-12">
							<h2 className="font-serif text-3xl italic">
								Committees & Agendas
							</h2>
						</div>

						{COMMITTEES.map((committee) => (
							<motion.article
								key={committee.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="group"
							>
								<div className="overflow-hidden mb-6 aspect-[16/9] relative">
									<img
										src={committee.image}
										alt={committee.title}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
									/>
									<div className="absolute top-4 right-4 bg-paper text-ink px-3 py-1 text-xs font-bold uppercase tracking-wider">
										{committee.id.toUpperCase()}
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<div>
										<h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4 group-hover:text-accent transition-colors">
											{committee.title}
										</h3>
										<p className="text-ink/70 leading-relaxed mb-6">
											{committee.description}
										</p>
									</div>

									<div className="bg-ink/5 p-6 rounded-lg border border-ink/10">
										<h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-accent">
											Agenda
										</h4>
										<p className="font-serif text-lg italic mb-6">
											{committee.agenda}
										</p>

										<div className="flex gap-4">
											<a
												href={committee.guideLink}
												className="flex items-center gap-2 text-sm font-medium border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
											>
												<Download className="w-4 h-4" /> Study Guide
											</a>
										</div>
									</div>
								</div>
							</motion.article>
						))}
					</div>

					{/* Right Column: Sidebar */}
					<div className="lg:col-span-4 space-y-16">
						{/* Itinerary */}
						<div id="schedule" className="hidden">
							<h3 className="font-mono text-xs uppercase tracking-widest border-b border-ink pb-2 mb-6">
								Itinerary
							</h3>
							<div className="space-y-8">
								{SCHEDULE.map((day, i) => (
									<div key={i} className="relative pl-4 border-l border-ink/20">
										<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent"></div>
										<h4 className="font-serif text-xl mb-1">{day.day}</h4>
										<p className="text-xs font-mono opacity-60 mb-4">
											{day.date}
										</p>
										<ul className="space-y-3">
											{day.events.map((event, j) => (
												<li key={j} className="flex gap-4 text-sm">
													<span className="font-mono opacity-60 min-w-[70px]">
														{event.time}
													</span>
													<span className="font-medium">{event.title}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>

						{/* Registration Box */}
						<div className="sticky top-24">
							<div className="bg-ink text-paper p-8 text-center">
								<h3 className="font-serif text-2xl italic mb-2">
									Secure Your Seat
								</h3>
								<p className="text-sm opacity-70 mb-6">
									Limited delegate spots available for the 2026 session.
								</p>
								<div className="space-y-3">
									<a
										href={REGISTER_URL}
										target="_blank"
										rel="noopener noreferrer"
										className="block w-full bg-paper text-ink font-medium text-sm py-3 hover:bg-accent hover:text-white transition-colors uppercase tracking-wider"
									>
										Register as Delegate
									</a>
									<p className="text-[10px] opacity-50 mt-4">
										*Registration redirects to external portal
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
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
								<li>
									<button
										onClick={() => scrollToSection("about")}
										className="hover:text-accent transition-colors"
									>
										About ACM
									</button>
								</li>
								<li>
									<button
										onClick={() => scrollToSection("committees")}
										className="hover:text-accent transition-colors"
									>
										Committees
									</button>
								</li>
								<li>
									<button
										onClick={() => scrollToSection("schedule")}
										className="hover:text-accent transition-colors"
									>
										Schedule
									</button>
								</li>
								<li>
									<a
										href={REGISTER_URL}
										target="_blank"
										rel="noreferrer"
										className="hover:text-accent transition-colors"
									></a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-mono text-xs uppercase tracking-widest mb-6 opacity-50">
								Socials
							</h4>
							<ul className="space-y-3 text-sm opacity-80">
								<li>
									<a
										href="https://instagram.com"
										target="_blank"
										rel="noreferrer"
										className="hover:text-accent transition-colors flex items-center gap-2"
									>
										Instagram <ExternalLink className="w-3 h-3" />
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noreferrer"
										className="hover:text-accent transition-colors flex items-center gap-2"
									>
										LinkedIn <ExternalLink className="w-3 h-3" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com"
										target="_blank"
										rel="noreferrer"
										className="hover:text-accent transition-colors flex items-center gap-2"
									>
										Twitter <ExternalLink className="w-3 h-3" />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-paper/10 text-xs opacity-40 font-mono">
						<p>
							&copy; 2026 AISSMS IOIT ACM Student Chapter. All rights reserved.
						</p>
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
		</div>
	);
}
