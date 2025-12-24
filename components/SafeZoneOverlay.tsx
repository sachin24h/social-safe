
import React from 'react';
import { Platform } from '../types';

interface Props {
  platform: Platform;
}

const SafeZoneOverlay: React.FC<Props> = ({ platform }) => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* Central Guide */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-full border-t border-dashed border-white" />
          <div className="h-full border-l border-dashed border-white absolute" />
      </div>

      {/* Warning Zones */}
      {platform === Platform.INSTAGRAM_REELS && (
        <>
          <div className="absolute top-0 w-full h-[15%] bg-red-500/20 border-b border-red-500/50 flex items-end justify-center pb-1">
             <span className="text-[10px] text-red-200 uppercase tracking-tighter">Avoid: Header Area</span>
          </div>
          <div className="absolute bottom-0 w-full h-[30%] bg-red-500/20 border-t border-red-500/50 flex items-start justify-center pt-1">
             <span className="text-[10px] text-red-200 uppercase tracking-tighter">Avoid: Caption & Actions</span>
          </div>
          <div className="absolute right-0 top-[15%] bottom-[30%] w-[20%] bg-yellow-500/10 border-l border-yellow-500/30 flex items-center justify-center">
             <span className="text-[10px] text-yellow-200 uppercase tracking-tighter vertical-text [writing-mode:vertical-lr]">Interaction Zone</span>
          </div>
        </>
      )}

      {platform === Platform.YOUTUBE_SHORTS && (
        <>
          <div className="absolute top-0 w-full h-[10%] bg-red-500/20 border-b border-red-500/50" />
          <div className="absolute bottom-0 w-full h-[25%] bg-red-500/20 border-t border-red-500/50" />
          <div className="absolute right-0 top-[10%] bottom-[25%] w-[18%] bg-yellow-500/10 border-l border-yellow-500/30" />
        </>
      )}

      {/* Common Rule of Thirds */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
         {[...Array(9)].map((_, i) => (
             <div key={i} className="border border-white/40" />
         ))}
      </div>
    </div>
  );
};

export default SafeZoneOverlay;
