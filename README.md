# Cinematic Portfolio v1.2

A stunning, state-of-the-art cinematic portfolio showcasing the intersection of immersive design and systems engineering. Built with React, TypeScript, and Framer Motion, featuring dual Dusk/Dawn themes, custom interactive particle canvases, custom cursor trail effects, and a glassmorphic micro-interaction layout. Experience highly optimized, high-fidelity native routes that bring technical achievements to life. 🎬✨

---

## 🚀 Key Integrations & Features

- **Dual Theme System (Dusk & Dawn)**: Switch seamlessly between **Dusk** (deep space violet & glowing embers) and **Dawn** (pristine light auroras). Every section, including the project showcase and detailed overlays, is dynamically theme-aware with crisp contrast.
- **Holographic Systems Sandbox Gateway**: Replaces legacy static grids with a borderless, floating diagnostics dashboard on the homepage:
  - **Telemetry Sparkline**: A live-fluctuating latency chart rendering continuous real-time system ping diagnostics.
  - **VFS Kernel Explorer**: A monospaced directory layout mapping operational virtual filesystem directories.
  - **Live Console Ticker**: Real-time scrolling diagnostics logging kernel mounts, memory garbage collection, and compilation state.
  - **Vertical Glow Pipeline**: All diagnostic elements sit along a glowing left-hand pipeline with responsive neon anchor nodes.
- **Cinematic Initialization Handshake**: Launching the sandbox triggers a full-screen high-tech boot sequence that maps virtual filesystem blocks and configures telemetry pipes before transitioning natively to `/showcase`.
- **Integrated High-Density Project Showcase**: Located natively at `/showcase`, rendering your portfolio's major technical exhibits:
  - **Adaptive Canvas Animations**: Unique preview simulations (orbit ellipse vectors, scrolling terminal consoles, DNA pulses, bezier paths) rendered per-project.
  - **Unified Composite Tags**: Unified status badges (such as `LIVE / IN PROGRESS` on "SilverWall Telemetry" and "The Terminal") with robust dual-filtration logic.
  - **Theme-Aware Canvas Backdrops**: Preview canvases swap from solid dark boundaries to delicate glass light containers in Dawn mode, keeping text elements highly readable.
- **Interactive Cursor spotlight**: Beautiful custom trails and magnet anchors that follow user focus on interactive elements.

---

## 🛠️ Tech Stack

- **Core**: React 18
- **Language**: TypeScript & JavaScript (ES6+)
- **Build Engine**: Vite & tsc (Type-Safe Compiler)
- **Styling**: TailwindCSS & Vanilla CSS
- **Animations**: Framer Motion (AnimatePresence & spring physics)
- **Icons**: Lucide React
- **UI Architecture**: Radix UI primitives & shadcn/ui

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ashborn-047/Personal-Portfolio-v1.2.git
cd Personal-Portfolio-v1.2
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Validation

Compile and build the optimized production bundle:
```bash
npm run build
```

Preview the verified static compilation locally:
```bash
npm run preview
```

---

## 🎨 Project Directory Map

```
src/
├── components/
│   ├── dawn/          # Dawn (light) theme layouts and case-studies
│   ├── dusk/          # Dusk (dark) theme layouts & Systems Sandbox Gateway
│   ├── effects/       # Particle canvases, custom cursor trail, and auroras
│   ├── layout/        # Layout shells (headers, footers, booting sequences)
│   ├── theme/         # Theme Context and theme provider engines
│   └── ui/            # Radix UI and customized design tokens
├── showcase/          # Integrated Project Showcase gallery (natively on /showcase)
│   ├── components/    # Showcase cards, detail popup, visual previews, and sections
│   ├── data/          # Project registry data schemas & registries
│   ├── utils.js       # Breakpoint and color converters
│   └── App.jsx        # Showcase gallery controller
├── App.tsx            # Main application router switcher
├── main.tsx           # Production entry point
└── globals.css        # Core custom-utility styling system
```

---

## 📄 License

MIT License - feel free to use this project for your own portfolio!

---

**Made with ❤️, ✨, and Systems Sandbox Diagnostics**
