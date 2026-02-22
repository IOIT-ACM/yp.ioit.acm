import { type FC } from "react";
import { REGISTER_URL, SCHEDULE } from "../lib/constants";

const Sidebar: FC = () => (
	<aside className="md:col-span-4 space-y-16 md:sticky md:top-24 h-fit">
		<div id="schedule" className="scroll-mt-28">
			<h3 className="font-serif text-3xl italic pb-2 mb-6">Itinerary</h3>
			<div className="space-y-8">
				{SCHEDULE.map((day, i) => (
					<div key={i} className="relative pl-4 border-l border-ink/20">
						<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent"></div>
						<h4 className="font-serif text-xl mb-1">{day.day}</h4>
						<p className="text-xs font-mono opacity-60 mb-4">{day.date}</p>
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

		<div>
			<div className="bg-ink text-paper p-8 text-center">
				<h3 className="font-serif text-2xl italic mb-2">Secure Your Seat</h3>
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
	</aside>
);

export default Sidebar;
