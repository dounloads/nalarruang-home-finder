# NalarRuang Home Finder

REBUILD the NalarRuang landing page from scratch and REPLACE the existing design entirely. Delete any neobrutalist styling (no thick black borders, no hard offset shadows, no tilted tape labels). Attached are two visual references: (1) Choo-Choo World (soft clay/toybox 3D countryside), (2) a picnic-scrapbook poster (gingham cloth, grass, sticker cut-outs, starburst badges, flowers). Copy their visual language, not their content.

=== PROJECT ===
NalarRuang: a WebGIS that helps people find their ideal place to live in Jabodetabek based on lifestyle personas (Commuter, Driver, Social & Vibe, Zen). It has: persona onboarding, a multi-layer interactive map (Visual Explorer), Requirement Search (Top 3 recommendations), Smart Point Inspector with Persona Grading (0-3 stars), and a Commute Simulator. No login, no accounts, only public secondary data, Jabodetabek only.

=== TECH ===
React + Vite + TypeScript + Tailwind + react-router. Routes: "/" = this landing page, "/app" = the map app (just a friendly placeholder "Segera hadir" page for now; the button links must already point to it). 3D: @react-three/fiber + @react-three/drei + three. Animation: GSAP + ScrollTrigger. Icons: lucide-react. All UI copy in casual, friendly Bahasa Indonesia. Fonts: Plus Jakarta Sans ONLY (all weights), no other font anywhere.

=== VISUAL LANGUAGE ===
A) Choo-Choo World (soft clay / toybox):
- Natural sky gradient (soft blue #8FB8F5 to pale #DCEBFF), puffy cream clouds. NO purple/blue "AI" gradients, no abstract blobs, no glassmorphism.
- Rounded pastel-green hills (#A8E0A0, cream-mint tops), cone trees (#3FCB6B), tiny waterfalls/ponds, a floating hot air balloon, a small train looping on a track. Matte clay materials, soft shadows, chunky rounded shapes.
- Chunky glossy buttons: primary blue #1E7FE0 with a darker bottom edge (#1560B8), fully rounded, soft inner highlight, press-down animation on click.
- Wordmark "NalarRuang": very chunky rounded letters, each letter a different color (orange #F59B23, sky #12A8E8, green #22B573, yellow #FFC93C), thick WHITE outline (sticker-like) plus soft drop shadow, built with Plus Jakarta Sans ExtraBold (text-stroke + layered shadows or inline SVG).

B) Picnic scrapbook poster:
- Section backgrounds alternate between grass texture and gingham picnic cloth (red/white #D94A3D and pink/light-green pastel gingham) made with CSS gradients / SVG patterns.
- Cards and images look like cut-out stickers: thick WHITE border, soft blurred shadow, slight random rotation (-3° to 3°).
- Starburst badges (yellow, pink, mint), paper-tag labels, postcard-style cards, and inline-SVG decorations: small flowers, clovers, apples, a woven basket, a color-dots palette chip in a corner. Marker-style highlight backgrounds (yellow/pink/green) behind short captions.

DESIGN TOKENS: define ALL colors, radii (large, 20-32px), soft shadows, patterns, and spacing in ONE place (tailwind.config + CSS variables) so the same look can be reused for the future "/app" map screens (chunky rounded panels, glossy buttons, sticker-style pins and star badges).
Persona colors: Commuter = sky blue, Driver = orange, Social & Vibe = pink + yellow, Zen = mint green.

=== PAGE STRUCTURE (top to bottom) ===
0) Navbar (sticky, rounded pill on a soft cream/white sticker background): small NalarRuang wordmark, links Cara Kerja, Persona, Layer Peta, FAQ (smooth-scroll), and a glossy blue button "Mulai Cari Hunian" -> /app. Collapses into a hamburger drawer on mobile.

1) HERO (full screen, like Choo-Choo World's title screen):
- 3D clay countryside / mini Jabodetabek: rounded hills, cone trees, small houses, a station, a cafe, a toll road, a pond with a tiny waterfall, animated puffy clouds, a floating hot-air balloon, and a small train looping around a track. Hemisphere + directional light with soft shadows, sky gradient background.
- Center-top: the big chunky NalarRuang wordmark, headline "Cari hunian yang cocok sama gaya hidupmu, bukan sekadar yang murah.", subtext "Jelajahi peta Jabodetabek, lihat skor bintang tiap kawasan, dan simulasikan waktu tempuh ke kantor atau kampusmu."
- Buttons: big glossy blue "Mulai Cari Hunian" (-> /app) and a white rounded "Lihat Cara Kerja" (scroll). Three tiny reassurance chips underneath: "Tanpa login", "Langsung eksplor", "Khusus Jabodetabek".
- Day/Night toggle (night = warm lit windows, deeper blue sky, stars). Gentle parallax/limited orbit with the mouse, no free zoom. Optional sound toggle (soft ambient, OFF by default).
- Provide a static illustrated fallback (SVG/PNG) for no-WebGL or low-power devices and pause the 3D loop when the tab or hero is off-screen.

2) "MASALAHNYA DI SINI" (gingham background): three sticker cards, each with a tiny illustrated floating island:
   - "Bingung hunian mana yang cocok buat gayamu."
   - "Risiko kayak banjir gak keliatan di listing."
   - "Waktu tempuh ke kantor baru ketahuan setelah pindah."
   Closing line highlighted with marker style: "Yang kurang bukan semangat, tapi peta yang ngerti gaya hidupmu."

3) "KENALAN SAMA 4 PERSONA" (id="persona"): four sticker cards with cute illustrated icons:
   - Commuter: mengutamakan akses transit (stasiun, halte).
   - Driver: mengutamakan akses jalan dan tol.
   - Social & Vibe: mengutamakan hiburan, kafe, dan restoran.
   - Zen: mengutamakan keamanan, minim polusi, dan ruang terbuka hijau.
   Each card has a 0-3 star starburst row that animates on hover. Cards are selectable checkboxes (multi-select) that feed the interactive demo in section 7.

