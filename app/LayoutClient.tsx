"use client";
import { ReactLenis } from 'lenis/react';
// import Header from "@/components/Header";
// import Header2 from "@/components/Header2";
// import GlitchBoxProvider from "@/transitions/GlitchBoxProvider";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    // const pathname = usePathname();

    return (
        <ReactLenis root options={{
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        }}>
            {/* <GlitchBoxProvider> */}
                <main className="flex-1">{children}</main>
            {/* </GlitchBoxProvider> */}
        </ReactLenis>
    );
}