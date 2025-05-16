import DocsLayout from "@/components/DocsLayout";

const DocsConvention = () => {
  return (
    <DocsLayout>
      <div className="space-y-6 pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-primary mb-10 mt-6">Convention</h1>
        
        <div className="text-lg text-muted-foreground mb-8">
          The complete specification for the Security Commit Message Convention.
        </div>
        
        <div className="prose prose-slate max-w-none">
          <h2>Convention Overview</h2>
          <p>
            The SECOM (Security Commit Message) convention defines a structured format for writing commit messages
            that address security issues. This standardization ensures consistent communication about security changes
            across development teams.
          </p>
          
          <h3>Basic Structure</h3>
          <p>
            A SECOM-compliant commit message follows this general structure:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>security(CWE-XXX): Brief description of the security fix</code>
          </pre>
          
          <p>The components of this structure are:</p>
          
          <ul>
            <li><strong>security</strong>: The keyword that identifies this as a security-related commit</li>
            <li><strong>CWE-XXX</strong>: The Common Weakness Enumeration identifier for the specific vulnerability type</li>
            <li><strong>Brief description</strong>: A clear, concise explanation of what security issue was fixed</li>
          </ul>
          
          <h3>Extended Format</h3>
          <p>
            For more complex security changes, SECOM supports an extended format that includes additional details:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              security(CWE-XXX): Brief description of the security fix{"\n\n"}
              - Detailed explanation of the vulnerability{"\n"}
              - Impact assessment{"\n"}
              - Testing methodology{"\n"}
              - References to related issues or CVEs
            </code>
          </pre>
          
          <h2>Security Keyword</h2>
          <p>
            The <code>security</code> keyword is the primary identifier for SECOM commit messages. It signals to
            developers, reviewers, and security teams that this commit addresses a security concern.
          </p>
          
          <div className="bg-muted p-4 rounded-md my-6">
            <h4 className="font-semibold">Important:</h4>
            <p className="mb-0">
              The <code>security</code> keyword should only be used for commits that specifically address
              security vulnerabilities or implement security enhancements. Using it for non-security
              related changes dilutes its effectiveness.
            </p>
          </div>
          
          <h2>CWE Integration</h2>
          <p>
            Common Weakness Enumeration (CWE) is a community-developed list of common software and hardware
            weakness types. SECOM incorporates CWE identifiers to provide precise categorization of the
            security issues being addressed.
          </p>
          
          <p>
            The CWE identifier should be included in parentheses after the security keyword:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>security(CWE-79): Fix XSS vulnerability in user profile page</code>
          </pre>
          
          <p>
            For a full list of CWE identifiers, visit the <a href="https://cwe.mitre.org/data/index.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">official CWE website</a>.
          </p>
          
          <h2>Description Guidelines</h2>
          <p>
            The description portion of a SECOM commit message should:
          </p>
          
          <ul>
            <li>Be clear and concise</li>
            <li>Indicate what was fixed (not how it was fixed)</li>
            <li>Avoid revealing exploitable details that could aid attackers</li>
            <li>Use present tense ("Fix" not "Fixed")</li>
            <li>Not exceed 50-72 characters for the first line</li>
          </ul>
          
          <h3>Examples</h3>
          
          <div className="space-y-4 my-6">
            <div>
              <p className="font-medium">Good:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>security(CWE-89): Fix SQL injection in search function</code>
              </pre>
            </div>
            
            <div>
              <p className="font-medium">Better:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>
                  security(CWE-89): Fix SQL injection in search function{"\n\n"}
                  User input in the search query was not properly sanitized,{"\n"}
                  allowing attackers to inject malicious SQL commands.{"\n"}
                  Added prepared statements to prevent this attack vector.
                </code>
              </pre>
            </div>
          </div>
          
          <h2>Implementation Resources</h2>
          <p>
            To help implement SECOM in your projects, we provide:
          </p>
          
          <ul>
            <li><a href="https://tqrg.github.io/secomlint/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">SECOMlint</a> - A linter for checking compliance with the convention</li>
            <li><a href="/docs/reference/examples" className="text-primary hover:underline">Example library</a> - Collection of real-world SECOM commit messages</li>
            <li><a href="/docs/reference/best-practices" className="text-primary hover:underline">Best practices</a> - Guidance for effective implementation</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default DocsConvention; 