document.addEventListener('DOMContentLoaded', async () => {
    // Theme toggling
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = document.querySelector('#theme-toggle i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fa-solid fa-sun';
            } else {
                icon.className = 'fa-solid fa-moon';
            }
        }
    }

    // Check Auth Status for Navbar
    const user = await api.getMe();
    const dashboardLink = document.getElementById('dashboard-link');
    const authLink = document.getElementById('auth-link');
    
    if (user) {
        if (dashboardLink) dashboardLink.style.display = 'flex';
        if (authLink) {
            authLink.innerHTML = `<i class="fa-solid fa-user"></i> ${user.username}`;
            authLink.href = 'dashboard.html'; // Redirect to dashboard if clicked
        }
    }

    // Handle logout globally if button exists
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.href = 'index.html';
        });
    }
});
