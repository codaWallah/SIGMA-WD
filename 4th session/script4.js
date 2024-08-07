// Add event listeners to bookmark links
const bookmarkLinks = document.querySelectorAll('a');

bookmarkLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.1)';
  });

  link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)';
  });
});

// Add tooltips to bookmark links
const tooltips = document.querySelectorAll('a');

tooltips.forEach((tooltip) => {
  const text = tooltip.getAttribute('title');
  const tooltipText = document.createElement('span');
  tooltipText.textContent = text;
  tooltipText.className = 'tooltip-text';
  tooltip.appendChild(tooltipText);
});

// Add animation to bookmark sections
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  section.addEventListener('mouseover', () => {
    section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  });

  section.addEventListener('mouseout', () => {
    section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  });
});

// Add Font Awesome icons to bookmark links
const icons = document.querySelectorAll('i');

icons.forEach((icon) => {
  icon.className += ' fa-lg';
});

// Add animation to page load
document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  page.style.opacity = 0;
  setTimeout(() => {
    page.style.opacity = 1;
  }, 500);
});
// Get the secondary bookmarks section
const secondaryBookmarks = document.querySelector('.secondary-bookmarks');

// Get the toggle button (we'll create it in a moment)
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Secondary Bookmarks';
toggleButton.classList.add('toggle-button');

// Add the toggle button to the primary bookmarks section
document.querySelector('.primary-bookmarks').appendChild(toggleButton);

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the visibility of the secondary bookmarks section
  secondaryBookmarks.classList.toggle('hidden');
});

// Add a CSS class to hide the secondary bookmarks section by default
secondaryBookmarks.classList.add('hidden');


