var darkOn = false;


document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            addDarkModeListener()
            if (document.body.id === 'landing') {
                addScrollListener(); //landing page scroll behavior
            }
            applySavedDarkMode();
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

function addDarkModeListener() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark-mode');
            
            if (document.documentElement.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = "Light Mode";
            } else {
                localStorage.setItem('darkMode', 'disabled')
                darkModeToggle.textContent = "Dark Mode";
            }
        });
    } else {
        console.error("Dark mode toggle button not found!");
    }
}

function applySavedDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function addScrollListener() {
    const header = document.querySelector('header'); 

    header.style.opacity = '0';
    header.style.transition = 'opacity 0.5s ease';

    window.addEventListener('scroll', function() {
        // check scroll pos
        if (window.scrollY > 250) { 
            header.style.opacity = '1'; // show header
        } else {
            header.style.opacity = '0'; // hide header
        }
    });

    header.addEventListener('mouseenter', function() {
        header.style.opacity = '1';
    });

    header.addEventListener('mouseleave', function() {
        if(window.scrollY < 250) {
            header.style.opacity = '0';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElement = document.getElementById('intro-image-object');
    fadeInElement.style.opacity = '1';
});