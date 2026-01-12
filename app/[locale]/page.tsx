"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Instagram,
  UtensilsCrossed,
  Coffee,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  // Define translations for each section
  const tNav = useTranslations("Nav");
  const tHero = useTranslations("Hero");
  const tInfo = useTranslations("Info");
  const tMenu = useTranslations("Menu");
  const tPromo = useTranslations("Promo");
  const tFooter = useTranslations("Footer");

  // State for Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cafeInfo = {
    phone: "095 675 4661",
    facebook:
      "https://www.facebook.com/profile.php?id=100054620671656&locale=th_TH",
  };

  // Use Keys ("toast", "coffee") instead of hardcoded text
  const menuHighlights = [
    {
      key: "toast",
      price: "฿89",
      icon: <UtensilsCrossed />,
    },
    {
      key: "coffee",
      price: "฿55",
      icon: <Coffee />,
    },
    {
      key: "milk",
      price: "฿45",
      icon: <UtensilsCrossed />,
    },
    {
      key: "appetizer",
      price: "฿69",
      icon: <UtensilsCrossed />,
    },
  ];

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-amber-50 selection:bg-orange-200 selection:text-orange-900">
      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className={`text-2xl font-black tracking-tighter ${
                scrolled ? "text-orange-600" : "text-white text-shadow"
              }`}
            >
              NOM
              <span className={scrolled ? "text-stone-800" : "text-amber-300"}>
                NOEY
              </span>
              .
            </span>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex gap-8 font-medium ${
              scrolled ? "text-stone-600" : "text-white/90"
            }`}
          >
            <a href="#home" className="hover:text-orange-500 transition-colors">
              {tNav("home")}
            </a>
            <a href="#menu" className="hover:text-orange-500 transition-colors">
              {tNav("menu")}
            </a>
            <a
              href="#location"
              className="hover:text-orange-500 transition-colors"
            >
              {tNav("location")}
            </a>
            <a
              href="#contact"
              className="hover:text-orange-500 transition-colors"
            >
              {tNav("contact")}
            </a>
            {/* Language Switcher */}
            <div className="flex gap-2 border-l border-white/30 pl-4">
              <a href="/en" className="hover:text-amber-400">
                EN
              </a>
              <a href="/th" className="hover:text-amber-400">
                TH
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-orange-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X />
            ) : (
              <Menu className={!scrolled ? "text-white" : ""} />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 flex flex-col p-4 gap-4 md:hidden animate-fade-in-up">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-stone-700"
            >
              {tNav("home")}
            </a>
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-stone-700"
            >
              {tNav("menu")}
            </a>
            <a
              href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-stone-700"
            >
              {tNav("location")}
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-stone-700"
            >
              {tNav("contact")}
            </a>
            <div className="flex gap-4 border-t pt-4">
              <a href="/en" className="text-stone-500 font-bold">
                EN
              </a>
              <a href="/th" className="text-stone-500 font-bold">
                TH
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section
          id="home"
          className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-80">
            {/* Make sure cafe-bg.jpg is in your public folder! */}
            <div className="absolute inset-0 bg-[url('/background_main.jpg')] bg-cover bg-center "></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 text-center px-4 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-300/30 text-orange-50 font-bold text-sm mb-4">
              {tHero("badge")}
            </div>

            {/* Using raw() to allow HTML tags like <br> inside translation */}
            <h1
              className="text-5xl md:text-7xl font-black text-white leading-tight text-shadow"
              dangerouslySetInnerHTML={{ __html: tHero.raw("title") }}
            />

            <p className="text-lg md:text-xl text-stone-100 max-w-xl mx-auto font-light">
              {tHero("subtitle")}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all hover:scale-105 shadow-lg shadow-orange-900/20"
              >
                {tHero("viewMenu")}
              </a>
              <a
                href="#location"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                {tHero("visitUs")}
              </a>
            </div>
          </div>
        </section>

        {/* --- INFO CARDS --- */}
        <section className="relative z-20 -mt-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
              <Clock className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{tInfo("hoursTitle")}</h3>
              <p className="text-stone-600">{tInfo("days")}</p>
              <p className="text-xl font-bold text-stone-800">
                {tInfo("time")}
              </p>
              <p className="text-sm text-stone-400 mt-2">
                {tInfo("lastOrder")}
              </p>
            </div>

            {/* Card 2: Location */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-amber-500 delay-100">
              <MapPin className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {tInfo("locationTitle")}
              </h3>
              <p className="text-stone-600">{tInfo("locationDesc")}</p>
              <p className="text-sm text-stone-500 mt-2">{tInfo("address")}</p>
              <a
                href="https://maps.app.goo.gl/LprBCQsAfaE48QnLA"
                target="_blank"
                className="inline-flex items-center text-orange-600 font-bold mt-4 text-sm hover:underline"
              >
                {tInfo("getDirections")} <ChevronRight size={16} />
              </a>
            </div>

            {/* Card 3: Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-stone-800 delay-200">
              <Phone className="w-10 h-10 text-stone-800 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {tInfo("contactTitle")}
              </h3>
              <p className="text-stone-600">{tInfo("call")}</p>
              <p className="text-2xl font-bold text-orange-600 mt-2">
                {cafeInfo.phone}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href={cafeInfo.facebook}
                  className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition"
                >
                  <Facebook size={20} />
                </a>
                {/* <button className="p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition">
                  <Instagram size={20} />
                </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* --- MENU HIGHLIGHTS --- */}
        <section id="menu" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">
                {tMenu("badge")}
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-stone-900">
                {tMenu("title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuHighlights.map((item) => (
                <div
                  key={item.key}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-stone-100"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  {/* Dynamic Translation Key based on ID */}
                  <h4 className="font-bold text-lg mb-2">
                    {tMenu(`items.${item.key}.title`)}
                  </h4>
                  <p className="text-stone-500 text-sm mb-4">
                    {tMenu(`items.${item.key}.desc`)}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-xl text-stone-800">
                      {item.price}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-stone-900 text-stone-900 font-bold rounded-full hover:bg-stone-900 hover:text-white transition-all">
                {tMenu("fullMenu")} <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* --- PROMO SECTION --- */}
        <section className="bg-orange-600 text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Coffee size={400} />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-black">
              {tPromo("title")}
            </h2>
            <p className="text-orange-100 text-lg">{tPromo("desc")}</p>
            <div className="inline-block bg-white text-orange-600 font-bold px-6 py-2 rounded-lg shadow-lg rotate-3 hover:rotate-0 transition-transform cursor-default">
              {tPromo("tag")}
            </div>
          </div>
        </section>

        {/* --- MAP / FOOTER --- */}
        <section
          id="location"
          className="h-[400px] w-full bg-stone-200 relative group"
        >
          {/* Placeholder for Map */}
          <div className="absolute inset-0 flex items-center justify-center text-stone-400 bg-stone-100">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-2 text-stone-300" />
              <p>Google Map Embed Area</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-80 bg-white p-6 rounded-xl shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity">
            <h4 className="font-bold text-stone-800 mb-1">
              NomNoey Dessert & Cafe
            </h4>
            <p className="text-sm text-stone-500 mb-4">
              {tInfo("locationDesc")}
            </p>
            <a
              href="https://maps.app.goo.gl/LprBCQsAfaE48QnLA"
              className="block w-full py-2 bg-orange-600 text-white text-center rounded-lg font-bold text-sm hover:bg-orange-700 transition"
            >
              {tFooter("openMap")}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 px-4 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>
            © {new Date().getFullYear()} {tFooter("rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              {tFooter("privacy")}
            </a>
            <a href="#" className="hover:text-white transition">
              {tFooter("terms")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
