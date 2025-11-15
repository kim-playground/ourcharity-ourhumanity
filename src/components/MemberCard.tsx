import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface MemberCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  index: number;
}

const MemberCard = ({ image, name, role, bio, index }: MemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden rounded-2xl border-border hover:shadow-xl transition-all duration-300">
        <div className="relative h-72 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-white/90 font-medium">{role}</p>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-foreground/80 leading-relaxed">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MemberCard;
