import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (isScrolled) {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(245, 243, 238, 0.85)', // background color with opacity
          backdropFilter: 'blur(16px)',
          color: '#111111',
          border: '1px solid rgba(17, 17, 17, 0.1)',
          duration: 0.4,
          ease: 'power2.inOut',
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          color: '#E8E4DD', // matches primary text over dark hero
          border: '1px solid transparent',
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }
    }, navRef);

    return () => ctx.revert();
  }, [isScrolled]);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        ref={navRef}
        className="flex items-center justify-between w-full max-w-5xl px-6 py-4 rounded-full transition-all duration-300 pointer-events-auto"
      >
        <a href="#" className="text-xl font-bold tracking-tight font-heading link-lift">
          deepreech
        </a>

        <ul className="hidden md:flex items-center gap-8 font-heading text-sm font-medium">
          {['Features', 'Philosophy', 'Protocol'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="link-lift inline-block opacity-80 hover:opacity-100">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="magnetic-btn relative overflow-hidden bg-accent text-white px-6 py-2 rounded-full font-heading text-sm font-semibold group">
          <span className="relative z-10 transition-colors duration-300">Book a call</span>
          <div className="absolute inset-0 bg-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
        </button>
      </nav>
    </div>
  );
}
