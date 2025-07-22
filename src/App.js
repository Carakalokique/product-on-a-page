import React, { useState } from 'react';

// --- SVG Icons (Heroicons) ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
);

// Restore previous check mark style (outlined, bolder)
const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06l-3.103 3.104-1.535-1.536a.75.75 0 00-1.06 1.06l2.064 2.065a.75.75 0 001.06 0l3.638-3.638z" clipRule="evenodd" />
  </svg>
);

// --- Slide Components ---

const Slide1_Title = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-slate-900 text-white">
    <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">You Wouldn't Let Clients DIY Your Services</h1>
    <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">While DIYing Your Operations.</h1>
    <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl">
      You're a premium provider because you deliver expertise clients can't replicate. Your operations deserve the same professional touch. Stop being your own worst client.
    </p>
  </div>
);

const Slide2_Problem = () => (
    <div className="p-8 md:p-12 bg-white h-full flex flex-col justify-center">
        <div className="text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">THE 3 BRUTAL REALITIES</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8 mt-10 max-w-3xl mx-auto">
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Implementation Gap</h3>
                    <p className="mt-1 text-slate-600">You've tried. Zapier broke at scale. The Python developer disappeared. The complex spreadsheet became a monster only you understand. You know the direction to go - you just need a co-pilot to guide the strategy and handle the execution.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Opportunity Cost</h3>
                    <p className="mt-1 text-slate-600">Every hour you spend building workflows (or managing someone building them) is an hour not spent on strategy, sales, or client delivery. At your billable rate, DIY automation is the most expensive solution possible.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Quality Compromise</h3>
                    <p className="mt-1 text-slate-600">Your half-built systems are held together with duct tape and prayers. They work... until they don't. And when they break, it all falls on you to troubleshoot, fix, or find someone who can.</p>
                </div>
            </div>
        </div>
    </div>
);

const Slide3_Victory = () => (
    <div className="p-8 md:p-12 bg-slate-50 h-full flex flex-col justify-center">
        <div className="text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">THE 3 TRANSFORMATIONS</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8 mt-10 max-w-3xl mx-auto">
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">From Architect to Executive</h3>
                    <p className="mt-1 text-slate-600">Stop building the machine and start driving it. Hand over your blueprints to professionals who build these systems daily. Get back to the work only you can do.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Professional-Grade Infrastructure</h3>
                    <p className="mt-1 text-slate-600">The same operational excellence you deliver to clients, applied to your own firm. Systems that scale, adapt, and never break at 2 AM before a big deadline.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Competitive Edge</h3>
                    <p className="mt-1 text-slate-600">While competitors struggle with the same operational chaos you're escaping, you'll have a systematic advantage. The firm with the best systems wins - in margins, in scalability, and ultimately in valuation.</p>
                </div>
            </div>
        </div>
    </div>
);

const Slide4_Method = () => (
    <div className="p-8 md:p-12 bg-white h-full flex flex-col justify-center">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800">Our Signature Method: The Operations Loop™</h2>
            <p className="mt-2 text-lg text-slate-600 max-w-3xl mx-auto">We don't just complete a project; we build a system that generates its own momentum. Each stage makes the next more powerful.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-200">
                    <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">L</div>
                    <h3 className="text-2xl font-bold text-slate-800">Listen</h3>
                </div>
                <p className="text-slate-600 ml-16">We listen intently to your unique challenges and goals in our deep-dive diagnostic to uncover the single biggest bottleneck.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-200">
                    <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">O</div>
                    <h3 className="text-2xl font-bold text-slate-800">Orchestrate</h3>
                </div>
                <p className="text-slate-600 ml-16">We orchestrate your disparate tools, data, and workflows into a single, cohesive automated system.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-200">
                    <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">P</div>
                    <h3 className="text-2xl font-bold text-slate-800">Profit</h3>
                </div>
                <p className="text-slate-600 ml-16">We measure the system's performance with clear, relevant metrics—from ROI to time saved—and continuously optimize it to drive tangible, compounding profit.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-200">
                    <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">O</div>
                    <h3 className="text-2xl font-bold text-slate-800">Onboard</h3>
                </div>
                <p className="text-slate-600 ml-16">We onboard your team with hands-on training and clear documentation, transforming potential resistance into enthusiastic adoption.</p>
            </div>
        </div>
    </div>
);

const FeatureValueItem = ({ children }) => {
    // Split at the first colon for bolding
    const text = typeof children === 'string' ? children : '';
    const colonIndex = text.indexOf(':');
    let before = text;
    let after = '';
    if (colonIndex !== -1) {
        before = text.slice(0, colonIndex);
        after = text.slice(colonIndex + 1);
    }
    return (
    <li className="flex items-start">
            <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
        <div className="flex-grow">
                <span className="text-slate-800 font-bold">{before}</span>
                {after && <span className="text-slate-800">:{after}</span>}
        </div>
    </li>
);
};

