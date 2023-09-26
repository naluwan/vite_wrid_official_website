import React from 'react';
import { collectionsData, ceoExp } from '@/constants';
import Slides from '@/components/Slides';
import ceo from '@/assets/images/CEO-removebg.png';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import MaxContainer from '@/components/MacContainer';

const About: React.FC = () => {
  // 讓畫面回到最上面
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Slides images={collectionsData} initSlide={0} autoPlay={true} />

      {/* 負責人資訊 */}
      <section className='px-2 sm:px-8 sm:py-12'>
        <div className='w-full items-start justify-center py-12 md:flex'>
          <div className='flex flex-1 flex-col items-center px-2 md:min-w-[40%]'>
            <div className='aspect-square max-h-[500px] max-w-[500px]'>
              <img src={ceo} alt='ceo' className='h-full w-full object-contain' />
            </div>
            <p className='text-lg font-bold text-black dark:text-white'>
              吾境設計總監 - 陳映志
            </p>
          </div>

          <div className='flex h-full w-full flex-1 flex-col p-8 pt-0 max-md:p-4'>
            <div className='flex h-full w-full flex-col items-center justify-start p-7 pt-0 text-center'>
              <p className='text-lg tracking-widest'>吾慢生活．境舒享悠</p>
              <p className='text-lg tracking-widest'>尊享客製．細緻品味</p>
            </div>

            <h1 className='text-center text-3xl'>設計旅程</h1>
            <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
              {ceoExp.map((exp, idx) => (
                <AccordionItem
                  key={`${exp.year}-accordionItem`}
                  value={`item-${idx + 1}`}
                >
                  <AccordionTrigger className='p-0 pt-4 text-left text-xl text-black dark:text-white'>
                    {exp.year}年 - 經歷
                  </AccordionTrigger>
                  <AccordionContent className='text-lg'>{exp.content}</AccordionContent>
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
