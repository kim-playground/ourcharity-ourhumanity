import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import TimelineStep from "@/components/TimelineStep";
import { Lightbulb, Users, Calendar, Rocket, TrendingUp } from "lucide-react";

const Journey = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Planning & Ideation",
      description:
        "Every great event starts with an idea. Our team works together to identify community needs and design programs that will make a real difference. We research, brainstorm, and create detailed action plans.",
    },
    {
      icon: Users,
      title: "Volunteer Mobilization",
      description:
        "We recruit and train passionate volunteers who share our vision. From logistics coordinators to on-ground support, every role is crucial. We provide comprehensive training and resources to ensure everyone is prepared.",
    },
    {
      icon: Calendar,
      title: "Event Preparation",
      description:
        "Detailed preparation is key to success. We secure venues, gather supplies, coordinate with partners, and handle all the logistics. Our team ensures every detail is covered for smooth execution.",
    },
    {
      icon: Rocket,
      title: "Event Execution",
      description:
        "The big day arrives! Our volunteers work together to bring the plan to life. We serve the community, create meaningful connections, and make an immediate positive impact on people's lives.",
    },
    {
      icon: TrendingUp,
      title: "Impact Assessment",
      description:
        "After each event, we measure our impact, gather feedback, and document results. We share success stories, analyze what worked well, and identify areas for improvement in future initiatives.",
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
              Our Journey Map
            </h1>
            <p className="text-xl text-muted-foreground">
              From concept to impact—the complete workflow of our community events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                {...step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Be Part of the Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every event is an opportunity to make a difference. Join us in the
              next chapter of our community impact story.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
