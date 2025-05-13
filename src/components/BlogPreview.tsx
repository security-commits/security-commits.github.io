import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FiClock, FiUser, FiArrowRight } from "react-icons/fi";

const BlogPreview = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">From Our Blog</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover best practices, tips, and in-depth guides about security commit messages and more.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <FiClock size={14} />
                <span>June 14, 2023</span>
              </div>
              <div className="flex items-center gap-1">
                <FiUser size={14} />
                <span>Sofia Reis</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Best Practices for Security Commit Messages
            </h3>
            
            <p className="text-muted-foreground mb-6">
              When working on security-related changes, writing clear commit messages is essential for project maintenance 
              and security audits. The SECOM convention provides a structured approach to security commit messages, 
              but there are additional best practices to consider.
            </p>
            
            <Button variant="default" className="group">
              <Link to="/blog" className="flex items-center gap-2">
                Read Full Article
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/blog">
            <Button variant="outline">View All Blog Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 