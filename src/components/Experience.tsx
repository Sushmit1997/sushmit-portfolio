import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 100K+ users",
        "Mentored 3 junior developers and established code review processes",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Built React-based dashboard improving user engagement by 40%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      achievements: [
        "Developed MVP from scratch using React and Golang",
        "Integrated payment systems processing $2M+ in transactions",
        "Optimized database queries improving response time by 70%",
        "Collaborated with design team to implement pixel-perfect UIs"
      ],
      technologies: ["React", "Golang", "MongoDB", "Stripe", "Redis"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      achievements: [
        "Built responsive websites for 15+ clients across various industries",
        "Implemented modern JavaScript frameworks and best practices",
        "Improved website performance scores by average of 45%",
        "Delivered projects on time with 98% client satisfaction rate"
      ],
      technologies: ["React", "Vue.js", "TypeScript", "Sass", "Webpack"]
    },
    {
      title: "Junior Software Engineer",
      company: "Enterprise Solutions Inc",
      location: "New York, NY",
      period: "2018 - 2019",
      type: "Full-time",
      achievements: [
        "Maintained legacy Java applications serving internal teams",
        "Migrated monolithic applications to modular architecture",
        "Reduced bug reports by 35% through comprehensive testing",
        "Contributed to technical documentation and knowledge sharing"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "JUnit", "Maven"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey building innovative solutions and leading development teams.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                    <Card className="card-gradient border-border/50 hover-glow">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                              {exp.type}
                            </span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Building2 size={14} />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start gap-2 text-muted-foreground text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="card-gradient border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready for New Challenges
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to work on innovative projects and collaborate with 
                  talented teams. Let's build something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <span className="text-primary font-semibold">Open to:</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Full-time", "Contract", "Consulting"].map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;