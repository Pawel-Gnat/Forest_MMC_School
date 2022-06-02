const navMobile = document.querySelector('.nav__items')
const navBtn = document.querySelector('.nav__button')
const footerYear = document.querySelector('.footer__year')
const navLinks = document.querySelectorAll('.nav__link')
// const menuItems = document.querySelectorAll('a')
// const scrollSpySections = document.querySelectorAll('.section')

const handleNav = () => {
	navMobile.classList.toggle('nav__items--active')
	document.body.classList.toggle('sticky-body')

	navLinks.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__items--active')
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

// const handleScrollSpy = () => {
// 	if (document.body.classList.contains('main-page')) {
// 		const sections = []
// 		scrollSpySections.forEach(section => {
// 			if (window.scrollY <= section.offsetTop + section.offsetHeight) {
// 				sections.push(section)

// 				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
// 				console.log(sections)
// 				console.log(activeSection)
// 				menuItems.forEach(item => item.classList.remove('active'))

// 				activeSection.classList.add('active')
// 			}
// 		})
// 	}
// }

function scrollspy() {
	const links = document.querySelectorAll('.nav__link')
	const aboutUs = document.getElementById('aboutus').offsetTop
	const offer = document.getElementById('offer').offsetTop
	const navHeight = document.getElementById('header').offsetTop

	const changeClasses = index => {
		links.forEach(link => link.classList.remove('active'))
		links[index].classList.add('active')
	}


	if (window.scrollY < aboutUs - navHeight) {
		changeClasses(0)
	} else if (window.scrollY >= aboutUs - navHeight && window.scrollY < offer - navHeight) {
		changeClasses(1)
	} else if (window.scrollY >= offer - navHeight) {
		changeClasses(2)
	}
}
navBtn.addEventListener('click', handleNav)
// window.addEventListener('scroll', handleScrollSpy)
