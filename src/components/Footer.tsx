import { MapPin, Phone, Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { type FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
	scrollToSection: (id: string) => void;
}

const Footer: FC<FooterProps> = ({ scrollToSection }) => {
	const footerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Stagger-reveal footer columns
			gsap.from(".footer-col", {
				opacity: 0,
				y: 40,
				stagger: 0.12,
				duration: 0.9,
				ease: "power3.out",
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top bottom-=80",
				},
			});

			// Big text reveal
			gsap.from(".footer-big-text", {
				y: 80,
				opacity: 0,
				duration: 1.2,
				ease: "power4.out",
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top bottom-=60",
				},
			});

		}, footerRef);

		return () => ctx.revert();
	}, []);

	const quickLinks = ["About", "Committees", "Schedule"];

	const socials = [
		{
			href: "https://instagram.com/ioit_mun",
			label: "Instagram",
			Icon: Instagram,
		},
		{
			href: "https://linkedin.com/company/ioit-mun",
			label: "LinkedIn",
			Icon: Linkedin,
		},
		{
			href: "https://facebook.com/ioitacm",
			label: "Facebook",
			Icon: Facebook,
		},
	];

	const contacts = [
		{
			name: "Aditya Godse",
			role: "Director General",
			tel: "+917248945402",
			display: "+91 72489 45402",
		},
		{
			name: "Krushi Soni",
			role: "Delegate Affairs",
			tel: "+917249453073",
			display: "+91 72494 53073",
		},
	];

	const marqueeText = "IOIT Youth Parliament '26 · Organized by AISSMS IOIT ACM · Pune, India · Model United Nations";

	return (
		<footer
			ref={footerRef}
			id="footer"
			style={{
				background: "#0d0d0d",
				color: "#f0ece3",
				fontFamily: "'DM Sans', sans-serif",
				overflow: "hidden",
			}}
		>
			{/* Google Fonts */}
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

        /* ─── Marquee ─── */
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .footer-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 22s linear infinite;
          will-change: transform;
        }
        .footer-marquee-track:hover {
          animation-play-state: paused;
        }

        /* ─── Links & interactions ─── */
        .footer-link-btn {
          background: none;
          border: none;
          color: inherit;
          font: inherit;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.6;
          transition: opacity 0.2s, color 0.2s;
        }
        .footer-link-btn:hover { opacity: 1; color: #c9a96e; }

        .footer-social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          opacity: 0.6;
          transition: opacity 0.2s, color 0.2s;
          padding: 6px 0;
        }
        .footer-social-link:hover { opacity: 1; color: #c9a96e; }

        .footer-tel-link {
          text-decoration: none;
          color: #c9a96e;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.05em;
          transition: opacity 0.2s;
        }
        .footer-tel-link:hover { opacity: 0.7; }

        .footer-divider-rule {
          border: none;
          border-top: 1px solid rgba(240,236,227,0.1);
          margin: 0;
        }

        .arrow-icon { transition: transform 0.2s; }
        .footer-social-link:hover .arrow-icon,
        .footer-link-btn:hover .arrow-icon {
          transform: translate(2px, -2px);
        }

        /* ─── Responsive grid ─── */
        .footer-main-body {
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px 48px 32px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 40px 32px;
          margin-bottom: 48px;
          align-items: start;
        }

        .footer-brand-col {
          grid-column: 1;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .footer-main-body {
            padding: 40px 32px 28px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px 24px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .footer-main-body {
            padding: 32px 20px 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px 16px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
          .footer-contact-col {
            grid-column: 1 / -1;
          }
          .footer-contact-list {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 16px 8px;
            flex-direction: unset !important;
          }
          .footer-big-text {
            font-size: clamp(36px, 13vw, 80px) !important;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 6px !important;
          }
        }
      `}</style>

			{/* Scrolling marquee strip */}
			<div
				style={{
					borderTop: "1px solid rgba(240,236,227,0.1)",
					borderBottom: "1px solid rgba(240,236,227,0.1)",
					padding: "12px 0",
					overflow: "hidden",
				}}
			>
				<div className="footer-marquee-track">
					{/* Duplicate 8× so it always fills the viewport seamlessly at any size */}
					{Array(8)
						.fill(null)
						.map((_, i) => (
							<span
								key={i}
								style={{
									fontFamily: "'DM Mono', monospace",
									fontSize: "11px",
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									opacity: 0.6,
									whiteSpace: "nowrap",
									padding: "0 48px",
								}}
							>
								{marqueeText}
							</span>
						))}
				</div>
			</div>

			{/* Main footer body */}
			<div className="footer-main-body">
				<div className="footer-grid">
					{/* ── Brand col ── */}
					<div className="footer-col footer-brand-col">
						<div
							style={{
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: "13px",
								letterSpacing: "0.3em",
								textTransform: "uppercase",
								opacity: 0.45,
								marginBottom: "16px",
							}}
						>
							AISSMS IOIT ACM Student Chapter
						</div>
						<h2
							style={{
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: "clamp(28px, 4vw, 40px)",
								fontWeight: 400,
								lineHeight: 1.15,
								margin: "0 0 20px",
								letterSpacing: "-0.01em",
							}}
						>
							IOIT Youth
							<br />
							<em style={{ fontStyle: "italic", color: "#c9a96e" }}>
								Parliament
							</em>{" "}
							'26
						</h2>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								gap: "10px",
								opacity: 0.5,
								fontSize: "13px",
								lineHeight: 1.6,
								maxWidth: 320,
							}}
						>
							<MapPin
								style={{ width: 14, height: 14, flexShrink: 0, marginTop: 3 }}
							/>
							<span>
								AISSMS Institute of Information Technology,
								<br />
								Kennedy Road, Near R.T.O, Pune – 411001.
							</span>
						</div>
					</div>

					{/* ── Quick Links ── */}
					<div className="footer-col">
						<h4
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: "10px",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								opacity: 0.4,
								marginBottom: "24px",
								fontWeight: 400,
								margin: "0 0 24px",
							}}
						>
							Navigate
						</h4>
						<ul
							style={{
								listStyle: "none",
								margin: 0,
								padding: 0,
								display: "flex",
								flexDirection: "column",
								gap: "12px",
							}}
						>
							{quickLinks.map((link) => (
								<li key={link}>
									<button
										className="footer-link-btn"
										onClick={() => scrollToSection(link.toLowerCase())}
										style={{ fontSize: "14px", fontWeight: 300 }}
									>
										<ArrowUpRight
											className="arrow-icon"
											style={{ width: 14, height: 14 }}
										/>
										{link}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* ── Socials ── */}
					<div className="footer-col">
						<h4
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: "10px",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								opacity: 0.4,
								marginBottom: "24px",
								fontWeight: 400,
								margin: "0 0 24px",
							}}
						>
							Socials
						</h4>
						<ul
							style={{
								listStyle: "none",
								margin: 0,
								padding: 0,
								display: "flex",
								flexDirection: "column",
								gap: "4px",
							}}
						>
							{socials.map(({ href, label, Icon }) => (
								<li key={href}>
									<a
										href={href}
										target="_blank"
										rel="noreferrer"
										className="footer-social-link"
										style={{ fontSize: "13px", fontWeight: 300 }}
									>
										<Icon style={{ width: 14, height: 14, flexShrink: 0 }} />
										<span>{label}</span>
										<ArrowUpRight
											className="arrow-icon"
											style={{
												width: 12,
												height: 12,
												marginLeft: "auto",
												opacity: 0.4,
											}}
										/>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* ── Contact ── */}
					<div className="footer-col footer-contact-col">
						<h4
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: "10px",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
								opacity: 0.4,
								marginBottom: "24px",
								fontWeight: 400,
								margin: "0 0 24px",
							}}
						>
							Contact
						</h4>
						<ul
							className="footer-contact-list"
							style={{
								listStyle: "none",
								margin: 0,
								padding: 0,
								display: "flex",
								flexDirection: "column",
								gap: "20px",
							}}
						>
							{contacts.map(({ name, role, tel, display }) => (
								<li
									key={tel}
									style={{
										display: "flex",
										gap: "10px",
										alignItems: "flex-start",
									}}
								>
									<Phone
										style={{
											width: 13,
											height: 13,
											flexShrink: 0,
											marginTop: 3,
											opacity: 0.4,
										}}
									/>
									<div>
										<p
											style={{
												margin: "0 0 2px",
												fontSize: "13px",
												fontWeight: 400,
												opacity: 0.85,
											}}
										>
											{name}
										</p>
										<p
											style={{
												margin: "0 0 4px",
												fontSize: "11px",
												opacity: 0.4,
												fontFamily: "'DM Mono', monospace",
												letterSpacing: "0.04em",
											}}
										>
											{role}
										</p>
										<a href={`tel:${tel}`} className="footer-tel-link">
											{display}
										</a>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

				<hr className="footer-divider-rule" />

				{/* Big bottom text */}
				<div style={{ overflow: "hidden", margin: "40px 0 32px" }}>
					<div
						className="footer-big-text"
						style={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: "clamp(48px, 10vw, 120px)",
							fontWeight: 300,
							lineHeight: 0.9,
							letterSpacing: "-0.03em",
							opacity: 0.08,
							userSelect: "none",
							whiteSpace: "nowrap",
						}}
					>
						Youth Parliament
					</div>
				</div>

				<hr className="footer-divider-rule" />

				{/* Bottom bar */}
				<div
					className="footer-bottom-bar"
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "12px",
						paddingTop: "24px",
						fontFamily: "'DM Mono', monospace",
						fontSize: "11px",
						opacity: 0.35,
						letterSpacing: "0.05em",
					}}
				>
					<p style={{ margin: 0 }}>
						© 2026 AISSMS IOIT ACM Student Chapter. All rights reserved.
					</p>
					<p
						style={{
							margin: 0,
							textTransform: "uppercase",
							letterSpacing: "0.15em",
						}}
					>
						Pune · Maharashtra · India
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
