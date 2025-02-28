import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Button from '@/components/button';
import PaginationSkeleton from '@/components/pagination/pagination.skeleton';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  loading,
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | '...')[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 4) {
        pages.push('...');
      }

      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 w-full max-w-md mx-auto">
      {loading ? (
        <PaginationSkeleton />
      ) : (
        <>
          <Button
            variant="text"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="rounded-full h-8 w-8 items-center !p-3 flex justify-center"
          >
            <FaChevronLeft />
          </Button>

          {getPages().map((page, index) =>
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            ) : (
              <Button
                key={page}
                onClick={() => onPageChange(page)}
                variant={page === currentPage ? 'filled' : 'outlined'}
                disabled={loading}
                className="rounded-full h-8 w-8 items-center !p-3 flex justify-center"
              >
                {page}
              </Button>
            )
          )}

          <Button
            variant="text"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className="rounded-full h-8 w-8 items-center !p-3 flex justify-center"
          >
            <FaChevronRight />
          </Button>
        </>
      )}
    </div>
  );
}
