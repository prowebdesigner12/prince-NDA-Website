
import React from 'react';
import PageHeader from './PageHeader';

const SSBInterviewProcess: React.FC = () => {
  return (
    <>
      <PageHeader
        title="SSB Interview Process"
        subtitle="Comprehensive Guide to NDA SSB Interview Stages & Procedure"
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-10">
            
            {/* Introduction */}
            <div className="text-slate-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Understanding NDA SSB Interview</h3>
              <p className="mb-4">
                Let us understand what is SSB interview in NDA. The NDA SSB interview process comprises two distinct stages: Stage I and Stage II. The SSB interview process involves the examination of each candidate by three examiners: the interviewing officer, the group testing officer, and the psychologist. Each examiner assesses the candidate independently before drawing their conclusion about the candidate's potential.
              </p>
              <p className="mb-4">
                In addition to the interview and assessment phases, the NDA SSB interview in 2026 will include an intelligence and personality examination.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Stage I:</strong> Candidates undergo assessments such as the Officer Intelligence Rating and the Picture Perception Description Test. These evaluations are designed to assess the candidates' intelligence, analytical thinking, and ability to perceive and describe visual information. Based on their performance in these tests, candidates are shortlisted to proceed to Stage II.</li>
                  <li><strong>Stage II:</strong> This is an extensive process that spans four days and includes a range of assessments. These assessments encompass Psychology Assessments, Group Testing Officer Tasks, Interviews, and conferences. The purpose of Stage II is to evaluate candidates' psychological attributes, leadership potential, communication skills, and overall suitability for a career in the Indian armed forces.</li>
              </ul>
              <p className="mt-4">
                The NDA SSB interview process aims to thoroughly examine applicants' physical, mental, and psychological capabilities. It is a comprehensive evaluation that helps determine their potential to serve in the defense forces of the nation.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-4 text-sm">
                  <strong>Note:</strong> Candidates applying for the Air Force must also meet the specific requirements for the Computerized Pilot Selection System (CPSS) and Pilot Aptitude Battery Test (PABT).
              </div>
            </div>

            {/* Detailed Procedure */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">NDA SSB Interview - Detailed Procedure</h3>
              <p className="text-slate-600 mb-6">
                 The NDA SSB Interview call letter will provide you with all the necessary information about the interview, such as the location, procedures, and other details. As a part of the NDA SSB interview questions or process, candidates will be evaluated in two stages.
              </p>

              {/* Stage I - Day 1 */}
              <div className="mb-8 overflow-hidden rounded-lg border border-slate-200">
                  <div className="bg-slate-800 text-white p-4 font-bold text-lg">Stage I - Day 1: Screening Test</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-100 text-slate-700">
                            <tr>
                                <th className="p-3 border-b border-slate-200 font-bold w-1/4">Test</th>
                                <th className="p-3 border-b border-slate-200 font-bold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 text-sm">
                            <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Officer Intelligence Rating (OIR)</td>
                                <td className="p-4">
                                    <p className="mb-2">It is conducted to test the candidate’s intelligence.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Verbal Reasoning:</strong> Approx. 50-60 questions (30 mins). Topics: series, odd one out, speed/distance/time, blood ties.</li>
                                        <li><strong>Non-Verbal Reasoning:</strong> Approx. 50 questions (40 mins). Tasks: analyzing visual info, mirror images, picture distortions.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 align-top font-semibold">Picture Perception Description Test (PPDT)</td>
                                <td className="p-4">
                                    <p className="mb-2">Serves as a measure of candidates' ability to observe details, think creatively, and construct a coherent story.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Candidates view an image for 30 seconds.</li>
                                        <li>They must construct a story based on it within 3 minutes.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>

               {/* Stage II - Day 2 */}
              <div className="mb-8 overflow-hidden rounded-lg border border-slate-200">
                  <div className="bg-slate-800 text-white p-4 font-bold text-lg">Stage II - Day 2: Psychological Test</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-100 text-slate-700">
                            <tr>
                                <th className="p-3 border-b border-slate-200 font-bold w-1/4">Test</th>
                                <th className="p-3 border-b border-slate-200 font-bold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 text-sm">
                            <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Thematic Apperception Test (TAT)</td>
                                <td className="p-4">
                                    <p>Also known as the Picture Story writing test.</p>
                                    <ul className="list-disc list-inside space-y-1 mt-1">
                                        <li>11 pictures shown (30 sec each).</li>
                                        <li>4 minutes to write a story for each.</li>
                                        <li>12th slide is blank for candidate's own story.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Word Association Test (WAT)</td>
                                <td className="p-4">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>60 words displayed sequentially (15 sec each).</li>
                                        <li>Candidates write the first idea/concept that comes to mind.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Situation Reaction Test (SRT)</td>
                                <td className="p-4">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Booklet with 60 written situations provided.</li>
                                        <li>Candidates must address all 60 situations within 30 minutes.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 align-top font-semibold">Self-Description Test (SD)</td>
                                <td className="p-4">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>15 minutes to write 5 paragraphs.</li>
                                        <li>Topics: Opinions of parents, friends, teachers, superiors, and self-opinion.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>

              {/* Stage II - Day 3 */}
              <div className="mb-8 overflow-hidden rounded-lg border border-slate-200">
                  <div className="bg-slate-800 text-white p-4 font-bold text-lg">Stage II - Day 3: Group Testing Officer (GTO) Tasks</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-100 text-slate-700">
                            <tr>
                                <th className="p-3 border-b border-slate-200 font-bold w-1/4">Task</th>
                                <th className="p-3 border-b border-slate-200 font-bold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 text-sm">
                            <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Group Discussion</td>
                                <td className="p-4">
                                    <p>Discussion on current events/scenarios (20 mins). Assessing participation and perspective.</p>
                                </td>
                            </tr>
                             <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Group Planning Exercise</td>
                                <td className="p-4">
                                    <p>Practical situation given. Candidates must develop a written strategy and reach a group conclusion (20 mins).</p>
                                </td>
                            </tr>
                             <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Progressive Group Task (PGT)</td>
                                <td className="p-4">
                                    <p>First outdoor task. Group clears 4 obstacles of increasing difficulty using ropes, planks, etc. (40-50 mins).</p>
                                </td>
                            </tr>
                             <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Half Group Task</td>
                                <td className="p-4">
                                    <p>Group size reduced by half. Similar to PGT but gives more opportunity to showcase leadership.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 align-top font-semibold">Lecturette</td>
                                <td className="p-4">
                                    <p>Individual presentation (3 mins) on a chosen topic from a set of four. Tests self-assurance and speaking skills.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>

               {/* Stage II - Day 4 */}
              <div className="mb-8 overflow-hidden rounded-lg border border-slate-200">
                  <div className="bg-slate-800 text-white p-4 font-bold text-lg">Stage II - Day 4: GTO Tasks & Interview</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-100 text-slate-700">
                            <tr>
                                <th className="p-3 border-b border-slate-200 font-bold w-1/4">Task</th>
                                <th className="p-3 border-b border-slate-200 font-bold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 text-sm">
                            <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Individual Obstacles</td>
                                <td className="p-4">
                                    <p>10 obstacles to be cleared individually (3 mins). Points assigned (1-10) per obstacle.</p>
                                </td>
                            </tr>
                             <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Group Obstacle Race (Snake Race)</td>
                                <td className="p-4">
                                    <p>Groups race through 6 obstacles while carrying a rolled-up tent (snake).</p>
                                </td>
                            </tr>
                             <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Command Task</td>
                                <td className="p-4">
                                    <p>Candidate acts as commander, chooses 2-3 subordinates, and clears an obstacle with resources.</p>
                                </td>
                            </tr>
                             <tr className="border-b border-slate-200">
                                <td className="p-4 align-top font-semibold">Final Group Task</td>
                                <td className="p-4">
                                    <p>Similar to PGT, single obstacle. Group uses assisting materials (fatta, ball, ropes, etc.) to clear it (15-20 mins).</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 align-top font-semibold">Candidate Interview</td>
                                <td className="p-4">
                                    <p>One-on-one interview with a recruiting officer (35-40 mins). Can happen on Day 2, 3, or 4.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>

              {/* Stage II - Day 5 */}
              <div className="mb-8 overflow-hidden rounded-lg border border-slate-200">
                  <div className="bg-slate-800 text-white p-4 font-bold text-lg">Stage II - Day 5: Conference & Results</div>
                  <div className="p-6">
                      <div className="mb-4">
                          <h4 className="font-bold text-slate-800 mb-2">Conference/Final Selection:</h4>
                          <p className="text-sm text-slate-600">
                              All board members (President, Deputy President, Psychologists, GTOs, Technical Officers) gather. The purpose is to have a final conversation with candidates, assess overall conduct, and make recommendations for officer positions.
                          </p>
                      </div>
                      <div>
                          <h4 className="font-bold text-slate-800 mb-2">Medical Examination and Result:</h4>
                          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                              <li>Results declared approx. 1 hour after the board meeting.</li>
                              <li>Selected candidates undergo 3-5 days of medical tests.</li>
                              <li>Final merit list released after successful medical examination.</li>
                          </ul>
                      </div>
                  </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SSBInterviewProcess;
