import Link from "next/link";
import { FileIcon } from "@untitledui/file-icons";
import { IconCircleCheckOutline48 } from "nucleo-core-essential-outline-48";
import DownloadButtons from "./components/DownloadButtons";
import ScrollLink from "./components/ScrollLink";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <svg className="h-5 w-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xl font-semibold">Torchio</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <ScrollLink href="#features" className="text-sm text-muted hover:text-foreground transition-colors">Features</ScrollLink>
          <ScrollLink href="#formats" className="text-sm text-muted hover:text-foreground transition-colors">Formats</ScrollLink>
          <ScrollLink href="#privacy" className="text-sm text-muted hover:text-foreground transition-colors">Privacy</ScrollLink>
          <Link href="https://github.com/missingfoot/torchio" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"></path>
            </svg>
          </Link>
        </nav>
        <ScrollLink
          href="#download"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
        >
          Download
        </ScrollLink>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Available for Windows, macOS & Linux
        </div>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Cut, clip, and convert
          <br />
          <span className="text-accent">without the hassle.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl">
          No account. No uploads. No cloud. Just your videos, on your machine.
          The fast, offline video converter that respects your privacy.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ScrollLink
            href="#download"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-lg font-medium text-background transition-colors hover:bg-accent-hover sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Free
          </ScrollLink>
          <ScrollLink
            href="#features"
            className="flex h-14 w-full items-center justify-center rounded-full border border-border px-8 text-lg font-medium transition-colors hover:bg-card sm:w-auto"
          >
            See Features
          </ScrollLink>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function FeatureSection({
  id,
  badge,
  title,
  description,
  features,
  reverse = false
}: {
  id?: string;
  badge: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="border-t border-border py-24">
      <div className={`mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            {badge}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="text-lg text-muted">{description}</p>
        </div>
        <div className="grid gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover">
              <IconCircleCheckOutline48 className="shrink-0 text-accent" corners="round" />
              <div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormatsSection() {
  const formats = [
    { name: "MP4", desc: "H.264 & H.265", type: "mp4" as const },
    { name: "GIF", desc: "Animated", type: "gif" as const },
    { name: "WebP", desc: "Smaller files", type: "webp" as const },
    { name: "MKV", desc: "With chapters", type: "mkv" as const },
    { name: "WebM", desc: "Web optimized", type: "video" as const },
    { name: "MOV", desc: "Apple format", type: "video" as const },
  ];

  return (
    <section id="formats" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Export Formats
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">One video in, any format out.</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Set a target file size and Torchio figures out the rest. It remembers your preferences per format, so you&apos;re not re-entering settings every time.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <div
              key={format.name}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-card-hover"
            >
              <FileIcon type={format.type} size={48} theme="dark" variant="solid" />
              <div>
                <h3 className="font-semibold">{format.name}</h3>
                <p className="text-sm text-muted">{format.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivacySection() {
  const points = [
    { title: "No account required", description: "Download, open, start using. No sign-up, no email, no BS." },
    { title: "No internet needed", description: "Works completely offline. Take it on a plane, use it anywhere." },
    { title: "No cloud processing", description: "Your hardware does the work. Your CPU, your GPU, your machine." },
    { title: "No data collection", description: "We don't see your videos, ever. Period." },
  ];

  return (
    <section id="privacy" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            100% Private
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Your files are yours. Period.</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            No cloud. No servers. No account. No subscription. Torchio runs entirely on your computer.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <IconCircleCheckOutline48 className="shrink-0 text-accent" corners="round" />
              <div>
                <h3 className="mb-1 font-semibold">{point.title}</h3>
                <p className="text-sm text-muted">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    { title: "Clip a moment for Discord", description: "Select 5 seconds, export as GIF, set target to 8MB, done." },
    { title: "Pull 10 highlights from a stream", description: "Make 10 cuts in the timeline, name them, export all at once." },
    { title: "Archive a tutorial with chapters", description: "Add markers at each section, export as MKV, chapters are baked in." },
    { title: "Convert a video for your phone", description: "Drop it in, pick MP4 (H.265), set a reasonable size, export." },
  ];

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Use Cases
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Built for real workflows.</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Whether you&apos;re clipping highlights, creating GIFs, or converting formats — Torchio handles it.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {cases.map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-bold text-background">
                {i + 1}
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          Get Started
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Download Torchio</h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-muted">
          FFmpeg included — nothing else to install. No account needed — just download and run.
        </p>
        <DownloadButtons />
      </div>
    </section>
  );
}

function ComingSoon() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Coming Soon
              </div>
              <h3 className="mb-2 text-2xl font-bold">Subtitle Support</h3>
              <p className="text-muted">
                Import, edit, and burn in subtitles. Extract subtitles from videos or add your own.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              In Development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <svg className="h-5 w-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-semibold">Torchio</span>
          </div>
          <p className="text-sm text-muted">
            Cut, clip, and convert videos without the hassle.
          </p>
          <Link
            href="https://github.com/missingfoot/torchio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <FeatureSection
          id="features"
          badge="The Editor"
          title="Cut once, export many."
          description="The app is built around one idea: make cutting videos fast. Drag through the timeline to select what you want to keep. Need multiple clips? Just keep adding them."
          features={[
            { title: "Auto scene detection", description: "One click detects all scene changes and creates cuts automatically. Hours of footage, trimmed in seconds." },
            { title: "Dead simple interface", description: "No learning curve. Beginners get started in seconds, pros get the speed they need. Just drag, cut, export." },
            { title: "Multi-clip workflow", description: "Create as many cuts as you want from one video. Each cut gets its own color in the timeline." },
            { title: "Batch export", description: "All clips export at once as separate files. Queue them up, walk away, done." },
          ]}
        />
        <FeatureSection
          badge="GIF & WebP"
          title="Instant animated exports."
          description="Turn any video clip into an animated GIF or WebP in seconds. Select the moment, pick your format, set your target file size, export. Done."
          features={[
            { title: "Smart file size targeting", description: "Need it under 8MB for Discord? 10MB for a forum? Just set the number and Torchio handles the rest." },
            { title: "WebP support", description: "Get smaller files with better quality. Modern browsers love it, and so will your upload speeds." },
            { title: "GIF for everywhere", description: "Classic GIF format works everywhere. Maximum compatibility when you need it." },
          ]}
          reverse
        />
        <FeatureSection
          badge="Chapters"
          title="MKV chapter markers."
          description="Add named chapter markers anywhere in your video. When you export to MKV, these become real chapter markers that viewers can use to skip between sections."
          features={[
            { title: "Click to add", description: "Drop a marker at any point in your video. Name each chapter in the sidebar — Intro, Round 1, Final Boss, whatever." },
            { title: "Visual timeline markers", description: "Markers show as red dots on the timeline so you always know where your chapters are." },
            { title: "Built-in navigation", description: "Exported MKV files have real chapter navigation. Great for tutorials, gameplay, or any long-form content." },
          ]}
        />
        <FormatsSection />
        <PrivacySection />
        <FeatureSection
          badge="Performance"
          title="Fast by default."
          description="Torchio is built for speed. Small download, minimal resource usage, and smart optimizations that let you work without waiting."
          features={[
            { title: "GPU acceleration", description: "Automatically uses your NVIDIA graphics card when available for faster encoding and rendering." },
            { title: "Smart caching", description: "Frames load ahead as you scrub so there's no waiting. Smooth timeline navigation, always." },
            { title: "Lightweight", description: "Small download size and minimal resource usage. Won't slow down your machine while you work." },
          ]}
          reverse
        />
        <UseCases />
        <ComingSoon />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
