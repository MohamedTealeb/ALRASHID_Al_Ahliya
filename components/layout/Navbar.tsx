"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSETS_PATHS } from "../constants/AssetsPaths";
import { gsap } from "gsap";
import Image from "next/image";

// Animated Link Component
const AnimatedLink = ({
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const underlineRef = useRef<HTMLDivElement>(null);

  const animateUnderline = (direction: "in" | "out") => {
    if (!underlineRef.current) return;

    if (direction === "in") {
      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(underlineRef.current, {
        scaleX: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-main transition font-medium relative ${className}`}
      onMouseEnter={() => animateUnderline("in")}
      onMouseLeave={() => animateUnderline("out")}
    >
      {children}
      <div
        ref={underlineRef}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-main transform scale-x-0"
      />
    </Link>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, translations, toggleLanguage } = useLanguage();

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo and School Name */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src={ASSETS_PATHS.LOGOO}
              width={64}
              height={64}
              className="object-contain"
              alt="Logo"
            />
            <div
              className={`font-sans ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`text-lg font-semibold text-gray-800 ${
                  language === "ar" ? "font-bold" : ""
                }`}
              >
                {translations?.navbar.brand}
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">
                {translations?.navbar.brandEn}
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex items-center text-gray-700 font-sans ${
            language === "ar" ? "flex-row-reverse" : ""
          } gap-8`}
        >
          {language === "ar" ? (
            <>
              <AnimatedLink href="#slider">
                {translations?.navbar.activities}
              </AnimatedLink>
              <AnimatedLink href="#academic">
                {translations?.navbar.academics}
              </AnimatedLink>
              <AnimatedLink href="#about">
                {translations?.navbar.about}
              </AnimatedLink>
              <Link
                href="/"
                className="text-main font-semibold bg-main/10 hover:bg-main/15 transition rounded-full px-3 py-1"
              >
                {translations?.navbar.home}
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-main font-semibold bg-main/10 hover:bg-main/15 transition rounded-full px-3 py-1"
              >
                {translations?.navbar.home}
              </Link>
              <AnimatedLink href="#about">
                {translations?.navbar.about}
              </AnimatedLink>
              <AnimatedLink href="#academic">
                {translations?.navbar.academics}
              </AnimatedLink>
              <AnimatedLink href="#slider">
                {translations?.navbar.activities}
              </AnimatedLink>
            </>
          )}
        </nav>

        {/* Desktop Buttons (Teams & Language Switcher) */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://teams.microsoft.com" 
            target="_blank"
            className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
            aria-label="Microsoft Teams"
          >
            <Image 
              src='/microsoft-teams-svgrepo-com.svg' 
              alt={translations?.footer?.teams?.alt || "Microsoft Teams"}
              width={20}
              height={20}
              className="object-contain"
            />
          </a>
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="text-sm border-gray-700 text-gray-700 hover:bg-main/10 hover:border-main hover:text-main font-sans"
          >
            {language === "en" ? "AR" : "EN"}
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side={language === "ar" ? "right" : "left"}
              className="w-72 sm:w-80"
            >
              <SheetHeader className="border-b border-gray-200 pb-3">
                <SheetTitle className="text-main font-sans">
                  {translations?.navbar.brand}
                </SheetTitle>
                <SheetDescription className="text-gray-600 font-sans">
                  {translations?.navbar.brandEn}
                </SheetDescription>
              </SheetHeader>

              <nav
                className={`mt-4 flex flex-col text-gray-700 font-sans ${
                  language === "ar" ? "text-right" : ""
                } space-y-1`}
              >
                {language === "ar" ? (
                  <>
                    <AnimatedLink href="#slider" onClick={() => setOpen(false)}>
                      {translations?.navbar.activities}
                    </AnimatedLink>
                    <AnimatedLink
                      href="#academic"
                      onClick={() => setOpen(false)}
                    >
                      {translations?.navbar.academics}
                    </AnimatedLink>
                    <AnimatedLink href="#about" onClick={() => setOpen(false)}>
                      {translations?.navbar.about}
                    </AnimatedLink>
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="text-main font-semibold bg-main/10 hover:bg-main/15 transition rounded-full px-3 py-2"
                    >
                      {translations?.navbar.home}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="text-main font-semibold bg-main/10 hover:bg-main/15 transition rounded-full px-3 py-2"
                    >
                      {translations?.navbar.home}
                    </Link>
                    <AnimatedLink href="#about" onClick={() => setOpen(false)}>
                      {translations?.navbar.about}
                    </AnimatedLink>
                    <AnimatedLink
                      href="#academic"
                      onClick={() => setOpen(false)}
                    >
                      {translations?.navbar.academics}
                    </AnimatedLink>
                    <AnimatedLink href="#slider" onClick={() => setOpen(false)}>
                      {translations?.navbar.activities}
                    </AnimatedLink>
                  </>
                )}

                {/* زر Teams وزر تغيير اللغة داخل الموبايل */}
                <div className="mt-4 space-y-2">
                  <a 
                    href="https://teams.microsoft.com" 
                    target="_blank"
                    onClick={() => setOpen(false)}
                    className="w-full h-14 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 shadow-lg border border-blue-200"
                    aria-label="Microsoft Teams"
                  >
                    <Image 
                      src='/microsoft-teams-svgrepo-com.svg' 
                      alt={translations?.footer?.teams?.alt || "Microsoft Teams"}
                      width={40}
                      height={40}
                      className="object-contain mr-2"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {translations?.footer?.teams?.shortTitle || "Teams"}
                    </span>
                  </a>
                  <Button
                    variant="outline"
                    onClick={() => {
                      toggleLanguage();
                      setOpen(false);
                    }}
                    className="w-full border-gray-700 text-gray-700 hover:bg-main/10 hover:border-main hover:text-main font-sans"
                  >
                    {language === "en" ? "AR" : "EN"}
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
