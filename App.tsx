
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Upload, 
  Eye, 
  Settings2, 
  Layout, 
  Smartphone, 
  ChevronRight, 
  Download, 
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Platform, DeviceType, MediaState, UIConfig, ScalingMode } from './types';
import { PLATFORMS_DATA } from './constants';
import PlatformUIMock from './components/PlatformUIMock';
import SafeZoneOverlay from './components/SafeZoneOverlay';
import DeviceFrame from './components/DeviceFrame';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'studio'>('home');
  const [media, setMedia] = useState<MediaState | null>(null);
  const [config, setConfig] = useState<UIConfig>({
    showSafeAreas: true,
    showUIOverlay: true,
    platform: Platform.INSTAGRAM_REELS,
    device: DeviceType.IPHONE_15_PRO,
    scaling: ScalingMode.FILL,
    opacity: 100
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const type = file.type.startsWith('video/') ? 'video' : 'image';
    const url = URL.createObjectURL(file);
    setMedia({ url, type, file });
    setView('studio');
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!isScrubbing) setCurrentTime(video.currentTime);
    };
    const onLoadedMetadata = () => setDuration(video.duration);
    const onEnded = () => setIsPlaying(false);
    
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('ended', onEnded);
    
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('ended', onEnded);
    };
  }, [media, isScrubbing]);

  if (view === 'home') {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />

        {/* Navigation */}
        <nav className="p-8 flex justify-between items-center z-10">
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg">S</div>
              SOCIALSAFE
           </div>
           <button 
             onClick={() => setView('studio')}
             className="hidden md:flex items-center gap-2 text-sm font-bold bg-white/5 border border-white/10 px-6 py-2.5 rounded-full hover:bg-white/10 transition-all"
           >
              Launch Studio <ArrowRight className="w-4 h-4" />
           </button>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-blue-400 mb-8 animate-pulse">
             <Sparkles className="w-4 h-4" /> NEW: 2025 INSTAGRAM & YOUTUBE UI UPDATED
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8 drop-shadow-2xl">
            PERFECT YOUR <br/>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">SOCIAL CONTENT</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-neutral-400 mb-12 font-medium leading-relaxed">
            Stop guessing where the captions go. High-fidelity safe-zone margins and UI overlays for professional creators. Supports 4K video, exact device frames, and modern platform layouts.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
            <label className="flex-1 group relative cursor-pointer bg-white text-black px-8 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] overflow-hidden">
              <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileUpload} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0 group-hover:translate-x-full duration-1000 transition-transform -translate-x-full" />
              <Upload className="w-6 h-6" />
              <span className="text-xl font-black">START ANALYZING</span>
            </label>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
            {PLATFORMS_DATA.map(p => (
              <div key={p.id} className="group p-6 bg-white/5 border border-white/10 rounded-3xl text-left transition-all hover:border-white/30 hover:bg-white/10">
                <div className="mb-4 text-neutral-400 group-hover:text-white transition-colors">{p.icon}</div>
                <h3 className="font-bold text-sm mb-1">{p.name}</h3>
                <p className="text-[10px] text-neutral-500 leading-normal">{p.description}</p>
              </div>
            ))}
          </div>
        </main>

        <footer className="p-12 text-center text-neutral-600 text-xs font-bold tracking-widest uppercase border-t border-white/5 mt-auto">
          Built for the next generation of social creators • 2025
        </footer>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#050505] flex flex-col lg:flex-row text-white overflow-hidden">
      {/* Studio Sidebar */}
      <aside className="w-full lg:w-96 border-b lg:border-r border-white/10 bg-[#0a0a0a] flex flex-col p-8 overflow-y-auto no-scrollbar shadow-2xl z-50">
        <div className="flex items-center justify-between mb-12">
           <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
             <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded text-xs">S</div>
             STUDIO
           </div>
           <button onClick={() => setView('home')} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all">
             <RotateCcw className="w-4 h-4 text-neutral-400" />
           </button>
        </div>

        <div className="space-y-10">
          {/* Platform Toggle */}
          <section className="space-y-4">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase">1. Select Platform</h4>
            <div className="grid grid-cols-1 gap-2.5">
              {PLATFORMS_DATA.map(p => (
                <button
                  key={p.id}
                  onClick={() => setConfig(prev => ({ ...prev, platform: p.id }))}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group ${
                    config.platform === p.id 
                    ? 'bg-white text-black border-white' 
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${config.platform === p.id ? 'bg-black/5' : 'bg-white/5'}`}>{p.icon}</div>
                  <span className="text-[15px] font-bold">{p.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Device & Scaling */}
          <section className="space-y-4">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase">2. View Configuration</h4>
            <div className="space-y-3">
              <div className="relative group">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:ring-2 ring-white/10 appearance-none cursor-pointer"
                  value={config.device}
                  onChange={(e) => setConfig(prev => ({ ...prev, device: e.target.value as DeviceType }))}
                >
                  {Object.values(DeviceType).map(d => (
                    <option key={d} value={d} className="bg-neutral-900">{d}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {Object.values(ScalingMode).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setConfig(prev => ({ ...prev, scaling: mode }))}
                    className={`p-3 rounded-xl border text-[11px] font-black uppercase transition-all ${
                      config.scaling === mode ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-neutral-500'
                    }`}
                  >
                    {mode.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Visibility Controls */}
          <section className="space-y-4">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase">3. Overlay Control</h4>
            <div className="space-y-4 p-5 bg-white/5 rounded-3xl border border-white/10">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-bold text-neutral-300">Show Platform UI</span>
                <input 
                  type="checkbox" 
                  checked={config.showUIOverlay}
                  onChange={() => setConfig(prev => ({ ...prev, showUIOverlay: !prev.showUIOverlay }))}
                  className="w-5 h-5 rounded-lg accent-blue-500"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-bold text-neutral-300">Safe Zone Grid</span>
                <input 
                  type="checkbox" 
                  checked={config.showSafeAreas}
                  onChange={() => setConfig(prev => ({ ...prev, showSafeAreas: !prev.showSafeAreas }))}
                  className="w-5 h-5 rounded-lg accent-blue-500"
                />
              </label>
              <div className="pt-2">
                <div className="flex justify-between text-[10px] text-neutral-500 mb-2 font-black uppercase tracking-widest">
                  <span>UI OPACITY</span>
                  <span className="text-white">{config.opacity}%</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={config.opacity}
                  onChange={(e) => setConfig(prev => ({ ...prev, opacity: parseInt(e.target.value) }))}
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none accent-white"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
          <label className="w-full flex items-center justify-center gap-3 bg-white text-black font-black py-4 rounded-2xl cursor-pointer hover:bg-neutral-200 transition-all active:scale-95 text-sm uppercase">
             <input type="file" className="hidden" onChange={handleFileUpload} />
             <Upload className="w-5 h-5" />
             Upload New Media
          </label>
        </div>
      </aside>

      {/* Preview Area */}
      <main className="flex-1 relative flex flex-col items-center justify-center p-8 bg-[#030303]">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/5 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-white/10 shadow-2xl z-30">
           <Eye className="w-4 h-4 text-blue-400" />
           <span className="text-[10px] font-black tracking-[0.2em] text-neutral-200 uppercase">Live Composition Preview</span>
        </div>

        {/* The Phone */}
        <div className="flex-1 flex items-center justify-center w-full">
          {media ? (
            <DeviceFrame device={config.device} scaling={config.scaling}>
              <div className="relative w-full h-full bg-black group">
                {media.type === 'video' ? (
                  <video 
                    ref={videoRef}
                    src={media.url}
                    className={`w-full h-full ${config.scaling === ScalingMode.FILL ? 'object-cover' : 'object-contain'}`}
                    playsInline
                    loop
                  />
                ) : (
                  <img src={media.url} className={`w-full h-full ${config.scaling === ScalingMode.FILL ? 'object-cover' : 'object-contain'}`} />
                )}

                {/* Layer Overlays */}
                {config.showSafeAreas && <SafeZoneOverlay platform={config.platform} />}
                {config.showUIOverlay && <PlatformUIMock platform={config.platform} opacity={config.opacity} />}
              </div>
            </DeviceFrame>
          ) : (
            <div className="text-center group">
               <div className="w-40 h-40 border-2 border-dashed border-white/10 rounded-[40px] mx-auto flex items-center justify-center group-hover:border-white/20 transition-all duration-700 bg-white/[0.02]">
                  <Upload className="w-12 h-12 text-white/10 group-hover:text-white/40 group-hover:scale-110 transition-all" />
               </div>
               <p className="mt-8 text-neutral-500 font-bold uppercase tracking-widest text-[10px]">Awaiting Content Input</p>
            </div>
          )}
        </div>

        {/* Video Scrubber - High Precision */}
        {media?.type === 'video' && (
          <div className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 mb-4 flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="flex items-center gap-6">
                <button 
                  onClick={togglePlay}
                  className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-black" /> : <Play className="w-6 h-6 fill-black ml-1" />}
                </button>
                
                <div className="flex-1 flex flex-col gap-2">
                  <div className="relative w-full h-12 flex items-center group">
                    <div className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden pointer-events-none flex items-center px-1">
                       {/* Mock Waveform */}
                       {[...Array(60)].map((_, i) => (
                         <div key={i} className="flex-1 bg-white/10 mx-[1px]" style={{ height: `${20 + Math.random() * 60}%` }} />
                       ))}
                    </div>
                    <input 
                      type="range" min="0" max={duration} step="0.001"
                      value={currentTime}
                      onChange={handleSeek}
                      onMouseDown={() => setIsScrubbing(true)}
                      onMouseUp={() => setIsScrubbing(false)}
                      className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-10 accent-blue-500"
                    />
                    <div 
                      className="absolute top-0 w-[2px] h-full bg-blue-500 pointer-events-none shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      style={{ left: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-black font-mono text-neutral-500 uppercase tracking-tighter">
                    <span className="text-blue-400">Current: {currentTime.toFixed(3)}s</span>
                    <span>Total Duration: {duration.toFixed(3)}s</span>
                  </div>
                </div>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
