'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Easter Egg State - Source Code Rahasia
  const [showSourceCode, setShowSourceCode] = useState(false);

  // Check for Easter Egg
  useEffect(() => {
    const checkEasterEgg = () => {
      const input = destination.toLowerCase().trim();
      
      // Easter Egg: "yangbisadiketik" → Show Secret Source Code
      if (input === 'yangbisadiketik') {
        setShowSourceCode(true);
      } else if (showSourceCode && input !== 'yangbisadiketik') {
        // Hide source code when user types something else
        setShowSourceCode(false);
      }
    };
    
    checkEasterEgg();
  }, [destination, showSourceCode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const input = destination.toLowerCase().trim();
    
    if (input === 'yangbisadiketik') {
      // Easter egg sudah ditrigger, jangan alert
      return;
    }
    
    alert(`Mencari destinasi: ${destination} 🔍`);
  };

  const handleBooking = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Secret Source Code - Algoritma Rahasia
  const secretSourceCode = `// 🔐 ALGORITMA RAHASIA PENCARI DESTINASI TERSEMBUNYI
// Created by: Jelajah Nusantara Secret Team
// Version: 1.0.0 - CLASSIFIED

class DestinationFinder {
  constructor() {
    this.hiddenPlaces = [
      { name: "Pulau Komodo", coordinates: [-8.5833, 119.4500] },
      { name: "Danau Toba", coordinates: [2.6845, 98.8756] },
      { name: "Bunaken", coordinates: [1.6167, 124.7667] },
      { name: "Wakatobi", coordinates: [-5.4833, 123.7500] },
      { name: "Derawan", coordinates: [2.2833, 118.2333] }
    ];
    this.secretKey = "GACOR_NUSANTARA_2024";
  }

  // Fungsi untuk decode koordinat rahasia
  decodeSecret(encrypted) {
    return encrypted.split('').reverse().join('');
  }

  // Algoritma pencarian destinasi tersembunyi
  findHiddenDestination(userInput) {
    const hash = this.generateHash(userInput);
    const index = hash % this.hiddenPlaces.length;
    return this.hiddenPlaces[index];
  }

  // Generate hash dari input user
  generateHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  // Validasi akses ke destinasi rahasia
  validateAccess(password) {
    return password === this.secretKey;
  }

  // Main function - Temukan destinasi impianmu!
  discover(userQuery, password) {
    if (!this.validateAccess(password)) {
      return { error: "Access Denied! 🔒" };
    }

    const destination = this.findHiddenDestination(userQuery);
    return {
      success: true,
      destination: destination.name,
      coordinates: destination.coordinates,
      message: "Destinasi rahasia ditemukan! 🗺️✨",
      secretCode: this.decodeSecret("4202_ARATNASUN_ROCAG")
    };
  }
}

// Usage Example:
const finder = new DestinationFinder();
const result = finder.discover("petualangan", "GACOR_NUSANTARA_2024");
console.log(result);

// Output: 
// {
//   success: true,
//   destination: "Wakatobi",
//   coordinates: [-5.4833, 123.7500],
//   message: "Destinasi rahasia ditemukan! 🗺️✨",
//   secretCode: "GACOR_NUSANTARA_2024"
// }

/* 
 * 🎯 CATATAN RAHASIA:
 * Kode ini menggunakan algoritma hash khusus untuk
 * menemukan destinasi tersembunyi di Indonesia.
 * Setiap input akan menghasilkan destinasi unik!
 * 
 * Try it yourself:
 * - Input: "petualangan" → Wakatobi
 * - Input: "liburan" → Bunaken  
 * - Input: "wisata" → Derawan
 * 
 * Happy exploring! 🏝️
 */`;

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-b from-sky-400 to-blue-600">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏝️</span>
            <span className="text-2xl font-bold text-blue-600">Jelajah Nusantara</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#destinations" className="hover:text-blue-600 transition">Destinasi</a>
            <a href="#packages" className="hover:text-blue-600 transition">Paket Tour</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Testimoni</a>
            <a href="#contact" className="hover:text-blue-600 transition">Kontak</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Jelajahi Keindahan
          <br />
          <span className="text-yellow-300">Indonesia</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto">
          Temukan destinasi impian Anda! Dari pantai eksotis hingga gunung menawan, 
          kami siap mengantarkan petualangan tak terlupakan.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto mb-12 relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            🔍 Cari Destinasi Impian Anda
          </h2>
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Mau kemana? (contoh: Bali, Raja Ampat, Bromo...)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800 text-lg"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition transform hover:scale-105 whitespace-nowrap"
            >
              Cari Sekarang 🚀
            </button>
          </form>
          
          {/* Easter Egg - Secret Source Code */}
          {showSourceCode && (
            <div className="mt-6 animate-fade-in">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 mb-4">
                <p className="text-white font-bold text-center text-lg">
                  🔓 SECRET SOURCE CODE UNLOCKED! 🔓
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-green-500 max-h-96 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 font-mono text-sm">💻 secret-code.js</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(secretSourceCode);
                      alert('Source code copied to clipboard! 📋');
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold transition"
                  >
                    Copy Code
                  </button>
                </div>
                <pre className="text-green-400 font-mono text-xs leading-relaxed overflow-x-auto">
                  <code>{secretSourceCode}</code>
                </pre>
              </div>
              
              <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-yellow-800 text-sm">
                  <strong>⚠️ Rahasia:</strong> Kode ini adalah algoritma rahasia untuk menemukan destinasi tersembunyi di Indonesia! 
                  Gunakan dengan bijak! 🗺️✨
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-sm">Destinasi</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">50K+</p>
            <p className="text-sm">Traveler</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">4.9⭐</p>
            <p className="text-sm">Rating</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-sm">Support</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            🌴 Destinasi Populer
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Pilihan favorit para traveler
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Destination 1 */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <div className="h-48 flex items-center justify-center text-8xl">
                🏖️
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bali Paradise</h3>
                <p className="text-gray-600 mb-4">
                  Pantai indah, budaya kaya, dan sunset yang memukau
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rp 2.5 Jt</span>
                  <span className="text-sm text-gray-500">3D2N</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <div className="h-48 flex items-center justify-center text-8xl">
                🏔️
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bromo Adventure</h3>
                <p className="text-gray-600 mb-4">
                  Sunrise spektakuler di atas awan gunung berapi
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rp 1.8 Jt</span>
                  <span className="text-sm text-gray-500">2D1N</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <div className="h-48 flex items-center justify-center text-8xl">
                🐠
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Raja Ampat</h3>
                <p className="text-gray-600 mb-4">
                  Surga bawah laut dengan keanekaragaman hayati terbaik
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rp 8.5 Jt</span>
                  <span className="text-sm text-gray-500">5D4N</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="bg-gradient-to-br from-purple-500 to-indigo-600 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            🎒 Paket Tour Spesial
          </h2>
          <p className="text-center text-white/90 mb-12 text-lg">
            Pilih paket sesuai budget dan gaya liburan Anda
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-5xl mb-4 block">🎒</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Backpacker</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">Rp 1.5 Jt</p>
                <p className="text-gray-500">per orang</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Transportasi lokal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Homestay/Hostel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Tour guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Breakfast included</span>
                </li>
              </ul>
              <button
                onClick={() => handleBooking('Backpacker')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Booking Sekarang
              </button>
            </div>

            {/* Package 2 - Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                  PALING LARIS
                </span>
              </div>
              <div className="text-center mb-6 text-white">
                <span className="text-5xl mb-4 block">⭐</span>
                <h3 className="text-2xl font-bold mb-2">Comfort</h3>
                <p className="text-4xl font-bold mb-2">Rp 3.5 Jt</p>
                <p className="text-white/80">per orang</p>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Private car AC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Hotel bintang 3-4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Professional guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>All meals included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Travel insurance</span>
                </li>
              </ul>
              <button
                onClick={() => handleBooking('Comfort')}
                className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Booking Sekarang
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-5xl mb-4 block">💎</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Luxury</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">Rp 7.5 Jt</p>
                <p className="text-gray-500">per orang</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Private luxury car</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Hotel bintang 5</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>VIP tour guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Fine dining experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Premium insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Spa & wellness</span>
                </li>
              </ul>
              <button
                onClick={() => handleBooking('Luxury')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Booking Sekarang
              </button>
            </div>
          </div>

          {isSubmitted && (
            <div className="mt-8 bg-green-500 text-white text-center py-4 rounded-lg max-w-2xl mx-auto font-semibold">
              ✅ Terima kasih! Paket {selectedPackage} berhasil dipilih. Tim kami akan menghubungi Anda!
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            💬 Kata Mereka
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Pengalaman nyata dari para traveler
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-800">Andi Pratama</p>
                  <p className="text-sm text-gray-500">Jakarta</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700">
                &quot;Trip ke Bromo sangat berkesan! Guide-nya ramah dan profesional. 
                Sunrise-nya luar biasa indah. Highly recommended!&quot;
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-800">Siti Nurhaliza</p>
                  <p className="text-sm text-gray-500">Bandung</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700">
                &quot;Paket Bali-nya worth it banget! Hotel bagus, makanan enak, 
                dan itinerary-nya pas. Pasti bakal booking lagi!&quot;
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  B
                </div>
                <div>
                  <p className="font-bold text-gray-800">Budi Santoso</p>
                  <p className="text-sm text-gray-500">Surabaya</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700">
                &quot;Raja Ampat memang surga dunia! Terima kasih Jelajah Nusantara 
                sudah mengatur semuanya dengan sempurna. Best experience ever!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            📧 Dapatkan Promo Spesial!
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe newsletter kami dan dapatkan diskon hingga 30% untuk trip pertama Anda
          </p>
          <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 whitespace-nowrap"
            >
              Subscribe Sekarang 🎁
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🏝️</span>
                <span className="text-xl font-bold">Jelajah Nusantara</span>
              </div>
              <p className="text-gray-400">
                Platform booking tour terpercaya untuk menjelajahi keindahan Indonesia
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Destinasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Bali</a></li>
                <li><a href="#" className="hover:text-white transition">Lombok</a></li>
                <li><a href="#" className="hover:text-white transition">Raja Ampat</a></li>
                <li><a href="#" className="hover:text-white transition">Bromo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Karir</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Partnership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +62 812-3456-7890</li>
                <li>📧 info@jelajahnusantara.com</li>
                <li>📍 Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Jelajah Nusantara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
