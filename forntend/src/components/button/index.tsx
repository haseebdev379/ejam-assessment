import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export default function Button({
  variant = 'filled',
  children,
  startIcon,
  endIcon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-4 py-2 rounded font-medium inline-flex items-center space-x-2 w-max px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50';
  const variantStyles = {
    filled: 'bg-primary text-white hover:bg-primary-700 focus:ring-blue-500',
    outlined:
      'border border-primary text-primary hover:bg-primary-100 focus:ring-blue-500',
    text: 'text-primary hover:bg-primary-100',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button {...props} className={combinedStyles}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
