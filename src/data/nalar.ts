import { BusFront, CarFront, Coffee, Leaf, ShieldCheck, TrainFront, Trees, Waves, Accessibility, Clock3, MapPinned, Search, Route } from "lucide-react";

export type PersonaId = "commuter" | "driver" | "social" | "zen";

export const personas = [
  { id: "commuter" as const, name: "Commuter", short: "Akses transit paling utama", description: "Mengutamakan akses transit, seperti stasiun dan halte.", color: "persona-commuter", icon: TrainFront },
  { id: "driver" as const, name: "Driver", short: "Jalan lancar, tol dekat", description: "Mengutamakan akses jalan utama dan gerbang tol.", color: "persona-driver", icon: CarFront },
  { id: "social" as const, name: "Social & Vibe", short: "Dekat seru-serunya kota", description: "Mengutamakan hiburan, kafe, dan restoran.", color: "persona-social", icon: Coffee },
  { id: "zen" as const, name: "Zen", short: "Tenang, hijau, lega", description: "Mengutamakan keamanan, minim polusi, dan ruang terbuka hijau.", color: "persona-zen", icon: Leaf },
];

export const problems = [
  { title: "Bingung hunian mana yang cocok buat gayamu.", type: "homes" },
  { title: "Risiko kayak banjir gak keliatan di listing.", type: "flood" },
  { title: "Waktu tempuh ke kantor baru ketahuan setelah pindah.", type: "commute" },
];

export const steps = [
  { number: "01", title: "Pilih persona-mu", text: "Boleh lebih dari satu. Sesuaikan saja dengan keseharianmu." },
  { number: "02", title: "Jelajahi dan cari", text: "Dapat Top 3 rekomendasi, lalu kamera langsung terbang ke sana." },
  { number: "03", title: "Periksa lebih dekat", text: "Lihat skor bintang dan simulasikan perjalanan ke kantor atau kampus." },
];

export const layers = [
  { title: "Historis & Risiko", description: "Area rawan banjir dan risiko lain.", icon: Waves, tone: "sky" },
  { title: "Ekosistem Mikro & Gaya Hidup", description: "Kafe, restoran, dan ruang hijau.", icon: Coffee, tone: "pink" },
  { title: "Inklusivitas", description: "Aksesibilitas dan fasilitas umum.", icon: Accessibility, tone: "yellow" },
  { title: "Mobilitas & Transit", description: "Halte, stasiun, dan akses jalan.", icon: BusFront, tone: "orange" },
  { title: "Mesin Waktu", description: "Proyek infrastruktur per tahun.", icon: Clock3, tone: "mint", year: true },
  { title: "Legalitas Lahan", description: "Gambaran status lahan kawasan.", icon: ShieldCheck, tone: "green" },
];

export const features = [
  { title: "Requirement Search", text: "Ketik ‘Daerah mudah transum di Bogor Kota’, langsung dapat Top 3.", icon: Search, label: "CARI PAKAI BAHASAMU" },
  { title: "Smart Point Inspector", text: "Klik titik atau wilayah, panel ringkasan muncul dari kiri.", icon: MapPinned, label: "CEK SATU TEMPAT" },
  { title: "Commute Simulator", text: "Bandingkan kendaraan pribadi vs transportasi publik.", icon: Route, label: "HITUNG PERJALANAN" },
];

export const faqs = [
  ["Datanya dari mana?", "Data sekunder publik, misalnya OpenStreetMap/Overpass serta portal data pemerintah terbuka seperti InaRISK dan ATR/BPN."],
  ["Perlu login?", "Tidak. Kamu bisa langsung pakai tanpa membuat akun."],
  ["Preferensi persona disimpan?", "Hanya selama sesi, tidak disimpan permanen, dan akan ditanya lagi di sesi baru."],
  ["Skornya akurat?", "Skor adalah estimasi dari data publik yang bisa berubah. Tetap cek langsung ke lokasi sebelum memutuskan."],
  ["Cakupan wilayah?", "Saat ini khusus Jabodetabek."],
] as const;

export const scores = {
  point: { commuter: 2, driver: 3, social: 2, zen: 3 },
  area: { commuter: 3, driver: 2, social: 3, zen: 1 },
} satisfies Record<string, Record<PersonaId, number>>;
