// ============================================================
//  data.js — ALL DUMMY DATA FOR STORMSHIELD
//  Replace each section with your real API responses later.
// ============================================================

// ── CURRENT LOGGED-IN USER ──────────────────────────────────
// TODO: Replace with /api/auth/me response
const CURRENT_USER = {
  id: "USR-4891",
  name: "Rajan Subramaniam",
  initials: "RS",
  phone: "+91 98765 43210",
  upiId: "rajan.s@upi",
  platform: "Zomato",
  zone: "T. Nagar, Chennai",
  pincode: "600017",
  memberSince: "Jul 2025",
  plan: "Standard",           // "Basic" | "Standard" | "Premium"
  planColor: "#f59e0b",
  weeklyPremium: 59,
  maxWeeklyPayout: 3000,
  usedPayout: 2340,
  coverageStart: "Mar 1, 2026",
  coverageRenews: "Mar 22, 2026",
  daysToRenewal: 3,
};

// ── RISK & TRUST SCORES ────────────────────────────────────
// TODO: Replace with /api/user/risk-score response
const RISK_PROFILE = {
  riskScore: 82,           // 0-100 (higher = safer)
  trustScore: 96,          // 0-100 (higher = more trusted)
  riskLevel: "Low",        // "Low" | "Medium" | "High"
  premiumDiscount: 10,     // ₹ discount applied due to clean record
  cleanMonths: 8,          // consecutive months without fraud flag
  zoneAvgRisk: 74,
  fraudFlags: 0,
  gpsScore: 96,
  peerConsensus: true,
  lastUpdated: "Just now",
};

// ── ACTIVE WEATHER ALERT ───────────────────────────────────
// TODO: Replace with /api/weather/alert?zone=600017
const ACTIVE_ALERT = {
  active: true,
  type: "Heavy Rain",
  severity: "alert",        // "safe" | "alert" | "severe"
  location: "T. Nagar, Chennai",
  rainfallMm: 42,
  thresholdMm: 50,
  aqi: 187,
  windKmh: 28,
  tempC: 38,
  progressPct: 84,          // how close to threshold
  sources: ["IMD", "OpenWeather", "CPCB"],
  detectedAt: "2026-03-15T14:32:00",
};

// ── ACTIVE CLAIM ───────────────────────────────────────────
// TODO: Replace with /api/claims/active
const ACTIVE_CLAIM = {
  id: "SS-2026-03-15-4891",
  status: "Processing",     // "Detected" | "Verifying" | "Approved" | "Processing" | "Paid"
  event: "Heavy Rain",
  amount: 1200,
  location: "T. Nagar, Chennai",
  date: "Mar 15, 2026",
  estimatedMinutes: 14,
  upiId: "rajan.s@upi",
  plan: "Standard Shield",
  steps: [
    { label: "Disruption Detected", done: true,  active: false },
    { label: "AI Verification",     done: true,  active: false },
    { label: "Claim Approved",      done: true,  active: false },
    { label: "UPI Processing",      done: false, active: true  },
    { label: "Paid",                done: false, active: false },
  ],
};

// ── CLAIM HISTORY ──────────────────────────────────────────
// TODO: Replace with /api/claims/history?userId=USR-4891
const CLAIM_HISTORY = [
  { id:"CLM-001", date:"Mar 15", event:"Heavy Rain — Chennai",   amount: 1200,  type:"credit",  status:"paid"    },
  { id:"CLM-002", date:"Mar 10", event:"AQI Spike >300",         amount:  800,  type:"credit",  status:"paid"    },
  { id:"CLM-003", date:"Mar 08", event:"Weekly Premium Debit",   amount:   59,  type:"debit",   status:"auto"    },
  { id:"CLM-004", date:"Mar 03", event:"Local Transport Strike", amount:  600,  type:"credit",  status:"pending" },
  { id:"CLM-005", date:"Feb 27", event:"Flood Alert — Adyar",    amount: 1500,  type:"credit",  status:"paid"    },
  { id:"CLM-006", date:"Feb 20", event:"Weekly Premium Debit",   amount:   59,  type:"debit",   status:"auto"    },
  { id:"CLM-007", date:"Feb 14", event:"Extreme Heat >44°C",     amount:  800,  type:"credit",  status:"paid"    },
  { id:"CLM-008", date:"Feb 08", event:"Weekly Premium Debit",   amount:   59,  type:"debit",   status:"auto"    },
];

// ── WEEKLY EARNINGS CHART DATA ─────────────────────────────
// TODO: Replace with /api/user/earnings?weeks=8
const WEEKLY_EARNINGS = [
  { week:"W1", earned:4200, protected:4200 },
  { week:"W2", earned:3600, protected:3600 },
  { week:"W3", earned:2200, protected:3000 },  // disruption week
  { week:"W4", earned:4500, protected:4500 },
  { week:"W5", earned:2750, protected:3000 },  // disruption week
  { week:"W6", earned:4000, protected:4000 },
  { week:"W7", earned:1500, protected:3000 },  // disruption week
  { week:"W8", earned:4750, protected:4750 },
];

// ── DISRUPTION MIX (PIE CHART) ─────────────────────────────
// TODO: Replace with /api/analytics/disruption-mix
const DISRUPTION_MIX = [
  { label:"Heavy Rain", pct:42, color:"#f59e0b" },
  { label:"AQI Spike",  pct:26, color:"#06b6d4" },
  { label:"Curfew",     pct:18, color:"#10b981" },
  { label:"Heat",       pct:14, color:"#f43f5e" },
];

// ── DASHBOARD SUMMARY METRICS ──────────────────────────────
// TODO: Replace with /api/user/summary
const SUMMARY_METRICS = {
  incomeProtected: 14200,   // ₹ this month
  claimsPaid: 3400,         // ₹ total paid out
  claimsCount: 3,
  weeklyPremium: 59,
  riskLevel: "Low Risk",
};

// ── FRAUD DETECTION SIGNALS ────────────────────────────────
// TODO: Replace with /api/fraud/signals?claimId=SS-2026-03-15-4891
const FRAUD_SIGNALS = [
  {
    icon: "📍",
    name: "GPS Location",
    desc: "Real-time coordinates matched against disruption zones. Spoofing detected via sensor fusion with IMU data.",
    accuracy: 96,
    strength: 5,
    color: "#10b981",
    status: "Verified",
    detail: "Lat 13.0418° N, Lng 80.2341° E — Zone match confirmed",
  },
  {
    icon: "📡",
    name: "Cell Tower",
    desc: "Cross-validates GPS via carrier network triangulation. Catches VPN tunneling and location mock apps instantly.",
    accuracy: 91,
    strength: 4,
    color: "#06b6d4",
    status: "Verified",
    detail: "3 towers triangulated · BSNL Chennai cluster",
  },
  {
    icon: "🏃",
    name: "IMU Sensors",
    desc: "Accelerometer + gyroscope detect real delivery movement. Idle or stationary workers cannot trigger claims.",
    accuracy: 88,
    strength: 5,
    color: "#f59e0b",
    status: "Verified",
    detail: "Motion pattern: active delivery · 12 km/h avg",
  },
  {
    icon: "📊",
    name: "Platform API",
    desc: "Zomato/Swiggy API confirms you were on an active order during the event. Real-time cross-check with platform.",
    accuracy: 99,
    strength: 5,
    color: "#10b981",
    status: "Verified",
    detail: "Zomato: 2 active orders during event window",
  },
  {
    icon: "👥",
    name: "Peer Density",
    desc: "If nearby riders also triggered claims, it confirms a genuine disruption. Lone claims are flagged for review.",
    accuracy: 85,
    strength: 4,
    color: "#06b6d4",
    status: "Verified",
    detail: "47 riders in zone triggered claims — consensus ✓",
  },
];

// ── ATTACK VECTORS BLOCKED ─────────────────────────────────
// TODO: This is static config — no API needed
const ATTACK_VECTORS = [
  { type:"GPS Mock App",         status:"Blocked",  count: 1243 },
  { type:"VPN Tunneling",        status:"Blocked",  count:  876 },
  { type:"Coordinated Ring",     status:"Flagged",  count:   34 },
  { type:"Timing Anomaly",       status:"Flagged",  count:  128 },
  { type:"Device Cloning",       status:"Blocked",  count:   19 },
  { type:"Network Spoofing",     status:"Blocked",  count:  302 },
];

