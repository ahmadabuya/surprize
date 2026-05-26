import type { Metadata } from "next";
import "./globals.css";
import { Dancing_Script, Poppins } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-romantic",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const floatingHearts = Array.from({ length: 25 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  fontSize: `${12 + Math.random() * 24}px`,
  animationDuration: `${2 + Math.random() * 5}s`,
}));

export const metadata: Metadata = {
  metadataBase: new URL("https://domainkamu.com"),

  title: "Happy Birthday My Love ❤️",

  description:
    "Website surprise ulang tahun romantis spesial untuk istri tercinta.",

  keywords: [
    "surprise ulang tahun istri",
    "happy birthday wife",
    "website romantis",
    "birthday surprise",
    "love story",
  ],

  openGraph: {
    title: "Happy Birthday Sayang ❤️",

    description:
      "Sebuah surprise romantis penuh cinta untuk wanita tercinta.",

    url: "/",

    siteName: "Birthday Surprise",

    images: [
      {
        url: "/og-romantic.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday My Love ❤️",
    description:
      "Website surprise romantis untuk ulang tahun istri tercinta.",
    images: ["/og-romantic.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`
          ${dancing.variable}
          ${poppins.variable}
          bg-gradient-to-b
          from-pink-100
          via-rose-200
          to-red-300
          text-white
          overflow-x-hidden
          font-[var(--font-poppins)]
        `}
      >
        {/* Floating Blur Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400/30 blur-3xl rounded-full animate-pulse"></div>

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/30 blur-3xl rounded-full animate-pulse"></div>

          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-rose-300/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Floating Hearts */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {floatingHearts.map((heart, i) => (
            <span
              key={i}
              className="absolute text-pink-200/40 animate-bounce"
              style={{
                left: heart.left,
                top: heart.top,
                fontSize: heart.fontSize,
                animationDuration: heart.animationDuration,
              }}
            >
              ❤️
            </span>
          ))}
        </div>

        {/* Romantic Overlay */}
        <div className="min-h-screen backdrop-blur-[1px]">
          {children}
        </div>
      </body>
    </html>
  );
}