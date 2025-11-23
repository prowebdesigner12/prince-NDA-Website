
import React from 'react';
import PageHeader from './PageHeader';

const MD: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Managing Director's Desk"
        subtitle="Guidance from our distinguished Managing Director."
      />
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            
             {/* Image Section - Visible on all screens */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
               <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
                   <img 
                       src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800" 
                       alt="Brig Bharat Bhushan Janu (Retd)" 
                       className="w-full h-auto object-cover"
                   />
                   <div className="bg-slate-900 text-white p-4 text-center">
                        <h3 className="text-xl font-bold font-serif">Brig Bharat Bhushan Janu (Retd)</h3>
                        <p className="text-red-500 font-bold uppercase text-xs tracking-widest mt-1">Patron</p>
                   </div>
               </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-7/12">
               <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-4 border-red-600 inline-block pb-2">
                   Managing Director's Desk
               </h2>
               
               <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                   <h3 className="font-bold text-xl text-slate-900">Dear Parents and Students !</h3>
                   
                   <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600 shadow-sm">
                        <p className="italic font-medium text-slate-800">
                            "Give me a boy and I will give you a young man capable of leadership role. It will be my team’s endeavor to maintain highest quality of professionalism, zeal and dedication in preparing students to face NDA written exam and SSB with confidence."
                        </p>
                   </div>

                   <p>
                       I assure guardians and students of quality coaching where the focus besides being the written exam will also be on spoken English, personality build up and knowledge enhancement besides games and sports.
                   </p>
               </div>

               <div className="mt-10 pt-8 border-t border-slate-200">
                    <p className="text-2xl font-bold text-slate-900 font-serif">Brig Bharat Bhushan Janu (Retd)</p>
                    <p className="text-red-600 font-bold text-sm mt-1 uppercase tracking-wider">Patron</p>
                    <p className="text-slate-600 font-medium">Prince NDA Academy, Sikar</p>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MD;
