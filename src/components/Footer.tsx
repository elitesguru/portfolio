import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/elitesguru', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/john-barack-240056233/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:johnbarack10@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              My Portfolio
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Passionate Software Engineer creating innovative digital solutions 
              with modern technologies and best practices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-soft"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>your.email@example.com</p>
              <p>+254 (703) 750-808</p>
              <p>Nairobi, Kenya</p>
            </div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </Button>
          </div>
        </div>

        <hr className="my-8 border-border" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hale Jaunire. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
