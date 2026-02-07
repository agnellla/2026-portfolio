"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  Scissors,
  Shirt,
  Instagram,
  Gift,
  Layout,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import Image from "next/image";

export default function OthersPage() {
  const items = [
    {
      title: "T-Shirt Design",
      category: "Apparel / Merch Design",
      icon: <Shirt size={18} />,
      size: "aspect-[4/3]",
      color: "bg-blue-100",
      theme: "blue",
      image: ["/freelance/shirt-1.png", "/freelance/shirt-2.png"],
      story:
        `A streetwear-inspired faculty merchandise design that balances bold academic branding with high-contrast, wearable typography. 
        
        In picture: Class T-Shirt and Prom T-Shirt.`,
    },
    {
      title: "Portrait Infographic",
      category: "Prints",
      icon: <Printer size={18} />,
      size: "aspect-[1/1.414]",
      color: "bg-blue-50",
      theme: "blue",
      image: [
        "/freelance/info1.png",
        "/freelance/info2.png",
        "/freelance/info3.png",
      ],
      story: `A poster designed to simplify complex data through a structured grid and a logical information hierarchy.
        
        In picture: Heroin Rejection Campaign, Bus Campaign, and Child Marriage Rejection Campaign.`,
    },
    {
      title: "Landscape Infographic",
      category: "Prints",
      icon: <Layout size={18} />,
      size: "aspect-[1.414/1]",
      color: "bg-green-50",
      theme: "green",
      image: ["/freelance/mindmap2.jpg", "/freelance/mindmap1.jpg"],
      story: `A wide-format infographic to explain biology concepts through visual elements. 
      
      In picture: Musculoskeletal System and Coordination System.`,
    },
    {
      title: "Magazine Spread",
      category: "Prints",
      icon: <Layout size={18} />,
      size: "aspect-[1/1.41]",
      color: "bg-purple-50",
      theme: "purple",
      image: [
        "/freelance/magazine1.png",
        "/freelance/magazine2.png",
        "/freelance/magazine3.png",
        "/freelance/magazine4.png",
        "/freelance/magazine5.png",
        "/freelance/magazine6.png",
      ],
      story:
        `Explored diverse editorial styles through multiple magazine spreads, specifically adapting typography and layout systems to match unique thematic requirements for each feature.`,
    },
    {
      title: "Social Media Posts",
      category: "Marketing",
      icon: <Instagram size={18} />,
      size: "aspect-[1/1]",
      color: "bg-orange-50",
      theme: "orange",
      image: [
        "/freelance/post1.png",
        "/freelance/post2.png",
        "/freelance/post3.png",
      ],
      story:
        `Vibrant, modern marketing assets created for various occassions; school events and cultural greetings.`,
    },
    {
      title: "Invitation",
      category: "Prints",
      icon: <Layout size={18} />,
      size: "aspect-[1/1.41]",
      color: "bg-rose-50",
      theme: "rose",
      image: ["/freelance/invitation1.png", "/freelance/invitation2.png"],
      story:
        `Sweet 17th birthday invitation with different styles to match my client and myself.`,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden selection:bg-green-100 font-sans text-slate-800">
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 bg-white/70 backdrop-blur-md border border-slate-200/50 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
        >
          <ArrowLeft
            size={18}
            className="text-slate-400 group-hover:text-green-600 transition-colors"
          />
          <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
            Dashboard
          </span>
        </Link>
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto p-6 md:p-12 pt-24 relative z-10">
        <div className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl text-slate-900 mb-4">
            The <span className="font-script text-green-500">Playground</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            A gallery of print experiments, apparel, and visual studies.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, index) => (
            <GalleryCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-24 text-center pb-12">
          <p className="font-script text-3xl text-slate-400 mb-4">
            Have a crazy idea?
          </p>
          <a
            href="mailto:agnella.a.2025@computing.smu.edu.sg"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-200/50"
          >
            Let's Build It
          </a>
        </div>
      </div>
    </main>
  );
}

function GalleryCard({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const images = Array.isArray(item.image) ? item.image : [item.image];
  const hasMultiple = images.length > 1;

  const themes = {
    slate: "text-slate-500 bg-slate-500",
    blue: "text-blue-500 bg-blue-500",
    green: "text-green-500 bg-green-500",
    purple: "text-purple-500 bg-purple-500",
    orange: "text-orange-500 bg-orange-500",
    rose: "text-rose-500 bg-rose-500",
  };

  const currentTheme = themes[item.theme] || themes.slate;
  const [themeText, themeBg] = currentTheme.split(" ");

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="break-inside-avoid group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
      onMouseLeave={() => setShowStory(false)}
    >
      <div className={`relative ${item.size} ${item.color} overflow-hidden`}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`${item.title} image ${idx + 1}`}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}

        {hasMultiple && !showStory && (
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/90 text-slate-800 hover:bg-white shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/90 text-slate-800 hover:bg-white shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <button
          onClick={() => setShowStory(!showStory)}
          className={`absolute top-4 right-4 z-30 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:${themeText} ${showStory ? themeText : "text-slate-400"}`}
        >
          <Info size={20} />
        </button>

        <div
          className={`absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col justify-center p-8 transition-all duration-500 z-20 ${showStory ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <h4
            className={`${themeText} font-bold mb-2 uppercase tracking-widest text-[10px]`}
          >
            The Process
          </h4>
          <p className="text-white text-sm leading-relaxed whitespace-pre-line">{item.story}</p>
          <button
            onClick={() => setShowStory(false)}
            className="mt-6 text-xs font-bold text-slate-400 hover:text-white transition-colors self-start"
          >
            Close Info
          </button>
        </div>

        {hasMultiple && (
          <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1.5 z-30 pointer-events-none">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? `${themeBg} w-4` : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className={themeText}>{item.icon}</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {item.category}
          </span>
        </div>
        <h3 className="font-bold text-slate-800">{item.title}</h3>
      </div>
    </div>
  );
}
