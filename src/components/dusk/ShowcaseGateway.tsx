import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Terminal, Activity, Play, Zap } from 'lucide-react';

// Live Telemetry Sparkline Component
const LiveTelemetryChart = () => {
  const [points, setPoints] = useState<number[]>(Array.from({ length: 20 }, () => 35 + Math.random() * 10));

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => {
        const nextVal = 35 + Math.random() * 12;
        const updated = [...prev.slice(1), nextVal];
        return updated;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const width = 240;
  const height = 50;
  const maxVal = 60;
  const minVal = 20;

  const svgPoints = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - ((p - minVal) / (maxVal - minVal)) * height;
      return `${x},${y}`;
    })
    .join(' ');

  const currentLatency = points[points.length - 1].toFixed(1);

  return (
    <div className="relative pl-6 py-2 border-l border-white/10 hover:border-red-500/40 transition-colors flex flex-col gap-2 group">
      {/* Anchor Node */}
      <div className="absolute left-0 top-4 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E10600] border border-[#08060c] shadow-[0_0_8px_#E10600] transition-transform group-hover:scale-125" />

      <div className="flex justify-between items-center">
        <span className="text-[9px] font-mono text-gray-500 tracking-wider font-bold uppercase flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-[#E10600] animate-pulse" />
          TELEMETRY PIPELINE SYNC
        </span>
        <span className="text-[12px] font-mono font-bold text-[#E10600] drop-shadow-[0_0_6px_rgba(225,6,0,0.3)]">
          &lt;{currentLatency}ms
        </span>
      </div>
      <div className="h-[45px] w-full mt-1 bg-black/20 rounded border border-white/5 relative overflow-hidden flex items-end">
        {/* Subtle grid lines in chart */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none" />
        <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E10600" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#E10600" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Fill under chart */}
          <path
            d={`M 0,${height} L ${svgPoints} L ${width},${height} Z`}
            fill="url(#chartGlow)"
          />
          {/* Main sparkline */}
          <polyline
            fill="none"
            stroke="#E10600"
            strokeWidth="1.5"
            points={svgPoints}
            className="transition-all duration-200 ease-in-out"
          />
        </svg>
      </div>
    </div>
  );
};

