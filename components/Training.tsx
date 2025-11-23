
import React from 'react';
import { DumbbellIcon, BookOpenIconV2, UsersIconV2, MountainIcon, SwordIcon, HeartIcon } from './icons';

interface TrainingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ icon, title, description, details }) => (
    <div className="rounded-lg bg-white text-slate-800 shadow-sm border-2 border-slate-200 hover:border-red-600 transition-all duration-300 hover:shadow-lg">
        <div className="p-6">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                <div className="text-red-600">{icon}</div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-500 mb-3">{description}</p>
            <p className="text-sm text-red-600 font-semibold">{details}</p>
        </div>
    </div>
);

interface ScheduleItemProps {
    time: string;
    activity: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, activity }) => (
    <div className="flex items-center gap-4 pb-4 border-b border-slate-200 last:border-0">
        <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
            <span className="text-red-600 font-bold text-lg">{time}</span>
        </div>
        <div>
            <p className="font-semibold text-slate-800">{activity}</p>
        </div>
    </div>
);

const Training: React.FC = () => {
    const activities = [
        { icon: <DumbbellIcon />, title: "Physical Training", description: "Daily PT sessions including running, push-ups, sit-ups, and pull-ups to build stamina and strength", details: "Morning drills starting at 5:30 AM" },
        { icon: <BookOpenIconV2 />, title: "Classroom Sessions", description: "Interactive classes for Mathematics, English, General Knowledge, and Current Affairs", details: "Expert faculty with defense background" },
        { icon: <UsersIconV2 />, title: "Group Discussions", description: "Regular GD sessions to enhance communication skills and build confidence for SSB interviews", details: "Peer learning and debate practice" },
        { icon: <MountainIcon />, title: "Obstacle Training", description: "Practice on obstacle course to prepare for physical fitness tests and build mental toughness", details: "Professional obstacle setup" },
        { icon: <SwordIcon />, title: "Drill & Parade", description: "Military drill practice to inculcate discipline, coordination, and team spirit", details: "Weekly parade on ground" },
        { icon: <HeartIcon />, title: "Personality Development", description: "Workshops on leadership, communication, public speaking, and overall personality enhancement", details: "Individual counseling sessions" },
    ];

    const schedule = [
        { time: "05:30", activity: "Wake Up & Morning PT" },
        { time: "07:00", activity: "Breakfast" },
        { time: "08:00", activity: "Academic Classes" },
        { time: "13:00", activity: "Lunch Break" },
        { time: "14:00", activity: "Study & Practice" },
        { time: "17:00", activity: "Sports & Drill" },
        { time: "19:00", activity: "Dinner" },
        { time: "20:00", activity: "Self Study" },
        { time: "22:00", activity: "Lights Out" },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Training <span className="text-red-600">Activities</span></h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive training regimen for complete development of defence aspirants</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {activities.map((activity, index) => (
                        <TrainingCard key={index} {...activity} />
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-8 text-slate-800">A Day in Prince NDA Academy</h3>
                    <div className="rounded-lg bg-white text-slate-800 shadow-sm border-2 border-slate-200/50">
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                {schedule.map((item, index) => (
                                    <ScheduleItem key={index} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="rounded-lg bg-slate-900 text-white shadow-sm p-6">
                        <h4 className="text-xl font-bold mb-3 text-red-600">Sports & Games</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>• Football & Cricket</li>
                            <li>• Basketball & Volleyball</li>
                            <li>• Athletics & Running</li>
                            <li>• Indoor Games</li>
                        </ul>
                    </div>
                    <div className="rounded-lg bg-slate-900 text-white shadow-sm p-6">
                        <h4 className="text-xl font-bold mb-3 text-red-600">Mock Tests</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>• Weekly written tests</li>
                            <li>• Mock SSB interviews</li>
                            <li>• Psychological tests</li>
                            <li>• Performance analysis</li>
                        </ul>
                    </div>
                    <div className="rounded-lg bg-slate-900 text-white shadow-sm p-6">
                        <h4 className="text-xl font-bold mb-3 text-red-600">Special Events</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>• Motivational seminars</li>
                            <li>• Guest lectures by officers</li>
                            <li>• Educational tours</li>
                            <li>• Cultural activities</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Training;