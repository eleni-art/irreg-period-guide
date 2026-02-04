
import React from 'react';
import { PageType } from '../types';

const ReasonCard: React.FC<{
  title: string;
  phrase: string;
  why: string;
  notice: string[];
  track: string[];
}> = ({ title, phrase, why, notice, track }) => (
  <div className="bg-[#F8F8FA] rounded-2xl p-6 border border-[#7A6E94]/5 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="font-serif text-lg md:text-xl text-[#5D5276] mb-1 leading-tight">{title}</h3>
    <p className="text-[#2DD4BF] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 leading-tight">{phrase}</p>
    <div className="space-y-3">
      <div>
        <h4 className="text-[9px] uppercase font-bold text-[#7A6E94]">Why</h4>
        <p className="text-xs md:text-sm text-[#5D5276] leading-snug">{why}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-[9px] uppercase font-bold text-[#7A6E94]">Notice</h4>
          <ul className="text-[10px] text-[#5D5276] space-y-0.5">
            {notice.map((n, idx) => <li key={idx} className="flex gap-1.5"><span className="text-[#2DD4BF] font-bold">•</span> {n}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-[9px] uppercase font-bold text-[#7A6E94]">Track</h4>
          <ul className="text-[10px] text-[#5D5276] space-y-0.5">
            {track.map((t, idx) => <li key={idx} className="flex gap-1.5"><span className="text-[#2DD4BF] font-bold">•</span> {t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

interface MagazinePreviewProps {
  page: PageType;
}

const MagazinePreview: React.FC<MagazinePreviewProps> = ({ page }) => {
  const disclaimer = "This guide is for general education only and is not medical advice, diagnosis, or treatment. If you are worried about your symptoms, pregnant, postpartum, or your bleeding is severe, contact a qualified healthcare professional.";

  if (page === 'PAGE_1') {
    return (
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-[#7A6E94]/10 p-8 md:p-20 relative animate-in fade-in duration-500">
        <div className="mb-8 text-center italic text-[#7A6E94]/60 text-[10px]">
          {disclaimer}
        </div>

        <header className="text-center mb-16">
          <h1 className="font-serif text-[#5D5276] leading-tight mb-4">
            <span className="block text-4xl md:text-7xl mb-2">Irregular Periods</span>
            <span className="block text-xl md:text-4xl text-[#7A6E94]/80 italic">Quick Clarity Guide + Tracker</span>
          </h1>
          <p className="text-[#7A6E94] text-sm md:text-xl font-medium italic max-w-2xl mx-auto mt-6">
            A helpful overview of common reasons your cycle might feel off and how to know.
          </p>
        </header>

        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-base md:text-xl text-[#5D5276] leading-relaxed">
            Irregular periods are super common and there are a bunch of overlapping reasons they can happen. The goal of this guide is to help you notice patterns, track what matters, and know when to get checked.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="font-serif text-2xl md:text-4xl text-[#5D5276] mb-8 text-center">What counts as an irregular period?</h2>
          <p className="text-center mb-12 text-[#7A6E94] text-xs md:text-sm uppercase tracking-[0.2em] font-bold">Common signs and symptoms</p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Cycles fewer than 21 days or more than 35 days apart.",
              "Missing three or more periods in a row.",
              "Flow that is much heavier or lighter than usual.",
              "Bleeding that lasts longer than seven days.",
              "Cycle length changes significantly month to month.",
              "Severe pain, cramping, or nausea during flow.",
              "Spotting or bleeding between periods.",
              "Soaking through protection in under an hour."
            ].map((bullet, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-3 text-xs md:text-base leading-relaxed p-4 rounded-2xl bg-[#F8F8FA] text-[#5D5276] border border-[#7A6E94]/5"
              >
                <div className="w-2 h-2 rounded-full shrink-0 mt-2 bg-[#2DD4BF]" />
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-4xl text-[#5D5276] mb-12 text-center">Common Patterns & Reasons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ReasonCard 
              title="Menarche / Early Puberty" 
              phrase="The cycle is learning the routine."
              why="In the first few years, ovulation can be inconsistent while the body matures."
              notice={["Unpredictable timing", "Skipped months", "Flow shifts"]}
              track={["Cycle dates", "Bleeding days", "Heaviness"]}
            />
            <ReasonCard 
              title="Perimenopause" 
              phrase="Hormones are shifting."
              why="Ovulation becomes less consistent as estrogen and progesterone fluctuate."
              notice={["Cycles get shorter", "Skipped periods", "New spotting"]}
              track={["Cycle length", "Pattern changes", "Bleeding after sex"]}
            />
            <ReasonCard 
              title="Stress" 
              phrase="Messing with the signals."
              why="Stress hormones can disrupt the communication that supports regular ovulation."
              notice={["Delayed periods", "Skipped cycles", "Mood shifts"]}
              track={["Sleep", "Major events", "Mood shifts"]}
            />
            <ReasonCard 
              title="Weight Change" 
              phrase="The body notices shifts."
              why="Sudden changes in energy and body fat can shift reproductive hormones."
              notice={["Missed periods", "Longer cycles", "Lighter bleeding"]}
              track={["Weight shift timing", "Appetite", "Training"]}
            />
            <ReasonCard 
              title="Thyroid Issues" 
              phrase="The body's tempo setter."
              why="Thyroid hormones influence metabolism and can affect cycle regularity."
              notice={["Fatigue", "Cold intolerance", "Hair changes", "Anxiety"]}
              track={["Cycle changes", "Energy symptoms"]}
            />
            <ReasonCard 
              title="Birth Control" 
              phrase="Lining and ovulation change."
              why="Some methods thin the lining or affect ovulation to prevent pregnancy."
              notice={["Spotting", "Lighter bleeding", "Missed bleeds"]}
              track={["Method type", "Start/stop dates", "Spotting"]}
            />
            <ReasonCard 
              title="Intense Exercise" 
              phrase="Fuel must match output."
              why="High training and low fuel can reduce signals needed for ovulation."
              notice={["Longer cycles", "Missed periods", "Injuries"]}
              track={["Training volume", "Rest days", "Nutrition"]}
            />
            <ReasonCard 
              title="PCOS" 
              phrase="Patterns over cysts."
              why="Typically diagnosed with criteria including irregular cycles and androgens."
              notice={["Long cycles", "Acne", "Hair growth", "Thinning"]}
              track={["Cycle length", "Hair changes", "Lab notes"]}
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-4xl w-full bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-[#7A6E94]/10 p-8 md:p-20 animate-in fade-in duration-500">
      <header className="mb-12">
        <h2 className="font-serif text-3xl md:text-5xl text-[#5D5276] mb-4">3 Month Cycle Tracker</h2>
        <p className="text-[#7A6E94] text-sm md:text-lg italic">Bring this to your appointment for clearer communication.</p>
      </header>
      
      <div className="overflow-x-auto mb-12 border border-[#7A6E94]/10 rounded-2xl bg-[#F8F8FA]">
        <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#5D5276] text-[#F8F8FA] uppercase tracking-widest font-bold">
              <th className="py-4 px-6 border-r border-white/10">Start Date</th>
              <th className="py-4 px-6 border-r border-white/10">Days</th>
              <th className="py-4 px-6 border-r border-white/10">Flow</th>
              <th className="py-4 px-6 border-r border-white/10">Spotting</th>
              <th className="py-4 px-6 border-r border-white/10">Pain</th>
              <th className="py-4 px-6">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map(row => (
              <tr key={row} className="border-b border-[#7A6E94]/10 h-20">
                <td className="py-4 px-6 border-r border-[#7A6E94]/5" />
                <td className="py-4 px-6 border-r border-[#7A6E94]/5" />
                <td className="py-4 px-6 border-r border-[#7A6E94]/5" />
                <td className="py-4 px-6 border-r border-[#7A6E94]/5" />
                <td className="py-4 px-6 border-r border-[#7A6E94]/5" />
                <td className="py-4 px-6" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-2xl text-[#5D5276] mb-6 border-b border-[#7A6E94]/10 pb-2">What to bring</h3>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Last 3 start dates & bleeding days",
                "Heaviness (soaking frequency)",
                "Spotting frequency (between/after sex)",
                "Pain levels (new/worsening)",
                "Recent lifestyle shifts (stress/weight)",
                "Birth control details & dates"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#5D5276]">
                  <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-[#5D5276] mb-6 border-b border-[#7A6E94]/10 pb-2">Questions for them</h3>
          <ul className="space-y-4 text-sm text-[#5D5276]">
            <li><span className="text-[#2DD4BF] font-black mr-2">•</span> "Does my pattern suggest regular ovulation?"</li>
            <li><span className="text-[#2DD4BF] font-black mr-2">•</span> "Should we rule out thyroid or anemia causes?"</li>
            <li><span className="text-[#2DD4BF] font-black mr-2">•</span> "What criteria would you use to assess PCOS?"</li>
            <li><span className="text-[#2DD4BF] font-black mr-2">•</span> "Is an ultrasound needed for my symptoms?"</li>
            <li><span className="text-[#2DD4BF] font-black mr-2">•</span> "What is the timeline for reassessing these symptoms?"</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div className="bg-[#2DD4BF]/10 border-2 border-[#2DD4BF] rounded-2xl p-8 shadow-sm">
          <h4 className="font-bold text-[#5D5276] text-lg mb-4 uppercase tracking-widest">Book if...</h4>
          <ul className="space-y-3 text-sm text-[#5D5276]">
            <li className="flex gap-2"><span className="font-black text-[#2DD4BF] text-xl leading-none">✓</span> Missed 3 periods (not pregnant)</li>
            <li className="flex gap-2"><span className="font-black text-[#2DD4BF] text-xl leading-none">✓</span> Cycle under 21 or over 35 days</li>
            <li className="flex gap-2"><span className="font-black text-[#2DD4BF] text-xl leading-none">✓</span> Bleeding lasts over 7 days regularly</li>
            <li className="flex gap-2"><span className="font-black text-[#2DD4BF] text-xl leading-none">✓</span> Spotting or severe pain persists</li>
          </ul>
        </div>
        <div className="bg-[#7A6E94]/10 border-2 border-[#7A6E94] rounded-2xl p-8 shadow-sm">
          <h4 className="font-bold text-[#5D5276] text-lg mb-4 uppercase tracking-widest">Urgent if...</h4>
          <ul className="space-y-3 text-sm text-[#5D5276]">
            <li className="flex gap-2"><span className="font-black text-red-500 text-xl leading-none">!</span> Soaking 1+ pad/tampon per hour</li>
            <li className="flex gap-2"><span className="font-black text-red-500 text-xl leading-none">!</span> Fainting, chest pain, or weakness</li>
            <li className="flex gap-2"><span className="font-black text-red-500 text-xl leading-none">!</span> Fever accompanied by pelvic pain</li>
            <li className="flex gap-2"><span className="font-black text-red-500 text-xl leading-none">!</span> Heavy bleeding while possibly pregnant</li>
          </ul>
        </div>
      </div>

      <footer className="pt-12 border-t border-[#7A6E94]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-[#7A6E94]/80 text-center mb-12">
          <span>ACOG Guidelines</span>
          <span>Mayo Clinic</span>
          <span>NHS Health</span>
          <span>CDC Overviews</span>
          <span>Endocrine Society</span>
          <span>Cleveland Clinic</span>
          <span>Office on Women’s Health</span>
          <span>WHO Menstrual Health</span>
        </div>
        <div className="text-center italic text-[#7A6E94]/60 text-[10px]">
          {disclaimer}
        </div>
      </footer>
    </div>
  );
};

export default MagazinePreview;


