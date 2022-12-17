
const btn = document.querySelector('.header__title')
btn.addEventListener('click', () => {
  const hero = document.querySelector('.hero')
  hero.className = hero.className.includes('hero_dark') ? "hero" : "hero hero_dark"
})
