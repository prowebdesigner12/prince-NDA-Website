
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatar }) => (
  <div className="bg-white p-8 rounded-xl border border-slate-200 w-96 max-w-[90vw] flex-shrink-0 mx-4">
    <p className="text-slate-600 italic">"{quote}"</p>
    <div className="flex items-center mt-6">
      <img className="w-12 h-12 rounded-full object-cover" src={avatar} alt={name} />
      <div className="ml-4">
        <p className="font-semibold text-slate-800">{name}</p>
        <p className="text-sm text-red-600">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Joining Prince NDA Academy was the best decision of my life. The faculty is exceptional, and the training is rigorous. I cleared the NDA exam in my first attempt!",
      name: "Cadet Aman Singh",
      role: "Recommended for NDA-148",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      quote: "The SSB training here is unparalleled. The mock interviews and GTO tasks prepared me thoroughly. The mentors focus on bringing out your true potential.",
      name: "Cadet Priya Sharma",
      role: "Recommended for TES-45",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      quote: "The disciplined environment and focus on holistic development are what make this academy stand out. It's not just about academics; it's about building character.",
      name: "Cadet Rohan Verma",
      role: "Recommended for NDA-147",
      avatar: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
     {
      quote: "The study material is comprehensive, and the regular mock tests helped me identify my weak areas. The teachers are always available to clear doubts.",
      name: "Cadet Sneha Gupta",
      role: "Recommended for INA",
      avatar: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      quote: "I came from a civilian background with no idea about the armed forces. Prince NDA Academy transformed me physically and mentally. I am forever grateful.",
      name: "Cadet Vikram Rathore",
      role: "Recommended for IMA",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      quote: "The camaraderie and spirit-de-corps among the cadets here is amazing. We were trained to be a team, and that's the most valuable lesson for the forces.",
      name: "Cadet Anjali Mehta",
      role: "Recommended for AFA",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ];
  
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Students Say</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from our students who have achieved their goals with us.
          </p>
        </div>
      </div>
      <div className="mt-16 group">
        <div className="flex animate-scroll-x group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;