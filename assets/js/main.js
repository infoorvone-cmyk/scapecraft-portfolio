/**
 * SCAPECRAFT & MUHAMMAD HUZAIFAH ARCHITECTURAL PORTFOLIO
 * Main Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Project Data Store ---
  const projects = [
    {
      id: 'the-heights',
      title: 'The Heights Residential Tower',
      category: 'architecture',
      categoryLabel: 'High-Rise Architecture',
      location: 'New York, USA',
      year: '2023–2024',
      scale: '45,000 sq.ft',
      client: 'Hudson Urban Development',
      tools: ['Revit BIM', 'Rhino 3D', 'D5 Render', 'AutoCAD'],
      image: 'assets/images/the-heights.jpg',
      summary: 'A 28-storey luxury residential and mixed-use tower in Manhattan, balancing parametric glass facades with energy-efficient thermal envelopes.',
      description: 'The Heights reimagines urban verticality in New York City. Engineered with high-performance double skin curtain walls and stepped communal sky terraces, the design integrates natural daylight optimization while honoring the historic surrounding skyline context. Full BIM Level 2 coordination streamlined structural and MEP integration.',
      scope: ['Architectural Concept Design', 'Parametric Facade Engineering', 'BIM LOD 350 Documentation', 'Cinematic 3D Visualization']
    },
    {
      id: 'hospital-ssm',
      title: 'SSM Healthcare Modern Medical Center',
      category: 'architecture',
      categoryLabel: 'Healthcare & Civic',
      location: 'USA',
      year: '2023',
      scale: '120,000 sq.ft',
      client: 'SSM Health Network',
      tools: ['Revit Architecture', 'Navisworks', 'Enscape', 'Photoshop'],
      image: 'assets/images/hospital-ssm.jpg',
      summary: 'Advanced regional healthcare facility masterplan prioritizing biophilic healing environments and clinical circulation efficiency.',
      description: 'Developed in compliance with strict healthcare standards, SSM Medical Center integrates acoustic-damped patient wards, modular emergency surgical wings, and daylight-filled healing atriums. The project featured complete BIM coordination to prevent clashes between complex medical gas systems and HVAC ducting.',
      scope: ['Hospital Master Planning', 'Clinical Flow Optimization', 'BIM Coordination', 'Exterior Facade Detailing']
    },
    {
      id: 'urban-civic',
      title: 'Dubai Civic District & Waterfront Promenade',
      category: 'urban',
      categoryLabel: 'Urban Design & Masterplanning',
      location: 'Dubai, UAE',
      year: '2023–2024',
      scale: '180 Hectares',
      client: 'Gulf Strategic Urban Authority',
      tools: ['Rhino + Grasshopper', 'GIS Data Suite', 'Lumion Pro', 'Twinmotion'],
      image: 'assets/images/urban-civic.jpg',
      summary: 'Comprehensive waterfront masterplan blending shaded pedestrian promenades, sustainable microclimate cooling, and cultural pavilions.',
      description: 'Designed under extreme climatic conditions, this urban masterplan utilizes passive wind-catchers, shaded canopies, and saltwater-tolerant landscape buffers to lower ambient temperatures by up to 5°C. Pedestrian mobility takes precedence over vehicular corridors, creating an activated waterfront civic space.',
      scope: ['Urban Masterplanning', 'Microclimate Simulation', 'Pedestrian Circulation Analysis', 'Photorealistic Renders']
    },
    {
      id: 'luxury-interior',
      title: 'The Obsidian Penthouse & Suites',
      category: 'interior',
      categoryLabel: 'Interior Architecture',
      location: 'London, UK',
      year: '2024',
      scale: '6,200 sq.ft',
      client: 'Private Client',
      tools: ['3ds Max', 'Corona Renderer', 'SketchUp Pro', 'Revit'],
      image: 'assets/images/luxury-interior.jpg',
      summary: 'Bespoke residential interior with artisanal Italian marble, acoustic slatted walnut paneling, and custom architectural ambient lighting.',
      description: 'The Obsidian Penthouse embodies understated luxury. Every detail—from concealed linear diffusers and recessed baseboards to fluted timber walls—was meticulously designed for seamless tactile refinement. Integrated smart-home automation coordinates circadian lighting cycles.',
      scope: ['Interior Architecture', 'Custom Millwork Detailing', 'FF&E Selection', 'VR Walkthrough Experience']
    },
    {
      id: 'backyard-oasis',
      title: 'Jacob Modern Backyard & Pool Oasis',
      category: 'landscape',
      categoryLabel: 'Landscape Design',
      location: 'California, USA',
      year: '2023',
      scale: '14,000 sq.ft',
      client: 'Jacob Estate',
      tools: ['SketchUp Pro', 'D5 Render', 'Lumion', 'AutoCAD'],
      image: 'assets/images/backyard-oasis.jpg',
      summary: 'Resort-style residential landscape with infinity pool, sunken fire lounge, pergolas, and drought-tolerant native planting.',
      description: 'Transforming an arid Californian hillside into an outdoor sanctuary, this project integrates multi-tier porcelain decking, an infinity reflection pool, outdoor gourmet kitchen, and water-wise xeriscape foliage with automated drip micro-irrigation.',
      scope: ['Landscape Architecture', 'Hardscape & Pool Engineering', 'Lighting Design', '3D Walkthrough Animation']
    },
    {
      id: 'highcourt-facade',
      title: 'High Court Institutional Campus',
      category: 'architecture',
      categoryLabel: 'Civic Architecture',
      location: 'Islamabad, Pakistan',
      year: '2022–2023',
      scale: '85,000 sq.ft',
      client: 'Department of Public Works',
      tools: ['Revit BIM', 'Rhino', 'V-Ray', 'AutoCAD'],
      image: 'assets/images/highcourt-facade.jpg',
      summary: 'Monumental judicial complex integrating contemporary brise-soleil sun louvers with classical geometric proportions.',
      description: 'The High Court project addresses rigorous security, high-volume public circulation, and climate-responsive shading. Using local stone cladding and parametric louvers, the building reduces solar heat gain while asserting democratic civic dignity.',
      scope: ['Campus Masterplanning', 'Facade Renovation & Engineering', 'Acoustic Courtroom Design', 'BIM LOD 300']
    },
    {
      id: 'nashville-coworking',
      title: 'Nashville Creative Collective Hub',
      category: 'interior',
      categoryLabel: 'Workplace & Interior',
      location: 'Nashville, USA',
      year: '2023',
      scale: '22,000 sq.ft',
      client: 'Apex Commercial Ventures',
      tools: ['Revit', 'Enscape', 'Rhino', 'SketchUp'],
      image: 'assets/images/nashville-coworking.jpg',
      summary: 'Adaptive reuse of an industrial warehouse into an energizing biophilic coworking hub for tech startups and designers.',
      description: 'Featuring exposed steel trusses, acoustic moss partitions, flexible hot-desking pods, private podcast recording suites, and an artisan coffee lounge, this coworking space balances privacy with collaborative social vibrancy.',
      scope: ['Adaptive Reuse Design', 'Workplace Programming', 'Acoustic Optimization', 'Full Interior Construction Set']
    },
    {
      id: 'cabn-eco',
      title: 'CABN Eco Sustainable Micro-Living',
      category: 'architecture',
      categoryLabel: 'Sustainable Architecture',
      location: 'Europe / International',
      year: '2024',
      scale: '850 sq.ft units',
      client: 'CABN Modular Living',
      tools: ['BIM Revit', 'Grasshopper', 'D5 Render', 'SimScale'],
      image: 'assets/images/cabn-eco.jpg',
      summary: 'Off-grid net-zero prefabricated micro-homes built with cross-laminated timber (CLT) and integrated solar energy.',
      description: 'A study in ecological minimalism. CABN structures are manufactured offsite with zero construction waste, transported flat-pack, and anchored with minimal ground disruption. Solar PV roofs, rainwater harvesting, and hyper-insulated thermal envelopes enable year-round off-grid living.',
      scope: ['Prefabrication Concept', 'Life Cycle Carbon Assessment', 'Parametric Detailing', 'Photorealistic Cinematics']
    },
    {
      id: 'icb-building',
      title: 'ICB Headquarters & Corporate Center',
      category: 'architecture',
      categoryLabel: 'Commercial Architecture',
      location: 'International',
      year: '2022',
      scale: '65,000 sq.ft',
      client: 'ICB Global Corporation',
      tools: ['Revit Architecture', '3ds Max', 'V-Ray', 'Navisworks'],
      image: 'assets/images/icb-building.jpg',
      summary: 'Striking commercial corporate headquarters featuring sculptural cantilevered volumes and an illuminated glass atrium.',
      description: 'The ICB Headquarters stands as an iconic landmark. A dramatic cantilevered boardroom suspends over the main entrance plaza, while interior floorplates are structured column-free for maximum workplace adaptability.',
      scope: ['Full Architectural Design', 'Structural Coordination', 'Facade Engineering', '3D Walkthrough']
    },
    {
      id: 'cairo-tower',
      title: 'New Cairo Commercial Gateway',
      category: 'visualization',
      categoryLabel: '3D Visualization & VR',
      location: 'Cairo, Egypt',
      year: '2023',
      scale: '95,000 sq.ft',
      client: 'Nile Capital Investments',
      tools: ['3ds Max', 'Corona Renderer', 'After Effects', 'Unreal Engine 5'],
      image: 'assets/images/cairo-tower.jpg',
      summary: 'High-impact cinematic marketing showreel and interactive VR tour for a premier mixed-use commercial development.',
      description: 'Produced to secure investor capital and pre-leasing commitments, ScapeCraft developed full-fidelity digital twins of the commercial complex with real-time solar tracking, pedestrian crowd simulations, and 8K cinematic animations.',
      scope: ['8K Architectural Renders', 'Cinematic Drone Simulation', 'Interactive VR Tour', 'Marketing Showreel']
    },
    {
      id: 'gilgit-resort',
      title: 'Gilgit Alpine Eco Hotel & Retreat',
      category: 'landscape',
      categoryLabel: 'Landscape & Hospitality',
      location: 'Northern Pakistan',
      year: '2023–2024',
      scale: '35,000 sq.ft',
      client: 'Highland Hospitality Ltd.',
      tools: ['Rhino', 'SketchUp', 'D5 Render', 'AutoCAD'],
      image: 'assets/images/gilgit-resort.jpg',
      summary: 'High-altitude eco-resort nestled in mountain valleys, honoring indigenous stone masonry and passive thermal storage.',
      description: 'Designed with deep respect for Karakoram ecology, this resort utilizes thick rammed-earth and local slate walls for thermal inertia, oriented toward natural sunpaths and majestic mountain vistas with zero damage to native pine forests.',
      scope: ['Resort Masterplan', 'Ecological Architecture', 'Terraced Landscape', '3D Photorealistic Imagery']
    },
    {
      id: 'modern-residence',
      title: 'The Minimalist Villa & Pavilion',
      category: 'architecture',
      categoryLabel: 'Residential Architecture',
      location: 'Lahore, Pakistan',
      year: '2024',
      scale: '9,500 sq.ft',
      client: 'Private Residence',
      tools: ['Revit', 'Rhino 3D', 'Lumion Pro', 'Photoshop'],
      image: 'assets/images/modern-residence.jpg',
      summary: 'Contemporary residence featuring seamless indoor-outdoor courtyards, floating concrete slabs, and privacy louvers.',
      description: 'Balancing traditional subcontinental courtyard microclimate regulation with sleek European minimalism. Large floor-to-ceiling glass panes slide flush into walls, creating uninterrupted garden views while maintaining privacy from street view.',
      scope: ['Architectural Design', 'Interior Space Planning', 'Courtyard Landscape', 'BIM Shop Drawings']
    }
  ];

  // --- Render Projects Grid ---
  const gridContainer = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderProjects(category = 'all') {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const filtered = category === 'all' 
      ? projects 
      : projects.filter(p => p.category === category);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.dataset.id = project.id;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View details for ${project.title}`);

      card.innerHTML = `
        <div class="project-img-box">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <span class="project-category-tag">${project.categoryLabel}</span>
          <span class="project-location-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${project.location}
          </span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.summary}</p>
          <div class="project-footer">
            <div class="project-specs">
              <span>${project.year}</span>
              <span>•</span>
              <span>${project.scale}</span>
            </div>
            <span class="project-inspect-link">
              Explore
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(project.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(project.id);
        }
      });

      gridContainer.appendChild(card);
    });
  }

  // Filter Buttons Event
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      renderProjects(cat);
    });
  });

  // Initial render
  renderProjects('all');

  // --- Modal Drawer Logic ---
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalLocation = document.getElementById('modalLocation');
  const modalYear = document.getElementById('modalYear');
  const modalScale = document.getElementById('modalScale');
  const modalClient = document.getElementById('modalClient');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalScope = document.getElementById('modalScope');

  function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !modalOverlay) return;

    modalImg.src = project.image;
    modalImg.alt = project.title;
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.categoryLabel;
    modalLocation.textContent = project.location;
    modalYear.textContent = project.year;
    modalScale.textContent = project.scale;
    modalClient.textContent = project.client;
    modalDesc.textContent = project.description;

    // Render Tools
    modalTools.innerHTML = project.tools.map(t => `<span class="badge-pill">${t}</span>`).join(' ');

    // Render Scope
    modalScope.innerHTML = project.scope.map(s => `<li>${s}</li>`).join('');

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // --- Interactive 3D / VR Lab Simulator ---
  const labViewport = document.getElementById('labViewport');
  const lightBtns = document.querySelectorAll('[data-light]');
  const modeBtns = document.querySelectorAll('[data-mode]');
  const labTimeDisplay = document.getElementById('labTimeDisplay');

  if (labViewport) {
    lightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        lightBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const light = btn.dataset.light;
        
        labViewport.classList.remove('light-day', 'light-dusk', 'light-night');
        labViewport.classList.add(`light-${light}`);

        if (labTimeDisplay) {
          if (light === 'day') labTimeDisplay.textContent = 'Daylight • 14:00 (Solar Zenith)';
          else if (light === 'dusk') labTimeDisplay.textContent = 'Golden Hour • 18:45 (Low Sun)';
          else if (light === 'night') labTimeDisplay.textContent = 'Architectural Night • 22:30 (Illuminated)';
        }
      });
    });

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.mode;
        
        labViewport.classList.remove('mode-render', 'mode-wireframe', 'mode-clay');
        labViewport.classList.add(`mode-${mode}`);
      });
    });
  }

  // --- Project Scope & Cost Calculator ---
  const calcScale = document.getElementById('calcScale');
  const calcScaleValue = document.getElementById('calcScaleValue');
  const calcTypeBtns = document.querySelectorAll('[data-type-price]');
  const calcTierBtns = document.querySelectorAll('[data-tier-multi]');
  const estCost = document.getElementById('estCost');
  const estWeeks = document.getElementById('estWeeks');
  const bookEstimatedBtn = document.getElementById('bookEstimatedBtn');

  let baseTypeRate = 4.5; // per sq ft
  let tierMultiplier = 1.0;

  function updateCalculator() {
    if (!calcScale || !estCost) return;
    const area = parseInt(calcScale.value, 10);
    calcScaleValue.textContent = `${area.toLocaleString()} sq.ft`;

    // Dynamic cost formula
    const totalEstimate = Math.round(area * baseTypeRate * tierMultiplier);
    estCost.textContent = `$${totalEstimate.toLocaleString()}`;

    // Estimated turnaround calculation
    let weeks = 2;
    if (area > 20000) weeks = 8;
    else if (area > 10000) weeks = 6;
    else if (area > 4000) weeks = 4;
    else weeks = 2;

    if (tierMultiplier > 1.2) weeks += 2;
    if (estWeeks) estWeeks.textContent = `${weeks}–${weeks + 2} Weeks Turnaround`;
  }

  if (calcScale) {
    calcScale.addEventListener('input', updateCalculator);

    calcTypeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        calcTypeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        baseTypeRate = parseFloat(btn.dataset.typePrice);
        updateCalculator();
      });
    });

    calcTierBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        calcTierBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        tierMultiplier = parseFloat(btn.dataset.tierMulti);
        updateCalculator();
      });
    });

    updateCalculator();

    if (bookEstimatedBtn) {
      bookEstimatedBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        const projectDescInput = document.getElementById('projectBrief');
        const activeType = document.querySelector('[data-type-price].active')?.textContent.trim() || 'Custom';
        const activeTier = document.querySelector('[data-tier-multi].active')?.textContent.trim() || 'Comprehensive';
        const area = calcScale.value;
        const cost = estCost.textContent;

        if (projectDescInput) {
          projectDescInput.value = `Inquiry regarding ${activeType} project of approx ${area} sq.ft with ${activeTier} scope. Estimated budget tier: ${cost}.`;
        }

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // --- Theme Toggle Logic ---
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('scapecraft_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const target = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('scapecraft_theme', target);
      updateThemeIcon(target);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'light') {
      themeToggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      themeToggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      themeToggle.setAttribute('aria-label', 'Switch to light theme');
    }
  }

  // --- Sticky Header Scroll ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // --- Contact Form Submission & Toast ---
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
        Sending Inquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast('Thank you! Your architectural brief has been sent to Muhammad Huzaifah & ScapeCraft.');
      }, 1200);
    });
  }

  // --- CV & Portfolio Deck Download Triggers ---
  const cvButtons = document.querySelectorAll('.trigger-cv-download');
  cvButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Muhammad Huzaifah & ScapeCraft Architectural Capability Deck initiated.');
    });
  });

  // --- Mobile Navigation Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--bg-glass)';
      navLinks.style.backdropFilter = 'blur(16px)';
      navLinks.style.padding = '1.5rem 2rem';
      navLinks.style.borderBottom = '1px solid var(--border-subtle)';
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }
});
