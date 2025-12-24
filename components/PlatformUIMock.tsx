
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
}

const PlatformUIMock: React.FC<Props> = ({ platform }) => {
  if (platform === Platform.INSTAGRAM_REELS) {
    return (
      <div className="absolute inset-0 pointer-events-none text-white select-none z-40">
        {/* Modern 2025 Header */}
        <div className="absolute top-0 w-full p-6 flex justify-between items-center bg-gradient-to-b from-black/70 via-black/20 to-transparent">
          <div className="flex items-center gap-4">
             <ChevronLeft className="w-8 h-8" />
             <span className="font-bold text-xl tracking-tight">Reels</span>
          </div>
          <Camera className="w-7 h-7" />
        </div>

        {/* Modern 2025 Right Side Actions (Accurate Spacing) */}
        <div className="absolute right-3 bottom-28 flex flex-col items-center gap-7">
          <div className="flex flex-col items-center group">
            <Heart className="w-8 h-8 stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">234K</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="w-8 h-8 stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">1,245</span>
          </div>
          <div className="flex flex-col items-center">
            <Send className="w-8 h-8 stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">Share</span>
          </div>
          {/* THE RIBBON / SAVE BUTTON */}
          <div className="flex flex-col items-center">
            <Bookmark className="w-8 h-8 stroke-[2px]" />
            <span className="text-[11px] font-semibold mt-1 shadow-sm">Save</span>
          </div>
          <div className="flex flex-col items-center">
            <MoreVertical className="w-6 h-6" />
          </div>
          <div className="w-9 h-9 rounded-lg border-2 border-white/80 overflow-hidden bg-neutral-800 p-0.5">
            <img src="https://picsum.photos/40/40?random=1" className="w-full h-full object-cover rounded-[4px]" />
          </div>
        </div>

        {/* Modern 2025 Bottom Profile & Caption */}
        <div className="absolute left-4 bottom-10 w-[74%] space-y-4 bg-gradient-to-t from-black/50 via-black/10 to-transparent pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] shadow-lg">
               <div className="w-full h-full rounded-full bg-black p-[1px]">
                  <img src="https://picsum.photos/40/40?random=2" className="w-full h-full rounded-full" />
               </div>
            </div>
            <div className="flex items-center gap-2">
               <span className="font-bold text-sm tracking-tight drop-shadow-md">creator_pro</span>
               <button className="border border-white/60 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-white/5 backdrop-blur-md">Follow</button>
            </div>
          </div>
          <div className="text-[14px] leading-snug drop-shadow-md pr-4 line-clamp-2">
            Perfecting safe areas for Instagram Reels in 2025. This UI mock is pixel-perfect. 🔥 <span className="opacity-70 font-bold">#creative #design</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 w-fit px-3 py-1.5 rounded-full text-[11px] backdrop-blur-xl border border-white/5">
            <Music className="w-3 h-3" />
            <span className="max-w-[140px] truncate font-medium">Original Audio • audio_artist</span>
          </div>
        </div>
      </div>
    );
  }

  if (platform === Platform.YOUTUBE_SHORTS) {
    return (
      <div className="absolute inset-0 pointer-events-none text-white select-none z-40">
        <div className="absolute top-0 right-0 p-6 flex gap-6 bg-gradient-to-b from-black/40 to-transparent w-full justify-end">
           <Search className="w-7 h-7" />
           <MoreVertical className="w-7 h-7" />
        </div>
        <div className="absolute right-2 bottom-20 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <div className="p-2.5 bg-white/5 rounded-full backdrop-blur-md"><Heart className="w-8 h-8" /></div>
            <span className="text-[11px] font-bold mt-1 shadow-lg">15K</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2.5 bg-white/5 rounded-full backdrop-blur-md"><MessageCircle className="w-8 h-8 transform scale-x-[-1]" /></div>
            <span className="text-[11px] font-bold mt-1 shadow-lg">342</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2.5 bg-white/5 rounded-full backdrop-blur-md"><Send className="w-7 h-7" /></div>
            <span className="text-[11px] font-bold mt-1 shadow-lg">Share</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2.5 bg-white/5 rounded-full backdrop-blur-md"><Music className="w-7 h-7" /></div>
            <span className="text-[11px] font-bold mt-1 shadow-lg">Remix</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-white/20 shadow-xl overflow-hidden">
             <img src="https://picsum.photos/40/40?random=3" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute left-4 bottom-14 w-[75%] space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-11 h-11 rounded-full bg-red-600 border border-white/20 shadow-lg" />
             <div className="flex flex-col">
               <span className="font-bold text-sm tracking-tight shadow-sm">@ChannelName</span>
               <span className="text-[10px] text-white/60">Subscribers: 1.5M</span>
             </div>
             <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-black ml-2 active:scale-95 transition-transform">SUBSCRIBE</button>
          </div>
          <div className="text-[16px] font-semibold leading-tight drop-shadow-xl line-clamp-2">
            Checking my YouTube Shorts safe margins for better engagement! 🎥
          </div>
        </div>
      </div>
    );
  }

  // TikTok Layout (Updated)
  return (
    <div className="absolute inset-0 pointer-events-none text-white select-none z-40">
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-6">
            <div className="relative mb-2">
                <div className="w-14 h-14 rounded-full border-2 border-white bg-neutral-700 overflow-hidden shadow-2xl">
                   <img src="https://picsum.photos/100/100?random=4" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-1 border-2 border-black">
                    <UserPlus className="w-3 h-3 text-white fill-current" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Heart className="w-10 h-10 fill-white" />
                <span className="text-[12px] font-bold drop-shadow-md">845.3K</span>
            </div>
            <div className="flex flex-col items-center">
                <MessageCircle className="w-10 h-10 fill-white" />
                <span className="text-[12px] font-bold drop-shadow-md">4,521</span>
            </div>
            <div className="flex flex-col items-center">
                <Bookmark className="w-10 h-10 fill-white" />
                <span className="text-[12px] font-bold drop-shadow-md">124K</span>
            </div>
            <div className="flex flex-col items-center">
                <Send className="w-10 h-10 fill-white" />
                <span className="text-[12px] font-bold drop-shadow-md">32K</span>
            </div>
            <div className="w-11 h-11 rounded-full border-2 border-neutral-800 overflow-hidden animate-[spin_4s_linear_infinite] bg-black">
                 <img src="https://picsum.photos/44/44?random=5" className="w-full h-full object-cover" />
            </div>
        </div>
        <div className="absolute left-4 bottom-10 w-[80%] space-y-2">
            <div className="font-black text-[17px] tracking-tight drop-shadow-xl">@tiktok_creator</div>
            <div className="text-[15px] leading-snug drop-shadow-lg pr-4 line-clamp-3">The ultimate TikTok margin check. Placing your text here will ensure it's not clipped! #tips #tricks</div>
            <div className="flex items-center gap-3 text-[14px] pt-2">
                <Music2 className="w-5 h-5" />
                <div className="overflow-hidden whitespace-nowrap w-[150px]">
                    <div className="animate-[scroll_10s_linear_infinite] font-medium">Original Sound - creator_pro</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PlatformUIMock;
