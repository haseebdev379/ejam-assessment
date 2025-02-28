import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function TableHead({
  children,
  className = '',
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>) {
  return (
    <thead className={`bg-gray-100 sticky top-0 z-10 ${className}`} {...rest}>
      {children}
    </thead>
  );
}
