const painPoints = [
  {
    emoji: "😟",
    text: "Загорелась лампочка на приборке. Непонятно — ехать можно или уже нет.",
    color: "orange",
  },
  {
    emoji: "💸",
    text: "Едете на СТО. Там говорят: «Оставляйте на диагностику». Ждёте. Платите 2 000–4 000₽. Получаете список ошибок, половина из которых — ерунда.",
    color: "violet",
  },
  {
    emoji: "🔧",
    text: "А потом ещё и ремонт навязывают.",
    color: "orange",
  },
  {
    emoji: "⏰",
    text: "Каждая поездка на диагностику — это время, деньги и нервы.",
    color: "violet",
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50 relative overflow-hidden">
      {/* Декоративные orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-violet-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/5 to-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Заголовок */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
          Знакомо?
        </h2>

        {/* Карточки с болями */}
        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 flex items-start gap-4 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Эмодзи в кружке */}
              <div
                className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                  point.color === "orange"
                    ? "bg-gradient-to-br from-orange-100 to-orange-50"
                    : "bg-gradient-to-br from-violet-100 to-violet-50"
                }`}
              >
                <span className="text-xl md:text-2xl">{point.emoji}</span>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1 md:pt-2">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
