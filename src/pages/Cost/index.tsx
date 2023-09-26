import MaxContainer from '@/components/MacContainer';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { costData } from '@/constants';

const Cost: React.FC = () => {
  return (
    <MaxContainer>
      <div className='p-4 max-md:p-0'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='text-center text-lg max-md:text-sm'>
                服務內容
              </TableHead>
              <TableHead className='text-center text-lg max-md:text-sm'>
                設計費用標準
              </TableHead>
              <TableHead className='text-center text-lg max-md:text-sm'>
                工程費用建議
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {costData.map((item) => (
              <TableRow key={item.title}>
                <TableCell className='text-center text-lg font-medium max-md:text-sm'>
                  {item.title}
                </TableCell>
                <TableCell className='text-center text-lg max-md:text-sm'>
                  {item.designCost}
                </TableCell>
                <TableCell className='text-center text-lg max-md:text-sm'>
                  {item.workCost}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className='text-sm max-md:p-4 max-md:pb-0 max-md:text-xs'>
          <h1>委任設計/工程 最小承攬面積：15坪（實內設計坪）</h1>
          <h1>設計費用未滿20坪，以20坪計算(實内設計坪)</h1>
          <h1>最低工程承攬金額：6萬元起/實際施工坪</h1>
          <h1>工程承攬金額不：家具,窗飾,擺飾,空調,家電(協助設計、選樣)</h1>
          <h1>工程監管費用為總工程款費用之5-8%(依設計或現況複雜度為準則)</h1>
        </div>
      </div>
    </MaxContainer>
  );
};

export default Cost;
