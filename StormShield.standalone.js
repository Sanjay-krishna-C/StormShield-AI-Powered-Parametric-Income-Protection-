// ============================================================
// StormShield: Integrated Live Simulation + Dashboard
// ============================================================

const { useState, useEffect } = React;

// 🎨 PREMIUM STYLING
const CSS = `
:root {
  --ink: #080d14; --ink2: #0e1521; --sn: #1a2333; --sn2: #253145; --sn3: #64748b; --sn4: #334155; 
  --bd: #1e293b; --bd2: #334155; --amber: #fbbf24; --jade: #10b981; --rouge: #f43f5e; --cyan: #06b6d4;
  --ff-d: 'JetBrains Mono', monospace; --ff-m: 'DM Sans', sans-serif;
}
body { background: var(--ink); color: white; font-family: var(--ff-m); margin: 0; }
.app-container { min-height: 100vh; background: radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 40%); }
.nav { position: fixed; top: 0; width: 100%; height: 70px; background: rgba(8, 13, 20, 0.8); backdrop-filter: blur(12px); border-bottom: 1px solid var(--bd); display: flex; align-items: center; padding: 0 2rem; box-sizing: border-box; z-index: 1000; justify-content: space-between; }
.nav-logo { font-family: var(--ff-d); font-weight: 800; font-size: 1.2rem; cursor: pointer; letter-spacing: -1px; }
.nav-logo span { color: var(--amber); }
.nl { padding: 0.5rem 1rem; color: var(--sn3); cursor: pointer; background: none; border: none; font-size: 0.9rem; transition: 0.2s; }
.nl:hover, .nl.on { color: white; }
.cta-btn { background: var(--amber); color: var(--ink); border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.3s; font-family: var(--ff-d); }
.cta-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(251, 191, 36, 0.3); }
.card { background: var(--sn2); border: 1px solid var(--bd); border-radius: 12px; transition: 0.3s; }
.card:hover { border-color: var(--sn4); }
.badge { padding: 4px 10px; border-radius: 100px; font-size: 10px; font-weight: bold; font-family: var(--ff-d); letter-spacing: 0.5px; text-transform: uppercase; }
.badge-safe { background: rgba(16, 185, 129, 0.1); color: var(--jade); border: 1px solid rgba(16, 185, 129, 0.2); }
.badge-alert { background: rgba(244, 63, 94, 0.1); color: var(--rouge); border: 1px solid rgba(244, 63, 94, 0.2); animation: pulse 1.5s infinite; }
.badge-live { background: rgba(6, 182, 212, 0.1); color: var(--cyan); border: 1px solid rgba(6, 182, 212, 0.2); }
@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.6; } 100% { opacity: 1; } }
.hero { padding: 150px 2rem 100px; text-align: center; max-width: 900px; margin: 0 auto; }
.hero h1 { font-family: 'Bebas Neue', sans-serif; font-size: 5rem; line-height: 0.9; margin-bottom: 2rem; color: white; }
.hero p { color: var(--sn3); font-size: 1.2rem; margin-bottom: 3rem; line-height: 1.6; }
`;

// 📊 DUMMY DATA
const CURRENT_USER = { name: "Sanjay", initials: "S", plan: "Gold", weeklyPremium: 149, maxWeeklyPayout: 12000 };
const ACTIVE_ALERT = { type: "Heavy Rain", rainfallMm: 0, active: false };
const FRAUD_SIGNALS = [
  { id: 1, name: "Device ID Consistency", status: "Pass", score: 98 },
  { id: 2, name: "GPS Jump Detection", status: "Pass", score: 95 },
  { id: 3, name: "Network Origin Analysis", status: "Warning", score: 62 },
  { id: 4, name: "Behavioral Biometrics", status: "Pass", score: 89 }
];
const WEEKLY_EARNINGS = [
  { week: "Mon", earned: 4200, protected: 3800 },
  { week: "Tue", earned: 3100, protected: 3800 },
  { week: "Wed", earned: 3900, protected: 3800 },
  { week: "Thu", earned: 4500, protected: 3800 },
  { week: "Fri", earned: 3600, protected: 3800 },
  { week: "Sat", earned: 4800, protected: 3800 },
  { week: "Sun", earned: 4100, protected: 3800 }
];

