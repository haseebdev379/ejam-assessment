import { DetailedHTMLProps, TableHTMLAttributes } from 'react';

export default function Table({
  children,
  className = '',
  ...rest
}: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) {
  return (
    <table
      className={`w-full border-collapse border border-gray-200 ${className}`}
      {...rest}
    >
      {children}
    </table>
  );
}
