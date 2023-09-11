import React from 'react';

import { homeImages } from '@/constants';
import Modal from '@/components/Modal';
import Images from '@/components/Images';
import Slides from '@/pages/Home/components/Slides';
import AboutCEO from '@/pages/Home/components/AboutCEO';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [initSlide, setInitSlide] = React.useState(0);

  return (
    <>
      {/* 作品展示 */}
      <div className='my-5 mb-[60px] grid w-full gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 xl:px-20'>
        {homeImages.map((img, index) => (
          <Images
            key={img.label}
            img={img}
            slideNum={index}
            onSetOpenModal={() => setOpenModal(true)}
            onSetInitSlide={setInitSlide}
          />
        ))}
      </div>
      {/* 負責人介紹 */}
      <section className='bg-black px-2 dark:bg-white sm:px-8 sm:py-24'>
        <AboutCEO />
      </section>

      {/* 作品單頁彈跳窗 */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Slides images={homeImages} initSlide={initSlide} />
      </Modal>
    </>
  );
};

export default Home;
