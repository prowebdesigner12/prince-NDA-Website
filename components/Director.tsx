
import React from 'react';
import PageHeader from './PageHeader';

const Director: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Director's Desk"
        subtitle="Inspiring words from our leadership."
      />
      <section className="py-24 bg-white relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 -z-10"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-70"></div>
         
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
             
             {/* Image */}
             <div className="lg:w-5/12 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <img 
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Jogendra Sunda" 
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-6 text-white pt-20">
                         <h3 className="text-3xl font-bold">Jogendra Sunda</h3>
                         <div className="h-1 w-12 bg-red-600 my-2"></div>
                         <p className="text-slate-200 font-medium tracking-wide uppercase text-sm">Director</p>
                    </div>
                </div>
                {/* Decorative box behind */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-red-600 rounded-2xl -z-10"></div>
             </div>

             {/* Content */}
             <div className="lg:w-7/12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 relative inline-block">
                    Dear Parents &amp; Students !
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600 rounded-full"></span>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                    <p>
                        Life poses innumerable challenges and the goal of education is to help one to successfully brave through them.
                    </p>
                    
                    <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg italic text-slate-700 font-medium">
                         "It is my strong conviction that we all grow with an innate desire to achieve a 'Dream'. Do not give up your dream, because as you continue trying, you are inching closer to it."
                    </div>

                    <p>
                        A pioneer in the field of education with rich experience of over two decades, <span className="font-bold text-slate-800">Prince NDA Academy</span> is a unique entity of Prince Edu-Hub. Prince NDA Academy has evolved a pattern of education that is in-tune with the changing needs of today’s leadership &amp; challenges.
                    </p>
                    
                    <p>
                        Our reputation for uncompromising standards with access to an abundant pool of skill, Knowledge and resources makes us an ideal and first choice for students embarking on a career in creating powerful identities of their own through NDA/NA as officers.
                    </p>
                    
                    <p className="font-medium text-slate-800 text-xl pt-2 font-serif">
                        With best wishes for bright future of the students !
                    </p>
                </div>

                <div className="mt-10 border-t border-slate-200 pt-6">
                     <p className="text-2xl font-bold text-slate-900 font-serif">Jogendra Sunda</p>
                     <p className="text-red-600 font-semibold uppercase tracking-wider text-sm mt-1">Director, Prince Education Hub</p>
                </div>
             </div>

           </div>
         </div>
      </section>
    </>
  );
};
export default Director;
