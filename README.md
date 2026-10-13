# Cari Pelayan PMK – Panduan Deploy & Update

Isi folder ini (semuanya statis, tanpa server, tanpa install apa pun):

| File | Fungsi |
|---|---|
| `index.html` | Aplikasinya (tidak perlu diedit) |
| `config.js` | Pengaturan: nama pengirim, acara, hari, jam, dan link Google Sheets |
| `data.js` | Database cadangan (data 3 angkatan: 2024, 2025, 2026) |

Cek lokal: klik dua kali `index.html` – langsung jalan.

---

## A. Deploy (pilih salah satu)

**1. Netlify Drop (paling mudah, tanpa akun GitHub)**
Buka app.netlify.com/drop → seret folder ini ke halaman itu → link website langsung jadi. Login/daftar agar link tidak kedaluwarsa.

**2. Vercel**
- Taruh isi folder di repository GitHub baru → di vercel.com klik *Add New → Project* → pilih repo → *Deploy* (tanpa setting apa pun).
- Atau lewat terminal di dalam folder ini: `npx vercel --prod`.
Setiap kali file di GitHub diubah, Vercel otomatis memperbarui website.

**3. Alternatif lain:** Cloudflare Pages (Direct Upload) atau GitHub Pages juga bisa, caranya sama (website statis).

Bagikan link website-nya ke teman-teman. Mereka tinggal buka, tidak perlu upload apa-apa.

---

## B. Cara update database (pilih salah satu)

**Cara 1 – Google Sheets (paling praktis, teman-teman otomatis dapat data terbaru)**
1. Di Google Sheets buat tab baru berisi **hanya** kolom ini (baris pertama judul):
   `Nama | Panggilan | Prodi | Angkatan | Kampus | Gereja | Pelayanan | WA`
   (Angkatan = tahun, mis. 2026. Kampus = Solo atau Madiun; orang Madiun akan diberi label oranye di kartunya.)
   (Boleh juga memakai judul kolom persis seperti Google Form: Nama Lengkap, PROGRAM STUDI, Nomor WA, Asal Gereja, Pengalaman Pelayanan di Gereja, Alat Musik Yang Bisa Dimainkan.)
   Tips: buka aplikasi → *Upload / Unduh data* → *CSV (untuk Sheets)* untuk dapat file awal yang rapi, lalu impor ke Sheets.
2. *File → Bagikan → Publikasikan ke web* → pilih **tab itu saja** → format **CSV** → *Publikasikan* → salin link.
3. Tempel link itu di `config.js` pada `SHEET_CSV_URL: "..."`, simpan, deploy ulang sekali.
4. Mulai sekarang: tambah/hapus baris di Sheets = data di website ikut berubah (kadang butuh beberapa menit).
   Orang yang sudah tidak bisa dihubungi: hapus barisnya.

**Cara 2 – Tanpa Sheets**
1. Buka website → *Upload / Unduh data* → pilih file Excel/CSV terbaru.
2. Klik *⬇️ data.js* → timpa file `data.js` di folder → deploy ulang (Netlify: seret folder lagi; Vercel: commit ke GitHub).

---

## C. Catatan penting
- **Privasi:** siapa pun yang punya link website bisa melihat nama dan nomor WA. Jangan sebar link ke publik, dan jangan publikasikan tab Sheets yang berisi email/alamat/tanggal lahir.
- Kolom `Panggilan` (opsional) dipakai untuk sapaan di pesan; kalau kosong dipakai nama depan.
- Kategori (Singer, Gitaris, Cajon, WL, dll.) dibaca otomatis dari kolom Pelayanan / Alat Musik.
- Template pesan bisa diubah tiap orang lewat tombol ✉️ Template (tersimpan di perangkat masing-masing). Nilai bawaan diatur di `config.js`.

- **Angkatan** dibaca dari kolom Angkatan, atau dari tahun di kolom Timestamp, atau dari tahun di nama file yang diupload.
- **Kampus Madiun** dikenali dari tulisan "Madiun" atau "PSDKU" di kolom Prodi, atau kolom Kampus berisi Madiun.
