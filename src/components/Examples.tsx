
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const examples = [
  {
    id: "",
    title: "CVE-2012-0036 (before SECOM)",
    code: `URL sanitize: reject URLs containing bad data
Protocols (IMAP, POP3 and SMTP) that use the path part of a URL in a
decoded manner now use the new Curl_urldecode() function to reject URLs
with embedded control codes (anything that is or decodes to a byte value
less than 32).

URLs containing such codes could easily otherwise be used to do harm and
allow users to do unintended actions with otherwise innocent tools and
applications. Like for example using a URL like
pop3://pop3.example.com/1%0d%0aDELE%201 when the app wants a URL to get
a mail and instead this would delete one.

This flaw is considered a security vulnerability: CVE-2012-0036

Security advisory at: http://curl.haxx.se/docs/adv_20120124.html

Reported by: Dan Fandrich`,
    explanation: "This commit message shows the documentation uses Curl_urldecode() to reject control‐code–embedded URLs in IMAP/POP3/SMTP, preventing command injection (CVE-2012-0036), links the advisory, and credits the reporter."
  },
  {
    id: "auth-improvement",
    title: "CVE-2012-0036 (after SECOM)",
    code: `vuln-fix: Sanitize URLs to reject malicious data (CVE-2012-0036)

Protocols (IMAP, POP3 and SMTP) that use the path part of a URL in a
decoded manner now use the new Curl_urldecode() function to reject URLs
with embedded control codes (anything that is or decodes to a byte value
less than 32).
URLs containing such codes could easily otherwise be used to do harm and
allow users to do unintended actions with otherwise innocent tools and
applications.
Like for example using a URL like pop3://pop3.example.com/1%0d%0aDELE%201 
when the app wants a URL to get a mail and instead this would delete one.

Weakness: CWE-89
Severity: High
Detection: Manual
Report: https://curl.se/docs/CVE-2012-0036.html

Reported-by: Dan Fandrich
Signed-off-by: Daniel Stenberg (daniel@haxx.se)

Resolves: #17940
See also: #17937`,
    explanation: "This example shows how to document a new security feature that addresses a brute force vulnerability. It clearly describes the problem, impact, and solution."
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
