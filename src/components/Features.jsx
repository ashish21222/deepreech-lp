import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Sub-component 1: Diagnostic Shuffler
function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'Data Ingestion', color: 'border-dark/10' },
    { id: 2, label: 'Model Fine-tuning', color: 'border-dark/10' },
    { id: 3, label: 'Local Deployment', color: 'border-accent' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full flex items-center justify-center perspective-1000 mt-6">
      {cards.map((card, i) => {
        const isTop = i === 0;
        const scale = 1 - i * 0.05;
        const yOffset = i * 16;
        const opacity = 1 - i * 0.2;

        return (
          <div
            key={card.id}
            className={`absolute w-[80%] p-4 bg-primary border ${card.color} text-dark text-sm font-data shadow-sm flex items-center justify-between transition-all duration-700`}
            style={{
              transform: `translateY(${yOffset}px) scale(${scale})`,
              opacity: opacity,
              zIndex: 10 - i,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <span className="opacity-60">{`0${card.id}`}</span>
            <span className="font-bold">{card.label}</span>
            <div className={`w-2 h-2 rounded-full ${isTop ? 'bg-accent animate-pulse' : 'bg-dark/20'}`} />
          </div>
        );
      })}
    </div>
  );
}

// Sub-component 2: Telemetry Typewriter
function TelemetryTypewriter() {
  const fullText = "> system.delegate(\"repetitive_tasks\")\n> executing agent swarm...\n> local_handlers enabled\n> tasks resolving autonomously.";
  const [text, setText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          index = 0;
          setText(''); // Reset to loop
          setInterval(typeInterval, 50);
        }, 4000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="h-48 w-full bg-dark rounded-xl mt-6 p-4 flex flex-col relative overflow-hidden border border-dark/10">
      <div className="flex items-center gap-2 mb-4 absolute top-4 left-4">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <span className="text-primary/70 font-data text-xs uppercase">Live Feed</span>
      </div>
      <div className="mt-8 font-data text-primary text-sm whitespace-pre-line text-left leading-relaxed">
        {text}
        <span className="w-2 h-4 bg-accent inline-block align-middle ml-1 animate-ping" />
      </div>
    </div>
  );
}

// Sub-component 3: Cursor Protocol Scheduler
function CursorScheduler() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const btnRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      const dayCells = gsap.utils.toArray('.day-cell');
      if (dayCells.length === 0) return;

      // Reset
      tl.set(cursorRef.current, { x: 0, y: 100, opacity: 0 });
      tl.set(btnRef.current, { scale: 1 });

      const targetDay = dayCells[2]; // Tuesday
      const rect = targetDay.getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();
      const targetX = rect.left - parentRect.left + 16;
      const targetY = rect.top - parentRect.top + 16;

      // Animate cursor in
      tl.to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, {
          x: targetX,
          y: targetY,
          duration: 1.2,
          ease: 'power2.inOut'
        })
        // Click interaction
        .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
        .add(() => setActiveDay(2)) // Highlight day
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        
        // Move to save button
        .to(cursorRef.current, {
          x: 200, // Approx save button X
          y: 140, // Approx save button Y
          duration: 0.8,
          ease: 'power2.inOut',
          delay: 0.5
        })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(btnRef.current, { scale: 0.95, duration: 0.1 }, "<")
        .add(() => setActiveDay(null)) // Reset highlight for effect
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(btnRef.current, { scale: 1, duration: 0.1 }, "<")
        
        // Fade out
        .to(cursorRef.current, { opacity: 0, y: "+=30", duration: 0.4, delay: 0.3 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-48 w-full relative mt-6 border border-dark/10 rounded-xl p-4 bg-primary flex flex-col items-center">
      <div className="flex gap-2 w-full justify-between mt-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div 
            key={i} 
            className={`day-cell w-8 h-8 flex items-center justify-center rounded-md font-data text-xs transition-colors duration-300 ${activeDay === i ? 'bg-accent text-white' : 'bg-background text-dark/50'}`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4">
        <button ref={btnRef} className="bg-dark text-primary px-4 py-1.5 rounded-sm font-heading text-xs uppercase tracking-wider">
          Save Protocol
        </button>
      </div>

      {/* SVG Cursor */}
      <div 
        ref={cursorRef} 
        className="absolute z-20 w-6 h-6 drop-shadow-lg"
        style={{ pointerEvents: 'none' }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.21V20.8C5.5 21.46 6.3 21.79 6.77 21.32L10.82 17.27H17.89C18.55 17.27 18.88 16.47 18.41 16L6.56 4.15C6.09 3.68 5.5 4.01 5.5 4.67V3.21Z" fill="#111111" stroke="white" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-32 px-6 md:px-16 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="feature-card bg-background border border-dark/5 rounded-[2rem] p-8 drop-shadow-xl flex flex-col justify-between hover:border-dark/10 transition-colors">
          <div>
            <h3 className="font-heading font-bold text-2xl text-dark tracking-tight">Sovereign Data Core</h3>
            <p className="font-heading text-dark/70 mt-2 text-sm leading-relaxed">
              Trained on your data, fully local agents. Zero cloud dependency ensures absolute security.
            </p>
          </div>
          <DiagnosticShuffler />
        </div>

        {/* Card 2 */}
        <div className="feature-card bg-background border border-dark/5 rounded-[2rem] p-8 drop-shadow-xl flex flex-col justify-between hover:border-dark/10 transition-colors">
          <div>
            <h3 className="font-heading font-bold text-2xl text-dark tracking-tight">Autonomous Execution</h3>
            <p className="font-heading text-dark/70 mt-2 text-sm leading-relaxed">
              Repetitive tasks can now be completely handled by resilient local agents.
            </p>
          </div>
          <TelemetryTypewriter />
        </div>

        {/* Card 3 */}
        <div className="feature-card bg-background border border-dark/5 rounded-[2rem] p-8 drop-shadow-xl flex flex-col justify-between hover:border-dark/10 transition-colors">
          <div>
            <h3 className="font-heading font-bold text-2xl text-dark tracking-tight">Engineering Heritage</h3>
            <p className="font-heading text-dark/70 mt-2 text-sm leading-relaxed">
              Proven systems backed by over a decade of elite engineering experience.
            </p>
          </div>
          <CursorScheduler />
        </div>

      </div>
    </section>
  );
}
