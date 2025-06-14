import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="deepreech logo" width={32} height={32} />
          <span className="font-bold text-lg">deepreech</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="mailto:support@deepreech.com" className="hover:underline">support@deepreech.com</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-[#2563eb]">🐦</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#2563eb]">💼</a>
        </div>
      </div>
    </footer>
  );
} 