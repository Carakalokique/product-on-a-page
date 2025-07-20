import React, { useState } from 'react';

// --- SVG Icons ---
// Using heroicons (https://heroicons.com/) for a clean, professional look
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

const VillainIcon = ({ children }) => (
    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-red-50 border border-red-200 h-full">
        {children}
    </div>
);

const VictoryIcon = ({ children }) => (
    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-green-50 border border-green-200 h-full">
        {children}
    </div>
);


// --- Slide Components ---

const Slide1_Title = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-900 text-white">
    <div className="mb-4">
        <svg className="w-24 h-24 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="currentColor"/><path d="M16.293 8.293L12 12.586l-4.293-4.293-1.414 1.414L12 15.414l5.707-5.707z" fill="currentColor"/></svg>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">The Operations Autopilot</h1>
    <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl">
      For the professional services firm ready to stop fighting operational friction and build an unfair competitive advantage.
    </p>
  </div>
);

const Slide2_Problem = () => (
  <div className="p-8 md:p-12 bg-white">
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-2">Your Real Enemy Isn't the Competition... It's Friction.</h2>
    <p className="text-center text-lg text-gray-600 mb-10">You have proven processes, but you're still fighting a hidden war against these three villains.</p>
    <div className="grid md:grid-cols-3 gap-8">
      <VillainIcon>
        <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5M5.47 9.53a7 7 0 112.46 5.97l-2.46-1.42"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 className="text-xl font-bold text-gray-800">The Manual Treadmill</h3>
        <p className="mt-2 text-gray-600">Your solid processes are packed with manual labor—copying data, sending follow-ups, generating reports. You're running hard but staying in the same place.</p>
      </VillainIcon>
      <VillainIcon>
        <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-3.517 2.5-6.566 5.68-7.318A9.004 9.004 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.347 0 4.503-.923 6.12-2.465A6.98 6.98 0 0112 11z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <h3 className="text-xl font-bold text-gray-800">The Silo Prison</h3>
        <p className="mt-2 text-gray-600">Your tools are powerful, but they don't talk. Your data is trapped in islands, forcing you to act as the slow, error-prone human bridge between them.</p>
      </VillainIcon>
      <VillainIcon>
        <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18"></path></svg>
        <h3 className="text-xl font-bold text-gray-800">The Innovation Gap</h3>
        <p className="mt-2 text-gray-600">You see your competition getting faster. The fear of being outmaneuvered by a more agile firm is real, and it keeps you up at night.</p>
      </VillainIcon>
    </div>
  </div>
);

const Slide3_Victory = () => (
  <div className="p-8 md:p-12 bg-gray-50">
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-2">Imagine This in 90 Days...</h2>
    <p className="text-center text-lg text-gray-600 mb-10">This isn't just about saving time. It's about achieving operational freedom.</p>
    <div className="grid md:grid-cols-3 gap-8">
      <VictoryIcon>
        <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2m-6 4h.01M12 6h.01M6 6h.01M6 12h.01M6 18h.01M12 18h.01M18 18h.01M18 12h.01M18 6h.01"></path></svg>
        <h3 className="text-xl font-bold text-gray-800">A Central Business Hub</h3>
        <p className="mt-2 text-gray-600">You operate from a single source of truth. A proprietary internal system that gives you complete visibility and control over your entire firm.</p>
      </VictoryIcon>
      <VictoryIcon>
        <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 className="text-xl font-bold text-gray-800">An Empowered Team</h3>
        <p className="mt-2 text-gray-600">Your team is freed from 80% of their administrative work, allowing them to serve clients at a level your competition can't match.</p>
      </VictoryIcon>
      <VictoryIcon>
        <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path><path d="M20.62 10.38a9 9 0 01-11.24 11.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path></svg>
        <h3 className="text-xl font-bold text-gray-800">True Time Freedom</h3>
        <p className="mt-2 text-gray-600">You leave for a two-week vacation and don't check your email once, with total confidence that your Autopilot system is running the firm flawlessly.</p>
      </VictoryIcon>
    </div>
  </div>
);


