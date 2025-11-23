
import React from 'react';
import PageHeader from './PageHeader';

const NDAExamPattern: React.FC = () => {
  return (
    <>
      <PageHeader
        title="NDA Exam Pattern 2026"
        subtitle="Detailed breakdown of the examination structure and marking scheme."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-10">
            
            {/* Introduction */}
            <div className="text-slate-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Exam Structure Overview</h3>
              <p className="mb-4">
                The NDA exam is conducted in two stages: a written exam and SSB Interview. The written exam is conducted in two shifts- morning and afternoon. The written exam is divided into two parts: Mathematics and General Ability Test (GAT).
              </p>
              <p className="mb-4">
                The GAT is further divided into Part A-English Test and Part B- General Awareness or General Knowledge Test. A total of 150 questions are asked in GAT section and 120 in Mathematics. The question paper will be available in both English and Hindi.
              </p>
              <p>
                The written exam carries a total of 900 marks. The total duration of the written exam is five hours (2.5 hours for each paper). Candidates qualifying for the written exam are called for SSB Interview. The total marks allotted to the SSB Interview are 900.
              </p>
            </div>

            {/* Pattern Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">NDA Exam Pattern 2026 Highlights</h3>
              <p className="mb-4 text-slate-600">Candidates can check below the highlights of the NDA exam structure.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Subject</th>
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Marks</th>
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Number of questions</th>
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Duration of test</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600">
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Mathematics</td>
                      <td className="border border-slate-200 p-3">300</td>
                      <td className="border border-slate-200 p-3">120</td>
                      <td className="border border-slate-200 p-3">2.5 Hours</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">GAT</td>
                      <td className="border border-slate-200 p-3">600</td>
                      <td className="border border-slate-200 p-3">150</td>
                      <td className="border border-slate-200 p-3">2.5 Hours</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold text-slate-800">
                      <td className="border border-slate-200 p-3">Total</td>
                      <td className="border border-slate-200 p-3">900</td>
                      <td className="border border-slate-200 p-3">270</td>
                      <td className="border border-slate-200 p-3">5 Hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marking Scheme */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">NDA Marking Scheme</h3>
              <p className="mb-4 text-slate-600">
                UPSC prescribes the marking scheme of NDA. As per the marking scheme, candidates will get negative marks of 1/3 for any wrong answer. No marks will be deducted if a question is left unanswered. The marking scheme of each section is given below.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Written Exams</th>
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Marks for correct answer</th>
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Marks deducted for incorrect answer</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600">
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Mathematics</td>
                      <td className="border border-slate-200 p-3">2.5</td>
                      <td className="border border-slate-200 p-3 text-red-600">- 0.83</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">GAT</td>
                      <td className="border border-slate-200 p-3">4</td>
                      <td className="border border-slate-200 p-3 text-red-600">- 1.33</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

             <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-6">
                <h4 className="font-bold text-red-800 mb-2">Note on SSB Interview</h4>
                <p className="text-sm text-slate-700">
                    Candidates who qualify the written examination are eligible for the SSB Interview, which also carries <strong>900 Marks</strong>. The SSB interview process spans over 5 days and tests candidates on Intelligence and Personality.
                </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default NDAExamPattern;
