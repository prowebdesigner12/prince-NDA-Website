
import React from 'react';
import PageHeader from './PageHeader';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const CrossIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SSBDosDonts: React.FC = () => {
  return (
    <>
      <PageHeader
        title="SSB Interview Day: Do’s and Don’ts"
        subtitle="Essential guidelines to help you succeed in the NDA SSB Interview."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-10">
            
            {/* Introduction */}
            <div className="text-slate-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Guidelines for Success</h3>
              <p className="mb-4">
                The NDA SSB interview is a comprehensive assessment of your personality, leadership potential, and overall suitability to become an officer in the armed forces. It is essential to be well-prepared, confident, and authentic throughout the process.
              </p>
              <p>
                Here are the crucial do's and don'ts to keep in mind for your SSB Interview day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Do's Section */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-3 mb-6 border-b border-green-200 pb-3">
                        <div className="bg-green-100 p-2 rounded-full">
                            <CheckIcon />
                        </div>
                        <h4 className="text-xl font-bold text-green-800">Do's</h4>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckIcon />
                            <div>
                                <strong className="block text-green-900 mb-1">Be well-prepared</strong>
                                <p className="text-sm text-green-800">Gather knowledge about the armed forces, their history, current affairs, and the duties of an officer. Stay updated with recent developments.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckIcon />
                            <div>
                                <strong className="block text-green-900 mb-1">Dress appropriately</strong>
                                <p className="text-sm text-green-800">Wear neat and formal attire that reflects your seriousness and professionalism. Pay attention to your grooming and hygiene.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckIcon />
                            <div>
                                <strong className="block text-green-900 mb-1">Be confident and positive</strong>
                                <p className="text-sm text-green-800">Project confidence in your abilities and maintain a positive attitude. Speak clearly, maintain good posture, and establish eye contact.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckIcon />
                            <div>
                                <strong className="block text-green-900 mb-1">Participate actively</strong>
                                <p className="text-sm text-green-800">Engage actively in group discussions and individual tasks with enthusiasm. Express opinions confidently and listen respectfully. Show teamwork.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckIcon />
                            <div>
                                <strong className="block text-green-900 mb-1">Be honest and authentic</strong>
                                <p className="text-sm text-green-800">Present yourself genuinely. Be truthful in your answers and avoid exaggerations. Your character and values are key factors.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Don'ts Section */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-3 mb-6 border-b border-red-200 pb-3">
                        <div className="bg-red-100 p-2 rounded-full">
                            <CrossIcon />
                        </div>
                        <h4 className="text-xl font-bold text-red-800">Don'ts</h4>
                    </div>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CrossIcon />
                            <div>
                                <strong className="block text-red-900 mb-1">Don't be late</strong>
                                <p className="text-sm text-red-800">Punctuality is crucial. Arrive at the interview venue well in advance to avoid any last-minute rush. Being late creates a negative impression.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CrossIcon />
                            <div>
                                <strong className="block text-red-900 mb-1">Avoid overconfidence</strong>
                                <p className="text-sm text-red-800">Avoid appearing arrogant. Strike a balance between confidence and humility. Show respect towards fellow candidates and interviewers.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CrossIcon />
                            <div>
                                <strong className="block text-red-900 mb-1">Don't be disorganized</strong>
                                <p className="text-sm text-red-800">Stay organized with necessary documents. Be prepared to answer questions related to your educational qualifications and personal background.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CrossIcon />
                            <div>
                                <strong className="block text-red-900 mb-1">Avoid negative body language</strong>
                                <p className="text-sm text-red-800">Avoid slouching, crossing arms, fidgeting, or signs of nervousness. Maintain a relaxed yet attentive posture.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CrossIcon />
                            <div>
                                <strong className="block text-red-900 mb-1">Don't give up easily</strong>
                                <p className="text-sm text-red-800">Tests can be challenging. Stay determined and maintain a positive attitude even if you face setbacks. Learn from your experiences.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-slate-800 text-white p-6 rounded-lg text-center mt-8">
                <p className="text-lg italic">
                    "Success in the SSB Interview comes to those who are disciplined, honest, and dedicated. Prepare well and believe in yourself!"
                </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SSBDosDonts;
