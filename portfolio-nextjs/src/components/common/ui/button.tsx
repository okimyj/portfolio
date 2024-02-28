export default function Button({ className, children }: { className?: string; children: React.ReactNode }) {
  return <button className={['border px-2', className].join(' ')}>{children}</button>;
}
