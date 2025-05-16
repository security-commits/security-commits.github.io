import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

const Convention = () => {
  const [copied, setCopied] = useState(false);
  
  const templateCode = `vuln-fix: <header/subject> (<Vuln-ID>)

<body>
# What:    Describe the vulnerability.
# Why:     Explain its impact or risk.
# How:     Describe how it was fixed.
</body>

[For each identified weakness:]
Weakness:   <Weakness Name or CWE-ID>
Severity:   <Low | Medium | High | Critical>
CVSS:       <CVSS Score (0-10)>
Detection:  <Detection Method>
Report:     <Link to Advisory or Report>
Introduced-in: <Commit Hash of Introduced Vuln>
[End Weakness Block]

Reported-by:    <Name> (<Contact>)
Reviewed-by:    <Name> (<Contact>)
Co-authored-by: <Name> (<Contact>)
Signed-off-by:  <Name> (<Contact>)

Bug-tracker: <Bug Tracker URL>
Resolves:    <Issue or PR Number>
See also:    <Related Issue or PR Number>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(templateCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="convention" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">SECOM Convention</h2>
          <p className="text-lg text-muted-foreground">
            SECOM follows a structured format to clearly communicate security-related changes. 
            <br />Here's how to create effective security commit messages.
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
                  <CardTitle>SECOM Message Structure</CardTitle>
                  <CardDescription>
                    The basic format for a security commit message
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <pre className="bg-secondary rounded-md p-4 overflow-x-auto">
                      <code>{templateCode}</code>
                    </pre>
                    <Button 
                      variant="ghost"
                      size="sm" 
                      className="absolute top-2 right-2 h-8 px-2 bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      onClick={copyToClipboard}
                    >
                      {copied ? <FiCheck className="mr-1" /> : <FiCopy className="mr-1" />}
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  
                  <div className="prose prose-sm max-w-none">
                    <p>This structured format ensures that security information is consistently presented and easily parsed by both humans and tools.</p>
                    
                    <h4>Header</h4>
                    <p>The first line includes the change type (vuln-fix), a descriptive header/subject, and an optional vulnerability identifier.</p>
                    
                    <h4>Body</h4>
                    <p>Describes what the vulnerability/problem is, why it matters (impact), and how it was fixed.</p>
                    
                    <h4>Metadata</h4>
                    <p>Structured information including weakness details, severity ratings, CVSS score, detection methods, links to advisory or reports, and commit hash for the commit that introduced the vulnerability.</p>
                    
                    <h4>Contacts</h4>
                    <p>Credits reporters, reviewers, and contributors in the commit message using the appropriate fields.</p>

                    <h4>References</h4>
                    <p>Links to bug trackers, related issues, or additional resources.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="components" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Header Components</CardTitle>
                  <CardDescription>First line of your security commit message</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Type Prefix</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li><strong>vuln-fix:</strong> Identifies security vulnerability fixes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Subject/Header</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>~50 characters (max 72)</li>
                        <li>Capitalized first letter</li>
                        <li>No period at end</li>
                        <li>Imperative mood</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Vulnerability ID</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Include in parentheses</li>
                        <li>Examples: CVE-2023-1234</li>
                        <li>Examples: GHSA-abcd-1234-efgh</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Body Components</CardTitle>
                  <CardDescription>Description of the security change</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">The message body should explain the security change in ~75 words total, structured in three parts:</p>
                    
                    <ul className="list-disc pl-5 space-y-3">
                      <li>
                        <strong className="font-medium">What:</strong> Describe the vulnerability itself. What weakness was identified? What could an attacker exploit?
                      </li>
                      
                      <li>
                        <strong className="font-medium">Why:</strong> Explain the impact or risk. What harm could result if this vulnerability were exploited?
                      </li>
                      
                      <li>
                        <strong className="font-medium">How:</strong> Describe how the issue was fixed. What approach was taken to resolve the vulnerability?
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Metadata Components</CardTitle>
                  <CardDescription>Technical details about the vulnerability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Weakness Information</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li><strong>Weakness:</strong> CWE ID or name (e.g., CWE-79)</li>
                          <li><strong>Severity:</strong> Impact level (Low to Critical)</li>
                          <li><strong>CVSS:</strong> Numerical score from 0-10</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Discovery Details</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li><strong>Detection:</strong> How issue was found</li>
                          <li><strong>Report:</strong> Link to advisory or report</li>
                          <li><strong>Introduced-in:</strong> Origin commit hash</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Common CWE Examples</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                        <div className="text-sm"><strong>CWE-79:</strong> Cross-Site Scripting</div>
                        <div className="text-sm"><strong>CWE-89:</strong> SQL Injection</div>
                        <div className="text-sm"><strong>CWE-200:</strong> Information Exposure</div>
                        <div className="text-sm"><strong>CWE-287:</strong> Improper Authentication</div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        <a href="https://cwe.mitre.org/data/index.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Full CWE database →</a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Severity Levels</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 px-2 font-medium">Level</th>
                              <th className="text-left py-2 px-2 font-medium">CVSS Range</th>
                              <th className="text-left py-2 px-2 font-medium">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 px-2"><strong>Critical</strong></td>
                              <td className="py-2 px-2">9.0-10.0</td>
                              <td className="py-2 px-2">Severe vulnerabilities requiring immediate attention</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-2"><strong>High</strong></td>
                              <td className="py-2 px-2">7.0-8.9</td>
                              <td className="py-2 px-2">Significant security issues that should be prioritized</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-2"><strong>Medium</strong></td>
                              <td className="py-2 px-2">4.0-6.9</td>
                              <td className="py-2 px-2">Moderate risk vulnerabilities</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-2"><strong>Low</strong></td>
                              <td className="py-2 px-2">0.1-3.9</td>
                              <td className="py-2 px-2">Minor security concerns with limited impact</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Attribution Components</CardTitle>
                  <CardDescription>Credits for discoverers and contributors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">Attribution fields provide proper credit to individuals involved in finding and fixing the security issue:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li><strong>Reported-by:</strong> Person who discovered the vulnerability</li>
                      <li><strong>Reviewed-by:</strong> Person who verified the fix</li>
                      <li><strong>Co-authored-by:</strong> Additional contributors to the fix</li>
                      <li><strong>Signed-off-by:</strong> Person taking responsibility for the fix</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Reference Components</CardTitle>
                  <CardDescription>Links to related issues and resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">Reference fields connect the commit to related issues and documentation:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li><strong>Bug-tracker:</strong> Link to issue in external bug tracker</li>
                      <li><strong>Resolves:</strong> Issue or PR number being resolved</li>
                      <li><strong>See also:</strong> Related issues or PRs for context</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="best-practices" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Best Practices</CardTitle>
                  <CardDescription>
                    Guidelines to maximize the effectiveness of your security commit messages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal space-y-4 pl-5">
                      <li>
                        <strong>Make atomic changes</strong>
                        <p>Commit each security patch as a separate change. This improves reviewability and traceability of individual fixes.</p>
                      </li>
                      
                      <li>
                        <strong>Use proper type prefix</strong>
                        <p>Assign a <code>vuln-fix</code> type to each security commit to clearly identify it as addressing a vulnerability.</p>
                      </li>
                      
                      <li>
                        <strong>Craft clear subject lines</strong>
                        <p>Keep subjects to ~50 chars (max 72), capitalize first letter, omit final period, and use imperative form (e.g., "Sanitize URLs" not "URLs are sanitized").</p>
                      </li>
                      
                      <li>
                        <strong>Include vulnerability identifiers</strong>
                        <p>When available, reference standard identifiers (CVE, OSV, GHSA) in the subject line to facilitate tracking.</p>
                      </li>
                      
                      <li>
                        <strong>Structure the message body</strong>
                        <p>Describe what (problem), why (impact), and how (patch) in ~75 words total. This three-part structure helps readers quickly understand the security change.</p>
                      </li>
                      
                      <li>
                        <strong>Focus on essential fields</strong>
                        <p>We believe that <code>&lt;type&gt;</code>, <code>&lt;header/subject&gt;</code>, <code>&lt;body&gt;</code>, <code>Severity</code>, <code>Weakness</code>, and <code>Signed-off-by</code> form the minimum set to effectively track security changes and establish clear authorship.</p>
                      </li>
                      
                      <li>
                        <strong>Consider optional but valuable fields</strong>
                        <p>When applicable, enhance your commit messages with: <code>CVSS</code> score, <code>Detection</code> method, <code>Report</code> link, <code>Introduced-in</code> commit, <code>Reported-by</code>, <code>Reviewed-by</code>, and relevant issue references.</p>
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
