export default function HeroSection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-orange-50/30 via-white to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Левая колонка — текст */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              Автосканер AUTOVIZOR <span className="text-orange-500">ELM327</span> — вся диагностика <span className="text-violet-500">в вашем смартфоне</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-0 md:mb-6 leading-relaxed">
              Подключите к авто, откройте приложение — и через 5 минут узнаете
              реальное состояние машины. <span className="font-semibold text-gray-800">Без СТО, без переплат.</span>
            </p>

            {/* Badge — только на десктопе */}
            <div className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-xl">🚗</span>
              <span className="text-sm font-semibold text-gray-700">
                Подходит для 99% автомобилей с 1996 года
              </span>
            </div>
          </div>

          {/* Правая колонка — фото */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-md aspect-square bg-gradient-to-br from-orange-100 via-orange-50 to-violet-50 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/10 ring-1 ring-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
              {/* Placeholder для фото */}
              <div className="text-center p-8">
                <div className="text-5xl md:text-6xl mb-4">📱</div>
                <p className="text-xs md:text-sm text-violet-400 font-mono bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">[Фото сканера]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Badge — только на мобилке, под фото */}
        <div className="flex md:hidden justify-center mt-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
            <span className="text-lg">🚗</span>
            <span className="text-sm font-semibold text-gray-700">
              Подходит для 99% авто с 1996 года
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
