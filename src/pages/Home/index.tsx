import React from 'react';

import { collectionsData } from '@/constants';
import Modal from '@/components/Modal';
import Images from '@/components/Images';
import Slides from '@/components/Slides';
import AboutCEO from '@/pages/Home/components/AboutCEO';
import MaxContainer from '@/components/MacContainer';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [initSlide, setInitSlide] = React.useState(0);

  return (
    <div className='pb-20'>
      {/* 作品展示 */}
      <MaxContainer>
        <div className='my-5 mb-[60px] grid w-full gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 xl:px-20'>
          {collectionsData.map((item, index) => (
            <Images
              key={item.label}
              img={item}
              slideNum={index}
              onSetOpenModal={() => setOpenModal(true)}
              onSetInitSlide={setInitSlide}
            />
          ))}
        </div>
      </MaxContainer>
      {/* 負責人介紹 */}
      <section className='flex w-full justify-center bg-black px-2 dark:bg-white sm:px-8 sm:py-24'>
        <AboutCEO />
      </section>

      {/* 作品單頁彈跳窗 */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Slides images={collectionsData} initSlide={initSlide} autoPlay={false} />
      </Modal>
    </div>
  );
};

export default Home;
