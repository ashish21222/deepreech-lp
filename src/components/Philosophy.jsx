import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(bgRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // SplitText style reveal (using simple word-by-word fade up since SplitText is premium)
      // Custom implementation for generic words
      const animateText = (element) => {
        const words = element.querySelectorAll('.word');
        gsap.from(words, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out'
        });
      };

      if (text1Ref.current) animateText(text1Ref.current);
      if (text2Ref.current) animateText(text2Ref.current);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Helper to split text into word spans
  const splitWords = (text) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em] overflow-hidden">
        {word}
      </span>
    ));
  };

  return (
    <section 
      ref={containerRef} 
      id="philosophy"
      className="relative w-full py-40 bg-dark text-primary overflow-hidden"
    >
      {/* Texture Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-20 scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2665&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-dark/80 mix-blend-multiply z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 flex flex-col gap-12">
        <div ref={text1Ref} className="font-heading text-lg md:text-2xl text-primary/70 max-w-2xl leading-relaxed">
          {splitWords("Most B2B AI focuses on: cloud dependency, generic models, and third-party risk.")}
        </div>

        <div ref={text2Ref} className="font-drama text-4xl md:text-5xl lg:text-[5.5rem] leading-[1.1] max-w-4xl tracking-tight">
          {splitWords("We focus on: ")}
          <span className="word inline-block text-accent italic pr-2">absolute sovereignty.</span>
        </div>
      </div>
    </section>
  );
}
