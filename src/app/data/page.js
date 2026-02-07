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
        <div className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl text-slate-900 mb-4">
            People{" "}
            <span className="font-script text-purple-500">Analytics</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Bridging the gap between quantitative KPI metrics and qualitative
            human performance.
            <br />
            <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">
              Audit • Visualization • Strategy
            </span>
          </p>
        </div>

        <div className="mb-12">
          <h2 className="font-heading text-2xl text-slate-800 mb-6 flex items-center gap-2">
            <FileSpreadsheet className="text-purple-500" /> Featured Case Study
          </h2>

          <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="font-heading text-3xl text-slate-800 mb-2">
                  AIESEC Performance Audit
                </h3>
                <p className="text-xs font-bold tracking-widest text-purple-500 uppercase mb-6">
                  People Analyst and Consultant Manager • 110+ Members
                </p>

                <div className="space-y-6 relative">
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        Automated Oversight
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        Developed a centralized dashboard aggregating individual tracking sheets for 9 departments + Executive Board.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                      <SearchCheck size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        Validation & Audit
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        Validated monthly entries to ensure data integrity. Cross-referenced quantitative KPI scores with qualitative leader evaluations.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                      <Presentation size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        Departmental Consulting
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        Conducted quarterly visits to present insights directly to each department, providing tailored strategies based on performance gaps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button className="px-5 py-2.5 bg-slate-100 text-slate-400 rounded-xl text-sm font-bold cursor-not-allowed flex items-center gap-2">
                    View Full Analysis (Coming Soon)
                  </button>
                </div>
              </div>

              <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 p-5 relative shadow-inner flex flex-col gap-4">
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Member Profile
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      Sarah Jenkins (Marketing)
                    </span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">
                    High Performer
                  </span>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <div className="bg-purple-50 px-3 py-2 border-b border-purple-100 flex justify-between">
                    <span className="text-[10px] font-bold text-purple-700 uppercase">
                      Primary KPI Metrics
                    </span>
                  </div>
                  <table className="w-full text-[10px] text-left">
                    <thead className="text-slate-400 border-b border-slate-50">
                      <tr>
                        <th className="p-2 pl-3 font-normal">Task</th>
                        <th className="p-2 font-normal">Goal</th>
                        <th className="p-2 font-normal">Achieved</th>
                        <th className="p-2 font-normal text-right">Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      <tr>
                        <td className="p-2 pl-3 font-bold text-slate-700">
                          Content Cal.
                        </td>
                        <td className="p-2 text-slate-500">12 Posts</td>
                        <td className="p-2 text-slate-500">12</td>
                        <td className="p-2 text-right font-bold text-green-600">
                          100%
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 pl-3 font-bold text-slate-700">
                          Engagement
                        </td>
                        <td className="p-2 text-slate-500">5% Rate</td>
                        <td className="p-2 text-slate-500">4.2%</td>
                        <td className="p-2 text-right font-bold text-amber-500">
                          84%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <div className="bg-blue-50 px-3 py-2 border-b border-blue-100 flex justify-between">
                    <span className="text-[10px] font-bold text-blue-700 uppercase">
                      Soft Skills & Feedback Loop
                    </span>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    <div className="bg-slate-50 p-2 rounded border border-slate-100">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold mb-1">
                        Teamwork
                      </span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <div
                            key={n}
                            className={`h-1.5 w-full rounded-full ${n <= 4 ? "bg-blue-400" : "bg-slate-200"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded border border-slate-100">
                      <span className="block text-[8px] text-slate-400 uppercase font-bold mb-1">
                        Leadership
                      </span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <div
                            key={n}
                            className={`h-1.5 w-full rounded-full ${n <= 5 ? "bg-blue-400" : "bg-slate-200"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-3 pb-3 pt-0">
                    <p className="text-[9px] text-slate-500 italic border-l-2 border-blue-200 pl-2">
                      "Leader Feedback: Needs to take more initiative in
                      cross-departmental meetings, but output is excellent."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                "Modelling & Data Analysis". Actively expanding my toolkit to
                transition from analytics to Machine Learning Engineering.
              </p>
              <div className="flex flex-wrap gap-2">
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
            <div className="mt-8 pt-6 border-t border-purple-200/50 flex items-center gap-2 text-xs text-purple-400 font-bold uppercase tracking-widest">
              <CheckCircle2 size={16} /> Open to Internships
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
