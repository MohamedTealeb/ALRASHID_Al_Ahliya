"use client";
import { ASSETS_PATHS } from "../constants/AssetsPaths";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Footer() {
    const { translations, language } = useLanguage();
    const isRTL = language === 'ar';
    
    return (
        <footer className="relative bg-white text-black overflow-hidden">
            {/* خلفية ديكورية */}
            <div className="absolute inset-0 bg-gradient-to-r from-main/10 via-transparent to-main/5"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-main/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* معلومات المدرسة */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative">
                                <Image src={ASSETS_PATHS.logo} alt="ALRASHID Al-Ahliyah School" width={56} height={56} className="rounded-2xl shadow-lg"/>
                                <div className="absolute -inset-1 bg-gradient-to-r from-main to-blue-500 rounded-2xl blur opacity-30"></div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-cairo text-gray-900">
                                    {translations.footer?.brand || "ALRASHID Al-Ahliyah School"}
                                </h3>
                                <p className="text-main text-sm font-medium">Excellence in Education</p>
                            </div>
                        </div>
                        <p className="text-gray-600 font-cairo leading-relaxed mb-8 text-lg">
                            {translations.footer?.tagline || "نحن نقدم تعليماً متميزاً يغرس القيم والتميز الأكاديمي للطلاب"}
                        </p>
                        
                        {/* وسائل التواصل الاجتماعي */}
                        <div className="flex gap-4">
                            <a className="group w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-main hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-main/25" target="_blank" href="https://www.facebook.com/share/19BekqLHdP/?mibextid=wwXIfr" aria-label="Facebook">
                                <FaFacebookF size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                          
                            <a className="group w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25" href="https://wa.me/96524728127" target="_blank" aria-label="WhatsApp">
                                <FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                        
                        {/* منصة Teams */}
                        <div className="mt-6">
                            <h4 className="text-base font-bold font-cairo mb-3 text-[#B33791]">
                                {translations.footer?.teams?.title || "دخول منصة التيمز اضغط هنا"}
                            </h4>
                            <a 
                                className="w-40 h-20 rounded-full bg-blue-500/20 flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg" 
                                target="_blank" 
                                href="https://teams.microsoft.com" 
                                aria-label="Microsoft Teams"
                            >
                                <Image 
                                    src='/microsoft-teams-svgrepo-com.svg' 
                                    alt={translations.footer?.teams?.alt || "Microsoft Teams"}
                                    width={70}
                                    height={32}
                                    className="object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    {/* الروابط السريعة */}
                    <div>
                        <h4 className="text-xl font-bold font-cairo mb-8 text-gray-900 relative">
                            {translations.footer?.links?.title || "روابط سريعة"}
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-main to-blue-500 rounded-full"></div>
                        </h4>
                        <ul className="space-y-4">
                            <li><a className="group flex items-center text-gray-600 hover:text-main font-cairo transition-all duration-300 hover:translate-x-2" href="#about">
                                <div className="w-2 h-2 bg-main rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                                {translations.footer?.links?.about || "من نحن"}
                            </a></li>
                           
                          
                            <li><a className="group flex items-center text-gray-600 hover:text-main font-cairo transition-all duration-300 hover:translate-x-2" href="#academic">
                                <div className="w-2 h-2 bg-main rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                                {translations.footer?.links?.academics || "  الأكاديمية"}
                            </a></li>
                            <li><a className="group flex items-center text-gray-600 hover:text-main font-cairo transition-all duration-300 hover:translate-x-2" href="#slider">
                                <div className="w-2 h-2 bg-main rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                                {translations.footer?.links?.activities || "الأنشطة"}
                            </a></li>
                        </ul>
                    </div>

                    {/* معلومات التواصل */}
                    <div>
                        <h4 className="text-xl font-bold font-cairo mb-8 text-gray-900 relative">
                            {translations.footer?.contact?.title || "معلومات التواصل"}
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-main to-blue-500 rounded-full"></div>
                        </h4>
                        <div className="space-y-6">
                            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-main/20 flex items-center justify-center flex-shrink-0 group-hover:bg-main group-hover:scale-110 transition-all duration-300">
                                    <FaEnvelope className="w-4 h-4 text-main group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-main font-semibold text-sm mb-1">{translations.footer?.contact?.email || "البريد الإلكتروني"}</p>
                                    <p className="text-gray-600 font-cairo text-sm">info@alrashid.edu.kw</p>
                                </div>
                            </div>
                            
                            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-main/20 flex items-center justify-center flex-shrink-0 group-hover:bg-main group-hover:scale-110 transition-all duration-300">
                                    <FaPhone className="w-4 h-4 text-main group-hover:text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-main font-semibold text-sm mb-1">{translations.footer?.contact?.phone || "الهاتف"}</p>
                                    <div className={`flex items-center gap-2 mb-1 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <p className={`text-gray-600 font-cairo text-sm ${isRTL ? 'text-left' : 'text-left'}`}>
                                            {isRTL ? '96524728127+' : '+96524728127'}
                                        </p>
                                        <a href="https://wa.me/96524728127" target="_blank" className="group/wa flex items-center justify-center w-6 h-6 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-110">
                                            <FaWhatsapp className="w-3 h-3 text-white group-hover/wa:scale-110 transition-transform" />
                                        </a>
                                    </div>
                                    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <p className={`text-gray-600 font-cairo text-sm ${isRTL ? 'text-left' : 'text-left'}`}>
                                            {isRTL ? '96550318283+' : '+96550318283'}
                                        </p>
                                        <a href="https://wa.me/96550318283" target="_blank" className="group/wa flex items-center justify-center w-6 h-6 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-110">
                                            <FaWhatsapp className="w-3 h-3 text-white group-hover/wa:scale-110 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-main/20 flex items-center justify-center flex-shrink-0 group-hover:bg-main group-hover:scale-110 transition-all duration-300">
                                    <FaMapMarkerAlt className="w-4 h-4 text-main group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-main font-semibold text-sm mb-1">{translations.footer?.contact?.address || "العنوان"}</p>
                                    <p className="text-gray-600 font-cairo text-sm">{translations.footer?.contact?.location || "الكويت - منطقة الأحمدي"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ساعات العمل */}
                    <div>
                        <h4 className="text-xl font-bold font-cairo mb-8 text-gray-900 relative">
                            {translations.footer?.workingHours?.title || "ساعات العمل"}
                            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-main to-blue-500 rounded-full"></div>
                        </h4>
                        <div className="space-y-4">
                            <div className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-main/20 flex items-center justify-center group-hover:bg-main group-hover:scale-110 transition-all duration-300">
                                        <FaClock className="w-3 h-3 text-main group-hover:text-white" />
                                    </div>
                                    <span className="text-gray-600 font-cairo text-sm">{translations.footer?.workingHours?.weekdays || "الأحد - الخميس"}</span>
                                </div>
                                <span className="text-main font-semibold text-sm">{translations.footer?.workingHours?.weekdaysTime || "7:00 ص - 2:00 م"}</span>
                            </div>
                            
                            <div className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                                        <FaClock className="w-3 h-3 text-red-500 group-hover:text-white" />
                                    </div>
                                    <span className="text-gray-600 font-cairo text-sm">{translations.footer?.workingHours?.weekend || "الجمعة - السبت"}</span>
                                </div>
                                <span className="text-red-500 font-semibold text-sm">{translations.footer?.workingHours?.weekendTime || "مغلق"}</span>
                            </div>
                            
                            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-main/10 to-blue-500/10 border border-main/20">
                                <p className="text-xs text-gray-500 font-cairo text-center">
                                    {translations.footer?.workingHours?.note || "أوقات العمل قد تختلف في الإجازات الرسمية"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* الخط السفلي */}
                <div className="mt-16 pt-8 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-main to-blue-500 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">R</span>
                            </div>
                            <p className="text-gray-600 font-cairo text-sm">
                                © {new Date().getFullYear()} {translations.footer?.brand || "مدرسة الراشد الهندية"}. {translations.footer?.copyright || "جميع الحقوق محفوظة."}
                            </p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </footer>
    )
}