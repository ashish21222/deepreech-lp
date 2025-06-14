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
          <blockquote className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl max-w-sm transform hover:scale-105 transition-transform duration-300">
            <p className="text-white text-lg italic mb-4">"deepreech made our creator campaigns effortless and effective."</p>
            <span className="text-purple-300 font-semibold">— Pilot User</span>
          </blockquote>
          
          <blockquote className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl max-w-sm transform hover:scale-105 transition-transform duration-300">
            <p className="text-white text-lg italic mb-4">"We saw a 3x increase in ROI after switching to deepreech."</p>
            <span className="text-purple-300 font-semibold">— Early Brand</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
} 