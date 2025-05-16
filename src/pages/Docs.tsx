import DocsLayout from "@/components/DocsLayout";

const Docs = () => {
  return (
    <DocsLayout>
      <div className="space-y-6 pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-primary mb-10 mt-6">SECOM Documentation</h1>
        
        <div className="text-lg text-muted-foreground mb-8">
          Comprehensive documentation for the SECOM convention, a standardized approach to security commit messages.
        </div>
        
        <div className="prose prose-slate max-w-none">
          <h2>Introduction</h2>
          <p>
            SECOM (Security Commit Message Convention) is a standardized format for writing commit messages
            that address security issues. The convention helps developers communicate security changes
            effectively across teams and projects.
          </p>
          
          <p>
            By following SECOM, teams can more easily track, audit, and understand security changes
            throughout their codebase. This documentation covers everything you need to know about
            implementing and using the SECOM convention in your projects.
          </p>
          
          <h2>Why SECOM?</h2>
          <p>
            Security-related changes deserve special attention in version control systems. Without a
            standardized approach, critical security information can get lost in commit logs, making
            it difficult to track vulnerabilities and their fixes.
          </p>
          
          <p>SECOM solves these problems by providing:</p>
          
          <ul>
            <li>A clear, consistent format for security commit messages</li>
            <li>Integration with Common Weakness Enumeration (CWE) for precise vulnerability categorization</li>
            <li>Better searchability and traceability of security fixes</li>
            <li>Improved collaboration between security teams and developers</li>
            <li>Enhanced security auditing capabilities</li>
          </ul>
          
          <h2>Getting Started</h2>
          <p>
            To start using SECOM in your projects, explore the following sections:
          </p>
          
          <ul>
            <li><a href="/docs/configuration" className="text-primary hover:underline">Configuration</a> - Set up SECOM in your development environment</li>
            <li><a href="/docs/convention" className="text-primary hover:underline">Convention Overview</a> - Understand the full convention specification</li>
            <li><a href="/docs/reference" className="text-primary hover:underline">Reference Guide</a> - Explore example patterns and templates</li>
            <li><a href="https://security-commits.org/secomlint/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Linter Tool</a> - Check compliance with the convention</li>
          </ul>
          
          <div className="bg-muted p-4 rounded-md mt-8">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <p className="mb-0">
              If you have questions or need assistance with SECOM, please visit our 
              <a href="https://github.com/TQRG/secom" className="text-primary hover:underline ml-1">GitHub repository</a> or 
              <a href="https://forms.gle/D4PizUX68qXWebjj8" className="text-primary hover:underline ml-1">submit feedback</a>.
            </p>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Docs; 