function App() {
  const [page, setPage] = useState("landing");
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null); // Active Simulation Data

  // 🔥 THE LIVE SIMULATION ENGINE
  const runSimulation = async () => {
    try {
      setLoading(true);
      const city = "Chennai";

      console.log("🚀 Calling API...");

      const res = await fetch(`/simulate/${city}`);
      console.log("✅ Response received:", res);

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();
      console.log("📦 Data:", data);

      setApiData(data);
      setLoading(false);
      setPage("dashboard");

    } catch (err) {
      console.error("❌ Simulation Failed:", err);
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <style>{CSS}</style>

      {/* 🧭 NAVIGATION */}
      <nav className="nav">
        <div className="nav-logo" onClick={() => setPage("landing")}>
          STORM<span>SHIELD</span> ⚡
        </div>
        <div className="nav-links" style={{ display: "flex", gap: "1rem" }}>
          <button className={`nl ${page === 'dashboard' ? 'on' : ''}`} onClick={() => setPage("dashboard")}>Dashboard</button>
          <button className={`nl ${page === 'fraud' ? 'on' : ''}`} onClick={() => setPage("fraud")}>Fraud Shield</button>
          <button
            className="cta-btn"
            onClick={runSimulation}
            style={{ background: loading ? "var(--ink4)" : "var(--amber)" }}
          >
            {loading ? "SIMULATING..." : "RUN LIVE SIM 🚀"}
          </button>
        </div>
      </nav>

      {/* 🚀 PAGE ROUTING */}
      {page === "landing" && <Landing nav={setPage} onSimulate={runSimulation} loading={loading} />}
      {page === "dashboard" && (
        <Dashboard
          user={CURRENT_USER}
          activeAlert={apiData ? {
            ...ACTIVE_ALERT,
            rainfallMm: apiData.rainfall || 42,
            active: apiData.claim_triggered
          } : ACTIVE_ALERT}
          liveResult={apiData}
        />
      )}
      {page === "fraud" && <FraudCenter signals={FRAUD_SIGNALS} />}
    </div>
  );
}

