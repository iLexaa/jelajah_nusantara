import React from 'react'

function page() {
  return (
    <div>
        <p>
            # 💸 Kalkulator Diskon

Aplikasi web sederhana untuk menghitung harga akhir suatu barang setelah diberikan potongan harga (diskon).  
Dibuat menggunakan **HTML**, **CSS**, dan **JavaScript** tanpa framework tambahan.

## 🚀 Fitur

- Input **harga barang** dan **persentase diskon**.  
- Hitung otomatis **harga setelah diskon**.  
- Validasi agar input hanya berupa angka.  
- Tampilan modern dengan tema gelap (dark mode).

## 🖼️ Preview

![Kalkulator Diskon](preview.png)

*(Tambahkan gambar `preview.png` berisi screenshot aplikasi jika ada.)*

## 🧩 Teknologi yang Digunakan

- **HTML5**  Struktur halaman web.  
- **CSS3**  Desain antarmuka dengan gradient dan efek bayangan.  
- **JavaScript (ES6)**  Logika perhitungan dan manipulasi DOM.

## 🧠 Cara Kerja

1. Pengguna memasukkan:
   - Harga barang (dalam Rupiah)
   - Persentase diskon (%)
2. Saat tombol **“Hitung”** ditekan:
   - Sistem menghitung harga setelah diskon dengan rumus:
     ```
     hargaSetelah = harga - (harga * diskon / 100)
     ```
   - Hasil ditampilkan dalam format `Rp angka` menggunakan format lokal Indonesia.

## 🛠️ Cara Menjalankan

1. Unduh atau clone repository ini:
   ```bash
   git clone https://github.com/username/kalkulator-diskon.git

        </p>
    </div>
  )
}

export default page