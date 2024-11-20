import React from "react";

export function GridBackgroundDemo({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-full max-w-full overflow-hidden bg-black">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-black bg-grid-white/[0.1] z-0">
                {/* Radial Gradient for a faded look */}
                <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}