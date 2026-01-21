# ☕ Kopi Kenangan — Storytelling Experience

> **“Mengangkat kopi menjadi sebuah karya seni.”**

Sebuah **konsep landing page berstandar Awwwards** untuk **Kopi Kenangan**, menampilkan teknik **scrollytelling performa tinggi**, **animasi 3D yang mulus**, dan **pengalaman digital yang mewah**.

---

## ✨ Sekilas Tentang Proyek

Proyek ini merupakan **eksplorasi teknis** dalam membangun website storytelling untuk **brand kelas atas**.

Mekanisme utama proyek ini adalah menggerakkan **urutan gambar frame-by-frame** yang terhubung langsung dengan **posisi scroll pengguna**, kemudian dirender menggunakan **HTML5 Canvas** untuk mencapai performa maksimal (**60fps**), dibandingkan manipulasi DOM tradisional.

Filosofi desain berfokus pada:

> **“Kualitas Tinggi dengan Harga Terjangkau”**

yang diterjemahkan menjadi pengalaman digital yang terasa **premium, lancar, dan interaktif**.

---

## 🚀 Fitur Utama

### 🎞️ Canvas Sequence Scroll
Mesin **SequenceScroll kustom** yang memetakan progres scroll ke frame gambar, memastikan pemutaran animasi:
- Mulus dan stabil
- Tanpa buffering seperti video
- Responsif terhadap interaksi pengguna

### 🌊 Lenis Smooth Scroll
Terintegrasi dengan **Lenis** untuk menciptakan pengalaman scrolling yang:
- Sangat halus (*buttery-smooth*)
- Meniru nuansa web desain mewah

### ⚡ Optimasi Performa
- Menggunakan **HTML5 Canvas API** untuk menggambar (draw) gambar
- Mencegah beban berlebih pada DOM
- Efisien saat menangani ratusan frame urutan gambar

### 🎨 UI Interaktif
- **Magnetic Buttons** — tombol CTA yang mengikuti pergerakan kursor
- **Text Reveals** — animasi teks per karakter saat scroll
- **Bento Grids** — tata letak modern untuk fitur dan statistik

### 📱 Responsif Penuh
Dioptimalkan untuk tampilan:
- Mobile
- Tablet
- Desktop

---

## 🛠️ Teknologi (Tech Stack)

- Framework: Next.js 15 (App Router)

- Bahasa: TypeScript

- Styling: Tailwind CSS v4

- Animasi: Motion & GSAP

- Scroll: Lenis

- Rendering: HTML5 Canvas API

---

## 💻 Cara Menjalankan (Installation)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lokal komputer Anda.

### 1. Clone Repository
```bash
- git clone https://github.com/vyzz-xz/kopikenangan.git

- Masuk ke direktori proyek:

- cd kopikenangan


### Install dependencies:

- npm install

- yarn install

- pnpm install


Jalankan server pengembangan:

npm run dev


Buka http://localhost:3000 di browser Anda untuk melihat hasilnya.

📂 Struktur Proyek

/app: Halaman utama dan layout (Next.js App Router).

/components: Komponen UI modular (Navbar, SequenceScroll, TextReveal).

/public/sequence: Aset gambar urutan frame untuk animasi canvas.

/utils: Fungsi bantuan (helpers) untuk animasi dan logika scroll.


### 📄 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan portofolio. Aset merek dagang adalah milik Kopi Kenangan.

Dibuat dengan ☕ dan ❤️ oleh [Nama Anda].