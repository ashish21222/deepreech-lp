import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Deepreech
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-white/80 hover:text-white transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white/80 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 