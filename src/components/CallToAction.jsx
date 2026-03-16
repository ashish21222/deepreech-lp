import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-background border-t border-dark/5">
      <div className="max-w-3xl flex flex-col items-center">
        <h2 className="font-drama text-4xl md:text-6xl lg:text-7xl italic text-dark mb-6 tracking-tight">
          Initiate sequence.
        </h2>
        <p className="font-heading text-dark/70 text-lg md:text-xl mb-12 max-w-xl">
          Start deploying secure local intelligence inside your firewall today. No compromises, full sovereign control.
        </p>

        <a
          href="https://cal.com/deepreech/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="magnetic-btn relative overflow-hidden bg-accent text-white px-12 py-5 rounded-full font-heading text-xl font-bold group shadow-2xl inline-block"
        >
          <span className="relative z-10 transition-colors duration-300">Book a call</span>
          <div className="absolute inset-0 bg-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
        </a>
      </div>
    </section>
  );
}
