
import React from 'react';
import PageHeader from './PageHeader';

const SSBSyllabus: React.FC = () => {
  return (
    <>
      <PageHeader
        title="NDA SSB Syllabus"
        subtitle="Detailed NDA Interview Process & Pattern"
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-10">
            
            {/* Intro */}
            <div className="text-slate-600 leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">SSB Interview</h3>
              <p className="mb-4">
                SSB Interview is conducted in two stages. The details regarding the stages are explained below:
              </p>
            </div>

            {/* Stages Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="text-xl font-bold text-red-600 mb-3 border-b border-red-200 pb-2">Stage 1</h4>
                    <p className="text-slate-700 font-medium mb-2">Screening Test</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>Verbal Tests</li>
                        <li>Non-verbal Tests</li>
                        <li>Picture Perception & Description Test (PPDT)</li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h4 className="text-xl font-bold text-red-600 mb-3 border-b border-red-200 pb-2">Stage 2</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-slate-700 font-medium mb-1">Psychological Test</p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Comprises Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self Description Test (SD).
                            </p>
                        </div>
                        <div>
                            <p className="text-slate-700 font-medium mb-1">Group Testing Officers (GTO) Test</p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Comprises GD, GPE, PGT, HGT, IOT, Command Task, Snake race/Group Obstacle Race, Individual lecture and FGT.
                            </p>
                        </div>
                         <div>
                            <p className="text-slate-700 font-medium mb-1">Final Phase</p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Personal Interview & Conference.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* OIR Syllabus */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">NDA Syllabus for Officer Intelligence Rating (OIR)</h3>
              <p className="text-slate-600 mb-6">
                 The syllabus for OIR is divided into Verbal and Non-Verbal reasoning tests. Below are the key topics covered:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                  {/* Verbal */}
                  <div>
                      <div className="bg-slate-800 text-white p-3 rounded-t-lg font-bold text-center">Verbal Test Syllabus</div>
                      <div className="bg-white border-x border-b border-slate-200 p-4 rounded-b-lg shadow-sm">
                          <ul className="grid grid-cols-1 gap-2 text-sm text-slate-700">
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Completion of Series</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Blood Relation</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Shorter and Taller Problems</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Jumbled Words</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Coding-Decoding</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>One word Substitution</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Problem on Ranks</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Interchanging 2 signs</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Identification of letters</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Reconstruction of test</li>
                          </ul>
                      </div>
                  </div>

                  {/* Non-Verbal */}
                  <div>
                      <div className="bg-slate-800 text-white p-3 rounded-t-lg font-bold text-center">Non-Verbal Test Syllabus</div>
                      <div className="bg-white border-x border-b border-slate-200 p-4 rounded-b-lg shadow-sm">
                          <ul className="grid grid-cols-1 gap-2 text-sm text-slate-700">
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Figures</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Analogies</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Figure Matrix</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Locating Hidden Figure</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Logical Venn Diagram</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Odd one out</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Classification of data</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Paper Cutting</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Problem on Dice</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Problem on Cubes</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Visualizing Patterns</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Spatial Ability</li>
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

export default SSBSyllabus;
