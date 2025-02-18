type AnnouncementBarProps = {
  text: string;
}

export function AnnouncementBar({text}: AnnouncementBarProps) {
  return (
    <div
      className="bg-[var(--color-background)] text-[var(--color-foreground)] text-center py-3 font-[--font-heading-family] text-sm tracking-widest">
      {text}
    </div>
  );
}