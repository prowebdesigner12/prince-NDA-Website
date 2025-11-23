
import React from 'react';
import PageHeader from './PageHeader';

const Target: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Target Course"
        subtitle="For Class 12th Pass Students"
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative">
            <div className="text-slate-600 leading-relaxed space-y-8">
              
              {/* Intro Section */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Target NDA Course for Written & SSB Interview Coaching</h3>
                <p className="mb-4">
                  This course is designed to bring the best out of a candidate. It is because of our highly experienced and qualified retired officers that we have the distinct advantage of sharing, evolving and constantly updating our teaching techniques and infrastructure, matching the latest trends in SSB Interview Centers.
                </p>
                <p className="mb-4">
                  SSB preparation is very different from the exam preparations we are familiar with. It is more about active learning, personality development and coming out of our comfort zone. We strive at making each student an all rounder by giving holistic coverage to all aspects: – academics, critical thinking, sports, and general awareness to name a few.
                </p>
                <p>
                  The Target Course batch would start with the background preparations for the SSB. The Background preparations of the students include regular instructions on personality development, spoken English, General Awareness level and enhancing the Reasoning Ability both verbal and non verbal. Team of qualified and experienced teachers conducts this training throughout the year along with NDA written examination.
                </p>
              </div>

              {/* Facilities Section */}
              <div>
                 <h4 className="text-xl font-bold text-slate-800 mb-3">World-Class Training Infrastructure</h4>
                 <p className="mb-4">
                    Prince NDA Academy offers a fully equipped Football ground, Volleyball ground, dedicated Obstacle course, Individual obstacles (as per SSB pattern and standards) and vast open grounds to encourage fitness among candidates as endurance and stamina are a pre-requisite for a success at the SSB. Discipline is given utmost importance and daily schedule is kept close to best practices adopted in our defense forces.
                 </p>
                 <p className="mb-4">
                    Prince NDA Academy is the only academy which has the Outdoor Tasks Area and Obstacle Course for Individual Tasks laid out on the lines as would be found in an actual SSB venue. This is with a view to give our candidates a unique and exclusive hands on practice in the outdoor tasks.
                 </p>
                 <div className="bg-red-50 border-l-4 border-red-600 p-4">
                     <p className="font-medium text-slate-800">
                        We assure focused attention on each student, honing their strengths and developing their weaknesses. Our curriculum designed by experts assures success without any burden on students. Active counseling and guidance is provided to develop positive winning attitude.
                     </p>
                 </div>
              </div>

              {/* Exam Details Section */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">NDA UPSC EXAM DETAILS</h3>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">CODE</th>
                                <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">DURATION</th>
                                <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">SUBJECT</th>
                                <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700 text-right">MAX MARKS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-200 p-3">1</td>
                                <td className="border border-slate-200 p-3">2.30 HOURS</td>
                                <td className="border border-slate-200 p-3">MATHEMATICS</td>
                                <td className="border border-slate-200 p-3 text-right">300</td>
                            </tr>
                             <tr>
                                <td className="border border-slate-200 p-3">2</td>
                                <td className="border border-slate-200 p-3">2.30 HOURS</td>
                                <td className="border border-slate-200 p-3">GENERAL ABILITY TEST</td>
                                <td className="border border-slate-200 p-3 text-right">600</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h4 className="text-lg font-bold text-red-600 mb-3">Paper-1: Mathematics</h4>
                        <div className="text-sm space-y-2">
                            <p><strong>Max Marks:</strong> 300 | <strong>Total Questions:</strong> 120</p>
                            <p><strong>Negative Marking:</strong> One Third</p>
                            <p className="mt-2 text-slate-700">
                                <strong>Syllabus:</strong> Algebra, Matrices and Determinants, Trigonometry, Analytical Geometry of two and three dimensions, Differential Calculus, Integral Calculus and Differential equations, Vector Algebra, Statistics and Probability.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h4 className="text-lg font-bold text-red-600 mb-3">Paper-2: General Ability</h4>
                        <div className="text-sm space-y-2">
                            <p><strong>Max Marks:</strong> 600 | <strong>Total Questions:</strong> 150</p>
                            <p><strong>Negative Marking:</strong> One Third</p>
                            <ul className="list-disc list-inside mt-2 text-slate-700 space-y-1">
                                <li><strong>Part A - English (200 Marks):</strong> 50 Questions. Grammar, usage, vocabulary, comprehension.</li>
                                <li><strong>Part B - General Knowledge (400 Marks):</strong> 100 Questions covering Physics, Chemistry, General Science, History, Geography, Current Events.</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>

              {/* SSB Training Section */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2 pt-4">SSB TRAINING SCHEDULE</h3>
                <div className="overflow-x-auto shadow-sm rounded-lg border border-slate-200">
                     <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800 text-white">
                                <th className="p-3 font-bold w-24 border-r border-slate-700">Stage</th>
                                <th className="p-3 font-bold">Training Activities</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="bg-white">
                                <td className="p-4 font-bold align-top border-r border-slate-200 text-slate-800">Stage I</td>
                                <td className="p-4">
                                    <div className="font-bold text-red-600 mb-1">Day 1: Screening Test</div>
                                    <ul className="list-disc list-inside text-sm space-y-1 mb-2">
                                        <li>IQ Test – Verbal and Non verbal</li>
                                        <li>Picture Perception & Description Test / Discussion</li>
                                    </ul>
                                    <p className="text-xs text-slate-500 italic">Note: Candidates qualifying Stage I will continue to undergo Stage II others will be returned on this day.</p>
                                </td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="p-4 font-bold align-top border-r border-slate-200 text-slate-800" rowSpan={4}>Stage II</td>
                                <td className="p-4">
                                     <div className="font-bold text-red-600 mb-1">Day 2: Psychological Test</div>
                                     <ul className="list-disc list-inside text-sm space-y-1">
                                        <li>Thematic Apperception Test (TAT)</li>
                                        <li>Word Association Test (WAT)</li>
                                        <li>Situation Reaction Test (SRT)</li>
                                        <li>Self Description Test</li>
                                     </ul>
                                </td>
                            </tr>
                             <tr className="bg-white">
                                <td className="p-4">
                                     <div className="font-bold text-red-600 mb-1">Day 3: GTO Tests & Interviews</div>
                                     <ul className="list-disc list-inside text-sm space-y-1">
                                        <li>Group Discussion, Lecturette</li>
                                        <li>Group Planning Exercise</li>
                                        <li>Progressive Group Test, Group Obstacles Race, Half Group Task</li>
                                     </ul>
                                </td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="p-4">
                                     <div className="font-bold text-red-600 mb-1">Day 4: GTO Tests & Interviews</div>
                                     <ul className="list-disc list-inside text-sm space-y-1">
                                        <li>Individual Obstacles</li>
                                        <li>Command Task, Group Task</li>
                                     </ul>
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4">
                                     <div className="font-bold text-red-600 mb-1">Day 5: Conference</div>
                                     <p className="text-sm">Conference and declaration of results.</p>
                                </td>
                            </tr>
                             <tr className="bg-red-50">
                                <td className="p-4 font-bold align-top border-r border-slate-200 text-slate-800">Stage III</td>
                                <td className="p-4">
                                    <div className="font-bold text-slate-800">Medical Test</div>
                                    <p className="text-sm">For successful candidates from Stage II (next 2 to 3 days).</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Target;
