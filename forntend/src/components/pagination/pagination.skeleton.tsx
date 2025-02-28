import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Button from '@/components/button';

export default function PaginationSkeleton() {
  return (
    <div className="flex justify-center items-center space-x-3 w-full max-w-md mx-auto">
      <Button
        variant="text"
        className="rounded-full h-8 w-8 items-center !p-3 flex justify-center"
        disabled
      >
        <FaChevronLeft />
      </Button>
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"
        />
      ))}
      <Button
        variant="text"
        className="rounded-full h-8 w-8 items-center !p-3 flex justify-center"
        disabled
      >
        <FaChevronRight />
      </Button>
    </div>
  );
}
