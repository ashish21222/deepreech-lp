"use client"

import React from 'react'

interface FlowStepProps {
  title: string
  icon: React.ReactNode
  isFirst?: boolean
  isLast?: boolean
  isSelected?: boolean
  onClick?: () => void
  gradient?: string
}

const FlowStep: React.FC<FlowStepProps> = ({
  title,
  icon,
  isSelected,
  onClick,
  gradient = 'from-purple-500 to-blue-500',
}) => {
  return (
    <div
      className={`flex items-center cursor-pointer w-[280px] ${
        isSelected 
          ? `bg-gradient-to-r ${gradient} text-white` 
          : 'bg-white/5 hover:bg-white/10'
      } rounded-lg shadow p-3 transition-transform hover:scale-105`}
      onClick={onClick}
    >
      <div
        className={`p-2 mr-3 rounded-full flex-shrink-0 ${
          isSelected 
            ? 'bg-white/20 text-white' 
            : 'bg-white/10 text-white/70'
        }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm text-center">{title}</h3>
      </div>
    </div>
  )
}

export default FlowStep
