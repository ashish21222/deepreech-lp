import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-32">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white/90 text-sm font-medium">AI-Powered Creator Journey Planning</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Transform Your Creator Strategy with{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Matching
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with the perfect creators for your brand. Our AI platform analyzes millions of data points to find your ideal matches.
        </p>

        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Turn your <span className="relative inline-block">
            <span className="absolute -inset-1 bg-yellow-400/40 transform -rotate-1 skew-x-12"></span>
            <span className="relative font-bold text-white">creator research</span>
          </span> into meaningful data, 
          get better matches, and <span className="relative inline-block">
            <span className="absolute -inset-1 bg-yellow-400/40 transform rotate-1 -skew-x-12"></span>
            <span className="relative font-bold text-white">scale your brand.</span>
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#demo" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-200 hover:scale-105">
            Book a Free Demo
          </a>
          <a href="#features" className="bg-[#dfc051] text-white hover:opacity-90 px-8 py-4 text-lg rounded-full">
            Learn More
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10x</div>
            <div className="text-white/60">Faster Creator Matching</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3x</div>
            <div className="text-white/60">Higher ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">∞</div>
            <div className="text-white/60">Creator Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
} 