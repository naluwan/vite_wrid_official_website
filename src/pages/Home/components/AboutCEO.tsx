import React from 'react';
import ceo from '@/assets/images/ceo.jpg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutCEO: React.FC = () => {
  return (
    <div className='w-full items-center justify-center md:flex'>
      <div className='flex flex-1 flex-col items-center p-8 py-12 md:min-w-[40%]'>
        <div className='aspect-square max-h-[500px] max-w-[500px]'>
          <img src={ceo} alt='ceo' className='h-full w-full object-contain' />
        </div>
        <p className='text-lg text-white dark:text-black max-md:text-sm'>
          吾境設計負責人 - 陳映志
        </p>
      </div>

      <div className='flex w-full flex-1 flex-col p-8 pt-0 text-lg leading-10 text-white dark:text-black max-md:text-sm max-md:leading-8'>
        <div>吾境設計 WRID.Ltd</div>
        <div>吾 亦以居者為中心發想</div>
        <div>境 即是描摹故事的場域</div>
        <div className='w-[20%] border-b-[1px] border-b-black pt-4' />
        <div className='pt-4'>設計 往往只是想像的第一步 讓居者想像出未來的空間</div>
        <div>蛻變 則需要細膩的職人 投入時間、技術來一步一步逐漸成形</div>
        <div className='pt-4'>
          <button className='bg-slate-500 px-5 text-base font-bold'>
            <Link to='/about' className='flex w-full items-center'>
              <span>Read more</span>{' '}
              <ArrowRight className='ml-2 h-5 w-5' strokeWidth={4} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCEO;
