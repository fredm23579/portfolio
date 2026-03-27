// ═══════════ THEME TOGGLE ═══════════
(function(){
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  updateToggleIcon();

  if (t) {
    t.addEventListener('click', () => {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
      updateToggleIcon();
    });
  }

  function updateToggleIcon() {
    if (!t) return;
    t.innerHTML = d === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ═══════════ WAVE CANVAS (Hero Background) ═══════════
(function() {
  const canvas = document.getElementById('waveCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let animationId;
  let time = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Get computed style to check theme
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const baseColor = isDark ? [61, 216, 224] : [14, 139, 144];

    // Draw multiple wave layers
    for (let layer = 0; layer < 4; layer++) {
      const alpha = 0.08 - layer * 0.015;
      const amplitude = 40 + layer * 15;
      const frequency = 0.003 - layer * 0.0005;
      const speed = 0.008 + layer * 0.003;
      const yOffset = height * 0.5 + layer * 50;

      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 2) {
        const y = yOffset + 
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 1.5 + time * speed * 0.7) * (amplitude * 0.5);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = `rgba(${baseColor.join(',')}, ${alpha})`;
      ctx.fill();
    }

    // Subtle grid dots
    const gridSize = 60;
    const dotAlpha = isDark ? 0.06 : 0.04;
    ctx.fillStyle = `rgba(${baseColor.join(',')}, ${dotAlpha})`;
    for (let x = gridSize; x < width; x += gridSize) {
      for (let y = gridSize; y < height; y += gridSize) {
        const wobble = Math.sin(x * 0.01 + time * 0.02) * 2;
        ctx.beginPath();
        ctx.arc(x, y + wobble, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    time++;
    animationId = requestAnimationFrame(draw);
  }

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    resize();
    time = 100;
    draw();
    cancelAnimationFrame(animationId);
    return;
  }

  resize();
  draw();
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    resize();
    draw();
  });
})();

// ═══════════ SCROLL-AWARE HEADER ═══════════
(function() {
  const header = document.getElementById('header');
  if (!header) return;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 100) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = current;
  }, { passive: true });
})();

// ═══════════ INTERSECTION OBSERVER (Fade-in) ═══════════
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Add visible class styles
  const style = document.createElement('style');
  style.textContent = '.section--visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
})();
