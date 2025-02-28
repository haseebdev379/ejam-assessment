import { DetailedHTMLProps, TdHTMLAttributes } from 'react';

export default function TableCell({
  children,
  className = '',
  ...rest
}: DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>) {
  return (
    <td className={`border-y border-gray-300 px-4 py-2 ${className}`} {...rest}>
      {children}
    </td>
  );
}
