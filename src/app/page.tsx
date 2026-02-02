"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  { name: "Айдар С.", text: "Работает, схема двухплатная, датчики показывает, чтобы посмотреть ошибки и удалить — пойдёт" },
  { name: "Sergey S.", text: "Доставка быстрая. Свисток рабочий. Немного пришлось поломать голову, но потом разобрался. Читайте инструкцию :)" },
  { name: "Александр Б.", text: "Работает отлично. Проверял на Exeed VX и SsangYong Kyron. Всё подключается, ошибки стирает" },
  { name: "Денис Е.", text: "Отличный сканер, берёт даже ВАЗ 2107 и ВАЗ 2114" },
  { name: "Александр Т.", text: "На Солярисе 2 всё хорошо показало пропуск в 1 цилиндре. Сканер окупил себя сразу — диагностика стоила бы 1500₽" },
  { name: "Александр С.", text: "Сканер работает корректно, на Гранту Кросс 2023 г.в. подключился" },
];

const OZON_URL = "https://www.ozon.ru/product/avtoskaner-dlya-diagnostiki-avtomobilya-autovizor-elm327-obd2-skaner-pic18f25k80-2-platy-3211185218/?utm_source=landing&utm_medium=cpc&utm_campaign=vendor_org_prelanding";

export default function ShortLanding() {
  const [currentReview, setCurrentReview] = useState(0);

  // Отправка цели просмотра страницы в Яндекс.Метрику
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      window.ym(106410600, "reachGoal", "landing_view");
    }
  }, []);

  // Автопереключение каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handleCTAClick = () => {
    // Отправка цели в Яндекс.Метрику
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      window.ym(106410600, "reachGoal", "cta_click");
    }
    window.open(OZON_URL, "_blank");
  };

  return (
    <main className="h-dvh bg-gradient-to-b from-orange-50/30 via-white to-white flex flex-col p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <div className="w-full max-w-sm mx-auto flex flex-col gap-2 h-full">

        {/* Заголовок — фиксированный */}
        <div className="text-center flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            Автосканер AUTOVIZOR <span className="text-orange-500">ELM327</span>
          </h1>
          <p className="text-base text-gray-600 mt-1">
            Вся диагностика <span className="text-violet-500 font-medium">в вашем смартфоне</span>
          </p>
        </div>

        {/* Фото товара с badges — растягивается/сжимается */}
        <div className="relative flex-1 min-h-0 flex flex-col my-1">
          {/* Badge: Хит продаж */}
          <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            🏆 Хит продаж
          </div>

          {/* Badge: 99% авто */}
          <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            ✓ для 99% авто
          </div>

          {/* Фото — занимает доступное пространство */}
          <div className="relative flex-1 min-h-0 rounded-2xl overflow-hidden shadow-xl shadow-orange-500/10 border border-orange-100">
            <Image
              src="/images/ELM_327_newlogo_viz.45.jpg"
              alt="AUTOVIZOR ELM327"
              fill
              className="object-cover"
              priority
            />
            {/* Badges снизу внутри фото */}
            <div className="absolute bottom-2 left-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              📱 iOS + Android
            </div>
            <div className="absolute bottom-2 right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              🔧 v1.5 полная
            </div>
          </div>

          {/* Badges под фото */}
          <div className="flex flex-col gap-1 mt-2 flex-shrink-0">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">✓</span>
              <span>Официальный дилер</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">✓</span>
              <span>Без подделок! 100% гарантия</span>
            </div>
          </div>
        </div>

        {/* Карусель отзывов — фиксированная */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 p-3 flex-shrink-0">
          {/* Звёзды */}
          <div className="flex justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Отзыв с навигацией */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>

            <div className="flex-1 text-center h-[76px] flex flex-col justify-center">
              <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                &ldquo;{reviews[currentReview].text}&rdquo;
              </p>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                — {reviews[currentReview].name}
              </p>
            </div>

            <button
              onClick={nextReview}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Индикаторы */}
          <div className="flex justify-center gap-1 mt-2">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentReview ? "bg-orange-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Цена и CTA — фиксированный */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 p-4 text-center relative flex-shrink-0">
          {/* Ярлычок скидки */}
          <div className="absolute -top-2 right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-md">
            -43%
          </div>

          {/* Цена */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-sm text-gray-400 line-through">2 000 ₽</span>
            <span className="text-2xl font-bold text-orange-500">1 142 ₽</span>
          </div>
          <p className="text-xs text-gray-500 mb-3">разовый платёж</p>

          {/* CTA кнопка */}
          <button
            onClick={handleCTAClick}
            className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 text-base font-bold rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-600/40 transition-all duration-300 hover:scale-[1.02]"
          >
            Купить на Ozon
          </button>
        </div>

      </div>
    </main>
  );
}
