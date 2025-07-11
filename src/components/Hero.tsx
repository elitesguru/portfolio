import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow))_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Picture */}
          <div className="animate-fade-in-down">
            <div className="relative inline-block">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-strong border-4 border-background animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-20 animate-glow-pulse" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Barack John
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Software Engineer
            </p>
            <p className="text-lg text-muted-foreground">
              Building digital experiences with modern technologies
            </p>
          </div>

          {/* Bio */}
          <div className="animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating innovative solutions and bringing ideas to life through code. 
              With expertise in modern web technologies, I help businesses build scalable and 
              user-friendly applications that make a difference.
            </p>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up flex items-center justify-center space-x-4" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <a href="https://github.com/elitesguru" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
              <a href="https://linkedin.com/in/johnbarack" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
                <a href="mailto:johnbarack10@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="group shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
