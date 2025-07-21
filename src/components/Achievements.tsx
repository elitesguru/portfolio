import { Award, Download, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      certificateUrl: "#",
      verificationUrl: "#",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Meta Professional Certificate",
      date: "2023",
      description: "Comprehensive program covering front-end and back-end development with modern technologies.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      certificateUrl: "/assets/fullstack-certificate.png",
      verificationUrl: "#",
      skills: ["React", "Node.js", "Databases", "API Development"]
    },
    {
      id: 3,
      title: "Google Cloud Professional",
      issuer: "Google Cloud Platform",
      date: "2023",
      description: "Certification in designing, building, and managing cloud solutions using Google Cloud technologies.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      certificateUrl: "#",
      verificationUrl: "#",
      skills: ["GCP Services", "DevOps", "Kubernetes", "Monitoring"]
    },
    {
      id: 4,
      title: "Machine Learning & AI Development",
      issuer: "App Brewery (Angela Yu)",
      date: "2025",
      description: "Awarded for excellence in developing real-world ML & AI solutions.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      certificateUrl: "/assets/ml-ai-certificate.png", // ← this should match your actual image filename
      verificationUrl: "#",
      skills: ["ML", "AI", "Python", "TensorFlow"]
    }

  ];

  const handleDownload = (certificateUrl: string, title: string) => {
    // In a real app, this would trigger an actual download
    console.log(`Downloading certificate: ${title}`);
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Achievements & <span className="bg-hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Professional certifications and achievements that validate my expertise 
            and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.id}
              className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border-0 shadow-soft bg-card-gradient backdrop-blur-sm animate-scale-in"
              style={{ 
                animationDelay: `${index * 0.15}s`, 
                animationFillMode: 'both' 
              }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    <Award className="w-3 h-3 mr-1" />
                    Certified
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-1">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-sm mb-2">
                      {achievement.issuer}
                    </CardDescription>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {achievement.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {achievement.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => handleDownload(achievement.certificateUrl, achievement.title)}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    Download
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 p-4 rounded-lg bg-muted/50 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Award className="w-6 h-6 text-primary" />
            <p className="text-sm text-muted-foreground">
              All certifications are verified and can be downloaded as official documents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
