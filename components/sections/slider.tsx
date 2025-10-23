"use client";

import { useState, useEffect } from "react";
import { ASSETS_PATHS } from "../constants/AssetsPaths";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Slider() {
  const { translations, language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const images = [
    { src: ASSETS_PATHS.img_Slider5, alt: "img5" },
    { src: ASSETS_PATHS.img_Slider6, alt: "img6" },
    { src: ASSETS_PATHS.img_Slider7, alt: "img7" },
    { src: ASSETS_PATHS.img_Slider8, alt: "img8" },
    
    { src: ASSETS_PATHS.img_Slider1, alt: "img1" },
  
  ];

  const total = images.length;
  const autoSlideInterval = 4000; // 4 ثوان

  useEffect(() => {
    setMounted(true); 
  }, []);

  // Auto-slide functionality with progress indicator
  useEffect(() => {
    if (!mounted || !isAutoPlaying) {
      setProgress(0);
      return;
    }

    let startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = (elapsed / autoSlideInterval) * 100;
      setProgress(progressPercent);

      if (progressPercent >= 100) {
        setCurrent((prev) => (prev + 1) % total);
        startTime = Date.now();
        setProgress(0);
      }
    }, 50); // Update progress every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [mounted, isAutoPlaying, total, autoSlideInterval, current]);

  if (!mounted) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="slider" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* خلفية ديكورية */}
      <div className="absolute inset-0 bg-gradient-to-r from-main/5 via-transparent to-main/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-main/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-cairo mb-6 leading-tight">
            <span className="bg-gradient-to-r from-main to-blue-600 bg-clip-text text-transparent">
              {translations?.slider?.title || "الأنشطة"}
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto leading-relaxed">
            {translations?.slider?.subtitle || "اكتشف الأنشطة المتنوعة والبرامج التعليمية المتميزة في مدرستنا"}
          </p>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Container مع تأثيرات بصرية محسنة */}
          <div 
            className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{
                transform: `translateX(${language === "ar" ? current * 100 : -current * 100}%)`,
              }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="flex-none w-full h-full relative group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* طبقة تدرج لوني مع تأثيرات */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* معلومات الصورة مع تأثيرات */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <h3 className="text-2xl font-bold text-white mb-2 font-cairo">
                        {translations?.slider?.activities?.[idx]?.title || `النشاط ${idx + 1}`}
                      </h3>
                      <p className="text-white/90 text-lg font-cairo">
                        {translations?.slider?.activities?.[idx]?.description || "وصف النشاط التعليمي المتميز"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* أزرار التنقل مع تصميم جديد */}
            <button
              onClick={prevSlide}
              className={`absolute top-1/2 -translate-y-1/2 z-20 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl hover:bg-white/30 hover:shadow-2xl transition-all duration-300 group ${
                language === "ar" ? "right-8" : "left-8"
              }`}
            >
              <svg 
                className={`w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300 ${
                  language === "ar" ? "rotate-180" : ""
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className={`absolute top-1/2 -translate-y-1/2 z-20 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl hover:bg-white/30 hover:shadow-2xl transition-all duration-300 group ${
                language === "ar" ? "left-8" : "right-8"
              }`}
            >
              <svg 
                className={`w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300 ${
                  language === "ar" ? "rotate-180" : ""
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* زر التحكم في Auto-slide مع تصميم جديد */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/50 transition-all duration-300 group"
              title={isAutoPlaying ? (translations?.slider?.controls?.pauseAutoPlay || "إيقاف التشغيل التلقائي") : (translations?.slider?.controls?.startAutoPlay || "تشغيل تلقائي")}
            >
              {isAutoPlaying ? (
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* عداد الصور */}
            <div className="absolute bottom-6 left-6 z-20 bg-black/30 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm font-medium">
                {current + 1} / {total}
              </span>
            </div>
          </div>

          {/* مؤشرات الصفحات مع تصميم جديد */}
          <div className="flex justify-center mt-10 space-x-4">
            {images.map((_, idx) => (
              <div key={idx} className="relative">
                <button
                  onClick={() => setCurrent(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                    current === idx 
                      ? 'bg-main border-main scale-125 shadow-lg' 
                      : 'bg-white/50 border-white/50 hover:bg-main/50 hover:border-main/50 hover:scale-110'
                  }`}
                />
                {/* مؤشر التقدم مع تصميم جديد */}
                {current === idx && isAutoPlaying && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-main to-blue-500 rounded-full transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
