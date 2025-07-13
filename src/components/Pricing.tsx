import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic CV",
      price: "$9.99",
      description: "Perfect for individual job seekers",
      features: [
        "1 CV conversion",
        "Standard LaTeX template",
        "PDF download",
        "Email support",
        "48-hour delivery"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional CV",
      price: "$19.99",
      description: "Ideal for professionals and executives",
      features: [
        "1 CV conversion",
        "Premium LaTeX templates",
        "Multiple format options",
        "Priority support", 
        "24-hour delivery",
        "Revision included",
        "Cover letter template"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "CV Package",
      price: "$34.99",
      description: "Complete solution for job applications",
      features: [
        "3 CV conversions",
        "All premium templates",
        "Multiple formats",
        "Priority support",
        "12-hour delivery",
        "Unlimited revisions",
        "Cover letter & LinkedIn optimization",
        "Personal consultation call"
      ],
      popular: false,
      cta: "Best Value"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your CV conversion needs. No hidden fees, no subscriptions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-card hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-elegant scale-105' 
                  : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-trust text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-trust flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "default"} 
                  className="w-full text-lg py-6"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            🔒 Secure payment processing with 30-day money-back guarantee
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <span>💳 All major cards accepted</span>
            <span>⚡ Instant processing</span>
            <span>🛡️ SSL encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;