export default function FAQSection() {
  return (
    <section className="py-20 px-4 relative" id="faq">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-900/50"></div>
      
      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl transform hover:scale-102 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">How does deepreech find creators?</h3>
            <p className="text-white/80">We use AI to analyze your brand and campaign needs, then match you with creators who fit your goals and style.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl transform hover:scale-102 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Can I try deepreech for free?</h3>
            <p className="text-white/80">Yes! Our Starter plan is free and lets you try all the core features.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl transform hover:scale-102 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">What platforms do you support?</h3>
            <p className="text-white/80">We support all major social platforms including Instagram, YouTube, and TikTok.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 