4) "TIGA LANGKAH, LIMA MENIT" (id="cara-kerja", grass background): numbered starburst badges 01-03:
   01 Pilih persona-mu (boleh lebih dari satu).
   02 Jelajahi peta dan cari kawasan (dapat Top 3 rekomendasi, kameranya langsung terbang ke sana).
   03 Klik lokasi, lihat skor bintang, lalu simulasikan waktu tempuh ke kantor atau kampus.

5) "ENAM LAYER PETA" (id="layer-peta"): six sticker tabs/cards, each toggle-able with a small preview illustration and one line description:
   Historis & Risiko (area rawan banjir dan risiko lain), Ekosistem Mikro & Gaya Hidup (kafe, restoran, ruang hijau), Inklusivitas (aksesibilitas dan fasilitas umum), Mobilitas & Transit (halte, stasiun, akses jalan), Mesin Waktu (proyek infrastruktur per tahun, with a small decorative year slider), Legalitas Lahan (status lahan).

6) "SEBERAPA PAS?" mini feature strip: three postcard-style cards for Requirement Search ("Ketik 'Daerah mudah transum di Bogor Kota', langsung dapat Top 3"), Smart Point Inspector ("Klik titik atau wilayah, panel ringkasan muncul dari kiri"), Commute Simulator ("Bandingkan kendaraan pribadi vs transportasi publik").

7) "COBA CEPAT" (interactive demo, no backend): a postcard-style mock Point Inspector showing star ratings for the four personas for an example location. Users tick personas (from section 3 or checkboxes inside the card); the auto-summary updates only for ticked personas, e.g. 3 stars Zen -> "Tempat ini sangat sempurna untuk persona Zen." Add a switch "Titik" vs "Wilayah" that changes the example scores and shows a short note: "Titik dinilai dari jarak ke fasilitas, wilayah dinilai dari jumlah fasilitas." Add a clearly visible label "Contoh data".

8) FAQ (id="faq", rounded accordion): 
   - Datanya dari mana? -> Data sekunder publik (mis. OpenStreetMap/Overpass, portal data pemerintah terbuka seperti InaRISK dan ATR/BPN).
   - Perlu login? -> Tidak, langsung pakai.
   - Preferensi persona disimpan? -> Hanya selama sesi, tidak disimpan permanen, dan akan ditanya lagi di sesi baru.
   - Skornya akurat? -> Skor adalah estimasi dari data publik yang bisa berubah; cek langsung ke lokasi sebelum memutuskan.
   - Cakupan wilayah? -> Jabodetabek.

9) CTA BANNER: big scrapbook card on gingham: "Siap cari hunian yang pas?" + glossy blue button "Mulai Cari Hunian".

10) FOOTER (grass texture): wordmark, short blurb "Platform SIG untuk membantu kamu menemukan kawasan hunian ideal di Jabodetabek.", links (Cara Kerja, Persona, Layer Peta, FAQ), disclaimer "Skor dan rekomendasi bersifat estimasi dari data sekunder publik.", and "Dibuat di Indonesia".

=== MOTION ===
GSAP ScrollTrigger: stickers pop in with a small bounce, cards drift in like they are being placed on a picnic cloth, badges spin in slightly, section backgrounds parallax subtly. Hover: cards lift and untilt, buttons press down. Respect prefers-reduced-motion (disable parallax, looping, and pop-ins).

=== QUALITY ===
- Fully responsive (desktop-first, works on tablet and mobile; on mobile use a lighter/static hero).
- Accessibility: AA text contrast (especially over gingham and colored highlights: put text on solid or highlighted backgrounds), keyboard-focusable controls, visible focus rings, alt text/aria-labels, semantic headings.
- Performance: lazy-load the 3D canvas, cap devicePixelRatio, keep polygon count low, no huge images.
- SEO: title "NalarRuang: Cari Hunian Sesuai Gaya Hidup di Jabodetabek", meta description, Open Graph tags, favicon (small hill/house icon).
- Code organization: separate components per section, a constants file for copy/persona data, and a design-tokens file. Do not add authentication or a backend yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/16c44a5c-cfb0-410f-8ff6-00067a2780f8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
