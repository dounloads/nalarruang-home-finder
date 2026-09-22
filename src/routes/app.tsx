import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Map, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/nalar/Wordmark";

export const Route = createFileRoute("/app")({
 head:()=>({meta:[{title:"Visual Explorer Segera Hadir — NalarRuang"},{name:"description",content:"Visual Explorer NalarRuang untuk mencari kawasan hunian ideal di Jabodetabek sedang disiapkan."},{property:"og:title",content:"Visual Explorer Segera Hadir — NalarRuang"},{property:"og:description",content:"Peta interaktif NalarRuang sedang disiapkan untuk kamu."},{property:"og:type",content:"website"},{property:"og:url",content:"/app"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/app"}]}),
 component:AppComingSoon,
});
function AppComingSoon(){return <main className="coming-soon pattern-sky"><div className="coming-landscape" aria-hidden="true"><span/><span/><span/></div><section className="coming-card"><Wordmark/><div className="coming-icon"><Map/><Sparkles/></div><span className="paper-label label-yellow">VISUAL EXPLORER</span><h1>Segera hadir</h1><p>Kami lagi merapikan peta Jabodetabek supaya pengalaman pertamamu terasa ringan, jelas, dan menyenangkan.</p><Button asChild variant="glossy" size="xl"><Link to="/"><ArrowLeft/> Kembali ke halaman utama</Link></Button></section></main>}
