import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface DonationTierProps {
  title: string;
  amount: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  index: number;
}

const DonationTier = ({
  title,
  amount,
  description,
  features,
  highlighted,
  index,
}: DonationTierProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: highlighted ? 1.05 : 1.02 }}
    >
      <Card
        className={`rounded-2xl border-2 transition-all duration-300 ${
          highlighted
            ? "border-primary shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5"
            : "border-border hover:border-primary/50"
        }`}
      >
        <CardHeader className="text-center pb-4">
          {highlighted && (
            <div className="inline-block mx-auto mb-2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
              Most Popular
            </div>
          )}
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-primary">${amount}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
          <Button
            className={`w-full rounded-full text-base py-6 ${
              highlighted ? "shadow-lg" : ""
            }`}
            variant={highlighted ? "default" : "outline"}
          >
            Choose Plan
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DonationTier;
