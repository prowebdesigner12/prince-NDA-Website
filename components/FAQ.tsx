
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-200 py-4">
    <button
      className="w-full flex justify-between items-center text-left"
      onClick={onClick}
    >
      <h3 className="text-lg font-medium text-slate-800 uppercase pr-4">{question}</h3>
      <div className="text-red-600 flex-shrink-0">
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pt-4' : 'max-h-0'}`}>
      <p className="text-slate-600 leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "WHY PRINCE NDA ACADEMY IS BETTER THAN OTHERS?",
      answer: "Students are given unmatched, innovative and efficient training product which is highly result oriented. Our outdoor training facilities are better than what is seen at the SSB. We have our own state of the art training facilities, Vast outdoor task area and a full fledged hostel. Huge pool of talented and highly experienced Ex SSB Assessors who have collaborated to bring the best out of our every single candidate and put them on a winning path. Little bit of effort of traveling that extra miles will bring you to our academy that could be a game changer rather than settling for substandard training set up. You have set your goal very high and now you need a master coach. Do not Compromise and put your dream in jeopardy. We strongly believe greatness isn’t born it’s grown."
    },
    {
      question: "DO YOU PROVIDE ONLY NDA COACHING OR CDS AFCAT AS WELL?",
      answer: "As the SSB interview procedure is the same for all entries you can SSB Training. We provide written exam coaching only for UPSC NDA."
    },
    {
      question: "DO YOU HAVE HOSTEL FACILITIES?",
      answer: "Yes we have excellent hostel facilities and very reasonable rates. The hostel package includes food and other facilities."
    },
    {
      question: "WHEN CAN I JOIN?",
      answer: "You don’t need to worry about the day of joining into the capsule course batch. You can join any day, because we have multiple batches in progress at any point of time. Our 11th and 12th class new batches start in April of every year."
    },
    {
      question: "DO YOU PROVIDE STUDY MATERIAL",
      answer: "Yes, we do provide study material. It will be issued all throughout the year as DPP or printed books."
    },
    {
      question: "WHAT IS THE GUARANTEE OF SUCCESS?",
      answer: "If you are dedicated, hard working and follow all instructions given you have a very good chance of success. At the end of the day it all depends on your will power to succeed and our team puts maximum efforts in the direction of positive output."
    },
    {
      question: "DO YOU GIVE A FEE DISCOUNT?",
      answer: "Scholarship of Rs. 10,000 in tuition fee on > 85% from CBSE/RBSE or > 88% marks in 10th/12th from other board."
    },
    {
      question: "DO YOU HAVE A GOOD OUTDOOR TASK AREA?",
      answer: "GTO Obstacle Course and Individual Obstacles laid out on the lines as would be found in an actual SSB venue. This is with a view to give our candidates a unique and exclusive hands on practice in the outdoor tasks."
    },
    {
      question: "WHERE IS OUR ACADEMY?",
      answer: "Prince NDA Academy is located in Sikar Rajasthan. Attached are the google maps directions."
    },
    {
      question: "WHAT IS SPECIAL ABOUT YOUR TRAINING?",
      answer: "SSB preparation is very different from the exam preparations we are familiar with. It is more about active learning, personality development and coming out of our comfort zone. We strive at making each student an all rounder by giving holistic coverage to all aspects: – academics, critical thinking, sports, and general awareness to name a few."
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl uppercase">FREQUENTLY <span className="text-red-600">ASKED QUESTIONS</span></h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
