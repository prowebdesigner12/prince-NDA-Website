
import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { XIcon } from './icons';

const GalleryAiArt: React.FC = () => {
    const images = [
        "https://images.pexels.com/photos/19159066/pexels-photo-19159066.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7133139/pexels-photo-7133139.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8695171/pexels-photo-8695171.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/10803930/pexels-photo-10803930.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8695190/pexels-photo-8695190.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/775483/pexels-photo-775483.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1528640/pexels-photo-1528640.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];
    
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <PageHeader
                title="AI Art Gallery"
                subtitle="Inspirational scenes from cadet life, envisioned by AI."
            />
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-32 relative">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer group" onClick={() => setSelectedImage(src)}>
                                <img
                                    src={src}
                                    alt={`AI Generated Cadet Art ${index + 1}`}
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
                            alt="Selected AI art view" 
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

export default GalleryAiArt;