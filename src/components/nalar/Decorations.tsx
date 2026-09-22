export function Flower({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 64" aria-hidden="true"><g fill="currentColor"><circle cx="32" cy="13" r="12"/><circle cx="50" cy="30" r="12"/><circle cx="36" cy="49" r="12"/><circle cx="14" cy="39" r="12"/><circle cx="14" cy="19" r="10"/></g><circle cx="31" cy="31" r="11" fill="var(--brand-yellow)"/></svg>;
}
export function Starburst({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`starburst ${className}`}><span>{children}</span></span>;
}
export function PaletteDots() {
  return <div className="palette-dots" aria-hidden="true"><i/><i/><i/><i/></div>;
}
export function IslandIllustration({ type }: { type: string }) {
  return <div className={`mini-island mini-island-${type}`} aria-hidden="true"><span className="island-grass"/><span className="island-object"/><span className="island-detail"/></div>;
}
