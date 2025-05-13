import { Button } from "@/components/ui/button";
import { FiClock, FiUser, FiTag } from "react-icons/fi";

const BlogPost = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <FiClock size={14} />
          <span>June 14, 2023</span>
        </div>
        <div className="flex items-center gap-1">
          <FiUser size={14} />
          <span>Sofia Reis</span>
        </div>
        <div className="flex items-center gap-1">
          <FiTag size={14} />
          <span>Security, Commit Messages</span>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 text-foreground">
        Best Practices for Security Commit Messages
      </h2>
      
      <p className="mb-4">
        When working on security-related changes, writing clear commit messages is essential for project maintenance and security audits. 
        The SECOM convention provides a structured approach to security commit messages, but there are additional best practices to consider.
      </p>
      
      <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
        Why Security Commit Messages Matter
      </h3>
      
      <p className="mb-4">
        Security commit messages are critical documentation that help:
      </p>
      
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Track vulnerability fixes throughout the codebase</li>
        <li className="mb-2">Provide context for security patches during code review</li>
        <li className="mb-2">Create an audit trail for security changes</li>
        <li className="mb-2">Help new developers understand security decisions</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
        Key Components of Effective Security Commit Messages
      </h3>
      
      <p className="mb-4">
        Following the SECOM convention ensures your security commit messages include:
      </p>
      
      <ol className="list-decimal pl-6 mb-6">
        <li className="mb-2"><strong>Security keyword</strong>: Clearly mark security-related commits</li>
        <li className="mb-2"><strong>CWE identifier</strong>: Reference the specific weakness being addressed</li>
        <li className="mb-2"><strong>Description</strong>: Provide context about the change</li>
      </ol>
      
      <p className="mb-4">
        Beyond the basic structure, consider including:
      </p>
      
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Links to relevant issues or CVEs</li>
        <li className="mb-2">Impact assessment of the vulnerability</li>
        <li className="mb-2">Testing methodology used to verify the fix</li>
      </ul>
      
      <div className="bg-secondary p-4 rounded-md mb-6">
        <p className="text-sm italic">
          "Great security commit messages serve as living documentation of your project's security journey."
        </p>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
        Getting Started with SECOM
      </h3>
      
      <p className="mb-4">
        To implement the SECOM convention in your project:
      </p>
      
      <ol className="list-decimal pl-6 mb-6">
        <li className="mb-2">Read the <a href="/convention" className="text-primary hover:underline">full convention</a></li>
        <li className="mb-2">Install our <a href="https://tqrg.github.io/secomlint/" className="text-primary hover:underline">linter tool</a></li>
        <li className="mb-2">Review our <a href="/reference" className="text-primary hover:underline">reference guide</a> for examples</li>
      </ol>
      
      <div className="border-t border-border pt-6 mt-10">
        <Button variant="outline" size="sm" className="text-primary">
          <a href="/blog">Back to All Blog Posts</a>
        </Button>
      </div>
    </article>
  );
};

export default BlogPost; 