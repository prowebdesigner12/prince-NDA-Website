
import React from 'react';
import PageHeader from './PageHeader';

interface ActivityItemProps {
  image: string;
  title: string;
  description: string;
  imageLeft: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ image, title, description, imageLeft }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${!imageLeft && 'md:flex-row-reverse'}`}>
    <div className="md:w-1/2">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="rounded-lg shadow-lg w-full h-auto aspect-video object-cover"
      />
    </div>
    <div className="md:w-1/2">
      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Activities: React.FC = () => {
  const activitiesList = [
    {
      image: "https://images.pexels.com/photos/8549925/pexels-photo-8549925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "SSB GROUND",
      description: "We have a vast SSB ground with all the obstacles as per the SSB standards. The candidates are trained by the experts on these obstacles to make them proficient and confident."
    },
    {
      image: "https://images.pexels.com/photos/7979105/pexels-photo-7979105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "PHYSICAL TRAINING",
      description: "Physical fitness is the most important aspect for a defence aspirant. We have a well-equipped gymnasium and experienced trainers to help the candidates in their physical development."
    },
    {
      image: "https://images.pexels.com/photos/164193/pexels-photo-164193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "HORSE RIDING",
      description: "Horse riding is an integral part of the training at NDA. We have a team of trained horses and experienced instructors to teach the candidates the basics of horse riding."
    },
    {
      image: "https://images.pexels.com/photos/8199732/pexels-photo-8199732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "OBSTACLE TRAINING",
      description: "Obstacle training is an important part of the GTO tasks in the SSB interview. We have all the obstacles as per the SSB standards to train the candidates."
    },
    {
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "SWIMMING",
      description: "Swimming is a very important part of the training in the armed forces. We have a well-maintained swimming pool with trained instructors to teach the candidates swimming."
    },
    {
      image: "https://images.pexels.com/photos/531445/pexels-photo-531445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "DRILL & PARADE",
      description: "Drill and parade are the basics of military life. We have experienced instructors to teach the candidates the basics of drill and parade."
    },
    {
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "MOTIVATIONAL LECTURES",
      description: "We arrange motivational lectures by the serving and retired officers of the armed forces to motivate the candidates and to give them an insight into the life in the armed forces."
    },
    {
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "GROUP DISCUSSION",
      description: "Group discussion is an important part of the SSB interview. We conduct regular group discussions on various topics to improve the communication skills of the candidates."
    },
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "PERSONALITY DEVELOPMENT",
      description: "We conduct personality development classes to improve the overall personality of the candidates. The classes include public speaking, communication skills, and other aspects of personality development."
    },
    {
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "CULTURAL EVENTS",
      description: "We organize various cultural events to provide a platform to the candidates to showcase their talent. The events include singing, dancing, and other cultural activities."
    }
  ];

  return (
    <>
      <PageHeader
        title="Our Activities"
        subtitle="Explore the wide range of activities that shape our cadets into well-rounded individuals."
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {activitiesList.map((activity, index) => (
              <ActivityItem
                key={index}
                {...activity}
                imageLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;