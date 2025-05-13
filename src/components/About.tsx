
import { Card, CardContent } from "@/components/ui/card";
import { FiShield, FiSearch, FiList, FiUsers } from 'react-icons/fi';

const AboutFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Use SECOM?</h2>
          <p className="text-lg text-muted-foreground">
            SECOM provides a structured approach to documenting security-related changes in your code, 
            making it easier to track and understand security modifications across your project's history.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AboutFeature 
            icon={<FiShield size={28} />}
            title="Improve Security Visibility"
            description="Clearly identify security-related changes in your commit history, making security work visible and traceable."
          />
          <AboutFeature 
            icon={<FiSearch size={28} />}
            title="Facilitate Security Audits"
            description="Make security audits more efficient with standardized commit messages that highlight security changes."
          />
          <AboutFeature 
            icon={<FiList size={28} />}
            title="Standardize Security Documentation"
            description="Establish a consistent format for documenting security fixes, improvements, and considerations."
          />
          <AboutFeature 
            icon={<FiUsers size={28} />}
            title="Enhance Team Collaboration"
            description="Help team members understand the security implications of code changes with clear, informative commit messages."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
