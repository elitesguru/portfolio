import { Download, Eye, FileText, Star, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Python", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
    { name: "MongoDB", level: 85 },
    { name: "Java", level: 70 }
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Co.",
      period: "2024 - Present",
      description: "Leading development of scalable web applications, mentoring junior developers, and implementing best practices."
    },
    {
      title: "Data scientist",
      company: "Digital Solutions Inc.",
      period: "2023 - 2024",
      description: "Developed and maintained multiple client projects using Python, SQL, and R technologies."
    },
    {
      title: "Machine Learning Developer",
      company: "SafetyPlus Consulting Limited Company",
      period: "2022 - 2025",
      description: "Developed and deployed machine learning models and collaborated with cross-functional teams to deliver intelligent, data-driven user experiences."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Kisii University",
      year: "2025",
      gpa: "3.4/4.0"
    }
  ];

  const handleDownload = () => {
    // In a real app, this would trigger an actual resume download
    console.log('Downloading resume...');
    window.open('/john-barack-resume.pdf', '_blank');
  };

  const handlePreview = () => {
    // In a real app, this would open a preview modal or new tab
    console.log('Opening resume preview...');
    window.open('/john-barack-resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Download my complete resume or preview my experience, skills, and educational background.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Download Section */}
          <Card className="mb-12 border-0 shadow-soft bg-card-gradient backdrop-blur-sm animate-scale-in">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Professional Resume</CardTitle>
              <CardDescription>
                Complete overview of my professional experience, skills, and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  onClick={handlePreview}
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Preview
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2025 • PDF Format • 2 pages
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <Card className="border-0 shadow-soft bg-card-gradient backdrop-blur-sm animate-slide-in-left">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <CardTitle>Professional Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/20 last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="border-0 shadow-soft bg-card-gradient backdrop-blur-sm animate-slide-in-right">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <CardTitle>Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="lg:col-span-2 border-0 shadow-soft bg-card-gradient backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <CardTitle>Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-primary">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{edu.year}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
