import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/nalar/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NalarRuang: Cari Hunian Sesuai Gaya Hidup di Jabodetabek" },
      { name: "description", content: "Jelajahi kawasan hunian Jabodetabek berdasarkan persona, risiko, akses transit, gaya hidup, dan estimasi perjalanan." },
      { property: "og:title", content: "NalarRuang: Cari Hunian Sesuai Gaya Hidup di Jabodetabek" },
      { property: "og:description", content: "Temukan kawasan hunian yang cocok dengan keseharianmu lewat peta interaktif Jabodetabek." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});
