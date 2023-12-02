/*function language() {
    const translations = {
        'navbar': {
            'EN': ['Projects', 'About', 'Contact'],
            'PT': ['Projetos', 'Sobre', 'Contato']
        },
        'projectsSection': {
            'EN': 'Projects',
            'PT': 'Projetos'
        },
        'aboutSection': {
            'EN': 'About Me',
            'PT': 'Sobre Mim'
        },
        'contactSection': {
            'EN': 'Contact',
            'PT': 'Contato'
        },
        'aboutText': {
            'EN': 'Hello! I\'m [Your Name], a passionate [Your Profession] with expertise in [Your Skills]. I have experience working on various projects and love turning ideas into reality.',
            'PT': 'Olá! Eu sou [Seu Nome], um apaixonado [Sua Profissão] com experiência em [Suas Habilidades]. Tenho experiência trabalhando em vários projetos e adoro transformar ideias em realidade.'
        },
        'contactInfo': {
            'EN': ['Email: example@example.com', 'Phone: +1 234 567 890'],
            'PT': ['Email: exemplo@exemplo.com', 'Telefone: +1 234 567 890']
        }
    };

    function toggleLanguage() {
        const languageToggle = document.getElementById('languageToggle');
        const currentText = languageToggle.textContent.trim();

        const newLanguage = currentText === 'EN/PT' ? 'PT/EN' : 'EN/PT';
        languageToggle.textContent = newLanguage;

        const primaryLanguage = newLanguage.split('/')[0];

        updateContent(primaryLanguage);
    }

    function updateContent(language) {
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach((link, index) => {
            link.textContent = translations.navbar[language][index];
        });

        document.getElementById('projects').querySelector('h1').textContent = translations.projectsSection[language];
        document.getElementById('about').querySelector('h1').textContent = translations.aboutSection[language];
        document.getElementById('contact').querySelector('h1').textContent = translations.contactSection[language];

        document.getElementById('about').querySelector('p').textContent = translations.aboutText[language];

        const contactInfo = document.getElementById('contact').querySelectorAll('p');
        contactInfo.forEach((info, index) => {
            info.textContent = translations.contactInfo[language][index];
        });
        
    }

    const languageToggle = document.getElementById('languageToggle');
    languageToggle.addEventListener('click', toggleLanguage);

    updateContent('PT');
}

language();*/

// Função para alternar entre temas claro e escuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
}

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', toggleTheme);


function checkScroll() {
    const sections = document.querySelectorAll('.section');
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('active');
      }
    });
  }
  
  function smoothScroll() {
    checkScroll(); // Verifica ao carregar a página
  
    window.addEventListener('scroll', checkScroll); 
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const yOffset = -80; 
        
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});
}
smoothScroll();


function filterTechnolgy() {
    const selectElement = document.getElementById('technology');
    const projectCards = document.querySelectorAll('.project-card');

    selectElement.addEventListener('change', function () {
        const selectedTechnology = this.value;

        projectCards.forEach(card => {
            const techTags = card.getAttribute('data-technologies').split(', ');

            const showCard = techTags.includes(selectedTechnology) || selectedTechnology === 'all';

            card.style.display = showCard ? 'block' : 'none';
        });
    });
}

filterTechnolgy();


function toggleMenu() {
    const menuBars = document.getElementById("menu-bars");
    const navigation = document.querySelector(".navbar ul");
    const menuIcon = document.querySelector(".menu-icon");
    
    menuBars.addEventListener("click", () => {
      navigation.classList.toggle("active");
      menuIcon.classList.toggle("active"); 
    
      if (menuIcon.classList.contains("active")) {
        menuIcon.innerHTML = "&#10005;"; 
      } else {
        menuIcon.innerHTML = "&#9776;"; 
      }
    });
}

toggleMenu();


function initProjectModalLogic() {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            openProjectModal(index + 1);
        });
    });

    function openProjectModal(projectNumber) {
        const modal = document.getElementById(`modal-project-${projectNumber}`);
        if (modal) {
            modal.style.display = 'block';

            const video = modal.querySelector('video');
            video.play();

            const closeButton = modal.querySelector('.modal-close');
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
                video.pause();
            });
        }
    }
}

initProjectModalLogic();
