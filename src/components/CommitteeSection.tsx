import { motion } from "framer-motion";
import { ArrowRight, Download, Trophy, X } from "lucide-react";
import { useMemo, useState, type FC } from "react";
import { Drawer } from "vaul";
import { COMMITTEES, PORTFOLIO_ALLOCATIONS } from "../lib/constants";

const PRIZES = [
	{ rank: "Best Delegate", amount: "₹5,000" },
	{ rank: "High Commendation", amount: "₹3,000" },
	{ rank: "Special Mention", amount: "₹2,000" },
];

type Committee = (typeof COMMITTEES)[number];

const CommitteeDrawer: FC<{
	committee: Committee | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}> = ({ committee, open, onOpenChange }) => {
	const committeePortfolios = useMemo(
		() =>
			committee
				? PORTFOLIO_ALLOCATIONS.filter((p) => p.committee === committee.id)
				: [],
		[committee],
	);

	return (
		<Drawer.Root open={open} direction="left" onOpenChange={onOpenChange}>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/60 z-50" />
				<Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 bg-paper md:w-[80vw] h-screen w-[85vw] outline-none">
					<div className="overflow-y-auto h-screen w-full">
						{committee && (
							<div className="px-6 py-10 md:px-12 pb-12 max-w-5xl mx-auto">
								{/* Header */}
								<div className="flex items-start justify-between mb-8">
									<div>
										{committee.logo && (
											<img
												src={committee.logo}
												alt={`${committee.title} logo`}
												className="w-24 h-24 object-contain mb-4"
											/>
										)}
										<Drawer.Title className="font-serif text-3xl md:text-4xl leading-tight mb-2">
											{committee.title}
										</Drawer.Title>
										<p className="font-mono text-xs uppercase tracking-widest text-accent">
											{committee.id.toUpperCase()}
										</p>
									</div>
									<button
										onClick={() => onOpenChange(false)}
										className="p-2 hover:bg-ink/5 rounded-full transition-colors shrink-0 mt-1 cursor-pointer"
									>
										<X className="w-5 h-5" />
									</button>
								</div>

								{/* Committee Image */}

								{/* Description */}
								<p className="text-ink/70 leading-relaxed text-base md:text-lg mb-8">
									{committee.description}
								</p>
								{/* Agenda */}
								<div className="bg-ink/5 p-6 rounded-lg border border-ink/10 mb-12">
									<h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-accent">
										Agenda
									</h4>
									<p className="font-serif text-lg italic mb-6">
										{committee.agenda}
									</p>
									<a
										href={committee.guideLink}
										className="inline-flex items-center gap-2 text-sm font-medium border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
									>
										<Download className="w-4 h-4" /> Study Guide
									</a>
								</div>
								{/* Portfolio Matrix */}
								<div className="mt-16">
									<h3 className="font-mono text-xs uppercase tracking-widest border-b border-ink pb-2 mb-6">
										Portfolio Matrix
									</h3>
									<div className="overflow-x-auto">
										<table className="w-full">
											<tbody>
												{committeePortfolios.map((p, i) => (
													<tr
														key={`${p.name}-${i}`}
														className="border-b border-ink/10 last:border-b-0"
													>
														<td className="py-3 pr-4 font-mono text-xs text-ink/30 w-8">
															{String(i + 1).padStart(2, "0")}
														</td>
														<td className="py-3 font-serif text-lg">
															{p.name}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
									<p className="text-xs text-ink/40 mt-4">
										{committeePortfolios.length} portfolios allocated
									</p>
								</div>

								{/* Executive Board */}
								<div className="mt-10">
									<h3 className="font-mono text-xs uppercase tracking-widest border-b border-ink pb-2 mb-8">
										Executive Board
									</h3>
									<div className="max-w-2xl">
										<div className="relative overflow-hidden aspect-[3/4] max-w-sm mb-8">
											<img
												src={committee.eb[0].image}
												alt={committee.eb[0].name}
												className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
											/>
										</div>
										<h4 className="font-serif text-3xl md:text-4xl leading-tight mb-2">
											{committee.eb[0].name}
										</h4>
										<p className="font-mono text-sm uppercase tracking-widest text-accent mb-6">
											{committee.eb[0].role}
										</p>
										<div className="w-12 h-px bg-ink/30 mb-6" />
										<p className="text-ink/70 leading-relaxed text-base md:text-lg whitespace-pre-line">
											{committee.eb[0].experience}
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
};

const CommitteeSection: FC = () => {
	const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(
		null,
	);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const openDrawer = (committee: Committee) => {
		setSelectedCommittee(committee);
		setDrawerOpen(true);
	};

	return (
		<div id="committees" className="md:col-span-8 space-y-20">
			<div className="flex items-baseline justify-between border-b border-ink pb-4 mb-12">
				<h2 className="font-serif text-3xl italic">Committees & Agendas</h2>
			</div>

			<div className="bg-ink text-paper p-8 border border-ink/10">
				<div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
					<div className="flex items-start gap-4">
						<div className="p-3 bg-accent rounded-full text-white shrink-0">
							<Trophy className="w-6 h-6" />
						</div>
						<div>
							<h3 className="font-serif text-2xl mb-1">₹20,000 Prize Pool</h3>
							<p className="text-xs uppercase tracking-widest opacity-60">
								₹10,000 Per Committee
							</p>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-8 w-full md:w-auto">
						{PRIZES.map((prize) => (
							<div key={prize.rank} className="flex flex-col">
								<span className="text-accent font-serif text-xl mb-1">
									{prize.amount}
								</span>
								<span className="text-[10px] uppercase tracking-widest opacity-60">
									{prize.rank}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="gap-32 flex flex-col">
				{COMMITTEES.map((committee) => (
					<motion.article
						key={committee.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="group cursor-pointer"
						onClick={() => openDrawer(committee)}
					>
						<div className="flex flex-col gap-4">
							<div>
								{committee.logo && (
									<img
										src={committee.logo}
										alt={`${committee.title} logo`}
										className="w-20 h-20 object-contain mb-4"
									/>
								)}
								<h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4 group-hover:text-accent transition-colors">
									{committee.title}
								</h3>
								<p className="text-ink/70 leading-relaxed mb-4">
									{committee.description}
								</p>
							</div>

							{/* EB Preview */}
							<h4 className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-4">
								Executive Board
							</h4>
							<div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-4">
								<div className="md:col-span-2">
									<div className="relative overflow-hidden aspect-[3/4]">
										<img
											src={committee.eb[0].image}
											alt={committee.eb[0].name}
											className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
										/>
									</div>
								</div>
								<div className="md:col-span-4">
									<p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
										{committee.eb[0].role}
									</p>
									<h4 className="font-serif text-2xl md:text-3xl leading-tight mb-2">
										{committee.eb[0].name}
									</h4>
									<div className="w-10 h-px bg-ink/20 mb-3" />
									<p className="text-sm text-ink/60 leading-relaxed whitespace-pre-line">
										{committee.eb[0].experience}
									</p>
								</div>
							</div>

							<div className="bg-ink/5 p-6 rounded-lg border border-ink/10">
								<h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-accent">
									Agenda
								</h4>
								<p className="font-serif text-lg italic mb-6">
									{committee.agenda}
								</p>

								<div className="flex flex-wrap gap-4">
									<a
										href={committee.guideLink}
										onClick={(e) => e.stopPropagation()}
										className="flex items-center gap-2 text-sm font-medium border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
									>
										<Download className="w-4 h-4" /> Study Guide
									</a>
									<span className="flex items-center gap-2 text-sm font-medium text-accent group-hover:underline underline-offset-4">
										Click to view portfolios <ArrowRight className="w-4 h-4" />
									</span>
								</div>
							</div>
						</div>
					</motion.article>
				))}
			</div>
			<CommitteeDrawer
				committee={selectedCommittee}
				open={drawerOpen}
				onOpenChange={setDrawerOpen}
			/>
		</div>
	);
};

export default CommitteeSection;
