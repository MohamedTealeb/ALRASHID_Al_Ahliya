import { Cairo } from "next/font/google";
import "./globals.css";
import Providers from './provider';
import DirectionHandler from '@/components/layout/DirectionHandler';

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  title: "ALRASHID Al Ahliya ",
  description: "ALRASHID al Ahliya SCHOOL",
  icons: {
    icon: [
      { url: "/LOGOO.jpg",  type: "image/png" },
      { url: "/IMG1.jpg",  type: "image/png" },
    ],
    
  },
};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${cairo.variable} bg-gray-200`}
        style={{ fontFamily: "var(--font-cairo)" }}
      >
        <Providers>
          <DirectionHandler>
            {children}
          </DirectionHandler>
        </Providers>
      </body>
    </html>
  );
}
