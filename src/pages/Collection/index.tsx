import React from 'react';
import { useParams } from 'react-router-dom';
import { collectionsData } from '@/constants';
import type { CollectionsDataType } from '@/components/type';
import MaxContainer from '@/components/MacContainer';
import Breadcrumb from '@/components/Breadcrumb';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowUpToLine } from 'lucide-react';

const Collection: React.FC = () => {
  const { collectionName } = useParams();
  const [selectedCollection, setSelectedCollection] =
    React.useState<CollectionsDataType | null>(null);
  const [scrollTop, setScrollTop] = React.useState(0);

  // 從URL找出collection name並對data資料做篩選找出使用者選取的collection
  React.useEffect(() => {
    setSelectedCollection(
      collectionsData.filter((item) => item.id === collectionName)[0],
    );
  }, [collectionName]);

  // 監聽畫面scroll事件
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MaxContainer>
      <div className='relative p-4'>
        {/* 麵包屑 */}
        <div className='max-w-screen-2xl lg:mx-auto xl:px-20'>
          <Breadcrumb
            collectionLabel={selectedCollection?.label as string}
            category={selectedCollection?.category as string}
          />
        </div>
        {/* 作品照片 */}
        <div>
          {selectedCollection?.images.map((img) => {
            return (
              <div className='m-20 max-md:m-0 max-md:py-4' key={img.id}>
                <AspectRatio ratio={1.5 / 1} className='animate-openImagesContainer'>
                  <img
                    src={img.src}
                    className='h-full w-full object-fill'
                    alt={img.name}
                  />
                </AspectRatio>
              </div>
            );
          })}
        </div>
        {/* 回到最上面按鈕 */}
        {scrollTop > 299 && (
          <button
            className='sticky bottom-4 flex h-6 w-6 items-center justify-center rounded-full bg-black p-6 dark:bg-white'
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            <div>
              <ArrowUpToLine className='h-8 w-8 text-white dark:text-black' />
            </div>
          </button>
        )}
      </div>
    </MaxContainer>
  );
};

export default Collection;
