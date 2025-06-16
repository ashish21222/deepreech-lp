"use client"

import React, { useState, Fragment } from 'react'
import FlowStep from './FlowStep'
import {
  LogInIcon,
  TargetIcon,
  UsersIcon,
  UserIcon,
  PlaySquareIcon,
  MailIcon,
  LightbulbIcon,
  BarChart3Icon,
  StarIcon,
} from 'lucide-react'

const FlowDiagram = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number | null>(null)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([0])
  const [animatingStep, setAnimatingStep] = useState<number | null>(null)

  const stepExamples = {
    0: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <UserIcon className="w-5 h-5 text-white" />
          </div>
          <div className="">
            <h3 className="font-medium text-sm text-white">Ashish</h3>
            <p className="text-white/80 text-xs">Brand Manager at Sony</p>
          </div>
        </div>
      </div>
    ),
    1: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <p className="text-white text-sm mb-2 text-center">&ldquo;Increase brand awareness among tech-savvy millennials&rdquo;</p>
        <div className="flex gap-2 justify-center">
          <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">Tech</span>
          <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">Lifestyle</span>
        </div>
      </div>
    ),
    2: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3 flex flex-col">
        {[
          { name: 'Hareesh Kumar - Tech Vlogger', followers: '22K', rating: 3 },
          { name: 'AniThing', followers: '193K', rating: 5 },
        ].map((creator, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <UserIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center gap-4">
                <span className="text-white text-sm">{creator.name}</span>
                <span className="text-white/80 text-xs">{creator.followers}</span>
              </div>
              <div className="flex mt-1">
                {[...Array(creator.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    3: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-2 bg-white/20 rounded-lg">
            <div className="text-lg font-bold text-white">98%</div>
            <div className="text-white/80 text-xs">Brand Safety</div>
          </div>
          <div className="text-center p-2 bg-white/20 rounded-lg">
            <div className="text-lg font-bold text-white">4.8%</div>
            <div className="text-white/80 text-xs">Engagement</div>
          </div>
        </div>
      </div>
    ),
    4: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3 flex flex-col">
        {[
          { title: 'Tech Review', views: '1.2M' },
          { title: 'Cinematic Storytelling', views: '890K' },
        ].map((video, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
              <PlaySquareIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 text-center">
              <div className="flex justify-between items-center gap-4">
                <span className="text-white text-sm">{video.title}</span>
                <span className="text-white/80 text-xs">{video.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    5: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <div className="border-l-2 border-white/30 pl-3 text-center">
          <p className="text-white text-sm mb-2">Hi [Creator],</p>
          <p className="text-white/80 text-xs">Loved your video in which you did a Sony camera review! Would you be interested in creating an authentic review about a new camera.</p>
        </div>
      </div>
    ),
    6: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3 flex flex-col items-center">
        {[
          { title: 'Day in the Life {hook, body, CTA}', score: '98%' },
          { title: 'Features Deep Dive {hook, body, CTA}', score: '95%' },
        ].map((idea, i) => (
          <div key={i} className="flex justify-between items-center w-full gap-4">
            <span className="text-white text-sm">{idea.title}</span>
            <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">{idea.score}</span>
          </div>
        ))}
      </div>
    ),
    7: (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-2 bg-white/20 rounded-lg">
            <div className="text-lg font-bold text-white">2.1M</div>
            <div className="text-white/80 text-xs">Total Views</div>
          </div>
          <div className="text-center p-2 bg-white/20 rounded-lg">
            <div className="text-lg font-bold text-white">4.8%</div>
            <div className="text-white/80 text-xs">Engagement</div>
          </div>
        </div>
      </div>
    ),
  }

  const steps = [
    {
      title: 'Login/Signup',
      icon: <LogInIcon />,
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Select Campaign Goal',
      icon: <TargetIcon />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Suggests Creators',
      icon: <UsersIcon />,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Review Creator Profiles',
      icon: <UserIcon />,
      color: 'from-teal-500 to-emerald-500',
    },
    {
      title: 'Analyze Past Brand Videos',
      icon: <PlaySquareIcon />,
      color: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Automated Personalized Outreach',
      icon: <MailIcon />,
      color: 'from-lime-500 to-yellow-500',
    },
    {
      title: 'AI Proposes Video Ideas',
      icon: <LightbulbIcon />,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Campaign Launch & Analytics',
      icon: <BarChart3Icon />,
      color: 'from-red-500 to-pink-500',
    },
  ]

  const handleStepClick = (index: number) => {
    if (index === selectedStepIndex) {
      setSelectedStepIndex(null)
      return
    }

    // Only allow selecting the next step in sequence
    if (index > Math.max(...visibleSteps)) {
      return
    }

    setSelectedStepIndex(index)

    // If this is the last visible step and there are more steps to reveal
    if (index === Math.max(...visibleSteps) && index < steps.length - 1) {
      setAnimatingStep(index + 1)
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, index + 1])
        setAnimatingStep(null)
      }, 500)
    }
  }

  return (
    <div className="w-full mx-auto px-2 sm:px-4 py-6 sm:py-12 bg-gradient-to-b from-gray-900 to-purple-900/30 rounded-3xl my-6 sm:my-12 overflow-x-auto">
      <h1 className="text-lg sm:text-2xl font-bold text-center mb-4 sm:mb-8 text-white">
        Campaign Creation Flow
      </h1>
      <div className="grid grid-cols-2 gap-2 sm:gap-8 min-w-[320px] sm:min-w-[600px]">
        {/* Flow steps column */}
        <div className="flex flex-col items-center space-y-1">
          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index)
            const isAnimating = animatingStep === index

            return (
              <Fragment key={index}>
                <div
                  className={`transition-all duration-500 h-[80px] sm:h-[120px] flex items-center justify-center w-full ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  } ${
                    isAnimating
                      ? 'animate-path-reveal'
                      : ''
                  }`}
                >
                  <FlowStep
                    title={step.title}
                    icon={step.icon}
                    isFirst={index === 0}
                    isLast={index === steps.length - 1}
                    isSelected={index === selectedStepIndex}
                    onClick={() => handleStepClick(index)}
                    gradient={step.color}
                  />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex justify-center transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  >
                    <div className={`h-4 sm:h-6 border-l-2 border-dashed border-purple-400 ${
                      isAnimating ? 'animate-path-glow' : ''
                    }`}></div>
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>

        {/* Example column */}
        <div className="flex flex-col items-center space-y-1">
          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index)
            const isAnimating = animatingStep === index
            const isSelected = index === selectedStepIndex

            return (
              <Fragment key={index}>
                <div
                  className={`transition-all duration-500 w-full h-[80px] sm:h-[120px] flex items-center justify-center ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  } ${
                    isAnimating
                      ? 'animate-path-reveal'
                      : ''
                  }`}
                >
                  <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4 w-full h-full flex items-center justify-center ${
                    isSelected ? 'ring-2 ring-purple-400' : ''
                  }`}>
                    {stepExamples[index as keyof typeof stepExamples]}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex justify-center transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  >
                    <div className={`h-4 sm:h-6 border-l-2 border-dashed border-purple-400 ${
                      isAnimating ? 'animate-path-glow' : ''
                    }`}></div>
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FlowDiagram
