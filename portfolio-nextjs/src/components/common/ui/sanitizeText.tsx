'use client';

import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

interface ISanitizeText {
  text: string;
  className?: string;
}
export default function SanitizeText({ text, className }: ISanitizeText) {
  const [contents, setContents] = useState<string>('');
  useEffect(() => {
    setContents(DOMPurify.sanitize(text));
  }, []);
  return <div className={className} dangerouslySetInnerHTML={{ __html: contents }} />;
}
