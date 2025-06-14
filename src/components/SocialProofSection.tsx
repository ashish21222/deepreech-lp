export default function SocialProofSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/50"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Trusted by Early Adopters
          </span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-400">Marketing Director, TechCorp</p>
              <p className="mt-4 text-gray-300">
                &ldquo;Deepreech has revolutionized how we find and work with creators. The AI matching is incredibly accurate.&rdquo;
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-gray-400">Founder, GrowthLabs</p>
              <p className="mt-4 text-gray-300">
                &ldquo;The platform&apos;s analytics have helped us make data-driven decisions about our creator partnerships.&rdquo;
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-gray-400">Brand Manager, LifestyleCo</p>
              <p className="mt-4 text-gray-300">
                &ldquo;We&apos;ve seen a 3x increase in engagement since using Deepreech to find our creator matches.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 