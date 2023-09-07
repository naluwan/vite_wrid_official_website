import React from 'react';
import navLogoLight from '@/assets/images/navLogoLight.png';
import navLogoDark from '@/assets/images/navLogoDark.png';
import { navLinks } from '@/constants/index';
import { Link, useNavigate } from 'react-router-dom';
import { IRef } from 'App';
import Hamburger from '@/components/Hamburger';

import { Button } from '@/components/ui/button';

import {
  Moon,
  Sun,
  Home,
  MessageCircle,
  LayoutDashboard,
  FileStack,
  MapPin,
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import PopoverPanel from '@/components/PopoverPanel';
import ToggleSwitch from '@/components/ToggleSwitch';

type NavBarProps = {
  openPanel: boolean;
  onSetOpenPanel: (open: boolean) => void;
};

const NavBar = React.forwardRef<IRef, NavBarProps>((props, ref) => {
  const { openPanel, onSetOpenPanel } = props;
  const { theme, setTheme } = useTheme();
  const go = useNavigate();

  // 分別設定div和button的ref
  const divRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // 使用useImperativeHandle來回傳各個ref
  React.useImperativeHandle(ref, () => ({
    getDiv() {
      return divRef.current as HTMLDivElement;
    },
    getButton() {
      return buttonRef.current as HTMLButtonElement;
    },
  }));

  return (
    <header className='absolute top-0 z-50 w-full bg-white dark:bg-black'>
      <nav className='box-border flex h-[60px] items-center justify-between px-2 lg:mx-auto lg:max-w-[1024px] lg:px-4'>
        <Link to='/' className='flex items-center'>
          <img
            src={theme === 'dark' ? navLogoDark : navLogoLight}
            alt='logo'
            width={48}
            height={48}
          />
          <span className='px-2 text-xl font-bold text-black dark:text-white max-lg:hidden'>
            吾境設計
          </span>
        </Link>
        <ul className='flex flex-1 items-center justify-end gap-12 max-lg:hidden'>
          {navLinks.map((link: { href: string; label: string }) => (
            <li
              key={link.label}
              className='hover:transition-translate-y-1 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-[#6c6c6c]'
            >
              <Link
                to={link.href}
                className='text-lg leading-normal text-black dark:text-white'
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className='hover:transition-translate-y-1 transition delay-150 duration-300 ease-in-out hover:scale-110'>
            <Button
              variant='ghost'
              size='icon'
              aria-label='Toggle Theme'
              className='group mr-6 bg-transparent hover:bg-transparent'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Moon className='absolute h-6 w-6 transition duration-300 ease-in-out group-hover:scale-110' />
              ) : (
                <Sun className='absolute h-6 w-6 text-black transition duration-300 ease-in-out group-hover:scale-110' />
              )}

              <span className='sr-only'>Toggle Theme</span>
            </Button>
          </li>
        </ul>

        <div className='group relative z-10 hidden rounded-lg max-lg:block'>
          <Hamburger
            ref={buttonRef}
            openPanel={openPanel}
            onSetOpenPanel={onSetOpenPanel}
          />
          <PopoverPanel ref={divRef} openPanel={openPanel}>
            <>
              {/* 首頁 */}
              <div className='mb-2'>
                <button
                  className='hamburgerItem'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/');
                  }}
                >
                  {/* left icon */}
                  <div className='leftIconDiv'>
                    <Home className='leftIcon' />
                  </div>

                  {/* right text */}
                  <div className='flex-1'>
                    <p className='rightText'>首頁</p>
                  </div>
                </button>
              </div>

              {/* 關於我們 */}
              <div className='mb-2'>
                <button
                  className='hamburgerItem'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/about');
                  }}
                >
                  {/* left icon */}
                  <div className='leftIconDiv'>
                    <MessageCircle className='leftIcon' />
                  </div>

                  {/* right text */}
                  <div className='flex-1'>
                    <p className='rightText'>關於我們</p>
                  </div>
                </button>
              </div>

              {/* 設計流程 */}
              <div className='mb-2'>
                <button
                  className='hamburgerItem'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/process');
                  }}
                >
                  {/* left icon */}
                  <div className='leftIconDiv'>
                    <LayoutDashboard className='leftIcon' />
                  </div>

                  {/* right text */}
                  <div className='flex-1'>
                    <p className='rightText'>設計流程</p>
                  </div>
                </button>
              </div>

              {/* 作品欣賞 */}
              <div className='mb-2'>
                <button
                  className='hamburgerItem'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/collections');
                  }}
                >
                  {/* left icon */}
                  <div className='leftIconDiv'>
                    <FileStack className='leftIcon' />
                  </div>

                  {/* right text */}
                  <div className='flex-1'>
                    <p className='rightText'>作品欣賞</p>
                  </div>
                </button>
              </div>

              {/* 聯絡我們 */}
              <div className='mb-2'>
                <button
                  className='hamburgerItem'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/contact');
                  }}
                >
                  {/* left icon */}
                  <div className='leftIconDiv'>
                    <MapPin className='leftIcon' />
                  </div>

                  {/* right text */}
                  <div className='flex-1'>
                    <p className='rightText'>聯絡我們</p>
                  </div>
                </button>
              </div>

              {/* theme change */}
              <div className='mb-2 flex cursor-pointer items-center rounded-lg p-2 hover:bg-[#e6e6e6] dark:hover:bg-[#1c1c1c]'>
                {/* left icon */}
                <div className='leftIconDiv'>
                  {theme === 'dark' ? (
                    <Moon className='leftIcon' />
                  ) : (
                    <Sun className='leftIcon' />
                  )}
                </div>

                {/* right text */}
                <div className='flex flex-1 justify-center'>
                  <ToggleSwitch onSetOpenPanel={onSetOpenPanel} />
                </div>
              </div>
            </>
          </PopoverPanel>
        </div>
      </nav>
    </header>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
