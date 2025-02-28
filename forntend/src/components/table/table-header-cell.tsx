import { DetailedHTMLProps, ThHTMLAttributes } from 'react';

export default function TableHeaderCell({
  children,
  className = '',
  ...rest
}: DetailedHTMLProps<
  ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>) {
  return (
    <th
      className={`border border-gray-300 px-4 py-2 text-left w-1/6 ${className}`}
      {...rest}
    >
      {children}
    </th>
  );
}
