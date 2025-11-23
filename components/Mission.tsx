import React from 'react';
import { ShieldIcon, TargetIcon, AwardIcon, UsersIcon } from './icons';

interface MissionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ icon, title, description }) => (
    <div className="rounded-lg bg-white text-slate-800 shadow-sm border-2 border-slate-200 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-slate-900 rounded-full flex items-center justify-center">
                <div className="text-red-600">{icon}</div>
            </div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <p className="text-slate-500">{description}</p>
        </div>
    </div>
);


const Mission: React.FC = () => {
  const missionFeatures = [
    {
      icon: <ShieldIcon />,
      title: 'Military Excellence',
      description: 'Highest standards of military training for modern warfare',
    },
    {
      icon: <TargetIcon />,
      title: 'Leadership Development',
      description: 'Inculcating qualities of leadership and self-improvement',
    },
    {
      icon: <AwardIcon />,
      title: 'Best Results',
      description: 'Phenomenal selection stats in written exams and SSB',
    },
    {
      icon: <UsersIcon />,
      title: 'Personality Development',
      description: 'Focus on discipline, honour, integrity, and camaraderie',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Welcome to the <span className="text-red-600">Best NDA Academy in Sikar</span>
          </h2>
          <p className="text-xl text-red-600 font-semibold mb-6">Prince NDA Academy</p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We Craft Your Genius For Commissioned Officers
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 lg:p-12 mb-16 shadow-xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-red-600">Our Mission</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The mission of Service Training is to provide the highest standards of military training, keeping in view the requirements of modern-day warfare, inculcating in cadets qualities of leadership, a desire for self-improvement, and a drive to excel in every sphere.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Incorporate a culture of jointmanship in training and promote the spirit of jointmanship in thought, word, and deed. Emphasise the overall personality development of a Cadet by inculcating a sense of self-discipline, honour, integrity, camaraderie, and spirit-de-corps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionFeatures.map((feature, index) => (
                <MissionCard key={index} {...feature} />
            ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
                Prince NDA Academy is the <span className="font-bold text-red-600">best NDA coaching in Sikar</span> for officer-oriented Defence Training in India. The result stats of Prince NDA Academy are phenomenal, as we present the highest selections in written and SSB, proving Prince the<span className="font-bold text-red-600"> best SSB coaching in Sikar</span>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-6">
                This well-known academy is a one-stop destination for young aspirants of Defence services. Over the course of its journey, this academy has established a firm foothold in its category. Academy has a team of individuals who are dedicated towards their respective roles and put in a lot of effort to achieve a common vision and larger goals.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;