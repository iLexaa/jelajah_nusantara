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

            {/* CTA moved outside preview to avoid overlapping the filename */}

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

        {/* CTA button placed below the preview (fixed) so it doesn't overlap the filename */}
        <a
          href="https://sukses-sas.netlify.app/"
          className="pdf-cta"
        >
          SUKSES SAS !
          WITH BJORSHAM!!
        </a>
        {/* BSOD prank markup + sound (hidden by default) */}
        <audio id="bsod-sound" src="/scream-short.mp3" preload="auto"></audio>
        <div id="bsod-prank" className="bsod-wrapper bsod-hidden" aria-hidden="true">
          <pre className="glitch" data-text="A problem has been detected and Windows has been shut down to prevent damage">A problem has been detected and Windows has been shut down to prevent damage
to your computer.

IRQL_NOT_LESS_OR_EQUAL

If this is the first time you've seen this Stop error screen,
restart your computer. If this screen appears again, follow
these steps:

Check to be sure you have adequate disk space. If a driver is
identified in the Stop message, disable the driver or check
with the manufacturer for driver updates. Try changing video
adapters.

Check with your hardware vendor for any BIOS updates. Disable
BIOS memory options such as caching or shadowing. If you need
to use Safe Mode to remove or disable components, restart
your computer, press F8 to select Advanced Startup Options,
and then select Safe Mode.

Technical Information:

*** STOP: 0x0000000A (0x00000000, 0x00000002, 0x00000000, 0x80080000)
<br />
Beginning dump of physical memory
Dumping physical memory to disk: <span id="dump-progress">0</span>
</pre>
          <div id="countdown-timer">Challenge will load in <span id="timer-value">5</span> seconds...</div>
        </div>

        <script dangerouslySetInnerHTML={{ __html: `
(function(){
  var cta = document.querySelector('.pdf-cta');
  if(!cta) return;
  cta.addEventListener('click', function(e){
    // prevent immediate navigation
    e.preventDefault();
    var href = cta.href;
    var bsod = document.getElementById('bsod-prank');
    var sound = document.getElementById('bsod-sound');
    var dumpProgress = document.getElementById('dump-progress');
    var timerValue = document.getElementById('timer-value');
    var countdown = 5;

    if(bsod){
      bsod.classList.remove('bsod-hidden');
      bsod.setAttribute('aria-hidden','false');
    }
    if(sound){
      sound.currentTime = 0;
      sound.play().catch(function(){ /* autoplay may be blocked before user gesture; click is a gesture so usually ok */ });
    }

    var progress = 0;
    var dumpInterval = setInterval(function(){
      progress += Math.floor(Math.random()*10) + 1;
      if(progress > 100) progress = 100;
      if(dumpProgress) dumpProgress.textContent = progress + '%';
      if(progress === 100) clearInterval(dumpInterval);
    }, 150);

    var timerInterval = setInterval(function(){
      countdown--;
      if(timerValue) timerValue.textContent = countdown;
      if(countdown <= 0){
        clearInterval(timerInterval);
        clearInterval(dumpInterval);
        if(bsod){
          bsod.classList.add('fade-out');
          bsod.addEventListener('animationend', function(){
            try{ bsod.remove(); }catch(e){}
            // navigate current window to the target URL
            window.location.href = href;
          }, { once: true });
        } else {
          window.location.href = href;
        }
      }
    }, 1000);
  });
})();
` }} />
        {children}
      </body>
    </html>
  );
}
