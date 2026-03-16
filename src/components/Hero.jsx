import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2574&auto=format&fit=crop"
          alt="Brutalist abstract architecture"
          className="w-full h-full object-cover"
        />
        {/* Heavy gradient from black to transparent (Bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        {/* Scrim gradient for Navbar text contrast (Top) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent h-48"></div>
      </div>

      {/* Content pushes to bottom-left */}
      <div className="relative z-10 w-full max-w-4xl text-primary flex flex-col items-start gap-4">

        <h1 className="flex flex-col gap-1 uppercase">
          <span
            className="hero-element font-heading font-bold tracking-tight text-primary/90 whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}
          >
            Deploy the
          </span>
          <span
            className="hero-element font-drama leading-[0.9] italic text-primary whitespace-nowrap"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)' }}
          >
            Local Intelligence.
          </span>
        </h1>

        <p className="hero-element font-data text-sm md:text-base opacity-80 mt-4 md:whitespace-pre-line tracking-tight max-w-xl">
          Local AI agents for finance and cyber security B2B companies.{'\n'}
          100% data sovereign. Uncompromising performance.
        </p>

        <div className="hero-element mt-8">
          <a
            href="https://cal.com/deepreech/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn relative overflow-hidden bg-accent text-white px-8 py-4 rounded-full font-heading text-lg font-bold group shadow-xl inline-block"
          >
            <span className="relative z-10 transition-colors duration-300">Book a call</span>
            <div className="absolute inset-0 bg-white group-hover:bg-[#ff4e40] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
          </a>
        </div>

      </div>
    </section>
  );
}
