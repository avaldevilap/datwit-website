const primaryHeader = document.querySelector('.primary-header');
const navToggle =
  document.querySelector<HTMLButtonElement>('.mobile-nav-toggle');
const primaryNav = document.querySelector<HTMLElement>('.primary-navigation');

navToggle?.addEventListener('click', () => {
  primaryNav?.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', 'false')
    : navToggle.setAttribute('aria-expanded', 'true');
  primaryNav?.toggleAttribute('data-visible');
  primaryHeader?.toggleAttribute('data-overlay');
});

export {};
