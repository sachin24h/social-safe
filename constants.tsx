
import React from 'react';
import { Platform, DeviceType } from './types';
import { Instagram, Youtube, Video, Smartphone } from 'lucide-react';

export const PLATFORMS_DATA = [
  {
    id: Platform.INSTAGRAM_REELS,
    name: 'Instagram Reels',
    icon: <Video className="w-5 h-5" />,
    aspectRatio: '9/16',
    description: 'Vertical 9:16 with modern 2024 UI'
  },
  {
    id: Platform.INSTAGRAM_FEED,
    name: 'Instagram Feed',
    icon: <Instagram className="w-5 h-5" />,
    aspectRatio: '4/5',
    description: 'Portrait Feed posts (4:5)'
  },
  {
    id: Platform.YOUTUBE_SHORTS,
    name: 'YouTube Shorts',
    icon: <Youtube className="w-5 h-5" />,
    aspectRatio: '9/16',
    description: 'Shorts vertical player with YouTube UI'
  },
  {
    id: Platform.TIKTOK,
    name: 'TikTok',
    icon: <Smartphone className="w-5 h-5" />,
    aspectRatio: '9/16',
    description: 'TikTok immersive vertical player'
  }
];

export const DEVICES_DATA = {
  [DeviceType.IPHONE_15_PRO]: { width: 320, height: 640, radius: '3rem', notch: 'dynamic' },
  [DeviceType.IPHONE_13_MINI]: { width: 280, height: 560, radius: '2.5rem', notch: 'classic' },
  [DeviceType.SAMSUNG_S24_ULTRA]: { width: 340, height: 680, radius: '0.75rem', notch: 'punch' },
  [DeviceType.PIXEL_8_PRO]: { width: 320, height: 640, radius: '2rem', notch: 'punch' },
};
