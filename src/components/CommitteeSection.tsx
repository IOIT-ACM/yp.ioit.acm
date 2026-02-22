import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { type FC } from "react";
import { COMMITTEES } from "../lib/constants";

const CommitteeSection: FC = () => (
	<div id="committees" className="lg:col-span-8 space-y-20 scroll-mt-28">
		<div className="flex items-baseline justify-between border-b border-ink pb-4 mb-12">
			<h2 className="font-serif text-3xl italic">Committees & Agendas</h2>
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
						<p className="font-serif text-lg italic mb-6">{committee.agenda}</p>

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
);

export default CommitteeSection;
