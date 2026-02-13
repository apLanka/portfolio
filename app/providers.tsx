"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LazyMotion features={domAnimation} strict>
            <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
                {children}
            </NextThemesProvider>
        </LazyMotion>
    );
}
