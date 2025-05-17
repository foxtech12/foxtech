import React from 'react';
import { Link } from 'react-router-dom';
import mg1 from '../../pages/img1.avif';
import mg2 from '../../pages/img2.avif';
import mg3 from '../../pages/img3.avif';
import mg4 from '../../pages/img4.avif';

const cardData = [
  {
    title: 'NAVIGATING TARIFF SHIFTS',
    description:
      'AI-powered capabilities integrated with current software and tools can significantly help companies navigate the complex and evolving tariff...',
    image: mg1,
    link: '/tariff',
  },
  {
    title: 'WIPRO WINS A £500M STRATEGIC DEAL WITH UK INSURANCE GIANT PHOENIX GROUP',
    description:
      'The 10-year deal will include platform-based, regulated Third-Party Administration.',
    image: mg2,
    link: '/wipro-deal',
  },
  {
    title: 'STAYING COMPETITIVE IN TELECOM WITH AI & PLATFORM INNOVATION',
    description:
      'By adopting technology-driven platforms, leveraging AI, and expanding partnerships, companies can position themselves for success.',
    image: mg3,
    link: '/telecom-ai',
  },
  {
    title: 'DRIVING BUSINESS OUTCOMES WITH AI',
    description:
      'A Harvard Business Review analytic services report in association with Wipro FullStride Cloud.',
    image: mg4,
    link: '/business-ai',
  },
];

const ContentCards = () => {
  return (
    <div className="flex flex-col items-center px-0 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full mt-8">
        {cardData.map((card, idx) => {
  const row = Math.floor(idx / 2); // Every 2 cards is a new row
  const isReverse = row % 2 === 1; // Reverse layout for odd rows

  return (
    <div
      key={idx}
      className={`flex flex-col sm:flex-row ${
        isReverse ? 'sm:flex-row-reverse' : ''
      } bg-white overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-2xl h-[400px]`}
    >
      {/* Image */}
      <div className="w-full sm:w-1/2 h-full">
        <div className="h-full aspect-[4/3] sm:aspect-auto overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
        <div className="w-full sm:w-1/2 h-full p-5 bg-[#E7FFE7] flex flex-col justify-center items-center text-center">
  <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{card.title}</h3>
  <p className="text-sm sm:text-base text-gray-700 mb-4">{card.description}</p>
  <Link
    to={card.link}
    className="text-sm font-semibold text-green-700 hover:underline"
  >
    READ MORE &gt;
  </Link>
</div>

    </div>
  );
})}
      </div>    
    </div>
  );
};

export default ContentCards;
