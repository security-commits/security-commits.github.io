
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const examples = [
  {
    id: "xss-fix",
    title: "XSS Vulnerability Fix",
    code: `fix: prevent XSS in user profile display (VULN-2023-42)

# (what) User-provided profile data is not sanitized, allowing script injection
# (why) Malicious scripts in profile data could be executed in other users' browsers
# (how) Added input sanitization and implemented Content Security Policy headers

Weakness: Cross-Site Scripting (CWE-79)
Severity: High
CVSS: 7.5
Detection: Code Review
Report: https://example.com/security/report/42
Introduced in: a1b2c3d4

Reported-by: Alice Security <alice@security.example>
Reviewed-by: Bob Developer <bob@dev.example>

Resolves: #157
See also: #142, #158`,
    explanation: "This commit message clearly identifies an XSS vulnerability, its impact, and remediation steps. It includes severity information and proper attribution."
  },
  {
    id: "auth-improvement",
    title: "Authentication Brute Force Protection",
    code: `feat: implement rate limiting for login attempts (SEC-2023-07)

# (what) Login endpoint allows unlimited authentication attempts
# (why) Enables brute force attacks against user passwords
# (how) Added IP-based rate limiting (5 attempts) with temporary lockout

Weakness: Improper Authentication (CWE-307)
Severity: Medium
CVSS: 5.3
Detection: Penetration Testing
Report: https://security.example.com/findings/304
Introduced in: e5f6a7b8

Reported-by: Charlie Security <charlie@pentester.example>
Reviewed-by: Diana Admin <diana@admin.example>
Co-authored-by: Evan Engineer <evan@dev.example>

Bug-tracker: https://issues.example.com/SEC-2023-07
See also: #283`,
    explanation: "This example shows how to document a new security feature that addresses a brute force vulnerability. It clearly describes the problem, impact, and solution."
  },
  {
    id: "dependency-update",
    title: "Log4Shell Vulnerability Fix",
    code: `fix: update log4j to mitigate RCE vulnerability (CVE-2021-44228)

# (what) Log4j 2.14.0 has a remote code execution vulnerability
# (why) Attackers can execute arbitrary code via JNDI lookups
# (how) Upgraded log4j from 2.14.0 to 2.15.0 and verified functionality

Weakness: Deserialization of Untrusted Data (CWE-502)
Severity: Critical
CVSS: 10.0
Detection: Vendor Advisory
Report: https://logging.apache.org/log4j/2.x/security.html
Introduced in: 3c4d5e6f

Reported-by: Apache Log4j Team
Reviewed-by: Frank Security <frank@security.example>
Signed-off-by: Grace DevOps <grace@devops.example>

Resolves: #501`,
    explanation: "This commit shows how to document a security-related dependency update. It specifies the vulnerability being addressed (CVE-2021-44228), the CVSS score, and includes a link to the official security advisory."
  },
  {
    id: "security-hardening",
    title: "CSRF Protection Implementation",
    code: `refactor: implement CSRF protection for POST endpoints (SEC-2023-09)

# (what) API lacks Cross-Site Request Forgery protection
# (why) Attackers could forge authenticated requests from users
# (how) Added CSRF token validation middleware for all state-changing operations

Weakness: Cross-Site Request Forgery (CWE-352)
Severity: Medium
CVSS: 6.5
Detection: Security Audit
Report: https://audit.example.com/report/2023-q2
Introduced in: 1a2b3c4d

Reported-by: Security Team <security@example.com>
Reviewed-by: Harry Engineer <harry@dev.example>
Co-authored-by: Ivy Developer <ivy@dev.example>

Bug-tracker: https://issues.example.com/SEC-2023-09
Resolves: #412`,
    explanation: "This example demonstrates how to document security hardening changes that don't fix a specific vulnerability but improve overall security posture. It follows the what/why/how structure and provides complete metadata."
  }
];

const Examples = () => {
  const [selectedExample, setSelectedExample] = useState(examples[0].id);
  
  const currentExample = examples.find(ex => ex.id === selectedExample) || examples[0];
  
  return (
    <section id="examples" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Example SECOM Messages</h2>
          <p className="text-lg text-muted-foreground">
            See how SECOM can be applied to different security scenarios with these practical examples.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={examples[0].id} value={selectedExample} onValueChange={setSelectedExample}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {examples.map(ex => (
                <TabsTrigger key={ex.id} value={ex.id}>{ex.title}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={currentExample.id} className="mt-6">
              <Card className="p-0 overflow-hidden">
                <div className="p-3 bg-secondary/50 border-b">
                  <h3 className="font-medium">{currentExample.title}</h3>
                </div>
                <SyntaxHighlighter 
                  language="markdown"
                  style={coldarkDark}
                  customStyle={{ margin: 0, borderRadius: 0 }}
                  className="text-sm"
                >
                  {currentExample.code}
                </SyntaxHighlighter>
                <div className="p-4 bg-secondary/30 text-sm">
                  <p className="text-muted-foreground">{currentExample.explanation}</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Examples;
