export const STATS = [
  { label: "Committees", value: "2" },
  { label: "Prize Pool", value: "₹20k" },
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
    // Note: Doc says Agendas released soon, but keeping your placeholders is fine if you want content.
    // If you want to match the doc strictly, change agenda to: "To Be Announced"
    agenda: "Deliberation on the Uniform Civil Code and its implications on the socio-political fabric of India.",
    guideLink: "#",
    image: "https://picsum.photos/seed/aippm_new/800/600",
    description: "Focuses on national policy issues, political negotiations, and consensus-building between government and opposition dynamics.",
  },
  {
    id: "mla",
    title: "Maharashtra Legislative Assembly (MLA)",
    agenda: "Reviewing the infrastructure development policies and addressing the agrarian crisis in Maharashtra.",
    guideLink: "#",
    image: "https://picsum.photos/seed/mla_new/800/600",
    description: "Simulates the State Legislative Assembly focusing on law-making, state governance, and constituency-level concerns.",
  },
];

export const SCHEDULE = [
  {
    day: "Day 1",
    date: "March 14, 2026", // Updated date
    events: [
      { time: "08:30 AM", title: "Reporting" },
      { time: "09:30 AM", title: "Opening Ceremony" },
      { time: "11:00 AM", title: "Session 1: Rules & Opening Statements" },
      { time: "01:30 PM", title: "Lunch Break" },
      { time: "02:30 PM", title: "Session 2: Debate & Question Hour" },
      { time: "06:00 PM", title: "Socials & High Tea" }, // Added Socials info
    ],
  },
  {
    day: "Day 2",
    date: "March 15, 2026", // Updated date
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
  }
};

export const REGISTER_URL = "https://unstop.com/competitions/ioit-youth-parliament-2026-aissms-ioit-acm-1631021";
