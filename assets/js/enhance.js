/**
 * ScapeCraft Portfolio — Enhancement Engine
 * Scroll progress, reveal animations, stat counter, badge shimmer
 */
(function () {

  // ── Scroll Progress Bar ──
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      progressBar.style.width = pct.toFixed(2) + '%';
    }, { passive: true });
  }

  // ── Intersection Observer: Reveal on Scroll ──
  const revealEls = document.querySelectorAll('.reveal, .reveal-left');
  if (revealEls.length > 0) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  }

  // ── Auto-add reveal to section blocks ──
  const sectionBlocks = document.querySelectorAll(
    '.service-card, .review-card, .project-card, .hub-card, .credential-item'
  );
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io2.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  sectionBlocks.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${(i % 6) * 0.07}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${(i % 6) * 0.07}s`;
    io2.observe(el);
  });

  // ── Animated Stat Counters ──
  function animateCount(el, target, duration = 1500) {
    let start = null;
    const startVal = 0;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString() + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const rawText = el.textContent.replace(/[^0-9]/g, '');
        const suffix = el.querySelector('.plus') ? el.querySelector('.plus').textContent : '';
        const target = parseInt(rawText, 10);
        if (!isNaN(target) && target > 0) {
          el.dataset.suffix = suffix;
          const plusEl = el.querySelector('.plus');
          if (plusEl) plusEl.remove();
          animateCount(el, target);
          setTimeout(() => {
            if (plusEl) el.appendChild(plusEl);
          }, 1550);
        }
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));

  // ── Smooth Active Nav Highlight on Scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => navObserver.observe(sec));

  // ── Mobile Nav touch-friendly improvements ──
  // Smooth close on outside click
  document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (navLinks && menuBtn && !menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    }
  });

  // ── Project card keyboard & touch ripple ──
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.style.transform = 'scale(0.98)';
    }, { passive: true });
    card.addEventListener('touchend', () => {
      card.style.transform = '';
    }, { passive: true });
  });

  // ── Tab navigation in filter pills for accessibility ──
  const filterPills = document.querySelector('.filter-pills');
  if (filterPills) {
    filterPills.addEventListener('keydown', (e) => {
      const btns = [...filterPills.querySelectorAll('.filter-btn')];
      const idx = btns.indexOf(document.activeElement);
      if (e.key === 'ArrowRight' && idx < btns.length - 1) btns[idx + 1].focus();
      if (e.key === 'ArrowLeft' && idx > 0) btns[idx - 1].focus();
    });
  }

  // ── Badge pill styling for modal ──
  document.addEventListener('DOMContentLoaded', () => {});

  const style = document.createElement('style');
  style.textContent = `
    .badge-pill {
      display: inline-flex;
      align-items: center;
      background: var(--bg-tertiary);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-full);
      padding: 0.3rem 0.75rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent-gold);
      margin: 2px;
    }
    #modalScope li {
      padding: 0.3rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
    }
    #modalScope li::before {
      content: "✔";
      color: var(--accent-gold);
      font-size: 0.7rem;
      flex-shrink: 0;
    }
    .modal-media-header::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 50%, rgba(10,12,16,0.7) 100%);
      pointer-events: none;
    }
    /* Hero title gradient text fix for light mode */
    [data-theme="light"] .hero-title span.highlight {
      background: linear-gradient(135deg, #0f172a 20%, var(--accent-gold) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    /* Smooth image loading */
    img {
      will-change: auto;
    }
    img[loading="lazy"] {
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    img[loading="lazy"].loaded {
      opacity: 1;
    }
    /* Section animations for "Let's Design" heading in contact */
    #contact .section-title {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    #contact .section-title.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // ── Lazy image loaded state ──
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });

  // ── Trigger contact title reveal ──
  const contactTitle = document.querySelector('#contact .section-title');
  if (contactTitle) {
    contactTitle.classList.add('reveal');
  }

})();
