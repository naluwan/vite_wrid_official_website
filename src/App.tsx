import './App.css';

import React from 'react';
import NavBar from '@/components/NavBar';
// import MaxContainer from '@/components/MacContainer';
import { Route, Routes } from 'react-router-dom';

import About from '@/pages/About';
import WorkFlow from '@/pages/WorkFlow';
import Collections from '@/pages/Collections';
import NotFound from '@/pages/NotFound';
import Footer from '@/sections/Footer';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Collection from '@/pages/Collection';
import Cost from '@/pages/Cost';
import MaxContainer from './components/MacContainer';

export interface IRef {
  getDiv: () => HTMLDivElement;
  getButton: () => HTMLButtonElement;
}

const App: React.FC = () => {
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
        <div className='flex-1'>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<WorkFlow />} path='/workFlow' />
            <Route element={<Cost />} path='/cost' />
            <Route element={<Collections />} path='/collections' />
            <Route element={<Contact />} path='/contact' />
            <Route element={<Collection />} path='/:collectionName' />
            <Route element={<NotFound />} path='*' />
          </Routes>
        </div>
      </MaxContainer>
      <Footer />
    </main>
  );
};

export default App;
