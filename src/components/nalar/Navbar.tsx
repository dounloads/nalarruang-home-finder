import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "./Wordmark";
const links = [["Cara Kerja","#cara-kerja"],["Persona","#persona"],["Layer Peta","#layer-peta"],["FAQ","#faq"]] as const;
export function Navbar() {
 const [open,setOpen]=useState(false);
 return <header className="site-nav"><div className="nav-pill"><a href="#top" aria-label="NalarRuang, kembali ke atas"><Wordmark compact/></a><nav className="desktop-nav" aria-label="Navigasi utama">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><Button asChild variant="glossy" size="sm" className="desktop-cta"><Link to="/app">Mulai Cari Hunian</Link></Button><Button variant="ghost" size="icon" className="menu-button" aria-label={open?"Tutup menu":"Buka menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="mobile-nav" aria-label="Navigasi seluler">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<Button asChild variant="glossy"><Link to="/app">Mulai Cari Hunian</Link></Button></nav>}</header>
}
