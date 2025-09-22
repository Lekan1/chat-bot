type Props = { message: string };

export default function EmptyState({ message }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <p className="text-[14px] text-inkMuted">{message}</p>
    </div>
  );
}
