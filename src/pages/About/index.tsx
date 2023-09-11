import React from 'react';
import { homeImages, ceoExp } from '@/constants';
import Slides from '@/components/Slides';
import ceo from '@/assets/images/CEO.jpg';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import MaxContainer from '@/components/MacContainer';

const About: React.FC = () => {
  return (
    <MaxContainer>
      {/* 公司簡介 */}
      <div className='w-full'>
        <h1 className='max-w-md:text-3xl py-3 text-center text-2xl font-bold'>
          住宅設計 ｜客變規劃 ｜ 商業空間
        </h1>
        <h2 className='max-w-md:text-2xl py-3 text-center text-xl'>台北 · 台中 · 高雄</h2>
        <h2 className='max-w-md:text-2xl py-3 text-center text-xl'>
          Mon. - Sat. 0800-1800
        </h2>
      </div>

      {/* 輪播圖 */}
      <Slides images={homeImages} initSlide={0} autoPlay={true} />

      {/* 負責人資訊 */}
      <section className='px-2 sm:px-8 sm:py-12'>
        <div className='w-full items-start justify-center py-12 md:flex'>
          <div className='flex flex-1 flex-col items-center px-2 md:min-w-[40%]'>
            <div className='aspect-square max-h-[500px] max-w-[500px]'>
              <img src={ceo} alt='ceo' className='h-full w-full object-contain' />
            </div>
            <p className='text-lg font-bold text-black dark:text-white'>
              吾境設計負責人 - 陳映志
            </p>
          </div>

          <div className='flex h-full w-full flex-1 flex-col justify-center p-8 pt-0 leading-10 max-md:p-4 max-md:leading-8'>
            <h1 className='text-center text-2xl'>設計旅程</h1>
            <Accordion type='single' collapsible className='w-full '>
              {ceoExp.map((exp, idx) => (
                <AccordionItem
                  key={`${exp.year}-accordionItem`}
                  value={`item-${idx + 1}`}
                >
                  <AccordionTrigger className='p-0 pt-4 text-left text-lg text-black dark:text-white'>
                    {exp.year}年 - 經歷
                  </AccordionTrigger>
                  <AccordionContent>{exp.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </MaxContainer>
  );
};

export default About;
