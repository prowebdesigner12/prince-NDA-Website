
import React from 'react';
import { AwardIcon, UsersIcon, AcademicCapIcon, TargetIcon, DumbbellIcon } from './icons';

const WhyBestNDA: React.FC = () => {
  const reasons = [
    {
      title: "Among Top Ranked/Rated NDA Training Academy Across India",
      description: "SSB Centres recognize you as a part of Prince NDA legacy as a result of quality cadets delivered by this premier institute to defence forces year after year. Being a cadet of Prince NDA academy, you are assumed to be the perfect officer-like material after undergoing thorough training in academics & SSB interview (mock interviews and genuine regular feedback).",
      icon: <AwardIcon />
    },
    {
      title: "Experience",
      description: "The professional team of management, faculty members and retired senior defence officers having ample of service & training experience along with being part of SSB interviewing panel for years under their belt to help you get cognizant of everything.",
      icon: <UsersIcon />
    },
    {
      title: "World Class Pedagogy",
      description: "Our well qualified & highly trained faculty members bring diverse talent and enthusiasm. Faculties of Prince NDA Academy have outstanding credentials in their fields of expertise who help you develop Vision, Passion, Integrity, Connectivity and Intelligence.",
      icon: <AcademicCapIcon />
    },
    {
      title: "Unique Event/Tasks",
      description: "A set of world class and impromptu activities which include declamation, Extempore, Debate, GD, PPDT, WAT, SRT, Self-Description, Lecturettes, Speech Competition, Symposiums, Free Speeches, etc are some of the numerous individual and group tasks along with specialized Group Tasks/Obstacles specifically meant for SSB interviews undergone by students to improve their intelligence, Communication Skills, Leadership qualities to shape them as future officers of Indian Defence Forces.",
      icon: <TargetIcon />
    },
    {
      title: "Excellent Sports Environment",
      description: "A healthy mind can only reside in a healthy body. This is the idea we strongly believe in with a blend of sports right from athletics, Hockey, Handball, Football, Volleyball, Archery, Swimming, etc. Which help you build your physique, team spirit & bonding and to sharpen your intellectual skills and focus. And to help train in a game of your choice, we provide top-notch facilities and trainers to help bring the best out of you.",
      icon: <DumbbellIcon />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            How Prince Is the <span className="text-red-600">Best NDA Coaching</span> in Sikar?
          </h2>
          <div className="max-w-4xl mx-auto bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 className="text-xl font-bold text-slate-800 mb-3">The Right Choice</h3>
             <p className="text-lg text-slate-600 leading-relaxed">
                Here @ Prince NDA, we understand the importance of selecting the right academy. As Defence aspirants, it is natural for you to want the best institute for yourself because of limited attempts and feel a sense of satisfaction with your decision. We’d like to show 5 Top from numerous reasons for you to join Prince NDA Academy and make you realize why we are the right choice for you.
             </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
            {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start group">
                     <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-600 font-bold text-2xl shadow-md border-2 border-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        {index + 1}
                     </div>
                     <div className="flex-grow bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                             <div className="text-red-600 w-8 h-8 hidden md:block">{reason.icon}</div>
                             <h3 className="text-xl font-bold text-slate-900">{reason.title}</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-justify">
                            {reason.description}
                        </p>
                     </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default WhyBestNDA;
