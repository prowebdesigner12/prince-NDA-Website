
import React from 'react';

interface TeamMemberCardProps {
    image: string;
    name: string;
    role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, role }) => (
    <div className="bg-slate-800 rounded-lg text-center shadow-lg w-48 flex-shrink-0 mx-4 border-b-4 border-red-600 group transform hover:-translate-y-2 transition-transform duration-300">
        <div className="w-full h-44 bg-slate-700 rounded-t-lg overflow-hidden">
           <img src={image} alt={name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="p-3">
            <h3 className="font-bold text-white text-sm leading-tight">{name}</h3>
            <p className="text-xs text-slate-400 mt-1">{role}</p>
        </div>
    </div>
);

interface SSBTeamProps {
  navigateTo: (page: string) => void;
}

const SSBTeam: React.FC<SSBTeamProps> = ({ navigateTo }) => {
    const team = [
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
    
    const duplicatedTeam = [...team, ...team, ...team];

    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-lg font-medium text-slate-300">
                    SSB Coaching for NDA, TES, CDS, AFCAT, NCC Special Entry, TGC, ACC, SCO, SI by Retired Experts of SSB
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-12 flex items-center justify-center flex-wrap gap-x-3 gap-y-2">
                    A Team of
                    <span className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center text-4xl font-bold mx-2 shadow-lg">11</span>
                    <span className="text-yellow-400">Brigadiers &amp; Col. Ranks Officers</span>
                </h1>
            </div>
            <div className="mt-8 group">
                <div className="flex animate-scroll-x-long group-hover:[animation-play-state:paused]">
                    {duplicatedTeam.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
            <div className="text-center mt-12">
                <button onClick={() => navigateTo('our-team')} className="text-white bg-red-600 hover:bg-red-700 font-semibold rounded-lg text-base px-8 py-3.5 text-center transform hover:scale-105 transition-transform">
                    View All Team Members
                </button>
            </div>
        </section>
    );
};

export default SSBTeam;