const Slide5_TheOfferAndValue = () => (
    <div className="p-8 md:p-12 bg-slate-50 h-full flex flex-col justify-center">
        <h2 className="text-center text-4xl font-bold text-slate-800 mb-10">Here's What You Get</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Rapid Results */}
            <div className="border border-slate-200 rounded-xl p-8 bg-white shadow-lg flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600">Rapid Results</h3>
                <p className="text-slate-600 mt-2 mb-6">A 30-Day Implementation Sprint for immediate relief.</p>
                <ul className="space-y-4 flex-grow">
                    <FeatureValueItem>The 'Blueprint' Strategic Diagnostic: A 3-hour deep-dive and strategic plan to re-engineer your most critical process for automation readiness.</FeatureValueItem>
                    <FeatureValueItem>2 Critical 'Quick Win' Automations: We build the automations that attack your biggest bottleneck first, providing immediate time savings and relief.</FeatureValueItem>
                    <FeatureValueItem>Unified Data Hub (Starter): The foundation for your core automations.</FeatureValueItem>
                    <FeatureValueItem>Automation Co-Pilot (3 Months): Ongoing support and optimization to ensure your success.</FeatureValueItem>
                    <FeatureValueItem>Team Enablement & Training: Live handover and video SOPs to ensure confidence.</FeatureValueItem>
                </ul>
            </div>

            {/* Full Transformation */}
            <div className="border-2 border-indigo-500 rounded-xl p-8 bg-white shadow-2xl flex flex-col ring-4 ring-indigo-200">
                <h3 className="text-3xl font-bold text-indigo-600">Full Transformation</h3>
                <p className="text-slate-600 mt-2 mb-6">A 90-Day project to build a proprietary "Autopilot" system.</p>
                <ul className="space-y-4 flex-grow">
                    <FeatureValueItem>The Firm's 'Brain' (Unified OS): The firm's complete 'brain.' A custom-architected system to manage all operational data.</FeatureValueItem>
                    <FeatureValueItem>7+ Integrated Automations: A full suite connecting all your tools to the central hub.</FeatureValueItem>
                    <FeatureValueItem>Automation Co-Pilot (9 Months): Long-term strategic support to ensure compounding ROI.</FeatureValueItem>
                    <FeatureValueItem>The Automation Blueprint (Living SOPs): A complete library of video walkthroughs and documentation, making the system ownable and transferable.</FeatureValueItem>
                    <FeatureValueItem>'Mission Control' KPI Dashboard: Tracking your firm's most critical vital signs in real-time.</FeatureValueItem>
                    <FeatureValueItem>Team Mastery & Support Program: Dedicated support and training.</FeatureValueItem>
                </ul>
            </div>
        </div>
    </div>
);

const Slide6_TheInvestment = () => (
    <div className="p-8 md:p-12 bg-white h-full flex flex-col justify-center">
        <h2 className="text-center text-4xl font-bold text-slate-800 mb-10">An Investment in Freedom, Not an Expense</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <div className="border border-slate-200 rounded-xl p-8 text-center bg-slate-50 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-indigo-600">Rapid Results</h3>
                    <p className="text-slate-500 mt-2">Total Value:</p>
                    <p className="text-5xl font-extrabold text-slate-800 my-2">$27,000</p>
                </div>
                <div>
                    <p className="text-slate-500 mt-6">Your Investment Today:</p>
                    <p className="text-6xl font-bold text-indigo-600">$6,500</p>
                    <p className="text-slate-500 mt-2 text-base">(or 3 payments of $2,400)</p>
                </div>
            </div>
             <div className="border-2 border-indigo-500 rounded-xl p-8 text-center bg-slate-900 text-white flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-indigo-400">Full Transformation</h3>
                    <p className="text-slate-400 mt-2">Total Value:</p>
                    <p className="text-5xl font-extrabold text-slate-300 my-2">$66,000</p>
                </div>
                <div>
                    <p className="text-slate-400 mt-6">Your Investment Today:</p>
                    <p className="text-6xl font-bold text-indigo-400">$12,000</p>
                    <p className="text-slate-400 mt-2 text-base">(or 3 payments of $4,500)</p>
                </div>
            </div>
        </div>
    </div>
);


const Slide7_NextSteps = () => (
    <div className="p-8 md:p-12 bg-slate-900 text-white h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to install a virtuous LOOP?</h2>
        <p className="mt-4 text-xl text-slate-300 max-w-3xl">To ensure this level of intensive, hands-on success, I can only onboard one new client per month. The next slot starts September 2025.</p>
        <div className="mt-8 border-t-2 border-b-2 border-indigo-400 py-6 px-8 bg-slate-800/50 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-2">Your Guarantee: The Risk is on Us.</h3>
            <p className="text-slate-300 max-w-xl">We guarantee we will save your team a minimum of 10 hours per week within 30 days. If not, we work for free until we do.</p>
        </div>
        <div className="mt-10">
            <h3 className="text-2xl font-bold">The Next Step is Clear.</h3>
            <p className="mt-2 text-lg text-slate-300">You've seen the plan. You understand the value. The next step is to secure your slot.</p>
            <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                Secure My September Slot & Begin Onboarding
            </button>
        </div>
    </div>
);


// --- Main App Component ---
const App = () => {
  const slides = [
    <Slide1_Title />,
    <Slide2_Problem />,
    <Slide3_Victory />,
    <Slide4_Method />,
    <Slide5_TheOfferAndValue />,
    <Slide6_TheInvestment />,
    <Slide7_NextSteps />
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="font-sans bg-slate-100 flex flex-col" style={{ height: '100vh' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
          .font-sans { font-family: 'Inter', sans-serif; }
        `}
      </style>
      <div className="flex-grow relative overflow-hidden shadow-2xl bg-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0, zIndex: currentSlide === index ? 10 : 0 }}
          >
            <div className="h-full w-full overflow-y-auto">{slide}</div>
          </div>
        ))}
      </div>
      <div className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-inner">
        <button onClick={prevSlide} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
          <ArrowLeftIcon />
          <span>Previous</span>
        </button>
        <div className="flex space-x-2">
            {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-indigo-500' : 'bg-slate-600 hover:bg-slate-500'}`}></button>
            ))}
        </div>
        <button onClick={nextSlide} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
          <span>Next</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default App; 