"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg-primary/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Kartavya Technology"
            width={36}
            height={36}
            className="h-8 w-8 md:h-9 md:w-9"
          />
          <span className="text-base font-semibold tracking-tight text-text-primary md:text-lg">
            Kartavya Technology
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="card-surface min-w-[220px] p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-white/5 hover:text-text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm">
            Talk to an AI Architect
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-primary lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-primary lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-semibold text-text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="py-1.5 text-sm text-text-secondary"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-3 w-full text-sm"
              onClick={() => setOpen(false)}
            >
              Talk to an AI Architect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
