import { Check } from "lucide-react";

const benefits = [
  "Экономия 2 000–4 000₽ на каждой проверке",
  "Расшифровка ошибок на русском — понятно без автослесаря",
  "Проверка при покупке б/у — прямо на месте",
  "Контроль после ремонта — точно ли всё починили",
  "Уверенность на дороге — понимаете, критичная ошибка или нет",
];

export default function BenefitsSection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl shadow-orange-500/10 border border-orange-100/50 p-6 md:p-12 relative overflow-hidden">
          {/* Декоративные orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/10 to-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Контент */}
          <div className="relative z-10">
            {/* Заголовок */}
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
              Решение: диагностика без СТО — <br className="hidden md:block" />
              <span className="text-orange-500">за 5 минут</span> и <span className="text-violet-500">0 рублей</span>
            </h2>

            {/* Подзаголовок */}
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 text-center">
              Один раз купили сканер — и проверяете машину когда угодно:
            </p>

            {/* Список выгод */}
            <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
}
