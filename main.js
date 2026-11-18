/**
 * Main Interactive Script for Responsive Navigation & UI
 */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerNavLinks = document.querySelectorAll('.drawer-nav-link');

  // Function to open drawer
  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerOverlay.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  // Function to close drawer
  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerOverlay.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Toggle events
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Close drawer and highlight active link when clicking drawer navigation items
  drawerNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawerNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      closeDrawer();
    });
  });

  // Active state for desktop nav links
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  desktopNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      desktopNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
