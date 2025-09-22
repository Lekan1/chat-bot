// components/ui/Avatar.tsx
// Generic avatar component.

type Props = { src: string; alt: string; size?: number };

export default function Avatar({ src, alt, size = 40 }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}
