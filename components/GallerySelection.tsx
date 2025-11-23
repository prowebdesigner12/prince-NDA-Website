
import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { XIcon } from './icons';

const GallerySelection: React.FC = () => {
    const images = [
        "https://images.pexels.com/photos/7893962/pexels-photo-7893962.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5859345/pexels-photo-5859345.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7979105/pexels-photo-7979105.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1327009/pexels-photo-1327009.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/531445/pexels-photo-531445.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2044237/pexels-photo-2044237.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8995431/pexels-photo-8995431.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8199564/pexels-photo-8199564.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8549999/pexels-photo-8549999.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8199708/pexels-photo-8199708.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7393910/pexels-photo-7393910.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8549925/pexels-photo-8549925.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];
    
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <PageHeader
                title="Selection Gallery"
                subtitle="Celebrating the success and achievements of our proud cadets."
            />
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-32 relative">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer group" onClick={() => setSelectedImage(src)}>
                                <img
                                    src={src}
                                    alt={`Selection Gallery Image ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedImage} 
                            alt="Selected view" 
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                        />
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-3 -right-3 bg-white text-slate-800 rounded-full p-2 hover:bg-red-600 hover:text-white transition-colors"
                            aria-label="Close image viewer"
                        >
                            <XIcon />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GallerySelection;