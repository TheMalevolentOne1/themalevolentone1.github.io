document.addEventListener("DOMContentLoaded", function() {
    // 1. CONFIGURATION
    // Change this to match your site_url path if not hosted at root
    // e.g., if your site is example.com/my-docs/, set this to '/my-docs/'
    const HOMEPAGE_PATH = '/My-Notes-Collection/'; 
    
    // 2. HOMEPAGE CHECK
    // Normalizes path to ensure it matches strictly
    const currentPath = window.location.pathname.replace('index.html', '');
    if (currentPath !== HOMEPAGE_PATH) {
        return; // Exit script if not on homepage
    }

    // 3. DETERMINE SEASON/THEME
    const date = new Date();
    const month = date.getMonth(); // 0 is January, 11 is December
    let theme = null;

    // Define themes for every month
    switch(month) {
        case 0: // January
            theme = { char: '❄️', class: 'snow', count: 30 };
            break;
        case 1: // February
            theme = { char: '❤️', class: 'hearts', count: 20 };
            break;
        case 2: // March
            theme = { char: '☘️', class: 'clover', count: 20 };
            break;
        case 3: // April
            theme = { char: '💧', class: 'rain', count: 50 };
            break;
        case 4: // May
            theme = { char: '🌸', class: 'flower', count: 20 };
            break;
        case 5: // June
            theme = { char: '☀️', class: 'sun', count: 15 };
            break;
        case 6: // July
            theme = { char: '🎆', class: 'firework', count: 15 };
            break;
        case 7: // August
            theme = { char: '🍦', class: 'summer', count: 20 };
            break;
        case 8: // September
            theme = { char: '🍂', class: 'autumn', count: 20 };
            break;
        case 9: // October (Halloween)
            theme = { char: '🎃', class: 'halloween', count: 15 };
            break;
        case 10: // November
            theme = { char: '🦃', class: 'thanksgiving', count: 10 };
            break;
        case 11: // December
            theme = { char: '❄️', class: 'snow', count: 40 };
            break;
    }

    if (!theme) return;

    // 4. GENERATE PARTICLES
    const container = document.createElement('div');
    container.id = 'seasonal-container';
    document.body.appendChild(container);

    for (let i = 0; i < theme.count; i++) {
        createParticle(theme);
    }

    function createParticle(theme) {
        const particle = document.createElement('div');
        particle.innerText = theme.char;
        particle.classList.add('seasonal-particle');
        particle.classList.add(theme.class);
        
        // Randomize position and speed
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5 seconds
        particle.style.fontSize = (Math.random() * 10 + 10) + 'px'; // 10-20px size
        particle.style.opacity = Math.random();
        
        container.appendChild(particle);

        // Reset particle after animation ends to create infinite loop without DOM buildup
        particle.addEventListener('animationiteration', () => {
            particle.style.left = Math.random() * 100 + 'vw';
        });
    }
});