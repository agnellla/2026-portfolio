"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function GraphicPage() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const collections = [
    {
      title: "SMU .Hack",
      role: "Marketing Executive",
      date: "2025 - Present",
      color: "bg-purple-50 text-purple-600",
      layoutType: "feed",
      vei: [
        {
          label: "Vision",
          text: "Introduced the 8th Executive Committee through a futuristic, high-contrast visual identity designed to resonate with the software development community.",
        },
        {
          label: "Execution",
          text: 'Blended software-inspired motifs, keyboard vectors, gear icons, and cursor elements, with vibrant gradient beams and color-mapped assets to create a "captivating" tech-forward aesthetic.',
        },
        {
          label: "Impact",
          text: "Accomplished a comprehensive 14-slide digital campaign as measured by a 100% on-time delivery of executive branding, by doing an end-to-end overhaul of existing color palettes and asset libraries.",
        },
      ],
      items: [
        {
          gallery: ["/gd/hack1.png"],
          alt: ".Hack Computer", 
        },
        { 
          gallery: ["/gd/hack2.png", "/gd/hack2-2.png"],
          alt: "Marketing Welcome Post", 
        },
        { 
          gallery: ["/gd/hack3.png"],
          alt: "8th Executive Committee Introduction", 
        },
      ],
    },
    {
      title: "AIESEC in Indonesia",
      role: "Internal Communication Specialist",
      date: "2026",
      color: "bg-orange-50 text-orange-600",
      layoutType: "feed",
      vei: [
        {
          label: "Vision",
          text: 'Established a cohesive visual identity centered on the "Umbrella" concept (represented by ☂️), symbolizing an inclusive environment for all community partners across Indonesia while aligning with the national slogan, "Unleashing the Power of Connectivity".',
        },
        {
          label: "Execution",
          text: `Engineered a streamlined design workflow by developing accessible templates that accommodated team members with no prior Figma experience. These designs integrated modern "background blur" aesthetics to maintain high-end brand consistency, ensuring internal content remained professional and aligned with AIESEC's national digital presence.`,
        },
        {
          label: "Impact",
          text: "Accomplished a high-visibility digital strategy resulting in 75,000+ content views across 8 carousel posts as measured by audience engagement metrics, by doing comprehensive content planning and managing cross-functional internal communications for local chapters nationwide.",
        },
      ],
      items: [
        {
          gallery: [
            "/gd/aiesec/experience nfc1.png",
            "/gd/aiesec/experience nfc2.png",
            "/gd/aiesec/experience nfc3.png",
            "/gd/aiesec/experience nfc4.png",
            "/gd/aiesec/experience nfc5.png",
            "/gd/aiesec/experience nfc6.png",
          ],
          alt: "Lesson Learned Post",
        },
        {
          gallery: [
            "/gd/aiesec/lcp1.jpg",
            "/gd/aiesec/lcp2.png",
            "/gd/aiesec/lcp3.png",
            "/gd/aiesec/lcp4.png",
            "/gd/aiesec/lcp5.png",
          ],
          alt: "Lead Gen Post",
        },
        {
          gallery: [
            "/gd/aiesec/welcome1.png",
            "/gd/aiesec/welcome2.png",
            "/gd/aiesec/welcome3.png",
          ],
          alt: "Storytelling Asset",
        },
      ],
    },
    {
      title: "StudentsxCEOs",
      role: "Creative Design Manager",
      date: "2024 - 2025",
      color: "bg-rose-50 text-rose-600",
      layoutType: "feed",
      vei: [
        {
          label: "Vision",
          text: 'Aimed for a "modern corporate" aesthetic using a signature purple-and-yellow palette to balance professional credibility with creative energy.',
        },
        {
          label: "Execution",
          text: 'Integrated vectorized illustrations of stationery and clocks with "Glassmorphism" (background blur) effects to create a sophisticated, multi-layered visual depth.',
        },
        {
          label: "Impact",
          text: "Accomplished the production of 30+ unique marketing assets as measured by zero missed deadlines and successful peer-review quality control, by doing cross-functional collaboration and lead design management.",
        },
      ],
      items: [
        {
          gallery: [
            "/sxc/activities - 1.png",
            "/sxc/activities - 2.png",
            "/sxc/activities - 3.png",
            "/sxc/activities - 4.png",
          ],
          alt: "Instagram Feed",
        },
        {
          gallery: [
            "/sxc/GTKC 1.png",
            "/sxc/GTKC 2.png",
            "/sxc/GTKC 4.png",
            "/sxc/GTKC 5.png",
            "/sxc/GTKC 6.png",
          ],
          alt: "Get to Know the CEO",
        },
        {
          gallery: [
            "/gd/sxc/cv2.png",
            "/gd/sxc/cv2.png",
            "/gd/sxc/cv3.png",
          ],
          alt: "Resume VS CV",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden selection:bg-rose-100 font-sans text-slate-800">
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-[100px] pointer-events-none fixed"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none fixed"></div>

      <div className="max-w-6xl mx-auto p-6 md:p-12 relative z-10">
        <div className="fixed top-6 left-6 z-50">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-white/70 backdrop-blur-md border border-slate-200/50 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
          >
            <ArrowLeft
              size={18}
              className="text-slate-400 group-hover:text-rose-600 transition-colors"
            />
            <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
              Dashboard
            </span>
          </Link>
        </div>

        <div className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl text-slate-900 mb-4">
            Visual <span className="font-script text-rose-500">Snacks</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            A collection of social media, branding, and marketing assets.
          </p>
        </div>

        <div className="space-y-32">
          {collections.map((collection, index) => (
            <CollectionSection
              key={index}
              collection={collection}
              onViewFull={(src) => setLightboxSrc(src)}
            />
          ))}
        </div>

        <div className="mt-32 text-center pb-12">
          <p className="font-script text-3xl text-slate-400 mb-4">
            Need visuals like these?
          </p>
          <a
            href="mailto:agnella.a.2025@computing.smu.edu.sg"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-200/50"
          >
            Contact for Commissions
          </a>
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxSrc(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-rose-400 transition-colors">
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={lightboxSrc}
              alt="Full View"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

function CollectionSection({ collection, onViewFull }) {
  const [veiStep, setVeiStep] = useState(0);

  const nextVei = () =>
    setVeiStep((prev) => (prev + 1) % collection.vei.length);
  const prevVei = () =>
    setVeiStep(
      (prev) => (prev - 1 + collection.vei.length) % collection.vei.length,
    );

  return (
    <div className="space-y-8">
      <div className="flex flex-row justify-between items-end border-b border-slate-200 pb-4">
        <div>
          <h2 className="font-heading text-3xl text-slate-800 mb-2">
            {collection.title}
          </h2>
          <span
            className={`${collection.color} px-2 py-1 rounded-md text-xs font-bold uppercase tracking-widest`}
          >
            {collection.role}
          </span>
        </div>
        <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">
          {collection.date}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collection.items.map((item, idx) => (
          <GalleryItem
            key={idx}
            item={item}
            layoutClasses="col-span-1 aspect-[4/5]"
            onViewFull={onViewFull}
          />
        ))}
      </div>

      <div className="relative min-h-[140px] bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] 
            ${
              veiStep === 0
                ? "bg-rose-100 text-rose-600"
                : veiStep === 1
                  ? "bg-orange-100 text-orange-600"
                  : "bg-purple-100 text-purple-600"
            }`}
          >
            {collection.vei[veiStep].label}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prevVei}
              className="p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextVei}
              className="p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
          {collection.vei[veiStep].text}
        </p>
        <div className="flex gap-1 mt-6">
          {collection.vei.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${idx === veiStep ? "w-8 bg-slate-800" : "w-2 bg-slate-200"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryItem({ item, layoutClasses, onViewFull }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = item.gallery || [];
  const hasMultiple = images.length > 1;

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white ${layoutClasses}`}
    >
      <div className="w-full h-full relative">
        {images.length > 0 ? (
          <Image
            src={images[currentIndex]}
            alt={item.alt || "Gallery Image"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300 font-bold">
            Coming Soon
          </div>
        )}
      </div>

      {hasMultiple && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      <div
        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-6 cursor-pointer"
        onClick={() => onViewFull(images[currentIndex])}
      >
        <span className="bg-white/90 backdrop-blur text-slate-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
          <Maximize2 size={12} /> View
        </span>
      </div>
    </div>
  );
}