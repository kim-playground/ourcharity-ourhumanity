import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import MemberCard from "@/components/MemberCard";

const Members = () => {
  const members = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "Leading with compassion and vision. 15 years of experience in humanitarian work and community development.",
    },
    {
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
      name: "Michael Chen",
      role: "Program Coordinator",
      bio: "Orchestrating impactful community programs. Passionate about sustainable solutions and volunteer engagement.",
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      name: "Emily Rodriguez",
      role: "Fundraising Manager",
      bio: "Building partnerships that fuel our mission. Dedicated to transparent and ethical resource mobilization.",
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      name: "David Kim",
      role: "Volunteer Coordinator",
      bio: "Empowering volunteers to make a difference. Creating meaningful opportunities for community engagement.",
    },
    {
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
      name: "Lisa Patel",
      role: "Communications Director",
      bio: "Sharing our impact stories with the world. Experienced in digital marketing and community storytelling.",
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      name: "James Wilson",
      role: "Operations Manager",
      bio: "Ensuring smooth execution of all initiatives. Detail-oriented leader with logistics expertise.",
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      name: "Maria Garcia",
      role: "Community Outreach",
      bio: "Connecting with communities we serve. Building trust and understanding through grassroots engagement.",
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      name: "Alex Thompson",
      role: "Impact Analyst",
      bio: "Measuring what matters most. Data-driven approach to understanding and improving our programs.",
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      name: "Rachel Lee",
      role: "Education Lead",
      bio: "Championing educational opportunities for all. Former teacher with a passion for youth development.",
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
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated individuals working together to create positive change
              in communities worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {members.map((member, index) => (
              <MemberCard key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you want to volunteer, partner with us, or support our
              mission, there's a place for you in our community.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Members;
