'use client';

import { ASSETS_PATHS } from "../constants/AssetsPaths";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function useCountUp(targetNumber: number, shouldStart: boolean, durationMs: number = 1500) {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (!shouldStart) return;

        function step(timestamp: number) {
            if (startTimeRef.current === null) startTimeRef.current = timestamp;
            const elapsed = timestamp - (startTimeRef.current || 0);
            const progress = Math.min(elapsed / durationMs, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const value = Math.floor(easedProgress * targetNumber);
            setCurrentValue(value);
            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(step);
            } else {
                setCurrentValue(targetNumber);
            }
        }

        animationFrameRef.current = requestAnimationFrame(step);
        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
            startTimeRef.current = null;
        };
    }, [shouldStart, targetNumber, durationMs]);

    return currentValue;
}

function CountUpText({ value, start }: { value: string; start: boolean }) {
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    const numericPart = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : '';
    const animated = useCountUp(Math.round(numericPart), start);
    return <>{start ? `${animated}${suffix}` : value}</>;
}

export default function About() {
    const { translations } = useLanguage();

    const stats = [
        { number: "2000+", label: translations?.about?.stats?.students || "طالب" },
        { number: "150+", label: translations?.about?.stats?.teachers || "معلم" },
        { number: "35+", label: translations?.about?.stats?.years || "سنة خبرة" },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* خلفية ديكورية */}
            <div className="absolute inset-0 bg-gradient-to-r from-main/5 via-transparent to-blue-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 right-10 w-40 h-40 bg-main/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-400/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* العنوان الرئيسي */}
                <div className="text-center mb-20">
                    
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-cairo mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-main to-blue-600 bg-clip-text text-transparent">
                            {translations?.about?.title || "من نحن"}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 font-cairo max-w-4xl mx-auto leading-relaxed">
                        {translations?.about?.subtitle || "مدرسة الراشد الأهلية - رحلة تعليمية متميزة"}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    {/* النص الوصفي */}
                    <div className="space-y-8">
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
                            <p className="text-lg text-gray-700 font-cairo leading-relaxed">
                                {translations?.about?.description || "نحن مؤسسة تعليمية رائدة تلتزم بتقديم تعليم متميز يجمع بين الأصالة والحداثة، ونهدف إلى تنمية قدرات الطلاب وتطوير مهاراتهم في بيئة تعليمية محفزة ومبتكرة."}
                            </p>
                        </div>
                        
                        {/* الرؤية والرسالة */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-main/5 to-main/10 p-6 rounded-2xl border border-main/20 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-main rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-main font-cairo">
                                        {translations?.about?.vision?.title || "رؤيتنا"}
                                    </h3>
                                </div>
                                <p className="text-gray-600 font-cairo leading-relaxed">
                                    {translations?.about?.vision?.description || "أن نكون المدرسة الرائدة في تقديم تعليم متميز يواكب متطلبات العصر ويحافظ على القيم الأصيلة."}
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 p-6 rounded-2xl border border-blue-500/20 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-600 font-cairo">
                                        {translations?.about?.mission?.title || "رسالتنا"}
                                    </h3>
                                </div>
                                <p className="text-gray-600 font-cairo leading-relaxed">
                                    {translations?.about?.mission?.description || "توفير بيئة تعليمية متكاملة تحفز على الإبداع والتميز، وتنمي الشخصية المتوازنة للطلاب."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* الصورة */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <Image 
                                src={ASSETS_PATHS.about} 
                                alt="مدرسة الراشد الأهلية" 
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* طبقة تدرج محسنة */}
                            <div className="absolute inset-0 bg-gradient-to-t from-main/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            {/* معلومات إضافية تظهر عند hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                    <h4 className="text-lg font-bold text-main font-cairo mb-2">
                                        {translations?.about?.imageInfo?.title || "مدرسة الراشد الأهلية"}
                                    </h4>
                                    <p className="text-gray-600 font-cairo text-sm">
                                        {translations?.about?.imageInfo?.subtitle || "مؤسسة تعليمية متميزة"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* زخارف محسنة */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce shadow-lg"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70 animate-pulse shadow-lg"></div>
                        <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-60 animate-ping"></div>
                    </div>
                </div>

                {/* القيم */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-cairo mb-4">
                            <span className="bg-gradient-to-r from-main to-blue-600 bg-clip-text text-transparent">
                                {translations?.about?.values?.title || "قيمنا"}
                            </span>
                        </h3>
                            <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
                                {translations?.about?.values?.subtitle || "القيم الأساسية التي نؤمن بها ونسعى لتحقيقها"}
                            </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {translations?.about?.values?.values?.map((value: {title: string, description: string}, index: number) => (
                            <div 
                                key={index}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center group relative overflow-hidden"
                            >
                                {/* خلفية متدرجة */}
                                <div className="absolute inset-0 bg-gradient-to-br from-main/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* أيقونة محسنة */}
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-gradient-to-br from-main to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <span className="text-white font-bold text-2xl">{index + 1}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-main font-cairo mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {value.title}
                                    </h4>
                                    <p className="text-gray-600 font-cairo leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                                
                                {/* تأثير إضافي */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* الإحصائيات */}
                <StatsSection stats={stats} />
            </div>
        </section>
    );
}

function StatsSection({ stats }: { stats: { number: string; label: string }[] }) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStart(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);
    const { translations } = useLanguage();

    return (
        <div ref={containerRef} className="relative overflow-hidden">
            {/* خلفية متدرجة مع تأثيرات */}
            <div className="absolute inset-0 bg-gradient-to-br from-main via-main to-blue-600"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            {/* عناصر ديكورية */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-12 text-white border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold font-cairo mb-4">
                        {translations?.about?.stats?.title || "إحصائياتنا المتميزة"}
                    </h3>
                    <p className="text-white/80 text-lg font-cairo">
                        {translations?.about?.stats?.subtitle || "أرقام تعكس تميزنا ونجاحنا في مجال التعليم"}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                                <div className="text-5xl md:text-6xl font-bold mb-4 font-cairo bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                    <CountUpText value={stat.number} start={start} />
                                </div>
                                <div className="text-xl font-cairo font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

