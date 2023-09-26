import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type ProcessCardProps = {
  icon: React.ReactElement;
  title: string;
  content: React.ReactElement;
};

const WorkFlowCard: React.FC<ProcessCardProps> = (props) => {
  const { icon, title, content } = props;
  return (
    <Card className='border-none shadow-none transition-all duration-700 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-black dark:hover:shadow-[4.0px_8.0px_8.0px_white]'>
      <CardHeader className='flex items-center'>
        <CardTitle>{icon}</CardTitle>
        <CardDescription className='pt-4 font-NotoSerif text-2xl'>
          {title}
        </CardDescription>
      </CardHeader>
      {content}
    </Card>
  );
};

export default WorkFlowCard;
