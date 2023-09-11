import React from 'react';
import { homeImages } from '@/constants';
import Slides from '@/components/Slides';
import ceo from '/assets/images/ceo.jpg';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const About: React.FC = () => {
  return (
    <>
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
              <AccordionItem value='item-1'>
                <AccordionTrigger className='p-0 pt-4 text-left text-lg text-black dark:text-white'>
                  2023年 - 經歷
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-2'>
                <AccordionTrigger className='p-0 pt-4 text-left text-lg text-black dark:text-white'>
                  2022年 - 經歷
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-3'>
                <AccordionTrigger className='p-0 pt-4 text-left text-lg text-black dark:text-white'>
                  2019年 - 經歷
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-4'>
                <AccordionTrigger className='p-0 pt-4 text-left text-lg text-black dark:text-white'>
                  2017年 - 經歷
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-5'>
                <AccordionTrigger className='p-0 pt-4 text-left text-lg text-black dark:text-white'>
                  2015年 - 經歷
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
