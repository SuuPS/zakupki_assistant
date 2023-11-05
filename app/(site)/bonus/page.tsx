// pages/bonuses.tsx
import React from "react";

const BonusesPage: React.FC = () => {
  return (
      <div className="bg-slate-200 p-4 mt-25">
        <h1 className="mb-4 text-3xl font-bold">
          Бонусы для участников госзакупок
        </h1>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5TUhIqbvR-bBUb9SVmaQqT88RRo1oU1bRg&usqp=CAU"
            alt="bonus"
        />
        <section className="mb-8 bg-slate-200">
          <h2 className="mb-2 text-2xl font-semibold">Бонусы за качество</h2>
          <p>
            Участники, предоставившие продукты или услуги высокого качества, могут
            получить дополнительные бонусы или преимущества при участии в будущих
            заказах.
          </p>
        </section>
        <section className="mb-8 bg-slate-200">
          <h2 className="mb-2 text-2xl font-semibold">
            Сокращение сроков оплаты
          </h2>
          <p>
            Активные участники могут получить более короткие сроки оплаты за
            выполненные заказы, что улучшит их ликвидность и финансовое положение.
          </p>
        </section>
        <section className="mb-8 bg-slate-200">
          <h2 className="mb-2 text-2xl font-semibold">
            Предоставление рекомендаций инвесторам
          </h2>
          <p>
            Участники, которые успешно завершили несколько государственных заказов
            и имеют хорошую репутацию, могут получить рекомендации или референсы
            от государственных органов.
          </p>
        </section>
        <section className="mb-8 bg-slate-200">
          <h2 className="mb-2 text-2xl font-semibold">
            Приоритетное рассмотрение заявок
          </h2>
          <p>
            Участники, которые активно сотрудничают с государством, могут получить
            приоритетное рассмотрение своих заявок. Обучение и развитие:
            Предоставление доступа к обучению и развитию для участников, чтобы
            улучшить их профессиональные навыки и способствовать
            конкурентоспособности.
          </p>
        </section>

        {/* Добавьте другие разделы и бонусы по аналогии */}
      </div>
  );
};

export default BonusesPage;
