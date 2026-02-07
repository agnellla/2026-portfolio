"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import Image from "next/image";

export default function UiUxPage() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const projects = [
    {
      title: "Schematics 2025",
      type: "Event Website",
      role: "UI/UX Staff",
      date: "May 2025",
      star: [
        {
          label: "Situation",
          text: "I was a member of the UI/UX team for Schematics 2025, a major annual tech event hosted by the Department of Informatics at Institut Teknologi Sepuluh Nopember (ITS).",
        },
        {
          label: "Task",
          text: "I was responsible for designing high-impact web pages, including the Hero section, E-commerce shop, Webinar information, and Authentication flows.",
        },
        {
          label: "Action",
          text: "I analyzed the established design system and visual branding to identify opportunities for innovation. I collaborated with the Graphic Design team to request custom assets that pushed the boundaries of the event's visual identity, then iterated on designs through senior-led consultations to ensure strict adherence to brand guidelines.",
        },
        {
          label: "Result",
          text: "Accomplished a cohesive, illustration-heavy web experience as measured by a 100% successful handoff rate to the backend team, by doing strategic asset integration and rigorous senior design reviews.",
        },
      ],
      
      images: [
        "/ui-ux/schematics-1.png",
        "/ui-ux/schematics-2.png",
        "/ui-ux/schematics-3.png",
      ],
      tools: ["Figma", "Visual Hierarchy", "Prototyping"],
    },
    {
      title: "Study Buddy",
      type: "Productivity App Concept",
      role: "UI/UX Designer",
      date: "Oct 2024",
      star: [
        {
          label: "Situation",
          text: "I competed in a high-stakes UI/UX competition with a team of peers to solve modern challenges in the education field.",
        },
        {
          label: "Task",
          text: "We were tasked with brainstorming and designing a comprehensive web application from scratch, focusing on student productivity.",
        },
        {
          label: "Action",
          text: "I led the research phase by using various business frameworks to identify user pain points and define our value proposition. I then translated these insights into a design system, crafting a 6-page interface covering the home dashboard, task management, learning modules, and an integrated calendar.",
        },
        {
          label: "Result",
          text: 'Accomplished a high-fidelity educational MVP as measured by positive feedback during usability testing for "ease of navigation," by doing thorough problem identification and framework-driven brand development.',
        },
      ],
      videoSrc: "/ui-ux/study-buddy.mp4",
      tools: ["Mobile Design", "User Research", "Usability Testing"],
    },
    {
      title: "Sang Demonstran",
      type: "Theatrical Play Site",
      role: "Lead UI/UX Designer",
      date: "Mar 2024",
      star: [
        {
          label: "Situation",
          text: "I was part of the web development team for 'Sang Demonstran', a school theatrical production for a practical examination that needed a digital home.",
        },
        {
          label: "Task",
          text: "We needed to build an informational website to showcase play details and host a blog for cast members to document their practice journey.",
        },
        {
          label: "Action",
          text: "I brainstormed with the team to define the site structure and navigation for easy access to information. I designed visual elements in Adobe Illustrator and prototyped the layout before handing it off to the backend developers.",
        },
        {
          label: "Result",
          text: "Successfully launched a comprehensive information hub that allowed cast members to share their experiences and the audience to learn about the production.",
        },
      ],
      videoSrc: "/ui-ux/sang-demo.mp4",
      tools: ["Adobe Illustrator", "User Flow", "Wireframing"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden selection:bg-blue-100 font-sans text-slate-800">
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none fixed"></div>

      <div className="max-w-6xl mx-auto p-6 md:p-12 relative z-10">
        <div className="fixed top-6 left-6 z-50">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-white/70 backdrop-blur-md border border-slate-200/50 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
          >
            <ArrowLeft
              size={18}
              className="text-slate-400 group-hover:text-blue-600 transition-colors"
            />
            <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
              Dashboard
            </span>
          </Link>
        </div>

        <div className="mb-12 pt-12">
          <h1 className="font-heading text-5xl md:text-6xl text-slate-900 mb-4">
            UI/UX <span className="font-script text-blue-500">Gallery</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            A visual walkthrough of my interface designs and problem-solving
            process.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onViewFull={(src) => setLightboxSrc(src)}
            />
          ))}
        </div>

        <div className="mt-24 text-center pb-12">
          <p className="font-script text-3xl text-slate-400 mb-4">
            Like what you see?
          </p>
          <a
            href="mailto:agnella.a.2025@computing.smu.edu.sg"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200/50"
          >
            Hire Me for UI/UX
          </a>
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setLightboxSrc(null)}
        >
          <button className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full">
            <X size={32} />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={lightboxSrc}
              alt="Full View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}

function ProjectCard({ project, onViewFull }) {
  const [currentImgSlide, setCurrentImgSlide] = useState(0);

  const [textStep, setTextStep] = useState(0);

  useEffect(() => {
    if (!project.images) return;
    const timer = setInterval(() => {
      setCurrentImgSlide((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project.images]);

  const nextText = () =>
    setTextStep((prev) => (prev + 1) % project.star.length);
  const prevText = () =>
    setTextStep(
      (prev) => (prev - 1 + project.star.length) % project.star.length,
    );

  return (
    <div className="group relative bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
          <div className="mb-2">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">
              {project.type}
            </span>
            <h3 className="font-heading text-4xl text-slate-900 leading-tight mb-2">
              {project.title}
            </h3>

            <div className="flex items-center gap-3">
              <span className="inline-block bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">
                {project.role}
              </span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                {project.date}
              </span>
            </div>
          </div>

          <div className="w-12 h-1 bg-blue-100 rounded-full my-5"></div>

          <div className="relative min-h-[160px] mb-6 bg-blue-50/50 border border-blue-100 rounded-2xl p-6 pb-12">
            <div className="flex items-center justify-between mb-3">
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors duration-300
                        ${
                          textStep === 0
                            ? "bg-blue-200 text-blue-700"
                            : textStep === 1
                              ? "bg-purple-200 text-purple-700"
                              : textStep === 2
                                ? "bg-orange-200 text-orange-700"
                                : "bg-green-200 text-green-700"
                        }
                    `}
              >
                {project.star[textStep].label}
              </span>

              <div className="flex gap-1">
                <button
                  onClick={prevText}
                  className="p-1.5 rounded-full bg-white hover:bg-blue-200 text-slate-400 hover:text-blue-700 transition-colors shadow-sm"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextText}
                  className="p-1.5 rounded-full bg-white hover:bg-blue-200 text-slate-400 hover:text-blue-700 transition-colors shadow-sm"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed animate-[fadeIn_0.5s_ease-out]">
              {project.star[textStep].text}
            </p>

            <div className="absolute bottom-6 left-6 flex gap-1 mt-4">
              {project.star.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === textStep ? "w-6 bg-blue-400" : "w-2 bg-blue-200"}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-white text-slate-500 text-[10px] font-bold rounded-full border border-slate-200 shadow-sm uppercase"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative w-full aspect-video rounded-[2rem] overflow-hidden bg-slate-200 border border-slate-200 group-hover:scale-[1.02] transition-transform duration-500 shadow-inner group/media cursor-pointer">
          {project.videoSrc && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project.videoSrc} type="video/mp4" />
            </video>
          )}

          {project.images && (
            <div
              className="w-full h-full relative"
              onClick={() => onViewFull(project.images[currentImgSlide])}
            >
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentImgSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover/media:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={16} className="text-blue-600" />
                  View Full Image
                </span>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10 pointer-events-none">
                {project.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                      idx === currentImgSlide
                        ? "bg-blue-600 w-4"
                        : "bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
