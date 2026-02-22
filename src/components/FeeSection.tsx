import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { type FC } from "react";
import { FEES, REGISTER_URL } from "../lib/constants";

const FeeSection: FC = () => {
  return (
    <section className="py-20 border-b border-ink bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl italic mb-6">Registration Fees</h2>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
            <Zap className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold tracking-wider uppercase">Priority Phase Live</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AISSMS Students */}
          <PricingCard
            title="AISSMS Students"
            fees={FEES.aissms}
            subtitle="For internal delegates"
          />

          {/* External Students */}
          <PricingCard
            title="External Delegates"
            fees={FEES.external}
            subtitle="For non-AISSMS students"
            isDark
          />
        </div>

        <div className="mt-12 text-center">
             <p className="text-ink/60 text-sm mb-4">
                *Group Registration applies for teams of 8+ members.
                <br />
                *Flash Sale: ₹100 OFF coupons available on Mock YP Day (Feb).
             </p>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, fees, subtitle, isDark = false }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`p-8 border ${isDark ? 'bg-ink text-paper border-ink' : 'bg-paper text-ink border-ink'} flex flex-col relative`}
  >
    <h3 className="font-serif text-3xl mb-1">{title}</h3>
    <p className={`text-xs uppercase tracking-widest mb-8 ${isDark ? 'opacity-50' : 'opacity-60 text-accent'}`}>{subtitle}</p>

    <div className="space-y-6 mb-8 flex-grow">
      <div className="flex justify-between items-end border-b border-current/10 pb-2">
        <span className="font-medium">Priority (First 10 Days)</span>
        <span className="text-2xl font-serif">{fees.priority}</span>
      </div>
      <div className="flex justify-between items-end border-b border-current/10 pb-2 opacity-60">
        <span className="font-medium">General</span>
        <span className="text-2xl font-serif">{fees.general}</span>
      </div>
       <div className="flex justify-between items-end border-b border-current/10 pb-2">
        <span className="font-medium">Group (8+)</span>
        <span className="text-2xl font-serif">{fees.group}</span>
      </div>
    </div>

    <a
      href={REGISTER_URL}
      target="_blank"
      className={`w-full py-4 text-center font-medium uppercase tracking-wider text-sm transition-colors border ${
        isDark
          ? 'bg-paper text-ink hover:bg-accent hover:text-white hover:border-accent'
          : 'bg-ink text-paper hover:bg-accent hover:border-accent'
      }`}
    >
      Register Now
    </a>
  </motion.div>
);

export default FeeSection;
