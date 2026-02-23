"use client";

import { useEffect, useRef } from "react";

export default function CookieConsent() {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;

        let script = document.getElementById('termsfeed-script') as HTMLScriptElement;

        const initTermsFeed = () => {
            if (typeof window !== "undefined" && (window as any).cookieconsent && !initialized.current) {
                try {
                    // Force the widget to initialize
                    (window as any).cookieconsent.run({
                        "notice_banner_type": "simple",
                        "consent_type": "express",
                        "palette": "dark",
                        "language": "en",
                        "page_load_consent_levels": ["strictly-necessary"],
                        "notice_banner_reject_button_hide": false,
                        "preferences_center_close_button_hide": false,
                        "page_refresh_confirmation_buttons": false,
                        "website_name": "Chatbot Boy AI"
                    });
                    initialized.current = true;
                } catch (e) {
                    console.error("TermsFeed initialization failed:", e);
                }
            }
        };

        if (!script) {
            script = document.createElement('script');
            script.id = 'termsfeed-script';
            script.src = "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
            script.async = true;
            script.onload = initTermsFeed;
            document.body.appendChild(script);
        } else {
            initTermsFeed();
        }

        const openPreferences = (e: MouseEvent) => {
            e.preventDefault();
            if (typeof window !== "undefined" && (window as any).cookieconsent) {
                (window as any).cookieconsent.openPreferencesCenter();
            }
        };

        const prefButton = document.getElementById("open_preferences_center");
        if (prefButton) {
            prefButton.addEventListener("click", openPreferences);
        }

        return () => {
            if (prefButton) {
                prefButton.removeEventListener("click", openPreferences);
            }
        };
    }, []);

    return (
        <noscript>
            Free cookie consent management tool by <a href="https://www.termsfeed.com/">TermsFeed Generator</a>
        </noscript>
    );
}
