
import React from 'react';
import { AcademicCapIcon, UsersIcon, UsersIconV2, GlobeAltIcon, ShieldIcon, BookOpenIcon, StarIcon, MountainIcon, DumbbellIcon, VideoCameraIcon, TargetIcon } from './icons';
import PageHeader from './PageHeader';

const FeaturePoint: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({icon, title, children}) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-start space-x-4 h-full shadow-sm hover:border-red-600 transition-colors duration-300">
        <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-red-600">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">{children}</p>
        </div>
    </div>
);

const WhyNDA: React.FC = () => {
  const features = [
      {
          icon: <UsersIcon />,
          title: "Get trained by ex SSB experts",
          description: "Get professionally trained by the experts (Ex Defence Officers Who Have Been Assessors In The SSB)."
      },
      {
          icon: <AcademicCapIcon />,
          title: "UPSC written exam preparation",
          description: "Expert faculty for UPSC written examination both mathematics and general ability. Mock tests are regularly conducted to analyze the performance."
      },
      {
          icon: <MountainIcon />,
          title: "Actual Obstacle Course",
          description: "GTO obstacle course and individual obstacles laid out on the lines as would be found in an actual SSB venue. This is with a view to give our candidates a unique and exclusive hands on practice in the outdoor tasks."
      },
      {
          icon: <DumbbellIcon />,
          title: "Sports & Character",
          description: "Sports do not build characters. They reveal it! Fully equipped Football ground, Volleyball ground and vast open grounds to encourage fitness among candidates as endurance and stamina are a pre-requisite for a success at the SSB."
      },
      {
          icon: <BookOpenIcon />,
          title: "Up to date study material",
          description: "Required study materials for CBSE exams, UPSC written exam, personality development quiz, current affair articles and static GK material is circulated in advance."
      },
      {
          icon: <UsersIconV2 />,
          title: "Multi modal expert availability",
          description: "Active counseling and guidance is provided on continuous basis for clearing of doubts and personal guidance to develop positive winning attitude."
      },
      {
          icon: <StarIcon />,
          title: "Discipline in daily life",
          description: "Talent without discipline is like an octopus on roller skates. There’s plenty of movement, but you never know if it’s going forward, backwards, or sideways. That is why Discipline is given utmost importance and daily schedule is kept close to best practices adopted in our defence forces."
      },
      {
          icon: <VideoCameraIcon />,
          title: "Digital world ready",
          description: "Faculty and experts make use of Animation, Power Point, Videos etc to make delivery of lecture and study material more interesting. Uniquely designed Audio Video rooms for watching documentaries and English News Debates under expert supervision."
      },
      {
          icon: <ShieldIcon />,
          title: "Exquisite Accommodation",
          description: "The Academy provides comfortable boarding and lodging including complete bedding with modern amenities for outstation candidates. The food is wholesome."
      },
      {
          icon: <TargetIcon />,
          title: "Continuous Assessment",
          description: "Regular assessments done to track performance, mock interviews by experts, proper feedbacks provided and corrective measures taken to bring the best out of a candidate."
      }
  ];

  return (
    <>
      <PageHeader
        title="Why Prince NDA Academy?"
        subtitle="Discover the advantages that make us the leading choice for NDA aspirants."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200 -mt-32 relative mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800">
                        Prince NDA Academy is one of the best NDA coaching institutes across PAN India.
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        We are focused on discipline, well balanced, realistic and practical approach for overall growth of an aspirant so that the he/she get phenomenal opportunities by achieving their maximum potential in life.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        The path to success is hard work as there is no shortcut to success. We at Prince NDA Academy are committed for your bright future. Your decision today will decide your tomorrow, so take the correct decision. Give your career the right start and join Prince NDA Academy.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <FeaturePoint key={index} icon={feature.icon} title={feature.title}>
                        {feature.description}
                    </FeaturePoint>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default WhyNDA;
