"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type OS = "windows" | "macos" | "linux" | null;

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
  if (platform.includes("linux") || userAgent.includes("linux")) {
    return "linux";
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

const LinuxIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.59,15.359a4.464,4.464,0,0,1,.979.432c.067.037.13.076.192.108.16-.015.419-.069.633-.114a5.774,5.774,0,0,1,1.171-.162,2.413,2.413,0,0,1,.4.035,7.268,7.268,0,0,0-.022-1.065A8.384,8.384,0,0,0,18.1,10.262c-.942-1.035-2.391-2.523-2.391-3.653V3.474a3.475,3.475,0,0,0-6.949,0V8.041c-.151.79-.546.866-1.167,1.732a10.318,10.318,0,0,0-1.45,2.674c-.29.87-.905,1.788-1.186,2.511a2.034,2.034,0,0,1,.23-.057,2.183,2.183,0,0,1,.34-.027,2.293,2.293,0,0,1,1.139.313A16.567,16.567,0,0,1,8.763,10.3a4.509,4.509,0,0,0,.7-2.918c.364.29.727,1.192,1.719,1.192S12.837,7.8,13.389,7.52a1.5,1.5,0,0,0,.382-.274l.095.022a46.862,46.862,0,0,1,2.3,4.915A11.1,11.1,0,0,1,16.59,15.359ZM10.94,5.274a2.247,2.247,0,0,0-.466.148l-.077.036a2.478,2.478,0,0,0-.376.216h0a1.325,1.325,0,0,1-.342-.826c-.049-.58.205-1.076.566-1.106s.693.416.742,1A1.571,1.571,0,0,1,10.94,5.274Zm2.4-.418a1.6,1.6,0,0,1-.279.8c-.057-.03-.12-.061-.185-.092l-.049-.024c-.078-.036-.162-.07-.252-.1l-.01,0a3.2,3.2,0,0,0-.678-.167,1.77,1.77,0,0,1-.038-.537c.055-.654.433-1.156.845-1.121S13.4,4.2,13.34,4.856Z"></path>
    <path d="M6.7,17.286c-.339-.514-.8-.979-1.268-.9s-.791.917-1.092,1.168-1.456.025-1.808.4-.025,1.719-.088,2.36-.4.979-.439,1.28.063.64.628.841,2.674.728,3.4.891,2.435,1.243,3.239-.062a2.193,2.193,0,0,0-.477-2.75A33.772,33.772,0,0,1,6.7,17.286Z"></path>
    <path d="M11.691,21.674a6.427,6.427,0,0,1-.666-.035,3.216,3.216,0,0,1,.02,1.059,13.928,13.928,0,0,1,2.583.092,4.6,4.6,0,0,1,.082-1.626A4.188,4.188,0,0,1,11.691,21.674Z"></path>
    <path d="M21.536,19.734a2.4,2.4,0,0,1-1.217-1.255c-.113-.5-.013-.967-.4-1.268s-1.659.273-2.409.18c-.526-.066-1.31-.889-1.845-.548-.318.2-.152,1.008-.14,1.435a22.877,22.877,0,0,1-.188,2.561c-.088.489-.766,2.033.552,2.912a2.014,2.014,0,0,0,2.461-.54,7.4,7.4,0,0,1,1.87-1.393,4.616,4.616,0,0,0,1.67-1.054C22.089,20.425,22.064,20.035,21.536,19.734Z"></path>
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

  const primaryStyle = "flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-8 text-lg font-medium text-background transition-colors hover:bg-accent-hover";
  const secondaryStyle = "flex h-14 items-center justify-center gap-3 rounded-full border border-border px-8 text-lg font-medium transition-colors hover:bg-card";

  // Order buttons with detected OS first
  const buttons = [
    { id: "windows", label: "Windows", icon: <WindowsIcon />, url: "https://github.com/missingfoot/torchio/releases/latest/download/Torchio-windows-x64.exe" },
    { id: "macos", label: "macOS", icon: <MacOSIcon />, url: "https://github.com/missingfoot/torchio/releases/latest/download/Torchio-macos-arm64.dmg" },
    { id: "linux", label: "Linux", icon: <LinuxIcon />, url: "https://github.com/missingfoot/torchio/releases/latest/download/Torchio-linux-amd64.deb" },
  ];

  // Sort to put detected OS first
  const sortedButtons = [...buttons].sort((a, b) => {
    if (a.id === os) return -1;
    if (b.id === os) return 1;
    return 0;
  });

  return (
    <>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        {sortedButtons.map((button, index) => (
          <Link
            key={button.id}
            href={button.url}
            className={button.id === os || (os === null && index === 0) ? primaryStyle : secondaryStyle}
          >
            {button.icon}
            {button.label}
          </Link>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Windows 10/11, macOS 11+, Ubuntu 20.04+
      </p>
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
