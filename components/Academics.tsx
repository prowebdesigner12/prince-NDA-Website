
import React from 'react';
import PageHeader from './PageHeader';
import { BookOpenIcon, StarIcon, VideoCameraIcon } from './icons';

const Academics: React.FC = () => {
  const academicPoints = [
    "The Prince NDA Academy is recognised by Department of Education, Govt. of Rajasthan.",
    "The school follows the Academic Curriculum as per NCERT and its directives issued from time to time."
  ];

  const coCurricularActivities = [
    {
      title: "Poem Recitation (English & Hindi)",
      description: "Reciting poem helps oneself in making speech more fluent where it becomes easy to learn quickly how to liase the words in each line, glide from one word to another without pausing."
    },
    {
      title: "Story Writing (English & Hindi)",
      description: "Story writing boosts your imagination as you create new words with your thoughts, situations, and character. It helps in stimulating your brain to ‘Think out of the box’."
    },
    {
      title: "Story Telling (English & Hindi)",
      description: "Storytelling is a contextual bridge between a play and written narrative. It helps us express ourselves through thoughts."
    },
    {
      title: "Debate (English & Hindi)",
      description: "Debate develops excellent oral and written communicational skills, develop critical thinking skills, effective tools for organizing & presentations."
    },
    {
      title: "Declamation (English & Hindi)",
      description: "Declamation provides with an opportunity to develop public speaking skills, build confidence and connect with listeners with emotions."
    },
    {
      title: "Speech Competitions (English & Hindi)",
      description: "A speech being more conversational and informative presentation helps oneself develop and build content & vocabulary."
    },
    {
      title: "School Council Activities",
      description: "Council activities ensure that a students’ opinions, concerns and ideas are heard & considered when it comes to matters that directly affect their educational, leadership and personal experience and skills."
    },
    {
      title: "Mass P.T.",
      description: "Mass P.T. helps oneself to tone up the body, improves muscle strength, boosts endurance and helps improve social adjustment and team spirit."
    },
    {
      title: "Mass Drill",
      description: "It helps a student in improving emergency preparedness, increased teamwork with synchronization and enhanced discipline which can translate into better behavior and attentiveness in classes and everywhere."
    },
    {
      title: "Obstacles (GTO Tasks)",
      description: "Before command task in SSB interviews, a candidate goes through PGT, Group Obstacle Race, HGT and individual obstacles. Here @ Prince NDA Academy, we prepare our cadets for all such group and individual tasks."
    },
    {
      title: "Celebration of Special Days",
      description: "Celebrations cultivate a sense of community, instill a sense of meaning & significance to our lives, create long lasting fond memories, add fun and excitement to our lives and connects with humanity."
    },
    {
      title: "Book Club",
      description: "Book clubs get you involved into reading, making new friends, give a different perspective, broaden your horizons and improve your writing skills."
    },
    {
      title: "Art & Craft",
      description: "Activities such as painting, clay modeling, collage making, decoration, etc develop your motor skills, boost cognitive skills, improve self-expression & self-esteem and encourage teamwork & socialization."
    },
    {
      title: "Seminars",
      description: "Seminars provide specialized knowledge from industry experts, help increase focus & intensity, increase simulations & skills, creates networking opportunities and boosts morale."
    },
    {
      title: "Yoga",
      description: "Yoga on a regular basis improves strength, balance, flexibility, heart health, improves sleep & energy levels."
    },
    {
      title: "Theater - Drama & Skit",
      description: "Drama provides command over speech and communication skills, prepares students for life’s problems, builds confidence and creativity. A skit keeps a student physically active and sharp as well as improves pronunciations and enunciation skills. Theatricals also prepare students for professional world."
    },
    {
      title: "Adorning World of Prince NDA Academy",
      description: "Cultural events @ Prince NDA Academy are a get-out event aimed at bonding the community with diversity under one umbrella named ‘Adorning Occasions’. Our country has a history of ethnic & cultural diversity."
    }
  ];

  const activityImages = [
    "https://princendaacademy.com/images/activity/Speech.JPG",
    "https://princendaacademy.com/images/activity/Council.JPG",
    "https://princendaacademy.com/images/activity/Adorning.JPG",
    "https://princendaacademy.com/images/activity/Celebration.JPG",
    "https://princendaacademy.com/images/activity/Club.JPG",
    "https://princendaacademy.com/images/activity/MassDrill.JPG",
    "https://princendaacademy.com/images/activity/Obstacles.JPG",
    "https://princendaacademy.com/images/activity/Seminars.JPG",
    "https://princendaacademy.com/images/activity/Theater.JPG"
  ];

  return (
    <>
      <PageHeader
        title="Academics & Co-Curricular"
        subtitle="Fostering holistic development through rigorous academics and vibrant activities."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Academics Section */}
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative mb-12">
             <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <BookOpenIcon />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Academics</h3>
             </div>
             <ul className="space-y-4">
                {academicPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{index + 1}</span>
                        <p className="text-slate-600 leading-relaxed font-medium">{point}</p>
                    </li>
                ))}
             </ul>
          </div>

          {/* Co-Curricular Section */}
          <div className="max-w-6xl mx-auto mb-16">
             <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
                    <StarIcon /> Co-Curricular Activities
                </h3>
                <p className="text-slate-600 mt-2">Beyond the classroom learning</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coCurricularActivities.map((activity, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-red-300 transition-all duration-300 group">
                        <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">{activity.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{activity.description}</p>
                    </div>
                ))}
             </div>
          </div>

          {/* Activity Gallery Section */}
           <div className="max-w-6xl mx-auto">
             <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
                    <VideoCameraIcon /> Glimpses of Activities
                </h3>
                <p className="text-slate-600 mt-2">Visual highlights of our vibrant campus life</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activityImages.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={src} 
                            alt={`Activity highlight ${index + 1}`} 
                            className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                ))}
             </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Academics;
