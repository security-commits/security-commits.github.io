import DocsLayout from "@/components/DocsLayout";

const DocsConfiguration = () => {
  return (
    <DocsLayout>
      <div className="space-y-6 pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-primary mb-10 mt-6">Configuration Guide</h1>
        
        <div className="text-lg text-muted-foreground mb-8">
          Set up SECOM in your development environment.
        </div>
        
        <div className="prose prose-slate max-w-none">
          <h2>Configuring SECOM</h2>
          <p>
            Adopting the SECOM convention in your project is straightforward and doesn't require 
            installing any special software. However, to get the most out of SECOM, we recommend
            setting up a few tools to help enforce the convention and streamline your workflow.
          </p>
          
          <h3>1. Set Up a Git Commit Template</h3>
          <p>
            Start by creating a file named <code>secom-template.txt</code> with the following content:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              security(CWE-XXX): Concise summary of the fix{"\n\n"}
              # Detailed description:{"\n"}
              # - What was the vulnerability?{"\n"}
              # - How was it fixed?{"\n"}
              # - What's the impact?{"\n"}
              # - References (issues, CVEs, etc.)
            </code>
          </pre>
          
          <p>
            Then configure Git to use this template by running:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              git config --global commit.template /path/to/secom-template.txt
            </code>
          </pre>
          
          <h3>2. Install SECOMlint</h3>
          <p>
            SECOMlint is a tool that checks your commit messages for compliance with the SECOM convention.
          </p>
          
          <p>
            To install SECOMlint:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              npm install -g @tqrg/secomlint
            </code>
          </pre>
          
          <p>
            Visit the <a href="https://tqrg.github.io/secomlint/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">SECOMlint website</a> for more detailed instructions.
          </p>
          
          <h3>3. Set Up Git Hooks (Recommended)</h3>
          <p>
            To automatically check your commit messages for compliance with SECOM, you can set up a
            Git commit-msg hook:
          </p>
          
          <ol>
            <li>Create a file named <code>commit-msg</code> in your <code>.git/hooks/</code> directory</li>
            <li>Make it executable with <code>chmod +x .git/hooks/commit-msg</code></li>
            <li>Add the following content to the file:</li>
          </ol>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              #!/bin/sh{"\n"}
              # Run SECOMlint on security-related commits{"\n"}
              if grep -q '^security(' "$1"; then{"\n"}
              {"  "}secomlint "$1" || exit 1{"\n"}
              fi{"\n"}
              exit 0
            </code>
          </pre>
          
          <h3>4. Configure Your IDE (Optional)</h3>
          <p>
            For an even smoother experience, consider installing extensions for your IDE:
          </p>
          
          <ul>
            <li>VS Code: Install the "SECOM Linter" extension from the marketplace</li>
            <li>JetBrains IDEs: Install the "SECOM" plugin</li>
          </ul>
          
          <h2>Next Steps</h2>
          <p>
            Now that you have SECOM configured, you can:
          </p>
          
          <ul>
            <li>Read the <a href="/docs/convention" className="text-primary hover:underline">convention overview</a> to understand the format</li>
            <li>Check out the <a href="/docs/reference" className="text-primary hover:underline">reference guide</a> for examples and templates</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default DocsConfiguration; 