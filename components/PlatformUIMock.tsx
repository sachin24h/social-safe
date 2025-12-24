
import React from 'react';
import { Platform } from '../types';
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreVertical, 
  Music2, 
  ChevronLeft,
  Search,
  Camera,
  Music,
  UserPlus
} from 'lucide-react';

interface Props {
  platform: Platform;
  opacity: number;
}

const PlatformUIMock: React.FC<Props> = ({ platform, opacity }) => {
  const style = { opacity: opacity / 100 };

  if (platform === Platform.INSTAGRAM_REELS) {
    return (
      <div className="absolute inset-0 pointer-events-none text-white select-none z-40" style={style}>
        {/* Top Header - 2024 Accurate */}
        <div className="absolute top-0 w-full p-6 flex justify-between items-center bg-gradient-to-b from-black/60 via-black/20 to-transparent">
          <div className="flex items-center gap-3">
             <ChevronLeft className="w-7 h-7" />
             <span className="font-bold text-lg">Reels</span>
          </div>
          <Camera className="w-6 h-6" />
        </div>

        {/* Right Side Actions - Added Ribbon */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <Heart className="w-8 h-8 fill-transparent stroke-white stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">1.2M</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="w-8 h-8 stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">3.4K</span>
          </div>
          <div className="flex flex-col items-center">
            <Send className="w-7 h-7 stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">Share</span>
          </div>
          <div className="flex flex-col items-center">
            <Bookmark className="w-7 h-7 stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">Save</span>
          </div>
          <div className="flex flex-col items-center">
            <MoreVertical className="w-6 h-6" />
          </div>
          <div className="w-8 h-8 rounded-lg border-2 border-white overflow-hidden bg-neutral-800 rotate-animate">
            <img src="https://picsum.photos/32/32?grayscale" alt="Audio" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom Info - Correct Profile Stack */}
        <div className="absolute left-4 bottom-8 w-[72%] space-y-3 bg-gradient-to-t from-black/40 to-transparent pb-4 pr-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
               <div className="w-full h-full rounded-full bg-black p-[1px]">
                  <img src="https://picsum.photos/40/40" className="w-full h-full rounded-full" />
               </div>
            </div>
            <span className="font-bold text-sm tracking-tight">creative_lab</span>
            <button className="border border-white/50 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-white/10 backdrop-blur-sm">Follow</button>
          </div>
          <div className="text-[14px] leading-snug drop-shadow-md">
            Testing the new safe-area checker. Everything fits perfectly! <span className="font-bold opacity-80">...more</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 w-fit px-2 py-1 rounded-full text-[11px] backdrop-blur-md">
            <Music className="w-3 h-3" />
            <span className="max-w-[120px] truncate">Original Audio • audio_master</span>
          </div>
        </div>
      </div>
    );
  }

  if (platform === Platform.YOUTUBE_SHORTS) {
    return (
      <div className="absolute inset-0 pointer-events-none text-white select-none z-40" style={style}>
        {/* Top Search/Icons */}
        <div className="absolute top-0 right-0 p-4 flex gap-5">
           <Search className="w-6 h-6" />
           <MoreVertical className="w-6 h-6" />
        </div>

        {/* Vertical Actions */}
        <div className="absolute right-2 bottom-16 flex flex-col items-center gap-7">
          <div className="flex flex-col items-center">
            <div className="p-2"><Heart className="w-8 h-8" /></div>
            <span className="text-[11px] font-medium">152K</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2"><MessageCircle className="w-8 h-8 transform scale-x-[-1]" /></div>
            <span className="text-[11px] font-medium">1.2K</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-full"><Send className="w-7 h-7" /></div>
            <span className="text-[11px] font-medium">Share</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-full"><Music className="w-7 h-7" /></div>
            <span className="text-[11px] font-medium">Remix</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/20" />
        </div>

        {/* Bottom Subscription Info */}
        <div className="absolute left-3 bottom-12 w-[75%] space-y-3">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-red-600 border border-white/10" />
             <div className="flex flex-col">
               <span className="font-bold text-sm">@SocialChannel</span>
               <span className="text-[10px] text-white/70">1.2M subscribers</span>
             </div>
             <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold ml-1">Subscribe</button>
          </div>
          <div className="text-[15px] font-medium line-clamp-2 drop-shadow-lg">
            How to check your YouTube Shorts margins in 2025! 🎬 #shorts #viral #tutorial
          </div>
        </div>
      </div>
    );
  }

  // Default TikTok Mockup
  return (
    <div className="absolute inset-0 pointer-events-none text-white select-none z-40" style={style}>
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-6">
            <div className="relative mb-2">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-700 overflow-hidden shadow-xl">
                   <img src="https://picsum.photos/100/100" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5 border-2 border-black">
                    <UserPlus className="w-3 h-3 text-white fill-current" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Heart className="w-9 h-9 fill-white" />
                <span className="text-[11px] font-bold">452.1K</span>
            </div>
            <div className="flex flex-col items-center">
                <MessageCircle className="w-9 h-9 fill-white" />
                <span className="text-[11px] font-bold">1289</span>
            </div>
            <div className="flex flex-col items-center">
                <Bookmark className="w-9 h-9 fill-white" />
                <span className="text-[11px] font-bold">52.4K</span>
            </div>
            <div className="flex flex-col items-center">
                <Send className="w-9 h-9 fill-white" />
                <span className="text-[11px] font-bold">22.1K</span>
            </div>
        </div>
        <div className="absolute left-3 bottom-8 w-[80%] space-y-1">
            <div className="font-bold text-[16px] drop-shadow-lg">@creative_pro</div>
            <div className="text-[15px] leading-tight drop-shadow-md">TikTok margins are essential for placement! This updated 2025 UI helps you place captions perfectly. #fyp #tiktoktips</div>
            <div className="flex items-center gap-2 text-[14px] pt-1">
                <Music2 className="w-4 h-4" />
                <span className="font-medium">Original Sound - creative_pro</span>
            </div>
        </div>
    </div>
  );
};

export default PlatformUIMock;
