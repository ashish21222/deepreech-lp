import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/50"></div>
      
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Why deepreech?
          </span>
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <ul className="text-left inline-block mx-auto space-y-6">
            <li className="flex items-center gap-4 text-white group transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-2 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-purple-300" />
              </div>
              <span className="text-lg">Save hours on creator research and outreach</span>
            </li>
            <li className="flex items-center gap-4 text-white group transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-2 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-purple-300" />
              </div>
              <span className="text-lg">Increase campaign ROI with data-driven matches</span>
            </li>
            <li className="flex items-center gap-4 text-white group transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-2 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-purple-300" />
              </div>
              <span className="text-lg">Remove guesswork from influencer marketing</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 