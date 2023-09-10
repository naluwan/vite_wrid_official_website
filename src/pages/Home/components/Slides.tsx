import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Swiper as SwiperType } from 'swiper';
import { ImageType } from '@/components/type';

import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SlidesProps = {
  images: ImageType[];
  initSlide: number;
};

const Slides: React.FC<SlidesProps> = (props) => {
  const { images, initSlide } = props;
  // 宣告一個ref來儲存swiper物件
  const swiperRef = React.useRef<SwiperType>();

  React.useEffect(() => {
    // 如果initSlid有更動，當打開Modal時就移動到該張照片
    // slideTo(index, 移動速度, 是否執行call back function)
    // 移動速度設100基本上就看不出來有滑動
    swiperRef.current?.slideTo(initSlide, 100, false);
  }, [initSlide]);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      pagination={{ type: 'fraction' }}
      initialSlide={0}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {images.map((img) => (
        <SwiperSlide key={`${img.label}-slide`}>
          <img
            src={img.imgSrc}
            alt={img.label}
            className='h-full max-h-[580px] w-full max-w-screen-2xl rounded-lg object-contain '
          />
        </SwiperSlide>
      ))}
      <button
        className='absolute right-0 top-[45%] z-20 bg-transparent p-0 px-2'
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRightCircle className='h-10 w-10 text-slate-400/50' />
      </button>
      <button
        className='absolute left-0 top-[45%] z-20 bg-transparent p-0 px-2'
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeftCircle className='h-10 w-10 text-slate-400/50' />
      </button>
    </Swiper>
  );
};

export default Slides;
