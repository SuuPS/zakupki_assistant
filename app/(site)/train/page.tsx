import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};


export default function DocsPage() {
  return (
      <>
        <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-1/4"></div>

              <div className="blog">
                <h1 className="text-5xl font-bold md:text-center">
                  ОБУЧЕНИЕ ГОСЗАКУПКАМ
                </h1>
                <div className="bg">
                  <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 1. Введение в госзакупки:
                      </h3>
                      <p>
                        - Что такое госзакупки и почему они важны для вашего
                        бизнеса.
                        <br /> - Основные преимущества участия в госзакупках для
                        малых и средних предприятий.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ALbV6FzIu-Q?list=RDCMUC6J8F8mTRs2_5rKS_4kRw7Q"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 2. Законодательство и правила:
                      </h3>
                      <p>
                        - Обзор основных законов и правил, регулирующих
                        госзакупки.
                        <br /> - Какие документы и лицензии необходимы для участия
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 3. Регистрация и сертификация:
                      </h3>
                      <p>
                        - Процесс регистрации на платформах для госзакупок.
                        <br /> -Получение необходимых сертификатов и квалификаций.

                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/pf48yyxLnjY?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          title="3 урок. Обеспечение контракта и заявки."
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 4. Поиск и отбор госзаказов:
                      </h3>
                      <p>
                        - Где и как найти информацию о предстоящих госзаказах. -
                        Составление и представление конкурсной заявки. <br />- Как
                        правильно заполнить необходимые формы.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/bWmSd895GOo?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          title="3 урок. Обеспечение контракта и заявки."
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >

                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 5. Подготовка документов:
                      </h3>
                      <p>
                        - Составление и представление конкурсной заявки. <br />-
                        Как правильно заполнить необходимые формы и документацию.
                        - Составление и представление конкурсной заявки.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          title="2 урок. Основные понятия"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 6. Процесс участия в аукционах и торгах:
                      </h3>
                      <p>
                        - Как работают аукционы и торги при госзакупках. <br />-
                        Стратегии для эффективного участия и выигрыша торгов и
                        документацию.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          title="2 урок. Основные понятия"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 7. Поддержка и ресурсы:
                      </h3>
                      <p>
                        - Где получить поддержку и консультации по госзакупкам.
                        <br /> - Онлайн-ресурсы и инструменты для облегчения
                        участия в госзакупках.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          title="2 урок. Основные понятия"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 8. Поддержка и ресурсы:
                      </h3>
                      <p>
                        - Где получить поддержку и консультации по госзакупкам.
                        <br /> - Онлайн-ресурсы и инструменты для облегчения
                        участия в госзакупках.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          title="2 урок. Основные понятия"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>

                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 9. Практические упражнения и тесты:
                      </h3>
                      <p>
                        - Участники могут пройти тесты и практические упражнения
                        для проверки своих знаний и навыков.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          title="2 урок. Основные понятия"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 10. Ответы на вопросы и поддержка:
                      </h3>
                      <p>
                        - Возможность задавать вопросы и получать поддержку от
                        экспертов в области госзакупок.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"

                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div
                        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
                        style={{ opacity: 1, transform: "none" }}
                    >
                      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                        Лекция 11. Обновления и новости:
                      </h3>
                      <p>
                        - Регулярные обновления и новости о последних изменениях в
                        законодательстве и правилах госзакупок.
                      </p>
                      <iframe
                          className="w-150 h-100 mt-6"
                          src="https://www.youtube.com/embed/ChtXu9nLgO4?list=TLPQMDQxMTIwMjMHfZ8j4PZbWw"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
