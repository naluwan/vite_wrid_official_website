import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Search, Link } from 'lucide-react';
import { ImageType } from '@/components/type';

type ImagesProps = {
  img: ImageType;
  slideNum: number;
  onSetOpenModal: () => void;
  onSetInitSlide: (slide: number) => void;
};

const Images: React.FC<ImagesProps> = (props) => {
  const { img, slideNum, onSetOpenModal, onSetInitSlide } = props;

  const handleOpenModal = React.useCallback((slide: number) => {
    onSetOpenModal();
    onSetInitSlide(slide);
  }, []);

  return (
    <AspectRatio ratio={1.5 / 1} key={img.label} className='group relative'>
      <div className='absolute left-0 top-0 z-20 hidden h-full w-full bg-black/40 group-hover:block'>
        <div className='flex h-full w-full flex-col items-start justify-center border border-blue-400 px-4'>
          <span className='text-2xl text-white'>{img.label}</span>
          <div className='flex w-full items-center pt-2'>
            <button
              onClick={() => handleOpenModal(slideNum)}
              className='relative h-4 w-4 rounded-full bg-orange-300 p-4 hover:bg-orange-500/80 hover:dark:bg-orange-500/80'
            >
              <Search
                className='absolute left-2 top-2 h-4 w-4 text-white'
                strokeWidth={4}
              />
            </button>
            <button className='relative ml-5 h-4 w-4 rounded-full bg-orange-300 p-4 hover:bg-orange-500/80 hover:dark:bg-orange-500/80'>
              <Link
                className='absolute left-2 top-2 h-4 w-4 text-white'
                strokeWidth={4}
              />
            </button>
          </div>
        </div>
      </div>
      <img src={img.imgSrc} className='h-full w-full object-cover' alt={img.label} />
    </AspectRatio>
  );
};

export default Images;
