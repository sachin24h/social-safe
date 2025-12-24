
export enum Platform {
  INSTAGRAM_REELS = 'Instagram Reels',
  INSTAGRAM_FEED = 'Instagram Feed',
  YOUTUBE_SHORTS = 'YouTube Shorts',
  TIKTOK = 'TikTok'
}

export enum DeviceType {
  IPHONE_15_PRO = 'iPhone 15 Pro',
  IPHONE_13_MINI = 'iPhone 13 Mini',
  SAMSUNG_S24_ULTRA = 'Samsung S24 Ultra',
  PIXEL_8_PRO = 'Google Pixel 8 Pro',
}

export enum ScalingMode {
  FILL = 'Fill (Full Screen)',
  FIT = 'Fit (Letterboxed)',
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
  opacity: number;
}