// ── DASHBOARD COMPONENT (WITH GRAPH & LIVE DATA) ──────────────────
function Dashboard({ user, activeAlert, liveResult }) {
  return (
    <main style={{ paddingTop: 80, padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div className="fu" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "2rem" }}>

        {/* LEFT COLUMN: CHARTS & ALERTS */}
        <div>
          <SectionLabel>Live Environmental Feed</SectionLabel>
          <div className="card" style={{ padding: "1.5rem", marginBottom: "2rem", borderLeft: `4px solid ${activeAlert.active ? 'var(--amber)' : 'var(--jade)'}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontFamily: "var(--ff-d)", letterSpacing: "1px" }}>
                {liveResult ? `SIMULATION: ${liveResult.city}` : "REGIONAL STATUS"}
              </h2>
              <Badge type={activeAlert.active ? "alert" : "safe"}>
                {activeAlert.active ? "DISRUPTION DETECTED" : "SYSTEM STABLE"}
              </Badge>
            </div>

            {/* THE GRAPH */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "150px", marginTop: "2rem", borderBottom: "1px solid var(--bd2)" }}>
              {WEEKLY_EARNINGS.map((d, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                  <div style={{ width: "100%", background: "var(--sn4)", height: "100px", borderRadius: "4px", position: "relative", overflow: "hidden" }}>
                    <div style={{
                      position: "absolute", bottom: 0, width: "100%",
                      background: "var(--cyan)",
                      height: `${(d.earned / 5000) * 100}%`,
                      transition: "height 1s ease"
                    }} />
                    <div style={{
                      position: "absolute", bottom: 0, width: "100%",
                      borderTop: "2px dashed var(--amber)",
                      height: `${(d.protected / 5000) * 100}%`
                    }} />
                  </div>
                  <span style={{ fontSize: "10px", color: "var(--sn3)", fontFamily: "var(--ff-m)" }}>{d.week}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "12px", color: "var(--sn3)", marginTop: "10px", textAlign: "center" }}>
              <span style={{ color: "var(--cyan)" }}>■</span> Actual Income vs <span style={{ color: "var(--amber)" }}>--</span> StormShield Protected Floor
            </p>
          </div>

          {/* LIVE API DATA CARDS */}
          {liveResult && (
            <div className="fu" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="card" style={{ padding: "1rem", background: "rgba(16,185,129,0.05)" }}>
                <p style={{ color: "var(--sn3)", fontSize: "11px" }}>PAYOUT STATUS</p>
                <h3 style={{ color: "var(--jade)" }}>
                  {liveResult.insurance_decision?.status || "—"}
                </h3>
              </div>
              <div className="card" style={{ padding: "1rem", background: "rgba(244,63,94,0.05)" }}>
                <p style={{ color: "var(--sn3)", fontSize: "11px" }}>INCOME LOSS</p>
                <h3 style={{ color: "var(--rouge)" }}>
                  ₹{liveResult.income?.loss || 0}
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: USER PROFILE */}
        <aside>
          <SectionLabel>Protection Plan</SectionLabel>
          <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
            <div style={{ width: 60, height: 60, background: "var(--amber)", borderRadius: "50%", margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold", color: "var(--ink)" }}>
              {user.initials}
            </div>
            <h3 style={{ marginBottom: ".2rem" }}>{user.name}</h3>
            <Badge type="live">{user.plan} Member</Badge>
            <hr style={{ margin: "1.5rem 0", borderColor: "var(--bd)" }} />
            <div style={{ textAlign: "left", fontSize: "13px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".5rem" }}>
                <span style={{ color: "var(--sn3)" }}>Weekly Premium</span>
                <span>₹{user.weeklyPremium}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--sn3)" }}>Max Payout</span>
                <span>₹{user.maxWeeklyPayout}</span>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </main >
  );
}

// ── UI HELPERS ──────────────────────────────────────────────────
function SectionLabel({ children }) {
  return <div style={{ color: "var(--sn3)", fontSize: "12px", fontFamily: "var(--ff-d)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>{children}</div>;
}

function Badge({ type, children }) {
  const cls = type === 'alert' ? 'badge-alert' : type === 'live' ? 'badge-live' : 'badge-safe';
  return <span className={`badge ${cls}`}>{children}</span>;
}

// ── LANDING PAGE ───────────────────────────────────────────────
function Landing({ nav, onSimulate, loading }) {
  return (
    <div className="hero">
      <Badge type="live">Guidewire DEVTrails 2026</Badge>
      <h1>PARAMETRIC<br />TRUST ENGINE</h1>
      <p>Automatic payouts for delivery partners during extreme weather. No claims adjustment. No paperwork. Just resilience built on live data.</p>
      <button className="cta-btn" onClick={onSimulate} style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
        {loading ? "INITIALIZING SIM..." : "EXPLORE THE PLATFORM ⚡"}
      </button>
    </div>
  );
}

// ── FRAUD CENTER ───────────────────────────────────────────────
function FraudCenter({ signals }) {
  return (
    <div style={{ paddingTop: 100, maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
      <SectionLabel>Anti-Fraud Layer</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
        {signals.map(s => (
          <div key={s.id} className="card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>{s.name}</span>
              <Badge type={s.status === 'Pass' ? 'safe' : 'alert'}>{s.status}</Badge>
            </div>
            <div style={{ height: "4px", background: "var(--sn)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${s.score}%`, background: s.score > 80 ? "var(--jade)" : "var(--amber)" }} />
            </div>
            <p style={{ color: "var(--sn3)", fontSize: "11px", marginTop: "1rem" }}>Trust Confidence Index: {s.score}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}