import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  RouterCtx,
  Nav,
  Footer,
  PageWrap,
  Logo,
} from './shared.jsx';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakSelect,
  TweakSlider,
  TweakToggle,
} from './tweaks-panel.jsx';
import { HomePage } from './home.jsx';
import { ServicesPage } from './services.jsx';
import { AboutPage } from './about.jsx';
import { BlogPage } from './blog.jsx';
import { ContactPage } from './contactpage.jsx';
import { PrivacyPage } from './privacypage.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#004953",
  "accentColor": "#AAEEFF",
  "bgColor": "#FDFEFE",
  "displayFont": "Plus Jakarta Sans",
  "bodyFont": "Inter",
  "radius": 16,
  "heroStyle": "split",
  "showBlobs": true,
  "darkAccents": false,
}/*EDITMODE-END*/;

export default function App() {
  const [path, setPath] = useState(() => {
    const h = window.location.hash.replace(/^#/, '');
    return h.split('#')[0] || '/';
  });
  const [navLoading, setNavLoading] = useState(false);
  const pathRef = useRef(path);
  const skipNavLoader = useRef(true);

  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    pathRef.current = path;
  }, [path]);

  useEffect(() => {
    if (skipNavLoader.current) {
      skipNavLoader.current = false;
      return;
    }
    const tId = window.setTimeout(() => setNavLoading(false), 420);
    return () => window.clearTimeout(tId);
  }, [path]);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--mt-display', `'${t.displayFont}'`);
    r.style.setProperty('--mt-body', `'${t.bodyFont}'`);
    r.style.setProperty('--mt-bg', t.bgColor);
    r.style.setProperty('--mt-radius', `${t.radius}px`);

    let s = document.getElementById('mt-tweak-style');
    if (!s) {
      s = document.createElement('style');
      s.id = 'mt-tweak-style';
      document.head.appendChild(s);
    }
    const p = t.primaryColor;
    const a = t.accentColor;
    const soft = `${a}33`;
    s.textContent = `
      .text-midnight { color: ${p} !important; }
      .text-midnight-700 { color: ${p} !important; filter: brightness(0.85); }
      .text-midnight-900 { color: ${p} !important; filter: brightness(0.6); }
      .bg-midnight { background-color: ${p} !important; }
      .bg-midnight-700 { background-color: ${p} !important; filter: brightness(0.85); }
      .bg-midnight-900 { background-color: ${p} !important; filter: brightness(0.55); }
      .border-midnight { border-color: ${p} !important; }
      .text-cyan { color: ${a} !important; }
      .bg-cyan { background-color: ${a} !important; }
      .bg-cyan-soft { background-color: ${soft} !important; }
      .border-cyan { border-color: ${a} !important; }
      .btn-primary {
        background: ${p} !important;
        color: ${t.bgColor} !important;
        -webkit-tap-highlight-color: transparent;
      }
      .btn-primary:hover {
        background: color-mix(in srgb, ${p} 82%, #000) !important;
        color: ${t.bgColor} !important;
      }
      .btn-ghost { border-color: ${p} !important; color: ${p} !important; }
      .btn-ghost:hover { background: ${p} !important; color: ${t.bgColor} !important; }
      ${t.showBlobs ? '' : '.blob-a, .blob-b, .blob-c, .blob-d, .hero-ambient { display: none !important; }'}
    `;
  }, [t]);

  const go = (to) => {
    const [route] = to.split('#');
    const next = route || '/';
    if (next !== pathRef.current) setNavLoading(true);
    window.location.hash = to;
    setPath(next);
  };

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace(/^#/, '') || '/';
      const next = h.split('#')[0] || '/';
      if (next !== pathRef.current) setNavLoading(true);
      setPath(next);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let page = null;
  let label = '/';
  if (path === '/' || path === '') {
    page = <HomePage />;
    label = '/';
  } else if (path === '/services') {
    page = <ServicesPage />;
    label = '/services';
  } else if (path === '/about') {
    page = <AboutPage />;
    label = '/about';
  } else if (path.startsWith('/blog')) {
    page = <BlogPage />;
    label = path;
  } else if (path === '/contact') {
    page = <ContactPage />;
    label = '/contact';
  } else if (path === '/privacy') {
    page = <PrivacyPage />;
    label = '/privacy';
  } else {
    page = <HomePage />;
    label = '/';
  }

  const navPath = path.startsWith('/blog') ? '/blog' : path;

  return (
    <RouterCtx.Provider value={{ path: navPath, go }}>
      <AnimatePresence>
        {navLoading && (
          <motion.div
            key="route-loader"
            role="status"
            aria-live="polite"
            aria-busy="true"
            aria-label="Loading page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-paper/92 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="flex flex-col items-center"
            >
              <Logo />
              <div
                className="mt-7 h-7 w-7 rounded-full border-2 border-midnight/15 border-t-midnight animate-spin"
                aria-hidden
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Nav />
      <main data-screen-label={label} data-om-validate>
        <PageWrap k={path}>{page}</PageWrap>
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand colors" />
        <TweakColor label="Primary" value={t.primaryColor} onChange={(v) => setTweak('primaryColor', v)} />
        <TweakColor label="Accent" value={t.accentColor} onChange={(v) => setTweak('accentColor', v)} />
        <TweakColor label="Page background" value={t.bgColor} onChange={(v) => setTweak('bgColor', v)} />

        <TweakSection label="Typography" />
        <TweakSelect
          label="Display font"
          value={t.displayFont}
          options={['Plus Jakarta Sans', 'Manrope', 'DM Sans', 'Space Grotesk', 'Inter']}
          onChange={(v) => setTweak('displayFont', v)}
        />
        <TweakSelect
          label="Body font"
          value={t.bodyFont}
          options={['Inter', 'DM Sans', 'Manrope', 'Space Grotesk']}
          onChange={(v) => setTweak('bodyFont', v)}
        />

        <TweakSection label="Layout" />
        <TweakSlider
          label="Card radius"
          value={t.radius}
          min={0}
          max={28}
          step={2}
          unit="px"
          onChange={(v) => setTweak('radius', v)}
        />
        <TweakToggle label="Show hero background effects" value={t.showBlobs} onChange={(v) => setTweak('showBlobs', v)} />
      </TweaksPanel>
    </RouterCtx.Provider>
  );
}
