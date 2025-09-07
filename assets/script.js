document.addEventListener('DOMContentLoaded', () => {
   
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mainNav.classList.toggle('is-active');
        body.classList.toggle('menu-open');
    });

  
    document.querySelectorAll('.main-nav a').forEach(item => {
        item.addEventListener('click', () => {
            if (mainNav.classList.contains('is-active')) {
                hamburger.classList.remove('is-active');
                mainNav.classList.remove('is-active');
                body.classList.remove('menu-open');
            }
        });
    });
    
    body.addEventListener('click', (event) => {
        if (body.classList.contains('menu-open') && !mainNav.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('is-active');
            mainNav.classList.remove('is-active');
            body.classList.remove('menu-open');
        }
         });
});

 
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');

    const animateProgress = () => {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight * 0.75) { 
            progressBars.forEach(bar => {
                const progress = bar.dataset.progress;
                bar.style.width = `${progress}%`;
            });
            window.removeEventListener('scroll', animateProgress); 
        }
    };

    window.addEventListener('scroll', animateProgress);
  
    animateProgress();

   
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    const validateField = (input, errorElement, errorMessage) => {
        if (input.value.trim() === '') {
            input.classList.add('invalid');
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            return false;
        } else {
            input.classList.remove('invalid');
            errorElement.style.display = 'none';
            return true;
        }
    };

    const validateEmail = (input, errorElement, errorMessage) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            input.classList.add('invalid');
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            return false;
        } else {
            input.classList.remove('invalid');
            errorElement.style.display = 'none';
            return true;
        }
    };

    nameInput.addEventListener('input', () => validateField(nameInput, nameError, 'El nombre es requerido.'));
    emailInput.addEventListener('input', () => validateEmail(emailInput, emailError, 'Por favor, introduce un email válido.'));
    messageInput.addEventListener('input', () => validateField(messageInput, messageError, 'El mensaje es requerido.'));

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío por defecto

        const isNameValid = validateField(nameInput, nameError, 'El nombre es requerido.');
        const isEmailValid = validateEmail(emailInput, emailError, 'Por favor, introduce un email válido.');
        const isMessageValid = validateField(messageInput, messageError, 'El mensaje es requerido.');

        if (isNameValid && isEmailValid && isMessageValid) {
       
            alert('¡Formulario enviado con éxito!');
            contactForm.reset(); 
          
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    });

   
    const heroContent = document.querySelector('.hero-content h2');
    const originalText = heroContent.innerHTML;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { 
            heroContent.innerHTML = `Explora mis <span class="highlight">proyectos</span>`;
        } else {
            heroContent.innerHTML = originalText;
        }
    });