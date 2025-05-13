
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reference = () => {
  return (
    <section id="reference" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Reference Guide</h2>
          <p className="text-lg text-muted-foreground">
            Quick reference to help you create effective SeCom messages.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>SeCom Message Template</CardTitle>
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
          
          <div className="mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default Reference;
