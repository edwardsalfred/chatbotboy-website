"use client";

import { useState } from "react";

import Image from "next/image";
import { Icon } from '@iconify/react';

const BOOKING_URL = "https://links.convertwave.ai/widget/booking/vTmxKNDLOVK17mpAYXot";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/chatbotBOY - LOGO A.png" alt="ChatbotBoy Logo" width={220} height={48} className="object-contain" />
                </div>

                <nav className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-400">
                    <a href="/#services" className="hover:text-white transition-colors">Services</a>
                    <a href="/#process" className="hover:text-white transition-colors">Process</a>
                    <a href="/insights" className="hover:text-white transition-colors">Insights</a>
                    <a href="/#about" className="hover:text-white transition-colors">About</a>
                </nav>

                <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="hidden md:block text-base font-medium text-white hover:text-blue-400 transition-colors">
                    Book a Call →
                </a>

                <button className="md:hidden text-zinc-400" onClick={() => setMenuOpen(!menuOpen)}>
                    <Icon icon="solar:hamburger-menu-linear" width="1.5em" height="1.5em" />
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden">
                    <a href="/#services" className="text-lg text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="/#process" className="text-lg text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>Process</a>
                    <a href="/insights" className="text-lg text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>Insights</a>
                    <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-lg text-blue-400" onClick={() => setMenuOpen(false)}>Book Strategy Call</a>
                </div>
            )}
        </header>
    );
}
