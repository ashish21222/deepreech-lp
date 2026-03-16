import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-primary rounded-t-[4rem] px-8 md:px-16 pt-24 pb-8 flex flex-col gap-16 relative overflow-hidden">
      {/* Footer Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-primary/10 pb-16">
        
        {/* Brand Block */}
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <div>
            <div className="font-heading text-3xl font-bold tracking-tight mb-2">deepreech</div>
            <div className="font-data text-primary/50 text-sm max-w-sm">
              Local AI agents for finance and cyber security B2B companies.
            </div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-4">
          <div className="font-data text-xs uppercase tracking-widest text-primary/40 mb-2">Navigation</div>
          <a href="#" className="font-heading text-sm opacity-80 hover:opacity-100 link-lift w-fit">Features</a>
          <a href="#philosophy" className="font-heading text-sm opacity-80 hover:opacity-100 link-lift w-fit">Philosophy</a>
          <a href="#protocol" className="font-heading text-sm opacity-80 hover:opacity-100 link-lift w-fit">Protocol</a>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-4">
          <div className="font-data text-xs uppercase tracking-widest text-primary/40 mb-2">Legal</div>
          <a href="#" className="font-heading text-sm opacity-80 hover:opacity-100 link-lift w-fit">Privacy</a>
          <a href="#" className="font-heading text-sm opacity-80 hover:opacity-100 link-lift w-fit">Data Sovereignty</a>
          <a href="#" className="font-heading text-sm opacity-80 hover:opacity-100 link-lift w-fit">Terms</a>
        </div>

      </div>

      {/* Footer Bottom Line */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-data text-xs text-primary/40">
          © {new Date().getFullYear()} deepreech. All data secured.
        </div>

        {/* System Operational Indicator */}
        <div className="flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
          <div className="font-data text-xs text-primary/80 uppercase tracking-widest">System Operational</div>
        </div>
      </div>
    </footer>
  );
}
