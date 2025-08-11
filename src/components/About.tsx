import { Code, Database, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Material-UI"],
      color: "text-blue-400"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Node.js", "Golang", "Python", "Express.js", "PostgreSQL", "MongoDB"],
      color: "text-green-400"
    },
    {
      category: "Tools & DevOps",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Docker", "AWS", "Git"],
      color: "text-purple-400"
    },
    // {
    //   category: "Mobile",
    //   icon: <Smartphone className="w-6 h-6" />,
    //   technologies: ["React Native", "Flutter", "iOS", "Android", "PWA"],
    //   color: "text-orange-400"
    // },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm passionate about creating innovative solutions that bridge the gap between 
              cutting-edge technology and exceptional user experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Building Digital Experiences
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my journey in software engineering over 5 years ago, driven by a 
                  curiosity to understand how technology can solve real-world problems. Since then, 
                  I've worked with startups and established companies, helping them build scalable 
                  applications that users love.
                </p>
                
                <p>
                  My expertise spans the full stack, but I have a particular passion for frontend 
                  development with React and building robust backend systems with Node.js and Golang. 
                  I believe in writing clean, maintainable code and creating intuitive user interfaces.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge through technical blogs and videos.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Technical Skills
              </h3>
              
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="card-gradient border-border/50 hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={skill.color}>
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {skill.category}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-full border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;