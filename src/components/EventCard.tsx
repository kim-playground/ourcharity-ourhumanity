import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
  index: number;
}

const EventCard = ({
  image,
  title,
  date,
  location,
  description,
  index,
}: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden rounded-2xl border-border hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
          <p className="text-foreground/80 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;
