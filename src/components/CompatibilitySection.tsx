import { Check } from "lucide-react";

export default function CompatibilitySection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Заголовок */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Подойдёт ли <span className="text-violet-500">вам</span>
          </h2>
        </div>

        {/* 3 карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Автомобили */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Автомобили</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
              Любые с 1996 года выпуска — американские, европейские, азиатские.
            </p>
            <p className="text-sm md:text-base font-semibold text-orange-600">
              9 протоколов OBD-II = совместимость с 99% авто
            </p>
          </div>

          {/* Смартфоны */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-violet-50 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Смартфоны</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700">iPhone (iOS) — через Bluetooth LE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700">Android — через обычный Bluetooth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700">Windows — тоже работает</span>
              </div>
            </div>
          </div>

          {/* Приложения */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                <span className="text-2xl">📲</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Приложения</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
              Работает с бесплатными приложениями:
            </p>
            <p className="text-sm md:text-base text-gray-700 font-medium mb-3">
              CarScanner • Torque • OpenDiag • DashCommand • Carista
            </p>
            <p className="text-sm md:text-base font-semibold text-violet-600">
              Интерфейс на русском языке
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
