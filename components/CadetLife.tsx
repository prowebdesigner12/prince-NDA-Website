
import React from 'react';
import PageHeader from './PageHeader';

const CadetLife: React.FC = () => {
    const images = [
        "https://images.pexels.com/photos/1327009/pexels-photo-1327009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7893962/pexels-photo-7893962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5859345/pexels-photo-5859345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7979105/pexels-photo-7979105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/8199732/pexels-photo-8199732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/531445/pexels-photo-531445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

  return (
    <>
      <PageHeader
        title="Life at Prince NDA Academy"
        subtitle="A glimpse into the disciplined, challenging, and rewarding life of a cadet at our academy."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 mb-12 -mt-32 relative">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Cadet's Life here @Prince NDA Academy</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                  We, at Prince NDA Academy, are committed to providing a disciplined and focused lifestyle at our campus. There are a variety of extra-curricular and curricular activities, with a focus on academics throughout the day to achieve the full potential of aspirants to grow in life.
              </p>
              <p className="text-slate-600 leading-relaxed">
                  We have highly dedicated instructors and teachers focused on the discipline and personality development of aspirants. We organize various motivational classes by experts to guide and support aspirants.
              </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <img 
                          src={src} 
                          alt={`Cadet life ${index + 1}`} 
                          loading="lazy"
                          className="w-full h-full object-cover aspect-video transform hover:scale-110 transition-transform duration-500"
                      />
                  </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CadetLife;
