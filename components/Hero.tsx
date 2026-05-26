"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type HeartType = {
  left: string;
  duration: string;
  size: string;
  delay: string;
};

export default function RomanticBirthdaySurprise() {
  const [mounted, setMounted] = useState(false);
  const [hearts, setHearts] = useState<HeartType[]>([]);
  const [showSurprise, setShowSurprise] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const surpriseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));

    const generatedHearts = Array.from({ length: 40 }, () => ({
      left: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 10}s`,
      size: `${15 + Math.random() * 25}px`,
      delay: `${Math.random() * 5}s`,
    }));

    const t = setTimeout(() => setHearts(generatedHearts), 0);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  const playMusic = async () => {
    try {
      await audioRef.current?.play();
    } catch (err) {
      console.log(err);
    }
  };

  

  const handleSurprise = async () => {
    setShowSurprise(true);

    await playMusic();

    setTimeout(() => {
      surpriseRef.current?.scrollIntoView({
        behavior: "smooth",
      });

    }, 300);
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900 via-rose-700 to-black" />

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <div
            key={i}
            className="absolute bottom-[-50px] animate-float opacity-40"
            style={{
              left: heart.left,
              animationDuration: heart.duration,
              animationDelay: heart.delay,
              fontSize: heart.size,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
          <h1 className="mb-8 animate-pulse text-5xl font-black leading-tight md:text-8xl">
            Happy Birthday ❤️
          </h1>

          <p className="text-xl text-white/90 md:text-3xl">
            Untuk istriku tercinta...
          </p>

          <p className="mt-6 text-lg text-white/70 md:text-xl">
            Aku punya sesuatu untukmu 🎁
          </p>

          <button
            onClick={handleSurprise}
            className="mt-10 rounded-full bg-pink-500 px-8 py-4 text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-pink-400"
          >
            🎁 Buka Surprise
          </button>
        </div>
      </section>

      {/* SURPRISE */}
      {showSurprise && (
        <section
          ref={surpriseRef}
          className="relative z-10 px-6 py-20 animate-fadeIn"
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div className="relative z-10">
            {/* TITLE */}
            <div className="mb-16 text-center">
              <h2 className="animate-scale text-5xl font-black md:text-7xl">
                💖 Kenangan Kita 💖
              </h2>

              <p className="mt-8 animate-slideUp text-xl leading-relaxed text-white/80 md:text-2xl">
                Semua perjalanan ini...
                <br />
                adalah bagian terindah dalam hidupku ❤️
              </p>
            </div>

            {/* MEMORIES */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  img: "/images/1.jpg",
                  text: "ku ingin selalu bersama ❤️",
                },
                {
                  img: "/images/2.jpg",
                  text: "Senyummu selalu bikin aku bahagia 😍",
                },
                {
                  img: "/images/3.jpg",
                  text: "Semua perjalanan bersamamu sangat indah ✨",
                },
                {
                  img: "/images/4.jpg",
                  text: "Moment tertawa bareng yang gak akan kulupa 😂",
                },
                {
                  img: "/images/5.jpg",
                  text: "Hari spesial saat kita menikah 💍",
                },
                {
                  img: "/images/6.jpg",
                  text: "Moment pernikahan kita yang paling bahagia 👰🤵",
                },
                {
                  img: "/images/7.jpg",
                  text: "Terima kasih sudah jadi rumah terbaik ❤️",
                },
                {
                  img: "/images/8.jpg",
                  text: "Aku ingin menua bersamamu selamanya 💖",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-card group overflow-hidden rounded-[30px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl"
                  style={{
                    animationDelay: `${i * 1}s`,
                  }}
                >
                  {/* IMAGE */}
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt="memory"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="p-6 text-center text-lg font-semibold">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* LOVE LETTER */}
            <div className="mx-auto mt-24 max-w-3xl animate-fadeIn rounded-[30px] border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">
              <h3 className="mb-6 text-4xl font-bold">
                💌 Untukmu
              </h3>

              <p className="text-lg leading-relaxed text-white/85 md:text-xl">
                Terima kasih sudah hadir di hidupku.
                <br />
                Terima kasih sudah menjadi rumah ternyaman untuk hatiku.
                <br />
                <br />
                Semoga di ulang tahunmu ini,
                semua kebahagiaan selalu menyertaimu.
                <br />
                <br />
                Aku mencintaimu hari ini,
                besok,
                dan selamanya ❤️
              </p>
            </div>

            {/* EXTRA SPACE */}
            <div className="h-[100vh]" />
          </div>
        </section>
      )}

      {/* MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/music/romantic.wav" type="audio/mp3" />
      </audio>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          10% {
            opacity: 0.5;
          }

          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }

        @keyframes scale {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale {
          animation: scale 1s ease forwards;
        }

        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }

          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 1.5s ease forwards;
        }

        @keyframes card {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.8);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-card {
          opacity: 0;
          animation: card 1.2s ease forwards;
        }
      `}</style>
    </div>
  );
}