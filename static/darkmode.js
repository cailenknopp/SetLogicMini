document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const toggleButton = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    toggleButton.addEventListener("click", function() {
        let theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    });

    // Initialize chart only if canvas exists
    const canvas = document.getElementById('combinedChart');
    if (canvas) {
        // ... chart code remains the same ...
    }
});