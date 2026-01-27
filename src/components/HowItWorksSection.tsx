import { Plug, Bluetooth, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Plug,
    title: "Подключите сканер",
    description: "Вставьте в OBD-II разъём (есть в каждом авто с 1996 года, обычно под рулём)",
    color: "orange",
  },
  {
    number: 2,
    icon: Bluetooth,
    title: "Соедините со смартфоном",
    description: "Bluetooth подхватит автоматически — работает с iPhone и Android",
    color: "violet",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Смотрите результат",
    description: "Приложение покажет все ошибки с расшифровкой на русском языке",
    color: "orange",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Заголовок */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Как работает: <span className="text-orange-500">3 шага</span> — <span className="text-violet-500">5 минут</span>
          </h2>
        </div>

        {/* 3 шага */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              {/* Номер шага */}
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold text-white mb-4 ${
                  step.color === "orange"
                    ? "bg-gradient-to-br from-orange-500 to-orange-600"
                    : "bg-gradient-to-br from-violet-500 to-violet-600"
                }`}
              >
                {step.number}
              </div>

              {/* Иконка */}
              <div className="flex justify-center mb-4">
                <step.icon
                  className={`w-12 h-12 md:w-16 md:h-16 ${
                    step.color === "orange" ? "text-orange-500" : "text-violet-500"
                  }`}
                />
              </div>

              {/* Заголовок шага */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Описание */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
