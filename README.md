# ⚡ StormShield — AI-Powered Parametric Income Protection for Gig Workers

Guidewire DEVTrails 2026 · Phase 1 Submission  
Team: **Team Titans**

---

## 📌 Problem Statement

India has over 15 million gig delivery workers (Zomato, Swiggy, Blinkit, Amazon Flex). Their income is highly dependent on external conditions like weather, pollution, and local disruptions.

A single cyclone or flood can wipe out ₹1,000–₹2,000 of weekly income — with **zero financial protection**.

Existing insurance systems fail because:
- They require manual claims ❌  
- They are slow ❌  
- They are not designed for gig-based income ❌  

---

## 💡 Our Solution

**StormShield** is an AI-powered parametric insurance platform that provides **instant payouts** to gig workers when real-world disruptions occur.

Instead of manual claims, payouts are triggered automatically based on:
- Weather conditions  
- AQI levels  
- Flood data  
- Platform outages  

⚡ Fast  
⚡ Automatic  
⚡ Fraud-resistant  

---

## 🔁 System Workflow

User Device → Data Collection → Disruption Detection → Fraud Detection → Risk Scoring → Decision Engine → Payout

### Breakdown:
- **Data Collection:** GPS, device sensors, network signals  
- **Disruption Detection:** Weather + AQI APIs  
- **Fraud Detection:** Multi-signal validation  
- **Risk Scoring:** Assigns fraud probability  
- **Decision Engine:** Approve / Verify / Hold  

---

## 💰 Weekly Premium Model

| Plan | Premium | Max Payout | Coverage |
|------|--------|-----------|----------|
| Basic | ₹29 | ₹1,500 | Rain |
| Standard | ₹59 | ₹3,000 | Rain + AQI |
| Premium | ₹99 | ₹6,000 | All triggers |

Premiums are deducted weekly via UPI autopay.

---

## 🌦️ Parametric Triggers

| Trigger | Condition |
|--------|----------|
| Heavy Rain | >30mm in 3 hours |
| Flood | Water level > 0.5m |
| Heat | >44°C |
| AQI | >200 |
| Platform Outage | >2 hours |

---

## 🤖 AI/ML Integration

- **Dynamic Pricing Model (XGBoost):** Personalized premiums  
- **Fraud Detection (Isolation Forest):** Detect anomalies  
- **Risk Forecasting (Time Series):** Predict disruptions  
- **Behavior Analysis:** Understand user patterns  

---

## 🛡️ Adversarial Defense & Anti-Spoofing Strategy

### 🔍 Differentiation (Real vs Fake)

We treat fraud detection as a **multi-signal consistency problem**.

A real worker shows:
- Irregular movement  
- Network instability  
- Real-world disruption patterns  

A spoofed user shows:
- Static or smooth GPS  
- No physical movement  
- Data inconsistencies  

---

### 📊 Multi-Signal Validation

We validate claims using:

- **IMU Sensors:** Detect real movement  
- **Cell Tower Data:** Cross-check location  
- **Network Signals:** Latency + signal drops  
- **App Usage:** Active vs background behavior  
- **Behavior History:** Past activity patterns  

---

### ⚡ Risk Scoring System

Each claim is scored (0–100):

- 0–35 → Instant payout  
- 36–70 → Light verification  
- 71–100 → Flagged for review  

We also maintain a **trust score** per user to reward genuine workers.

---

### 🧠 Fraud Ring Detection

We detect coordinated attacks using:

- Claim timing clusters  
- Similar device/network signatures  
- Unusual group behavior  

This prevents large-scale fraud attacks.

---

### ⚖️ UX Balance

We use **progressive verification**:

- Low risk → Instant payout  
- Medium risk → OTP / quick check  
- High risk → Delayed review  

👉 No harsh penalties for genuine users  
👉 Security without friction  

---

## 🧱 Tech Stack

- Frontend: React.js  
- Backend: Node.js / FastAPI  
- Database: PostgreSQL  
- AI/ML: PyTorch, Scikit-learn  
- APIs: Weather, AQI  
- Hosting: Vercel / Railway  

---

## 🚀 Future Scope

- Real-time fraud clustering  
- Edge AI validation on device  
- Telecom-level location verification  
- Advanced deep learning models  

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
Demo: (Link provided in submission)

---

## 🧠 Final Note

StormShield is designed to be **fast, fair, and fraud-resistant**, ensuring gig workers receive the financial protection they deserve — even in adversarial conditions.
