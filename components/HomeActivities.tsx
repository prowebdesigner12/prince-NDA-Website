
import React from 'react';

interface ActivityCardProps {
  image: string;
  title: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ image, title }) => (
    <div className="relative rounded-lg overflow-hidden group shadow-lg border-2 border-transparent hover:border-red-600 transition-all duration-300">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
        <h3 className="p-4 text-xl font-bold text-white tracking-tight">{title}</h3>
      </div>
    </div>
);

interface HomeActivitiesProps {
  navigateTo: (page: string) => void;
}

const HomeActivities: React.FC<HomeActivitiesProps> = ({ navigateTo }) => {
    const activitiesList = [
        {
          image: "https://images.pexels.com/photos/8549925/pexels-photo-8549925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "SSB GROUND",
        },
        {
          image: "https://images.pexels.com/photos/7979105/pexels-photo-7979105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "PHYSICAL TRAINING",
        },
        {
          image: "https://images.pexels.com/photos/164193/pexels-photo-164193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "HORSE RIDING",
        },
        {
          image: "https://images.pexels.com/photos/8199732/pexels-photo-8199732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "OBSTACLE TRAINING",
        },
        {
          image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "SWIMMING",
        },
        {
          image: "https://images.pexels.com/photos/531445/pexels-photo-531445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "DRILL & PARADE",
        },
    ];

  return (
      <section id="activities-home" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Our Core <span className="text-red-600">Activities</span></h2>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                    We focus on holistic development through a range of rigorous and character-building activities.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {activitiesList.map((activity, index) => (
                    <ActivityCard key={index} {...activity} />
                ))}
            </div>
             <div className="text-center mt-12">
                <button onClick={() => navigateTo('activities')} className="text-white bg-red-600 hover:bg-red-700 font-semibold rounded-lg text-base px-8 py-3.5 text-center transform hover:scale-105 transition-transform">
                    View All Activities
                </button>
            </div>
        </div>
      </section>
  );
};

export default HomeActivities;