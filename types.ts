
export enum Platform {
  INSTAGRAM_REELS = 'Instagram Reels',
  INSTAGRAM_FEED = 'Instagram Feed',
  YOUTUBE_SHORTS = 'YouTube Shorts',
  TIKTOK = 'TikTok'
}

export enum DeviceType {
  IPHONE_15_PRO_MAX = 'iPhone 15 Pro Max',
  IPHONE_15_PRO = 'iPhone 15 Pro',
  IPHONE_SE = 'iPhone SE (3rd Gen)',
  SAMSUNG_S24_ULTRA = 'Samsung S24 Ultra',
  PIXEL_8_PRO = 'Google Pixel 8 Pro',
  NOTHING_PHONE_2 = 'Nothing Phone (2)',
}

export enum ScalingMode {
  FILL = 'Fill (Full Screen)',
  FIT = 'Fit (Safe Margin View)',
}

export interface MediaState {
  url: string;
  type: 'image' | 'video';
  file: File | null;
}

export interface UIConfig {
  showSafeAreas: boolean;
  showUIOverlay: boolean;
  platform: Platform;
  device: DeviceType;
  scaling: ScalingMode;
}
