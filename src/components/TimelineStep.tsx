import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

const TimelineStep = ({
  icon: Icon,
  title,
  description,
  index,
  isLast,
}: TimelineStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex gap-6 pb-12"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
      )}

      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
        className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg z-10"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-foreground/80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
