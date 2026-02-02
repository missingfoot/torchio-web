"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollLink from "./ScrollLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="Torchio" width={32} height={32} className="h-8 w-8" />
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
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent-hover"
        >
          Download
        </ScrollLink>
      </div>
    </header>
  );
}