const Slide4_Method = () => (
    <div className="p-8 md:p-12 bg-white">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Signature Method: The Operations Loop™</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">We don't just complete a project; we build a system that generates its own momentum. Each stage makes the next more powerful.</p>
        </div>
        <div className="relative">
            {/* Dashed Circle for background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 border-4 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mr-4">1</div>
                        <h3 className="text-2xl font-bold text-gray-800">Blueprint</h3>
                    </div>
                    <p className="text-gray-600 ml-16">We diagnose your biggest bottleneck in a live session and architect the foundation of your Unified Data Hub.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mr-4">2</div>
                        <h3 className="text-2xl font-bold text-gray-800">Engine</h3>
                    </div>
                    <p className="text-gray-600 ml-16">We build your Central Operations Database and forge the automations that connect your tools into one cohesive system.</p>
                </div>
                {/* SWAPPED Ascent to be 3rd */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mr-4">4</div>
                        <h3 className="text-2xl font-bold text-gray-800">Ascent</h3>
                    </div>
                    <p className="text-gray-600 ml-16">We measure the ROI on a live dashboard and use the data to optimize for continuous, compounding improvement.</p>
                </div>
                {/* SWAPPED Launch to be 4th */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mr-4">3</div>
                        <h3 className="text-2xl font-bold text-gray-800">Launch</h3>
                    </div>
                    <p className="text-gray-600 ml-16">We validate the system with bite-sized testing and empower your team with training to ensure confident adoption.</p>
                </div>
            </div>
        </div>
    </div>
);

const FeatureValueItem = ({ children, value }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="w-6 h-6 text-current mr-3 mt-1 flex-shrink-0" />
        <div className="flex-grow">
            {children}
            <span className="text-sm text-gray-400 ml-2">({value} Value)</span>
        </div>
    </li>
);

const Slide5_TheOfferAndValue = () => (
    <div className="p-8 md:p-12 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Here's What You Get</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Rapid Results */}
            <div className="border-2 border-blue-500 rounded-xl p-8 bg-white shadow-2xl flex flex-col">
                <h3 className="text-3xl font-bold text-blue-600">Rapid Results</h3>
                <p className="text-gray-600 mt-2 mb-6">For immediate relief from your most frustrating bottlenecks.</p>
                <ul className="space-y-4 text-gray-700 text-blue-600 flex-grow">
                    <FeatureValueItem value="$7,500"><strong>Unified Data Hub (Starter):</strong> The foundation for your core automations.</FeatureValueItem>
                    <FeatureValueItem value="$15,000"><strong>2-3 Critical Automations:</strong> We tackle your biggest time-drains first.</FeatureValueItem>
                    <FeatureValueItem value="$2,000"><strong>Team Enablement & Training:</strong> Live handover and video SOPs to ensure confidence.</FeatureValueItem>
                    <FeatureValueItem value="$5,000"><strong>Client Data Shield Protocol:</strong> Protecting your sensitive client information.</FeatureValueItem>
                    <FeatureValueItem value="$1,000"><strong>White-Glove Tech Setup:</strong> We handle all the software setup and payments.</FeatureValueItem>
                </ul>
                <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200 text-right">
                    <p className="text-gray-500">Total Standalone Value</p>
                    <p className="text-4xl font-bold text-gray-800">$30,500</p>
                </div>
            </div>

            {/* Full Transformation */}
            <div className="border-2 border-purple-500 rounded-xl p-8 bg-gray-900 text-white shadow-2xl flex flex-col">
                <h3 className="text-3xl font-bold text-purple-400">Full Transformation</h3>
                <p className="text-gray-300 mt-2 mb-6">To build a proprietary "Autopilot" system and create an unfair competitive advantage.</p>
                <ul className="space-y-4 text-gray-200 text-purple-400 flex-grow">
                    <FeatureValueItem value="$15,000"><strong>Central Operations Database (Full):</strong> Your firm's complete internal operating system.</FeatureValueItem>
                    <FeatureValueItem value="$35,000"><strong>7+ Integrated Automations:</strong> A full suite connecting all your tools to the central hub.</FeatureValueItem>
                    <FeatureValueItem value="$4,500"><strong>The Automation Blueprint (SOPs):</strong> A permanent asset for training and continuity.</FeatureValueItem>
                    <FeatureValueItem value="$4,000"><strong>Team Mastery & Support Program:</strong> Dedicated support and training.</FeatureValueItem>
                    <FeatureValueItem value="$2,500"><strong>Live ROI & Performance Dashboard:</strong> See your value created in real-time.</FeatureValueItem>
                    <FeatureValueItem value="$5,000+"><strong>All Foundational Features:</strong> Including the Security Protocol & Tech Setup.</FeatureValueItem>
                </ul>
                <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-700 text-right">
                    <p className="text-gray-400">Total Standalone Value</p>
                    <p className="text-4xl font-bold text-white">$66,000</p>
                </div>
            </div>
        </div>
    </div>
);

const Slide6_TheInvestment = () => (
    <div className="p-8 md:p-12 bg-white">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">An Investment in Freedom, Not an Expense</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             <div className="border border-gray-200 rounded-xl p-8 text-center bg-gray-50 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-blue-600">Rapid Results</h3>
                    <p className="text-gray-500 mt-2">Total Value:</p>
                    <p className="text-5xl font-extrabold text-gray-800 my-2 line-through">$30,500</p>
                </div>
                <div>
                    <p className="text-gray-500 mt-6">Your Investment Today:</p>
                    <p className="text-6xl font-bold text-blue-600">$6,500</p>
                    <p className="text-gray-500 mt-2">(or 3 payments of $2,400)</p>
                </div>
            </div>
             <div className="border border-gray-200 rounded-xl p-8 text-center bg-gray-900 text-white flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-purple-400">Full Transformation</h3>
                    <p className="text-gray-400 mt-2">Total Value:</p>
                    <p className="text-5xl font-extrabold text-gray-300 my-2 line-through">$66,000</p>
                </div>
                <div>
                    <p className="text-gray-400 mt-6">Your Investment Today:</p>
                    <p className="text-6xl font-bold text-purple-400">$12,000</p>
                    <p className="text-gray-400 mt-2">(or 3 payments of $4,500)</p>
                </div>
            </div>
        </div>
    </div>
);


const Slide7_NextSteps = () => (
    <div className="p-8 md:p-12 bg-gray-900 text-white h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Your Autopilot?</h2>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl">To ensure this level of intensive, hands-on success, I can only onboard **one new client per month**. The next slot starts **August 2025**.</p>
        <div className="mt-8 border-t-2 border-b-2 border-blue-400 py-6 px-8">
            <h3 className="text-2xl font-bold text-white mb-2">Your Guarantee: The Risk is on Us.</h3>
            <p className="text-gray-300">We guarantee we will save your team a minimum of 10 hours per week within 30 days. If not, we work for free until we do.</p>
        </div>
        <div className="mt-10">
            <h3 className="text-2xl font-bold">The Next Step is Clear.</h3>
            <p className="mt-2 text-lg text-gray-300">You've seen the plan. You understand the value. The next step is to secure your slot.</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                Secure Your Slot & Begin Onboarding
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
    <div className="font-sans bg-gray-100 flex flex-col" style={{ height: '100vh' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');
          .font-sans { font-family: 'Inter', sans-serif; }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
      <div className="flex-grow relative overflow-hidden shadow-2xl">
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
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button onClick={prevSlide} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          <ArrowLeftIcon />
          <span>Previous</span>
        </button>
        <div className="flex space-x-2">
            {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}></button>
            ))}
        </div>
        <button onClick={nextSlide} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          <span>Next</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default App; 