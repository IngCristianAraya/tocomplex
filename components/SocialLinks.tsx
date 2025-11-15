import { Instagram, Facebook, Music2, Youtube, Twitter, Linkedin, Twitch, Github } from 'lucide-react';
import { SocialMedia } from '@/data/types';

const styles = {
  instagram: 'bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600 text-white',
  facebook: 'bg-blue-600 text-white',
  tiktok: 'bg-black text-white',
  youtube: 'bg-white text-red-600',
  x: 'bg-black text-white',
  linkedin: 'bg-white text-sky-700',
  twitch: 'bg-purple-100 text-purple-600',
  github: 'bg-zinc-900 text-white',
};

export default function SocialLinks({ links }: { links: SocialMedia }) {
  const items = [
    { key: 'instagram', href: links.instagram, icon: Instagram, className: styles.instagram, label: 'Instagram' },
    { key: 'facebook', href: links.facebook, icon: Facebook, className: styles.facebook, label: 'Facebook' },
    { key: 'tiktok', href: links.tiktok, icon: Music2, className: styles.tiktok, label: 'TikTok' },
    { key: 'youtube', href: links.youtube, icon: Youtube, className: styles.youtube, label: 'YouTube' },
    { key: 'x', href: links.x, icon: Twitter, className: styles.x, label: 'X' },
    { key: 'linkedin', href: links.linkedin, icon: Linkedin, className: styles.linkedin, label: 'LinkedIn' },
    { key: 'twitch', href: links.twitch, icon: Twitch, className: styles.twitch, label: 'Twitch' },
    { key: 'github', href: links.github, icon: Github, className: styles.github, label: 'GitHub' },
  ].filter((i) => Boolean(i.href));

  return (
    <div className="flex gap-2 justify-center">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={item.key}
            href={item.href as string}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${item.label}`}
            title={item.label}
            className={`rounded-full p-3 ${item.className} transition-transform hover:scale-105`}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}