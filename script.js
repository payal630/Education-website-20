// Mobile navigation drawer toggle
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (!header || !toggle || !links) return;

  function closeMenu() {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    header.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (header.classList.contains('menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a nav link is tapped
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) closeMenu();
  });

  // Close menu on resize back to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) closeMenu();
  });
});

// Contact form: show success popup, then reset on OK
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var modal = document.getElementById('successModal');
  var okBtn = document.getElementById('modalOkBtn');

  if (!form || !modal || !okBtn) return;

  function openModal() {
    modal.classList.add('is-open');
  }

  function closeModalAndReset() {
    modal.classList.remove('is-open');
    form.reset();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    openModal();
  });

  okBtn.addEventListener('click', closeModalAndReset);

  // Also close if the overlay itself (outside the box) is clicked
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModalAndReset();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModalAndReset();
    }
  });
});
