import DocsLayout from "@/components/DocsLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocsReference = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary mb-6">Reference Guide</h1>
        
        <div className="text-lg text-muted-foreground mb-8">
          A comprehensive reference for implementing and using the SECOM convention.
        </div>
        
        <div className="prose prose-slate max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>SECOM Message Template</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary rounded-md p-4 overflow-x-auto">
                <code>{`<type>: <header/subject> (<Vuln-ID>)

<body>
# (what) describe the vulnerability/problem
# (why) describe its impact
# (how) describe the patch/fix

Weakness: <Weakness Name or CWE-ID>
Severity: <Low, Medium, High or Critical>
CVSS: <Numerical representation (0-10) of severity>
Detection: <Detection Method>
Report: <Report Link>
Introduced in: <Commit Hash>

Reported-by: <Name> (<Contact>)
Reviewed-by: <Name> (<Contact>)
Co-authored-by: <Name> (<Contact>)
Signed-off-by: <Name> (<Contact>)

Bug-tracker: <Bug-tracker Link>
OR
Resolves: <Issue/PR No.>
See also: <Issue/PR No.>`}</code>
              </pre>
            </CardContent>
          </Card>
          
          <div className="mt-8 mb-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="type">
                <AccordionTrigger>Types</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Primary Types:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li><strong>fix:</strong> Security vulnerability fixes</li>
                        <li><strong>feat:</strong> New security features or controls</li>
                        <li><strong>chore:</strong> Security maintenance tasks</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Other Types:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li><strong>test:</strong> Security testing changes</li>
                        <li><strong>docs:</strong> Security documentation</li>
                        <li><strong>refactor:</strong> Security-improving code changes</li>
                        <li><strong>style:</strong> Code style with security impact</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="severity">
                <AccordionTrigger>Severity Levels & CVSS</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="mb-3">Standard severity ratings with corresponding CVSS ranges:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Critical:</strong> CVSS 9.0-10.0 - Severe vulnerabilities requiring immediate attention</li>
                      <li><strong>High:</strong> CVSS 7.0-8.9 - Significant security issues that should be prioritized</li>
                      <li><strong>Medium:</strong> CVSS 4.0-6.9 - Moderate risk vulnerabilities</li>
                      <li><strong>Low:</strong> CVSS 0.1-3.9 - Minor security concerns with limited impact</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Learn more about <a href="https://www.first.org/cvss/calculator/3.1" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CVSS scoring</a>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cwe">
                <AccordionTrigger>Common CWE References</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">Common Weakness Enumeration (CWE) identifiers for frequently encountered security issues:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>CWE-20:</strong> Improper Input Validation</li>
                    <li><strong>CWE-22:</strong> Path Traversal</li>
                    <li><strong>CWE-79:</strong> Cross-Site Scripting (XSS)</li>
                    <li><strong>CWE-89:</strong> SQL Injection</li>
                    <li><strong>CWE-200:</strong> Information Exposure</li>
                    <li><strong>CWE-256:</strong> Plaintext Storage of Password</li>
                    <li><strong>CWE-287:</strong> Improper Authentication</li>
                    <li><strong>CWE-307:</strong> Improper Restriction of Excessive Authentication Attempts</li>
                    <li><strong>CWE-352:</strong> Cross-Site Request Forgery (CSRF)</li>
                    <li><strong>CWE-434:</strong> Unrestricted Upload of File</li>
                    <li><strong>CWE-502:</strong> Deserialization of Untrusted Data</li>
                    <li><strong>CWE-601:</strong> URL Redirection to Untrusted Site</li>
                    <li><strong>CWE-798:</strong> Hard-coded Credentials</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Find more at <a href="https://cwe.mitre.org/data/index.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">MITRE's CWE List</a>
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="detection">
                <AccordionTrigger>Detection Methods</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">Common ways vulnerabilities are discovered:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Code Review:</strong> Manual inspection of source code</li>
                    <li><strong>Static Analysis:</strong> Automated tools examining code without execution</li>
                    <li><strong>Dynamic Analysis:</strong> Testing during program execution</li>
                    <li><strong>Penetration Testing:</strong> Simulated attacks on systems</li>
                    <li><strong>Bug Bounty:</strong> Reports from security researchers</li>
                    <li><strong>Fuzzing:</strong> Automated testing with random inputs</li>
                    <li><strong>Vendor Advisory:</strong> Notifications from software providers</li>
                    <li><strong>Security Audit:</strong> Formal security assessments</li>
                    <li><strong>Incident Response:</strong> Discovered during breach investigation</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tools">
                <AccordionTrigger>Integration Tools</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">Tools to help integrate SeCom into your workflow:</p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Git Hooks:</strong> Implement pre-commit hooks to validate SeCom format for security-related commits
                    </li>
                    <li>
                      <strong>Commit Templates:</strong> Create team-specific commit templates that follow the SeCom convention
                    </li>
                    <li>
                      <strong>Security Reporting:</strong> Use git log parsing to generate security reports from SeCom-formatted messages
                    </li>
                    <li>
                      <strong>CI/CD Integration:</strong> Validate SeCom messages in continuous integration pipelines
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <h2>Common CWE Categories</h2>
          <p>
            Below is a list of commonly referenced CWE identifiers that you might use in your SECOM commit messages.
            This is not exhaustive but covers many common security issues in software development.
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 text-left">CWE ID</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-20</td>
                  <td className="p-2">Improper Input Validation</td>
                  <td className="p-2">The product does not validate or incorrectly validates input that can affect the control flow or data flow of a program.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-22</td>
                  <td className="p-2">Path Traversal</td>
                  <td className="p-2">The software uses external input to construct a pathname that is intended to identify a file or directory located underneath a restricted parent directory, but the software does not properly neutralize special elements.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-78</td>
                  <td className="p-2">OS Command Injection</td>
                  <td className="p-2">The software constructs all or part of an OS command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended OS command.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-79</td>
                  <td className="p-2">Cross-site Scripting (XSS)</td>
                  <td className="p-2">The software does not neutralize or incorrectly neutralizes user-controllable input before it is placed in output that is used as a web page that is served to other users.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-89</td>
                  <td className="p-2">SQL Injection</td>
                  <td className="p-2">The software constructs all or part of an SQL command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended SQL command.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-200</td>
                  <td className="p-2">Information Exposure</td>
                  <td className="p-2">The product exposes sensitive information to an actor that is not explicitly authorized to have access to that information.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-287</td>
                  <td className="p-2">Improper Authentication</td>
                  <td className="p-2">When an actor claims to have a given identity, the software does not prove or insufficiently proves that the claim is correct.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">CWE-327</td>
                  <td className="p-2">Broken Cryptography</td>
                  <td className="p-2">The use of a broken or risky cryptographic algorithm or protocol.</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono">CWE-352</td>
                  <td className="p-2">Cross-Site Request Forgery</td>
                  <td className="p-2">The web application does not, or can not, sufficiently verify whether a well-formed, valid, consistent request was intentionally provided by the user who submitted the request.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>
            For a complete reference, visit the <a href="https://cwe.mitre.org/data/index.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">official CWE website</a>.
          </p>
          
          <h2>Commit Message Templates</h2>
          <p>
            Below are templates for common security-related commit messages following the SECOM convention.
          </p>
          
          <h3>Basic Template</h3>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              security(CWE-XXX): Fix [vulnerability type] in [component]
            </code>
          </pre>
          
          <h3>Detailed Template</h3>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              security(CWE-XXX): Fix [vulnerability type] in [component]{"\n\n"}
              [Description of the vulnerability]{"\n\n"}
              - Root cause: [brief explanation]{"\n"}
              - Impact: [potential consequences]{"\n"}
              - Fix: [high-level description of the solution]
            </code>
          </pre>
          
          <h2>Integration with Version Control</h2>
          <p>
            You can configure your Git environment to support SECOM convention:
          </p>
          
          <h3>Git Commit Template</h3>
          <p>
            Create a file <code>secom-template.txt</code> with content:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              security(CWE-XXX): Concise summary of the fix{"\n\n"}
              # Detailed description:{"\n"}
              # - What was the vulnerability?{"\n"}
              # - How was it fixed?{"\n"}
              # - What's the potential impact?{"\n"}
              # - References (issues, CVEs, etc.)
            </code>
          </pre>
          
          <p>
            Configure Git to use this template:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              git config --global commit.template /path/to/secom-template.txt
            </code>
          </pre>
          
          <h3>Git Hooks</h3>
          <p>
            You can use a pre-commit hook to validate that security commits follow the SECOM convention.
            This can be integrated with tools like <a href="https://tqrg.github.io/secomlint/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">SECOMlint</a>.
          </p>
          
          <h2>Real-World Examples</h2>
          <p>
            These examples from real-world projects demonstrate effective use of the SECOM convention:
          </p>
          
          <div className="space-y-4 my-6">
            <div className="border rounded-md p-4">
              <pre className="mb-2">
                <code>security(CWE-79): Fix XSS vulnerability in user profile rendering</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                This commit addresses a cross-site scripting vulnerability by properly escaping user input in the profile page.
              </p>
            </div>
            
            <div className="border rounded-md p-4">
              <pre className="mb-2">
                <code>
                  security(CWE-522): Implement secure password storage with bcrypt{"\n\n"}
                  - Replaced plaintext password storage with bcrypt hashing{"\n"}
                  - Added salt generation and configurable work factor{"\n"}
                  - Updated login flow to verify against hashed passwords{"\n"}
                  - Added migration for existing user accounts
                </code>
              </pre>
              <p className="text-sm text-muted-foreground">
                This detailed commit message explains the implementation of secure password storage, addressing CWE-522 (Insufficiently Protected Credentials).
              </p>
            </div>
            
            <div className="border rounded-md p-4">
              <pre className="mb-2">
                <code>security(CWE-352): Add CSRF protection to all form submissions</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                This commit adds Cross-Site Request Forgery protection to prevent unauthorized form submissions.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <p>
              For more information about the SECOM convention, see the <a href="/docs/convention" className="text-primary hover:underline">Convention Overview</a> page.
            </p>
            <p>
              To check your commit messages for compliance with the SECOM convention, try our <a href="https://tqrg.github.io/secomlint/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">SECOMlint</a> tool.
            </p>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default DocsReference; 