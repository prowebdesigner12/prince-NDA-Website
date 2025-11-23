
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
