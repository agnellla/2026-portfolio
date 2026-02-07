"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Download,
  Mail,
  ArrowUpRight,
  Linkedin,
  BarChart3,
  PieChart
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 p-4 md:p-8 font-sans text-slate-800 flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-300/40 rounded-full blur-[120px] animate-[blob_7s_infinite]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-300/40 rounded-full blur-[120px] animate-[blob_7s_infinite_2s]"></div>
      <div className="absolute bottom-[20%] left-[20%] w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-[120px] animate-[blob_7s_infinite_4s]"></div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-6 relative z-10">
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-[350px] flex-shrink-0 lg:h-[calc(100vh-4rem)] lg:sticky lg:top-8">
          <div className="bg-white/80 backdrop-blur-xl h-full p-8 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] border border-white/60 flex flex-col items-center text-center gap-6 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col items-center w-full">
              <div className="relative mb-6 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-white shadow-lg shrink-0">
                <Image
                  src="/headshot.jpg"
                  alt="Agnella professional photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h1 className="font-heading text-3xl md:text-4xl text-slate-900 mb-2">
                Agnella Agrata
              </h1>
              <p className="font-script text-xl md:text-2xl text-rose-400 mb-4 font-bold tracking-wide">
                Data & Design
              </p>

              <p className="text-sm text-slate-500 leading-relaxed mb-6 px-2 font-medium">
                SMU Information Systems undergraduate bridging{" "}
                <span className="font-bold text-slate-800">
                  analytical logic and creative design
                </span>
                . Transforming complex data into clear, compelling visual
                stories.
              </p>

              <div className="mb-6">
                <a
                  href="https://linkedin.com/in/agnellagrata"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-white rounded-full text-slate-500 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all shadow-sm text-sm font-bold"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="w-full space-y-3 text-xs text-slate-500 border-t border-slate-200/50 py-5">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-rose-400" />
                    <span className="uppercase tracking-widest text-[10px] font-bold opacity-60">
                      Base
                    </span>
                  </div>
                  <span className="font-bold text-slate-700">
                    IDN 🇮🇩 / SGP 🇸🇬
                  </span>
                </div>
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={14} className="text-indigo-400" />
                    <span className="uppercase tracking-widest text-[10px] font-bold opacity-60">
                      Education
                    </span>
                  </div>
                  <span className="font-bold text-slate-700">
                    SMU IS (Year 1)
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full mt-auto">
                <a
                  href="/Agnella_CV.pdf"
                  download
                  className="w-full group bg-slate-900 text-white py-3.5 rounded-2xl font-bold border-2 border-transparent hover:bg-white hover:text-slate-900 hover:border-slate-900 transition-all flex items-center justify-center gap-2 shadow-xl text-sm"
                >
                  <Download
                    size={18}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                  <span>Download Resume</span>
                </a>
                <a
                  href="mailto:agnella.a.2025@computing.smu.edu.sg"
                  className="w-full bg-white text-slate-900 py-3.5 rounded-2xl font-bold border-2 border-white hover:border-rose-200 hover:text-rose-500 transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN GRID */}
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-5 min-h-[500px]">
          <BentoCard
            href="/ui-ux"
            title="UI/UX"
            label="Design"
            color="blue"
            subtitle="User-centered design"
            visualSrc="/mockup.png"
          />
          <BentoCard
            href="/data"
            title="Data"
            label="Analytics"
            color="purple"
            subtitle="Data analysis and insights"
            // ADDED: This uses a code-based component instead of an image
            customVisual={<DataVisual />} 
            extraClasses="translate-y-4 translate-x-4"
          />
          <BentoCard
            href="/graphic"
            title="Graphic"
            label="Design"
            color="rose"
            subtitle="Visual and creative design"
            visualSrc="/design.png"
            extraClasses="translate-x-4 scale-110" 
          />
          <BentoCard
            href="/others"
            title="Other"
            label="Projects"
            color="green"
            subtitle="Side projects and experiments"
            visualSrc="/other.png"
            extraClasses="scale-[0.8]"
            hoverScale="group-hover:scale-[0.9]"
          />
        </section>
      </div>
    </main>
  );
}

// NEW: A mini component that looks like a glass chart
function DataVisual() {
    return (
        <div className="w-48 h-32 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-lg p-4 flex flex-col justify-between relative overflow-hidden">
            {/* Fake Header */}
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            
            {/* Bars */}
            <div className="flex items-end justify-between h-16 gap-2 mt-2">
                <div className="w-full bg-purple-300/50 rounded-t-sm h-[40%] animate-pulse"></div>
                <div className="w-full bg-purple-400/50 rounded-t-sm h-[70%]"></div>
                <div className="w-full bg-purple-500/50 rounded-t-sm h-[50%]"></div>
                <div className="w-full bg-purple-600/50 rounded-t-sm h-[90%]"></div>
            </div>

            {/* Floating Circle decoration */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-200/50 rounded-full blur-md"></div>
        </div>
    )
}

function BentoCard({ href, title, label, color, subtitle, visualSrc, customVisual, extraClasses = "", hoverScale = "group-hover:scale-110" }) {
  const colors = {
    blue: [
      "from-blue-50/50",
      "to-white/80",
      "text-blue-700/80",
      "shadow-blue-200/50",
    ],
    purple: [
      "from-purple-50/50",
      "to-white/80",
      "text-purple-700/80",
      "shadow-purple-200/50",
    ],
    rose: [
      "from-rose-50/50",
      "to-white/80",
      "text-rose-700/80",
      "shadow-rose-200/50",
    ],
    green: [
      "from-green-50/50",
      "to-white/80",
      "text-green-700/80",
      "shadow-green-200/50",
    ],
  };
  const [from, to, textColor, shadowColor] = colors[color];

  return (
    <Link
      href={href}
      className="group relative rounded-[2.5rem] p-8 bg-gradient-to-br from-white/50 to-white/80 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-white/60 hover:bg-white/90 flex flex-col justify-between min-h-[280px]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${from} ${to} opacity-100 group-hover:opacity-0 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none">
        <div className="flex justify-between items-start">
          <h3 className="font-heading text-3xl text-slate-800">
            {title}
            <br />
            <span className={`text-${color}-400 font-script`}>{label}</span>
          </h3>
          <div
            className={`bg-white p-3 rounded-full text-slate-400 group-hover:text-${color}-500 group-hover:rotate-45 transition-all duration-500 shadow-sm`}
          >
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        <p
          className={`text-${color}-900/40 font-bold text-xs tracking-widest uppercase mt-auto pt-12`}
        >
          {subtitle}
        </p>
      </div>

      {/* RENDER EITHER IMAGE OR CUSTOM VISUAL */}
      {(visualSrc || customVisual) && (
        <div className={`absolute -bottom-6 -right-4 w-64 h-64 flex items-center justify-center transition-all duration-500 group-hover:-rotate-6 group-hover:-translate-y-4 pointer-events-none ${hoverScale} ${extraClasses}`}>
          <div className="w-full h-full relative flex items-center justify-center">
            {visualSrc ? (
                <Image
                src={visualSrc}
                alt={`${title} visual`}
                fill
                className="object-contain drop-shadow-2xl"
                />
            ) : (
                customVisual
            )}
          </div>
        </div>
      )}
    </Link>
  );
}