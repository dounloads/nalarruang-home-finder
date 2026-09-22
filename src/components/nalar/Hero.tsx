import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroFallback } from "./HeroFallback";
import { Wordmark } from "./Wordmark";

const ClayScene = lazy(() => import("./ClayScene").then((m) => ({ default: m.ClayScene })));

export function Hero() {
  const [night, setNight] = useState(false);
  const [canRender3d, setCanRender3d] = useState(false);
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lowPower = window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches;
    let supportsWebGL = false;
    try { supportsWebGL = Boolean(document.createElement("canvas").getContext("webgl2") || document.createElement("canvas").getContext("webgl")); } catch { supportsWebGL = false; }
    setCanRender3d(!lowPower && supportsWebGL);
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting) && !document.hidden), { threshold: .05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    const onVisibility = () => setVisible(!document.hidden && Boolean(sectionRef.current));
    document.addEventListener("visibilitychange", onVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);

  return (
    <section ref={sectionRef} className={night ? "hero hero-night" : "hero"} aria-labelledby="hero-title">
      <div className="hero-scene" aria-hidden="true">
        {canRender3d && visible ? <Suspense fallback={<HeroFallback/>}><ClayScene night={night}/></Suspense> : <HeroFallback/>}
      </div>
      <div className="hero-wash" />
      <div className="hero-copy page-shell">
        <div className="hero-wordmark"><Wordmark /></div>
        <h1 id="hero-title">Cari hunian yang cocok sama gaya hidupmu, <span>bukan sekadar yang murah.</span></h1>
        <p>Jelajahi peta Jabodetabek, lihat skor bintang tiap kawasan, dan simulasikan waktu tempuh ke kantor atau kampusmu.</p>
        <div className="hero-actions">
          <Button asChild variant="glossy" size="xl"><Link to="/app">Mulai Cari Hunian</Link></Button>
          <Button asChild variant="sticker" size="xl"><a href="#cara-kerja">Lihat Cara Kerja <ArrowDown/></a></Button>
        </div>
        <div className="hero-chips"><span>Tanpa login</span><span>Langsung eksplor</span><span>Khusus Jabodetabek</span></div>
      </div>
      <Button className="day-toggle" variant="sticker" size="iconLg" onClick={() => setNight((v) => !v)} aria-label={night ? "Aktifkan suasana siang" : "Aktifkan suasana malam"}>{night ? <Sun/> : <Moon/>}</Button>
    </section>
  );
}
