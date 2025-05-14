import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-primary font-bold text-xl">
              SECURITY COMMITS
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            ) : (
              <Link to="/" className="text-foreground hover:text-primary transition-colors">About</Link>
            )}
            
            {isHomePage ? (
              <a href="#news" className="text-foreground hover:text-primary transition-colors">News</a>
            ) : (
              <Link to="/" className="text-foreground hover:text-primary transition-colors">News</Link>
            )}
            
            <Link to="/convention" className="text-foreground hover:text-primary transition-colors">Convention</Link>
            
            {/* {isHomePage ? (
              <a href="#examples" className="text-foreground hover:text-primary transition-colors">Examples</a>
            ) : (
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Examples</Link>
            )} */}
            
            {/* <Link to="/reference" className="text-foreground hover:text-primary transition-colors">Reference</Link> */}
            
            {/* <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link> */}
            
            <Link to="/docs" className="text-foreground hover:text-primary transition-colors">Docs</Link>
            
            <div className="flex space-x-0">
              <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-r-none border-r-0" asChild>
                <a href="https://github.com/TQRG/secom" target="_blank" rel="noopener noreferrer">
                  <FiGithub size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-rose-100 hover:bg-rose-200 border-rose-300 text-rose-600 hover:text-rose-700 rounded-l-none" asChild>
                <a href="https://github.com/sponsors/sofiaoreis" target="_blank" rel="noopener noreferrer">
                  <FiHeart size={16} />
                  <span>Sponsor</span>
                </a>
              </Button>
            </div>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-background border-b`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {isHomePage ? (
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
          ) : (
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          )}
          
          {isHomePage ? (
            <a 
              href="#news" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </a>
          ) : (
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
          )}
          
          <Link
            to="/convention"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Convention
          </Link>
          
          {isHomePage ? (
            <a 
              href="#examples" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Examples
            </a>
          ) : (
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Examples
            </Link>
          )}
          
          <Link
            to="/reference"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reference
          </Link>
          
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          
          <Link
            to="/docs"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Docs
          </Link>
          
          <a 
            href="https://github.com/TQRG/secom" 
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiGithub size={16} />
            GitHub
          </a>
          
          <a 
            href="https://github.com/sponsors/TQRG" 
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium bg-rose-100 text-rose-600 hover:bg-rose-200 hover:text-rose-700"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiHeart size={16} />
            Sponsor
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
