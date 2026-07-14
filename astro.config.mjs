// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    server: {
        allowedHosts: true,
    },
    integrations: [
        icon(),
        starlight({
            title: "WinBoat Docs",
            description: "Documentation for WinBoat",
            logo: {
                src: "./src/assets/winboat_logo.svg",
            },
            editLink: {
                baseUrl: "https://github.com/TibixDev/winboat-web/edit/main/",
            },
            sidebar: [
                { label: "Home", link: "/docs" },

                {
                    label: "Help",
                    items: [{ autogenerate: { directory: "/docs/help" } }],
                },
            ],
            social: [
                { icon: "discord", label: "Discord", href: "https://discord.com/invite/MEwmpWm4tN" },
                { icon: "github", label: "GitHub", href: "https://github.com/TibixDev/winboat" },
            ],
            customCss: ["./src/styles/global.css"],
        }),
    ],
});
