import { Button } from "@/components/ui/button";
import { FiExternalLink, FiVideo, FiShield, FiCode } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const Recognition = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const exampleRef = useRef(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!exampleRef.current) return;
      
      const element = exampleRef.current;
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !isExpanded) {
        setIsExpanded(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded]);

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold mb-6">In the Wild 🚀</h2>
          <p className="text-lg text-muted-foreground">
            Growing adoption across security communities and open source
          </p>
        </div>

        {/* Two-column layout for desktop, single column for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left column - Industry Acceptance */}
          <div className="p-6 ">
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 text-primary"><FiCode size={18} /></div>
                <p>
                  <span className="font-medium text-lg">Real-World Implementation</span> <br></br>
                  Used in <a href="https://github.com/JLLeitschuh/security-research/issues/8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">thousands</a> of commit messages to fix vulnerabilities like 
                  <span className="text-primary"><a href="https://nvd.nist.gov/vuln/detail/cve-2021-26291" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> CVE-2021-26291</a></span>.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 text-primary"><FiShield size={18} /></div>
                <p>
                  <span className="font-medium text-lg">OpenSSF Recommended Practice</span> <br></br> 
                  
                  <span className="text-primary"><a href="https://docs.google.com/document/d/1_QwN7yQXWGM2tJaostIRNqyZIhVceVlIyXqCrSdC4E8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> OpenSSF Compliant Automated Vulnerability Fix Campaign</a></span> 
               
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 text-primary"><FiVideo size={18} /></div>
                <p>
                  <span className="font-medium text-lg">Mentioned at Security and Dev Conferences </span> <br></br>
                   <span className="text-primary"><a href="https://www.youtube.com/watch?si=SAUPNy62wNaYlp1X&t=1982&v=zTtbVxGEq8A&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BlackHat'22</a></span> and <span className="text-primary"><a href="https://www.youtube.com/watch?si=Ht5f4FJKWSRcsmfC&t=1509&v=zj-25JfGkYY&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Universe'22</a></span>
                </p>
              </li>
            </ul>
            
            <div className="mt-12 flex">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white hover:text-white shadow-md border border-primary/20 flex items-center gap-3 px-6 py-3 rounded-md transition-all duration-200" 
                asChild
              >
                <a href="/convention" className="relative overflow-hidden group">
                  <span className="inline-flex items-center">
                    <span className="mr-2 text-white group-hover:text-white">Explore SECOM</span>
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-200">
                      <FiExternalLink size={14} className="text-white group-hover:text-white" />
                    </span>
                  </span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right column - Real example */}
          <div className="rounded-lg p-6">
            {/* Commit flow visualization */}
            <div className="mb-6">              
                <div className="flex flex-col md:flex-row justify-start mb-8">
                  {/* On mobile: horizontal commit flow, On desktop: vertical commit flow */}
                  <div className="hidden md:flex flex-col items-center mr-8">
                    {/* Fading line at the top suggesting more commits above */}
                    <div className="h-6 w-0.5 bg-gradient-to-t from-blue-300 to-transparent"></div>
                    
                    {/* Commit circles and connecting lines - vertical orientation - only 4 circles */}
                    <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                    <div className="h-8 w-0.5 bg-blue-300"></div>
                    <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                    <div className="h-8 w-0.5 bg-blue-300"></div>
                    {/* Highlighted commit - the one that's selected */}
                    <div className="h-6 w-6 rounded-full bg-white border-2 border-blue-400 shadow-md relative flex items-center justify-center">
                      {/* Inner yellow circle */}
                      <div className="h-3.5 w-3.5 rounded-full bg-yellow-400"></div>
                    </div>
                    <div className="h-8 w-0.5 bg-blue-300"></div>
                    <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                    
                    {/* Fading line at the bottom suggesting more commits below */}
                    <div className="h-6 w-0.5 bg-gradient-to-b from-blue-300 to-transparent"></div>
                  </div>
                  
                  {/* Mobile view: Horizontal commit flow */}
                  <div className="flex md:hidden items-center justify-center w-full mb-6">
                    {/* Fading line on the left */}
                    <div className="w-6 h-0.5 bg-gradient-to-l from-blue-300 to-transparent"></div>
                    
                    <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                    
                    {/* Highlighted commit */}
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-400 shadow-md flex items-center justify-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-400"></div>
                    </div>
                    
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                    
                    {/* Fading line on the right */}
                    <div className="w-6 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                  </div>
                  
                  {/* Example box - positioned with the highlighted commit */}
                  <div 
                    ref={exampleRef}
                    className="flex-1 md:self-start md:mt-[95px] w-full transition-all duration-700 ease-in-out"
                    style={{ 
                      transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
                      opacity: isExpanded ? 1 : 0.6,
                    }}
                  >
                    <div 
                      className={`bg-white rounded-lg overflow-hidden shadow-sm border-2 border-blue-400 w-full max-w-full transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[500px]' : 'max-h-[60px] cursor-pointer'}`}
                      onClick={() => !isExpanded && setIsExpanded(true)}
                    >
                      <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 border-b border-blue-400 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex space-x-1">
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500"></div>
                          </div>
                         
                        </div>
                        {!isExpanded && (
                          <div className="text-[10px] text-blue-500 pr-2">Click to expand</div>
                        )}
                      </div>
                      <div className={`transition-all duration-700 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0 overflow-hidden'}`}>
                        <div className="p-2 sm:p-3 bg-white border-b border-blue-400">
                          <div className="flex items-center gap-1 sm:gap-2 mb-1">
                            <span className="text-slate-800 font-semibold text-[10px] sm:text-xs">Commit <a href="https://github.com/apache/chainsaw/pull/1/commits/20e7fda145a6d1c72570716f8a1e85bb9041ef65" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">20e7fda</a></span>
                          </div>
                          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-2 text-[10px] text-slate-600">
                            <div className="flex items-center gap-0.5">
                              <span className="font-medium"><a href="https://github.com/JLLeitschuh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JLLeitschuh</a></span> and 
                            </div><span className="font-medium"><a href="https://github.com/TeamModerne" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">TeamModerne</a></span>
                            <span>committed on Jul 8, 2022</span>
                            <span className="px-1 sm:px-1.5 py-0.5 text-[10px] bg-blue-100 text-blue-700 rounded-full">Verified</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-white text-[10px] sm:text-xs">
                          <div className="prose prose-sm max-w-full text-slate-800 break-words">
                            <ReactMarkdown 
                              components={{
                                h1: ({node, ...props}) => <h1 className="text-xs sm:text-sm font-bold mb-2" {...props} />,
                                h2: ({node, ...props}) => <h2 className="text-[10px] sm:text-xs font-semibold mt-3 mb-1" {...props} />,
                                a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                                p: ({node, ...props}) => <p className="mb-2 leading-normal" {...props} />,
                                ul: ({node, ...props}) => <ul className="pl-4 mb-2" {...props} />,
                                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                                code: ({node, ...props}) => <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-[9px] sm:text-[10px]" {...props} />
                              }}
                            >{`# vuln-fix: Use HTTPS instead of HTTP to resolve deps CVE-2021-26291
This fixes a security vulnerability in this project where the \`pom.xml\`
files were configuring Maven to resolve dependencies over HTTP instead of
HTTPS.

**Weakness:** CWE-829: Inclusion of Functionality from Untrusted Control Sphere \\
**Severity:** High \\
**CVSS:** 8.1 \\
**Detection:** CodeQL & OpenRewrite

**Reported-by:** Jonathan Leitschuh \\<Jonathan.Leitschuh@gmail.com\\> \\
**Signed-off-by:** Jonathan Leitschuh \\<Jonathan.Leitschuh@gmail.com\\> 


**Bug-tracker:** [JLLeitschuh/security-research#8](https://github.com/JLLeitschuh/security-research/issues/8) 


**Co-authored-by:** Moderne \\<team@moderne.io\\>
`}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition; 