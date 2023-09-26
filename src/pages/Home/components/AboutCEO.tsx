import React from 'react';
import ceo from '@/assets/images/CEO-removebg.png';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutCEO: React.FC = () => {
  const go = useNavigate();

  return (
    <div className='w-full max-w-screen-2xl items-start justify-center py-12 md:flex'>
      <div className='flex flex-1 flex-col items-center px-2 md:min-w-[40%]'>
        <div className='aspect-square max-h-[500px] max-w-[500px]'>
          <img src={ceo} alt='ceo' className='h-full w-full object-contain' />
        </div>
        <p className='text-lg text-white dark:text-black max-md:text-sm'>
          吾境設計負責人 - 陳映志
        </p>
      </div>

      <div className='flex w-full flex-1 flex-col p-8 pt-0 text-lg leading-10 text-white dark:text-black max-md:p-4 max-md:text-base max-md:leading-8'>
        <div>吾 亦以居者為中心發想</div>
        <div>境 即是描摹故事的場域</div>
        <div className='w-[20%] border-b-[1px] border-b-white pt-4 dark:border-b-black' />
        <div className='pt-4'>聆聽客端需求解構空間</div>
        <div>釋放場域自由美感與實用並重</div>
        <div>運用材質重新架構空間品味</div>
        <div>創新思維結合現代設計演繹出完美訂製級設計</div>
        <div className='pt-4'>
          <button
            className='flex items-center bg-slate-500 px-5 text-base font-bold'
            onClick={() => go('/about')}
          >
            <span>Read more</span>
            <ArrowRight className='ml-2 h-5 w-5' strokeWidth={4} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCEO;
