import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const HeroSection = ({ id }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const heroSlides = [
    {
      title: "Transform Your Business With Our",
      highlight: "KTsoftTech",
      description: "Streamline your operations, boost productivity, and enhance customer satisfaction with our cutting-edge SaaS platform. Experience seamless integration and unparalleled support.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&h=600&q=80",
      imageLabel: "Modern Dashboard Interface"
    },
    {
      title: "Innovative Solutions For",
      highlight: "Your Growth",
      description: "Leverage our advanced analytics and AI-powered tools to make data-driven decisions and accelerate your business growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80",
      imageLabel: "Advanced Analytics"
    },
    {
      title: "Seamless Integration With",
      highlight: "Your Workflow",
      description: "Our platform integrates effortlessly with your existing tools, minimizing disruption and maximizing efficiency from day one.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=600&q=80",
      imageLabel: "Team Collaboration"
    }
  ];

  useEffect(() => {
    if (!api) return;

    let interval: NodeJS.Timeout;
    const autoplaySpeed = 6000; // 6 seconds per slide
    const transitionSpeed = 1000; // Smooth 1s transition

    // Configure carousel for smooth looping
    api.on("init", () => {
      api.scrollTo(0, true); // Start at first slide
    });

    const startAutoplay = () => {
      interval = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          // If at the end, smoothly loop back to start
          api.scrollTo(0, true);
        }
      }, autoplaySpeed);
    };

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      // Reset autoplay timer on any interaction
      clearInterval(interval);
      startAutoplay();
    };

    // Enable smooth transitions
    api.on("select", onSelect);
    api.on("pointerDown", () => clearInterval(interval));
    
    // Start autoplay
    startAutoplay();

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
      api.off("pointerDown", () => clearInterval(interval));
    };
  }, [api]);

  return (
    <section id={id}>
      <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden min-h-[90vh] flex items-center">
        {/* Orange glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>

        <Carousel 
          setApi={setApi} 
          className="w-full"
          opts={{
            loop: true, // Enable infinite looping
            duration: 50, // Makes the scroll animation smoother
            startIndex: 0, // Start at first slide
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="section-container relative z-10">
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto px-4">
                    {/* Text Content */}
                    <div className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left animate-fade-in">
                      <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-saas-orange/20">
                        Introducing KTsoftTech 2.0
                      </span>

                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        {slide.title}{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                          {slide.highlight}
                        </span>
                      </h1>

                      <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                          Get Started Free
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white"
                        >
                          Book Demo
                        </Button>
                      </div>

                      <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                        <div className="flex -space-x-3">
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                            className="w-10 h-10 rounded-full border-2 border-saas-black"
                            alt="User"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                            className="w-10 h-10 rounded-full border-2 border-saas-black"
                            alt="User"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                            className="w-10 h-10 rounded-full border-2 border-saas-black"
                            alt="User"
                          />
                        </div>
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-saas-orange">500+</span>{" "}
                          businesses already using our platform
                        </p>
                      </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2 order-1 lg:order-2 animate-fade-in">
                      <div className="relative max-w-2xl mx-auto lg:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-saas-orange to-orange-700 blur-xl opacity-20 rounded-xl"></div>
                        <div className="relative bg-saas-darkGray rounded-xl border border-saas-orange/20 p-2 card-shadow transform transition-all duration-500 hover:scale-[1.01] hover:shadow-orange-500/10 hover:shadow-lg">
                          <img
                            src={slide.image}
                            alt={slide.imageLabel}
                            className="rounded-lg w-full h-auto"
                          />
                          <div className="absolute bottom-4 left-4 bg-saas-orange/80 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
                            {slide.imageLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation arrows - positioned closer to content */}
          <CarouselPrevious className="hidden md:flex left-6 bg-saas-orange/20 hover:bg-saas-orange/40 text-white" />
          <CarouselNext className="hidden md:flex right-6 bg-saas-orange/20 hover:bg-saas-orange/40 text-white" />
          
          {/* Indicators - styled for better visibility */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index 
                    ? "bg-saas-orange w-6" 
                    : "bg-gray-500/50 hover:bg-gray-500/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>

        {/* Abstract shapes */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
        <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;