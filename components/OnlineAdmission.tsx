
import React from 'react';
import PageHeader from './PageHeader';

const OnlineAdmission: React.FC = () => {

  const InputField: React.FC<{ label: string; type: string; id: string; required?: boolean; placeholder?: string; }> = ({ label, type, id, required, placeholder }) => (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-slate-700">{label}{required && <span className="text-red-600">*</span>}</label>
      <input type={type} id={id} name={id} placeholder={placeholder} required={required} className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition" />
    </div>
  );
  
  const SelectField: React.FC<{ label: string; id: string; required?: boolean; options: string[] }> = ({ label, id, required, options }) => (
     <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-slate-700">{label}{required && <span className="text-red-600">*</span>}</label>
      <select id={id} name={id} required={required} className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition">
        <option value="">Select {label}</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );

  return (
    <>
      <PageHeader
        title="Online Admission Form"
        subtitle="Take the first step towards your dream career. Fill out the form below."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-4">Student's Personal Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <SelectField label="Course" id="course" required options={[
                "Pre-Foundation (8th)", "Pre-Foundation (9th)", "Pre-Foundation (10th)",
                "NDA (11th Foundation)", "NDA (12th Foundation)", "NDA (Target Course)", "SSB"
              ]}/>
              <InputField label="Student's Full Name" type="text" id="studentName" required placeholder="John Doe" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Father's Full Name" type="text" id="fatherName" required placeholder="Richard Doe" />
              <InputField label="Date of Birth" type="date" id="dob" required />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">Gender<span className="text-red-600">*</span></label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input id="male" type="radio" name="gender" value="male" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500" />
                    <label htmlFor="male" className="ms-2 text-sm font-medium text-slate-700">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input id="female" type="radio" name="gender" value="female" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500" />
                    <label htmlFor="female" className="ms-2 text-sm font-medium text-slate-700">Female</label>
                  </div>
                </div>
              </div>
              <SelectField label="Category" id="category" required options={['General', 'OBC', 'SC', 'ST', 'EWS']} />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 border-b pb-4 pt-4">Contact & Address Details</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Mobile Number" type="tel" id="mobile" required placeholder="9876543210" />
              <InputField label="Alternate Mobile" type="tel" id="altMobile" placeholder="9876543210" />
            </div>
            
            <InputField label="Email ID" type="email" id="email" required placeholder="john.doe@example.com" />
            
            <div>
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-slate-700">Full Address<span className="text-red-600">*</span></label>
              <textarea id="address" name="address" rows={4} required placeholder="Enter your full correspondence address" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 transition"></textarea>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 border-b pb-4 pt-4">Academic Details</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <InputField label="Last School Attended" type="text" id="lastSchool" required />
              <SelectField label="Board" id="board" required options={['CBSE', 'ICSE', 'State Board', 'Other']} />
              <InputField label="Percentage in Last Class" type="text" id="percentage" required placeholder="e.g., 85.5%" />
            </div>

            <div className="text-center pt-6">
              <button type="submit" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-base px-10 py-3.5 text-center transform hover:scale-105 transition-transform">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default OnlineAdmission;
