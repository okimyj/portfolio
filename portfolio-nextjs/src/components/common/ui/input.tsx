import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  register?: UseFormRegisterReturn;
}
export default function Input({ title, register, ...rest }: IInputProps) {
  return (
    <div>
      {title ? <span>{title}</span> : null}
      <input className="rounded-md border bg-transparent pl-1" {...register} {...rest} />
    </div>
  );
}
