
import React from 'react';
import PageHeader from './PageHeader';

const VisionMission: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Our Vision & Mission"
        subtitle="Guiding principles that drive our commitment to excellence."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 -mt-32 relative">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-red-600">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                We in the Prince NDA would provide the highest standards of focused training in the professional, intellectual, physical and leadership spheres as also moral and ethical grooming to cadets using innovative concepts, technologies, corporate and modern practices with a view to providing the armed forces, competent potential junior leaders with a high standard of integrity, equipped to function in the battlefield of the future and capable of leading troops to victory. We would ensure the maintenance and further enhance the infrastructure of the Academy thereby providing a suitable training environment for all existing and future requirements, simultaneously ensuring that the heritage value of the NDA is constantly kept alive and vibrant. We foster an environment that encourages individual growth, promotes welfare, enhances the quality of life for personnel to make the NDA family happy and spirited.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-red-600">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                The Prince NDA Academy will strive to be the premier joint training institution and centre of excellence all across India for producing junior leaders, for the Indian Armed Forces, in India and abroad. Our priority is to equip the candidates with the mental, moral and physical attributes required to cope with the challenges of the future battlefield and capable of leading troops to victory, in conventional and asymmetrical conflicts. For any vision to fructify, it requires a well-laid out plan of action, a mission to accomplish, and the zeal to persevere despite all odds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
