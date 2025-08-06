import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      github: "https://github.com/sushmit-rajaure/ecommerce-platform",
      live: "https://ecommerce-demo.sushmit.dev",
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API built with Golang and MongoDB for managing tasks and projects. Includes JWT authentication, role-based permissions, and real-time notifications.",
      technologies: ["Golang", "MongoDB", "JWT", "WebSocket", "Docker"],
      github: "https://github.com/sushmit-rajaure/task-api",
      live: "https://api.tasks.sushmit.dev",
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and group conversations. Built with React and Socket.io for seamless communication.",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/sushmit-rajaure/chat-app",
      live: "https://chat.sushmit.dev",
      featured: false
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking project metrics and performance. Features interactive charts, data visualization, and export capabilities.",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      github: "https://github.com/sushmit-rajaure/portfolio-dashboard",
      live: "https://dashboard.sushmit.dev",
      featured: false
    },
    {
      title: "Mobile Banking App",
      description: "Cross-platform mobile application for banking services. Includes secure authentication, transaction history, and payment features.",
      technologies: ["React Native", "Firebase", "Redux", "Stripe", "Biometrics"],
      github: "https://github.com/sushmit-rajaure/banking-app",
      live: "https://apps.apple.com/banking-demo",
      featured: true
    },
    {
      title: "DevOps Automation Tool",
      description: "Infrastructure as Code tool for automating deployment pipelines. Built with Golang and integrates with major cloud providers.",
      technologies: ["Golang", "Terraform", "AWS", "Docker", "Kubernetes"],
      github: "https://github.com/sushmit-rajaure/devops-tool",
      live: "https://devops.sushmit.dev",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in 
              full-stack development and problem-solving.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="card-gradient border-border/50 hover-glow overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Info */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/20 hover:border-primary/50"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={16} className="mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                            asChild
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Project Image Placeholder */}
                    <div className={`bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center min-h-[300px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center text-muted-foreground">
                        <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                          <ExternalLink size={32} className="text-primary" />
                        </div>
                        <p className="text-sm">Project Screenshot</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              Other Notable <span className="text-gradient">Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="card-gradient border-border/50 hover-glow h-full"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1 space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h4>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 px-6 pb-6">
                    <div className="flex gap-3 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/20 hover:border-primary/50"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={14} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
