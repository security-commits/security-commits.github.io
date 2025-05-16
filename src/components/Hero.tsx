import { Button } from '@/components/ui/button';
import { FiArrowDown, FiGithub, FiRefreshCw } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
  const [showAfterExample, setShowAfterExample] = useState(true);
  
  const beforeExample = `URL sanitize: reject URLs containing bad data

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

Reported by: Dan Fandrich`;

  const beforeExplanation = "Covers the What/Why/How succinctly but lacks SECOM framing: no vuln-fix: header, 75-word tri-section, weakness metadata, or attribution/footer fields. To be fully SECOM-compliant it needs the standardized header, per-weakness block, CVSS/severity, and formal \"Reported-by/Reviewed-by/Signed-off-by\" lines.";

  const afterExample = `vuln-fix: Sanitize URLs to reject malicious data (CVE-2012-0036)

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
See also: #17937`;

  const afterExplanation = "SECOM-compliant commit message. Uses the vuln-fix: header, concise What/Why/How body, and a weakness block with CWE, severity and report link.";

  const toggleExample = () => {
    setShowAfterExample(!showAfterExample);
  };

  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="text-primary">SECOM</span><br />
                <span className="text-4xl">Security Commit Message Convention</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                <strong>A standardized way to document security changes in your commit messages</strong>
                <br></br>
                Improve security tracking, facilitate audits, and enhance collaboration
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="flex items-center gap-2" asChild>
                  <Link to="/convention" className="text-white hover:text-blue-100">
                    Get Started
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <a href="https://github.com/security-commits/" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={16} />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Code example */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-gray-900 shadow-md">
            <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-200 text-sm">
                  {showAfterExample ? "SECOM-Compliant" : "Original"} Security Commit Example 
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-200 hover:text-white hover:bg-gray-700"
                onClick={toggleExample}
              >
                <FiRefreshCw className="mr-1" size={14} />
                Show {showAfterExample ? "Original" : "SECOM"}
              </Button>
            </div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto bg-gray-900">
              <code>
                {showAfterExample ? afterExample : beforeExample}
              </code>
            </pre>
            <div className="p-4 text-sm bg-gray-800 border-t border-gray-700 text-white">
              🍵 {showAfterExample ? afterExplanation : beforeExplanation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
