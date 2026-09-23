import { useEffect, useState } from "react";
import type { PersonaId } from "@/data/nalar";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { CtaSection, DemoSection, FaqSection, FeatureStrip, Footer, LayersSection, PersonaSection, ProblemsSection, StepsSection } from "./Sections";

export function LandingPage(){
 const [selected,setSelected]=useState<PersonaId[]>(["commuter","zen"]);
 const toggle=(id:PersonaId)=>setSelected(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id]);
 useEffect(()=>{
   const media=window.matchMedia("(prefers-reduced-motion: reduce)");
   if(media.matches)return;
   let cleanup=()=>{};
   void Promise.all([import("gsap"),import("gsap/ScrollTrigger")]).then(([{default:gsap},{ScrollTrigger}])=>{
     gsap.registerPlugin(ScrollTrigger);
     const ctx=gsap.context(()=>{
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el)=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 92%",once:true},y:16,opacity:0,duration:.55,ease:"power2.out"}));
     }); cleanup=()=>ctx.revert();
   }); return()=>cleanup();
 },[]);
 return <div id="top" className="site-page"><Navbar/><main><Hero/><ProblemsSection/><PersonaSection selected={selected} onToggle={toggle}/><StepsSection/><LayersSection/><FeatureStrip/><DemoSection selected={selected} onToggle={toggle}/><FaqSection/><CtaSection/></main><Footer/></div>;
}
