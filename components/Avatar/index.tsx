import Image from "next/image";

import { profile } from "@lib/data/profile";

interface AvatarProps {
  size?: number;
  priority?: boolean;
}

export default function Avatar({ size = 64, priority = false }: AvatarProps) {
  return (
    <Image
      src={profile.photo.src}
      alt={profile.photo.alt}
      width={size}
      height={size}
      priority={priority}
      className="rounded-full border border-line object-cover"
    />
  );
}
