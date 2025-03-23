# InfraSnap

InfraSnap is a simple fullstack app to visualize and optimize cloud spending. It reads mock AWS billing data, stores it in SQLite, and presents interactive charts.

## Tech Stack
- **Backend**: Flask, SQLAlchemy, SQLite, Pandas
- **Frontend**: React, Vite, TailwindCSS, Zustand, Chart.js
- **DevOps**: Docker, Docker Compose, GitHub Actions

## Setup & Run
1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd InfraSnap
   ```
2. Start with Docker Compose:
   ```bash
   docker-compose up --build
   ```
   - Backend on http://localhost:5000
   - Frontend on http://localhost:3000

Or run locally:

### Backend
```bash
cd backend
pip install -r requirements.txt
python ingest.py    # loads mock_data.csv
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Project Structure
See [Project Structure](#project-structure) above.

## Features
- Cost breakdown by service (pie chart)
- Trends over time (line chart)
- Hardcoded optimization tips

## License
MIT
