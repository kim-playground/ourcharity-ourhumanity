import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import DonationTier from "@/components/DonationTier";
import { Progress } from "@/components/ui/progress";

const Donate = () => {
  const tiers = [
    {
      title: "Supporter",
      amount: 10,
      description: "Help us make a difference",
      features: [
        "Monthly newsletter updates",
        "Impact reports",
        "Community recognition",
        "Tax-deductible receipt",
      ],
    },
    {
      title: "Champion",
      amount: 50,
      description: "Amplify our impact together",
      features: [
        "All Supporter benefits",
        "Exclusive event invitations",
        "Quarterly impact calls",
        "Special recognition on website",
        "Early access to initiatives",
      ],
      highlighted: true,
    },
    {
      title: "Visionary",
      amount: 100,
      description: "Lead transformative change",
      features: [
        "All Champion benefits",
        "One-on-one impact sessions",
        "Advisory board opportunities",
        "VIP event experiences",
        "Custom impact reports",
        "Legacy recognition",
      ],
    },
  ];

  const currentAmount = 127500;
  const goalAmount = 200000;
  const progressPercentage = (currentAmount / goalAmount) * 100;

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
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground">
              Your contribution directly supports humanitarian programs and
              community initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fundraising Progress */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                2024 Annual Campaign
              </h2>
              <p className="text-muted-foreground">
                Help us reach our goal to expand our programs
              </p>
            </div>
            <div className="space-y-3">
              <Progress value={progressPercentage} className="h-4" />
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-primary">
                  ${currentAmount.toLocaleString()} raised
                </span>
                <span className="text-muted-foreground">
                  Goal: ${goalAmount.toLocaleString()}
                </span>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                {Math.round(progressPercentage)}% of goal reached • {" "}
                {Math.round((goalAmount - currentAmount) / 50)} more monthly
                Champions needed
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Impact Level
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every contribution makes a difference. Select the plan that works
              for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <DonationTier key={index} {...tier} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              All donations are tax-deductible. Custom amounts are also welcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Where Your Money Goes
              </h2>
              <p className="text-xl text-muted-foreground">
                We're committed to transparency and efficient use of resources
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Programs & Services", percentage: 82 },
                { label: "Administration", percentage: 10 },
                { label: "Fundraising", percentage: 8 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center border border-border"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {item.percentage}%
                  </div>
                  <div className="text-foreground font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
