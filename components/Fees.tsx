
import React from 'react';
import PageHeader from './PageHeader';

const Fees: React.FC = () => {
    const feeData = [
        { course: "Pre-Foundation (8th)", duration: "1 Year", fees: "₹ 51,000" },
        { course: "Pre-Foundation (9th)", duration: "1 Year", fees: "₹ 61,000" },
        { course: "Pre-Foundation (10th)", duration: "1 Year", fees: "₹ 71,000" },
        { course: "NDA (11th Foundation)", duration: "1 Year", fees: "₹ 81,000" },
        { course: "NDA (12th Foundation)", duration: "1 Year", fees: "₹ 81,000" },
        { course: "NDA (Target Course)", duration: "1 Year", fees: "₹ 81,000" },
        { course: "SSB", duration: "14 Days", fees: "₹ 15,000" },
    ];

  return (
    <>
      <PageHeader
        title="Fee Structure"
        subtitle="Transparent and detailed information about our course fees."
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-slate-200 -mt-32 relative">
            
            <div className="mb-8 rounded-lg overflow-hidden shadow-md border border-slate-200">
                <img 
                    src="https://princendaacademy.com/images/Fee-NDA2025-26.jpg" 
                    alt="Fee Structure 2025-26" 
                    className="w-full h-auto"
                />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100 font-bold uppercase text-sm text-slate-600 border-b border-slate-200">Course</th>
                    <th className="py-3 px-4 bg-slate-100 font-bold uppercase text-sm text-slate-600 border-b border-slate-200">Duration</th>
                    <th className="py-3 px-4 bg-slate-100 font-bold uppercase text-sm text-slate-600 border-b border-slate-200 text-right">Fees (Tuition Fee)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-3 px-4 border-b border-slate-200">{item.course}</td>
                      <td className="py-3 px-4 border-b border-slate-200">{item.duration}</td>
                      <td className="py-3 px-4 border-b border-slate-200 text-right font-medium">{item.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-slate-600 leading-relaxed space-y-4 text-sm">
              <h3 className="text-xl font-bold text-slate-800">Important Notes:</h3>
              <ul className="list-disc list-inside space-y-2">
                  <li>The fee mentioned above is for the tuition fee only.</li>
                  <li><strong>GST @ 18%</strong> will be applicable on the total fee amount as per government norms.</li>
                  <li>Hostel charges are separate and are not included in this fee structure. Please contact the administration for details on hostel facilities and charges.</li>
                  <li>The fee can be paid in installments. Please refer to the admission office for the installment plan.</li>
                  <li>Fees once paid are non-refundable and non-transferable under any circumstances.</li>
                  <li>The academy reserves the right to revise the fee structure without any prior notice.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
