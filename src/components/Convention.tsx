
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Convention = () => {
  return (
    <section id="convention" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">The SECOM Convention</h2>
          <p className="text-lg text-muted-foreground">
            SECOM follows a structured format to clearly communicate security-related changes. 
            Here's how to create effective security commit messages.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="structure">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
            </TabsList>
            
            <TabsContent value="structure" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>SeCom Message Structure</CardTitle>
                  <CardDescription>
                    The basic format for a security commit message using SeCom
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                  
                  <div className="prose prose-sm max-w-none">
                    <p>This structured format ensures that security information is consistently presented and easily parsed by both humans and tools.</p>
                    
                    <h4>Header</h4>
                    <p>The first line includes the change type, a descriptive header/subject, and an optional vulnerability identifier.</p>
                    
                    <h4>Body</h4>
                    <p>Describes what the vulnerability/problem is, why it matters (impact), and how it was fixed.</p>
                    
                    <h4>Metadata</h4>
                    <p>Structured information including weakness details, severity ratings, detection methods, and attribution.</p>
                    
                    <h4>References</h4>
                    <p>Links to bug trackers, related issues, or additional resources.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="components" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Types</CardTitle>
                  <CardDescription>Common commit types for security changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>fix:</strong> Security vulnerability fixes</li>
                    <li><strong>feat:</strong> New security features</li>
                    <li><strong>chore:</strong> Regular security maintenance tasks</li>
                    <li><strong>test:</strong> Adding or improving security tests</li>
                    <li><strong>docs:</strong> Security documentation updates</li>
                    <li><strong>refactor:</strong> Code changes that improve security without changing functionality</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Severity Levels</CardTitle>
                  <CardDescription>Standard severity classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Critical:</strong> Severe vulnerabilities that require immediate attention (CVSS: 9.0-10.0)</li>
                    <li><strong>High:</strong> Significant security issues that should be prioritized (CVSS: 7.0-8.9)</li>
                    <li><strong>Medium:</strong> Moderate risk vulnerabilities (CVSS: 4.0-6.9)</li>
                    <li><strong>Low:</strong> Minor security concerns with limited impact (CVSS: 0.1-3.9)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Weakness References</CardTitle>
                  <CardDescription>Common weakness enumeration identifiers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>CWE-79:</strong> Cross-Site Scripting (XSS)</li>
                    <li><strong>CWE-89:</strong> SQL Injection</li>
                    <li><strong>CWE-200:</strong> Information Exposure</li>
                    <li><strong>CWE-287:</strong> Improper Authentication</li>
                    <li><strong>CWE-798:</strong> Hard-coded Credentials</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    For a complete list, refer to <a href="https://cwe.mitre.org/data/index.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">MITRE's CWE database</a>.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="best-practices" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Best Practices for SeCom Messages</CardTitle>
                  <CardDescription>
                    Guidelines to maximize the effectiveness of your security commit messages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal space-y-4 pl-5">
                      <li>
                        <strong>Be specific about what, why and how</strong>
                        <p>Clearly explain the vulnerability, its impact, and how you fixed it. This three-part structure helps readers quickly understand the security change.</p>
                      </li>
                      
                      <li>
                        <strong>Include appropriate severity ratings</strong>
                        <p>Always classify the severity of the vulnerability (Low, Medium, High, Critical) and include a CVSS score when available.</p>
                      </li>
                      
                      <li>
                        <strong>Reference weakness identifiers</strong>
                        <p>When applicable, reference the Common Weakness Enumeration ID (CWE) or name to standardize vulnerability identification.</p>
                      </li>
                      
                      <li>
                        <strong>Document detection methods</strong>
                        <p>Include information about how the vulnerability was discovered (e.g., code review, static analysis, penetration testing).</p>
                      </li>
                      
                      <li>
                        <strong>Provide proper attribution</strong>
                        <p>Always credit reporters, reviewers, and contributors in the commit message using the appropriate fields.</p>
                      </li>
                      
                      <li>
                        <strong>Keep sensitive information private</strong>
                        <p>Don't include API keys, passwords, or other sensitive data in commit messages, even if they're being rotated or removed.</p>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Convention;
