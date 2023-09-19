import { ChevronsRight, FileStack } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbProps = {
  collectionLabel: string;
  category: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { collectionLabel, category } = props;

  return (
    <div className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link
            to='/collections'
            className='inline-flex items-center text-2xl font-medium text-gray-700 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-300 max-md:text-base'
          >
            <FileStack className='mr-2.5 h-6 w-6 max-md:h-4 max-md:w-4' />
            作品欣賞
          </Link>
        </li>
        <li className='inline-flex items-center'>
          <ChevronsRight className='mx-1 h-6 w-6 text-gray-400' />
          <Link
            to={`/collections?category=${category}`}
            className='ml-1 inline-flex items-center text-2xl font-medium  text-gray-700 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-300 max-md:text-base md:ml-2'
          >
            {category === 'home' ? '居住空間' : '商業空間'}
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <ChevronsRight className='mx-1 h-6 w-6 text-gray-400' />
            <span className='ml-1 text-2xl font-medium tracking-widest  text-gray-400 dark:text-gray-300 max-md:text-base md:ml-2'>
              {collectionLabel}
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
