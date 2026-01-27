const errorCategories = [
  {
    emoji: "🔧",
    title: "Двигатель и трансмиссия",
    description: "Ошибки двигателя, АКПП, пропуски зажигания, нестабильный холостой ход",
    color: "orange",
  },
  {
    emoji: "🛡",
    title: "Безопасность",
    description: "ABS, подушки безопасности (AirBag)",
    color: "violet",
  },
  {
    emoji: "🛞",
    title: "Подвеска и ходовая",
    description: "Пневмоподвеска, адаптивные амортизаторы, рулевая рейка",
    color: "orange",
  },
  {
    emoji: "📊",
    title: "Датчики и показатели",
    description: "Давление в шинах, температура ОЖ, уровень масла, расход топлива",
    color: "violet",
  },
  {
    emoji: "⚙️",
    title: "Расходники и износ",
    description: "Тормозные колодки, катализатор, бензонасос",
    color: "orange",
  },
];

export default function ErrorCategoriesSection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Заголовок */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Какие ошибки покажет сканер
          </h2>
        </div>

        {/* Сетка категорий */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {errorCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Эмодзи в кружке */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    category.color === "orange"
                      ? "bg-gradient-to-br from-orange-100 to-orange-50"
                      : "bg-gradient-to-br from-violet-100 to-violet-50"
                  }`}
                >
                  <span className="text-2xl">{category.emoji}</span>
                </div>

                <div>
                  {/* Заголовок категории */}
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                    {category.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badge "18+ категорий" */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-violet-500 text-white px-6 py-3 rounded-full shadow-lg shadow-orange-500/30">
            <span className="text-lg font-bold">Всего 18+ категорий ошибок</span>
          </div>
        </div>
      </div>
    </section>
  );
}
