# StormShield — AI-Powered Parametric Insurance

> Automatic insurance payouts for delivery workers during severe weather, with multi-signal fraud detection.

Built for **Guidewire DEVTrails 2026** · Team RiskResolvers

---

## Pages
| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero, how it works, partners, CTA |
| Dashboard | `/dashboard` | Live metrics, charts, claim history, coverage |
| Claims | `/claims` | Active claim status, journey tracker, data sources |
| Pricing | `/pricing` | 3 plans with feature comparison table |
| Fraud Shield | `/fraud` | 5-signal validation, trust score, attack vectors, clusters |

---

## Project Structure

```
stormshield/
├── src/
│   ├── data.js       ← ALL dummy data lives here (swap with real APIs)
│   └── App.jsx       ← Full UI, reads everything from data.js
├── package.json
└── README.md
```

---

## Setup (takes 2 minutes)

**Step 1 — Create React app**
```bash
npx create-react-app stormshield
cd stormshield
```

**Step 2 — Replace source files**
```bash
# Delete the default src folder contents
rm src/App.js src/App.css src/logo.svg src/index.css

# Copy in your files
cp /path/to/App.jsx src/App.jsx
cp /path/to/data.js src/data.js
```

**Step 3 — Update src/index.js**

Open `src/index.js` and make sure it imports `App.jsx`:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**Step 4 — Run**
```bash
npm start
```

---

## How to swap dummy data with real data

All dummy data is in `src/data.js`. Every export has a `TODO` comment showing which API endpoint to replace it with.

### Example — replace weather alert with real API:
```js
// src/data.js — BEFORE (dummy)
export const ACTIVE_ALERT = {
  active: true,
  type: "Heavy Rain",
  rainfallMm: 42,
  // ...
};

// src/App.jsx — AFTER (real API)
const [ACTIVE_ALERT, setActiveAlert] = useState(null);
useEffect(() => {
  fetch('/api/weather/alert?zone=600017')
    .then(r => r.json())
    .then(setActiveAlert);
}, []);
```

### Data exports in data.js
| Export | Used in | Replace with |
|--------|---------|--------------|
| `CURRENT_USER` | Dashboard, Claims | `/api/auth/me` |
| `RISK_PROFILE` | Dashboard, Claims, Fraud | `/api/user/risk-score` |
| `ACTIVE_ALERT` | Dashboard, Landing | `/api/weather/alert` |
| `ACTIVE_CLAIM` | Claims | `/api/claims/active` |
| `CLAIM_HISTORY` | Dashboard | `/api/claims/history` |
| `WEEKLY_EARNINGS` | Dashboard chart | `/api/user/earnings` |
| `DISRUPTION_MIX` | Dashboard chart | `/api/analytics/disruption-mix` |
| `FRAUD_SIGNALS` | Fraud page | `/api/fraud/signals` |
| `ATTACK_VECTORS` | Fraud page | Static config |
| `FRAUD_CLUSTERS` | Fraud page | `/api/fraud/clusters` |
| `PLANS` | Pricing page | `/api/plans` |
| `DATA_SOURCES` | Claims page | `/api/claims/:id/sources` |
| `GLOBAL_STATS` | Landing page | `/api/stats/global` |

---

## Tech Stack
- React.js (no extra dependencies)
- Pure CSS-in-JS (no Tailwind install needed)
- Google Fonts (Bebas Neue + DM Sans + JetBrains Mono)

---

## Push to GitHub
```bash
git init
git add .
git commit -m "feat: StormShield initial build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stormshield.git
git push -u origin main
```
