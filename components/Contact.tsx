
import React from 'react';
import PageHeader from './PageHeader';
import { PhoneIcon, MailIcon, FacebookIcon, YouTubeIcon, TwitterIcon, LinkedInIcon } from './icons';

const Contact: React.FC = () => {
    
    const InputField: React.FC<{ label: string; type: string; id: string; required?: boolean; placeholder?: string; }> = ({ label, type, id, required, placeholder }) => (
        <div>
          <label htmlFor={id} className="block mb-2 text-sm font-medium text-slate-700">{label}{required && <span className="text-red-600">*</span>}</label>
          <input type={type} id={id} name={id} placeholder={placeholder} required={required} className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition" />
        </div>
      );

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us for any queries."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 -mt-32 relative">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-6 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Address</h4>
                  <p>Palwas Road, Sikar - 332001 (Raj.) INDIA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Contact Numbers</h4>
                  <div className="flex items-center space-x-2">
                    <PhoneIcon />
                    <div className="flex flex-col sm:flex-row sm:space-x-2">
                        <a href="tel:9610792222" className="hover:text-red-600">9610792222</a>
                        <span className="hidden sm:inline">||</span>
                        <a href="tel:9610872222" className="hover:text-red-600">9610872222</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Email Address</h4>
                  <div className="flex items-center space-x-2">
                    <MailIcon />
                    <a href="mailto:princendaacademy@gmail.com" className="hover:text-red-600">princendaacademy@gmail.com</a>
                  </div>
                </div>
                 <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Follow Us</h4>
                  <div className="flex items-center space-x-3">
                      <a href="https://www.facebook.com/PrinceEduHubSikar/" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-red-600 hover:text-white transition-all"><FacebookIcon /></a>
                      <a href="https://www.youtube.com/@PRINCEEDUHUB/" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-red-600 hover:text-white transition-all"><YouTubeIcon /></a>
                      <a href="#" className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-red-600 hover:text-white transition-all"><TwitterIcon /></a>
                      <a href="#" className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-red-600 hover:text-white transition-all"><LinkedInIcon /></a>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.800000000000!2d75.14000000000000!3d27.60000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM2JzAwLjAiTiA3NcKwMDgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    title="Google Maps Location"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <InputField label="Full Name" type="text" id="name" required placeholder="John Doe" />
                <InputField label="Email Address" type="email" id="email" required placeholder="john.doe@example.com" />
                <InputField label="Subject" type="text" id="subject" required placeholder="e.g., Admission Inquiry" />
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700">Your Message<span className="text-red-600">*</span></label>
                  <textarea id="message" name="message" rows={5} required placeholder="Write your message here..." className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition"></textarea>
                </div>
                <div className="text-left">
                    <button type="submit" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-base px-8 py-3 text-center transform hover:scale-105 transition-transform">
                        Send Message
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
