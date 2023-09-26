import { Mail, PhoneCall, Map } from 'lucide-react';
import React from 'react';
import GoogleMaps from '@/pages/Contact/components/GoogleMaps';

const Contact: React.FC = () => {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-wrap justify-between p-4 max-md:pb-0'>
      <div className='basis-6/12 max-md:basis-full'>
        <h1 className='text-center text-2xl font-bold'>聯絡資訊</h1>
        <div className='py-4'>
          <div className='flex items-center pb-4 max-md:flex-col max-md:items-start'>
            <PhoneCall className='h-8 w-8' />
            <div className='px-4 text-lg max-md:p-0 max-md:py-4'>
              <h1>聯絡電話</h1>
              <h1>0900 427 410</h1>
            </div>
          </div>

          <div className='flex items-center pb-4 max-md:flex-col max-md:items-start'>
            <Mail className='h-8 w-8' />
            <div className='px-4 text-lg max-md:p-0 max-md:py-4'>
              <h1>E-mail</h1>
              <h1>wurealm.design@gmail.com</h1>
            </div>
          </div>

          <div className='flex items-center pb-4 max-md:flex-col max-md:items-start'>
            <Map className='h-8 w-8' />
            <div className='px-4 text-lg max-md:p-0 max-md:py-4'>
              <h1>地址</h1>
              <h1>新北市樹林區忠孝街107號2樓</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[500px] basis-6/12 max-md:basis-full'>
        <GoogleMaps />
      </div>
    </div>
  );
};

export default Contact;
