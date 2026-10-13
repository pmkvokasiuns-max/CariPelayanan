// ====== PENGATURAN (boleh diedit) ======
window.CONFIG = {
  // Isi dengan link CSV Google Sheets (File > Bagikan > Publikasikan ke web > pilih tab > CSV).
  // Kalau diisi, data diambil dari Sheets dan otomatis ikut berubah saat Sheets diupdate.
  // Kalau dikosongkan, aplikasi memakai data.js.
  SHEET_CSV_URL: "",

  JUDUL: "Cari Pelayan PMK",
  // Isi bawaan template pesan (tiap pengguna masih bisa mengubah sendiri lewat tombol Template)
  // Daftar nama pengirim (muncul sebagai pilihan dropdown "Pengirim (M2)")
  PENGIRIM: ["Angelo", "Mashudi", "Tasya", "Meyli", "Gaby"],
  SENDER: "Angelo",   // pilihan awal
  KOMUNITAS: "M2 PMK SV",
  ACARA: "PU PMK SV",
  HARI: "Rabu",
  JAM: "17.00"
};
