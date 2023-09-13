import React from 'react';

type PopoverPanelProps = {
  children: React.ReactNode;
  openPanel: boolean;
};

const PopoverPanel = React.forwardRef<HTMLDivElement, PopoverPanelProps>((props, ref) => {
  const { children, openPanel } = props;

  return (
    <div
      className={`popover-panel origin-top transition duration-300 ease-in-out ${
        openPanel ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
});

PopoverPanel.displayName = 'PopoverPanel';

export default PopoverPanel;
