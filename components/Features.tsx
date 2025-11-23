import React from 'react';
import { AcademicCapIcon, GlobeAltIcon, VideoCameraIcon } from './icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-red-600 hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-red-600 group-hover:animate-pulse">
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-bold">{title}</h3>
    <p className="mt-2 text-slate-500">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <AcademicCapIcon />,
      title: 'Expert Instructors',
      description: 'Learn from industry experts who are passionate about teaching and have real-world experience.',
    },
    {
      icon: <GlobeAltIcon />,
      title: 'Flexible Learning',
      description: 'Access your courses anytime, anywhere, on any device. Learn at your own pace.',
    },
    {
      icon: <VideoCameraIcon />,
      title: 'Hands-On Projects',
      description: 'Apply your knowledge with practical projects and build a portfolio to showcase your skills.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a unique and effective learning experience designed for your success.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;