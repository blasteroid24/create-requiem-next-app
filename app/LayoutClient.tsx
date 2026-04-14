"use client";
import { ReactLenis } from 'lenis/react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlitchBoxProvider from "@/transitions/GlitchBoxProvider";

export default function LayoutClient({ children }: { children: React.ReactNode }) {

    return (
        <ReactLenis root options={{
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        }}>

            <GlitchBoxProvider>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </GlitchBoxProvider>

        </ReactLenis>
    );
}