"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
    const glow1Ref = useRef(null);
    const glow2Ref = useRef(null);

    const mousePos = useRef({ x: 0, y: 0 });

    // Position tracking for two lights
    const glow1Pos = useRef({ x: 0, y: 0 });
    const glow2Pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Detect touch devices - skip effect to save performance and avoid visual glitches
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            // Light 1: Primary Blue (Faster)
            const speed1 = 0.15;
            glow1Pos.current.x += (mousePos.current.x - glow1Pos.current.x) * speed1;
            glow1Pos.current.y += (mousePos.current.y - glow1Pos.current.y) * speed1;

            // Light 2: Secondary Cyan (Slower/Trailing)
            const speed2 = 0.08;
            glow2Pos.current.x += (mousePos.current.x - glow2Pos.current.x) * speed2;
            glow2Pos.current.y += (mousePos.current.y - glow2Pos.current.y) * speed2;

            if (glow1Ref.current) {
                glow1Ref.current.style.transform = `translate3d(${glow1Pos.current.x - 200}px, ${glow1Pos.current.y - 200}px, 0)`;
            }
            if (glow2Ref.current) {
                glow2Ref.current.style.transform = `translate3d(${glow2Pos.current.x - 175}px, ${glow2Pos.current.y - 175}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Light 1: Primary Blue (Bolder) */}
            <div
                ref={glow1Ref}
                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-80 dark:opacity-60 transition-opacity duration-300"
                style={{
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 40%, rgba(59, 130, 246, 0) 80%)",
                    willChange: "transform",
                }}
            />

            {/* Light 2: Secondary Cyan (Bolder) */}
            <div
                ref={glow2Ref}
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[80px] opacity-70 dark:opacity-50 transition-opacity duration-300"
                style={{
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, rgba(6, 182, 212, 0.3) 40%, rgba(6, 182, 212, 0) 80%)",
                    willChange: "transform",
                }}
            />
        </div>
    );
}
