import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function TableRow({
  children,
  className = '',
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>) {
  return (
    <tr
      className={`even:bg-gray-50 hover:bg-gray-100 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </tr>
  );
}
