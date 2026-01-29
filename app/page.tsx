import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToggle";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-navy/10 transition-colors duration-300">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-wider text-navy">
            DADDY<span className="text-gold">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-navy/70 hover:text-navy transition-colors">
              ABOUT
            </a>
            <a href="#representative" className="text-sm font-medium text-navy/70 hover:text-navy transition-colors">
              REPRESENTATIVE
            </a>
            <a href="#contact" className="text-sm font-medium text-navy/70 hover:text-navy transition-colors">
              CONTACT
            </a>
          </div>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <a
              href="https://www.instagram.com/daddy_tokyo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] text-white text-sm font-medium rounded hover:bg-[#16213e] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span className="hidden sm:inline">FOLLOW</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/daddy_tokyo/logo.png"
          alt="DADDY TOKYO"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center mt-[70vh]">
            <a
              href="#about"
              className="px-8 py-3 bg-gold text-[#1a1a2e] font-semibold rounded hover:bg-gold-light transition-colors"
            >
              LEARN MORE
            </a>
            <a
              href="https://www.instagram.com/daddy_tokyo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold hover:text-[#1a1a2e] transition-colors"
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">DADDY TOKYO</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-navy/80 leading-relaxed">
                DADDY TOKYOは、東京を拠点に活動するスタイリッシュなブランドです。
              </p>
              <p className="text-lg text-navy/80 leading-relaxed">
                私たちは、洗練されたデザインと革新的なアプローチで、新しい価値を創造し続けています。
              </p>
              <p className="text-lg text-navy/80 leading-relaxed">
                TOKYOから世界へ、唯一無二のスタイルを発信します。
              </p>
            </div>
            <div className="bg-section-alt p-8 rounded-lg transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gold font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">VISION</h3>
                    <p className="text-navy/70">革新的なスタイルで未来を創造する</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gold font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">MISSION</h3>
                    <p className="text-navy/70">唯一無二の価値を提供し続ける</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gold font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">VALUE</h3>
                    <p className="text-navy/70">品質とスタイルの両立</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Section */}
      <section id="representative" className="py-24 bg-section-alt transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest mb-2">REPRESENTATIVE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">代表紹介</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card-bg rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
              <div className="md:flex">
                <div className="md:w-2/5 bg-[#1a1a2e] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-64 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/daddy_tokyo/representative.jpg"
                        alt="西山 翔"
                        width={192}
                        height={256}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">西山 翔</h3>
                    <p className="text-white/70 text-sm mt-1">NISHIYAMA SHO</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-navy/50 font-medium">POSITION</p>
                      <p className="text-lg text-navy font-semibold">代表</p>
                    </div>
                    <div>
                      <p className="text-sm text-navy/50 font-medium">COMPANY</p>
                      <p className="text-lg text-navy font-semibold">DADDY TOKYO</p>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-3">
                      <a
                        href="https://www.instagram.com/nishiyama_daddydaddy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white font-medium rounded hover:bg-[#16213e] transition-colors"
                      >
                        <InstagramIcon className="w-5 h-5" />
                        Instagram
                      </a>
                      <a
                        href="https://www.tiktok.com/@nishiyama.daddydaddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        <TikTokIcon className="w-5 h-5" />
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1a1a2e] transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gold font-semibold tracking-widest mb-2">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">GET IN TOUCH</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8" />
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            お問い合わせやお仕事のご依頼は、Instagramのダイレクトメッセージよりお気軽にご連絡ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.instagram.com/daddy_tokyo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-[#1a1a2e] font-semibold rounded hover:bg-gold-light transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
              DADDY TOKYO Instagram
            </a>
            <a
              href="https://www.instagram.com/nishiyama_daddydaddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#1a1a2e] transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
              代表 Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <footer className="py-8 bg-[#0f0f1a] transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white font-bold tracking-wider text-xl">
              DADDY<span className="text-gold">.</span> TOKYO
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/daddy_tokyo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                title="DADDY TOKYO Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/nishiyama_daddydaddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                title="代表 Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@nishiyama.daddydaddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                title="代表 TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} DADDY TOKYO. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
