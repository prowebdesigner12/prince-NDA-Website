
import React from 'react';
import PageHeader from './PageHeader';

const NDAEligibility: React.FC = () => {
  return (
    <>
      <PageHeader
        title="NDA Eligibility Criteria"
        subtitle="Comprehensive guide to Age, Education & Physical Standards for NDA 2026"
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-10">
            
            {/* Introduction */}
            <div className="text-slate-600 leading-relaxed">
              <p className="mb-4">
                Union Public Service Commission (UPSC) has released NDA 1 2026 eligibility criteria. According to NDA eligibility criteria, female and male candidates who have completed their Class 12 or equivalent can apply for the exam. Unmarried male and female candidates are eligible to apply for NDA 1 2026 exam.
              </p>
              <p className="mb-4">
                The eligibility highlights certain parameters in terms of NDA age limit, educational qualification, and physical and medical standards. Candidates applying for the exam must read NDA eligibility to ascertain whether they are eligible for the exam or not. The candidature of candidates might get canceled at any stage of the recruitment process if they do not fulfill NDA exam eligibility.
              </p>
              <p>
                NDA eligibility is one of the main factors to go through before applying for the NDA exam. To remain in the recruitment process, candidates must fit into all the NDA requirements.
              </p>
            </div>

            {/* What is Eligibility */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">What is Eligibility for NDA Exam 2026</h3>
              <p className="text-slate-600 mb-4">
                National Defence Academy eligibility is specified by UPSC in the official notification. The male and female eligibility criteria include factors such as nationality, NDA age limit, NDA qualification, NDA physical test, and medical standards.
              </p>
              <ul className="list-disc list-inside text-slate-700 font-medium space-y-1 bg-slate-50 p-4 rounded-lg">
                <li>NDA Age Limit, Marital Status and Gender</li>
                <li>Citizenship/Nationality</li>
                <li>NDA Qualification</li>
                <li>NDA Physical Test/ Medical Qualification</li>
              </ul>
            </div>

            {/* Highlights Table */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">NDA Eligibility 2026 Highlights</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700 w-1/3">Particulars</th>
                      <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600">
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Name of the Exam</td>
                      <td className="border border-slate-200 p-3">NDA</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Conducting Body</td>
                      <td className="border border-slate-200 p-3">Union Public Service Commission</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Post</td>
                      <td className="border border-slate-200 p-3">Lieutenant</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Gender and Marital Status</td>
                      <td className="border border-slate-200 p-3">Unmarried: Female and Male</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">NDA Age Limit</td>
                      <td className="border border-slate-200 p-3">16.5 to 19.5 years</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">NDA Qualification</td>
                      <td className="border border-slate-200 p-3">
                        <span className="font-semibold block mb-1">Army Wing:</span> Passed or appeared in Class 12<br/>
                        <span className="font-semibold block mt-2 mb-1">Air Force and Naval Wings:</span> Passed or appearing in Class 12. Candidates must have studied Physics, Chemistry, and Mathematics in Class 12
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">NDA Physical Test</td>
                      <td className="border border-slate-200 p-3">Eligibility measured as per height, weight and medical standards</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-semibold">Selection Process</td>
                      <td className="border border-slate-200 p-3">Written exam and SSB Interview</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Age Limit Details */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Age Limit & Criteria</h3>
              <div className="text-slate-600 space-y-3">
                <p>According to NDA eligibility criteria, only unmarried male and female aspirants aged between 16.5 and 19.5 are eligible to apply for NDA.</p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 space-y-2">
                    <p><strong>NDA 1 Age Limit:</strong> Candidates should be born not earlier than July 2, 2005, and not later than July 1, 2008.</p>
                    <p><strong>NDA 2 Age Limit:</strong> Candidates must have been born not earlier than January 2, 2004, and not later than January 1, 2007.</p>
                </div>
                <p className="mt-2"><strong>NDA Age Limit For Girls:</strong> The age limit for girls is the same as the male candidates (16.5 to 19.5 years).</p>
              </div>
            </div>

            {/* Educational Qualification */}
            <div>
               <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Educational Qualification</h3>
               <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-200">
                    <thead>
                        <tr className="bg-slate-100">
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700 w-1/3">Wing</th>
                            <th className="border border-slate-200 p-3 font-bold text-sm text-slate-700">Qualification</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-600">
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold">Army Wing</td>
                            <td className="border border-slate-200 p-3">Passed Class 12 or equivalent examination.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 p-3 font-semibold">Air Force, Naval Wings and INA Cadet Entry</td>
                            <td className="border border-slate-200 p-3">Passed Class 12 or equivalent examination with <strong>Physics, Chemistry, and Mathematics</strong>.</td>
                        </tr>
                    </tbody>
                </table>
               </div>
               <p className="text-sm text-slate-500 mt-2 italic">Note: Candidates who are appearing in Class 12 or equivalent examination can also apply.</p>
            </div>

             {/* Nationality */}
             <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Nationality and Marital Status</h3>
                <div className="text-slate-600 space-y-4">
                    <p><strong>Marital Status:</strong> Only unmarried male and female candidates can apply. Candidates must not marry until they complete their training.</p>
                    <p><strong>Nationality:</strong> To apply for NDA, candidates must be:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>A citizen of India</li>
                        <li>A subject of Nepal or Bhutan</li>
                        <li>A Tibetan refugee who came over to India before January 1, 1962, to permanently settle in India</li>
                        <li>A person of Indian origin migrated from Pakistan, Burma, Sri Lanka, East African Countries (Kenya, Uganda, Tanzania, Zambia, Malawi, Zaire, Ethiopia) or Vietnam with intention to permanently settle.</li>
                    </ul>
                </div>
            </div>

            {/* Physical Standards */}
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Physical Standards (Height & Weight)</h3>
                <div className="text-slate-600 space-y-3">
                    <p>Candidates must be physically fit according to the physical and medical standards of NDA eligibility.</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Army:</strong> Minimum height prescribed is 157 cm.</li>
                        <li><strong>Air Force:</strong> Minimum height is 162.5 cm.</li>
                        <li><strong>Female Candidates:</strong> Minimum height is 157 cm.</li>
                        <li><strong>Gorkhas/North-East/Garhwal/Kumaon:</strong> Minimum height will be 5 cm less.</li>
                        <li><strong>Lakshadweep candidates:</strong> Minimum height standard is reduced by 2 cm.</li>
                    </ul>
                    <div className="bg-slate-50 p-4 rounded mt-2">
                        <h4 className="font-bold text-slate-800 mb-2">For Pilot Aspirants:</h4>
                        <ul className="list-disc list-inside text-sm">
                            <li>Leg Length: Min 99 cm, Max 120 cm</li>
                            <li>Thigh Length: Max 64 cm</li>
                            <li>Sitting Height: Min 81.50 cm, Max 96 cm</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Medical Standards */}
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Medical Standards</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-red-600 mb-2">Visual Standards</h4>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                            <li>Distance vision (corrected): 6/6 in better eye, 6/9 in worse eye.</li>
                            <li>Myopia not more than 2.5 D.</li>
                            <li>Hypermetropia not more than 3.5 D.</li>
                            <li>Air Force candidates must not wear spectacles.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-red-600 mb-2">Common Rejection Reasons (Minor Conditions)</h4>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                            <li>Wax (Ears), Deviated Nasal Septum</li>
                            <li>Hydrocele / Phimosis</li>
                            <li>Overweight / Underweight</li>
                            <li>Under Sized Chest</li>
                            <li>Piles, Tonsillitis, Gynaecomastia, Varicocele</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="font-bold text-slate-800 mb-2">Tattoos Policy</h4>
                    <p className="text-sm text-slate-600">Permanent body tattoos are only allowed on the <strong>inner side of the forearm</strong>. Tattoos on the inside of the elbow to the wrist and on the reverse side of the palm/back are NOT accepted. Tribal tattoos may be accepted based on traditions.</p>
                </div>
                 
                 <div className="mt-6">
                    <h4 className="font-bold text-slate-800 mb-2">General Medical Conditions</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 columns-1 md:columns-2 gap-4">
                        <li>No symptoms of weak constitution or bodily defects.</li>
                        <li>Well-developed chest and good bone/joint function.</li>
                        <li>No history of medical breakdown or fits.</li>
                        <li>Normal hearing and no speech impediment.</li>
                        <li>Normal BP, no heart/blood vessel disease.</li>
                        <li>No liver/spleen enlargement.</li>
                        <li>No skin diseases or urine abnormalities.</li>
                        <li>Sufficient number of natural and sound teeth.</li>
                        <li>No spinal diseases like Arthritis, Spondylosis, Scoliosis (greater than 15 degrees), etc.</li>
                    </ul>
                </div>
            </div>

            {/* Women Medical Standards */}
            <div>
                 <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Medical Standards for Women</h3>
                 <div className="text-slate-600 text-sm space-y-3">
                    <p>The general principles are the same, but with specific gynaeological standards:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Detailed menstrual, gynecological, and obstetric history required.</li>
                        <li>Examination by a Lady Medical Officer/Gynecologist.</li>
                        <li>USG abdomen and pelvis is mandatory.</li>
                        <li><strong>Unfit Conditions:</strong> Primary/secondary amenorrhoea, Severe Menorrhagia, Pregnancy, Complex ovarian cyst, Endometriosis, Fibroids, etc.</li>
                        <li><strong>Fit Conditions:</strong> Unilocular clear ovarian cyst up to 6 cm, Minimal fluid in pouch of Douglas.</li>
                    </ul>
                 </div>
            </div>

            {/* Ineligibility */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold text-red-700 mb-4">Ineligibility Criteria</h3>
                <p className="mb-2 text-slate-700">Candidates will be rejected if:</p>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                    <li>They are married.</li>
                    <li>They have resigned on disciplinary grounds during training.</li>
                    <li>They failed PABT/CPSS exam earlier (for Air Force).</li>
                    <li>They are debarred by the Defence Ministry.</li>
                    <li>They are currently studying in Class 11.</li>
                </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default NDAEligibility;
