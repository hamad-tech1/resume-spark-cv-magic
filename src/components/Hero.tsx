import { Button } from "@/components/ui/button";
import { Upload, Sparkles, Download, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cv-platform.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-trust/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered CV Generation
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-primary to-trust bg-clip-text text-transparent"> Resume </span>
                Into a Professional CV
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Upload your existing resume and watch our AI convert it into a beautifully formatted LaTeX CV in minutes.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-sm font-medium">PDF & Image Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-sm font-medium">LaTeX Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-trust" />
                <span className="text-sm font-medium">Instant Preview</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <Upload className="w-5 h-5" />
                Start Converting Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Sample CV
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> CVs generated
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">99%</span> satisfaction rate
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">24/7</span> support
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional CV conversion platform" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">CV Enhancer!</div>
                  <div className="text-xs text-muted-foreground">Ready to Generate</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">AI Processing</div>
                  <div className="text-xs text-muted-foreground">Analyzing content...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;