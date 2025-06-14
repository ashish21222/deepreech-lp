import { UserGroupIcon, ShieldCheckIcon, VideoCameraIcon, SparklesIcon, LightBulbIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: UserGroupIcon,
    title: "AI Creator Selection",
    desc: "Find the best creators for your brand using AI-driven matching.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Best-Fit Analysis",
    desc: "Analyze creator-brand fit for maximum campaign impact.",
  },
  {
    icon: VideoCameraIcon,
    title: "Video Performance Review",
    desc: "Review past video performance to predict future success.",
  },
  {
    icon: SparklesIcon,
    title: "Personalized Outreach",
    desc: "Automate and personalize your creator outreach at scale.",
  },
  {
    icon: LightBulbIcon,
    title: "Video Idea Suggestions",
    desc: "Get AI-powered video ideas tailored to your brand goals.",
  },
  {
    icon: CheckCircleIcon,
    title: "Style Validation",
    desc: "Ensure every video matches your brand's unique style.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-purple-900/50"></div>
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Powerful Features
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 w-fit mb-6">
                <f.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 