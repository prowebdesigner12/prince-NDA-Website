
import React from 'react';
import PageHeader from './PageHeader';

const DocumentRequired: React.FC = () => {
  const documents = [
    "Duly filled admission form (available at the academy office or online).",
    "Photocopy of the Birth Certificate.",
    "Photocopy of the Aadhar Card of the student.",
    "Photocopy of the last two years' academic mark sheets.",
    "Transfer Certificate (TC) from the previous school (original).",
    "Character Certificate from the previous school (original).",
    "Migration Certificate (if applicable).",
    "Medical Fitness Certificate from a registered medical practitioner.",
    "8 recent passport-sized color photographs of the student.",
    "2 passport-sized color photographs of each parent/guardian.",
    "Proof of residence (e.g., Aadhar card, electricity bill).",
  ];

  return (
    <>
      <PageHeader
        title="Documents Required"
        subtitle="Please ensure all the following documents are ready for admission."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative">
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                To complete the admission process at Prince NDA Academy, please submit the following documents. Ensure that all photocopies are clear and legible. Original documents will be required for verification at the time of admission.
              </p>
              <ul className="list-decimal list-inside space-y-3 pt-4 font-medium">
                {documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <h3 className="text-xl font-bold text-slate-800">Note:</h3>
                <p className="mt-2">
                  Incomplete forms or applications without the required documents will not be processed. It is the responsibility of the parents/guardians to submit all necessary documents on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentRequired;
