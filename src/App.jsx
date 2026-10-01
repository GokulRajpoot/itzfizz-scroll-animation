import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "92%", label: "Ideas turned into impact" },
  { value: "4.8×", label: "Faster digital experiences" },
  { value: "100%", label: "Driven by curiosity" },
];

function CarIllustration() {
  return (
    <svg className="car-art" viewBox="0 0 900 360" role="img" aria-label="Illustration of a sleek sports car">
      <defs>
        <linearGradient id="body" x1="0" x2="0.9" y1="0" y2="1">
          <stop offset="0%" stopColor="#f8f7f1" />
          <stop offset="48%" stopColor="#b9bbb8" />
          <stop offset="100%" stopColor="#646966" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#273033" />
          <stop offset="100%" stopColor="#080d0e" />
        </linearGradient>
        <linearGradient id="wheel" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#414544" />
          <stop offset="100%" stopColor="#090a0a" />
        </linearGradient>
      </defs>
      <ellipse cx="460" cy="300" rx="350" ry="23" fill="#000" opacity=".45" />
      <path d="M105 245 Q133 216 205 202 L302 179 Q353 121 435 112 L566 119 Q625 133 677 188 L773 212 Q807 222 817 249 L805 274 L110 274 Q91 264 105 245Z" fill="url(#body)" stroke="#e9e9e4" strokeWidth="3"/>
      <path d="M320 178 Q363 132 437 126 L552 132 Q605 145 647 190 L315 190Z" fill="url(#glass)" stroke="#8e9693" strokeWidth="3"/>
      <path d="M449 128 L443 190 M557 137 L590 190" stroke="#89918f" strokeWidth="4" opacity=".8"/>
      <path d="M207 207 L302 188 L645 198 L715 213 Q636 225 549 225 L204 222Z" fill="#d8d9d4" opacity=".55"/>
      <path d="M112 244 Q178 229 240 232 L271 251 L120 260Z" fill="#f1f0e9"/>
      <path d="M704 219 L787 236 L793 251 L724 249Z" fill="#e7e4d9"/>
      <path d="M133 262 L803 262" stroke="#343938" strokeWidth="8"/>
      <path d="M171 226 L250 222 M680 224 L744 231" stroke="#343938" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="260" cy="264" r="57" fill="#090b0b" stroke="#555b59" strokeWidth="8"/>
      <circle cx="260" cy="264" r="34" fill="url(#wheel)" stroke="#9ba09c" strokeWidth="5"/>
      <circle cx="260" cy="264" r="11" fill="#d8dad5"/>
      <g stroke="#858b87" strokeWidth="5">
        <path d="M260 232V296 M228 264H292 M237 241L283 287 M283 241L237 287"/>
      </g>
      <circle cx="681" cy="264" r="57" fill="#090b0b" stroke="#555b59" strokeWidth="8"/>
      <circle cx="681" cy="264" r="34" fill="url(#wheel)" stroke="#9ba09c" strokeWidth="5"/>
      <circle cx="681" cy="264" r="11" fill="#d8dad5"/>
      <g stroke="#858b87" strokeWidth="5">
        <path d="M681 232V296 M649 264H713 M658 241L704 287 M704 241L658 287"/>
      </g>
      <path d="M122 251 L183 247" stroke="#f5f2e8" strokeWidth="8" strokeLinecap="round"/>
      <path d="M758 244 L793 250" stroke="#f04d37" strokeWidth="8" strokeLinecap="round"/>
      <path d="M348 205 Q476 212 624 205" fill="none" stroke="#fff" strokeWidth="2" opacity=".65"/>
    </svg>
  );
}

export default function App() {
  const root = useRef(null);
  const car = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.from(".eyebrow", { opacity: 0, y: 12, duration: 0.6 })
        .from(".headline-line", { opacity: 0, y: 48, stagger: 0.12, duration: 0.8 }, "-=0.25")
        .from(".stat-card", { opacity: 0, y: 22, stagger: 0.14, duration: 0.65 }, "-=0.35")
        .from(".scroll-note", { opacity: 0, duration: 0.5 }, "-=0.2");

      gsap.fromTo(
  car.current,
  {
    x: -400,
  },
  {
    x: 400,
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-stage",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  }
);

      gsap.to(".orbit", {
        rotate: 35,
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-stage",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-[#10100f] text-[#f4f2ec]">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Itzfizz home">
          <span className="brand-mark">i</span> itzfizz<span className="brand-dot">.</span>
        </a>
        <span className="header-note">Digital experiences / 2026</span>
        <a className="header-link" href="#about">Explore <span>↗</span></a>
      </header>

      <section className="scroll-stage">
        <div className="hero-sticky">
          <div className="hero-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> Independent digital studio</p>
            <h1 className="headline">
              <span className="headline-line">WELCOME</span>
              <span className="headline-line headline-accent">ITZFIZZ<span className="headline-period">.</span></span>
            </h1>
            <p className="hero-subtitle">We turn ambitious ideas into digital experiences that move people forward.</p>
            <div className="stats-row">
              {stats.map((stat, index) => (
                <div className="stat-card" key={stat.value}>
                  <span className="stat-index">0{index + 1} / IMPACT</span>
                  <strong>{stat.value}</strong>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="car-wrap" ref={car}>
            <CarIllustration />
          </div>
          <div className="scroll-note"><span className="scroll-line" /> Scroll to move <span className="scroll-arrow">↓</span></div>
          <div className="hero-bottom"><span>CREATIVE TECHNOLOGY</span><span>BUILT TO MOVE</span></div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-kicker">01 / THE NEXT MOVE</div>
        <div>
          <h2>Make room for<br /><em>what’s next.</em></h2>
          <p>Thoughtful design. Useful technology. A little motion that makes the experience memorable.</p>
        </div>
        <a href="mailto:hello@itzfizz.com" className="contact-link">Let’s build something <span>↗</span></a>
      </section>
      <footer className="footer"><span>ITZFIZZ®</span><span>SCROLL-DRIVEN EXPERIENCE</span><span>2026</span></footer>
    </main>
  );
}