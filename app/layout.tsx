import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jelajah Nusantara",
  description: "Jelajahi Keindahan Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // PDF file in `public/` (keep filename as-is; we'll URL-encode when building the URL)
  const pdfFileName =
    'DAFTAR NILAI TKA SMA Kelas XII Tahun 2025 .pdf_20251106_184326_0000.pdf';
  const pdfUrl = '/' + encodeURI(pdfFileName);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed top-left PDF preview — clickable overlay opens the PDF in a new tab */}
        <div className="pdf-preview" aria-hidden={false}>
          <div style={{position: 'relative', width: '100%', height: '100%'}}>
            {/* Simple inline preview using an iframe. pointerEvents:none prevents the iframe
                from capturing clicks so the overlay link can open the PDF in a new tab. */}
            <iframe
              src={pdfUrl + '#toolbar=0'}
              title="Daftar Nilai Preview"
              style={{width: '100%', height: '100%', border: 0, pointerEvents: 'none'}}
            />

            {/* Filename label shown over the preview so users know what the PDF is. */}
            <div
              title={pdfFileName}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                color: '#fff',
                padding: '6px 8px',
                fontSize: 12,
                lineHeight: '14px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                pointerEvents: 'none', // allow clicks to pass through to the link
              }}
            >
              {pdfFileName}
            </div>

            {/* Full-size transparent link overlay so clicks always open the PDF in a new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PDF in new tab"
              style={{position: 'absolute', inset: 0, display: 'block'}}
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
