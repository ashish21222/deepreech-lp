export default function PricingSection() {
  return (
    <section className="py-20 px-4 relative" id="pricing">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-900/50"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          {/* Starter Plan */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex-1 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <p className="text-4xl font-extrabold text-white mb-2">Free</p>
            <ul className="mb-6 text-white/80 space-y-3 text-sm">
              <li>10 creator matches/month</li>
              <li>Email support</li>
            </ul>
            <a href="#demo" className="block bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 flex-1 transform hover:scale-105 transition-transform duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <p className="text-4xl font-extrabold text-white mb-2">$49<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 text-white/80 space-y-3 text-sm">
              <li>100 creator matches/month</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <a href="#demo" className="block bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Start Free Trial
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex-1 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-4xl font-extrabold text-white mb-2">Custom</p>
            <ul className="mb-6 text-white/80 space-y-3 text-sm">
              <li>Unlimited matches</li>
              <li>Dedicated manager</li>
              <li>Custom integrations</li>
            </ul>
            <a href="#demo" className="block bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 