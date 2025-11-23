
import React from 'react';
import PageHeader from './PageHeader';
import Toppers from './Toppers';

const Results: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Our Results"
        subtitle="Celebrating the outstanding achievements of our students."
      />
      <section className="pt-20 pb-10 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white p-4 lg:p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center border-b pb-4">Latest Selections - NDA 2025</h3>
                <img 
                    src="https://princendaacademy.com/images/NDA2025.jpg" 
                    alt="NDA 2025 Results" 
                    className="w-full h-auto rounded-lg shadow-sm"
                />
            </div>
        </div>
      </section>
      
      {/* Reusing the Toppers carousel section to show individual achievers */}
      <Toppers />
    </>
  );
};

export default Results;
