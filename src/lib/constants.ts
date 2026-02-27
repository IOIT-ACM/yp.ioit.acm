export const STATS = [
	{ label: "Committees", value: "2" },
	{ label: "Prize Pool", value: "₹20k+" },
	{ label: "Days", value: "2" },
	{ label: "Previous Editions", value: "3" },
];

export const PRIZE_BREAKDOWN = [
	{ rank: "Best Delegate", amount: "₹5,000" },
	{ rank: "High Commendation", amount: "₹3,000" },
	{ rank: "Special Mention", amount: "₹2,000" },
];

export const COMMITTEES = [
	{
		id: "aippm",
		title: "All India Political Parties Meet (AIPPM)",
		agenda:
			"Deliberation on the Union Budget 2026 focusing on middle-class welfare through fiscal discipline, revenue growth, spending priorities, and economic stability.",
		guideLink: "/aippm-study-guide.pdf",
		image: "https://picsum.photos/seed/aippm_new/800/600",
		logo: "/AIPPM.webp",
		description:
			"Focuses on national policy issues, political negotiations, and consensus-building between government and opposition dynamics.",
		eb: [
			{
				name: "Rishabh Singh",
				role: "Moderator",
				image: "rishabh.webp",
				experience:
					"Rishabh Singh hails from Bhopal, Madhya Pradesh, and is a recipient of the prestigious Principal’s Award from Ness Wadia College of Commerce, Pune. Currently working with a leading financial services MNC, Rishabh brings both analytical acumen and a passion for discourse to every platform he engages with. For him, Model United Nations isn’t just a weekend activity , it’s an opportunity to build networks, dissect complex issues into actionable parts, and explore them through diverse perspectives.",
			},
		],
	},
	{
		id: "mla",
		title: "Maharashtra Legislative Assembly (MLA)",
		agenda:
			"Analysis of the Economic Impact of Direct Benefit Transfer (DBT) Schemes in the State: Public Welfare or a Burden on the Treasury for Elections?",
		guideLink: "/mla-study-guide.pdf",
		image: "https://picsum.photos/seed/mla_new/800/600",
		logo: "/MLA.webp",
		description:
			"Simulates the State Legislative Assembly focusing on law-making, state governance, and constituency-level concerns.",
		eb: [
			{
				name: "Yash Chavan",
				role: "Chair",
				image: "yash.webp",
				experience: `Chavhan has been an orator since the age of 3 and is currently pursuing B.Tech. A fierce debater and passionate writer, he is known for powerful arguments, sharp rhetoric, and fact-driven analysis.

Across 18 years, he has secured 200+ wins in elocution, debate, poetry, and MUN platforms. His highlights include National Environment Youth Parliament at Rajasthan Vidhansabha, Bharatiya Chhatra Sansad speaker, being a 3-time finalist at Speak for India, and earning a university gold medal from Savitribai Phule Pune University for elocution. He remains a strong presence in the Public speaking circuit.
`,
			},
		],
	},
];

export const SCHEDULE = [
	{
		day: "Day 1",
		date: "March 14, 2026",
		events: [
			{ time: "08:30 AM", title: "Reporting" },
			{ time: "09:30 AM", title: "Opening Ceremony" },
			{ time: "11:00 AM", title: "Session 1: Rules & Opening Statements" },
			{ time: "01:30 PM", title: "Lunch Break" },
			{ time: "02:30 PM", title: "Session 2: Debate & Question Hour" },
			{ time: "06:00 PM", title: "Socials & High Tea" },
		],
	},
	{
		day: "Day 2",
		date: "March 15, 2026",
		events: [
			{ time: "09:30 AM", title: "Reporting" },
			{ time: "11:00 AM", title: "Session 3: Deliberations" },
			{ time: "01:30 PM", title: "Lunch Break" },
			{ time: "02:30 PM", title: "Session 4: Drafting & Voting" },
			{ time: "05:30 PM", title: "Valedictory & Closing Ceremony" },
		],
	},
];

export const FEES = {
	aissms: {
		priority: "₹500",
		general: "₹800",
		group: "₹600",
	},
	external: {
		priority: "₹1,000",
		general: "₹1,300",
		group: "₹1,100",
	},
};

export const PORTFOLIO_ALLOCATIONS: { name: string; committee: string }[] = [
	{ name: "Nirmala Sitaraman", committee: "aippm" },
	{ name: "Narendra Modi", committee: "aippm" },
	{ name: "Piyush Goyal", committee: "aippm" },
	{ name: "Nitin Gadkari", committee: "aippm" },
	{ name: "Amit Shah", committee: "aippm" },
	{ name: "Rajnath Singh", committee: "aippm" },
	{ name: "Ashwini Vaishnaw", committee: "aippm" },
	{ name: "Dharmendra Pradhan", committee: "aippm" },
	{ name: "Shivraj Chouhan", committee: "aippm" },
	{ name: "Dr. Jitendra Singh", committee: "aippm" },
	{ name: "Sarbananda Sonowal", committee: "aippm" },
	{ name: "Yogi Adityanath", committee: "aippm" },
	{ name: "Devendra Fadanvis", committee: "aippm" },
	{ name: "S. Jaishankar", committee: "aippm" },
	{ name: "Bhupender Yadav", committee: "aippm" },
	{ name: "Hardeep Singh Puri", committee: "aippm" },
	{ name: "Rahul Gandhi", committee: "aippm" },
	{ name: "Shashi Tharoor", committee: "aippm" },
	{ name: "Priyanka Gandhi", committee: "aippm" },
	{ name: "P Chidambaram", committee: "aippm" },
	{ name: "Supriya Sule", committee: "aippm" },
	{ name: "Mamata Banerjee", committee: "aippm" },
	{ name: "Akhilesh Yadav", committee: "aippm" },
	{ name: "Arvind Kejriwal", committee: "aippm" },
	{ name: "Raghav Chada", committee: "aippm" },
	{ name: "Eknath Shinde", committee: "mla" },
	{ name: "Devendra Fadnavis", committee: "mla" },
	{ name: "Rahul Gandhi", committee: "mla" },
	{ name: "Supriya Sule", committee: "mla" },
	{ name: "Uddhav Thackeray", committee: "mla" },
	{ name: "Nana Patole", committee: "mla" },
	{ name: "Mamata Banerjee", committee: "mla" },
	{ name: "Aaditya Thackeray", committee: "mla" },
	{ name: "Raj Thackeray", committee: "mla" },
	{ name: "Sharad Pawar", committee: "mla" },
	{ name: "Chandrakant Patil", committee: "mla" },
	{ name: "Ravi Rana", committee: "mla" },
	{ name: "Aditi Tatkare", committee: "mla" },
	{ name: "Sudhir Mungantiwar", committee: "mla" },
	{ name: "Uday Samant", committee: "mla" },
	{ name: "Vijay Wadettiwar", committee: "mla" },
	{ name: "Jayant Patil", committee: "mla" },
	{ name: "Jitendra Awhad", committee: "mla" },
	{ name: "Girish Mahajan", committee: "mla" },
	{ name: "Radhakrishna Vikhe Patil", committee: "mla" },
	{ name: "Bachchu Kadu", committee: "mla" },
	{ name: "Mangal Prabhat Lodha", committee: "mla" },
	{ name: "Rohit Pawar", committee: "mla" },
	{ name: "Dada Bhuse", committee: "mla" },
];

export const REGISTER_URL =
	"https://unstop.com/competitions/ioit-youth-parliament-2026-aissms-ioit-acm-1631021";
