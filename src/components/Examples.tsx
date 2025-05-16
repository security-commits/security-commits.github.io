
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const examples = [
  {
    id: "",
    title: "BEFORE SECOM",
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
    explanation: "Covers the What/Why/How succinctly but lacks SECOM framing: no vuln-fix: header, 75-word tri-section, weakness metadata, or attribution/footer fields. To be fully SECOM-compliant it needs the standardized header, per-weakness block, CVSS/severity, and formal “Reported-by/Reviewed-by/Signed-off-by” lines."
},
  {
    id: "auth-improvement",
    title: "AFTER SECOM",
    code: `vuln-fix: Sanitize URLs to reject malicious data (CVE-2012-0036)

libcurl IMAP/POP3/SMTP parsers accepted URL-path bytes that decode 
to ASCII control characters, enabling attackers to smuggle extra 
protocol commands—e.g. pop3://host/1%0D%0ADELE%201—and perform 
unintended mail operations. Any application that forwards 
untrusted URLs could thus silently delete or alter messages. 
The fix routes path decoding through Curl_urldecode(), which 
aborts when a decoded byte < 0x20 and returns CURLE_URL_MALFORMAT, 
preventing the crafted request from ever reaching the server.

Weakness: CWE-89
Severity: High
Detection: Manual
Report: https://curl.se/docs/CVE-2012-0036.html

Reported-by: Dan Fandrich
Signed-off-by: Daniel Stenberg (daniel@haxx.se)

Resolves: #17940
See also: #17937`,
    explanation: "SECOM-compliant commit message. Uses the vuln-fix: header, concise What/Why/How body, and a weakness block with CWE, severity and report link."
}
];

const Examples = () => {
  const [selectedExample, setSelectedExample] = useState(examples[0].id);
  
  const currentExample = examples.find(ex => ex.id === selectedExample) || examples[0];
  
  return (
    <section id="examples" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Example</h2>
          <p className="text-lg text-muted-foreground">
            See how SECOM can improve an existing security commit message.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={examples[0].id} value={selectedExample} onValueChange={setSelectedExample}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-2">
              {examples.map(ex => (
                <TabsTrigger key={ex.id} value={ex.id}>{ex.title}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={currentExample.id} className="mt-6">
              <Card className="p-0 overflow-hidden">
                {/* <div className="p-3 bg-secondary/50 border-b">
                  <h3 className="font-medium">{currentExample.title}</h3>
                </div> */}
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
