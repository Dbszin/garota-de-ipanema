
import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Music className="h-6 w-6 text-bossanova-300" />
          <span className="text-xl font-semibold text-bossanova-400">Garota de Ipanema</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-bossanova-300 transition-colors">
            Home
          </Link>
          <Link to="/historia" className="text-gray-700 hover:text-bossanova-300 transition-colors">
            História
          </Link>
          <Link to="/versoes" className="text-gray-700 hover:text-bossanova-300 transition-colors">
            Versões
          </Link>
          <Link to="/contato" className="text-gray-700 hover:text-bossanova-300 transition-colors">
            Contato
          </Link>
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-gray-700">
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
