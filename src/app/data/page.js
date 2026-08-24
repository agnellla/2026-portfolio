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
            {/* ── PROJECT 1: CareerCopilot ───────────────────────────── */}
            <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left: Narrative */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading text-3xl text-slate-800">
                      CareerCopilot
                    </h3>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-bold uppercase tracking-wide">
                      Aug 2026
                    </span>
                    <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold uppercase tracking-wide">
                      Live
                    </span>
                  </div>
                  <p className="text-xs font-bold tracking-widest text-purple-500 uppercase mb-6">
                    Solo Build · AI Job-Search Assistant · Next.js · PostgreSQL ·
                    Gemini · Browser Extension
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
                          A Fact Bank the AI Cannot Escape
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Every AI resume tool I tried invented things about me —
                          a title I never held, a number I never hit. So the
                          model here only ever sees short facts the user has
                          confirmed, and may reorder and rephrase them but never
                          add. Employers, job titles, dates and schools are
                          placed into the document straight from the database,
                          so the model is never the thing that writes them.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <BarChart3 size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          The Metric That Was Quietly Backwards
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          My first funnel counted applications by their current
                          status — so an application that reached interview and
                          was then rejected counted only as{" "}
                          <em>rejected</em>. The interview count fell every time
                          an interview went badly. Nothing errored; the number
                          was just wrong. Stage counts now come from an
                          append-only history table, and every rate excludes
                          drafts so preparing carefully cannot drag the numbers
                          down.
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
                          Designing What It Says When It Cannot Help
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          A response rate with nothing sent shows an em-dash, not
                          0% — you have not failed, you have not started. Two
                          resume versions are not ranked until each has five sent
                          applications. An application question the fact bank
                          cannot support returns no answer at all. Most of the
                          design work went into the states where the product has
                          nothing useful to say.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href="/data/careercopilot.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-200/50 hover:bg-purple-600 transition-colors inline-block text-center"
                    >
                      View Case Study
                    </a>
                    <a
                      href="https://careercopilot-eta.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-xl text-sm font-bold hover:border-purple-300 hover:text-purple-600 transition-colors inline-block text-center"
                    >
                      Live App
                    </a>
                    <a
                      href="https://github.com/agnellla/careercopilot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-xl text-sm font-bold hover:border-purple-300 hover:text-purple-600 transition-colors inline-block text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right: Demo + evidence */}
                <div className="w-full flex flex-col gap-4">
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                    <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-slate-400 font-mono border border-slate-200">
                        careercopilot-eta.vercel.app
                      </div>
                    </div>
                    {/* TODO: drop a screen recording at /public/data/careercopilot.mp4 */}
                    <div
                      className="relative w-full bg-slate-50 flex items-center justify-center"
                      style={{ aspectRatio: "8/5" }}
                    >
                      <a
                        href="https://careercopilot-eta.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-slate-400 font-mono hover:text-purple-600 transition-colors"
                      >
                        careercopilot-eta.vercel.app →
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">19</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Decisions Recorded
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">265</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Automated Tests
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">$0</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        To Run Monthly
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 p-3">
                    <p className="text-[10px] text-slate-600 italic border-l-2 border-purple-300 pl-2">
                      <strong>Design principle:</strong> "A refusal is a correct
                      output, not a bug. If the evidence cannot support an
                      answer, the honest response is to say so."
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      What I Have Not Shown
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      It works, but{" "}
                      <span className="font-bold text-slate-800">
                        I cannot yet tell you it helps.
                      </span>{" "}
                      The 265 tests prove the scoring maths, the fabrication
                      checker and the metric definitions are right — not that any
                      of it gets someone an interview. Nobody has used it but me.
                      The next step is my own job search: real applications
                      through it, then read the numbers back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ── PROJECT 2: AIESEC People Analytics ──────────────────── */}
            <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left: Narrative */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading text-3xl text-slate-800">
                      The Watermelon Effect
                    </h3>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-bold uppercase tracking-wide">
                      Feb–Jul 2025
                    </span>
                  </div>
                  <p className="text-xs font-bold tracking-widest text-purple-500 uppercase mb-6">
                    People Analyst &amp; Consultant Manager · AIESEC in Surabaya ·
                    110+ Members · 9 Departments
                  </p>

                  <div className="space-y-6 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <BarChart3 size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Two Kinds of Data, One Dashboard
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Built centralised tracking for 110+ members across 9
                          departments, deliberately putting hard KPIs and
                          360-degree feedback side by side. Most reporting keeps
                          those apart — performance in one deck, morale in
                          another — which is exactly how a team can look healthy
                          and be in trouble.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <SearchCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Green Outside, Red Inside
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Some of the strongest departments on paper were the
                          ones whose members rated their own workload and
                          wellbeing worst. The KPIs were not wrong — they were
                          measuring output, and output was being sustained by
                          burning the team down. On dashboards alone those units
                          read as success stories.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                        <Presentation size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          Reported as Flight Risk, Not as Praise
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Six monthly and two quarterly reports over the term,
                          taken into internal workshops and performance reviews
                          rather than stopping at a slide. Reframing a
                          top-performing unit as a retention risk changed what
                          leadership did about it. Engagement improved 15% across
                          the term.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: the idea, illustrated — no figures, none are published */}
                <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-inner flex flex-col gap-5">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      The pattern
                    </span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      Green on the outside, red on the inside
                    </p>
                  </div>

                  <div className="flex items-center justify-center py-2">
                    <div className="relative w-40 h-40 rounded-full bg-green-400/80 flex items-center justify-center shadow-inner">
                      <div className="w-[86%] h-[86%] rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-[86%] h-[86%] rounded-full bg-red-400/80 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center leading-tight px-2">
                            Wellbeing
                            <br />
                            self-rated
                          </span>
                        </div>
                      </div>
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full text-[9px] font-bold text-green-700 uppercase tracking-widest border border-green-200 shadow-sm">
                        KPIs on target
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 italic border-l-2 border-amber-300 pl-3 leading-relaxed">
                    <strong>The finding:</strong> a department can hit every
                    number it is measured on and still be the one most likely to
                    lose its people. Output and sustainability are different
                    questions, and only one of them was on the dashboard.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">9</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Departments
                      </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">8</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Reports
                      </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-purple-600">15%</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                        Engagement
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
                PostgreSQL & Python applied in CareerCopilot (live)
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