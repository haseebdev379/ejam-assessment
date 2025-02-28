import React, { useEffect, useRef } from 'react';

import { RxCross2 } from 'react-icons/rx';

import Button from '@/components/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded-md shadow-lg max-w-2xl p-6 relative min-w-[500px]"
      >
        <Button
          variant="text"
          onClick={onClose}
          className="absolute top-4 right-4 w-max !p-0 hover:bg-transparent text-secondary"
        >
          <RxCross2 />
        </Button>
        {children}
      </div>
    </div>
  );
}
