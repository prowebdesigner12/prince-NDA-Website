
import React from 'react';
import PageHeader from './PageHeader';

const CheckMark: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SSBPreparation: React.FC = () => {
  const preparationTips = [
    "Practice effective verbal and nonverbal reasoning for your intelligence test.",
    "Work on expressing your thoughts clearly, fluently, and confidently.",
    "Develop good listening skills and respect others' opinions.",
    "Practice how to build storylines for the PPDT questions.",
    "Practice psychological tests and develop a way to approach each question.",
    "Work on your self-confidence, positive attitude, and resilience.",
    "Develop leadership qualities, teamwork skills, and the ability to handle pressure for group tasks.",
    "Build a strong sense of responsibility, integrity, and discipline.",
    "Engage in regular physical exercise to maintain fitness.",
    "Participate in outdoor activities, sports, and games to improve stamina and teamwork.",
    "Engage in group discussions on various topics. Practice expressing your views logically and convincingly.",
    "Seek opportunities to deliver speeches or presentations in public.",
    "Practice critical thinking and problem-solving exercises.",
    "Learn to analyze situations from different perspectives.",
    "If possible, consult with individuals who have undergone the SSB interview process or have experience in the armed forces.",
    "Learn from your mistakes and work on areas that need improvement."
  ];

  return (
    <>
      <PageHeader
        title="How to Prepare For NDA SSB Interview"
        subtitle="Expert tips and strategies to ace the Service Selection Board interview."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-8">
            
            {/* Introduction */}
            <div className="text-slate-600 leading-relaxed">
              <p className="mb-4 text-lg">
                To prepare for the NDA SSB Interview you must make sure that you are aware of the stages involved in the interview process. These stages include the intelligence test, psychological tests, group tasks, and personal interviews. Study the assessment criteria used by the SSB to evaluate candidates.
              </p>
              <p>
                The following tips could help you prepare well for the NDA SSB interview questions:
              </p>
            </div>

            {/* Tips List */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <ul className="space-y-4">
                    {preparationTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <CheckMark />
                            <span className="text-slate-700 leading-relaxed">{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold text-slate-800 mb-2">Final Advice</h4>
                <p className="text-slate-700 italic">
                    "Consistency is key. Regular practice of both physical fitness and mental aptitude exercises will significantly boost your chances of recommendation."
                </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SSBPreparation;