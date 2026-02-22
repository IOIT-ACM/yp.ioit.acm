import { motion } from "framer-motion";
import { ShieldCheck, Shirt, Smartphone, Users } from "lucide-react";
import { type FC } from "react";

const RulesSection: FC = () => {
  const rules = [
    {
      icon: Users,
      title: "Eligibility",
      desc: "Open to all School (Secondary/Higher Secondary) and College (UG/PG) students regardless of stream. No prior experience required.",
    },
    {
      icon: Shirt,
      title: "Dress Code",
      desc: "Strictly Formal Indian or Western attire. Casual wear (jeans, t-shirts, sneakers) is prohibited during committee sessions.",
    },
    {
      icon: Smartphone,
      title: "Electronic Devices",
      desc: "Laptops/Tablets allowed only for research/drafting. Mobile phones strictly restricted during live sessions. No photography.",
    },
    {
      icon: ShieldCheck,
      title: "Code of Conduct",
      desc: "Parliamentary decorum must be maintained. Unparliamentary language or disrespect towards the Chair will lead to penalization.",
    },
  ];

  return (
    <section className="py-20 border-b border-ink bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl italic mb-6">Guidelines & <br/>Policies</h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              To ensure a professional and productive environment, all delegates are expected to adhere to the simulation standards set by the Executive Board.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {rules.map((rule, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="p-3 bg-ink/5 rounded-full shrink-0 text-accent">
                  <rule.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{rule.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{rule.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
