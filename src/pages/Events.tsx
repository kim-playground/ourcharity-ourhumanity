import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";

const Events = () => {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      title: "Community Food Drive",
      date: "March 15, 2024",
      location: "City Center, Downtown",
      description:
        "We collected and distributed over 5,000 meals to families in need. Volunteers from across the city came together to make this event a success.",
    },
    {
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
      title: "Education Initiative",
      date: "February 20, 2024",
      location: "Local Schools Network",
      description:
        "Provided school supplies and books to 1,000+ students. Our education program continues to support children's learning journey.",
    },
    {
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
      title: "Healthcare Outreach",
      date: "January 10, 2024",
      location: "Community Health Center",
      description:
        "Free health screenings and medical consultations for 500+ community members. Medical professionals volunteered their time and expertise.",
    },
    {
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
      title: "Environmental Cleanup",
      date: "December 5, 2023",
      location: "Riverside Park",
      description:
        "Cleaned up 2 miles of riverfront and planted 200 trees. Making our environment cleaner and greener for future generations.",
    },
    {
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
      title: "Winter Warmth Campaign",
      date: "November 15, 2023",
      location: "Multiple Locations",
      description:
        "Distributed warm clothing and blankets to over 800 homeless individuals. Your donations made a real difference during the cold season.",
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      title: "Skills Training Workshop",
      date: "October 28, 2023",
      location: "Community Learning Center",
      description:
        "Taught job skills and computer literacy to 150 participants. Empowering people with knowledge for better employment opportunities.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Event Documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              A gallery of our community events and the positive impact we've
              created together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
