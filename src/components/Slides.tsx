import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Swiper as SwiperType } from 'swiper';
import { CollectionsDataType } from '@/components/type';

import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SlidesProps = {
  images: CollectionsDataType[];
  initSlide: number;
  autoPlay: boolean;
};

const Slides: React.FC<SlidesProps> = (props) => {
  const { images, initSlide, autoPlay } = props;
  // 宣告一個ref來儲存swiper物件
  const swiperRef = React.useRef<SwiperType>();

  React.useEffect(() => {
    // 如果initSlid有更動，當打開Modal時就移動到該張照片
    // slideTo(index, 移動速度, 是否執行call back function)
    // 移動速度設100基本上就看不出來有滑動
    swiperRef.current?.slideTo(initSlide, 100, false);
  }, [initSlide]);

  const paginationType = !autoPlay ? 'fraction' : 'bullets';

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
      pagination={{ type: paginationType, clickable: autoPlay }}
      initialSlide={0}
      autoplay={autoPlay && { delay: 5000 }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {images.map((items) => (
        <SwiperSlide key={`${items.label}-slide`}>
          <img
            src={items.images[0].src}
            alt={items.images[0].name}
            className={cn('h-full max-h-[570px] w-full object-contain')}
          />
        </SwiperSlide>
      ))}
      {!autoPlay && (
        <>
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
        </>
      )}
    </Swiper>
  );
};

export default Slides;
