☕ Kopi Kenangan - Immersive Storytelling Experience

"Mengangkat kopi menjadi sebuah karya seni."

Sebuah konsep landing page berstandar Awwwards untuk Kopi Kenangan, menampilkan teknik scrollytelling performa tinggi, animasi 3D yang mulus, dan pengalaman digital yang mewah.

✨ Sekilas Tentang Proyek

Proyek ini adalah eksplorasi teknis dalam membangun website storytelling brand kelas atas. Mekanisme utamanya menggerakkan urutan gambar frame-by-frame yang terhubung langsung dengan posisi scroll pengguna, dirender menggunakan HTML5 Canvas untuk performa maksimal (60fps) dibandingkan manipulasi DOM tradisional.

Filosofi desain berfokus pada "Kualitas Tinggi dengan Harga Terjangkau", diterjemahkan menjadi pengalaman digital yang terasa premium, lancar, dan interaktif.

🚀 Fitur Utama

🎞️ Canvas Sequence Scroll: Mesin SequenceScroll kustom yang memetakan progres scroll ke frame gambar, memastikan pemutaran animasi yang mulus tanpa masalah buffering video.

🌊 Lenis Smooth Scroll: Terintegrasi dengan Lenis untuk pengalaman scrolling yang sangat halus (buttery-smooth), meniru nuansa web desain mewah.

⚡ Optimasi Performa: Menggunakan HTML5 Canvas untuk menggambar (draw) gambar, mencegah beban berlebih pada DOM saat menangani ratusan frame urutan gambar.

🎨 UI Interaktif:

Magnetic Buttons: Tombol CTA yang secara magnetis mengikuti pergerakan kursor mouse.

Text Reveals: Animasi teks per karakter yang muncul seiring scroll.

Bento Grids: Tata letak modern untuk menampilkan fitur dan statistik pencapaian.

📱 Responsif Penuh: Skala yang dioptimalkan untuk tampilan seluler (mobile), tablet, dan desktop.

🛠️ Teknologi (Tech Stack)

Framework: Next.js 15 (App Router)

Bahasa: TypeScript

Styling: Tailwind CSS v4

Animasi: Motion & GSAP

Scroll: Lenis

Rendering: HTML5 Canvas API

💻 Cara Menjalankan (Installation)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lokal komputer Anda:

Clone repositori ini:

git clone [https://github.com/vyzz-xz/kopikenangan.git]


Masuk ke direktori proyek:

cd kopikenangan


Install dependencies:

npm install
# atau
yarn install
# atau
pnpm install


Jalankan server pengembangan:

npm run dev


Buka http://localhost:3000 di browser Anda untuk melihat hasilnya.

📂 Struktur Proyek

/app: Halaman utama dan layout (Next.js App Router).

/components: Komponen UI modular (Navbar, SequenceScroll, TextReveal).

/public/sequence: Aset gambar urutan frame untuk animasi canvas.

/utils: Fungsi bantuan (helpers) untuk animasi dan logika scroll.

📄 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan portofolio. Aset merek dagang adalah milik Kopi Kenangan.

Dibuat dengan ☕ dan ❤️ oleh [Nama Anda].