import MaxContainer from '@/components/MacContainer';
import React from 'react';
import {
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Lightbulb,
  MessagesSquare,
  PencilRuler,
  PenSquare,
  Ruler,
} from 'lucide-react';
import ProcessCard from './components/ProcessCard';
import { CardContent } from '@/components/ui/card';

const Process: React.FC = () => {
  return (
    <MaxContainer>
      <div className='grid h-full gap-4 p-4 max-lg:h-auto lg:grid-cols-4 xl:px-20'>
        {/* 詢問需求 */}
        <ProcessCard
          icon={<MessagesSquare className='mr-2 h-8 w-8' />}
          title='詢問需求'
          content={
            <CardContent className='text-lg'>
              <p>了解客戶成員、空間需求、裝修預算、起居環境及喜好風格</p>
            </CardContent>
          }
        />

        {/* 現場丈量 */}
        <ProcessCard
          icon={<Ruler className='mr-2 h-8 w-8' />}
          title='現埸丈量'
          content={
            <CardContent className='text-lg'>
              <p>實地丈量、拍照做為設計規劃的依據</p>
            </CardContent>
          }
        />

        {/* 設計提案 */}
        <ProcessCard
          icon={<Lightbulb className='mr-2 h-8 w-8' />}
          title='設計提案'
          content={
            <CardContent className='text-lg'>
              <p>提案内容包含：</p>
              <p>
                <span className='font-NotoSerif'>1.</span>公區渲染圖
              </p>
              <p>
                <span className='font-NotoSerif'>2.</span>平面配置
              </p>
              <p>
                <span className='font-NotoSerif'>3.</span>動線配置
              </p>
              <p>
                <span className='font-NotoSerif'>4.</span>光影分析
              </p>
            </CardContent>
          }
        />

        {/* 設計委任 */}
        <ProcessCard
          icon={<PenSquare className='mr-2 h-8 w-8' />}
          title='設計委任'
          content={
            <CardContent className='text-lg'>
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
        <ProcessCard
          icon={<PencilRuler className='mr-2 h-8 w-8' />}
          title='圖面繪製'
          content={
            <CardContent className='text-lg'>
              <p>繪製設計合約內容包含：</p>
              <p>
                <span className='font-NotoSerif'>1.</span>3D圖面
              </p>
              <p>
                <span className='font-NotoSerif'>2.</span>平面系統圖
              </p>
              <p>
                <span className='font-NotoSerif'>3.</span>立面施工圖
              </p>
              <p>
                <span className='font-NotoSerif'>4.</span>細部大樣圖
              </p>
            </CardContent>
          }
        />

        {/* 工程報價 */}
        <ProcessCard
          icon={<CircleDollarSign className='mr-2 h-8 w-8' />}
          title='工程報價'
          content={
            <CardContent className='text-lg'>
              <p>以設計圖面之内容為準則</p>
              <p>進行工程完整報價、材質打樣及進度排程討論</p>
            </CardContent>
          }
        />

        {/* 工程合約 */}
        <ProcessCard
          icon={<ClipboardCheck className='mr-2 h-8 w-8' />}
          title='工程合約'
          content={
            <CardContent className='text-lg'>
              <p>
                <span className='font-NotoSerif'>1.</span>以設計圖面之内容附件合併至工程約
              </p>
              <p>
                <span className='font-NotoSerif'>2.</span>以合約進度收取階段性工程費用
              </p>
              <p>
                <span className='font-NotoSerif'>3.</span>確保工程進度及品質及依照圖面施工
              </p>
            </CardContent>
          }
        />

        {/* 完工交屋 */}
        <ProcessCard
          icon={<CheckCircle2 className='mr-2 h-8 w-8' />}
          title='完工交屋'
          content={
            <CardContent className='text-lg'>
              <p>現場驗收交屋測試，並附上保固書，拍攝交屋結案</p>
            </CardContent>
          }
        />
      </div>
    </MaxContainer>
  );
};

export default Process;
