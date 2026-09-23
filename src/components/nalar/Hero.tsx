import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapVisual } from "./MapVisual";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="page-shell hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">NalarRuang</span>
          <h1 id="hero-title">Cari hunian yang cocok sama gaya hidupmu, <span>bukan sekadar yang murah.</span></h1>
          <p>Jelajahi peta Jabodetabek, lihat skor bintang tiap kawasan, dan simulasikan waktu tempuh.</p>
          <div className="hero-actions">
            <Button asChild size="xl"><Link to="/app">Mulai Cari Hunian <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="xl"><a href="#cara-kerja">Lihat Cara Kerja <ArrowDown /></a></Button>
          </div>
          <div className="hero-chips">{["Tanpa login","Langsung eksplor","Khusus Jabodetabek"].map((item)=><span key={item}><Check />{item}</span>)}</div>
        </div>
        <div className="hero-map reveal"><MapVisual /></div>
      </div>
    </section>
  );
}
