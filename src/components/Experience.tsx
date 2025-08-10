import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "Optible AI",
      location: "Remote",
      period: "Sep 2023 - Aug 2025",
      type: "Full-time",
      achievements: [
        "Developed a modular form builder using React, improving flexibility and time-to-deployment for clients",
        "Built and maintained backend microservices using Go and GRPC, ensuring scalable cross-service communication",
        "Contributed to backend orchestration using Temporal, handling long-running workflows efficiently",
        "Managed database migrations and optimized SQL queries across distributed systems",
        "Implemented module federation to streamline UI component reuse across teams",
        "Utilized GraphQL for efficient data fetching and seamless frontend-backend integration",
        "Added multilingual support and enhanced accessibility, improving user inclusivity",
        "Worked on refactoring, debugging, and full-stack feature implementation in a fast-paced agile environment"
      ],
      technologies: ["React", "Go", "GRPC", "Temporal", "GraphQL", "SQL", "Module Federation"]
    },
    {
      title: "Software Engineer",
      company: "Leapfrog Technology",
      location: "Kathmandu, Nepal",
      period: "Nov 2021 - Sep 2023",
      type: "Full-time",
      achievements: [
        "Spearheaded frontend development for U.S.-based healthcare platforms using React, significantly enhancing UX",
        "Maintained and improved Node.js backends, working closely with Product and UI/UX teams",
        "Delivered cross-functional features by collaborating with designers, QA, and backend teams in agile sprints",
        "Ensured production stability through test-driven development and continuous refactoring"
      ],
      technologies: ["React", "Node.js", "JavaScript", "TypeScript", "Healthcare Systems"]
    },
    {
      title: "React Engineer / Designer / DevOps",
      company: "Esignature Pvt Ltd",
      location: "Kathmandu, Nepal",
      period: "Sep 2020 - Oct 2021",
      type: "Full-time",
      achievements: [
        "Designed and developed responsive web apps using React (JavaScript/TypeScript) aligned with Figma mockups",
        "Deployed applications via AWS S3 and Amplify, ensuring continuous delivery and scalability",
        "Collaborated with designers and analysts in Agile teams to ship features efficiently"
      ],
      technologies: ["React", "JavaScript", "TypeScript", "AWS S3", "AWS Amplify", "Figma"]
    },
    {
      title: "Software Engineering Intern",
      company: "Leapfrog Technology",
      location: "Kathmandu, Nepal",
      period: "Jun 2020 - Aug 2020",
      type: "Internship",
      achievements: [
        "Worked on vanilla JS projects to solidify understanding of core web technologies",
        "Completed mini-projects and participated in internal code reviews and design sprints"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Web Technologies"]
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