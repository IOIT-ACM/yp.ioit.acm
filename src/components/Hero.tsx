import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type FC } from "react";
import { REGISTER_URL } from "../lib/constants";

interface HeroProps {
	y: MotionValue<number>;
}

const MARQUEE = [
	"Socials",
	"Party",
	"2 Days",
	"Study guide provided",
	"₹20,000 Prize Pool",
	"For beginners and pros",
];
const Hero: FC<HeroProps> = ({ y }) => (
	<header
		id="hero"
		className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 border-b border-ink overflow-hidden"
	>
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
								<span className="italic font-light text-paper">Parliament</span>
							</h1>
							<p className="text-lg md:text-xl max-w-xl leading-relaxed opacity-90 text-paper drop-shadow-md mb-8">
								Join us for two days of intense debate, diplomacy, and
								leadership. The premier youth parliament simulation at AISSMS
								IOIT.
							</p>

							<div className="flex flex-row gap-10  ">
								<motion.a
									href={REGISTER_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-medium text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-accent/20 cursor-pointer"
								>
									Register Now <ArrowRight className="w-5 h-5" />
								</motion.a>
								<a
									href="#schedule"
									className="group flex items-center gap-2 my-auto text-white font-medium  hover:underline underline-offset-4 drop-shadow-md"
								>
									View Schedule{" "}
								</a>
							</div>
						</motion.div>
					</motion.div>
				</div>
				<div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
					<div className="w-full h-px bg-paper/30 mb-6 lg:hidden"></div>
				</div>
			</div>
		</div>

		{/* Marquee */}
		<div className="absolute bottom-0 left-0 right-0 z-20 bg-white/20 text-white overflow-hidden border-t border-white/10">
			<div className="flex whitespace-nowrap">
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						className="flex shrink-0 items-center gap-6 py-3 px-4"
						animate={{ x: ["0%", "-100%"] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 18,
								ease: "linear",
							},
						}}
					>
						{MARQUEE.map((item, j) => (
							<span
								key={j}
								className="flex items-center gap-6 text-sm font-medium uppercase tracking-widest"
							>
								{item}
								<span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
							</span>
						))}
					</motion.div>
				))}
			</div>
		</div>
	</header>
);

export default Hero;
