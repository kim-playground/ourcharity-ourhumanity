import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Target, Eye, Heart, Lightbulb, Shield, Globe } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A world where every person has access to basic human needs and opportunities to thrive, regardless of their circumstances or background.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To mobilize communities and resources to address humanitarian needs through sustainable programs, innovative solutions, and compassionate action.",
    },
  ];

  const principles = [
    {
      icon: Heart,
      title: "Human Dignity",
      description:
        "We believe every person deserves to be treated with respect, compassion, and dignity.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace creative solutions and adapt to changing needs in our communities.",
    },
    {
      icon: Shield,
      title: "Accountability",
      description:
        "We maintain transparency and are responsible stewards of resources entrusted to us.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "We focus on long-term solutions that empower communities to become self-sufficient.",
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
              Vision & Mission
            </h1>
            <p className="text-xl text-muted-foreground">
              Our guiding principles and the future we're working to create
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-8 md:p-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {point.title}
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values that shape our work and define who we are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
