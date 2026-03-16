import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Viz components
function GeometricGear() {
  const svgRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(svgRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={svgRef} className="w-64 h-64 md:w-96 md:h-96 opacity-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="30" strokeWidth="2" />
      <circle cx="50" cy="50" r="20" strokeDasharray="2 6" />
      {/* Gear teeth approximation */}
      <path d="M50 0 V10 M50 90 V100 M0 50 H10 M90 50 H100 M14.6 14.6 L21.7 21.7 M78.3 78.3 L85.4 85.4 M14.6 85.4 L21.7 78.3 M78.3 14.6 L85.4 21.7" strokeWidth="2" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </svg>
  );
}

function LaserScan() {
  const lineRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        y: 280, // rough height of container
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-40 border border-dark/20 flex flex-col justify-between overflow-hidden p-2">
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-2 opacity-30">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="bg-dark/20 w-full h-full rounded-sm" />
        ))}
      </div>
      <div ref={lineRef} className="absolute left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_#E63B2E] z-10 w-full top-0" />
    </div>
  );
}

function PulsingWaveform() {
  const pathRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        ease: 'none',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg className="w-full max-w-lg h-32 md:h-48 opacity-40 text-accent" viewBox="0 0 400 100" fill="none" stroke="currentColor">
      <path 
        ref={pathRef}
        d="M0 50 L100 50 L120 20 L140 80 L160 50 L240 50 L260 10 L280 90 L300 50 L400 50" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeDasharray="400" 
        strokeDashoffset="400"
      />
    </svg>
  );
}

const cards = [
  {
    num: "01",
    title: "Data Integration",
    desc: "Secure pipeline into your local environment.",
    Viz: GeometricGear
  },
  {
    num: "02",
    title: "Agent Training",
    desc: "Specialized for finance and cyber security workflows.",
    Viz: LaserScan
  },
  {
    num: "03",
    title: "Autonomous Execution",
    desc: "Repetitive task handlers deployed on-premise.",
    Viz: PulsingWaveform
  }
];

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray('.protocol-card');
      
      cardElements.forEach((card, index) => {
        if (index === cardElements.length - 1) return; // Skip last card

        // As the NEXT card scrolls into view, animate THIS card
        ScrollTrigger.create({
          trigger: cardElements[index + 1],
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          animation: gsap.to(card, {
            scale: 0.9,
            filter: 'blur(10px)',
            opacity: 0.5,
            ease: 'none'
          })
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="protocol" className="relative w-full bg-background pt-24 pb-24">
      {cards.map((card, i) => (
        <div 
          key={i} 
          className="protocol-card sticky top-0 h-[100vh] w-full flex items-center justify-center p-6"
        >
          <div className="w-full max-w-5xl bg-primary border border-dark/10 rounded-[3rem] h-[80vh] flex flex-col md:flex-row overflow-hidden shadow-2xl">
            
            {/* Visuals half */}
            <div className="w-full md:w-1/2 h-1/3 md:h-full flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden bg-background/50">
              <card.Viz />
            </div>

            {/* Content half */}
            <div className="w-full md:w-1/2 h-2/3 md:h-full p-6 md:p-16 flex flex-col justify-center">
              <div className="font-data text-accent text-xl mb-4 opacity-80 border-b border-dark/10 pb-4 inline-block max-w-min">
                {card.num}
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-6 tracking-tight">
                {card.title}
              </h2>
              <p className="font-heading text-dark/70 text-lg md:text-xl max-w-sm">
                {card.desc}
              </p>
            </div>
            
          </div>
        </div>
      ))}
    </section>
  );
}
