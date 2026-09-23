import { Building2, CircleParking, Coffee, TrainFront, Trees } from "lucide-react";

const roads = [
  "M30 105 C180 72 260 142 420 92 S665 76 840 124",
  "M64 300 C195 220 315 328 466 242 S702 198 848 268",
  "M118 438 C250 354 352 430 494 366 S702 316 806 390",
  "M190 38 C212 164 160 260 250 482",
  "M540 42 C494 155 564 230 522 482",
  "M724 60 C672 175 748 270 696 458",
];

const minorRoads = [
  "M88 180 C230 144 308 202 462 154 S674 126 816 174",
  "M46 374 C198 304 318 388 464 318 S688 276 836 330",
  "M326 36 C300 138 354 230 318 470",
  "M632 32 C600 150 652 248 618 468",
];

export function MapVisual({ activeLayer = 0, compact = false }: { activeLayer?: number; compact?: boolean }) {
  const accentClass = ["map-blue", "map-cyan", "map-amber", "map-orange", "map-violet", "map-green"][activeLayer] ?? "map-blue";
  return (
    <div className={`map-visual ${accentClass} ${compact ? "map-compact" : ""}`} role="img" aria-label="Pratinjau peta analitis Jabodetabek dengan jaringan jalan, transit, ruang hijau, dan panel data">
      <svg viewBox="0 0 880 520" aria-hidden="true">
        <rect width="880" height="520" className="map-base" />
        <path d="M42 38H286L336 104 264 192 84 174Z" className="map-zone zone-a" />
        <path d="M320 54H596L676 126 620 234 404 224 286 156Z" className="map-zone zone-b" />
        <path d="M654 82H848V276L724 300 616 224Z" className="map-zone zone-c" />
        <path d="M40 212 256 186 360 272 320 442 78 474 28 358Z" className="map-zone zone-d" />
        <path d="M368 244 612 230 712 322 632 488 354 474 306 370Z" className="map-zone zone-e" />
        <path d="M716 310 856 286 866 500 654 500 626 424Z" className="map-zone zone-f" />
        <path d="M0 412C146 366 192 468 336 430s250-2 334-42 144-78 210-62" className="map-river" />
        {minorRoads.map((d) => <path key={d} d={d} className="map-road-minor" />)}
        {roads.map((d) => <path key={d} d={d} className="map-road" />)}
        <path d="M70 274C228 248 348 286 470 208s230-44 332-116" className="map-rail" />
        {[{x:180,y:256},{x:355,y:258},{x:520,y:182},{x:696,y:146}].map((p) => <circle key={p.x} cx={p.x} cy={p.y} r="8" className="map-station" />)}
        <g className="map-focus"><circle cx="520" cy="278" r="56"/><circle cx="520" cy="278" r="8"/></g>
        <g className="map-pin" transform="translate(504 236)"><path d="M16 0C7 0 0 7 0 16c0 13 16 29 16 29s16-16 16-29C32 7 25 0 16 0Z"/><circle cx="16" cy="16" r="5"/></g>
      </svg>
      <div className="map-toolbar" aria-hidden="true"><span>−</span><span>+</span></div>
      <div className="map-legend" aria-hidden="true"><strong>Layer aktif</strong><span><i/>Mobilitas & transit</span><span><i/>Ruang terbuka</span><span><i/>Area terpilih</span></div>
      <div className="map-panel" aria-hidden="true">
        <small>RINGKASAN WILAYAH</small><strong>Kebayoran Baru</strong><div className="map-metric"><span>Skor kecocokan</span><b>2.7 / 3</b></div>
        <div className="map-bar"><i /></div><div className="map-tags"><span><TrainFront/> 0,6 km</span><span><Trees/> 8 taman</span><span><Coffee/> 42 tempat</span></div>
      </div>
      <div className="map-floating-stats" aria-hidden="true"><span><Building2/> 164 area</span><span><CircleParking/> 27 simpul</span></div>
    </div>
  );
}