const navMobile = document.querySelector('.nav__items')
const navBtn = document.querySelector('.nav__button')
const footerYear = document.querySelector('.footer__year')
const navLinks = document.querySelectorAll('.nav__link')

const handleNav = () => {
	navMobile.classList.toggle('nav__items--active')
	document.body.classList.toggle('sticky-body')

navLinks.forEach(item => {
	item.addEventListener('click', () => {
		navMobile.classList.remove('nav__items--active')
	})
})
}

navBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
