
import React, { useState, useEffect, useRef } from 'react';

interface CoursesProps {
  navigateTo: (page: string) => void;
}

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  page: string;
  navigateTo: (page: string) => void;
  style?: React.CSSProperties;
  isVisible: boolean;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description, category, page, navigateTo, style, isVisible, index }) => (
  <div 
    className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group w-96 max-w-[90vw] flex-shrink-0 mx-4 h-[450px] border-4 border-transparent hover:border-red-600 ${isVisible ? 'card-fade-up' : 'opacity-0 translate-y-8'}`}
    style={{ ...style, transitionDelay: `${index * 100}ms` }}
  >
    <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
    
    <div className="relative p-6 h-full flex flex-col justify-end text-white">
      <div>
        <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 mb-3 rounded-full inline-block">{category}</span>
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-slate-200 text-base mb-6">{description}</p>
      </div>
      <button 
        onClick={() => navigateTo(page)}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm px-5 py-3 text-center transition-all duration-300 transform hover:scale-105">
        Learn More
      </button>
    </div>
  </div>
);


const Courses: React.FC<CoursesProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const courses = [
    {
      page: 'pre-foundation',
      image: 'https://images.pexels.com/photos/8474813/pexels-photo-8474813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'NDA Pre-Foundation',
      description: 'For class 8th, 9th & 10th students, building a strong base for future competitive exams.',
      category: 'Foundation',
    },
    {
      page: 'early-starter',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'XI – The Early Starters',
      description: 'A 2-year integrated program for class 11th students to build a strong foundation for NDA.',
      category: '2-Year Program',
    },
    {
      page: 'bulls-eye',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'XII – Bull\'s Eye',
      description: 'An intensive one-year program for class 12th students, balancing boards and NDA prep.',
      category: '1-Year Program',
    },
    {
      page: 'target',
      image: 'https://images.pexels.com/photos/6744833/pexels-photo-6744833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'After XII - Target',
      description: 'A dedicated one-year course for 12th pass-out students focusing solely on the NDA exam.',
      category: 'Dropper Batch',
    },
    {
      page: 'capsule',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Capsule Course',
      description: 'A short-term crash course for final preparation and revision before the NDA exam.',
      category: 'Crash Course',
    },
  ];

  const duplicatedCourses = [...courses, ...courses];

  return (
    <section id="courses" className="py-20 bg-slate-50 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Popular Courses</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our collection of top-rated courses and start your learning journey today.
          </p>
        </div>
      </div>
      <div className="mt-16 group">
        <div className="flex animate-scroll-x group-hover:[animation-play-state:paused]">
          {duplicatedCourses.map((course, index) => (
            <CourseCard 
              key={index} 
              {...course} 
              navigateTo={navigateTo}
              isVisible={isVisible}
              index={index}
              style={{ animationDelay: `${(index % courses.length) * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
