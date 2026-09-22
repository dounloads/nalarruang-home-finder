export function HeroFallback() {
  return (
    <svg className="h-full w-full" viewBox="0 0 1200 680" role="img" aria-label="Ilustrasi dunia mini Jabodetabek dengan bukit, kereta, rumah, dan balon udara">
      <defs><linearGradient id="hill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="var(--hill-top)"/><stop offset="1" stopColor="var(--hill)"/></linearGradient></defs>
      <g className="fallback-cloud" fill="var(--cloud)"><ellipse cx="160" cy="130" rx="84" ry="31"/><circle cx="130" cy="112" r="32"/><circle cx="180" cy="104" r="42"/><ellipse cx="1000" cy="160" rx="82" ry="29"/><circle cx="970" cy="140" r="34"/><circle cx="1022" cy="135" r="40"/></g>
      <path d="M0 470 Q190 290 390 466 Q570 235 760 454 Q975 280 1200 465V680H0Z" fill="url(#hill)"/>
      <path d="M80 560 Q360 430 630 550 T1140 535" fill="none" stroke="var(--track)" strokeWidth="30" strokeLinecap="round"/>
      <path d="M80 560 Q360 430 630 550 T1140 535" fill="none" stroke="var(--track-light)" strokeWidth="8" strokeDasharray="18 15"/>
      <g transform="translate(790 352)"><rect x="0" y="30" width="108" height="84" rx="8" fill="var(--cream)"/><path d="M-12 35 54 0l66 35" fill="var(--roof)"/><rect x="40" y="68" width="30" height="46" fill="var(--brand-sky)"/><rect x="9" y="54" width="23" height="22" rx="3" fill="var(--brand-yellow)"/></g>
      <g transform="translate(320 405)"><rect width="150" height="62" rx="18" fill="var(--brand-sky)"/><rect x="16" y="12" width="34" height="25" rx="6" fill="var(--sky-pale)"/><rect x="62" y="12" width="34" height="25" rx="6" fill="var(--sky-pale)"/><circle cx="33" cy="68" r="18" fill="var(--track)"/><circle cx="115" cy="68" r="18" fill="var(--track)"/></g>
      {[180,540,980].map((x) => <g key={x} transform={`translate(${x} 370)`}><rect x="-7" y="55" width="14" height="55" rx="6" fill="var(--wood)"/><path d="M0 0 45 78h-90Z" fill="var(--tree)"/><path d="M0 28 38 91h-76Z" fill="var(--tree-dark)"/></g>)}
      <g className="fallback-balloon" transform="translate(920 70)"><ellipse cx="0" cy="0" rx="48" ry="59" fill="var(--brand-orange)"/><path d="M-30-42Q0-62 30-42L10 47H-10Z" fill="var(--brand-pink)" opacity=".8"/><rect x="-15" y="64" width="30" height="21" rx="5" fill="var(--wood)"/><path d="M-16 45 0 65M16 45 0 65" stroke="var(--wood)" strokeWidth="3"/></g>
    </svg>
  );
}
