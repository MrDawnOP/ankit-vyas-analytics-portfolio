import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navigation component
 *
 * Provides a responsive navigation bar with links to the different sections
 * of the portfolio. On small screens the links are toggled via a menu button.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', to: '#hero' },
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Experience', to: '#experience' },
    { name: 'Projects', to: '#projects' },
    { name: 'Education', to: '#education' },
    { name: 'Certifications', to: '#certifications' },
    { name: 'Contact', to: '#contact' },
  ];
  return (
    <nav className="fixed w-full top-0 z-50 bg-primary/90 backdrop-blur border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="font-bold text-xl text-accent">Ankit Vyas</a>
        <button
          className="lg:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <ul
          className={`${isOpen ? 'flex flex-col space-y-4 mt-4' : 'hidden'} lg:flex lg:flex-row lg:space-x-8`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                className="hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;