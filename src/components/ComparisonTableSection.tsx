import { Check, X } from "lucide-react";

const comparisonData = [
  {
    param: "Чип",
    autovizor: "PIC18F25K80 (оригинал)",
    cheap: "Копии, часть функций не работает",
  },
  {
    param: "Прошивка",
    autovizor: "v1.5 полная",
    cheap: "Урезанная",
  },
  {
    param: "Платы",
    autovizor: "2 шт",
    cheap: "1 шт",
  },
  {
    param: "Bluetooth",
    autovizor: "5.0/5.1 + LE для iPhone",
    cheap: "2.0–3.0, iPhone не видит",
  },
  {
    param: "Температура",
    autovizor: "−40° до +85°",
    cheap: "Неизвестно",
  },
  {
    param: "Протоколы OBD-II",
    autovizor: "9 из 9",
    cheap: "3–5",
  },
];

export default function ComparisonTableSection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Заголовок */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Что внутри <span className="text-orange-500">AUTOVIZOR</span>
          </h2>
        </div>

        {/* Таблица */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 overflow-hidden">
          {/* Заголовок таблицы */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="p-3 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
              Параметр
            </div>
            <div className="p-3 md:p-4 font-bold text-sm md:text-base flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-emerald-100/50 text-emerald-700 border-l border-gray-200">
              <Check className="w-4 h-4 md:w-5 md:h-5" />
              <span>AUTOVIZOR</span>
            </div>
            <div className="p-3 md:p-4 font-bold text-sm md:text-base flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100/50 text-red-600 border-l border-gray-200">
              <X className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden md:inline">Дешёвые аналоги</span>
              <span className="md:hidden">Аналоги</span>
            </div>
          </div>

          {/* Строки таблицы */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index !== comparisonData.length - 1 ? "border-b border-gray-100" : ""
              } hover:bg-gray-50/50 transition-colors`}
            >
              <div className="p-3 md:p-4 text-sm md:text-base font-medium text-gray-700">
                {row.param}
              </div>
              <div className="p-3 md:p-4 text-sm md:text-base text-emerald-700 font-medium border-l border-gray-100">
                {row.autovizor}
              </div>
              <div className="p-3 md:p-4 text-sm md:text-base text-gray-500 border-l border-gray-100">
                {row.cheap}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
