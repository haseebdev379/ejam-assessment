import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'filled' | 'outlined';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label?: string;
}

export default function Input({
  variant = 'outlined',
  startIcon,
  endIcon,
  className = '',
  label,
  required,
  ...props
}: InputProps) {
  const baseStyles = 'w-full px-4 py-2 text-sm rounded ';
  const variantStyles = {
    filled: 'bg-gray-200 text-gray-800',
    outlined: 'border border-gray-300 text-gray-800',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label className="text-sm font-normal" htmlFor={props.id}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {startIcon && (
          <span className="absolute left-3 text-gray-500 pointer-events-none">
            {startIcon}
          </span>
        )}
        <input
          {...props}
          className={`${combinedStyles} ${startIcon ? 'pl-10' : ''} ${
            endIcon ? 'pr-10' : ''
          }`}
        />
        {endIcon && (
          <span className="absolute right-3 text-gray-500 pointer-events-none">
            {endIcon}
          </span>
        )}
      </div>
    </div>
  );
}
