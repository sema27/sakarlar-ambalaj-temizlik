import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
    { name: 'Şubeler', path: '/subeler' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
  <img
    src={logo}
    alt="Şakarlar Ambalaj & Temizlik"
    className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
  />
</Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <a href="https://www.facebook.com/sakarlar.ambalajtemizlik/?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/sakarlarambalajvetemizlik/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.comhttps://www.facebook.com/sakarlar.com.tr/videos/herkese-iyi-haftalar-dilerizserdivan-%C5%9Fubemize-daha-%C3%B6nce-gelmediyseniz-haydi-%C5%9F%C3%B6yl/333253794984110/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/%C5%9Fakarlar-ambalaj-ve-temi%CC%87zli%CC%87k-%C3%BCr%C3%BCnleri%CC%87/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 px-4">
                <Facebook className="w-5 h-5 text-gray-400" />
                <Instagram className="w-5 h-5 text-gray-400" />
                <Youtube className="w-5 h-5 text-gray-400" />
                <Linkedin className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
