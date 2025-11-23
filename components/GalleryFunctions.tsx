
import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { XIcon } from './icons';

const GalleryFunctions: React.FC = () => {
    const images = [
        "https://princesainikschool.com/images/campus/funcation/1.JPG",
        "https://princesainikschool.com/images/campus/funcation/2.JPG",
        "https://princesainikschool.com/images/campus/funcation/3.JPG",
        "https://princesainikschool.com/images/campus/funcation/4.JPG",
        "https://princesainikschool.com/images/campus/funcation/5.JPG",
        "https://princesainikschool.com/images/campus/funcation/6.JPG",
        "https://princesainikschool.com/images/campus/funcation/7.JPG",
        "https://princesainikschool.com/images/campus/funcation/8.JPG",
        "https://princesainikschool.com/images/campus/funcation/9.JPG",
        "https://princesainikschool.com/images/campus/funcation/10.JPG",
        "https://princesainikschool.com/images/campus/funcation/11.JPG",
        "https://princesainikschool.com/images/campus/funcation/12.JPG",
        "https://princesainikschool.com/images/campus/funcation/13.JPG",
        "https://princesainikschool.com/images/campus/funcation/14.JPG",
        "https://princesainikschool.com/images/campus/funcation/15.JPG",
        "https://princesainikschool.com/images/campus/funcation/16.JPG",
        "https://princesainikschool.com/images/campus/funcation/17.JPG"
    ];
    
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <PageHeader
                title="Functions Gallery"
                subtitle="Our Memories, Your Inspiration"
            />
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-32 relative">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer group" onClick={() => setSelectedImage(src)}>
                                <img
                                    src={src}
                                    alt={`Functions Gallery Image ${index + 1}`}
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

export default GalleryFunctions;