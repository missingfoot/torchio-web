"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type OS = "windows" | "macos" | null;

function detectOS(): OS {
  if (typeof window === "undefined") return null;

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  if (platform.includes("win") || userAgent.includes("windows")) {
    return "windows";
  }
  if (platform.includes("mac") || userAgent.includes("macintosh")) {
    return "macos";
  }

  return "windows"; // default fallback
}

const WindowsIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <rect x="1" y="1" width="10" height="10"></rect>
    <rect x="13" y="1" width="10" height="10"></rect>
    <rect x="1" y="13" width="10" height="10"></rect>
    <rect x="13" y="13" width="10" height="10"></rect>
  </svg>
);

const MacOSIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.354,16.487c-1.338-0.506-2.233-1.721-2.334-3.17c-0.099-1.412,0.593-2.666,1.851-3.355l1.046-0.573 l-0.747-0.93c-1.255-1.563-3.051-2.497-4.804-2.497c-1.215,0-2.058,0.318-2.735,0.574c-0.478,0.181-0.855,0.323-1.269,0.323 c-0.472,0-0.938-0.166-1.478-0.358c-0.708-0.252-1.51-0.538-2.54-0.538c-1.99,0-3.997,1.188-5.237,3.098 c-1.851,2.849-1.343,7.734,1.208,11.616C5.326,22.215,6.743,23.982,8.75,24c0.013,0,0.026,0,0.039,0 c1.643,0,2.003-0.876,3.598-0.886c1.742,0.082,1.962,0.893,3.589,0.882c1.961-0.018,3.375-1.771,4.499-3.484 c0.664-1.007,0.921-1.534,1.438-2.678l0.438-0.97L21.354,16.487z"></path>
    <path d="M15.1,3.45c0.65-0.834,1.143-2.011,0.964-3.214c-1.062,0.073-2.302,0.748-3.027,1.628 c-0.658,0.799-1.201,1.983-0.99,3.135C13.205,5.035,14.404,4.343,15.1,3.45L15.1,3.45z"></path>
  </svg>
);

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" clipRule="evenodd" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"></path>
  </svg>
);

export default function DownloadButtons() {
  const [os, setOS] = useState<OS>(null);

  useEffect(() => {
    setOS(detectOS());
  }, []);

  const primaryStyle = "flex h-16 items-center justify-center gap-3 rounded-full bg-accent px-6 text-lg font-medium text-white transition-colors hover:bg-accent-hover";
  const secondaryStyle = "flex h-16 items-center justify-center gap-3 rounded-full border border-border px-6 text-lg font-medium transition-colors hover:bg-card";

  // Order buttons with detected OS first
  const buttons = [
    { id: "windows", label: "Windows", subtext: "10/11", icon: <WindowsIcon />, url: "https://github.com/missingfoot/torchio/releases/latest/download/Torchio-windows-x64.exe" },
    { id: "macos", label: "macOS", subtext: "ARM", icon: <MacOSIcon />, url: "https://github.com/missingfoot/torchio/releases/latest/download/Torchio-macos-arm64.dmg" },
  ];

  // Sort to put detected OS first
  const sortedButtons = [...buttons].sort((a, b) => {
    if (a.id === os) return -1;
    if (b.id === os) return 1;
    return 0;
  });

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 w-full max-w-2xl mx-auto">
        {sortedButtons.map((button, index) => (
          <Link
            key={button.id}
            href={button.url}
            className={button.id === os || (os === null && index === 0) ? primaryStyle : secondaryStyle}
          >
            {button.icon}
            <div className="flex flex-col items-start leading-tight">
              <span>{button.label}</span>
              <span className="text-xs opacity-70">{button.subtext}</span>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="https://github.com/missingfoot/torchio"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
      >
        <GitHubIcon />
        View on GitHub
      </Link>
    </>
  );
}
