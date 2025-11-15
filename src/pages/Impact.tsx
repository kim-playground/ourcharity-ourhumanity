import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ImpactStats from "@/components/ImpactStats";
import {
  Users,
  Heart,
  GraduationCap,
  Home,
  Utensils,
  Stethoscope,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Impact = () => {
  const stats = [
    { icon: Users, value: "10,234", label: "Lives Impacted" },
    { icon: Utensils, value: "50K+", label: "Meals Provided" },
    { icon: GraduationCap, value: "1,500", label: "Students Supported" },
    { icon: Home, value: "200", label: "Families Housed" },
    { icon: Stethoscope, value: "3,000", label: "Health Screenings" },
    { icon: Heart, value: "5,000", label: "Volunteer Hours" },
  ];

  const monthlyData = [
    { month: "Jan", beneficiaries: 650, events: 8 },
    { month: "Feb", beneficiaries: 720, events: 10 },
    { month: "Mar", beneficiaries: 890, events: 12 },
    { month: "Apr", beneficiaries: 810, events: 11 },
    { month: "May", beneficiaries: 950, events: 14 },
    { month: "Jun", beneficiaries: 1100, events: 15 },
  ];

  const programData = [
    { name: "Food Security", impact: 42 },
    { name: "Education", impact: 28 },
    { name: "Healthcare", impact: 18 },
    { name: "Housing", impact: 12 },
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
              Social Impact Profile
            </h1>
            <p className="text-xl text-muted-foreground">
              Measuring our community contributions and the positive change
              we've created together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <ImpactStats key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Impact Over Time
            </h2>
            <p className="text-xl text-muted-foreground">
              Our growth and reach in the community
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Monthly Beneficiaries */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Monthly Beneficiaries
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="beneficiaries"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Program Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Program Impact Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={programData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar
                    dataKey="impact"
                    fill="hsl(var(--accent))"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Milestones we've reached together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Community Champions Award",
                year: "2023",
                description:
                  "Recognized for outstanding humanitarian work by the National Charity Foundation",
              },
              {
                title: "10,000 Lives Milestone",
                year: "2023",
                description:
                  "Reached our goal of positively impacting 10,000 individuals through our programs",
              },
              {
                title: "Global Impact Partner",
                year: "2022",
                description:
                  "Expanded operations to 50+ countries, creating international humanitarian partnerships",
              },
              {
                title: "Educational Excellence",
                year: "2022",
                description:
                  "Provided scholarships and supplies to over 1,500 students in underserved communities",
              },
              {
                title: "Healthcare Initiative",
                year: "2021",
                description:
                  "Launched free health screening program serving 3,000+ community members",
              },
              {
                title: "Volunteer Network",
                year: "2021",
                description:
                  "Built a network of 5,000+ dedicated volunteers across all program areas",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-3">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
