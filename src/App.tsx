import './App.css';

import React from 'react';
import NavBar from '@/components/NavBar';
import MaxContainer from '@/components/MacContainer';
import { Route, Routes } from 'react-router-dom';

import About from '@/pages/About';
import Process from '@/pages/Process';
import Collections from '@/pages/Collections';
import NotFound from '@/pages/NotFound';
import Footer from '@/sections/Footer';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';

export interface IRef {
  getDiv: () => HTMLDivElement;
  getButton: () => HTMLButtonElement;
}

const App: React.FC = () => {
  // const { theme, setTheme } = useTheme();

  // return (
  //   <div className='flex w-full items-center justify-center text-center text-xl'>
  //     <div>Vite + React + Typescript + Eslint + Prettier + TailWindCSS</div>

  //   </div>
  // );
  const [openPanel, setOpenPanel] = React.useState(false);

  // popover panel ref
  const panelRef = React.useRef<IRef>(null);

  // 畫面點擊時，如果element沒有包含在popoverRef底下的話，就關閉panel
  window.addEventListener('mousedown', (e) => {
    if (
      panelRef.current &&
      !panelRef.current.getDiv().contains(e.target as HTMLElement) &&
      !panelRef.current.getButton().contains(e.target as HTMLElement)
    ) {
      setOpenPanel(false);
    }
  });

  return (
    <main className='relative'>
      <NavBar ref={panelRef} openPanel={openPanel} onSetOpenPanel={setOpenPanel} />
      <MaxContainer>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Process />} path='/process' />
          <Route element={<Collections />} path='/collections' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </MaxContainer>
      <Footer />
    </main>
  );
};

export default App;
