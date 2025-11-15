import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import { Heart, Users, Globe, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Active Members" },
    { icon: HandHeart, value: "500+", label: "Events Organized" },
    { icon: Globe, value: "50+", label: "Countries Reached" },
    { icon: Heart, value: "$2M+", label: "Funds Raised" },
  ];

  const values = [
    {
      title: "Compassion",
      description:
        "We believe in the power of empathy and kindness to transform lives and communities.",
    },
    {
      title: "Unity",
      description:
        "Together we are stronger. We bring people together across all boundaries.",
    },
    {
      title: "Action",
      description:
        "We don't just talk about change—we make it happen through concrete actions.",
    },
    {
      title: "Transparency",
      description:
        "Every contribution is tracked and every impact is measured and shared openly.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Impact Numbers */}
      <section className="py-20 bg-impact-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every contribution makes a difference. Here's what we've achieved
              together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <ImpactStats key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full text-lg px-8"
            >
              <Link to="/vision">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of compassionate individuals creating positive
              change around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-white/90 text-lg px-8"
              >
                <Link to="/members">Become a Member</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8"
              >
                <Link to="/donate">Make a Donation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
