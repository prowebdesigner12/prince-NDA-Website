
import React from 'react';
import PageHeader from './PageHeader';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ image, name, role }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200 text-center p-4 transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
             <img 
                src={image} 
                alt={name} 
                loading="lazy"
                className="w-full h-full rounded-full object-cover border-4 border-slate-200 shadow-sm"
            />
        </div>
        <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight mb-2">{name}</h3>
            <p className="text-red-600 font-medium text-sm uppercase tracking-wide">{role}</p>
        </div>
    </div>
);


const OurTeam: React.FC = () => {
    // Data from the image (SSB Experts)
    const ssbExperts = [
        { name: "Brigadier B.B. Janu (Retd.)", role: "Managing Director (NDA)", image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Brigadier Jai Singh (Retd.)", role: "Managing Director (CDS)", image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Brigadier Magej Singh (Retd.)", role: "Ex. Interviewing Officer, SSB", image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Commodore Manjeet Singh (Retd.)", role: "Ex. Interviewing Officer, SSB", image: "https://images.pexels.com/photos/3777572/pexels-photo-3777572.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Commodore C.S. Azad (Retd.)", role: "Ex. Interviewing Officer, SSB", image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Col. Vir Singh Jadaun (Retd.)", role: "Ex. Principal, Sainik School", image: "https://images.pexels.com/photos/859265/pexels-photo-859265.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Col. G.S. Baidwan, SM (Retd.)", role: "Ex. Senior GTO, SSB", image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Col. Pramod Badsara (Retd.)", role: "Ex. Senior GTO, SSB", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Col. N.S. Kahlon (Retd.)", role: "Ex. Psychologist, SSB", image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Col. D.S. Cheema (Retd.)", role: "Ex. Psychologist, SSB", image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Col. Mukteshwar Prasad (Retd.)", role: "Ex. Psychologist, SSB", image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Anish Kapoor", role: "Personality Development, SSB", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400" },
    ];

    // Existing Faculty
    const facultyMembers = [
        { image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Dr. Piyush Sunda", role: "Management" },
        { image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Ramakant Swamy", role: "Management" },
        { image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=400", name: "O.P. Bhaskar", role: "SSB Trainer" },
        { image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400", name: "S.S. Rathore", role: "SSB Trainer" },
        { image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Hariom Sir", role: "English Faculty" },
        { image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=400", name: "K.K. Yadav", role: "G.K. Faculty" },
        { image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Sunil Sir", role: "Maths Faculty" },
        { image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Dharmendra Sir", role: "Physics Faculty" },
    ];

  return (
    <>
      <PageHeader
        title="Meet Our Experienced Faculty & Dedicated Team"
        subtitle="Meet the experienced mentors who are the backbone of our academy's success."
      />
      
      {/* Banner Section from Image */}
      <section className="bg-slate-900 py-16 text-center border-b border-slate-800">
          <div className="container mx-auto px-4">
               <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                  SSB Coaching for NDA, TES, CDS, AFCAT, NCC Special Entry, TGC, ACC, SCO, SL by Retired Experts of SSB
               </h2>
               <div className="inline-block relative">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row items-center justify-center gap-4">
                        <span>A Team of</span>
                        <div className="relative">
                            <span className="relative z-10 bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl shadow-lg border-4 border-white/20">11</span>
                        </div>
                        <span className="text-yellow-400 drop-shadow-lg">Brigadiers & Col. Ranks Officers</span>
                    </h1>
               </div>
          </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center">
             <h3 className="text-3xl font-bold text-slate-800 mb-4">SSB Expert Panel</h3>
             <div className="w-24 h-1 bg-red-600 mx-auto rounded"></div>
             <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Our distinguished panel of retired officers providing unparalleled guidance for SSB interviews.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
              {ssbExperts.map((member, index) => (
                  <TeamMemberCard key={`ssb-${index}`} {...member} />
              ))}
          </div>
          
           <div className="mb-12 text-center">
             <h3 className="text-3xl font-bold text-slate-800 mb-4">Academic Faculty & Management</h3>
             <div className="w-24 h-1 bg-red-600 mx-auto rounded"></div>
             <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Dedicated educators and management professionals committed to academic excellence.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {facultyMembers.map((member, index) => (
                  <TeamMemberCard key={`faculty-${index}`} {...member} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
