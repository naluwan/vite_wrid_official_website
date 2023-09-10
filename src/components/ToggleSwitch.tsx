import React from 'react';
import { cn } from '@/lib/utils';

import { useTheme } from '@/components/ThemeProvider';

const ToggleSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn('relative flex h-8 w-16 rounded-full bg-gray-600', {
        'bg-green-500': theme === 'dark',
      })}
    >
      <span
        className={cn(
          'absolute bottom-0 h-8 w-8 rounded-full border-[1px] border-black bg-white px-4',
          {
            'right-0': theme === 'dark',
            'left-0': theme !== 'dark',
          },
        )}
      />
    </button>
  );
};

export default ToggleSwitch;
