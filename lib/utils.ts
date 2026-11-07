import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** True when a media URL points at a video file (mp4/webm/ogg/mov/m4v), ignoring query/hash. */
export function isVideoUrl(url?: string | null): boolean {
  if (!url) return false;
  const path = url.split(/[?#]/)[0].toLowerCase();
  return /\.(mp4|webm|ogv|ogg|mov|m4v)$/.test(path);
}
