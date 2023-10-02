import { Mail, PhoneCall, Map } from 'lucide-react';
import React from 'react';
import GoogleMaps from '@/pages/Contact/components/GoogleMaps';
import LineBtn from '@/assets/icons/lineBtn.png';
import LineBtnWhite from '@/assets/icons/LineBtnWhite.png';
import fbBtn from '@/assets/icons/fbBtn.png';
import igBtn from '@/assets/icons/igBtn.png';
import { useTheme } from '@/components/ThemeProvider';

const contactData = [
  {
    title: '聯絡電話',
    icon: <PhoneCall className='h-8 w-8' />,
    content: '0900 427 410',
    src: '',
  },
  {
    title: 'Line',
    icon: LineBtn,
    iconDark: LineBtnWhite,
    content: '點擊圖標，加Line諮詢',
    src: 'https://line.me/ti/p/QRKALR7F0n',
  },
  {
    title: 'E-mail',
    icon: <Mail className='h-8 w-8' />,
    content: 'wurealm.design@gmail.com',
  },
  {
    title: '地址',
    icon: <Map className='h-8 w-8' />,
    content: '新北市樹林區忠孝街107號2樓',
  },
];

const socialMediaData = [
  {
    title: 'facebook',
    src: 'https://www.facebook.com/profile.php?id=100091738475786',
    icon: fbBtn,
  },
  {
    title: 'instagram',
    src: 'https://www.instagram.com/wurealm_design/',
    icon: igBtn,
  },
];

const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className='mx-auto flex max-w-screen-lg flex-wrap justify-between p-4 max-md:pb-0'>
      <div className='basis-6/12 max-md:basis-full'>
        <h1 className='text-center text-2xl font-bold'>聯絡資訊</h1>
        <div className='py-4'>
          {/* 聯絡資訊 */}
          {contactData.map((item) => {
            if (item.title === 'Line') {
              return (
                <div
                  className='flex items-center pb-4 max-md:flex-col max-md:items-start'
                  key={item.title}
                >
                  <a href={item.src} target='_blank' rel='noreferrer'>
                    <img
                      src={
                        theme === 'light'
                          ? (item.icon as string)
                          : (item.iconDark as string)
                      }
                      alt='LineBtn'
                      className='h-8 w-8'
                    />
                  </a>
                  <div className='px-4 text-lg max-md:p-0 max-md:py-4'>
                    <a href={item.src} target='_blank' rel='noreferrer'>
                      <h1 className='font-semibold'>{item.title}</h1>
                    </a>
                    <h1>{item.content}</h1>
                  </div>
                </div>
              );
            }
            return (
              <div
                className='flex items-center pb-4 max-md:flex-col max-md:items-start'
                key={item.title}
              >
                {item.icon}
                <div className='px-4 text-lg max-md:p-0 max-md:py-4'>
                  <h1 className='font-semibold'>{item.title}</h1>
                  <h1>{item.content}</h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* 社群連結 */}
        <div className='flex gap-2 pb-4'>
          {socialMediaData.map((item) => (
            <div className='group h-8 w-8 overflow-hidden rounded-full' key={item.title}>
              <a href={item.src} target='_black'>
                <img
                  src={item.icon}
                  alt='fbBtn'
                  className='h-8 w-8 group-hover:opacity-80'
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[500px] basis-6/12 max-md:basis-full'>
        <GoogleMaps />
      </div>
    </div>
  );
};

export default Contact;
