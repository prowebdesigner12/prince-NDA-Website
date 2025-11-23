
import React from 'react';

interface Topper {
  image: string;
  name?: string;
  rank?: string;
  academy?: string;
}

const toppers: Topper[] = [
    {
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Aman Singh',
      rank: 'AIR 17',
      academy: 'National Defence Academy',
    },
    {
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Priya Sharma',
      rank: 'AIR 23',
      academy: 'Indian Naval Academy',
    },
    {
      image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Rohan Verma',
      rank: 'AIR 31',
      academy: 'Indian Military Academy',
    },
    {
      image: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Sneha Gupta',
      rank: 'AIR 45',
      academy: 'Air Force Academy',
    },
    {
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Vikram Rathore',
      rank: 'AIR 52',
      academy: 'Indian Military Academy',
    },
    {
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Anjali Mehta',
      rank: 'AIR 68',
      academy: 'Air Force Academy',
    },
    { image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const TopperCard: React.FC<{ topper: Topper }> = ({ topper }) => {
    return (
        <div className="topper-card mx-4 group">
            <img src={topper.image} alt={topper.name || 'Topper'} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
            {topper.rank && (
                <div className="rank-badge">
                    <span className="text-xs">{topper.rank.split(' ')[0]}</span>
                    <span className="text-2xl font-bold">{topper.rank.split(' ')[1]}</span>
                </div>
            )}
            {topper.name && (
                <div className="topper-overlay">
                    <div className="details">
                        <p className="name">{topper.name}</p>
                        <p className="academy">{topper.academy}</p>
                    </div>
                </div>
            )}
        </div>
    );
};


const Toppers: React.FC = () => {
    const duplicatedToppers = [...toppers, ...toppers];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Achievers</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Meet the proud cadets who have made their mark and achieved their dreams through our guidance.
                    </p>
                </div>
            </div>
            <div className="mt-16 relative group">
                <div className="flex animate-scroll-x group-hover:[animation-play-state:paused]">
                    {duplicatedToppers.map((topper, index) => (
                        <TopperCard key={index} topper={topper} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Toppers;