// ── COORDINATED FRAUD CLUSTERS (MAP DATA) ─────────────────
// TODO: Replace with /api/fraud/clusters
const FRAUD_CLUSTERS = [
  { id:"CLT-01", zone:"Adyar",      claims:12, flagged:11, risk:"High",   pattern:"Same device fingerprint" },
  { id:"CLT-02", zone:"Velachery",  claims: 8, flagged: 3, risk:"Medium", pattern:"Timing correlation"      },
  { id:"CLT-03", zone:"Anna Nagar", claims:22, flagged: 1, risk:"Low",    pattern:"Genuine weather event"   },
];

// ── PRICING PLANS ──────────────────────────────────────────
// TODO: Replace with /api/plans (if dynamic pricing)
const PLANS = [
  {
    id: "basic",
    name: "Basic",
    weeklyPrice: 29,
    maxPayout: 1500,
    color: "#06b6d4",
    stars: 3,
    featured: false,
    triggerCount: 2,
    rainThreshold: ">50mm",
    aqiCoverage: false,
    gpsFraudShield: false,
    avgClaimSpeed: "25 min",
    features: [
      { ok: true,  text: "Heavy rain (>50mm) trigger"    },
      { ok: true,  text: "Flood zone coverage"            },
      { ok: true,  text: "UPI instant payout"             },
      { ok: false, text: "AQI pollution coverage"         },
      { ok: false, text: "Curfew / strike protection"     },
      { ok: false, text: "GPS fraud shield"               },
      { ok: false, text: "Predictive weather alerts"      },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    weeklyPrice: 59,
    maxPayout: 3000,
    color: "#f59e0b",
    stars: 4,
    featured: true,
    triggerCount: 4,
    rainThreshold: ">30mm",
    aqiCoverage: true,
    gpsFraudShield: false,
    avgClaimSpeed: "18 min",
    features: [
      { ok: true,  text: "All rain + flood triggers"      },
      { ok: true,  text: "AQI >200 pollution trigger"     },
      { ok: true,  text: "Extreme heat (>44°C)"           },
      { ok: true,  text: "Curfew & zone lockdowns"        },
      { ok: true,  text: "18-min UPI auto-payout"         },
      { ok: false, text: "GPS fraud shield"               },
      { ok: false, text: "Predictive weather alerts"      },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    weeklyPrice: 99,
    maxPayout: 6000,
    color: "#10b981",
    stars: 5,
    featured: false,
    triggerCount: 8,
    rainThreshold: ">20mm",
    aqiCoverage: true,
    gpsFraudShield: true,
    avgClaimSpeed: "10 min",
    features: [
      { ok: true,  text: "All weather disruptions"        },
      { ok: true,  text: "Full AQI + pollution cover"     },
      { ok: true,  text: "Curfews, strikes & closures"    },
      { ok: true,  text: "GPS fraud shield included"      },
      { ok: true,  text: "Priority 10-min processing"     },
      { ok: true,  text: "Predictive weather alerts"      },
      { ok: true,  text: "Annual earnings report"         },
    ],
  },
];

// ── DATA SOURCE VERIFICATION ───────────────────────────────
// TODO: Replace with /api/claims/:id/sources
const DATA_SOURCES = [
  {
    icon: "🌧️",
    name: "IMD Weather API",
    value: "42.3mm",
    subtext: "3-hour rainfall — threshold 50mm",
    verified: true,
    latency: "1.2s",
  },
  {
    icon: "💨",
    name: "CPCB AQI Feed",
    value: "AQI 187",
    subtext: "Moderate — threshold 200",
    verified: true,
    latency: "0.8s",
  },
  {
    icon: "📍",
    name: "GPS + IMU Check",
    value: "Zone Match",
    subtext: "T. Nagar active delivery confirmed",
    verified: true,
    latency: "0.3s",
  },
  {
    icon: "📱",
    name: "Platform API",
    value: "Active Order",
    subtext: "Zomato order #ZMT-88231 in progress",
    verified: true,
    latency: "0.5s",
  },
];

// ── PLATFORM PARTNERS ──────────────────────────────────────
// TODO: Static — update as you onboard real partners
const PARTNERS = [
  { name:"Zomato",       emoji:"🍔" },
  { name:"Swiggy",       emoji:"🛵" },
  { name:"Amazon Flex",  emoji:"📦" },
  { name:"Zepto",        emoji:"⚡" },
  { name:"Blinkit",      emoji:"🥦" },
  { name:"Dunzo",        emoji:"🚲" },
  { name:"Flipkart",     emoji:"🏪" },
];

// ── GLOBAL STATS (landing page counters) ──────────────────
// TODO: Replace with /api/stats/global
const GLOBAL_STATS = {
  workersProtected: 3.2,    // in lakhs
  autoPayoutRate: 98.4,     // percentage
  claimsDisbursedCr: 840,   // in crores ₹
  avgPayoutMinutes: 18,
};


﻿// ============================================================
//  App.jsx â€” StormShield Main Application
//  All data comes from ./data.js â€” swap dummy values there.
// ============================================================

const { useState, useEffect } = React;


// â”€â”€ INJECT GLOBAL STYLES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');
:root {
  --ink:#080d14; --ink2:#0c1420; --ink3:#111d2e; --ink4:#162438;
  --amber:#f59e0b; --amb2:#fbbf24; --amb3:#fde68a;
  --cyan:#06b6d4; --cyn2:#22d3ee; --cyn3:#67e8f9;
  --jade:#10b981; --jd2:#34d399;
  --rouge:#f43f5e; --rg2:#fb7185;
  --snow:#f0f6ff; --sn2:rgba(240,246,255,.7); --sn3:rgba(240,246,255,.35);
  --sn4:rgba(240,246,255,.07); --bd:rgba(240,246,255,.07); --bd2:rgba(240,246,255,.13);
  --ff-d:'Bebas Neue',sans-serif; --ff-b:'DM Sans',sans-serif; --ff-m:'JetBrains Mono',monospace;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--ff-b);background:var(--ink);color:var(--snow);overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:var(--ink2)}
::-webkit-scrollbar-thumb{background:var(--ink4);border-radius:99px}

@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(245,158,11,.25)}50%{box-shadow:0 0 44px rgba(245,158,11,.55)}}
@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes radar{0%{transform:scale(.15);opacity:.9}100%{transform:scale(2.2);opacity:0}}
@keyframes borderShine{0%,100%{opacity:.4}50%{opacity:1}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes barIn{from{width:0}to{width:var(--w)}}
@keyframes spin{to{transform:rotate(360deg)}}

.fu {animation:fadeUp .55s cubic-bezier(.16,1,.3,1) both}
.fu1{animation:fadeUp .55s .08s cubic-bezier(.16,1,.3,1) both}
.fu2{animation:fadeUp .55s .16s cubic-bezier(.16,1,.3,1) both}
.fu3{animation:fadeUp .55s .24s cubic-bezier(.16,1,.3,1) both}
.fu4{animation:fadeUp .55s .32s cubic-bezier(.16,1,.3,1) both}

.nav{position:fixed;top:0;left:0;right:0;z-index:300;height:62px;display:flex;align-items:center;
  justify-content:space-between;padding:0 2rem;background:rgba(8,13,20,.92);
  backdrop-filter:blur(20px);border-bottom:1px solid var(--bd)}
.nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--amber) 40%,var(--cyan) 70%,transparent);
  opacity:.5;animation:borderShine 4s ease infinite}
.nav-logo{font-family:var(--ff-d);font-size:1.8rem;letter-spacing:3px;cursor:pointer;color:var(--snow)}
.nav-logo span{color:var(--amber)}
.nl{font-family:var(--ff-m);font-size:11px;letter-spacing:.5px;text-transform:uppercase;
  color:var(--sn3);background:none;border:none;padding:7px 14px;border-radius:6px;cursor:pointer;transition:all .2s}
.nl:hover{color:var(--snow);background:var(--sn4)}
.nl.on{color:var(--amber)}
.cta-btn{font-family:var(--ff-m);font-size:11px;letter-spacing:1px;text-transform:uppercase;
  background:var(--amber);color:var(--ink);border:none;padding:8px 20px;border-radius:6px;
  cursor:pointer;transition:all .2s;box-shadow:0 0 0 1px rgba(245,158,11,.5),0 4px 16px rgba(245,158,11,.3)}
.cta-btn:hover{background:var(--amb2);transform:translateY(-1px)}

.card{background:var(--ink2);border:1px solid var(--bd2);border-radius:14px;
  position:relative;overflow:hidden;transition:border-color .2s,transform .2s}
.card:hover{border-color:rgba(240,246,255,.2)}

.badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--ff-m);
  font-size:10px;letter-spacing:.5px;padding:4px 12px;border-radius:99px}
.badge::before{content:'';width:6px;height:6px;border-radius:50%;flex-shrink:0}
.badge-safe{background:rgba(16,185,129,.1);color:#34d399;border:1px solid rgba(16,185,129,.25)}
.badge-safe::before{background:#10b981;animation:pulse 2s ease infinite}
.badge-alert{background:rgba(245,158,11,.1);color:#fbbf24;border:1px solid rgba(245,158,11,.25)}
.badge-alert::before{background:#f59e0b;animation:pulse 1.5s ease infinite}
.badge-severe{background:rgba(244,63,94,.1);color:#fb7185;border:1px solid rgba(244,63,94,.25)}
.badge-severe::before{background:#f43f5e;animation:pulse 1s ease infinite}
.badge-live{background:rgba(6,182,212,.1);color:#22d3ee;border:1px solid rgba(6,182,212,.25)}
.badge-live::before{background:#06b6d4;animation:pulse 1.5s ease infinite}

.pbar{height:4px;border-radius:99px;background:var(--sn4);overflow:hidden}
.pbar-fill{height:100%;border-radius:99px;animation:barIn .8s cubic-bezier(.16,1,.3,1) both}

.ticker-wrap{overflow:hidden;border-bottom:1px solid var(--bd);background:rgba(12,20,32,.8);padding:9px 0;position:relative}
.ticker-wrap::before,.ticker-wrap::after{content:'';position:absolute;top:0;bottom:0;width:60px;z-index:2}
.ticker-wrap::before{left:0;background:linear-gradient(90deg,rgba(8,13,20,1),transparent)}
.ticker-wrap::after{right:0;background:linear-gradient(-90deg,rgba(8,13,20,1),transparent)}
.ticker-track{display:flex;white-space:nowrap;animation:ticker 30s linear infinite}
.ti{font-family:var(--ff-m);font-size:9.5px;color:var(--sn3);padding:0 1.5rem;
  border-right:1px solid var(--bd);letter-spacing:1px;text-transform:uppercase}
.ti b{color:var(--amber)}

.atmo{position:absolute;pointer-events:none;border-radius:50%;filter:blur(110px);z-index:0}
.grid-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
  background-image:linear-gradient(var(--bd) 1px,transparent 1px),
  linear-gradient(90deg,var(--bd) 1px,transparent 1px);
  background-size:50px 50px;
  mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,black 0%,transparent 100%)}

.sidebar{width:220px;flex-shrink:0;background:var(--ink2);border-right:1px solid var(--bd);
  display:flex;flex-direction:column;position:sticky;top:62px;height:calc(100vh - 62px);overflow-y:auto}
.si{display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:8px;
  font-size:13px;font-weight:500;color:var(--sn3);cursor:pointer;transition:all .15s;margin-bottom:2px}
.si:hover{color:var(--snow);background:var(--sn4)}
.si.on{color:var(--amber);background:rgba(245,158,11,.08)}

.price-card{background:var(--ink2);border:1px solid var(--bd2);border-radius:16px;
  padding:2rem;transition:all .3s;position:relative;overflow:hidden}
.price-card:hover{transform:translateY(-8px);border-color:rgba(240,246,255,.22)}
.price-card.featured{border-color:rgba(245,158,11,.4);
  background:linear-gradient(160deg,rgba(245,158,11,.06) 0%,var(--ink2) 55%)}

.step-dot{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;
  justify-content:center;font-family:var(--ff-m);font-size:11px;transition:all .3s;flex-shrink:0}
.step-done{background:var(--jade);color:var(--ink);box-shadow:0 0 12px rgba(16,185,129,.35)}
.step-active{background:var(--amber);color:var(--ink);box-shadow:0 0 16px rgba(245,158,11,.5);animation:glow 2s ease infinite}
.step-idle{background:var(--sn4);color:var(--sn3);border:1px solid var(--bd2)}

@media(max-width:768px){
  .hero-grid,.plans-grid,.how-grid,.fraud-grid{grid-template-columns:1fr!important}
  .metrics-grid{grid-template-columns:1fr 1fr!important}
  .charts-row,.bottom-row,.det-grid{grid-template-columns:1fr!important}
  .sidebar{display:none}
  .nav-links{display:none}
}
`;

// â”€â”€ SHARED TINY COMPONENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Badge({ type, children }) {
  return <span className={`badge badge-${type}`}>{children}</span>;
}

function ProgressBar({ pct, color = "#f59e0b" }) {
  return (
    <div className="pbar">
      <div className="pbar-fill" style={{ "--w": `${pct}%`, width: `${pct}%`, background: color }} />
    </div>
  );
}

function SectionLabel({ color = "var(--amber)", children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: ".8rem" }}>
      <div style={{ width: 18, height: 1, background: color }} />
      <span style={{ fontFamily: "var(--ff-m)", fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px", color }} >
        {children}
      </span>
    </div>
  );
}

function ClaimStatusBadge({ status }) {
  const MAP = {
    paid:    { bg: "rgba(16,185,129,.1)",  col: "#34d399", bd: "rgba(16,185,129,.25)", label: "Paid"    },
    pending: { bg: "rgba(245,158,11,.1)",  col: "#fbbf24", bd: "rgba(245,158,11,.25)", label: "Pending" },
    auto:    { bg: "rgba(6,182,212,.1)",   col: "#22d3ee", bd: "rgba(6,182,212,.25)",  label: "Auto"    },
  };
  const s = MAP[status] || MAP.pending;
  return (
    <span style={{ fontFamily: "var(--ff-m)", fontSize: "9.5px", padding: "3px 10px", borderRadius: 6, background: s.bg, color: s.col, border: `1px solid ${s.bd}` }}>
      {s.label}
    </span>
  );
}

function SignalBars({ strength = 4, color = "#10b981" }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 20 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} style={{ width: 4, borderRadius: 2, background: color, height: `${i * 20}%`, opacity: i <= strength ? 1 : 0.18 }} />
      ))}
    </div>
  );
}

// â”€â”€ PAGE: LANDING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Landing({ nav }) {
  const [counts, setCounts] = useState({ workers: 0, payout: 0, claims: 0 });

  useEffect(() => {
    let frame, start;
    const run = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCounts({
        workers: (GLOBAL_STATS.workersProtected * e).toFixed(1),
        payout: (GLOBAL_STATS.autoPayoutRate * e).toFixed(1),
        claims: Math.floor(GLOBAL_STATS.claimsDisbursedCr * e),
      });
      if (p < 1) frame = requestAnimationFrame(run);
    };
    const t = setTimeout(() => { frame = requestAnimationFrame(run); }, 500);
    return () => { clearTimeout(t); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--ink)", paddingTop: 62 }}>
      <div className="atmo" style={{ width: 600, height: 600, background: "radial-gradient(circle,rgba(245,158,11,.1) 0%,transparent 70%)", top: -200, right: -100 }} />
      <div className="atmo" style={{ width: 500, height: 500, background: "radial-gradient(circle,rgba(6,182,212,.07) 0%,transparent 70%)", bottom: 0, left: -100 }} />
      <div className="grid-bg" />

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} className="ti"><b>{p.name}</b> {p.emoji}</div>
          ))}
          <div className="ti"><b>IMD</b> Weather API</div>
          <div className="ti"><b>CPCB</b> AQI Feed</div>
          <div className="ti"><b>GPS</b> + IMU Signals</div>
          <div className="ti"><b>UPI</b> Instant Payout</div>
          <div className="ti"><b>AI</b> Risk Engine</div>
          <div className="ti"><b>IMD</b> Weather API</div>
          <div className="ti"><b>CPCB</b> AQI Feed</div>
          <div className="ti"><b>GPS</b> + IMU Signals</div>
          <div className="ti"><b>UPI</b> Instant Payout</div>
          <div className="ti"><b>AI</b> Risk Engine</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4.5rem 2rem 3rem", position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "center" }}>
          <div>
            <div className="fu" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--ff-m)", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--amber)", background: "rgba(245,158,11,.08)", border: "1px solid rgba(245,158,11,.2)", borderRadius: 99, padding: "5px 16px", marginBottom: "1.5rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", animation: "pulse 1.8s ease infinite", display: "inline-block" }} />
              AI-Powered Parametric Insurance Â· Hackathon 2026
            </div>

            <h1 className="fu1" style={{ fontFamily: "var(--ff-d)", fontSize: "clamp(3.2rem,6.5vw,6rem)", letterSpacing: "3px", lineHeight: .95, marginBottom: "1.5rem" }}>
              WHEN THE{" "}
              <span style={{ background: "linear-gradient(90deg,var(--amber),var(--amb3))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>STORM</span>
              {" "}HITS<br />
              <span style={{ color: "var(--cyan)" }}>WE PAY</span> YOU FIRST
            </h1>

            <p className="fu2" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--sn2)", maxWidth: 520, marginBottom: "2.2rem", fontWeight: 300 }}>
              Automatic insurance payouts for delivery workers during severe weather.
              Our <strong style={{ color: "var(--snow)", fontWeight: 500 }}>5-signal fraud detection engine</strong> validates every claim using GPS, IMU sensors, cell towers, platform APIs and peer density â€” <strong style={{ color: "var(--snow)", fontWeight: 500 }}>UPI paid in {GLOBAL_STATS.avgPayoutMinutes} minutes.</strong>
            </p>

            <div className="fu3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: "2.2rem" }}>
              <button onClick={() => nav("dashboard")} className="cta-btn" style={{ padding: "13px 32px", fontSize: "1rem", fontFamily: "var(--ff-d)", letterSpacing: "2px", animation: "glow 3s ease infinite" }}>
                GET PROTECTED
              </button>
              <button onClick={() => nav("pricing")} style={{ fontFamily: "var(--ff-m)", fontSize: 12, letterSpacing: "1px", background: "none", color: "var(--sn2)", border: "1px solid var(--bd2)", padding: "12px 24px", borderRadius: 8, cursor: "pointer", transition: "all .2s", textTransform: "uppercase" }}>
                View Plans â†’
              </button>
            </div>

            <div className="fu4" style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[
                [`${counts.workers}L+`, "Workers Protected", "var(--cyan)"],
                [`${counts.payout}%`, "Auto-Payout Rate", "var(--jade)"],
                [`â‚¹${counts.claims}Cr`, "Claims Disbursed", "var(--amber)"],
              ].map(([v, l, c], i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--ff-d)", fontSize: "2.3rem", letterSpacing: "1px", color: c, lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", textTransform: "uppercase", letterSpacing: "1px", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Live cards column */}
          <div className="fu2" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { badgeType: "alert", badge: "âš  Live Alert", time: "Just now", title: `Heavy Rain â€” ${ACTIVE_ALERT.location}`, sub: `${ACTIVE_ALERT.rainfallMm}mm Â· AQI ${ACTIVE_ALERT.aqi} Â· Threshold ${ACTIVE_ALERT.thresholdMm}mm`, pct: ACTIVE_ALERT.progressPct, barColor: "linear-gradient(90deg,var(--amber),var(--amb3))", anim: "floatY 6s ease-in-out infinite" },
              { badgeType: "safe", badge: "âœ“ Auto-Claim Paid", time: "18 min ago", title: `â‚¹${ACTIVE_CLAIM.amount} via UPI`, titleCol: "var(--jade)", sub: `${CURRENT_USER.name} Â· ${CURRENT_USER.platform} Â· ${CURRENT_USER.zone}`, pct: 100, barColor: "var(--jade)", anim: "floatY 7s 1s ease-in-out infinite" },
              { badgeType: "live", badge: "AI Risk Score", time: "Updated now", title: `${RISK_PROFILE.riskScore} / 100 â€” ${RISK_PROFILE.riskLevel} Risk`, titleCol: "var(--cyan)", sub: `Premium reduced â‚¹${RISK_PROFILE.premiumDiscount}/wk Â· ${RISK_PROFILE.cleanMonths}-month clean record`, pct: RISK_PROFILE.riskScore, barColor: "linear-gradient(90deg,var(--cyan),var(--jade))", anim: "floatY 8s 2s ease-in-out infinite" },
            ].map((c, i) => (
              <div key={i} className="card" style={{ padding: "1.3rem 1.5rem", animation: c.anim, background: "rgba(12,20,32,.95)", backdropFilter: "blur(12px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".7rem" }}>
                  <Badge type={c.badgeType}>{c.badge}</Badge>
                  <span style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)" }}>{c.time}</span>
                </div>
                <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.35rem", letterSpacing: "1px", color: c.titleCol || "var(--snow)", marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 12.5, color: "var(--sn3)", fontWeight: 300 }}>{c.sub}</div>
                <div style={{ height: 2, borderRadius: 99, background: "var(--sn4)", marginTop: 12, overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 99, width: `${c.pct}%`, background: c.barColor }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 2rem 4rem", position: "relative", zIndex: 2 }}>
        <SectionLabel>How It Works</SectionLabel>
        <h2 style={{ fontFamily: "var(--ff-d)", fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "2px", marginBottom: "2.5rem" }}>
          THREE SIGNALS.{" "}
          <span style={{ background: "linear-gradient(90deg,var(--cyan),var(--jade))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            ONE PAYOUT.
          </span>
        </h2>
        <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.2rem" }}>
          {[
            { n: "01", icon: "ðŸŒ§ï¸", title: "Disruption Detected", sub: "IMD + OpenWeather + CPCB cross-validates weather data against your zone in real-time. No manual reporting needed." },
            { n: "02", icon: "ðŸ“¡", title: "5-Signal Validation", sub: "GPS, IMU sensors, cell towers, platform API and peer density all confirm the event is genuine and you were active." },
            { n: "03", icon: "ðŸ¤–", title: "AI Risk Score", sub: "Our fraud detection engine assigns a 0â€“100 risk score. Low risk = instant approval. High risk = flagged for review." },
            { n: "04", icon: "ðŸ’°", title: "UPI Paid Instantly", sub: `â‚¹ transferred directly to your UPI in under ${GLOBAL_STATS.avgPayoutMinutes} minutes. No forms. No phone calls. Ever.` },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "1.8rem", position: "relative" }}>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", letterSpacing: "1px", marginBottom: "1rem" }}>{s.n} / 04</div>
              <div style={{ fontSize: 28, marginBottom: "1rem" }}>{s.icon}</div>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.1rem", letterSpacing: "1px", marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "var(--sn3)", lineHeight: 1.7, fontWeight: 300 }}>{s.sub}</div>
              {i < 3 && (
                <div style={{ position: "absolute", right: -16, top: "50%", transform: "translateY(-50%)", color: "var(--sn3)", fontSize: 18, zIndex: 2 }}>â†’</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS STRIP */}
      <div style={{ borderTop: "1px solid var(--bd)", borderBottom: "1px solid var(--bd)", background: "rgba(12,20,32,.6)", padding: "1.5rem 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", textTransform: "uppercase", letterSpacing: "1.5px", whiteSpace: "nowrap" }}>Partners</span>
          {PARTNERS.map((p, i) => (
            <div key={i} style={{ fontFamily: "var(--ff-b)", fontSize: 13, fontWeight: 500, color: "var(--sn3)", background: "var(--sn4)", border: "1px solid var(--bd)", borderRadius: 8, padding: "6px 16px" }}>
              {p.emoji} {p.name}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg,rgba(245,158,11,.07),rgba(6,182,212,.05))", borderBottom: "1px solid var(--bd)", padding: "5rem 2rem", textAlign: "center", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontFamily: "var(--ff-d)", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "2px", marginBottom: ".8rem" }}>
          READY TO PROTECT YOUR INCOME?
        </h2>
        <p style={{ fontSize: 15, color: "var(--sn3)", marginBottom: "2rem", fontWeight: 300 }}>
          Join {GLOBAL_STATS.workersProtected}L+ delivery partners across India already covered.
        </p>
        <button onClick={() => nav("dashboard")} className="cta-btn" style={{ fontSize: "1.1rem", fontFamily: "var(--ff-d)", letterSpacing: "2px", padding: "14px 40px", animation: "glow 3s ease infinite" }}>
          START FREE TODAY
        </button>
      </div>
    </div>
  );
}

// â”€â”€ PAGE: DASHBOARD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Dashboard({ nav }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--ink)", paddingTop: 62, display: "flex" }}>
      {/* Sidebar */}
      <div className="sidebar">
        <div style={{ padding: "1.4rem 1.2rem 1.2rem", borderBottom: "1px solid var(--bd)", textAlign: "center" }}>
          <div style={{ width: 52, height: 52, borderRadius: 13, background: "linear-gradient(135deg,var(--amber),var(--cyan))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontFamily: "var(--ff-d)", fontSize: 18, color: "var(--ink)", boxShadow: "0 0 0 4px rgba(245,158,11,.15),0 8px 20px rgba(0,0,0,.3)" }}>
            {CURRENT_USER.initials}
          </div>
          <div style={{ fontFamily: "var(--ff-d)", fontSize: 15, letterSpacing: "1px" }}>{CURRENT_USER.name}</div>
          <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", marginTop: 3 }}>{CURRENT_USER.platform} Â· {CURRENT_USER.zone}</div>
          <div style={{ marginTop: 8 }}>
            <Badge type={ACTIVE_ALERT.severity}>Zone {ACTIVE_ALERT.severity === "alert" ? "Alert" : ACTIVE_ALERT.severity === "severe" ? "Severe" : "Safe"}</Badge>
          </div>
        </div>
        <nav style={{ padding: "10px 10px", flex: 1 }}>
          {[["â–¸", "Overview", "dashboard"], ["â–¸", "Claims", "claims"], ["â–¸", "Fraud Shield", "fraud"], ["â–¸", "Pricing", "pricing"]].map(([ico, lbl, pg]) => (
            <div key={pg} onClick={() => nav(pg)} className={`si${pg === "dashboard" ? " on" : ""}`}>
              <span>{ico}</span>{lbl}
            </div>
          ))}
        </nav>
        <div style={{ padding: "1rem 1.2rem", borderTop: "1px solid var(--bd)" }}>
          <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>Current Plan</div>
          <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.4rem", letterSpacing: "1px", color: "var(--amber)" }}>{CURRENT_USER.plan.toUpperCase()}</div>
          <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", marginTop: 3, marginBottom: 10 }}>â‚¹{CURRENT_USER.weeklyPremium}/week Â· Renews {CURRENT_USER.coverageRenews}</div>
          <ProgressBar pct={Math.round((CURRENT_USER.usedPayout / CURRENT_USER.maxWeeklyPayout) * 100)} />
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-m)", fontSize: 9, color: "var(--sn3)", marginTop: 4 }}>
            <span>â‚¹0</span><span>â‚¹{CURRENT_USER.usedPayout} / â‚¹{CURRENT_USER.maxWeeklyPayout}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "1.8rem 2rem", overflowY: "auto" }}>
        {/* Weather alert bar */}
        {ACTIVE_ALERT.active && (
          <div className="fu" style={{ display: "flex", alignItems: "center", gap: 16, padding: "13px 18px", background: "rgba(245,158,11,.06)", border: "1px solid rgba(245,158,11,.2)", borderLeft: "3px solid var(--amber)", borderRadius: 10, marginBottom: "1.4rem" }}>
            <span style={{ fontSize: 24 }}>â›ˆ</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: 15, letterSpacing: "1px", color: "var(--amb2)" }}>
                {ACTIVE_ALERT.type.toUpperCase()} ALERT â€” {ACTIVE_ALERT.location} ({ACTIVE_ALERT.rainfallMm}mm Â· Threshold {ACTIVE_ALERT.thresholdMm}mm)
              </div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10.5, color: "var(--sn3)", marginTop: 3 }}>
                AQI {ACTIVE_ALERT.aqi} Â· Wind {ACTIVE_ALERT.windKmh}km/h Â· Sources: {ACTIVE_ALERT.sources.join(", ")}
              </div>
            </div>
            <button onClick={() => nav("claims")} className="cta-btn">VIEW CLAIM</button>
          </div>
        )}

        {/* Summary metrics */}
        <div className="metrics-grid fu1" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: "1.3rem" }}>
          {[
            { lbl: "Income Protected",   val: `â‚¹${SUMMARY_METRICS.incomeProtected.toLocaleString()}`, delta: "â†‘ This month",         dc: "var(--jade)",  valCol: "var(--snow)",  icon: "â†‘",  ib: "rgba(16,185,129,.1)",  ic: "var(--jade)"  },
            { lbl: "Claims Paid Out",    val: `â‚¹${SUMMARY_METRICS.claimsPaid.toLocaleString()}`,      delta: `â†‘ ${SUMMARY_METRICS.claimsCount} claims`,       dc: "var(--jade)",  valCol: "var(--snow)",  icon: "âœ“",  ib: "rgba(6,182,212,.1)",   ic: "var(--cyan)"  },
            { lbl: "Weekly Premium",     val: `â‚¹${SUMMARY_METRICS.weeklyPremium}`,                    delta: "AI-optimised rate",    dc: "var(--sn3)",   valCol: "var(--amber)", icon: "AI", ib: "rgba(245,158,11,.1)",  ic: "var(--amber)", mono: true },
            { lbl: "AI Risk Score",      val: SUMMARY_METRICS.riskLevel,                              delta: "â†‘ Zone safe now",      dc: "var(--jade)",  valCol: "var(--jade)",  icon: RISK_PROFILE.riskScore, ib: "rgba(16,185,129,.1)", ic: "var(--jade)", mono: true },
          ].map((m, i) => (
            <div key={i} className="card" style={{ padding: "1.3rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".8rem" }}>
                <span style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: "1px", color: "var(--sn3)" }}>{m.lbl}</span>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: m.ib, color: m.ic, display: "flex", alignItems: "center", justifyContent: "center", fontSize: m.mono ? 10 : 14, fontFamily: m.mono ? "var(--ff-m)" : "inherit", fontWeight: 600 }}>{m.icon}</div>
              </div>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.9rem", letterSpacing: ".5px", color: m.valCol, lineHeight: 1 }}>{m.val}</div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, marginTop: 6, color: m.dc }}>{m.delta}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="charts-row fu2" style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr", gap: 12, marginBottom: "1.3rem" }}>
          {/* Bar chart */}
          <div className="card" style={{ padding: "1.4rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: 14, letterSpacing: "1px" }}>WEEKLY EARNINGS VS PROTECTED</div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", textTransform: "uppercase" }}>Last {WEEKLY_EARNINGS.length} weeks</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 160 }}>
              {WEEKLY_EARNINGS.map((d, i) => {
                const max = Math.max(...WEEKLY_EARNINGS.map(x => Math.max(x.earned, x.protected)));
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3, height: "100%", alignItems: "center", justifyContent: "flex-end" }}>
                    <div style={{ width: "100%", display: "flex", gap: 2, alignItems: "flex-end", height: "100%" }}>
                      <div title={`Earned: â‚¹${d.earned}`} style={{ flex: 1, borderRadius: "2px 2px 0 0", background: "var(--amber)", opacity: .65, height: `${(d.earned / max) * 100}%`, minHeight: 2, transition: "height .3s" }} />
                      <div title={`Protected: â‚¹${d.protected}`} style={{ flex: 1, borderRadius: "2px 2px 0 0", background: "var(--cyan)", opacity: .45, height: `${(d.protected / max) * 100}%`, minHeight: 2, transition: "height .3s" }} />
                    </div>
                    <div style={{ fontFamily: "var(--ff-m)", fontSize: 8.5, color: "var(--sn3)" }}>{d.week}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
              {[["var(--amber)", "Earnings"], ["var(--cyan)", "Protected"]].map(([c, l]) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)" }}>
                  <span style={{ width: 20, height: 2, borderRadius: 99, background: c, display: "inline-block" }} />{l}
                </div>
              ))}
            </div>
          </div>

          {/* Donut */}
          <div className="card" style={{ padding: "1.4rem" }}>
            <div style={{ fontFamily: "var(--ff-d)", fontSize: 14, letterSpacing: "1px", marginBottom: "1.2rem" }}>DISRUPTION MIX</div>
            <div style={{ position: "relative", width: 130, height: 130, margin: "0 auto 1rem" }}>
              <svg viewBox="0 0 42 42" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                {DISRUPTION_MIX.reduce((acc, s, i) => {
                  const c = 2 * Math.PI * 15.9;
                  const offset = DISRUPTION_MIX.slice(0, i).reduce((a, x) => a + x.pct, 0);
                  acc.push(<circle key={i} cx="21" cy="21" r="15.9" fill="none" stroke={s.color} strokeWidth="4" strokeDasharray={`${(s.pct / 100) * c} ${c}`} strokeDashoffset={`${-(offset / 100) * c}`} opacity=".9" />);
                  return acc;
                }, [])}
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.5rem", letterSpacing: "1px", color: DISRUPTION_MIX[0].color, lineHeight: 1 }}>{DISRUPTION_MIX[0].pct}%</div>
                <div style={{ fontFamily: "var(--ff-m)", fontSize: 8.5, color: "var(--sn3)", marginTop: 2 }}>{DISRUPTION_MIX[0].label}</div>
              </div>
            </div>
            {DISRUPTION_MIX.map((d, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", marginBottom: 6, alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: d.color, display: "inline-block" }} />{d.label}
                </div>
                <span style={{ color: "var(--snow)", fontWeight: 500 }}>{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions + Coverage */}
        <div className="bottom-row fu3" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 12 }}>
          <div className="card" style={{ padding: "1.4rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: 14, letterSpacing: "1px" }}>TRANSACTION HISTORY</div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>{["Date", "Event", "Amount", "Status"].map(h => <th key={h} style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--sn3)", padding: "6px 10px", textAlign: "left" }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {CLAIM_HISTORY.map((c, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: "var(--ff-m)", fontSize: 11, color: "var(--sn3)", padding: "10px", borderTop: "1px solid var(--bd)" }}>{c.date}</td>
                    <td style={{ fontSize: 12.5, padding: "10px", borderTop: "1px solid var(--bd)" }}>{c.event}</td>
                    <td style={{ fontFamily: "var(--ff-m)", fontSize: 12, fontWeight: 500, padding: "10px", borderTop: "1px solid var(--bd)", color: c.type === "debit" ? "var(--rouge)" : c.status === "pending" ? "var(--amber)" : "var(--jade)" }}>
                      {c.type === "debit" ? "âˆ’" : "+"}â‚¹{c.amount}
                    </td>
                    <td style={{ padding: "10px", borderTop: "1px solid var(--bd)" }}><ClaimStatusBadge status={c.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card" style={{ padding: "1.4rem" }}>
            <div style={{ fontFamily: "var(--ff-d)", fontSize: 14, letterSpacing: "1px", marginBottom: "1.2rem" }}>ACTIVE COVERAGE</div>
            {[
              ["Plan", CURRENT_USER.plan + " Shield", "var(--cyan)"],
              ["Active Since", CURRENT_USER.coverageStart, ""],
              ["Renews", `${CURRENT_USER.coverageRenews} â€” ${CURRENT_USER.daysToRenewal} days`, "var(--amber)"],
              ["Max Payout / week", `â‚¹${CURRENT_USER.maxWeeklyPayout.toLocaleString()}`, "var(--jade)"],
              ["Weekly Premium", `â‚¹${CURRENT_USER.weeklyPremium}`, "var(--snow)"],
              ["Status", "â— Active", "var(--jade)"],
            ].map(([k, v, c], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, padding: "9px 0", borderBottom: i < 5 ? "1px solid var(--bd)" : "none", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--ff-m)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".5px", color: "var(--sn3)" }}>{k}</span>
                <span style={{ fontFamily: "var(--ff-d)", fontSize: 13.5, letterSpacing: ".5px", color: c || "var(--snow)" }}>{v}</span>
              </div>
            ))}
            <ProgressBar pct={Math.round((CURRENT_USER.usedPayout / CURRENT_USER.maxWeeklyPayout) * 100)} />
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-m)", fontSize: 9, color: "var(--sn3)", margin: "4px 0 14px" }}>
              <span>â‚¹0</span><span>â‚¹{CURRENT_USER.usedPayout} used</span><span>â‚¹{CURRENT_USER.maxWeeklyPayout}</span>
            </div>
            <button onClick={() => nav("pricing")} className="cta-btn" style={{ width: "100%", padding: "12px", fontFamily: "var(--ff-d)", fontSize: "1rem", letterSpacing: "1px" }}>RENEW PLAN â†’</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// â”€â”€ PAGE: CLAIMS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Claims() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--ink)", paddingTop: 62, position: "relative", overflow: "hidden" }}>
      <div className="atmo" style={{ width: 500, height: 500, background: "radial-gradient(circle,rgba(245,158,11,.08) 0%,transparent 70%)", top: -100, right: -100 }} />
      <div className="grid-bg" />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem 5rem", position: "relative", zIndex: 2 }}>
        <div className="fu" style={{ marginBottom: "2.5rem" }}>
          <SectionLabel>Active Claim</SectionLabel>
          <h1 style={{ fontFamily: "var(--ff-d)", fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "2px" }}>
            {ACTIVE_CLAIM.event.toUpperCase()} â€”{" "}
            <span style={{ color: "var(--amber)" }}>{ACTIVE_CLAIM.status.toUpperCase()}</span>
          </h1>
          <p style={{ fontFamily: "var(--ff-m)", fontSize: 11, color: "var(--sn3)", marginTop: 6, textTransform: "uppercase", letterSpacing: ".5px" }}>
            Claim ID: {ACTIVE_CLAIM.id} Â· {ACTIVE_CLAIM.location} Â· {ACTIVE_CLAIM.date}
          </p>
        </div>

        {/* Top 3 cards */}
        <div className="fu1 det-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: "1.5rem" }}>
          {/* Risk score */}
          <div className="card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: "1px", color: "var(--sn3)", marginBottom: "1.2rem" }}>AI Risk Score</div>
            <div style={{ position: "relative", width: 140, height: 140, margin: "0 auto 1rem" }}>
              <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(240,246,255,.05)" strokeWidth="10" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--jade)" strokeWidth="10"
                  strokeDasharray={`${(RISK_PROFILE.riskScore / 100) * 314} 314`} strokeLinecap="round" opacity=".9" />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontFamily: "var(--ff-d)", fontSize: "2.8rem", letterSpacing: "1px", color: "var(--jade)", lineHeight: 1 }}>{RISK_PROFILE.riskScore}</div>
                <div style={{ fontFamily: "var(--ff-m)", fontSize: 8.5, color: "var(--sn3)", marginTop: 2 }}>/ 100</div>
              </div>
            </div>
            <Badge type="safe">{RISK_PROFILE.riskLevel} Risk â€” Clean Record</Badge>
            <p style={{ fontSize: 12, color: "var(--sn3)", marginTop: 12, lineHeight: 1.6, fontWeight: 300 }}>
              {RISK_PROFILE.cleanMonths}-month history Â· Zone avg {RISK_PROFILE.zoneAvgRisk} Â· Premium âˆ’â‚¹{RISK_PROFILE.premiumDiscount}/wk
            </p>
          </div>

          {/* Radar */}
          <div className="card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: "1px", color: "var(--sn3)", marginBottom: "1rem" }}>Live Detection Radar</div>
            <div style={{ position: "relative", width: 130, height: 130, margin: "0 auto 1rem" }}>
              {[0, 0.8, 1.6].map((d, i) => (
                <div key={i} style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid var(--amber)", animation: `radar 2.5s ${d}s ease-out infinite` }} />
              ))}
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: 30 }}>â›ˆ</div>
                <div style={{ fontFamily: "var(--ff-m)", fontSize: 9, color: "var(--amber)", marginTop: 4, letterSpacing: ".5px" }}>{ACTIVE_ALERT.rainfallMm}mm RAIN</div>
              </div>
            </div>
            <Badge type="alert">Disruption Active</Badge>
            <p style={{ fontSize: 12, color: "var(--sn3)", marginTop: 10, fontWeight: 300 }}>
              {ACTIVE_ALERT.sources.join(" Â· ")} all confirm threshold crossed
            </p>
          </div>

          {/* Payout */}
          <div className="card" style={{ padding: "1.8rem", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: "1px", color: "var(--sn3)", marginBottom: "1rem" }}>Payout Status</div>
            <div style={{ fontFamily: "var(--ff-d)", fontSize: "3.5rem", letterSpacing: "2px", color: "var(--jade)", lineHeight: 1, marginBottom: 8 }}>â‚¹{ACTIVE_CLAIM.amount.toLocaleString()}</div>
            <div style={{ fontFamily: "var(--ff-m)", fontSize: 11, color: "var(--jade)", marginBottom: "1.2rem", letterSpacing: ".5px" }}>
              APPROVED â†’ UPI PROCESSING
            </div>
            <div style={{ background: "rgba(16,185,129,.06)", border: "1px solid rgba(16,185,129,.2)", borderRadius: 10, padding: "1rem" }}>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", marginBottom: 4 }}>EST. DELIVERY</div>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.5rem", letterSpacing: "1px", color: "var(--jade)" }}>~{ACTIVE_CLAIM.estimatedMinutes} MINUTES</div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", marginTop: 4 }}>{ACTIVE_CLAIM.upiId} Â· {ACTIVE_CLAIM.plan}</div>
            </div>
          </div>
        </div>

        {/* Claim journey */}
        <div className="card fu2" style={{ padding: "1.8rem", marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "var(--ff-d)", fontSize: 16, letterSpacing: "1px", marginBottom: "2rem" }}>CLAIM JOURNEY</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {ACTIVE_CLAIM.steps.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div className={`step-dot ${s.done ? "step-done" : s.active ? "step-active" : "step-idle"}`}>
                    {s.done ? "âœ“" : s.active ? <span style={{ animation: "pulse 1s ease infinite" }}>â†’</span> : i + 1}
                  </div>
                  <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: s.done ? "var(--jade)" : s.active ? "var(--amber)" : "var(--sn3)", textAlign: "center", letterSpacing: ".3px", lineHeight: 1.4 }}>{s.label}</div>
                </div>
                {i < ACTIVE_CLAIM.steps.length - 1 && (
                  <div style={{ width: 30, height: 1, background: s.done ? "var(--jade)" : "var(--bd2)", flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Data sources */}
        <div className="fu3 det-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {DATA_SOURCES.map((d, i) => (
            <div key={i} className="card" style={{ padding: "1.4rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 22 }}>{d.icon}</span>
                {d.verified && <Badge type="safe">Verified</Badge>}
              </div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: ".5px" }}>{d.name}</div>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.3rem", letterSpacing: "1px", color: "var(--snow)", marginBottom: 4 }}>{d.value}</div>
              <div style={{ fontSize: 12, color: "var(--sn3)", fontWeight: 300 }}>{d.subtext}</div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 9, color: "var(--sn3)", marginTop: 8 }}>Latency: {d.latency}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// â”€â”€ PAGE: PRICING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Pricing({ nav }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--ink)", paddingTop: 62, position: "relative" }}>
      <div className="atmo" style={{ width: 600, height: 600, background: "radial-gradient(circle,rgba(245,158,11,.08) 0%,transparent 70%)", top: -200, left: -100 }} />
      <div className="grid-bg" />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3.5rem 2rem 5rem", position: "relative", zIndex: 2 }}>
        <div className="fu" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionLabel>Weekly Plans â€” Cancel Anytime</SectionLabel>
          <h1 style={{ fontFamily: "var(--ff-d)", fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "2px", marginBottom: ".8rem" }}>
            CHOOSE YOUR{" "}
            <span style={{ background: "linear-gradient(90deg,var(--amber),var(--cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>SHIELD</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--sn3)", maxWidth: 500, margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
            Parametric-triggered Â· UPI-instant Â· Zero paperwork Â· Weekly pricing aligned to your earnings cycle.
          </p>
        </div>

        <div className="plans-grid fu1" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginBottom: "4rem" }}>
          {PLANS.map((plan) => (
            <div key={plan.id} className={`price-card${plan.featured ? " featured" : ""}`}>
              {plan.featured && (
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--ff-m)", fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", background: "var(--amber)", color: "var(--ink)", padding: "5px 20px", borderRadius: "0 0 10px 10px", fontWeight: 500 }}>
                  Most Popular
                </div>
              )}
              <div style={{ marginTop: plan.featured ? 24 : 0 }}>
                <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--sn3)", marginBottom: 6 }}>{plan.name}</div>
                <div style={{ fontFamily: "var(--ff-d)", fontSize: "3.5rem", letterSpacing: "1px", color: plan.color, lineHeight: 1, marginBottom: 4 }}>
                  â‚¹{plan.weeklyPrice}{" "}
                  <span style={{ fontSize: "1rem", color: "var(--sn3)", fontFamily: "var(--ff-b)", fontWeight: 300 }}>/week</span>
                </div>
                <div style={{ fontFamily: "var(--ff-m)", fontSize: 10.5, color: "var(--sn3)", marginBottom: "1rem" }}>Coverage up to â‚¹{plan.maxPayout.toLocaleString()} / week</div>
                <div style={{ display: "flex", gap: 2, marginBottom: "1.5rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ fontSize: 13, color: i < plan.stars ? "var(--amber)" : "var(--sn3)" }}>â˜…</span>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: "2rem" }}>
                  {plan.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: f.ok ? "var(--sn2)" : "var(--sn3)" }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, flexShrink: 0, background: f.ok ? "rgba(16,185,129,.15)" : "rgba(244,63,94,.08)", color: f.ok ? "var(--jade)" : "var(--rouge)", border: `1px solid ${f.ok ? "rgba(16,185,129,.25)" : "rgba(244,63,94,.2)"}` }}>
                        {f.ok ? "âœ“" : "âœ•"}
                      </div>
                      {f.text}
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", marginBottom: 16 }}>
                  Avg claim: {plan.avgClaimSpeed} Â· {plan.triggerCount} trigger types
                </div>
                <button onClick={() => nav("dashboard")} style={{ width: "100%", padding: "13px", borderRadius: 8, fontFamily: "var(--ff-d)", fontSize: "1rem", letterSpacing: "1px", cursor: "pointer", border: "none", transition: "all .2s", background: plan.featured ? "var(--amber)" : "var(--sn4)", color: plan.featured ? "var(--ink)" : "var(--snow)", boxShadow: plan.featured ? "0 4px 20px rgba(245,158,11,.35)" : "none" }}>
                  {plan.featured ? "ACTIVATE NOW â†’" : "GET STARTED"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="fu2 card" style={{ padding: "2rem" }}>
          <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.5rem", letterSpacing: "1px", marginBottom: "1.5rem" }}>QUICK COMPARISON</div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--ff-m)", fontSize: 11 }}>
              <thead>
                <tr>
                  {["Feature", ...PLANS.map(p => `${p.name} â‚¹${p.weeklyPrice}/wk`)].map((h, i) => (
                    <th key={i} style={{ padding: "10px 16px", textAlign: i === 0 ? "left" : "center", color: i === 2 ? "var(--amber)" : "var(--sn3)", letterSpacing: ".5px", borderBottom: "1px solid var(--bd2)", fontWeight: i === 2 ? 600 : 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Max weekly payout",   ...PLANS.map(p => `â‚¹${p.maxPayout.toLocaleString()}`)],
                  ["Rain threshold",      ...PLANS.map(p => p.rainThreshold)],
                  ["AQI coverage",        ...PLANS.map(p => p.aqiCoverage ? "âœ“" : "âœ•")],
                  ["GPS fraud shield",    ...PLANS.map(p => p.gpsFraudShield ? "âœ“" : "âœ•")],
                  ["Avg claim speed",     ...PLANS.map(p => p.avgClaimSpeed)],
                  ["Trigger types",       ...PLANS.map(p => String(p.triggerCount))],
                ].map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? "var(--sn4)" : "transparent" }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: "10px 16px", textAlign: ci === 0 ? "left" : "center", color: cell === "âœ“" ? "var(--jade)" : cell === "âœ•" ? "var(--rouge)" : "var(--snow)", borderBottom: "1px solid var(--bd)" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// â”€â”€ PAGE: FRAUD PROTECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Fraud() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--ink)", paddingTop: 62, position: "relative", overflow: "hidden" }}>
      <div className="atmo" style={{ width: 600, height: 600, background: "radial-gradient(circle,rgba(16,185,129,.08) 0%,transparent 70%)", top: -200, right: -200 }} />
      <div className="atmo" style={{ width: 400, height: 400, background: "radial-gradient(circle,rgba(244,63,94,.06) 0%,transparent 70%)", bottom: -100, left: -100 }} />
      <div className="grid-bg" />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3.5rem 2rem 5rem", position: "relative", zIndex: 2 }}>
        <div className="fu" style={{ marginBottom: "3rem" }}>
          <SectionLabel color="var(--jade)">Fraud Protection System</SectionLabel>
          <h1 style={{ fontFamily: "var(--ff-d)", fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "2px", marginBottom: ".8rem" }}>
            5-SIGNAL{" "}
            <span style={{ background: "linear-gradient(90deg,var(--jade),var(--cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              FRAUD SHIELD
            </span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--sn3)", maxWidth: 580, fontWeight: 300, lineHeight: 1.75 }}>
            Every claim is cross-validated through five independent data signals. Our AI detects GPS spoofing, fake disruptions and coordinated fraud rings in under 43 seconds â€” without affecting genuine users.
          </p>
        </div>

        {/* Trust score hero */}
        <div className="fu1 card" style={{ padding: "2rem", marginBottom: "1.5rem", background: "linear-gradient(135deg,rgba(16,185,129,.06),rgba(6,182,212,.04))", border: "1px solid rgba(16,185,129,.2)", display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <div style={{ position: "relative", width: 150, height: 150, margin: "0 auto" }}>
              <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(240,246,255,.05)" strokeWidth="10" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--jade)" strokeWidth="10" strokeDasharray={`${(RISK_PROFILE.trustScore / 100) * 314} 314`} strokeLinecap="round" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--cyan)" strokeWidth="10" strokeDasharray={`${((100 - RISK_PROFILE.trustScore) / 100) * 314} 314`} strokeDashoffset={`${-(RISK_PROFILE.trustScore / 100) * 314}`} strokeLinecap="round" opacity=".3" />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontFamily: "var(--ff-d)", fontSize: "2.5rem", letterSpacing: "1px", color: "var(--jade)", lineHeight: 1 }}>{RISK_PROFILE.trustScore}</div>
                <div style={{ fontFamily: "var(--ff-m)", fontSize: 9, color: "var(--sn3)", marginTop: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Trust Score</div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.5rem", letterSpacing: "1px", marginBottom: ".6rem" }}>
              PLATFORM TRUST RATING â€”{" "}
              <span style={{ color: "var(--jade)" }}>EXCELLENT</span>
            </div>
            <p style={{ fontSize: 14, color: "var(--sn3)", lineHeight: 1.75, marginBottom: "1.2rem", fontWeight: 300 }}>
              Your account has passed all 5 validation checks for {RISK_PROFILE.cleanMonths} consecutive months. Clean record qualifies you for accelerated 10-minute payouts and reduced premiums.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                ["Fraud Flags", `${RISK_PROFILE.fraudFlags} / ${RISK_PROFILE.cleanMonths} months`, "var(--jade)"],
                ["GPS Score", `${RISK_PROFILE.gpsScore} / 100`, "var(--jade)"],
                ["Peer Consensus", RISK_PROFILE.peerConsensus ? "âœ“ Passed" : "âœ• Failed", RISK_PROFILE.peerConsensus ? "var(--jade)" : "var(--rouge)"],
              ].map(([k, v, c], i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 3 }}>{k}</div>
                  <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.3rem", letterSpacing: ".5px", color: c }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 signals */}
        <div className="fu2 fraud-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: "1.5rem" }}>
          {FRAUD_SIGNALS.map((s, i) => (
            <div key={i} className="card" style={{ padding: "1.6rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: 26 }}>{s.icon}</span>
                <SignalBars strength={s.strength} color={s.color} />
              </div>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.1rem", letterSpacing: "1px", marginBottom: 6 }}>{s.name}</div>
              <div style={{ fontSize: 12.5, color: "var(--sn3)", lineHeight: 1.7, fontWeight: 300, marginBottom: "1rem" }}>{s.desc}</div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".5px" }}>Trust Contribution</div>
              <ProgressBar pct={s.accuracy} color={s.color} />
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: s.color, marginTop: 6 }}>{s.accuracy}% accuracy</div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 9.5, color: "var(--sn3)", marginTop: 6, padding: "6px 8px", background: "var(--sn4)", borderRadius: 6 }}>{s.detail}</div>
            </div>
          ))}

          {/* Attack vectors */}
          <div className="card" style={{ padding: "1.6rem", background: "linear-gradient(135deg,rgba(244,63,94,.06),var(--ink2))", border: "1px solid rgba(244,63,94,.2)" }}>
            <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.1rem", letterSpacing: "1px", marginBottom: ".8rem", color: "var(--rouge)" }}>ðŸ›¡ï¸ ATTACK VECTORS BLOCKED</div>
            <div style={{ fontSize: 12.5, color: "var(--sn3)", lineHeight: 1.75, fontWeight: 300, marginBottom: "1rem" }}>
              Our XGBoost model processes all 5 signals simultaneously, trained on 2.4M delivery records.
            </div>
            {ATTACK_VECTORS.map((a, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--ff-m)", fontSize: 10, padding: "7px 0", borderBottom: i < ATTACK_VECTORS.length - 1 ? "1px solid var(--bd)" : "none" }}>
                <span style={{ color: "var(--sn3)" }}>{a.type}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--sn3)", fontSize: 9 }}>{a.count.toLocaleString()}</span>
                  <span style={{ color: a.status === "Blocked" ? "var(--rouge)" : "var(--amber)", fontWeight: 500 }}>{a.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinated fraud clusters */}
        <div className="fu3 card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.5rem", letterSpacing: "1px", marginBottom: "1.5rem" }}>
            COORDINATED FRAUD CLUSTERS â€” LIVE
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--ff-m)", fontSize: 11 }}>
            <thead>
              <tr>{["Cluster ID", "Zone", "Total Claims", "Flagged", "Risk Level", "Pattern"].map(h => (
                <th key={h} style={{ padding: "10px 16px", textAlign: "left", color: "var(--sn3)", letterSpacing: ".5px", borderBottom: "1px solid var(--bd2)", fontWeight: 400 }}>{h}</th>
              ))}</tr>
            </thead>
            <tbody>
              {FRAUD_CLUSTERS.map((c, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "var(--sn4)" : "transparent" }}>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--bd)", color: "var(--cyan)" }}>{c.id}</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--bd)" }}>{c.zone}</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--bd)", textAlign: "center" }}>{c.claims}</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--bd)", textAlign: "center", color: c.flagged > 5 ? "var(--rouge)" : c.flagged > 1 ? "var(--amber)" : "var(--jade)" }}>{c.flagged}</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--bd)" }}>
                    <span style={{ color: c.risk === "High" ? "var(--rouge)" : c.risk === "Medium" ? "var(--amber)" : "var(--jade)" }}>{c.risk}</span>
                  </td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--bd)", color: "var(--sn3)" }}>{c.pattern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Validation flow */}
        <div className="fu3 card" style={{ padding: "2rem" }}>
          <div style={{ fontFamily: "var(--ff-d)", fontSize: "1.5rem", letterSpacing: "1px", marginBottom: "2rem" }}>REAL-TIME VALIDATION FLOW</div>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0 }}>
            {[
              { step: "Claim Initiated",    color: "var(--amber)", icon: "ðŸ“", detail: "Worker location active" },
              { step: "5-Signal Check",     color: "var(--cyan)",  icon: "ðŸ“¡", detail: "GPS + IMU + Cell + API + Peers" },
              { step: "Risk Score 0â€“100",   color: "var(--jade)",  icon: "ðŸ¤–", detail: "Low / Medium / High" },
              { step: "Threshold Confirm",  color: "var(--amber)", icon: "âœ…", detail: "Auto-approve or flag" },
              { step: "UPI Transfer",       color: "var(--jade)",  icon: "ðŸ’°", detail: `~${GLOBAL_STATS.avgPayoutMinutes} min payout` },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{ textAlign: "center", flex: 1 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--sn4)", border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, margin: "0 auto 8px" }}>{s.icon}</div>
                  <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", lineHeight: 1.4 }}>{s.step}</div>
                  <div style={{ fontFamily: "var(--ff-m)", fontSize: 9, color: s.color, marginTop: 3 }}>{s.detail}</div>
                </div>
                {i < 4 && <div style={{ width: 20, height: 1, background: "var(--bd2)", flexShrink: 0 }} />}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(16,185,129,.05)", border: "1px solid rgba(16,185,129,.15)", borderRadius: 8, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20 }}>âš¡</span>
            <div>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: "1rem", letterSpacing: "1px", color: "var(--jade)" }}>AVERAGE VALIDATION TIME: 43 SECONDS</div>
              <div style={{ fontFamily: "var(--ff-m)", fontSize: 10, color: "var(--sn3)", marginTop: 3 }}>From claim trigger to payout approval â€” fully automated, no human review required for low-risk scores</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// â”€â”€ ROOT APP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const PAGES = ["home", "dashboard", "claims", "pricing", "fraud"];
  const LABELS = ["Home", "Dashboard", "Claims", "Pricing", "Fraud Shield"];

  return (
    <div>
      <div className="nav">
        <div className="nav-logo" onClick={() => nav("home")}>STORM<span>SHIELD</span></div>
        <div className="nav-links" style={{ display: "flex", gap: 4 }}>
          {PAGES.map((p, i) => (
            <button key={p} className={`nl${page === p ? " on" : ""}`} onClick={() => nav(p)}>{LABELS[i]}</button>
          ))}
        </div>
        <button className="cta-btn" onClick={() => nav("dashboard")}>GET COVERED</button>
      </div>

      {page === "home"      && <Landing nav={nav} />}
      {page === "dashboard" && <Dashboard nav={nav} />}
      {page === "claims"    && <Claims />}
      {page === "pricing"   && <Pricing nav={nav} />}
      {page === "fraud"     && <Fraud />}
    </div>
  );
}
