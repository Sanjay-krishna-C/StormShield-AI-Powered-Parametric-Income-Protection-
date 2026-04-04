import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

print("🔥 NEW CODE LOADED")

# ✅ Absolute path setup
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, "../frontend")

# ✅ Serve frontend
app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")


@app.get("/")
def serve_ui():
    return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))


# ---------------- LOGIC ----------------

def compute_workability(temp, rainfall, aqi):
    score = 100

    # 🔥 Stronger impact (so payout actually happens)
    if temp > 35:
        score -= (temp - 35) * 3

    if rainfall > 10:
        score -= rainfall * 0.7

    if aqi > 150:
        score -= (aqi - 150) * 0.2

    return max(0, min(100, score))


def predict_income(workability, base_income=800):
    return (workability / 100) * base_income


@app.get("/simulate/{city}")
def simulate(city: str):

    # 🎯 Scenario presets
    if city.lower() == "cbe flood":
        temp = 50
        rainfall = 100
        aqi = 400
    elif city.lower() == "heatwave":
        temp = 45
        rainfall = 2
        aqi = 180
    elif city.lower() == "pollution":
        temp = 32
        rainfall = 0
        aqi = 350
    else:
        temp = 35
        rainfall = 5
        aqi = 150

    # 🧠 Core calculations
    workability = compute_workability(temp, rainfall, aqi)

    expected_income = predict_income(100)
    actual_income = predict_income(workability)
    income_loss = expected_income - actual_income

    # 🔥 FIXED THRESHOLD (more realistic demo)
    THRESHOLD = 60
    claim_triggered = workability < THRESHOLD

    # 🧠 Risk classification
    if workability < 20:
        risk_level = "Extreme"
    elif workability < 40:
        risk_level = "High"
    elif workability < 70:
        risk_level = "Moderate"
    else:
        risk_level = "Low"

    # 🧠 Primary factor
    factors = []
    if rainfall > 50:
        factors.append("Heavy Rainfall")
    if temp > 40:
        factors.append("Extreme Heat")
    if aqi > 300:
        factors.append("Hazardous AQI")

    primary_factor = " + ".join(factors) if factors else "Normal Conditions"

    # 💰 CLEAN payout logic
    if claim_triggered:
        payout_amount = int(income_loss)
        payout = f"₹{payout_amount} credited 💰"
    else:
        payout_amount = 0
        payout = "No payout — safe conditions"

    return {
        "city": city,

        "weather": {
            "temperature": temp,
            "rainfall": rainfall,
            "aqi": aqi
        },

        "risk_analysis": {
            "workability_score": round(workability, 2),
            "risk_level": risk_level,
            "primary_factor": primary_factor
        },

        "income": {
            "expected": round(expected_income, 2),
            "actual": round(actual_income, 2),
            "loss": round(income_loss, 2)
        },

        "insurance_decision": {
            "claim_triggered": claim_triggered,
            "payout_amount": payout_amount,
            "status": payout,
            "reason": (
                f"Workability below {THRESHOLD}"
                if claim_triggered
                else "Conditions are safe"
            )
        }
    }