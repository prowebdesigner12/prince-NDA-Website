
import React from 'react';

interface CTAProps {
  navigateTo: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ navigateTo }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-slate-900 rounded-2xl p-12 text-center overflow-hidden">
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
              Join thousands of successful cadets and take the first step towards a prestigious career in the defence forces.
            </p>
            <button
              onClick={() => navigateTo('online-admission')} 
              className="mt-8 bg-red-600 text-white hover:bg-red-700 font-bold rounded-lg text-base px-8 py-3.5 text-center transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;