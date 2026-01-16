import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      liveUrl: "https://beautyhub-global-vhs7894.public.builtwithrocket.new/user-dashboard",
      githubUrl: "https://github.com/elitesguru", // Updated from "#"
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/elitesguru", // Updated from "#"
      featured: false
    },
    {
      id: 3,
      title: "Ghost Assistant",
      description: "A responsive weather dashboard that provides current weather conditions, forecasts, and historical data with beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "https://phantom-voice-assist.netlify.app/",
      githubUrl: "https://github.com/elitesguru", // Updated from "yourusername"
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      liveUrl: "https://johnbarack.netlify.app/",
      githubUrl: "https://github.com/elitesguru/portfolio",
      featured: true
    }
  ];

  // Function to handle link clicks
  const handleLinkClick = (url, event) => {
    if (url === "#" || !url) {
      event.preventDefault();
      return;
    }
    // Anchor tag will handle the rest with target="_blank"
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border-0 shadow-soft bg-card-gradient backdrop-blur-sm animate-scale-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: 'both' 
              }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    onClick={(e) => handleLinkClick(project.liveUrl, e)}
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      disabled={project.liveUrl === "#"}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      {project.liveUrl === "#" ? "Coming Soon" : "Live Demo"}
                    </Button>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    onClick={(e) => handleLinkClick(project.githubUrl, e)}
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      disabled={project.githubUrl === "#"}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:scale-105 transition-transform duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            onClick={() => window.open('https://github.com/elitesguru', '_blank', 'noopener,noreferrer')}
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
