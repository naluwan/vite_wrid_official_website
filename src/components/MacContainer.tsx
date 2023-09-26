import React from 'react';

type MaxContainerProps = {
  children: React.ReactNode;
};

const MaxContainer: React.FC<MaxContainerProps> = (props) => {
  const { children } = props;
  return (
    <div className='mx-auto my-0 min-h-[100vh] max-w-screen-lg py-[100px] lg:max-w-screen-2xl'>
      {children}
    </div>
  );
};

export default MaxContainer;
