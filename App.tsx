import React, { useState } from 'react';
import MagazinePreview from './components/MagazinePreview';
import { PageType } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('PAGE_1');

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FA]">
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-[#7A6E94]/20 px-6 py-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7A6E94] rounded-full flex items-center justify-center text-[#F8F8FA]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="font-serif text-xl font-bold text-[#5D5276]">Wellness Studio</h1>
            <p className="text-xs text-[#7A6E94] uppercase tracking-widest">Layout + Copy Assistant</p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setActivePage('PAGE_1')}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${activePage === 'PAGE_1' ? 'bg-[#7A6E94] text-[#F8F8FA] border-[#7A6E94]' : 'border-[#7A6E94]/30 text-[#7A6E94] bg-white hover:border-[#7A6E94]'}`}
            >
              Page 1
            </button>
            <button 
              onClick={() => setActivePage('PAGE_2')}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${activePage === 'PAGE_2' ? 'bg-[#7A6E94] text-[#F8F8FA] border-[#7A6E94]' : 'border-[#7A6E94]/30 text-[#7A6E94] bg-white hover:border-[#7A6E94]'}`}
            >
              Page 2
            </button>
          </div>
          
          <div className="flex justify-center w-full">
            <MagazinePreview page={activePage === 'PAGE_1' ? 'PAGE_1' : 'PAGE_2'} />
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 text-center border-t border-[#7A6E94]/10">
        <p className="text-[#7A6E94] text-[10px] font-medium uppercase tracking-widest">
          Educational info only — not medical advice.
        </p>
      </footer>
    </div>
  );
};

export default App;
