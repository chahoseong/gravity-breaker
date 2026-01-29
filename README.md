# Gravity Breaker

**Gravity Breaker** is a web project showcasing the next generation of rocket engines for deep space exploration. This project demonstrates a modern website architecture using Vanilla HTML, CSS, and JavaScript with Single Page Application (SPA) routing capabilities.

## 🚀 Project Overview

Everything connects to space. Gravity Breaker presents a vision of future propulsion systems, featuring:
- **Landing Page**: Overview of the mission and engine fleet.
- **Engine Showcase**: Detailed specifications for GB-1 'Thunderbolt', GB-9 'Valkyrie', and GB-X 'Horizon'.
- **News**: Latest updates on mission status and partnerships.
- **SPA Architecture**: Smooth client-side transitions without page reloads.

## 🛠 Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Routing**: Custom Client-side Router
- **Backend (Dev)**: Python (`http.server` wrapper for SPA support)

## 📂 Project Structure

```bash
gravity-breaker/
├── assets/             # Static assets (images, icons)
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page content logic
│   ├── router/         # SPA routing logic
│   ├── styles/         # CSS files
│   └── main.js         # Entry point
├── index.html          # Main HTML template
├── spa-server.py       # Local development server
└── README.md           # Project documentation
```

## 🏁 Getting Started

### Prerequisites
- Python 3.x installed

### Running Locally

1. Clone the repository (if applicable) or navigate to the project directory.
2. Run the local development server:
   ```bash
   python spa-server.py
   ```
3. Open your browser and visit:
   `http://localhost:8000`

## 📝 License

This project is for demonstration purposes.