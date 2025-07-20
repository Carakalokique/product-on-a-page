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

const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06l-3.103 3.104-1.535-1.536a.75.75 0 00-1.06 1.06l2.064 2.065a.75.75 0 001.06 0l3.638-3.638z" clipRule="evenodd" />
  </svg>
);

// --- Slide Components ---

const Slide1_Title = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-slate-900 text-white">
    <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">Your Firm Runs on Expertise.<br/>The Admin Work is Killing It.</h1>
    <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl">
      It’s time to stop being the bottleneck and start being the visionary. We build the Autopilot System that frees you from the daily grind to work *on* your business, not just *in* it—Guaranteed.
    </p>
  </div>
);

const Slide2_Problem = () => (
    <div className="p-8 md:p-12 bg-white h-full flex flex-col justify-center">
        <div className="text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">THE REAL PROBLEM</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Your Real Enemy Isn't the Competition... It's Friction.</p>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">You're a sophisticated operator fighting a hidden war against these critical business challenges.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The "Broken Zap" Nightmare</h3>
                    <p className="mt-1 text-slate-600">Your DIY automations have become a fragile liability. You're the only one who can fix them, and you spend more time in maintenance than the automations save.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Key-Person Fragility</h3>
                    <p className="mt-1 text-slate-600">Your entire operation hinges on a single person—maybe you, maybe a star Ops Manager. This single point of failure makes your business incredibly fragile.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Manual Coordination Bottleneck</h3>
                    <p className="mt-1 text-slate-600">Growth has created exponential complexity. You've crossed a threshold where manual "checking in" is now the primary drag on your firm's productivity.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Expert-for-Admin Paycheck</h3>
                    <p className="mt-1 text-slate-600">You're paying six-figure salaries for your best people to perform five-figure administrative work, destroying morale and wasting top-tier talent.</p>
                </div>
            </div>
             <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Scalability Wall</h3>
                    <p className="mt-1 text-slate-600">You've hit a hard ceiling. You know you could land bigger clients, but you have zero confidence that your current operational infrastructure could handle the work without imploding.</p>
                </div>
            </div>
             <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">6</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Unsellable Business</h3>
                    <p className="mt-1 text-slate-600">You haven't built a business; you've built a high-stakes, high-stress job. Without systems independent of you, your firm has a low valuation and no real exit potential.</p>
                </div>
            </div>
        </div>
    </div>
);

const Slide3_Victory = () => (
    <div className="p-8 md:p-12 bg-slate-50 h-full flex flex-col justify-center">
        <div className="text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">THE PRIZE</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">This is About Achieving Operational Freedom</p>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">This isn't just about saving time. It's about installing a new operating system for your firm to win in these six key areas.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The "Effortless Oversight" Dashboard</h3>
                    <p className="mt-1 text-slate-600">Go from being the primary "doer" to the strategic "overseer." A single dashboard gives you the health of your firm in minutes, so you can manage the system, not the tasks.</p>
                </div>
            </div>
            <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Scalable Delivery Engine</h3>
                    <p className="mt-1 text-slate-600">A robust infrastructure that allows you to confidently double your client load without doubling the chaos, shattering your growth ceiling.</p>
                </div>
            </div>
             <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The "Anti-Fragile" Firm</h3>
                    <p className="mt-1 text-slate-600">The peace of mind that comes from de-risking your operations. Critical processes are embedded in a resilient system, not a person's memory.</p>
                </div>
            </div>
             <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The "A-Player" Playground</h3>
                    <p className="mt-1 text-slate-600">An environment so efficient it becomes a competitive advantage in the war for talent, allowing your experts to focus on high-impact work.</p>
                </div>
            </div>
             <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Systematized Excellence</h3>
                    <p className="mt-1 text-slate-600">"Clone" the best practices of your top performers by embedding their genius into automated workflows that raise the quality and consistency of your entire team.</p>
                </div>
            </div>
             <div className="flex items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">6</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">The Sellable Asset</h3>
                    <p className="mt-1 text-slate-600">Transform your business from a person-dependent job into a valuable, systems-driven asset with a premium valuation, giving you true freedom.</p>
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
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">1</div>
                    <h3 className="text-2xl font-bold text-slate-800">Blueprint</h3>
                </div>
                <p className="text-slate-600 ml-16">We diagnose your biggest bottleneck in a **Day 1 Deep-Dive Workshop** and architect the foundation of your Unified Data Hub.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">2</div>
                    <h3 className="text-2xl font-bold text-slate-800">Engine</h3>
                </div>
                <p className="text-slate-600 ml-16">We build your central database and forge the automations that connect your tools into one cohesive system.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">3</div>
                    <h3 className="text-2xl font-bold text-slate-800">Launch</h3>
                </div>
                <p className="text-slate-600 ml-16">We validate the system with bite-sized testing and empower your team with training to ensure confident adoption.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">4</div>
                    <h3 className="text-2xl font-bold text-slate-800">Ascent</h3>
                </div>
                <p className="text-slate-600 ml-16">We measure the ROI on a live dashboard and use the data to optimize for continuous, compounding improvement.</p>
            </div>
        </div>
    </div>
);

