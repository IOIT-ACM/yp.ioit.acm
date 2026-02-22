import { motion } from "framer-motion";
import { type FC } from "react";
import { STATS } from "../lib/constants";

const StatsSection: FC = () => (
  <section id="about" className="py-20 border-b border-ink bg-ink text-paper">
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
          conferences, the IOIT ACM Student Chapter is proud to present the IOIT
          Youth Parliament. We aim to provide a platform for students to engage
          in meaningful discourse about our nation's most pressing issues.
        </p>
      </div>
    </div>
  </section>
);

export default StatsSection;

