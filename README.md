# SetLogic Monte Carlo

This is a Flask-based web application that simulates a tennis match between two players based on their statistical attributes. The app uses Monte Carlo simulations to calculate the probabilities of each player winning the match.

## Features

- **Player Statistics**: Input player-specific stats like serve percentage, break point conversion rate, and probabilities of winning points on first and second serves.
- **Match Simulation**: Simulates the match using:
  - Point-by-point simulation
  - Game simulation
  - Tie-break simulation
  - Set simulation
  - Full match simulation (best-of-three sets)
- **Monte Carlo Simulation**: Runs 1000 simulations to estimate the probabilities of each player winning the match.
- **Interactive Web Interface**: Users can input player stats through a form and view the results on the web page.
- **Error Handling**: Provides feedback for missing or invalid inputs.

## How It Works

1. Users input the following statistics for two players:
   - Name
   - Serve percentage (e.g., 65%)
   - Break point conversion rate (e.g., 40%)
   - First serve win percentage (e.g., 75%)
   - Second serve win percentage (e.g., 50%)
   - Sets won, games won, and points won (optional for ongoing matches)
2. The application simulates the match using statistical probabilities and outputs:
   - Probability of Player 1 winning
   - Probability of Player 2 winning
3. Results are displayed in an easy-to-read format on the web page.

## Installation

### Prerequisites

- Python 3.8+
- Flask

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/cailenknopp/SetLogic.git
   cd tennis-match-simulator
