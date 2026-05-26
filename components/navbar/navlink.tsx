"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { menus } from "./menus";

export default function Navlink() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      {/* ================= MOBILE TOGGLE BUTTON ================= */}
      <div className="flex lg:hidden justify-end px-4 py-3">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            p-2 rounded-xl
            text-slate-800
            hover:bg-yellow-500/10
            transition
          "
        >
          {mobileOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
        </button>
      </div>

      {/* ================= DESKTOP MENU ================= */}
      <div className="hidden lg:flex justify-center">
        <div className="flex items-center gap-1 font-semibold tracking-wide">
          {menus.map((menu) =>
            menu.sub ? (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(menu.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`
                    flex items-center gap-1 px-5 py-3 rounded-xl
                    transition-all duration-300
                    ${
                      openDropdown === menu.label
                        ? "text-[#D4AF37]  bg-slate-900 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                        : "text-slate-800 hover:text-[#D4AF37]"
                    }
                  `}
                >
                  {menu.label}
                  <IoChevronDown />
                </button>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {openDropdown === menu.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="
                        absolute left-0 top-full mt-3 w-80
                        bg-slate-900 text-white
                        rounded-2xl
                        border border-yellow-500/30
                        shadow-[0_20px_40px_rgba(0,0,0,0.6)]

                        max-h-[60vh] overflow-y-auto
                        scrollbar-thin scrollbar-thumb-yellow-500/50 scrollbar-track-transparent
                      "
                    >
                      {menu.sub.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="
                            block px-6 py-4 text-sm
                            border-b border-white/10 last:border-none
                            hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-transparent
                            hover:text-[#D4AF37]
                            transition
                          "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={menu.label}
                href={menu.href!}
                className="
                  px-5 py-3 rounded-xl
                  text-slate-800 font-semibold
                  hover:text-[#D4AF37]
                  hover:shadow-[0_0_12px_rgba(212,175,55,0.4)]
                  transition
                "
              >
                {menu.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              lg:hidden
              fixed
              top-16 left-0
              w-full
              z-40

              bg-slate-900 text-white
              border-t border-yellow-500/30

              max-h-[calc(100vh-4rem)]
              overflow-y-auto
            "
          >
            <div className="px-6 py-4 space-y-2">
              {menus.map((menu) =>
                menu.sub ? (
                  <div key={menu.label}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === menu.label ? null : menu.label
                        )
                      }
                      className="
                        flex w-full justify-between items-center
                        px-4 py-3 rounded-xl
                        text-[#D4AF37] font-semibold
                        hover:bg-yellow-500/10
                      "
                    >
                      {menu.label}
                      <IoChevronDown />
                    </button>

                    <AnimatePresence>
                      {openDropdown === menu.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-1"
                        >
                          {menu.sub.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="
                                block px-4 py-2 rounded-lg text-sm
                                hover:text-[#D4AF37]
                                hover:bg-yellow-500/10
                              "
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={menu.label}
                    href={menu.href!}
                    onClick={() => setMobileOpen(false)}
                    className="
                      block px-4 py-3 rounded-xl
                      text-[#D4AF37] font-semibold
                      hover:bg-yellow-500/10
                    "
                  >
                    {menu.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
