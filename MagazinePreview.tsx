
import React from 'react';
import { PageType } from '../types';

const ReasonCard: React.FC<{
  title: string;
  phrase: string;
  why: string;
  notice: string[];
  track: string[];
}> = ({ title, phrase, why, notice, track }) => (
  <div className="bg-[#F8F8FA] rounded-2xl p-4 md:p-6 border border-[#7A6E94]/5 shadow-sm">
    <h3 className="font-serif text-sm md:text-xl text-[#5D5276] mb-1 leading-tight">{title}</h3>
    <p className="text-[#98DDC8] text-[8px] md:text-xs font-bold uppercase tracking-widest mb-4 leading-tight">{phrase}</p>
    <div className="space-y-3">
      <div>
        <h4 className="text-[8px] md:text-[10px] uppercase font-bold text-[#7A6E94]">Why</h4>
        <p className="text-[10px] md:text-sm text-[#5D5276] leading-snug">{why}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h4 className="text-[8px] md:text-[10px] uppercase font-bold text-[#7A6E94]">Notice</h4>
          <ul className="text-[8px] md:text-[10px] text-[#5D5276] space-y-0.5">
            {notice.map((n, idx) => <li key={idx}>• {n}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-[8px] md:text-[10px] uppercase font-bold text-[#7A6E94]">Track</h4>
          <ul className="text-[8px] md:text-[10px] text-[#5D5276] space-y-0.5">
            {track.map((t, idx) => <li key={idx}>• {t}</li>)}
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
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-[#7A6E94]/10 p-6 md:p-20 relative">
        {/* Top Disclaimer */}
        <div className="mb-8 text-center italic text-[#7A6E94]/60 text-[10px] md:text-xs">
          {disclaimer}
        </div>

        {/* Title Section */}
        <header className="text-center mb-12">
          <h1 className="font-serif text-[#5D5276] leading-tight mb-4">
            <span className="block text-3xl md:text-6xl mb-2">Irregular Periods</span>
            <span className="block text-xl md:text-4xl text-[#7A6E94]/80 italic">Quick Clarity Guide + Tracker</span>
          </h1>
          <p className="text-[#7A6E94] text-sm md:text-lg font-medium italic max-w-2xl mx-auto mt-4">
            A helpful overview of common reasons your cycle might feel off and how to know.
          </p>
        </header>

        {/* Intro Section */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-base md:text-xl text-[#5D5276] leading-relaxed">
            Irregular periods are super common and there are a bunch of overlapping reasons they can happen. The goal of this guide is to help you notice patterns, track what matters, and know when to get checked. It is not to diagnose you.
          </p>
        </div>

        {/* What Counts Section */}
        <section className="mb-16">
          <h2 className="font-serif text-xl md:text-3xl text-[#5D5276] mb-6 text-center">What counts as an irregular period?</h2>
          <p className="text-center mb-10 text-[#7A6E94] text-xs md:text-base">Common signs and symptoms to look for.</p>
          
          <ul className="grid grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
            {[
              "Periods that come fewer than 21 days apart or more than 35 days apart.",
              "Missing three or more periods in a row.",
              "Bleeding that is much heavier or lighter than your usual.",
              "Periods that last longer than seven days.",
              "Cycle length that changes a lot month to month.",
              "Periods with severe pain, cramping, nausea, or vomiting.",
              "Spotting or bleeding between periods, after sex, or after menopause.",
              "Soaking through one or more tampons or pads in an hour."
            ].map((bullet, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-2 md:gap-3 text-[9px] md:text-sm leading-relaxed p-3 rounded-xl bg-[#F8F8FA] text-[#5D5276]"
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-[#98DDC8]" />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-center mt-10 text-[9px] md:text-xs font-semibold uppercase tracking-widest text-[#98DDC8]">
            "One weird cycle happens. Patterns are what matter."
          </p>
        </section>

        {/* 8 Common Reasons Grid */}
        <section>
          <h2 className="font-serif text-xl md:text-3xl text-[#5D5276] mb-12 text-center">Common Patterns & Reasons</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            <ReasonCard 
              title="Menarche / Early Puberty" 
              phrase="Your cycle is basically learning the routine."
              why="In the first few years, ovulation can be inconsistent while the body matures."
              notice={["Unpredictable timing", "Skipped months", "Flow shifts"]}
              track={["Cycle dates", "Bleeding days", "Heaviness"]}
            />
            <ReasonCard 
              title="Perimenopause" 
              phrase="Your hormones are shifting."
              why="Ovulation becomes less consistent as estrogen and progesterone fluctuate."
              notice={["Cycles get shorter", "Skipped periods", "New spotting"]}
              track={["Cycle length", "Pattern changes", "Bleeding after sex"]}
            />
            <ReasonCard 
              title="Stress" 
              phrase="Stress can mess with signals."
              why="Stress hormones can disrupt the communication that supports regular ovulation."
              notice={["Delayed periods", "Skipped cycles", "Mood shifts"]}
              track={["Sleep", "Major events", "Mood shifts"]}
            />
            <ReasonCard 
              title="Weight Change" 
              phrase="Your cycle notices body changes."
              why="Sudden changes in energy and body fat can shift reproductive hormones."
              notice={["Missed periods", "Longer cycles", "Lighter bleeding"]}
              track={["Weight change timing", "Appetite", "Training"]}
            />
            <ReasonCard 
              title="Thyroid Issues" 
              phrase="The tempo setter for the body."
              why="Thyroid hormones influence metabolism and can affect cycle regularity."
              notice={["Fatigue", "Cold intolerance", "Skin changes", "Anxiety"]}
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
              phrase="Fuel must match training."
              why="High training and low fuel can reduce signals needed for ovulation."
              notice={["Longer cycles", "Missed periods", "Injuries"]}
              track={["Training volume", "Rest days", "Nutrition"]}
            />
            <ReasonCard 
              title="PCOS" 
              phrase="Patterns over cysts."
              why="Typically diagnosed with criteria including irregular cycles and higher androgens."
              notice={["Long cycles", "Acne", "Hair growth", "Thinning"]}
              track={["Cycle length", "Hair changes", "Lab notes"]}
            />
          </div>
          
          <p className="text-center mt-12 text-[#7A6E94] italic text-[10px] md:text-sm">
            "Many of these overlap. Tracking helps you and your clinician connect the dots faster."
          </p>

          <div className="mt-12 bg-[#98DDC8]/20 border border-[#98DDC8] rounded-2xl p-6 text-center">
            <h4 className="font-bold text-[#5D5276] uppercase tracking-widest text-[9px] md:text-xs mb-2">Quick Next Step</h4>
            <p className="text-[#5D5276] text-[10px] md:text-base">If you have been experiencing irregular period symptoms for 3+ months, it’s worth checking in. You deserve peace of mind.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-4xl w-full bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-[#7A6E94]/10 p-6 md:p-20">
      <h2 className="font-serif text-xl md:text-3xl text-[#5D5276] mb-8">3 Month Cycle Tracker</h2>
      <p className="text-[#7A6E94] mb-6 text-xs md:text-base">Bring this to your appointment for clearer communication.</p>
      
      {/* Tracker Table */}
      <div className="overflow-x-auto mb-8 border border-[#7A6E94]/10 rounded-xl">
        <table className="w-full text-left text-[9px] md:text-sm border-collapse min-w-[500px]">
          <thead>
            <tr className="bg-[#F8F8FA] border-b border-[#7A6E94]/20 text-[#7A6E94] font-semibold uppercase tracking-tighter">
              <th className="py-3 px-3">Start Date</th>
              <th className="py-3 px-3">Length</th>
              <th className="py-3 px-3">Flow</th>
              <th className="py-3 px-3">Spot?</th>
              <th className="py-3 px-3">Pain (0-10)</th>
              <th className="py-3 px-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map(row => (
              <tr key={row} className="border-b border-[#7A6E94]/5 h-16">
                <td className="py-3 px-3" />
                <td className="py-3 px-3" />
                <td className="py-3 px-3" />
                <td className="py-3 px-3" />
                <td className="py-3 px-3" />
                <td className="py-3 px-3" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-[#7A6E94] italic text-[9px] md:text-xs mb-16">"Even messy notes are helpful because perfection is not required."</p>

      {/* Appointment Checklist */}
      <div className="grid grid-cols-2 gap-6 md:gap-12 mb-16">
        <div>
          <h3 className="font-serif text-base md:text-2xl text-[#5D5276] mb-6">What to bring</h3>
          <ul className="space-y-3">
            {[
              "Last 3 start dates",
              "Days you bleed",
              "Soaking pads quickly",
              "Spotting between",
              "New pain/vomiting",
              "Recent stress",
              "Birth control dates",
              "Pregnancy possibility"
            ].map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-center gap-2 text-[9px] md:text-sm text-[#5D5276]"
              >
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#7A6E94]/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base md:text-2xl text-[#5D5276] mb-6">Questions to ask</h3>
          <ul className="space-y-3 text-[9px] md:text-xs text-[#5D5276] leading-relaxed">
            <li>• "Am I ovulating?"</li>
            <li>• "Check thyroid?"</li>
            <li>• "Rule out other causes?"</li>
            <li>• "PCOS criteria?"</li>
            <li>• "Is ultrasound needed?"</li>
            <li>• "Labs for my case?"</li>
            <li>• "Urgent follow-up signs?"</li>
            <li>• "Expected timeline?"</li>
          </ul>
        </div>
      </div>

      {/* Safety Boxes */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-16">
        <div className="bg-[#98DDC8]/20 border border-[#98DDC8] rounded-2xl p-4 md:p-6">
          <h4 className="font-bold text-[#5D5276] text-[10px] md:text-base mb-4 leading-tight">Book if...</h4>
          <ul className="space-y-2 text-[9px] md:text-sm text-[#5D5276]">
            <li>• Missed 3 periods</li>
            <li>• Cycle &lt;21 or &gt;35d</li>
            <li>• Bleeding &gt;7 days</li>
            <li>• Severe pain</li>
          </ul>
        </div>
        <div className="bg-[#7A6E94]/10 border border-[#7A6E94] rounded-2xl p-4 md:p-6">
          <h4 className="font-bold text-[#5D5276] text-[10px] md:text-base mb-4 leading-tight">Urgent care if...</h4>
          <ul className="space-y-2 text-[9px] md:text-sm text-[#5D5276]">
            <li>• Soaking 1 pad/hr</li>
            <li>• Faint or weak</li>
            <li>• Fever + pelvic pain</li>
            <li>• Pregnancy + heavy</li>
          </ul>
        </div>
      </div>

      {/* Citations */}
      <footer className="pt-12 border-t border-[#7A6E94]/10">
        <h4 className="font-bold text-[9px] uppercase tracking-widest text-[#7A6E94] mb-6">Citations & Sources</h4>
        <div className="grid grid-cols-2 gap-4 text-[8px] md:text-[10px] text-[#7A6E94]/80">
          <p>ACOG (irregular bleeding)</p>
          <p>Mayo Clinic (periods)</p>
          <p>NHS (heavy bleeding)</p>
          <p>CDC (PCOS overview)</p>
          <p>Office on Women’s Health</p>
          <p>Endocrine Society</p>
          <p>Cleveland Clinic</p>
          <p>WHO (menstrual health)</p>
        </div>
        <div className="mt-12 text-center italic text-[#7A6E94]/60 text-[8px] md:text-[10px]">
          {disclaimer}
        </div>
      </footer>
    </div>
  );
};

export default MagazinePreview;

