import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a 
            href="https://github.com/security-commits" 
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <FiGithub className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            {new Date().getFullYear()}. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
