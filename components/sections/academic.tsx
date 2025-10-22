'use client';

import { ASSETS_PATHS } from "../constants/AssetsPaths";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from 'next/image';

export default function Academic() {
    const { translations } = useLanguage();
    
    return (
        <section id="academic" className="relative min-h-screen flex items-center justify-center bg-white py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* المحتوى النصي */}
                    <div className="flex-1 text-center lg:text-right">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-main font-cairo mb-6">
                            {translations?.academic?.title || "الأساس الضروري للتفوق الأكاديمي"}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 font-cairo mb-10 max-w-2xl mx-auto lg:mx-0">
                            {translations?.academic?.subtitle || "اختر أفضل الدورات المخصصة للتفوق الأكاديمي والاستعداد للاختبارات"}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <button className="bg-main hover:bg-main text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 font-cairo">
                                {translations?.academic?.primaryCta || "استكشاف الدورات"}
                            </button>
                            <button className="border-2 border-main text-main hover:bg-main hover:text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 font-cairo">
                                {translations?.academic?.secondaryCta || "تسجيل الطلاب"}
                            </button>
                        </div>
                    </div>
                    
                    {/* الصورة */}
                    <div className="flex-1">
                        <div className="relative">
                            <Image 
                                className="w-full h-auto rounded-2xl object-cover shadow-2xl" 
                                src={ASSETS_PATHS.logo_small} 
                                alt="Academic excellence" 
                                width={600}
                                height={400}
                            />
                            {/* زخرفة خلفية */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-60 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* منحنى سفلي */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>
    );
}