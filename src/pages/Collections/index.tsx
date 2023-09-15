import MaxContainer from '@/components/MacContainer';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { collectionsData } from '@/constants';
import Images from '@/components/Images';
import Modal from '@/components/Modal';
import Slides from '@/components/Slides';
import type { CollectionsDataType } from '@/components/type';
import { cn } from '@/lib/utils';

type PaginationType = {
  pages: number[];
  totalPage: number;
  currentPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

const Collections: React.FC = () => {
  const [category, setCategory] = React.useState('home');
  const [limit, setLimit] = React.useState(12);
  const [openModal, setOpenModal] = React.useState(false);
  const [initSlide, setInitSlide] = React.useState(0);
  const [filteredData, setFilteredData] = React.useState<CollectionsDataType[]>([]);
  const [pagination, setPagination] = React.useState<PaginationType | null>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = React.useState(1);
  const [offset, setOffset] = React.useState(0);

  // 獲取顯示偏移量
  const getOffset = React.useCallback(
    (limitNumber = 12, page = 1) => (page - 1) * limitNumber,
    [],
  );

  // 獲取分頁資訊
  const getPagination = React.useCallback(
    (limitNumber = 12, pageNumber = 1, total = 50) => {
      const totalPage = Math.ceil(total / limitNumber);
      const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
      const currentPage =
        pageNumber < 1 ? 1 : pageNumber > totalPage ? totalPage : pageNumber;
      const hasPrevPage = currentPage - 1 >= 1;
      const hasNextPage = currentPage + 1 <= totalPage;
      return {
        pages,
        totalPage,
        currentPage,
        hasPrevPage,
        hasNextPage,
      };
    },
    [],
  );

  // 獲取頁面高度，如過超過900就改為顯示20筆資料
  React.useEffect(() => {
    if (window.innerHeight > 900) {
      setLimit(20);
    }
  });

  // 更新偏移量和pagination
  React.useEffect(() => {
    setOffset(getOffset(limit, page));
    setPagination(getPagination(limit, page, filteredData.length));
  }, [limit, page, filteredData]);

  // 更新作品分類
  React.useEffect(() => {
    const filtered = collectionsData.filter((item) => item.category === category);
    setFilteredData(filtered);
  }, [category]);

  return (
    <MaxContainer>
      {/* 標籤 */}
      <div className='h-screen max-md:h-auto'>
        <div className='mt-5 flex w-full justify-center'>
          <Tabs defaultValue='home' className='flex w-full flex-col items-center'>
            <TabsList>
              <TabsTrigger value='home' onClick={() => setCategory('home')}>
                居住空間
              </TabsTrigger>
              <TabsTrigger value='company' onClick={() => setCategory('company')}>
                商業空間
              </TabsTrigger>
            </TabsList>
            <TabsContent value='home'>
              <div className='grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 xl:px-20'>
                {filteredData.slice(offset, offset + limit).map((item, index) => (
                  <Images
                    key={item.label}
                    img={item}
                    slideNum={index}
                    onSetOpenModal={() => setOpenModal(true)}
                    onSetInitSlide={setInitSlide}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value='company'>
              <div className='grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 xl:px-20'>
                {filteredData.map((item, index) => (
                  <Images
                    key={item.label}
                    img={item}
                    slideNum={index}
                    onSetOpenModal={() => setOpenModal(true)}
                    onSetInitSlide={setInitSlide}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* 分頁 */}
        {(pagination?.hasNextPage || pagination?.hasPrevPage) && (
          <div className='flex justify-center pt-8'>
            <ul className='flex items-center space-x-1 font-light'>
              {pagination.pages.map((pageItem) => (
                <li
                  key={`paginationItem-${pageItem}`}
                  className={cn('rounded-full border', {
                    'border-gray-300 hover:border-orange-200 hover:bg-orange-200':
                      page !== pageItem,
                    'border-orange-500/80 bg-orange-500/80': page === pageItem,
                  })}
                >
                  <button
                    className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-full bg-transparent p-0 text-base',
                      {
                        'text-gray-500 dark:text-gray-300 dark:hover:text-black':
                          page !== pageItem,
                        'text-white': page === pageItem,
                      },
                    )}
                    onClick={() => setPage(pageItem)}
                  >
                    {pageItem}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 作品單頁彈跳窗 */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Slides
          images={filteredData.slice(offset, offset + limit)}
          initSlide={initSlide}
          autoPlay={false}
        />
      </Modal>
    </MaxContainer>
  );
};

export default Collections;
