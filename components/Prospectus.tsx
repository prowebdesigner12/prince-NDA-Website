
import React from 'react';
import PageHeader from './PageHeader';

const Prospectus: React.FC = () => {
  return (
    <>
      <PageHeader
        title="NDA Prospectus"
        subtitle="View or download our detailed academy prospectus."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-6xl mx-auto bg-white p-2 rounded-lg shadow-lg border border-slate-200 -mt-32 relative h-[80vh]">
              <iframe 
                src="https://princendaacademy.com/images/NDA-Prospectus.pdf" 
                className="w-full h-full rounded"
                title="NDA Prospectus"
              >
                  <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <p className="text-slate-600">This browser does not support embedding PDFs.</p>
                      <a href="https://princendaacademy.com/images/NDA-Prospectus.pdf" className="text-red-600 font-bold underline">Download the PDF to view it</a>
                  </div>
              </iframe>
           </div>
           <div className="text-center mt-8">
              <a 
                href="https://princendaacademy.com/images/NDA-Prospectus.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Download Prospectus PDF
              </a>
           </div>
        </div>
      </section>
    </>
  );
};

export default Prospectus;
