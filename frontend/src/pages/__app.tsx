import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CookieBanner from "@/components/CookieBanner";
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Bannière de cookies */}
            <CookieBanner />
            <Component {...pageProps} />
        </>
    );
} 