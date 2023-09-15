import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='text-blacks absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-0 bg-white p-5 text-sm leading-5 dark:bg-black dark:text-white'>
      <p className='m-0'>吾境設計股份有限公司 版權所有</p>
      <p className='m-0'>Copyright © WRID Design Co. Ltd. All rights reserved.</p>
      <p className='m-0'>Powered by NaLuWan</p>
    </div>
  );
};

export default Footer;
