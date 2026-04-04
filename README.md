<<<<<<< HEAD
# ⚡ StormShield AI — Workability-Based Income Protection for Gig Workers
Guidewire DEVTrails 2026 · Phase 2 Submission  
Team: Team Titans  

---

## 📌 Problem Statement

India has over 15 million gig delivery workers (Zomato, Swiggy, Blinkit, Amazon Flex). Their income is highly dependent on external conditions like weather, pollution, and local disruptions.

A single cyclone or flood can wipe out ₹1,000–₹2,000 of weekly income — with zero financial protection.

Existing insurance systems fail because:

- Manual claims required ❌  
- Slow processing ❌  
- Not designed for gig-based dynamic income ❌  

---

## 💡 Our Core Idea (What Makes Us Different)

Most parametric insurance systems trigger payouts based on **events** (rain, heat, pollution).

👉 We take a fundamentally different approach.

### 🚀 We insure "Ability to Work" — not just events.

We introduce:

## 🧠 Workability Score (0–100)

Instead of reacting to disruptions, we quantify how much a worker can actually work under real-world conditions.

### Example:

- Heavy rain + high AQI + heat → Workability = 32/100  
- Normal conditions → Workability = 85–100  

---

## 💰 Income Protection Logic

We move from event-based insurance → outcome-based protection

Expected Income (Normal Conditions): ₹800  
Actual Income (Low Workability): ₹250  

Loss = ₹550 → Auto Payout Triggered  

👉 Claim is triggered when:

Workability Score < Threshold (e.g., 40)

---

## 🔁 System Workflow

User → Data Collection → Workability Engine → Income Prediction → Fraud Detection → Decision Engine → Instant Payout  

### Breakdown:

- Data Collection: Weather, AQI, location  
- Workability Engine: Converts real-world conditions → score  
- Income Model: Predicts expected vs actual earnings  
- Fraud Detection: Multi-signal validation  
- Decision Engine: Auto payout / verify  

---

## 🌦️ Workability Computation

We compute workability using:

- Rainfall  
- Temperature  
- AQI  

Example logic:

- High rain reduces mobility  
- Extreme heat reduces working hours  
- High AQI reduces outdoor activity  

Final Output:

Workability Score: 0–100  

---

## ⚡ Parametric Triggers (Reframed)

Instead of directly triggering on events:

| Condition | Effect |
|----------|--------|
| Rain > 30mm | Workability drops |
| Temp > 44°C | Workability drops |
| AQI > 200 | Workability drops |
| Flood | Workability near zero |

👉 Final trigger = Low Workability

---

## 💰 Weekly Premium Model

| Plan | Premium | Max Payout | Coverage |
|------|--------|-----------|----------|
| Basic | ₹29 | ₹1,500 | Low Workability Events |
| Standard | ₹59 | ₹3,000 | Multi-factor disruptions |
| Premium | ₹99 | ₹6,000 | Full adaptive coverage |

Premiums are dynamically adjusted using AI.

---

## 🤖 AI/ML Integration

- Workability Model: Converts environment → work capacity  
- Income Predictor: Estimates earnings drop  
- Dynamic Pricing (XGBoost): Personalized premiums  
- Fraud Detection (Isolation Forest): Detect anomalies  
- Risk Forecasting: Predict disruptions  

---

## 🛡️ Intelligent Fraud Detection

We treat fraud as a multi-signal inconsistency problem.

### Real Worker Signals:
- Irregular GPS movement  
- Network fluctuations  
- Behavioral consistency  

### Suspicious Patterns:
- Static GPS  
- No movement  
- Repeated identical claims  

---

## 📊 Multi-Signal Validation

We validate claims using:

- GPS patterns  
- Network signals  
- App activity  
- Behavioral history  

---

## ⚡ Risk Scoring System

Each claim gets a risk score:

- 0–35 → Instant payout  
- 36–70 → Light verification  
- 71–100 → Flagged  

We maintain a trust score per worker.

---

## 🧠 Fraud Ring Detection

We detect coordinated attacks using:

- Claim timing clusters  
- Device/network similarity  
- Behavioral patterns  

---

## ⚖️ Smart UX Design

- Low risk → Instant payout  
- Medium risk → Quick verification  
- High risk → Review  

No friction for genuine users. Strong protection against fraud.

---

## 🧱 Tech Stack

- Frontend: React / Streamlit  
- Backend: FastAPI  
- Database: PostgreSQL  
- ML: Scikit-learn, XGBoost  
- APIs: Weather, AQI  
- Payments: Razorpay (Test Mode)  

---

## 🚀 What Makes StormShield Unique

- Workability-based insurance (not event-based)  
- Personalized income protection  
- Outcome-driven payouts  
- Strong fraud resistance  
- Real-world behavioral modeling  

---

## 🚀 Future Scope

- Real-time workability prediction  
- Edge AI fraud detection  
- Telecom-level verification  
- Deep learning-based models  

---

## 👥 Team Titans

- Sanjay Krishna C — System Design & AI Integration  
- Visvanth R — Backend Development  
- Jude Athin VS — Frontend & UX  
- Dinesh M — Data & API Integration  
- Sakthivel V — Research & Testing  

---

## 📎 Demo & Repository

GitHub: https://github.com/Sanjay-krishna-C/stormsafe-insurance  
Demo: (Add your demo link here)  

---

## 🧠 Final Note

StormShield shifts from event-based insurance to outcome-based protection.

We don’t just detect disruptions.  
We measure how they impact a worker’s ability to earn — and insure that.
=======
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
>>>>>>> master
