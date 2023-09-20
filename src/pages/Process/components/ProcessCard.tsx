import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

type ProcessCardProps = {
  icon: React.ReactElement;
  title: string;
  content: React.ReactElement;
};

const ProcessCard: React.FC<ProcessCardProps> = (props) => {
  const { icon, title, content } = props;
  return (
    <Card className='border-stone-950 transition-all duration-500 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-stone-900 dark:hover:shadow-[4.0px_8.0px_8.0px_#83838360]'>
      <CardHeader>
        <CardTitle className='flex font-NotoSerif'>
          {icon}
          <span className='text-3xl'>{title}</span>
        </CardTitle>
      </CardHeader>
      {content}
    </Card>
  );
};

export default ProcessCard;
