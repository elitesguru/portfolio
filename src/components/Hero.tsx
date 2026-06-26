import { ArrowDown, Github, Linkedin, Mail, Code, Briefcase, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stats data
  const stats = [
    { label: 'Projects Completed', value: '15+', icon: <Code className="w-4 h-4" /> },
    { label: 'Years Experience', value: '3+', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Happy Clients', value: '10+', icon: <Users className="w-4 h-4" /> },
    { label: 'Certifications', value: '5+', icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow))_0%,transparent_50%)]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Picture with enhanced styling */}
          <div className="animate-fade-in-down">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-hero-gradient rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <img
                  src={profilePicture}
                  alt="John Barack - Software Engineer"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-strong border-4 border-background animate-float"
                />
                {/* Status indicator */}
                <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-background animate-pulse" />
              </div>
            </div>
          </div>

          {/* Name and Title - More dynamic */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Barack John
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-xl md:text-2xl text-muted-foreground">Software Engineer</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-lg md:text-xl text-primary font-medium">Full Stack Developer</span>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              Crafting scalable web solutions with modern technologies
            </p>
          </div>

          {/* Bio - More impactful and personalized */}
          <div className="animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Software Engineer specializing in building exceptional digital experiences. 
                With a strong foundation in <span className="text-primary font-medium">Data Science</span> and 
                <span className="text-primary font-medium"> Cyber Security</span>, I turn complex problems into 
                elegant, user-centric solutions that drive business growth.
              </p>
            </div>
          </div>

          {/* Stats - New section */}
          <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {stats.map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center gap-2 text-primary mb-1">
                  {stat.icon}
                  <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Social Links - Enhanced */}
          <div className="animate-fade-in-up flex items-center justify-center gap-3 flex-wrap" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <a href="https://github.com/elitesguru" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="default" className="hover:scale-105 transition-all duration-300 hover:shadow-glow group">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/john-barack-240056233" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="default" className="hover:scale-105 transition-all duration-300 hover:shadow-glow group">
                <Linkedin className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:johnbarack10@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="default" className="hover:scale-105 transition-all duration-300 hover:shadow-glow group">
                <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Email
              </Button>
            </a>
          </div>

          {/* CTA Button - Enhanced */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="group shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105 px-8"
            >
              Explore My Work
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center hover:border-primary transition-colors duration-300">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
