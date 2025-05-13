
import { Button } from '@/components/ui/button';
import { FiArrowDown, FiGithub } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="text-primary">SECOM</span>: Security Commit Message Convention
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                <strong>A standardized way to document security changes in your commit messages</strong>
                <br></br>
                Improve security tracking, facilitate audits, and enhance collaboration.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="flex items-center gap-2" asChild>
                  <a href="#convention">
                    Get Started
                    <FiArrowDown className="ml-1" size={16} />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <a href="https://github.com/TQRG/secom" target="_blank" rel="noopener noreferrer">
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
            <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 flex items-center">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-gray-200 text-sm">Example Commit Message</div>
            </div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto bg-gray-900">
              <code>
{`fix(auth): [CWE-798] update hard-coded admin credentials

- Replace hard-coded admin credentials with environment variables
- Add documentation for setting up proper authentication

Security: Eliminates hard-coded credentials that could lead to 
unauthorized access if discovered in source code.

Fixes: CVE-2023-XXXXX
Scope: runtime
Issue: #123`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
