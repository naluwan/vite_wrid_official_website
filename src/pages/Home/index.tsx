import React from 'react';

import { collectionsData } from '@/constants';
import Modal from '@/components/Modal';
import Images from '@/components/Images';
import Slides from '@/components/Slides';
import AboutCEO from '@/pages/Home/components/AboutCEO';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [initSlide, setInitSlide] = React.useState(0);

  return (
    <>
      {/* 作品展示 */}
      <div className='my-5 grid w-full gap-4 px-4 pb-10 md:grid-cols-2 lg:grid-cols-4 xl:px-20'>
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
      {/* 負責人介紹 */}
      <section className='flex w-full justify-center bg-black px-2 dark:bg-white sm:px-8'>
        <AboutCEO />
      </section>

      {/* 作品單頁彈跳窗 */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Slides images={collectionsData} initSlide={initSlide} autoPlay={false} />
      </Modal>
    </>
  );
};

export default Home;
