/**
 * =========================================================================
 * SAMUEL ANDREW — PORTFOLIO JAVASCRIPT
 * AI Video Creator & Social Media Marketer
 * =========================================================================
 * 
 * EASY VIDEO REPLACEMENT:
 * To add, remove, or modify AI videos, update the `projects` array below.
 * Each project accepts:
 *   - id: Unique identifier
 *   - title: Project Title
 *   - category: Category badge (e.g., "AI Animation", "Cinematic Noir")
 *   - filterCategory: Category key used for filter tabs ('noir', 'animation', 'scifi', 'commercial')
 *   - description: 1-2 sentence description
 *   - video: Path to MP4 video file
 *   - poster: Path to JPG/PNG poster image
 *   - ratio: 'ratio-portrait' (3:4 / 4:3) or 'ratio-landscape' (16:9)
 *   - duration: Runtime indicator (e.g., "0:04", "0:12")
 * =========================================================================
 */

// =========================================================================
// 1. VIDEO PROJECTS DATA STRUCTURE (ORIGINAL UPLOADED MP4 FILES)
// =========================================================================
const projects = [
  {
    id: "project-01",
    filename: "V-2.mp4",
    title: "Split-Screen Room Transformation",
    category: "AI Animation",
    filterCategory: "animation",
    description: "Multi-character synchronous split-screen animation showing siblings transforming home walls with colorful rollers.",
    video: "videos/V-2.mp4",
    poster: "images/V-2.jpg",
    ratioClass: "ratio-portrait",
    duration: "0:04"
  },
  {
    id: "project-02",
    filename: "V-7.mp4",
    title: "The Little Art Studio",
    category: "AI Animation",
    filterCategory: "animation",
    description: "Whimsical character storytelling following a young painter in denim overalls in a vibrant paint-splattered studio.",
    video: "videos/V-7.mp4",
    poster: "images/V-7.jpg",
    ratioClass: "ratio-portrait",
    duration: "0:04"
  },
  {
    id: "project-03",
    filename: "V-9.mp4",
    title: "Magic Paint Luminescence",
    category: "Creative Content",
    filterCategory: "creative",
    description: "Ethereal visual effects showing children creating glowing neon light spirals and magical portals along corridor walls.",
    video: "videos/V-9.mp4",
    poster: "images/V-9.jpg",
    ratioClass: "ratio-portrait",
    duration: "0:04"
  },
  {
    id: "project-04",
    filename: "V-25.mp4",
    title: "Cyber Operations Command",
    category: "AI Video",
    filterCategory: "ai-video",
    description: "Atmospheric cyberpunk operations center with technical operators monitoring multi-layered holographic consoles.",
    video: "videos/V-25.mp4",
    poster: "images/V-25.jpg",
    ratioClass: "ratio-landscape",
    duration: "0:04"
  },
  {
    id: "project-05",
    filename: "V-32.mp4",
    title: "The Cobblestone Mystery",
    category: "AI Video",
    filterCategory: "ai-video",
    description: "Atmospheric nocturnal detective narrative set in damp cobblestone European alleyways with vintage lamplight reflections.",
    video: "videos/V-32.mp4",
    poster: "images/V-32.jpg",
    ratioClass: "ratio-landscape",
    duration: "0:04"
  },
  {
    id: "project-06",
    filename: "V-36.mp4",
    title: "The Dublin Tavern 1974",
    category: "Social Media",
    filterCategory: "social",
    description: "Richly detailed 1970s tavern interior capturing authentic social ambiance, vintage pints, acoustic guitar, and warm storytelling.",
    video: "videos/V-36.mp4",
    poster: "images/V-36.jpg",
    ratioClass: "ratio-landscape",
    duration: "0:09"
  },
  {
    id: "project-07",
    filename: "V-37.mp4",
    title: "Roxy Autumn Lights",
    category: "Advertisement",
    filterCategory: "ad",
    description: "Evocative dusk street sequence outside the vintage Roxy Theater marquee with rain reflections, classic automobiles, and traveler energy.",
    video: "videos/V-37.mp4",
    poster: "images/V-37.jpg",
    ratioClass: "ratio-landscape",
    duration: "0:09"
  },
  {
    id: "project-08",
    filename: "V-38.mp4",
    title: "Media Literacy & AI Seminar",
    category: "Creative Content",
    filterCategory: "creative",
    description: "High-tech university multimedia lecture exploring AI-generated media, fact checking, and digital verification systems.",
    video: "videos/V-38.mp4",
    poster: "images/V-38.jpg",
    ratioClass: "ratio-landscape",
    duration: "0:09"
  },
  {
    id: "project-09",
    filename: "V-39.mp4",
    title: "The Master Craftsman",
    category: "AI Animation",
    filterCategory: "animation",
    description: "Studio Ghibli-inspired hand-crafted aesthetic illustrating a dedicated carpenter refining raw timber in a sunlit workshop.",
    video: "videos/V-39.mp4",
    poster: "images/V-39.jpg",
    ratioClass: "ratio-portrait",
    duration: "0:04"
  },
  {
    id: "project-10",
    filename: "V-40.mp4",
    title: "Generations of Craft",
    category: "AI Animation",
    filterCategory: "animation",
    description: "Heartwarming storybook illustration capturing grandfather and grandson sharing woodworking wisdom at a sun-dappled bench.",
    video: "videos/V-40.mp4",
    poster: "images/V-40.jpg",
    ratioClass: "ratio-portrait",
    duration: "0:04"
  }
];

