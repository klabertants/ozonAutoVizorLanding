"use client";

import { Check } from "lucide-react";

const benefits = [
  "Экономия до 4 000₽ на каждой диагностике",
  "Окупается за одну проверку",
  "Проверяйте машину когда угодно — дома, в дороге, при покупке б/у",
  "Расшифровка на русском — понятно без автослесаря",
  "99% авто с 1996 года • iPhone и Android",
];

const OZON_URL = "https://www.ozon.ru/product/avtoskaner-dlya-diagnostiki-avtomobilya-autovizor-elm327-obd2-skaner-pic18f25k80-2-platy-3211185218/?utm_source=landing&utm_medium=cpc&utm_campaign=vendor_org_prelanding";

export default function CTASection() {
  const handleClick = () => {
    // Отправка цели в Яндекс.Метрику
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      window.ym(106410600, "reachGoal", "cta_click");
    }
    window.open(OZON_URL, "_blank");
  };

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-orange-50 via-white to-violet-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl shadow-orange-500/10 border border-orange-100/50 p-6 md:p-12 relative overflow-hidden">
          {/* Декоративные orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/10 to-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Контент */}
          <div className="relative z-10">
            {/* Заголовок */}
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Один сканер — вместо <span className="text-orange-500">бесконечных платежей</span> СТО
            </h2>

            {/* Список выгод */}
            <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto mb-8 md:mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Цена */}
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block bg-gradient-to-r from-orange-50 to-violet-50 border border-orange-200 rounded-2xl px-6 md:px-8 py-4 md:py-5 relative">
                {/* Ярлычок скидки */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/30">
                  -43%
                </div>

                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-lg md:text-xl text-gray-400 line-through">2 000 ₽</span>
                  <span className="text-2xl md:text-4xl font-bold text-orange-500">1 232 ₽</span>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  разовый платёж
                </p>
              </div>
            </div>

            {/* CTA кнопка */}
            <div className="text-center">
              <button
                onClick={handleClick}
                className="bg-violet-500 hover:bg-violet-600 text-white px-10 md:px-16 py-4 md:py-6 text-lg md:text-xl font-bold rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-600/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Купить на Ozon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