const FeatureValueItem = ({ children, value }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="w-6 h-6 text-current mr-3 mt-1 flex-shrink-0" />
        <div className="flex-grow">
            <span className="text-slate-800">{children}</span>
            <span className="text-sm text-slate-400 ml-2">({value} Value)</span>
        </div>
    </li>
);

const Slide5_TheOfferAndValue = () => (
    <div className="p-8 md:p-12 bg-slate-50 h-full flex flex-col justify-center">
        <h2 className="text-center text-4xl font-bold text-slate-800 mb-10">Here's What You Get</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Rapid Results */}
            <div className="border border-slate-200 rounded-xl p-8 bg-white shadow-lg flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600">Rapid Results</h3>
                <p className="text-slate-600 mt-2 mb-6">The 30-Day Sprint to immediate relief from your most frustrating bottlenecks.</p>
                <ul className="space-y-4 text-green-600 flex-grow">
                    <FeatureValueItem value="$5,000"><strong>The "Blueprint" Strategic Diagnostic:</strong> A 3-hour deep-dive and strategic plan to re-engineer your most critical process for automation readiness.</FeatureValueItem>
                    <FeatureValueItem value="$10,000"><strong>2 Critical "Quick Win" Automations:</strong> We build the automations that attack your biggest bottleneck first, providing immediate time savings and relief.</FeatureValueItem>
                    <FeatureValueItem value="$5,000"><strong>Unified Data Hub (Starter):</strong> The foundation for your core automations.</FeatureValueItem>
                    <FeatureValueItem value="$5,000"><strong>Client Data Shield Protocol:</strong> Protecting your sensitive client information.</FeatureValueItem>
                    <FeatureValueItem value="$2,000"><strong>Team Enablement & Training:</strong> Live handover and video SOPs to ensure confidence.</FeatureValueItem>
                </ul>
                <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-200 text-right">
                    <p className="text-slate-500">Total Standalone Value</p>
                    <p className="text-4xl font-bold text-slate-800">$27,000</p>
                </div>
            </div>

            {/* Full Transformation */}
            <div className="border-2 border-indigo-500 rounded-xl p-8 bg-white shadow-2xl flex flex-col ring-4 ring-indigo-200">
                <h3 className="text-3xl font-bold text-indigo-600">Full Transformation</h3>
                <p className="text-slate-600 mt-2 mb-6">Build a proprietary "Autopilot" system and create an unfair competitive advantage.</p>
                <ul className="space-y-4 text-green-600 flex-grow">
                    <FeatureValueItem value="$15,000"><strong>The Firm's "Brain" (Unified OS):</strong> The firm's complete "brain." A custom-architected system to manage all operational data.</FeatureValueItem>
                    <FeatureValueItem value="$35,000"><strong>7+ Integrated Automations:</strong> A full suite connecting all your tools to the central hub.</FeatureValueItem>
                    <FeatureValueItem value="$4,500"><strong>The Automation Blueprint (Living SOPs):</strong> A complete library of video walkthroughs and documentation, making the system ownable and transferable.</FeatureValueItem>
                    <FeatureValueItem value="$4,000"><strong>Team Mastery & Support Program:</strong> Dedicated support and training.</FeatureValueItem>
                    <FeatureValueItem value="$2,500"><strong>Live ROI & Performance Dashboard:</strong> See your value created in real-time.</FeatureValueItem>
                    <FeatureValueItem value="$5,000+"><strong>All Foundational Features Included</strong></FeatureValueItem>
                </ul>
                <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-200 text-right">
                    <p className="text-slate-500">Total Standalone Value</p>
                    <p className="text-4xl font-bold text-slate-800">$66,000</p>
                </div>
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
                    <p className="text-slate-500 mt-2">(or 3 payments of $2,400)</p>
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
                    <p className="text-slate-400 mt-2">(or 3 payments of $4,500)</p>
                </div>
            </div>
        </div>
    </div>
);


const Slide7_NextSteps = () => (
    <div className="p-8 md:p-12 bg-slate-900 text-white h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Your Autopilot?</h2>
        <p className="mt-4 text-xl text-slate-300 max-w-3xl">To ensure this level of intensive, hands-on success, I can only onboard **one new client per month**. The next slot starts **September 2025**.</p>
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