// Custom typing simulation hook
const useTerminalLogs = () => {
  const [logs, setLogs] = useState<string[]>([
    '[SYS] Initializing POSIX virtual filesystem...',
    '[ OK ] VFS mapped (4096 inodes, descriptor cache loaded)',
    '[SYS] Establishing high-density telemetry stream...',
  ]);

  const logTemplates = [
    '[SYS] Telemetry pipeline sync active',
    '[ OK ] Frame sync lock acquired (0 packet drop, HSL channel 3)',
    '[SYS] Loading GLSL particle shader programs...',
    '[ OK ] Shaders compiled in 4.2ms (32 dynamic nodes active)',
    '[SYS] Monitoring remote engine endpoints at duskdawn.xyz...',
    '[WARN] Kernel telemetry pipe threshold < 50ms constraint verified',
    '[ OK ] Garbage collection executed in 1.8μs',
    '[SYS] Sandbox virtual environment standby...',
    '[SYS] Awaiting laboratory handshake...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        const timestamp = new Date().toLocaleTimeString([], { hour12: false });
        const formattedLog = `[${timestamp}] ${nextLog}`;
        return [...prev.slice(-4), formattedLog]; // Keep last 5 logs
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return logs;
};

export const ShowcaseGateway = ({ navigate }: { navigate: (path: string) => void }) => {
  const [isInitializing, setIsInitializing] = useState(false);
  const [initStage, setInitStage] = useState(0);
  const logs = useTerminalLogs();



  // Cinematic Gateway Boot Sequence
  const handleInitialize = () => {
    setIsInitializing(true);
    setInitStage(1);
    
    // Simulate terminal boot sequence steps
    setTimeout(() => setInitStage(2), 500);
    setTimeout(() => setInitStage(3), 1000);
    setTimeout(() => setInitStage(4), 1600);
    setTimeout(() => {
      navigate('/showcase');
    }, 2200);
  };

  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden" id="sandbox-gateway">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.4] pointer-events-none" />

      {/* Decorative Glow elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#a855f7] rounded-full opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[250px] h-[250px] bg-[#00DC64] rounded-full opacity-[0.015] blur-[80px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <motion.span
            className="text-xs md:text-sm font-mono text-[#a855f7] tracking-[0.25em] uppercase mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            [ VIRTUAL SYSTEMS INTEGRATION ]
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-white inline-block relative font-mono uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Systems Sandbox
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#a855f7] rounded" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Traditional Copy & CTA */}
          <motion.div
            className="w-full lg:col-span-7 flex flex-col justify-center items-start text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping" />
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">// DECOUPLED_LAB_CONNECT</span>
            </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug font-mono uppercase tracking-wide">
              Explore the Sandbox Laboratory
            </h3>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-light">
              Welcome to my interactive engineering laboratory. Here you can find my featured projects, system simulations, and active diagnostic sandboxes. Rather than presenting static, pre-rendered mockups, every showcase is an active, responsive environment—ranging from low-latency telemetry pipelines and POSIX-compliant kernels to 3D planetary physics and AI-driven operating environments.
            </p>

            {/* Interactive Neon CTA */}
            <div className="relative group w-full sm:w-auto">
              {/* Pulsing Backlight */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#a855f7] to-[#8022d9] rounded-xl blur-md opacity-30 group-hover:opacity-100 group-hover:blur-lg transition duration-700 pointer-events-none" />
              
              <button
                onClick={handleInitialize}
                className="relative w-full sm:w-auto px-8 py-4 bg-[#08060c] border border-[#a855f7]/40 hover:border-[#a855f7] text-white font-mono font-medium rounded-xl text-[14px] md:text-[15px] tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.05)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] flex items-center justify-center gap-3 overflow-hidden cursor-none group"
              >
                {/* Micro Sliding scanner line inside button */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/5 opacity-40 group-hover:animate-shine" />
                
                <Play className="w-4 h-4 text-[#a855f7] fill-[#a855f7]/10 group-hover:scale-110 transition-transform" />
                Initialize Showcase Environment
                <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#a855f7]" />
              </button>
            </div>
          </motion.div>

          {/* Right: High-Density Visual Diagnostic HUD Column */}
          <motion.div
            className="w-full lg:col-span-5 relative flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,white_45%,rgba(255,255,255,0.95)_70%,rgba(255,255,255,0.2)_92%,transparent_100%)] pr-4 select-none"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header: Systems Diagnostics Ticker */}
            <div className="flex items-center gap-2 text-[#a855f7] font-mono text-[11px] tracking-[0.25em] font-bold select-none mb-1">
              <Terminal className="w-4 h-4 text-[#a855f7] animate-pulse" />
              <span>SYSTEMS_DIAGNOSTICS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00DC64] animate-ping ml-1" />
            </div>

            {/* Diagnostic Stat 1: ACTIVE LABS */}
            <div className="relative pl-6 py-2 border-l border-white/10 hover:border-[#00DC64]/40 transition-colors flex justify-between items-center group">
              {/* Anchor Node */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00DC64] border border-[#08060c] shadow-[0_0_8px_#00DC64] transition-transform group-hover:scale-125" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] font-mono text-gray-500 tracking-wider font-bold uppercase">// SYSTEM_NODES</span>
                <span className="text-[12px] font-mono text-white/90 uppercase tracking-wide">Active Labs Operational</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono font-bold text-[#00DC64] drop-shadow-[0_0_8px_rgba(0,220,100,0.3)]">07</span>
              </div>
            </div>

            {/* Diagnostic Stat 2: POSIX VFS */}
            <div className="relative pl-6 py-2 border-l border-white/10 hover:border-[#28CA41]/40 transition-colors flex flex-col gap-3 group">
              {/* Anchor Node */}
              <div className="absolute left-0 top-4 -translate-x-1/2 w-2 h-2 rounded-full bg-[#28CA41] border border-[#08060c] shadow-[0_0_8px_#28CA41] transition-transform group-hover:scale-125" />
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono text-gray-500 tracking-wider font-bold uppercase">// FILESYSTEM</span>
                  <span className="text-[12px] font-mono text-white/90 uppercase tracking-wide">VFS Kernel Simulation</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#28CA41] bg-[#28CA41]/10 px-2 py-0.5 rounded border border-[#28CA41]/25 select-none">POSIX</span>
              </div>
              
              {/* Visual VFS simulation tree */}
              <div className="flex flex-col gap-1 font-mono text-[9px] text-[#28CA41]/85 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-600">/sys/kernel/vfs</span>
                  <span className="text-white bg-[#28CA41]/15 px-1 py-0.1 rounded text-[8px]">CONNECTED</span>
                </div>
                <div className="flex items-center gap-1 pl-3 border-l border-white/10">
                  <span>├─ dev/stdin_stream </span>
                  <span className="text-gray-600">(41 bytes/s)</span>
                </div>
                <div className="flex items-center gap-1 pl-3 border-l border-white/10">
                  <span>└─ proc/telemetry_pipe </span>
                  <span className="text-gray-600">(sync_ok)</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Stat 3: TELEMETRY SYNC */}
            <LiveTelemetryChart />

            {/* Console log ticker */}
            <div className="relative pl-6 py-2 border-l border-white/10 hover:border-[#a855f7]/40 transition-colors flex flex-col gap-2 group">
              {/* Anchor Node */}
              <div className="absolute left-0 top-4 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a855f7] border border-[#08060c] shadow-[0_0_8px_#a855f7] transition-transform group-hover:scale-125" />

              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-gray-500 tracking-wider font-bold uppercase">// LIVE_STREAM_OUTPUT</span>
                <span className="text-[9px] font-mono text-[#a855f7]/85 animate-pulse">CONNECT_STATUS: STABLE</span>
              </div>
              
              <div className="font-mono text-[9px] text-gray-400 select-none flex flex-col gap-1.5 pt-1">
                {logs.map((log, idx) => (
                  <div key={idx} className="truncate leading-normal flex gap-1.5 items-start">
                    <span className="text-[#a855f7] font-bold">&gt;</span>
                    <span className={log.includes('OK') ? 'text-white' : log.includes('WARN') ? 'text-amber-500' : 'text-gray-400'}>{log}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard details footer */}
            <div className="pl-6 flex justify-between items-center text-[8px] font-mono text-gray-600 select-none border-l border-white/5 py-1">
              <span>PORT: 80 // SECURE</span>
              <span>BAUD: 115200</span>
              <span>VER: V1.2.7-DUSK</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Cinematic Full-screen Initialization Loader Overlay */}
      <AnimatePresence>
        {isInitializing && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#06040a] flex flex-col items-center justify-center font-mono p-6 cursor-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Ambient glows behind boot loader */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#a855f7]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-md w-full flex flex-col gap-6 text-left relative z-10">
              
              {/* Header Title */}
              <div className="flex items-center justify-between border-b border-[#a855f7]/30 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#a855f7] animate-pulse" />
                  <span className="text-white text-xs font-bold tracking-widest">SHOWCASE_GATEWAY_VFS</span>
                </div>
                <span className="text-xs text-red-500 animate-pulse">INIT_PROT: DEC_SANDBOX</span>
              </div>

              {/* Loading Status Logs */}
              <div className="flex flex-col gap-2 bg-black/60 border border-[#a855f7]/20 rounded-xl p-5 text-[10px] text-gray-300 min-h-[160px] relative overflow-hidden">
                {/* Horizontal scanner bar */}
                <div className="absolute inset-x-0 h-0.5 bg-[#a855f7]/20 top-0 animate-scanner pointer-events-none" />

                <div className="flex items-center gap-1.5 text-white">
                  <span className="text-[#a855f7]">&gt;</span> SYSTEM INITIALIZATION TRIGGERED
                </div>
                
                {initStage >= 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5">
                    <span className="text-[#a855f7]">&gt;</span> Loading laboratory systems...
                    <span className="text-[#00DC64] font-bold">DONE</span>
                  </motion.div>
                )}

                {initStage >= 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5">
                    <span className="text-[#a855f7]">&gt;</span> Opening POSIX VFS Kernel streams...
                    <span className="text-[#00DC64] font-bold">ACTIVE</span>
                  </motion.div>
                )}

                {initStage >= 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5">
                    <span className="text-[#a855f7]">&gt;</span> Booting telemetry sync pipeline...
                    <span className="text-[#00DC64] font-bold">SYNCED (&lt;34ms)</span>
                  </motion.div>
                )}

                {initStage >= 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-1 mt-1 text-[#a855f7]">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Zap className="w-3.5 h-3.5 animate-bounce" /> HANDSHAKE CONFIRMED // ROUTING TO ENVIRONMENT
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Loading Bar */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>BOOT_SEQUENCE_PROGRESS</span>
                  <span>{initStage === 1 ? '25%' : initStage === 2 ? '55%' : initStage === 3 ? '85%' : initStage === 4 ? '100%' : '0%'}</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#a855f7] to-[#00DC64]"
                    initial={{ width: '0%' }}
                    animate={{
                      width: initStage === 1 ? '25%' : initStage === 2 ? '55%' : initStage === 3 ? '85%' : initStage === 4 ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
