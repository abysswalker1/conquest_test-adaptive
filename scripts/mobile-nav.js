const NAV_BURGER = document.getElementById('burger');
const MOBILE_NAV_WRAP = document.querySelector('.mobile-nav_wrap');
const MOBILE_NAV = document.querySelector('.mobile-nav')

const documentWrap = document.querySelector('.wrap-all');

const openMobileNav = () => {
    documentWrap.classList.add('mobile-nav-opened');
}

const closeMobileNav = () => {
    documentWrap.classList.remove('mobile-nav-opened');
}

NAV_BURGER.addEventListener('click', openMobileNav)
MOBILE_NAV_WRAP.addEventListener('click', closeMobileNav)
MOBILE_NAV.addEventListener('click', (e) => {e.stopPropagation()})
