// pages/bonuses.tsx
import React from "react";

const BonusesPage: React.FC = () => {
    return (
        <section className="mb-8 bg-slate-200 mt-25 p-5">
            <h2 className="mb-2 text-2xl font-semibold">
                Вы хотите участвовать в госзакупках и получать выгодные контракты? Тогда
                вам нужна наша реферальная платформа, которая поможет вам найти лучшие
                предложения и рекомендовать их своим партнерам.
            </h2>
            <p className="mb-8 bg-slate-200">
                Наша платформа - это удобный и надежный инструмент для поиска и анализа
                госзакупок. Вы можете выбирать те закупки, которые подходят вам по
                критериям, сравнивать их по цене, срокам и условиям, а также получать
                подробную информацию о заказчиках и конкурентах. Но самое главное - вы
                можете зарабатывать на рефералах. Если вы нашли интересную закупку, но
                не можете или не хотите участвовать в ней, вы можете поделиться ей с
                другими поставщиками, которые зарегистрированы на нашей платформе. За
                каждого поставщика, который примет участие в закупке по вашей
                рекомендации, вы получите процент от его выручки. Таким образом, вы не
                только помогаете своим партнерам, но и увеличиваете свой доход.
            </p>
            <p className="mb-8 bg-slate-400 p-3">
                Чтобы начать пользоваться нашей реферальной платформой, вам нужно просто
                зарегистрироваться на нашем сайте 1 и заполнить свой профиль. После
                этого вы сможете искать, просматривать и делиться госзакупками с другими
                пользователями. Вы также сможете отслеживать статус своих рефералов и
                получать свои вознаграждения. Не упустите свой шанс стать частью
                революции в сфере госзакупок. Присоединяйтесь к нашей реферальной
                платформе сегодня и получайте выгоду от каждой закупки.
            </p>
            <div className="gap-3 flex">
                <img
                    src="data:image/png;base64,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"
                    alt="bonus"
                />
                <img
                    src="/public/images/blog/referalinai-programma-f0f91e86.jpeg"
                    alt="bonus"
                />
            </div>
        </section>
    );
};

export default BonusesPage;
