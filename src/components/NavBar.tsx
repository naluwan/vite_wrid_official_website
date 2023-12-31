import React from 'react';
import newLogo from '@/assets/images/newLogo.png';
import newLogoWhite from '@/assets/images/newLogoWhite.png';
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
  BadgeDollarSign,
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
      <nav className='mt-4 box-border flex h-[70px] max-w-screen-2xl items-center justify-between px-2 lg:mx-auto xl:px-20'>
        <Link to='/' className='flex items-center'>
          <img
            src={theme === 'light' ? newLogo : newLogoWhite}
            alt='logo'
            width={70}
            height={70}
          />
        </Link>
        <ul className='flex h-full items-end justify-end gap-12 px-3 max-lg:hidden'>
          {navLinks.map((link: { href: string; label: string }) => (
            <li
              key={link.label}
              className='hover:transition-translate-y-1 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-[#6c6c6c]'
            >
              <Link
                to={link.href}
                className='text-base leading-normal text-black dark:text-white'
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
              className='group h-1 w-1 bg-transparent px-0 hover:bg-transparent'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Moon className='absolute bottom-[0.125rem] h-6 w-6 transition duration-300 ease-in-out group-hover:scale-110' />
              ) : (
                <Sun className='absolute h-6 w-6 text-black transition duration-300 ease-in-out group-hover:scale-110' />
              )}

              <span className='sr-only'>Toggle Theme</span>
            </Button>
          </li>
        </ul>

        <div className='group relative z-10 m-0 hidden rounded-lg pl-2 max-lg:block'>
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
                  className='w-full bg-transparent p-0'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/');
                  }}
                >
                  <div className='hamburgerItem'>
                    {/* left icon */}
                    <div className='leftIconDiv'>
                      <Home className='leftIcon' />
                    </div>

                    {/* right text */}
                    <div className='flex-1'>
                      <p className='rightText'>首頁</p>
                    </div>
                  </div>
                  <div className='border-b border-dotted border-black dark:border-white' />
                </button>
              </div>

              {/* 關於我們 */}
              <div className='mb-2'>
                <button
                  className='w-full bg-transparent p-0'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/about');
                  }}
                >
                  <div className='hamburgerItem'>
                    {/* left icon */}
                    <div className='leftIconDiv'>
                      <MessageCircle className='leftIcon' />
                    </div>

                    {/* right text */}
                    <div className='flex-1'>
                      <p className='rightText'>關於我們</p>
                    </div>
                  </div>
                  <div className='border-b border-dotted border-black dark:border-white' />
                </button>
              </div>

              {/* 設計流程 */}
              <div className='mb-2'>
                <button
                  className='w-full bg-transparent p-0'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/workFlow');
                  }}
                >
                  <div className='hamburgerItem'>
                    {/* left icon */}
                    <div className='leftIconDiv'>
                      <LayoutDashboard className='leftIcon' />
                    </div>

                    {/* right text */}
                    <div className='flex-1'>
                      <p className='rightText'>設計流程</p>
                    </div>
                  </div>
                  <div className='border-b border-dotted border-black dark:border-white' />
                </button>
              </div>

              {/* 作品欣賞 */}
              <div className='mb-2'>
                <button
                  className='w-full bg-transparent p-0'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/collections');
                  }}
                >
                  <div className='hamburgerItem'>
                    {/* left icon */}
                    <div className='leftIconDiv'>
                      <FileStack className='leftIcon' />
                    </div>

                    {/* right text */}
                    <div className='flex-1'>
                      <p className='rightText'>作品欣賞</p>
                    </div>
                  </div>
                  <div className='border-b border-dotted border-black dark:border-white' />
                </button>
              </div>

              {/* 收費標準 */}
              <div className='mb-2'>
                <button
                  className='w-full bg-transparent p-0'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/cost');
                  }}
                >
                  <div className='hamburgerItem'>
                    {/* left icon */}
                    <div className='leftIconDiv'>
                      <BadgeDollarSign className='leftIcon' />
                    </div>

                    {/* right text */}
                    <div className='flex-1'>
                      <p className='rightText'>收費標準</p>
                    </div>
                  </div>
                  <div className='border-b border-dotted border-black dark:border-white' />
                </button>
              </div>

              {/* 聯絡我們 */}
              <div className='mb-2'>
                <button
                  className='w-full bg-transparent p-0'
                  onClick={() => {
                    onSetOpenPanel(false);
                    go('/contact');
                  }}
                >
                  <div className='hamburgerItem'>
                    {/* left icon */}
                    <div className='leftIconDiv'>
                      <MapPin className='leftIcon' />
                    </div>

                    {/* right text */}
                    <div className='flex-1'>
                      <p className='rightText'>聯絡我們</p>
                    </div>
                  </div>
                  <div className='border-b border-dotted border-black dark:border-white' />
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
                  <ToggleSwitch />
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
