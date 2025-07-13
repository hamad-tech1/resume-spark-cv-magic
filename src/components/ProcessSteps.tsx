import { Upload, Brain, Eye, Download, CreditCard } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      description: "Upload your existing resume as PDF or image file",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our AI extracts and structures your content intelligently",
      step: "02"
    },
    {
      icon: Eye,
      title: "Preview CV",
      description: "Review your professionally formatted LaTeX CV",
      step: "03"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Complete payment for your finalized CV",
      step: "04"
    },
    {
      icon: Download,
      title: "Download",
      description: "Get your high-quality PDF CV instantly",
      step: "05"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your resume into a professional CV in just 5 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connection lines for desktop */}
          {/* <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-trust to-primary opacity-30 z-0"></div> */}
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="text-center space-y-6">
                {/* Step circle */}
                <div className="relative mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-trust rounded-full flex items-center justify-center shadow-elegant mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;