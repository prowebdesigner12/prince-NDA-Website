
import React from 'react';
import PageHeader from './PageHeader';

const PreFoundation: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Pre-Foundation Course"
        subtitle="For Class 8th, 9th & 10th Studying Students"
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative">
            <div className="text-slate-600 leading-relaxed space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Pre-Foundation Program for Early NDA Preparation</h3>
              <p>
                Prince Sainik School brings NDA Foundation Course for these passed students. Under this program, we aim to help each and every student crack the written examination of NDA. With the help of NCERT books, candidates can take their skills and knowledge to the next level and increase their chances to crack the exam in the first attempt.
              </p>
              <p>
                Whether it is an Indian Navy, Air Force, or Army, our primary concern is to assist every student and prepare them for defence exams, especially NDA. We strive to build a bright future of students by providing excellent classroom sessions. Sainik School provides NDA foundation course to master the fundamentals as well as tricks to solve the problems using effective techniques and strategies.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-800 pt-4 pb-2">Subjects Covered</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Mathematics:</strong> Comprehensive coverage to build strong problem-solving skills.</li>
                <li><strong>Science (Physics, Chemistry, Biology):</strong> In-depth understanding of concepts with a practical approach.</li>
                <li><strong>English:</strong> Focus on grammar, vocabulary, and communication skills.</li>
                <li><strong>Social Science:</strong> Building a strong base in History, Geography, and Civics.</li>
                <li><strong>Mental Ability:</strong> Developing logical reasoning and aptitude skills.</li>
              </ul>
              <h3 className="text-2xl font-bold text-slate-800 pt-4 pb-2">Eligibility</h3>
              <p>
                Students who are currently studying in Class 8th, 9th, or 10th are eligible to enroll in this course. It is the perfect starting point for those who dream of joining the armed forces and want an early start to their preparation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreFoundation;
