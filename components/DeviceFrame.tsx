
import React from 'react';
import { DeviceType, ScalingMode } from '../types';
import { DEVICES_DATA } from '../constants';

interface Props {
  device: DeviceType;
  scaling: ScalingMode;
  children: React.ReactNode;
}

const DeviceFrame: React.FC<Props> = ({ device, scaling, children }) => {
  const specs = DEVICES_DATA[device];

  return (
    <div className="relative flex flex-col items-center justify-center p-4 scale-[0.85] md:scale-100 transition-all duration-700">
      {/* Device Badge */}
      <div className="mb-8 px-6 py-2 rounded-2xl bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 backdrop-blur-md">
        {device}
      </div>

      {/* External Chassis */}
      <div 
        className="relative bg-[#121212] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden ring-[10px] ring-neutral-800 transition-all duration-700 ease-in-out border-[2px] border-white/5"
        style={{ 
          width: `${specs.width}px`, 
          height: `${specs.height}px`,
          borderRadius: specs.radius
        }}
      >
        {/* Notch / Hardware Elements */}
        {specs.notch === 'dynamic' && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-full z-50 flex items-center justify-end px-5 border border-white/5 shadow-inner">
             <div className="w-3 h-3 rounded-full bg-blue-500/20 ring-1 ring-blue-400/30" />
          </div>
        )}
        
        {specs.notch === 'punch' && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-5 h-5 bg-black rounded-full z-50 ring-2 ring-neutral-900 border border-white/5" />
        )}

        {specs.notch === 'bezel' && (
          <>
            <div className="absolute top-0 w-full h-[60px] bg-black z-50 flex items-center justify-center">
               <div className="w-12 h-1.5 bg-neutral-800 rounded-full" />
            </div>
            <div className="absolute bottom-0 w-full h-[60px] bg-black z-50 flex items-center justify-center">
               <div className="w-12 h-12 rounded-full border-2 border-neutral-800" />
            </div>
          </>
        )}

        {/* Inner Screen Display */}
        <div className={`absolute inset-0 bg-black flex items-center justify-center overflow-hidden ${specs.notch === 'bezel' ? 'my-[60px]' : ''}`}>
          {/* Platform Scaling Simulation */}
          <div className={`relative w-full h-full ${scaling === ScalingMode.FIT ? 'p-2' : ''}`}>
             <div className={`w-full h-full relative overflow-hidden bg-black ${scaling === ScalingMode.FIT ? 'rounded-2xl ring-1 ring-white/10' : ''}`}>
                {children}
             </div>
          </div>
        </div>

        {/* Realistic Status Bar */}
        <div className={`absolute top-0 w-full px-8 py-3 flex justify-between items-center text-[11px] font-black z-30 text-white/80 pointer-events-none transition-opacity duration-300 ${specs.notch === 'bezel' ? 'opacity-0' : 'opacity-100'}`}>
           <span className="tracking-tighter">9:41</span>
           <div className="flex gap-2 items-center">
              <div className="flex gap-0.5">
                 <div className="w-1 h-3 bg-white/60 rounded-[1px]" />
                 <div className="w-1 h-3 bg-white/60 rounded-[1px] opacity-60" />
                 <div className="w-1 h-3 bg-white/60 rounded-[1px] opacity-30" />
              </div>
              <div className="w-6 h-3 rounded-[3px] border border-white/40 flex items-center p-[1px]">
                 <div className="h-full w-4 bg-white/80 rounded-[1px]" />
              </div>
           </div>
        </div>
        
        {/* Navigation Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full z-50 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default DeviceFrame;
