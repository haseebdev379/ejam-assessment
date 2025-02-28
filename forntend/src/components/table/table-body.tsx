import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function TableBody({
  children,
  className = '',
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>) {
  return (
    <tbody className={`${className}`} {...rest}>
      {children}
    </tbody>
  );
}
