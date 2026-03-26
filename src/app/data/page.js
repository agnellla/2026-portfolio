"use client";
import Link from "next/link";
import {
  ArrowLeft,
  FileSpreadsheet,
  Award,
  BookOpen,
  BarChart3,
  SearchCheck,
  Presentation,
  CheckCircle2,
  Database,
  BrainCircuit,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function DataPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden selection:bg-purple-100 font-sans text-slate-800">
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none fixed"></div>

      <div className="max-w-5xl mx-auto p-6 md:p-12 relative z-10">
        <div className="fixed top-6 left-6 z-50">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-white/70 backdrop-blur-md border border-slate-200/50 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
          >
            <ArrowLeft
              size={18}
              className="text-slate-400 group-hover:text-purple-600 transition-colors"
            />
            <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
              Dashboard
            </span>
          </Link>
        </div>

        {/* HEADER */}
        <div className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl text-slate-900 mb-4">
            Strategic{" "}
            <span className="font-script text-purple-500">Analytics</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Translating complex operational datasets into actionable business
            strategies and organizational growth.
            <br />
            <span className="text-sm font-bold text-purple-600 uppercase tracking-widest mt-2 block">
              Data Modeling • Root Cause Analysis • Consulting
            </span>
          </p>
        </div>

        {/* ── CASE STUDIES ──────────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl text-slate-800 mb-6 flex items-center gap-2">
            <FileSpreadsheet className="text-purple-500" /> Case Studies
          </h2>

          <div className="flex flex-col gap-8">
            {/* ── PROJECT 1: DigiReady ───────────────────────────────── */}
            {/* ── PROJECT 1: DigiReady ───────────────────────────────── */}
            <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left: Narrative */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading text-3xl text-slate-800">
                      DigiReady
                    </h3>
                    <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold uppercase tracking-wide">
                      Live Project
                    </span>
                  </div>
                  <p className="text-xs font-bold tracking-widest text-purple-500 uppercase mb-6">
                    Data & AI Engineer · SME Digital Readiness · React · FastAPI
                    · PostgreSQL
                  </p>

                  <div className="space-y-6 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

                    {/* Step 1 */}
                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <Database size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Benchmark Data Engineering
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          IMDA publishes SME data at an aggregate level — not
                          broken down by pillar or industry. I synthesised the
                          Digital Index 2023, EDB readiness reports, and SME
                          Scorecard into usable pillar-level medians per
                          industry, stored in PostgreSQL as live benchmarks.
                          These are designed to be replaced by real user data
                          post-launch, creating a self-improving dataset over
                          time.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <BrainCircuit size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Deterministic Scoring + Constrained AI
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Pillar weights (Ops 25%, CX 20%, Data 20%, Cyber 20%,
                          Cloud 15%) are calibrated to ASEAN SME transformation
                          priorities, not arbitrary. The scoring engine is fully
                          deterministic in FastAPI — Gemini 1.5 Flash is
                          constrained to writing plain-English justifications
                          for pre-selected actions only. It cannot alter scores
                          or surface anything outside a validated 30-action
                          library.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Impact: 30× Faster, 10× Scale
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Reduces SME diagnosis from 2–3 consultant days to
                          under 15 minutes. Advisor capacity scales from ~30 to
                          ~300 SMEs per year, with PSG/EDG grant matching fully
                          automated — validated across 5 SME owner interviews
                          averaging 11 minutes to complete.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href="/data/digiready.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-200/50 hover:bg-purple-600 transition-colors inline-block text-center"
                    >
                      View Pitch Deck
                    </a>
                  </div>
                </div>

                {/* Right: Video Demo Placeholder */}
                <div className="w-full flex flex-col gap-4">
                  {/* Browser chrome + video placeholder */}
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                    {/* Fake browser bar */}
                    <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-slate-400 font-mono border border-slate-200">
                        digiready.app/diagnostic
                      </div>
                    </div>

                    {/* Video placeholder body */}
                    <div className="relative bg-slate-50 aspect-video flex flex-col items-center justify-center gap-3 group/video cursor-pointer">
                      {/* Pulsing ring */}
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-16 h-16 rounded-full bg-purple-100 animate-ping opacity-40"></div>
                        <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-200 relative z-10 group-hover/video:bg-purple-700 transition-colors">
                          <svg
                            className="w-5 h-5 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-700">
                          Demo coming soon
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Desktop screen recording · ~2 min walkthrough
                        </p>
                      </div>

                      {/* Corner badge */}
                      <div className="absolute top-3 right-3 bg-white border border-slate-200 rounded-lg px-2 py-1 flex items-center gap-1.5 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                          Recording
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stat strip below video */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">30×</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Faster Diagnosis
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">10×</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Advisor Scale
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">11m</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Avg. Completion
                      </p>
                    </div>
                  </div>

                  {/* AI design principle */}
                  <div className="bg-white rounded-xl border border-slate-100 p-3">
                    <p className="text-[10px] text-slate-600 italic border-l-2 border-purple-300 pl-2">
                      <strong>Design principle:</strong> "AI generates language,
                      not logic. Logic lives in the scoring engine. Removing the
                      LLM degrades explanation quality — not recommendation
                      quality."
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Key Design Decision
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      The hardest call was{" "}
                      <span className="font-bold text-slate-800">
                        keeping the AI out of the logic layer entirely.
                      </span>{" "}
                      Early prototypes let the LLM generate recommendations
                      freely — outputs were fluent but unpredictable. I moved
                      all scoring and action selection into a rule engine,
                      leaving Gemini responsible only for language. The result:
                      removing the LLM degrades explanation quality, not
                      recommendation quality. That separation is what makes the
                      output trustworthy enough for real grant decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PROJECT 2: Organizational Performance Audit ────────── */}
            <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left: Narrative */}
                <div>
                  <h3 className="font-heading text-3xl text-slate-800 mb-2">
                    Organizational Performance Audit
                  </h3>
                  <p className="text-xs font-bold tracking-widest text-purple-500 uppercase mb-6">
                    Data Analyst & Consultant • AIESEC (110+ Members)
                  </p>
                  <div className="space-y-6 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <BarChart3 size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Data Aggregation & Modeling
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Engineered a centralized tracking dashboard to
                          aggregate quantitative KPIs alongside qualitative
                          360-degree feedback across 9 departments.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <SearchCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Root Cause Analysis
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Cross-referenced metrics to uncover hidden operational
                          bottlenecks. Identified that top-line performance was
                          masking severe burnout in key units.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <Presentation size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Strategic Implementation
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Presented data-driven "State of the Organization"
                          reports to executive leadership, providing tailored
                          strategies to optimize performance and reduce
                          turnover.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-200/50 hover:bg-purple-600 transition-colors">
                      View Pitch Deck
                    </button>
                  </div>
                </div>

                {/* Right: Data Visual */}
                <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 p-5 relative shadow-inner flex flex-col gap-4">
                  <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        Data Insight Snapshot
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        The "Watermelon" Effect
                      </span>
                    </div>
                    <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded">
                      High Flight Risk
                    </span>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                    <div className="bg-purple-50 px-3 py-2 border-b border-purple-100 flex justify-between">
                      <span className="text-[10px] font-bold text-purple-700 uppercase">
                        Marketing Dept. Metrics
                      </span>
                    </div>
                    <table className="w-full text-[10px] text-left">
                      <thead className="text-slate-400 border-b border-slate-50">
                        <tr>
                          <th className="p-2 pl-3 font-normal">Metric</th>
                          <th className="p-2 font-normal">Goal</th>
                          <th className="p-2 font-normal">Actual</th>
                          <th className="p-2 font-normal text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        <tr>
                          <td className="p-2 pl-3 font-bold text-slate-700">
                            Content KPI
                          </td>
                          <td className="p-2 text-slate-500">12</td>
                          <td className="p-2 text-slate-500">12</td>
                          <td className="p-2 text-right font-bold text-green-600">
                            100%
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 pl-3 font-bold text-slate-700">
                            Lead Gen KPI
                          </td>
                          <td className="p-2 text-slate-500">50</td>
                          <td className="p-2 text-slate-500">48</td>
                          <td className="p-2 text-right font-bold text-green-600">
                            96%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                    <div className="bg-amber-50 px-3 py-2 border-b border-amber-100 flex justify-between">
                      <span className="text-[10px] font-bold text-amber-700 uppercase">
                        360-Degree Feedback Conflict
                      </span>
                    </div>
                    <div className="p-3 grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[8px] text-slate-400 uppercase font-bold mb-1">
                          Leader Rating
                        </span>
                        <div className="flex gap-0.5 items-center">
                          <span className="font-bold text-green-600 text-sm mr-2">
                            4.8
                          </span>
                          {[1, 2, 3, 4, 5].map((n) => (
                            <div
                              key={n}
                              className="h-1.5 w-full rounded-full bg-green-400"
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="block text-[8px] text-slate-400 uppercase font-bold mb-1">
                          Self Rating (Burnout)
                        </span>
                        <div className="flex gap-0.5 items-center">
                          <span className="font-bold text-red-500 text-sm mr-2">
                            2.1
                          </span>
                          {[1, 2, 3, 4, 5].map((n) => (
                            <div
                              key={n}
                              className={`h-1.5 w-full rounded-full ${n <= 2 ? "bg-red-400" : "bg-slate-200"}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 pb-3 pt-0 mt-2">
                      <p className="text-[10px] text-slate-600 italic border-l-2 border-amber-300 pl-2">
                        <strong>Consultant Insight:</strong> "Despite perfect
                        KPIs and leader praise, self-assessments indicate severe
                        burnout. High output is currently sustained at the cost
                        of team retention."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LEARNING & CERTIFICATIONS ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-between hover:border-purple-200 transition-colors">
            <div>
              <h3 className="font-heading text-2xl text-slate-800 mb-6 flex items-center gap-2">
                <Award className="text-purple-500" /> Certifications
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                      className="w-full h-full object-contain"
                      alt="Google"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Foundations of Data Science
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500">
                        Google / Coursera
                      </span>
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                        Dec 2025
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                      className="w-full h-full object-contain"
                      alt="Google"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Get Started with Python
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500">
                        Google / Coursera
                      </span>
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                        Dec 2025
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50/50 rounded-[2.5rem] p-8 border border-purple-100 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen className="text-purple-500" /> Current Focus
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Heading into <strong>Year 1 Term 2</strong> with a focus on
                "Modelling & Data Analysis." Actively applying Python and SQL in
                a live product — and expanding toward Machine Learning
                Engineering.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-purple-600 text-xs font-bold rounded-lg border border-purple-100 shadow-sm">
                  FastAPI (Python)
                </span>
                <span className="px-3 py-1 bg-white text-purple-600 text-xs font-bold rounded-lg border border-purple-100 shadow-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-white text-purple-600 text-xs font-bold rounded-lg border border-purple-100 shadow-sm">
                  Advanced SQL
                </span>
                <span className="px-3 py-1 bg-white text-purple-600 text-xs font-bold rounded-lg border border-purple-100 shadow-sm">
                  Pandas
                </span>
                <span className="px-3 py-1 bg-white text-purple-600 text-xs font-bold rounded-lg border border-purple-100 shadow-sm">
                  Scikit-Learn
                </span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-purple-200/50 space-y-2">
              <div className="flex items-center gap-2 text-xs text-purple-400 font-bold uppercase tracking-widest">
                <Zap size={14} className="text-purple-400" />
                Python & PostgreSQL applied in DigiReady (live)
              </div>
              <div className="flex items-center gap-2 text-xs text-purple-400 font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} /> Open to Consulting & Data Internships
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
