import { Download, Eye, FileText, Star, Briefcase, GraduationCap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Resume = () => {
  // Programming Languages for circular cards
  const programmingLanguages = [
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Shell", level: 75 },
    { name: "SQL", level: 80 }
  ];

  // Security Tools for radar chart
  const securityTools = [
    { tool: "Nmap", level: 85 },
    { tool: "Wireshark", level: 80 },
    { tool: "Burpsuite", level: 75 },
    { tool: "Metasploit", level: 70 },
    { tool: "Nessus", level: 65 }
  ];

  const experience = [
    {
      title: "Junior Full Stack Developer",
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
    console.log('Downloading resume...');
    window.open('/john-barack-resume.pdf', '_blank');
  };

  const handlePreview = () => {
    console.log('Opening resume preview...');
    window.open('/john-barack-resume.pdf', '_blank');
  };

  // Color palette for circular cards
  const colors = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
  ];

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

            {/* Skills Section - Circular Cards + Radar Chart */}
            <Card className="border-0 shadow-soft bg-card-gradient backdrop-blur-sm animate-slide-in-right">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <CardTitle>Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Circular Cards for Programming Languages */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Programming Languages</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {programmingLanguages.map((lang, index) => (
                      <div key={lang.name} className="flex flex-col items-center group">
                        <div 
                          className="relative w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                          style={{
                            background: `conic-gradient(${colors[index % colors.length]} ${lang.level}%, #e5e7eb ${lang.level}%)`,
                            padding: '4px'
                          }}
                        >
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <span className="text-sm font-bold text-foreground">{lang.level}%</span>
                          </div>
                        </div>
                        <span className="text-xs text-center mt-2 font-medium text-muted-foreground">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Radar Chart for Security Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-primary" />
                    Security Tools
                  </h4>
                  <div className="w-full h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={securityTools} outerRadius={70}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="tool" tick={{ fontSize: 10, fill: '#6b7280' }} />
                        <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9, fill: '#6b7280' }} />
                        <Radar
                          dataKey="level"
                          stroke="#8884d8"
                          fill="#8884d8"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
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
