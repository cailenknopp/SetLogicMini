// script.js

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

    toggleButton.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        let theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    });

    // Chart Initialization
    const canvas = document.getElementById('combinedChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        const player1Name = canvas.dataset.player1Name;
        const player2Name = canvas.dataset.player2Name;

        const combinedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [player1Name, player2Name],
                datasets: [
                    {
                        label: 'Simulations Won',
                        data: [parseInt(canvas.dataset.simulationsWonP1), parseInt(canvas.dataset.simulationsWonP2)],
                        backgroundColor: ['rgba(0, 176, 80, 0.2)', 'rgba(255, 165, 0, 0.2)'],
                        borderColor: ['rgba(0, 176, 80, 1)', 'rgba(255, 165, 0, 1)'],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                        },
                        grid: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--grid-color')
                        }
                    },
                    x: {
                        ticks: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
                        formatter: function(value, context) {
                            const player1Prob = parseFloat(canvas.dataset.player1) * 100;
                            const player2Prob = parseFloat(canvas.dataset.player2) * 100;
                            return context.dataIndex === 0 ? player1Prob.toFixed(2) + '%' : player2Prob.toFixed(2) + '%';
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });

        document.getElementById('downloadChart').addEventListener('click', function() {
            const link = document.createElement('a');

            // Temporarily add background color
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            link.href = canvas.toDataURL('image/png');
            link.download = 'combined_chart.png';
            link.click();

            // Restore original state
            ctx.restore();
            combinedChart.update();
        });
    }
});