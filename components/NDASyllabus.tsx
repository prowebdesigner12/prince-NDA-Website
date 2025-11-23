
import React from 'react';
import PageHeader from './PageHeader';

const NDASyllabus: React.FC = () => {
  return (
    <>
      <PageHeader
        title="NDA Syllabus & Exam Pattern"
        subtitle="Latest Subject-wise Syllabus & Detailed Exam Pattern for NDA 2026"
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-10">
            
            {/* Introduction */}
            <div className="text-slate-600 leading-relaxed">
              <p className="mb-4">
                The NDA syllabus is divided into Maths and General Ability Test (GAT). A total of 120 questions are asked from the Maths section and 150 questions are there in the GAT paper. NDA GAT syllabus aims to test a candidate's basic knowledge of History, GK, Current Affairs of National and International Events, English, Science, and Geography.
              </p>
              <p className="mb-4">
                NDA Maths syllabus assesses a candidate's ability to solve Mathematical problems by applying formulas, theorems, etc. The level of the NDA syllabus is of Class 10, 11, and 12 standards. In the NDA syllabus, the GAT paper holds the maximum weightage. The total marks allotted to the GAT paper are 600. The Maths paper carries 300 marks. UPSC conducts the SSB interview for candidates who obtain the cut-off marks in the written exam.
              </p>
              <p>
                With the help of the NDA syllabus, candidates can know the important topics for the exam and plan their studies accordingly.
              </p>
            </div>

            {/* Highlights Table */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">NDA Syllabus 2026 Highlights</h3>
              <p className="mb-4 text-slate-600">Candidates can check below the highlights of the NDA syllabus 2026.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700 w-1/3">Parameters</th>
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600">
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Name of the Exam</td>
                      <td className="border border-slate-200 p-3">NDA</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Exam Conducting Body</td>
                      <td className="border border-slate-200 p-3">Union Public Service Commission</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Frequency of NDA Exam</td>
                      <td className="border border-slate-200 p-3">Two times a year (NDA 1 & NDA 2)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Selection Process</td>
                      <td className="border border-slate-200 p-3">Written Test, Intelligence & Personality Test (SSB)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Mode of exam</td>
                      <td className="border border-slate-200 p-3">Offline (Pen and Paper)</td>
                    </tr>
                     <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Negative Marking</td>
                      <td className="border border-slate-200 p-3">Mathematics: -0.83 <br/> GAT: -1.33 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Exam Duration</td>
                      <td className="border border-slate-200 p-3">Mathematics: 2 Hours 30 Minutes <br/> GAT: 2 Hours 30 Minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <h4 className="font-bold text-red-800 mb-2">Important Topics to Prepare</h4>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                    <li><strong>English:</strong> Reading Comprehension, Synonyms, Antonyms, Spotting errors, Vocabulary, Idioms and Phrases, etc.</li>
                    <li><strong>NDA Maths Syllabus:</strong> Matrices and Determinants, Sets, Venn Diagram, Trigonometry, 2D and 3D Geometry, Differential Calculus, etc.</li>
                    <li><strong>General Knowledge:</strong> History, Chemistry, Current Affairs, Art and Culture, Physics, Chemistry, Basic Science, etc.</li>
                </ul>
            </div>

            {/* Paper 1: Maths */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">NDA Syllabus for Paper 1 (Mathematics)</h3>
              <p className="text-slate-600 mb-4">
                The NDA syllabus for Paper 1 comprises topics and sub-topics from Maths. This paper carries 120 questions of Class 10, 11, and 12 standards. Candidates get 2.5 marks for each correct answer and there is also a negative marking of 0.83 marks for each incorrect answer.
              </p>
              
              <div className="overflow-x-auto mb-6">
                 <table className="w-full text-left border-collapse border border-slate-200">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Total Marks</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Total Questions</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Correct Answer</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Negative Marking</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-600">
                        <tr>
                            <td className="border border-slate-200 p-3">300 Marks</td>
                            <td className="border border-slate-200 p-3">120</td>
                            <td className="border border-slate-200 p-3">2.5 marks</td>
                            <td className="border border-slate-200 p-3">- 0.83</td>
                            <td className="border border-slate-200 p-3">2 Hours 30 Minutes</td>
                        </tr>
                    </tbody>
                 </table>
              </div>

              <h4 className="text-xl font-bold text-slate-800 mb-3">Topic-wise NDA Mathematics Syllabus</h4>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse border border-slate-200">
                    <thead>
                        <tr className="bg-slate-100">
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700 w-1/4">Topics</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Sub-Topics</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-600">
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Algebra</td>
                            <td className="border border-slate-200 p-3">Sets, Venn diagrams, De Morgan laws, Cartesian product, relation, equivalence relation. Real numbers, Complex numbers, Modulus, Cube roots, Conversion of a number in a Binary system to Decimals, and vice-versa. Arithmetic, Geometric, and Harmonic progressions. Quadratic equations, Linear inequations, Permutation and Combination, Binomial theorem, and Logarithms.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Calculus</td>
                            <td className="border border-slate-200 p-3">Concept of a real-valued function, domain, range, and graph of a function. Composite functions, one-to-one, onto, and inverse functions. The notion of limit, Standard limits, Continuity of functions. Derivative of function at a point, geometrical and physical interpretation. Derivatives of sum, product, and quotient of functions. Second-order derivatives. Increasing and decreasing functions. Application of derivatives in problems of maxima and minima.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Matrices and Determinants</td>
                            <td className="border border-slate-200 p-3">Types of matrices, operations on matrices. Determinant of a matrix, basic properties of determinants. Adjoint and inverse of a square matrix, Applications-Solution of a system of linear equations in two or three unknowns by Cramer’s rule and by Matrix Method.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Integral Calculus & Differential Equations</td>
                            <td className="border border-slate-200 p-3">Integration as inverse of differentiation, integration by substitution and by parts, standard integrals. Evaluation of definite integrals—determination of areas of plane regions bounded by curves. Definition of order and degree of a differential equation, formation of a differential equation. General and particular solutions of differential equations. Application in problems of growth and decay.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Trigonometry</td>
                            <td className="border border-slate-200 p-3">Angles and their measures in degrees and radians. Trigonometric ratios. Trigonometric identities Sum and difference formulae. Multiple and Sub-multiple angles. Inverse trigonometric functions. Applications-Height and distance, properties of triangles.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Vector Algebra</td>
                            <td className="border border-slate-200 p-3">Vectors in two and three dimensions, magnitude, and direction of a vector. Unit and null vectors, the addition of vectors, scalar multiplication of a vector, scalar product, or dot product of two vectors. Vector product or cross product of two vectors. Applications—work done by a force and moment of a force.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Analytical Geometry</td>
                            <td className="border border-slate-200 p-3">Rectangular Cartesian Coordinate system, Distance formula, Equation of a line in various forms. The angle between two lines. Distance of a point from a line. Equation of a circle in standard and in a general form. Standard forms of parabola, ellipse, and hyperbola. Eccentricity and axis of a conic. Point in a three-dimensional space. Direction Cosines and direction ratios. Equation of a plane and a line. Equation of a sphere.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold align-top">Statistics and Probability</td>
                            <td className="border border-slate-200 p-3">Probability: Random experiment, outcomes, sample space, events. Union and Intersection of events. Definition of probability—classical and statistical. Conditional probability, Bayes’ theorem. Random variable as function on a sample space. Binomial distribution.</td>
                        </tr>
                    </tbody>
                </table>
              </div>

               <h4 className="text-xl font-bold text-slate-800 mb-3">Topic-wise Distribution of Questions</h4>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 text-center">
                      <p className="font-bold text-red-600 text-lg">20-25</p>
                      <p className="text-sm text-slate-600">Calculus</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 text-center">
                      <p className="font-bold text-red-600 text-lg">20-15</p>
                      <p className="text-sm text-slate-600">Quadratic Equations</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 text-center">
                      <p className="font-bold text-red-600 text-lg">30</p>
                      <p className="text-sm text-slate-600">Matrices & Determinants</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 text-center">
                      <p className="font-bold text-red-600 text-lg">10</p>
                      <p className="text-sm text-slate-600">Probability</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 text-center">
                      <p className="font-bold text-red-600 text-lg">30</p>
                      <p className="text-sm text-slate-600">Trigonometry</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 text-center">
                      <p className="font-bold text-red-600 text-lg">10-15</p>
                      <p className="text-sm text-slate-600">Complex Numbers</p>
                  </div>
               </div>
            </div>

            {/* Paper 2: GAT */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">NDA Syllabus 2026 for Paper 2 (GAT)</h3>
              <p className="text-slate-600 mb-4">
                 NDA syllabus for Paper 2 comprises the General Ability Test (GAT) which includes the topics and sub-topics from General Knowledge (GK), English, Chemistry, Physics, Geography, General Science, and Current Events. A total of 150 questions are asked in this paper.
              </p>
              
               <div className="overflow-x-auto mb-8">
                 <table className="w-full text-left border-collapse border border-slate-200">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Section</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Questions</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Marks</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-600">
                         <tr>
                            <td className="border border-slate-200 p-3">Part A: English</td>
                            <td className="border border-slate-200 p-3">50</td>
                            <td className="border border-slate-200 p-3">200</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3">Part B: General Knowledge</td>
                            <td className="border border-slate-200 p-3">100</td>
                            <td className="border border-slate-200 p-3">400</td>
                        </tr>
                         <tr className="bg-slate-50 font-semibold">
                            <td className="border border-slate-200 p-3">Total</td>
                            <td className="border border-slate-200 p-3">150</td>
                            <td className="border border-slate-200 p-3">600</td>
                        </tr>
                    </tbody>
                 </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 {/* English */}
                 <div>
                    <h4 className="text-lg font-bold text-red-600 mb-3 border-b border-red-200 pb-1">NDA English Syllabus</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>Grammar & usage</li>
                        <li>Comprehension & cohesion</li>
                        <li>Spotting of errors</li>
                        <li>Para Jumbling</li>
                        <li>Fill in the blanks</li>
                        <li>Synonyms & Antonyms</li>
                        <li>Vocabulary & Cloze Test</li>
                        <li>Idioms & Proverbs</li>
                        <li>Sentence Correction & Improvement</li>
                    </ul>
                 </div>
                 
                 {/* Physics */}
                 <div>
                    <h4 className="text-lg font-bold text-red-600 mb-3 border-b border-red-200 pb-1">NDA Physics Syllabus (23-25 Questions)</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 h-64 overflow-y-auto pr-2 custom-scrollbar">
                        <li>Physical Properties and States of Matter</li>
                        <li>Mass, Weight, Volume, Density</li>
                        <li>Principle of Archimedes, Pressure Barometer</li>
                        <li>Motion, Velocity, Acceleration, Newton’s Laws</li>
                        <li>Force, Momentum, Gravitation</li>
                        <li>Power, Energy, Work</li>
                        <li>Heat, Temperature, Sound waves</li>
                        <li>Light: Reflection, Refraction, Mirrors, Lenses, Human Eye</li>
                        <li>Magnetism: Natural/Artificial, Earth as Magnet</li>
                        <li>Electricity: Ohm's Law, Circuits, Heating/Lighting/Magnetic effects</li>
                        <li>X-rays, Simple Pendulum, Pulleys, Levers, etc.</li>
                    </ul>
                 </div>

                 {/* Chemistry */}
                 <div>
                    <h4 className="text-lg font-bold text-red-600 mb-3 border-b border-red-200 pb-1">NDA Chemistry Syllabus</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>Preparation/Properties of Hydrogen, Oxygen, Nitrogen, CO2</li>
                        <li>Oxidation and Reduction</li>
                        <li>Acids, bases, and salts</li>
                        <li>Carbon and its forms</li>
                        <li>Fertilizers, Soap, Glass, Ink, Paper, Cement, Paints</li>
                        <li>Structure of Atom, Atomic Weights, Valency</li>
                        <li>Chemical Equations & Laws of Combination</li>
                    </ul>
                 </div>

                 {/* General Science */}
                 <div>
                    <h4 className="text-lg font-bold text-red-600 mb-3 border-b border-red-200 pb-1">General Science</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>Common Epidemics, causes, and prevention</li>
                        <li>Food: Source of Energy, Constituents, Balanced Diet</li>
                        <li>Difference between living and non-living</li>
                        <li>Growth and Reproduction in Plants and Animals</li>
                        <li>Elementary knowledge of the Human Body</li>
                        <li>Solar System, Meteors, Comets, Eclipses</li>
                    </ul>
                 </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                  {/* History */}
                  <div>
                    <h4 className="text-lg font-bold text-red-600 mb-3 border-b border-red-200 pb-1">NDA History Syllabus</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>Forces shaping the modern world; Renaissance</li>
                        <li>Indian History: Culture and Civilisation</li>
                        <li>Freedom Movement in India</li>
                        <li>French Revolution, Industrial Revolution, Russian Revolution</li>
                        <li>Indian Constitution and Administration</li>
                        <li>Five Year Plans of India, Panchayati Raj</li>
                        <li>Mahatma Gandhi's Basic Teachings</li>
                    </ul>
                  </div>

                  {/* Geography */}
                  <div>
                    <h4 className="text-lg font-bold text-red-600 mb-3 border-b border-red-200 pb-1">NDA Geography Syllabus</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>The Earth: Shape, size, movements</li>
                        <li>Latitudes, Longitudes, Time, Date Line</li>
                        <li>Origin of Earth, Rocks, Volcanoes, Earthquakes</li>
                        <li>Atmosphere, Winds, Cyclones, Humidity, Rainfall</li>
                        <li>Ocean Currents and Tides</li>
                        <li>Regional Geography of India: Climate, Vegetation, Resources</li>
                        <li>Imports and Exports of India</li>
                    </ul>
                  </div>
              </div>

               <div className="mt-8 bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="text-lg font-bold text-red-600 mb-2">UPSC NDA Current Affairs Syllabus</h4>
                    <p className="text-sm text-slate-600">
                        NDA Current Affairs syllabus includes topics based on the latest current affairs events of India as well as the world. Candidates should focus on recent developments in defence, politics, sports, awards, and international relations.
                    </p>
               </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default NDASyllabus;