// =========================================================================
// 2. DOM INITIALIZATION ON LOAD
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initHeroVisual();
  initFeaturedPlayer();
  renderProjectGrid(projects);
  initProjectFilters();
  initVideoModal();
  initContactForm();
  initScrollAnimations();
});

// =========================================================================
// 3. NAVIGATION BAR & SCROLL
// =========================================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active link highlighting
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

// =========================================================================
// 4. MOBILE HAMBURGER MENU
// =========================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-cta-btn");

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      drawer.classList.add("open");
      toggleBtn.classList.add("open");
      toggleBtn.setAttribute("aria-expanded", "true");
    }
  }

  toggleBtn.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================================
// 5. 3D HERO VISUAL (Lightweight Canvas Particle Sphere & Orbital Rings)
// Runs smoothly on 60fps without heavy external 3D libraries
// =========================================================================
function initHeroVisual() {
  const canvas = document.getElementById("hero-3d-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let animationFrameId;
  let width, height;
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;
  let currentRotationX = 0, currentRotationY = 0;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Mouse parallax interaction on desktop
  window.addEventListener("mousemove", (e) => {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    mouseX = (e.clientX - halfW) / halfW;
    mouseY = (e.clientY - halfH) / halfH;
    targetRotationY = mouseX * 0.45;
    targetRotationX = -mouseY * 0.45;
  }, { passive: true });

  // Generate 3D sphere points
  const numPoints = 140;
  const points = [];
  const radius = Math.min(width, height) * 0.32 || 130;

  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(-1 + (2 * i) / numPoints);
    const theta = Math.sqrt(numPoints * Math.PI) * phi;
    points.push({
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi),
      baseSize: Math.random() * 1.8 + 1.2,
      cyanGlow: Math.random() > 0.4
    });
  }

  let angle = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    currentRotationX += (targetRotationX - currentRotationX) * 0.05;
    currentRotationY += (targetRotationY - currentRotationY) * 0.05;
    angle += 0.007;

    const centerX = width / 2;
    const centerY = height / 2;
    const currentRadius = Math.min(width, height) * 0.32 || 130;

    // Draw futuristic ambient glowing background circles
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle * 0.3);

    // Orbital Ring 1
    ctx.beginPath();
    ctx.ellipse(0, 0, currentRadius * 1.35, currentRadius * 0.55, currentRotationX, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0, 217, 255, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 14]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Orbital Ring 2 (Counter-rotating)
    ctx.beginPath();
    ctx.ellipse(0, 0, currentRadius * 1.15, currentRadius * 0.4, -angle * 0.5, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(22, 131, 255, 0.18)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();

    // Sort sphere points by Z depth
    const rotatedPoints = points.map((p) => {
      // Rotation Y + automatic rotation
      const totalRotY = currentRotationY + angle;
      let cosY = Math.cos(totalRotY);
      let sinY = Math.sin(totalRotY);
      let x1 = p.x * cosY + p.z * sinY;
      let z1 = -p.x * sinY + p.z * cosY;

      // Rotation X
      let cosX = Math.cos(currentRotationX);
      let sinX = Math.sin(currentRotationX);
      let y2 = p.y * cosX - z1 * sinX;
      let z2 = p.y * sinX + z1 * cosX;

      // Perspective projection
      const fov = 350;
      const scale = fov / (fov + z2);
      const projX = centerX + x1 * scale;
      const projY = centerY + y2 * scale;

      return {
        x: projX,
        y: projY,
        z: z2,
        scale,
        baseSize: p.baseSize,
        cyanGlow: p.cyanGlow
      };
    });

    rotatedPoints.sort((a, b) => a.z - b.z);

    // Draw connecting mesh lines between nearby points
    ctx.strokeStyle = "rgba(0, 217, 255, 0.08)";
    ctx.lineWidth = 0.8;
    for (let i = 0; i < rotatedPoints.length; i++) {
      for (let j = i + 1; j < rotatedPoints.length; j++) {
        const dx = rotatedPoints[i].x - rotatedPoints[j].x;
        const dy = rotatedPoints[i].y - rotatedPoints[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 48) {
          ctx.beginPath();
          ctx.moveTo(rotatedPoints[i].x, rotatedPoints[i].y);
          ctx.lineTo(rotatedPoints[j].x, rotatedPoints[j].y);
          ctx.stroke();
        }
      }
    }

    // Render points with depth lighting
    rotatedPoints.forEach((p) => {
      const alpha = Math.max(0.15, Math.min(1, (p.z + currentRadius) / (currentRadius * 2)));
      const size = Math.max(1, p.baseSize * p.scale);

      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

      if (p.cyanGlow) {
        ctx.fillStyle = `rgba(0, 217, 255, ${alpha * 0.9})`;
        ctx.shadowColor = "#00D9FF";
        ctx.shadowBlur = 8 * p.scale;
      } else {
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.75})`;
        ctx.shadowBlur = 0;
      }

      ctx.fill();
    });

    // Reset shadow
    ctx.shadowBlur = 0;

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

// =========================================================================
// 6. FEATURED VIDEO PLAYER CONTROLS
// =========================================================================
function initFeaturedPlayer() {
  const video = document.getElementById("featured-video");
  const playBtn = document.getElementById("featured-play-btn");
  const muteBtn = document.getElementById("featured-mute-btn");
  const fullscreenBtn = document.getElementById("featured-fullscreen-btn");
  const timeDisplay = document.getElementById("featured-time-display");

  if (!video) return;

  // Set explicit video attributes for maximum browser & mobile compatibility
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");
  video.preload = "metadata";

  video.addEventListener("play", () => {
    document.querySelectorAll("video").forEach((other) => {
      if (other !== video && !other.paused) {
        other.pause();
      }
    });
    if (playBtn) {
      playBtn.style.opacity = "0";
      playBtn.style.pointerEvents = "none";
    }
  });

  video.addEventListener("pause", () => {
    if (playBtn) {
      playBtn.style.opacity = "1";
      playBtn.style.pointerEvents = "auto";
    }
  });

  video.addEventListener("ended", () => {
    if (playBtn) {
      playBtn.style.opacity = "1";
      playBtn.style.pointerEvents = "auto";
    }
    video.currentTime = 0;
  });

  function togglePlay() {
    if (video.paused || video.ended) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Featured play prevented, falling back to muted:", err);
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    } else {
      video.pause();
    }
  }

  video.addEventListener("click", togglePlay);
  if (playBtn) {
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        if (video.requestFullscreen) video.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  if (timeDisplay) {
    video.addEventListener("timeupdate", () => {
      const cur = formatTime(video.currentTime);
      const dur = formatTime(video.duration || 4);
      timeDisplay.textContent = `${cur} / ${dur}`;
    });
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// =========================================================================
// 7. SELECTED WORK: GRID RENDERING & FILTERING
// =========================================================================
function renderProjectGrid(items) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  items.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card reveal-on-scroll";
    card.setAttribute("data-category", project.filterCategory);
    card.setAttribute("data-id", project.id);

    card.innerHTML = `
      <div class="project-media-wrapper ${project.ratioClass}" id="media-${project.id}">
        <span class="project-category-badge">${project.category}</span>
        
        <video 
          class="project-video" 
          controls 
          playsinline 
          webkit-playsinline="true"
          preload="metadata" 
          id="vid-${project.id}"
          width="100%"
        >
          <source src="${project.video}" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        
        <div class="video-error-msg hidden" id="err-${project.id}">
          Video could not be loaded. Please try again.
        </div>
      </div>
      
      <div class="project-content-block">
        <div class="project-header-row">
          <h3 class="project-title">${project.title}</h3>
          <span class="video-badge-pill">${project.duration}</span>
        </div>
        
        <p class="project-desc">${project.description}</p>
        
        <div class="project-footer-row">
          <span class="project-file-label">Original MP4: ${project.filename}</span>
          <button type="button" class="project-fullscreen-btn" data-project-id="${project.id}" title="Watch Fullscreen">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
            </svg>
            <span>Fullscreen</span>
          </button>
        </div>
      </div>
    `;

    const video = card.querySelector(".project-video");
    const errBanner = card.querySelector(".video-error-msg");
    const fullscreenBtn = card.querySelector(".project-fullscreen-btn");

    if (video) {
      // Pause all other playing videos when this one starts to avoid audio clash
      video.addEventListener("play", () => {
        document.querySelectorAll("video").forEach((other) => {
          if (other !== video && !other.paused) {
            other.pause();
          }
        });
      });

      // Clear, visible error message if a video fails to load
      video.addEventListener("error", (e) => {
        console.error("Video failed to load: " + project.video, e);
        if (errBanner) errBanner.classList.remove("hidden");
      });
    }

    if (fullscreenBtn && video) {
      fullscreenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else {
          openVideoModal(project);
        }
      });
    }

    grid.appendChild(card);
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      if (category === "all") {
        renderProjectGrid(projects);
      } else {
        const filtered = projects.filter((p) => p.filterCategory === category);
        renderProjectGrid(filtered);
      }

      // Re-trigger scroll reveal for newly added cards
      initScrollAnimations();
    });
  });
}

// =========================================================================
// 8. VIDEO LIGHTBOX MODAL
// =========================================================================
let currentActiveProject = null;

function initVideoModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal || !closeBtn) return;

  function closeModal() {
    modal.classList.remove("open");
    const modalVideo = document.getElementById("modal-video");
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.src = "";
    }
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function openVideoModal(project) {
  const modal = document.getElementById("video-modal");
  const modalTitle = document.getElementById("modal-project-title");
  const modalVideo = document.getElementById("modal-video");
  const modalCategory = document.getElementById("modal-category-label");
  const modalDesc = document.getElementById("modal-project-desc");

  if (!modal || !modalVideo) return;

  currentActiveProject = project;
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  if (modalDesc) modalDesc.textContent = project.description;

  modalVideo.src = project.video;
  modalVideo.controls = true;
  modalVideo.playsInline = true;
  modalVideo.setAttribute("playsinline", "");
  modalVideo.setAttribute("webkit-playsinline", "true");
  modalVideo.preload = "metadata";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  modalVideo.play().catch(() => {
    // Autoplay handled safely if blocked by browser policy
  });
}

// =========================================================================
// 9. CONTACT FORM FUNCTIONALITY (NETLIFY-COMPATIBLE)
// =========================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success-msg");
  const errorMsg = document.getElementById("form-error-msg");
  const submitBtn = document.getElementById("form-submit-btn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Reset status messages
    if (successMsg) successMsg.classList.add("hidden");
    if (errorMsg) errorMsg.classList.add("hidden");

    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      const errorText = errorMsg?.querySelector("span");
      if (errorText) {
        errorText.textContent = "Local preview cannot send emails. Deploy this site to Netlify and configure the contact notification there.";
      }
      if (errorMsg) errorMsg.classList.remove("hidden");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending Inquiry...</span>`;
    }

    const formData = new FormData(form);

    try {
      // Netlify standard AJAX form POST
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok || response.status === 200 || response.status === 303) {
        if (successMsg) {
          successMsg.classList.remove("hidden");
          successMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        form.reset();
      } else {
        // Fallback to native form submission
        form.submit();
      }
    } catch (err) {
      if (errorMsg) errorMsg.classList.remove("hidden");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>SEND INQUIRY</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }
    }
  });
}

// =========================================================================
// 10. SCROLL REVEAL ANIMATIONS
// =========================================================================
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach((el) => observer.observe(el));
}
