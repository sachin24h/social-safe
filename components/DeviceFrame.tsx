
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
    <div className="relative flex flex-col items-center justify-center p-4">
      {/* Label for Device */}
      <div className="mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
        Simulating: {device}
      </div>

      {/* External Frame */}
      <div 
        className="relative bg-black shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden ring-4 ring-neutral-800 transition-all duration-500 ease-in-out"
        style={{ 
          width: `${specs.width}px`, 
          height: `${specs.height}px`,
          borderRadius: specs.radius
        }}
      >
        {/* Hardware Features */}
        {specs.notch === 'dynamic' && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-3xl z-50 flex items-center justify-end px-4 border border-white/5">
             <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 ring-1 ring-blue-400/30" />
          </div>
        )}
        
        {specs.notch === 'punch' && (
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-50 ring-2 ring-neutral-900" />
        )}

        {specs.notch === 'classic' && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl z-50" />
        )}

        {/* Screen Content Wrapper */}
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
          {/* Content with Scaling Logic */}
          <div className={`relative w-full h-full ${scaling === ScalingMode.FIT ? 'p-4' : ''}`}>
             <div className={`w-full h-full relative overflow-hidden ${scaling === ScalingMode.FIT ? 'rounded-2xl border border-white/10 shadow-inner bg-black' : ''}`}>
                {children}
             </div>
          </div>
        </div>

        {/* System Navigation Bars */}
        <div className="absolute top-0 w-full px-8 py-2 flex justify-between items-center text-[10px] font-bold z-30 text-white/60 pointer-events-none">
           <span>9:41</span>
           <div className="flex gap-1.5">
              <div className="w-4 h-2 rounded-[2px] border border-white/40" />
              <div className="w-3 h-2 bg-white/40 rounded-[2px]" />
           </div>
        </div>
        
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-50" />
      </div>
    </div>
  );
};

export default DeviceFrame;
