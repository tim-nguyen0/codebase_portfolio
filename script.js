document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for browser pref
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save the user's preference
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});