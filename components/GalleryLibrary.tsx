
import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { XIcon } from './icons';

const GalleryLibrary: React.FC = () => {
    const images = [
        "https://princesainikschool.com/images/campus/library/1.JPG",
        "https://princesainikschool.com/images/campus/library/2.JPG",
        "https://princesainikschool.com/images/campus/library/3.JPG"
    ];
    
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <PageHeader
                title="Library Gallery"
                subtitle="Prince NDA Academy Photo Gallery & Library"
            />
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative max-w-6xl mx-auto">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer group" onClick={() => setSelectedImage(src)}>
                                <img
                                    src={src}
                                    alt={`Library Gallery Image ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover aspect-video transform group-hover:scale-110 transition-transform duration-500"
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

export default GalleryLibrary;