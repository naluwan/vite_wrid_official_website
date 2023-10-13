import React from 'react';
import {
  CircleDollarSign,
  ClipboardCheck,
  Home,
  Lightbulb,
  MessagesSquare,
  PencilRuler,
  PenSquare,
  Ruler,
} from 'lucide-react';
import WorkFlowCard from './components/WorkFlowCard';
import { CardContent } from '@/components/ui/card';

const WorkFlow: React.FC = () => {
  return (
    <div className='h-full p-4 max-lg:h-auto xl:px-20'>
      <div className='flex flex-col items-center'>
        <h1 className='font-NotoSerif text-4xl'>Work Flow</h1>
        <p className='tracking-widest max-sm:text-sm'>
          • 新成屋、毛胚屋、中古屋、辦公空間、商業空間 •
        </p>
      </div>
      <div className='grid gap-4 lg:grid-cols-4'>
        {/* 詢問需求 */}
        <WorkFlowCard
          icon={<MessagesSquare className='mr-2 h-28 w-28 text-black dark:text-white' />}
          title='1.詢問需求'
          content={
            <CardContent className='text-center text-base'>
              <p>了解客戶成員、空間需求、裝修預算、起居環境及喜好風格</p>
            </CardContent>
          }
        />

        {/* 現場丈量 */}
        <WorkFlowCard
          icon={<Ruler className='mr-2 h-28 w-28 text-black dark:text-white' />}
          title='2.現埸丈量'
          content={
            <CardContent className='text-center text-base'>
              <p>實地丈量、拍照做為設計規劃的依據</p>
            </CardContent>
          }
        />

        {/* 設計提案 */}
        <WorkFlowCard
          icon={<Lightbulb className='mr-2 h-28 w-28 text-black dark:text-white' />}
          title='3.設計提案'
          content={
            <CardContent className='text-center text-base'>
              <p>提案内容包含：公區渲染圖、平面配置、動線配置、光影分析等</p>
            </CardContent>
          }
        />

        {/* 設計委任 */}
        <WorkFlowCard
          icon={<PenSquare className='mr-2 h-28 w-28 text-black dark:text-white' />}
          title='4.設計委任'
          content={
            <CardContent className='text-center text-base'>
              <p>
                <span className='font-NotoSerif'>1.</span>簽訂設計合約
              </p>
              <p>
                <span className='font-NotoSerif'>2.</span>根據設計草案做必要之修正
              </p>
              <p>
                <span className='font-NotoSerif'>3.</span>收取階段性設計費用
              </p>
            </CardContent>
          }
        />

        {/* 圖面繪製 */}
        <WorkFlowCard
          icon={<PencilRuler className='mr-2 h-28 w-28 text-black dark:text-white' />}
          title='5.圖面繪製'
          content={
            <CardContent className='text-center text-base'>
              <p>繪製設計合約內容包含：3D圖面、平面系統圖、立面施工圖、細部大樣圖</p>
            </CardContent>
          }
        />

        {/* 工程報價 */}
        <WorkFlowCard
          icon={
            <CircleDollarSign className='mr-2 h-28 w-28 text-black dark:text-white' />
          }
          title='6.工程報價'
          content={
            <CardContent className='text-center text-base'>
              <p>以設計圖面之内容為準則</p>
              <p>進行工程完整報價、材質打樣及進度排程討論</p>
            </CardContent>
          }
        />

        {/* 工程合約 */}
        <WorkFlowCard
          icon={<ClipboardCheck className='mr-2 h-28 w-28 text-black dark:text-white' />}
          title='7.工程合約'
          content={
            <CardContent className='text-center text-base'>
              <p>
                <span className='font-NotoSerif'>1.</span>
                以設計圖面之内容附件合併至工程約
              </p>
              <p>
                <span className='font-NotoSerif'>2.</span>以合約進度收取階段性工程費用
              </p>
              <p>
                <span className='font-NotoSerif'>3.</span>
                確保工程進度及品質及依照圖面施工
              </p>
            </CardContent>
          }
        />

        {/* 完工交屋 */}
        <WorkFlowCard
          icon={<Home className='mr-2 h-28 w-28 text-black dark:text-white' />}
          title='8.完工交屋'
          content={
            <CardContent className='text-center text-base'>
              <p>現場驗收交屋測試，並附上保固書，拍攝交屋結案</p>
            </CardContent>
          }
        />
      </div>
    </div>
  );
};

export default WorkFlow;
