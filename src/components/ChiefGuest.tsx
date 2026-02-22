import { motion } from "framer-motion";
import { type FC } from "react";

const CHIEF_GUEST = {
	name: "TBD",
	designation: "TBD",
	image: "https://picsum.photos/seed/chief_guest/600/600",
	bio: "Details about our distinguished chief guest will be announced soon. Stay tuned for updates on this exciting addition to the IOIT Youth Parliament 2026.",
};

const ChiefGuest: FC = () => (
	<section
		className="py-20 border-b border-ink bg-paper scroll-mt-23 hidden"
		id="chiefguest"
	>
		<div className="max-w-7xl mx-auto px-6">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-center mb-12"
			>
				<p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
					Honoured Presence
				</p>
				<h2 className="font-serif text-4xl md:text-5xl italic">Chief Guest</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.1 }}
				className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center max-w-5xl mx-auto"
			>
				{/* Image */}
				<div className="md:col-span-5">
					<div className="relative overflow-hidden aspect-square">
						<img
							src={CHIEF_GUEST.image}
							alt={CHIEF_GUEST.name}
							className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
						/>
						<div className="absolute inset-0 border border-ink/10" />
					</div>
				</div>

				{/* Details */}
				<div className="md:col-span-7">
					<h3 className="font-serif text-3xl md:text-4xl leading-tight mb-2">
						{CHIEF_GUEST.name}
					</h3>
					<p className="font-mono text-sm uppercase tracking-widest text-accent mb-6">
						{CHIEF_GUEST.designation}
					</p>
					<div className="w-12 h-px bg-ink/30 mb-6" />
					<p className="text-ink/70 leading-relaxed text-base md:text-lg">
						{CHIEF_GUEST.bio}
					</p>
				</div>
			</motion.div>
		</div>
	</section>
);

export default ChiefGuest;
