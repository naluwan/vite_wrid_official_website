import React from 'react';
import { cn } from '@/lib/utils';

import { useTheme } from '@/components/ThemeProvider';

type ToggleSwitchProps = {
  onSetOpenPanel: (open: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  const { onSetOpenPanel } = props;
  const { theme, setTheme } = useTheme();

  const atClickSwitch = React.useCallback((witchTheme: string) => {
    setTheme(witchTheme === 'dark' ? 'light' : 'dark');
    onSetOpenPanel(false);
  }, []);

  return (
    <button
      onClick={() => atClickSwitch(theme)}
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
