import { Shield, Zap, Palette, Globe, Clock, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Convert your resume to a professional CV in under 3 minutes with our optimized AI pipeline."
    },
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Beautiful LaTeX templates designed by professionals to make your CV stand out."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your documents are encrypted and automatically deleted after processing for maximum privacy."
    },
    {
      icon: Globe,
      title: "Multiple Formats",
      description: "Support for PDF uploads, image files, and various resume formats from around the world."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Convert your resume anytime, anywhere. Our service is available round the clock."
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Get help from our team if you need assistance with your CV conversion process."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Why Choose Our Platform?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI technology with professional design to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-trust rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;