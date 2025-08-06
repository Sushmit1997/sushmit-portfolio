import { ArrowDown, Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Profile Photo */}
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden hero-glow ring-4 ring-primary/20">
              <img
                src={profilePhoto}
                alt="Sushmit Rajaure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Sushmit</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-normal">
              Full Stack Software Engineer
            </span>
          </h1>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            With over <span className="text-primary font-semibold">5 years of experience</span>, I specialize in 
            modern web applications with a strong focus on frontend development using <span className="text-primary font-semibold">React</span>, 
            and backend services using <span className="text-primary font-semibold">Node.js</span> and <span className="text-primary font-semibold">Golang</span>. 
            I'm passionate about creating seamless user experiences and building scalable backend systems.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="hover-glow border-primary/20 hover:border-primary/50"
              asChild
            >
              <a
                href="https://linkedin.com/in/sushmit-rajaure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover-glow border-primary/20 hover:border-primary/50"
              asChild
            >
              <a
                href="https://github.com/sushmit-rajaure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover-glow border-primary/20 hover:border-primary/50"
              asChild
            >
              <a
                href="https://youtube.com/@sushmit-rajaure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover-glow"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary/50 px-8 py-3"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;