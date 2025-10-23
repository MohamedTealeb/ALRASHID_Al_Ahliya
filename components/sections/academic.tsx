'use client';

import { ASSETS_PATHS } from "../constants/AssetsPaths";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Academic() {
  const { translations } = useLanguage();

  
  return (
    <section
      id="academic"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 overflow-hidden py-24"
    >
      {/* عناصر زخرفية متحركة بالخلفية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300/20 blur-3xl rounded-full animate-blob-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/30 blur-3xl rounded-full animate-blob-slow animation-delay-2000"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-16">
         {/* الصورة */}
         <motion.div
           initial={{ opacity: 0, x: -50, rotate: -3 }}
           whileInView={{ opacity: 1, x: 0, rotate: 0 }}
           transition={{ duration: 0.9 }}
           className="relative w-full lg:w-1/2 flex justify-center"
         >
           <div className="relative group">
             <div className="relative overflow-hidden rounded-4xl shadow-2xl">
               <Image
                 src={ASSETS_PATHS.logo_small}
                 alt="Academic excellence"
                 width={550}
                 height={380}
                 className="w-full h-auto object-cover"
                 priority
                 onError={(e) => {
                   console.log('Image failed to load:', e);
                 }}
               />
             </div>
           </div>
         </motion.div>

        {/* المحتوى النصي */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-right"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-main font-cairo leading-tight mb-6">
            {translations?.academic?.title || "اصنع مستقبلك الأكاديمي بخطوات واثقة"}
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-cairo mb-12">
            {translations?.academic?.subtitle ||
              "منصتنا تمنحك الأدوات والمسار المثالي لتتفوق في دراستك وتحقق أهدافك."}
          </p>

      
        </motion.div>
      </div>
    </section>
  );
}
