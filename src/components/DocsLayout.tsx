import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronRight, FiSearch, FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "./Header";
import Footer from "./Footer";

interface DocsLayoutProps {
  children: React.ReactNode;
}

type DocLink = {
  title: string;
  href: string;
  external?: boolean;
};

type DocSection = {
  title: string;
  links: DocLink[];
};

// Documentation structure
const docSections: DocSection[] = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Configuration", href: "/docs/configuration" }
    ]
  },
  {
    title: "Convention",
    links: [
      { title: "Convention Overview", href: "/docs/convention" }
    ]
  },
  {
    title: "Reference",
    links: [
      { title: "Reference Guide", href: "/docs/reference" }
    ]
  },
  {
    title: "Tools",
    links: [
      { title: "Linter", href: "https://tqrg.github.io/secomlint/", external: true },
      { title: "Dataset", href: "https://github.com/TQRG/security-patches-dataset", external: true },
    ]
  },
  {
    title: "External Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "GitHub Repository", href: "https://github.com/TQRG/secom", external: true }
    ]
  }
];

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Find previous and next pages for navigation
  const allLinks = docSections.flatMap(section => section.links);
  const currentPageIndex = allLinks.findIndex(link => link.href === currentPath);
  const prevPage = currentPageIndex > 0 ? allLinks[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < allLinks.length - 1 ? allLinks[currentPageIndex + 1] : null;
  
  // Close sidebar on mobile when navigating
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("docs-sidebar");
      const toggleButton = document.getElementById("sidebar-toggle");
      
      if (
        sidebarOpen && 
        sidebar && 
        !sidebar.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile sidebar toggle */}
        <div className="md:hidden p-4 border-b sticky top-16 z-10 bg-background">
          <Button 
            id="sidebar-toggle"
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            {sidebarOpen ? "Close Menu" : "Documentation Menu"}
          </Button>
        </div>
        
        {/* Sidebar */}
        <aside 
          id="docs-sidebar"
          className={`
            bg-muted/30 border-r w-72 overflow-y-auto 
            fixed md:sticky top-16 bottom-0 
            md:h-[calc(100vh-4rem)] h-full z-30
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <div className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm border-b z-10">
            <div className="relative">
              <FiSearch className="absolute left-3 top-2.5 text-muted-foreground" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-9"
              />
            </div>
          </div>
          
          <nav className="p-4">
            {docSections.map((section, i) => (
              <div key={i} className="mb-6">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.links.map((link, j) => {
                    const isActive = currentPath === link.href;
                    const linkContent = (
                      <div className="flex items-center justify-between w-full">
                        <span>{link.title}</span>
                        {link.external && <FiExternalLink size={14} />}
                      </div>
                    );
                    
                    return (
                      <li key={j}>
                        {link.external ? (
                          <a 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                              flex items-center text-sm px-3 py-2 rounded-md
                              hover:bg-accent hover:text-accent-foreground
                              ${isActive ? "bg-accent text-accent-foreground" : ""}
                            `}
                          >
                            {linkContent}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className={`
                              flex items-center text-sm px-3 py-2 rounded-md
                              hover:bg-accent hover:text-accent-foreground
                              ${isActive ? "bg-accent text-accent-foreground" : ""}
                            `}
                          >
                            {linkContent}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 px-4 md:px-8 max-w-5xl mx-auto w-full mt-6 md:mt-10">
          {children}
          
          {/* Previous/Next navigation */}
          <div className="mt-16 border-t pt-6 flex justify-between">
            {prevPage ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                asChild
              >
                {prevPage.external ? (
                  <a href={prevPage.href} target="_blank" rel="noopener noreferrer">
                    <FiChevronRight className="rotate-180" />
                    {prevPage.title}
                  </a>
                ) : (
                  <Link to={prevPage.href}>
                    <FiChevronRight className="rotate-180" />
                    {prevPage.title}
                  </Link>
                )}
              </Button>
            ) : (
              <div></div> // Empty div for spacing when there's no previous page
            )}
            
            {nextPage ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                asChild
              >
                {nextPage.external ? (
                  <a href={nextPage.href} target="_blank" rel="noopener noreferrer">
                    {nextPage.title}
                    <FiChevronRight />
                  </a>
                ) : (
                  <Link to={nextPage.href}>
                    {nextPage.title}
                    <FiChevronRight />
                  </Link>
                )}
              </Button>
            ) : (
              <div></div> // Empty div for spacing when there's no next page
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocsLayout; 