export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto min-h-screen max-w-5xl p-8">
      {children}
    </div>
  );
}