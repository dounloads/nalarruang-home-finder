import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/nalar/Wordmark";

export const Route = createFileRoute("/app")({
 head:()=>({meta:[{title:"Visual Explorer Segera Hadir — NalarRuang"},{name:"description",content:"Visual Explorer NalarRuang untuk mencari kawasan hunian ideal di Jabodetabek sedang disiapkan."},{property:"og:title",content:"Visual Explorer Segera Hadir — NalarRuang"},{property:"og:description",content:"Peta interaktif NalarRuang sedang disiapkan untuk kamu."},{property:"og:type",content:"website"},{property:"og:url",content:"/app"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/app"}]}),
 component:AppComingSoon,
});
function AppComingSoon(){return <main className="coming-soon"><section className="coming-card"><Wordmark/><div className="coming-icon"><MapPinned/></div><span className="eyebrow">Visual Explorer</span><h1>Segera hadir</h1><p>Kami sedang menyiapkan peta analitis Jabodetabek agar kamu dapat membandingkan kawasan secara jelas dan menyeluruh.</p><Button asChild size="xl"><Link to="/"><ArrowLeft/> Kembali ke halaman utama</Link></Button></section></main>}
