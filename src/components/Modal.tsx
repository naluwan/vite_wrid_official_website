import React from 'react';
import ReactDOM from 'react-dom';

import { X } from 'lucide-react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = (props) => {
  const { open, onClose, children } = props;

  return ReactDOM.createPortal(
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex cursor-default items-center justify-center backdrop-blur-sm transition-colors ${
        open ? 'visible bg-background/80 dark:bg-background/80' : 'invisible'
      }`}
      role='button'
      tabIndex={-1}
    >
      {/* 關閉 X按鈕 */}
      <button
        className={`absolute right-1 top-2 bg-transparent p-1 text-black duration-500 hover:scale-125 dark:text-white lg:right-2 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      >
        <X className='h-8 w-8' strokeWidth={3} />
      </button>
      {/* modal */}
      <div
        className={`h-auto w-full overflow-auto rounded-lg duration-500 ease-in-out max-sm:max-md:rounded-none ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        role='contentinfo'
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
