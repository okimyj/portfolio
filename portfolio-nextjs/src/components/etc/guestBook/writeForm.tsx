'use client';
import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input';
import useGuestBook from '@/hooks/firebase/guestBook/useGuestBook';
import { GuestBookFormData } from '@/types/customTypes';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ReactQuill = dynamic(async () => await import('react-quill'), { ssr: false, loading: () => <div>Loading...</div> });
import 'react-quill/dist/quill.snow.css';
export default function GuestBookWriteForm() {
  const { addGuestBook } = useGuestBook();
  const { register, setValue, trigger, reset, handleSubmit } = useForm<GuestBookFormData>();
  const [contents, setContents] = useState<string>('');
  const onChangeContents = (value: string) => {
    setContents(value);
  };

  const resetFields = () => {
    reset();
    setContents('');
  };
  useEffect(() => {
    setValue('contents', contents === '<p><br></p>' ? '' : contents);
    trigger('contents');
  }, [contents]);

  return (
    <form onSubmit={handleSubmit(addGuestBook)}>
      <div className="flex space-x-4 mb-5">
        <Input title="Name " type="text" register={register('writer')} />
        <Input title="PassWord " type="password" register={register('password')} />
      </div>
      <ReactQuill onChange={onChangeContents}></ReactQuill>
      <div className="w-full flex justify-end">
        <Button className="mt-2">Add</Button>
      </div>
    </form>
  );
}
