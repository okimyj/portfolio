import { ButtonHTMLAttributes, HTMLProps } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}
export default function Button({ className, children, ...rest }: IButtonProps) {
  return (
    <button className={['border px-2', className].join(' ')} {...rest}>
      {children}
    </button>
  );
}
