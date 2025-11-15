import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ImpactStatsProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

const ImpactStats = ({ icon: Icon, value, label, index }: ImpactStatsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {value}
        </h3>
        <p className="text-foreground/70 font-medium">{label}</p>
      </motion.div>
    </motion.div>
  );
};

export default ImpactStats;
