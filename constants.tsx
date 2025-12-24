
import React from 'react';
import { Platform, DeviceType } from './types';
import { Instagram, Youtube, Video, Smartphone } from 'lucide-react';

export const PLATFORMS_DATA = [
  {
    id: Platform.INSTAGRAM_REELS,
    name: 'Instagram Reels',
    icon: <Video className="w-5 h-5" />,
    aspectRatio: '9/16',
    description: '2025 Modern Reels Layout'
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
    description: 'YouTube vertical player'
  },
  {
    id: Platform.TIKTOK,
    name: 'TikTok',
    icon: <Smartphone className="w-5 h-5" />,
    aspectRatio: '9/16',
    description: 'TikTok immersive player'
  }
];

export const DEVICES_DATA = {
  [DeviceType.IPHONE_15_PRO_MAX]: { width: 340, height: 730, radius: '3.5rem', notch: 'dynamic' },
  [DeviceType.IPHONE_15_PRO]: { width: 310, height: 670, radius: '3.2rem', notch: 'dynamic' },
  [DeviceType.IPHONE_SE]: { width: 280, height: 500, radius: '1rem', notch: 'bezel' },
  [DeviceType.SAMSUNG_S24_ULTRA]: { width: 350, height: 740, radius: '1rem', notch: 'punch' },
  [DeviceType.PIXEL_8_PRO]: { width: 330, height: 710, radius: '2.5rem', notch: 'punch' },
  [DeviceType.NOTHING_PHONE_2]: { width: 320, height: 700, radius: '2.8rem', notch: 'punch' },
};
