
import React, { useState, useRef, useEffect } from 'react';
import { MenuIcon, XIcon, ChevronDownIcon, PhoneIcon, MailIcon, FacebookIcon, TwitterIcon, LinkedInIcon, YouTubeIcon } from './icons';

interface HeaderProps {
  navigateTo: (page: string, sectionId?: string) => void;
  currentPage: string;
}

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode; isActive: boolean }> = ({ onClick, children, isActive }) => (
  <li>
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className={`block py-2 px-3 rounded md:p-0 transition-colors ${isActive ? 'text-red-600 font-semibold' : 'text-white hover:bg-slate-700 md:hover:bg-transparent md:hover:text-red-600'}`}>
      {children}
    </a>
  </li>
);

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const aboutDropdownRef = useRef<HTMLLIElement>(null);
  const coursesDropdownRef = useRef<HTMLLIElement>(null);
  const admissionDropdownRef = useRef<HTMLLIElement>(null);
  const galleryDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
        setIsCoursesDropdownOpen(false);
      }
      if (admissionDropdownRef.current && !admissionDropdownRef.current.contains(event.target as Node)) {
        setIsAdmissionDropdownOpen(false);
      }
      if (galleryDropdownRef.current && !galleryDropdownRef.current.contains(event.target as Node)) {
        setIsGalleryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (page: string, sectionId?: string) => {
    navigateTo(page, sectionId);
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsCoursesDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsGalleryDropdownOpen(false);
  };
  
  const aboutLinks = [
      { page: 'director', text: "Director's Message" },
      { page: 'md', text: "MD's Message" },
      { page: 'vision-mission', text: 'Vision & Mission' },
      { page: 'why-nda', text: 'Why Prince NDA' },
      { page: 'cadet-life', text: 'Cadet Life' },
      { page: 'academics', text: 'Academics & Co-Curricular' },
      { page: 'our-team', text: 'Our Team' },
  ];

  const courseLinks = [
    { page: 'pre-foundation', text: "Pre-Foundation Course" },
    { page: 'early-starter', text: "Early Starter Course" },
    { page: 'bulls-eye', text: "Bull's Eye Course" },
    { page: 'target', text: "Target Course" },
    { page: 'capsule', text: "Capsule Course" },
    { page: 'fees', text: "Fee Structure" },
  ];

  const admissionLinks = [
    { page: 'prospectus', text: "Prospectus" },
    { page: 'documents-required', text: "Documents Required" },
    { page: 'online-admission', text: "Online Admission" },
    { page: 'nda-eligibility', text: "Eligibility Criteria" },
    { page: 'nda-syllabus', text: "Syllabus" },
    { page: 'nda-exam-pattern', text: "Exam Pattern" },
    { page: 'ssb-interview-process', text: "SSB Interview Process" },
    { page: 'ssb-syllabus', text: "SSB Syllabus" },
    { page: 'ssb-dos-donts', text: "SSB Do's & Don'ts" },
    { page: 'ssb-preparation', text: "SSB Preparation Tips" },
  ];
  
  const galleryLinks = [
    { page: 'gallery-selection', text: "Selection Gallery" },
    { page: 'gallery-functions', text: "Functions Gallery" },
    { page: 'gallery-sports', text: "Sports Gallery" },
    { page: 'gallery-campus', text: "Campus Gallery" },
    { page: 'gallery-library', text: "Library Gallery" },
    { page: 'gallery-ai-art', text: "AI Art Gallery" },
  ];

  const isAboutActive = aboutLinks.some(link => link.page === currentPage);
  const isCoursesActive = courseLinks.some(link => link.page === currentPage);
  const isAdmissionActive = admissionLinks.some(link => link.page === currentPage);
  const isGalleryActive = galleryLinks.some(link => link.page === currentPage);

  const DropdownLink: React.FC<{link: {page: string, text: string}}> = ({ link }) => (
    <li>
        <a href="#" 
           onClick={(e) => { e.preventDefault(); handleNavigation(link.page); }} 
           className={`block px-4 py-2 text-slate-200 transition-colors ${currentPage === link.page ? 'bg-white text-red-600' : 'hover:bg-white hover:text-red-600'}`}>
            {link.text}
        </a>
    </li>
  );

  return (
    <header className="bg-slate-900 sticky top-0 z-50">
      <div className={`bg-slate-800 text-slate-300 text-xs border-b border-slate-700 transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-20'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1.5">
                      <PhoneIcon />
                      <span>9610792222 || 9610872222</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-1.5">
                      <MailIcon />
                      <span>princendaacademy@gmail.com</span>
                  </div>
              </div>
              <div className="flex items-center space-x-3">
                  <a href="https://www.facebook.com/PrinceEduHubSikar/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><FacebookIcon /></a>
                  <a href="https://www.youtube.com/@PRINCEEDUHUB/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors"><YouTubeIcon /></a>
                  <a href="#" className="hover:text-red-600 transition-colors"><TwitterIcon /></a>
                  <a href="#" className="hover:text-red-600 transition-colors"><LinkedInIcon /></a>
              </div>
          </div>
      </div>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4">
          <a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('home')}} className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
              Prince<span className="text-red-600">nda</span>
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
            <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleNavigation('online-admission')}>Apply Now</button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-700 rounded-lg bg-slate-900 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <NavLink onClick={() => handleNavigation('home')} isActive={currentPage === 'home'}>Home</NavLink>
              <li ref={aboutDropdownRef} className="relative">
                <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} className={`flex items-center justify-between w-full py-2 px-3 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 md:w-auto transition-colors ${isAboutActive ? 'text-red-600' : 'text-white'}`}>
                    About <ChevronDownIcon />
                </button>
                {isAboutDropdownOpen && (
                    <div className="absolute top-full mt-2 w-48 bg-slate-900/80 backdrop-blur-lg rounded-md shadow-lg z-10 border border-slate-700">
                        <ul className="py-1 text-sm">
                            {aboutLinks.map(link => <DropdownLink key={link.page} link={link} />)}
                        </ul>
                    </div>
                )}
              </li>
               <NavLink onClick={() => handleNavigation('activities')} isActive={currentPage === 'activities'}>Activities</NavLink>
               <NavLink onClick={() => handleNavigation('results')} isActive={currentPage === 'results'}>Results</NavLink>
              <li ref={coursesDropdownRef} className="relative">
                <button onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)} className={`flex items-center justify-between w-full py-2 px-3 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 md:w-auto transition-colors ${isCoursesActive ? 'text-red-600' : 'text-white'}`}>
                    Courses <ChevronDownIcon />
                </button>
                {isCoursesDropdownOpen && (
                    <div className="absolute top-full mt-2 w-48 bg-slate-900/80 backdrop-blur-lg rounded-md shadow-lg z-10 border border-slate-700">
                        <ul className="py-1 text-sm">
                            {courseLinks.map(link => <DropdownLink key={link.page} link={link} />)}
                        </ul>
                    </div>
                )}
              </li>
              <li ref={galleryDropdownRef} className="relative">
                <button onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)} className={`flex items-center justify-between w-full py-2 px-3 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 md:w-auto transition-colors ${isGalleryActive ? 'text-red-600' : 'text-white'}`}>
                    Gallery <ChevronDownIcon />
                </button>
                {isGalleryDropdownOpen && (
                    <div className="absolute top-full mt-2 w-48 bg-slate-900/80 backdrop-blur-lg rounded-md shadow-lg z-10 border border-slate-700">
                        <ul className="py-1 text-sm">
                            {galleryLinks.map(link => <DropdownLink key={link.page} link={link} />)}
                        </ul>
                    </div>
                )}
              </li>
              <li ref={admissionDropdownRef} className="relative">
                <button onClick={() => setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen)} className={`flex items-center justify-between w-full py-2 px-3 rounded hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 md:w-auto transition-colors ${isAdmissionActive ? 'text-red-600' : 'text-white'}`}>
                    Admission <ChevronDownIcon />
                </button>
                {isAdmissionDropdownOpen && (
                    <div className="absolute top-full mt-2 w-48 bg-slate-900/80 backdrop-blur-lg rounded-md shadow-lg z-10 border border-slate-700">
                        <ul className="py-1 text-sm">
                            {admissionLinks.map(link => <DropdownLink key={link.page} link={link} />)}
                        </ul>
                    </div>
                )}
              </li>
              <NavLink onClick={() => handleNavigation('contact')} isActive={currentPage === 'contact'}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
