/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'), //ici on met l'attribut entre crochet dans une chaine
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')


        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal') //on ouvre que le modal concerné
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i) //affichage de ce modal
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        //on parcours encore tous les modals
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal') //on ferme tous les modals
        })
    })
})

/*==================== PROJECT SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    /* mousewheel: true,
    keyboard: true, */
})

/*==================== PROJECT MODAL INFO ====================*/
function alertInfo(param) {
    if (param === "sos") {
        alert('Le lien sur playStore n\'est pas encore disponible.')
    }
    else if (param === "lgrh") {
        alert('Le lien github de ce projet sera disponible bientot.')
    }
    else {
        alert('Le lien github de ce projet sera disponible bientot!')
    }
}

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial_container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
//methode de scroll de sections
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
//attaché l'event de scroll avec la methode scrollActive à la fenetre
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
//methode qui permet au header de bien s'afficher lors du scroll
function scrollHeader() {
    const nav = document.getElementById('header')
    //lorqu'il y a scroll 
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    }
    else {
        nav.classList.remove('scroll-header')
    }
}
//attaché l'event de scroll avec la methode scrollHeader à la fenetre
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
//methode qui permet au lien de retour en haut de bien s'afficher lors du scroll
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    //lorqu'il y a scroll 
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    }
    else {
        scrollUp.classList.remove('show-scroll')
    }
}
//attaché l'event de scroll avec la methode scrollUp à la fenetre
window.addEventListener('scroll', scrollUp)
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//we validate if the user previously choose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Active or Desactive the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark theme or icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //now, we save the theme and icon the user choose
    localStorage.setItem('selected-theme', getCurrentTheme)
    localStorage.setItem('selected-icon', getCurrentIcon)
})

/*==================== SEND MAIL ====================*/
function sendMail() {
    const names = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value;
    //test de nullité
    if (names === "") {
        alert("Remplissez le champ Noms s'il vous plait.")
    } else if (email === "") {
        alert("Remplissez le champ Email s'il vous plait.")
    } else if (project === "") {
        alert("Remplissez le champ Projet s'il vous plait.")
    } else if (message === "") {
        alert("Remplissez le champ Message s'il vous plait.")
    } else {
        //
        Email.send({
            Host: "smtp.gmail.com",
            Username: "jmkportfoliosender@gmail.com",
            Password: "portfoliolock",
            To: 'josuembiyavanga.jmk@gmail.com',
            From: "jmkportfoliosender@gmail.com",
            Subject: "message de " + names,
            Body: "<html><h1>Info du projet : " + project + "</h1><h3>" + email + "</h3><br/><p>" + message + "</p></html>",

        }).then(
            message => alert("message envoyé avec succès")

        );
        //réinitialisation
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('project').value = ""
        document.getElementById('message').value = ""
    }

}
