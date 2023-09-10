import React from 'react';

type MaxContainerProps = {
  children: React.ReactNode;
};

const MaxContainer: React.FC<MaxContainerProps> = (props) => {
  const { children } = props;
  return (
    <div className='mx-auto my-0 max-w-screen-lg pt-[90px] lg:max-w-screen-2xl'>
      {children}
    </div>
  );
};

export default MaxContainer;
