import React, { useState, useEffect } from "react";

const Bot = () => {
    const datas = [
        { number: 2311032390123, name: "Ошское городское муниципальное автотранспортное предприятие" },
        { number: 2311032390109, name: "Открытое акционерное общество Международный аэропорт Манас" },
        { number: 2311032390106, name: "Филиал открытого акционерного общества Национальная электрическая сеть Кыргызстана - Жалал-Абадско" },
        { number: 2311032390104, name: "Государственное предприятие Строительно-монтажное управление Министерства внутренних дел Кыргызской Республики" },
        { number: 2311032390102, name: "Филиал открытого акционерного общества \"Национальная электрическая сеть Кыргызстана\" - Жалал-Абадско" },
        { number: 2311032390101, name: "Ошское городское муниципальное автотранспортное предприятие" },
        { number: 2311032390100, name: "Филиал ОАО \"Национальная электрическая сеть Кыргызстана\"- Баткенское предприятие электрических сетей" },
    ];

    const [result, setResult] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = 30000; // Интервал в миллисекундах (5 секунд)

        if (index < datas.length) {
            const timer = setTimeout(() => {
                setResult((prevResult) => [...prevResult, datas[index]]);
                setIndex((prevIndex) => prevIndex + 1);

                // Воспроизведение звука уведомления
                const audio = new Audio("/public/new_message_tone.wav");

                // Воспроизведение аудио
                audio.play().catch(error => {
                    console.error("Не удалось воспроизвести аудио:", error);
                });

            }, interval);

            return () => clearTimeout(timer);
        }
    }, [index, datas]);

    return (
        <div className="">
            <div className="lg:fixed sm:mt-20 right-10 bottom-5 z-99999" style={{ width: "500px" }}>
                {result.map((item, index) => (
                    <div key={index} className="message-animation">
                        <div className="border border-gray-300 shadow-lg rounded-lg p-4">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                                <div className="flex items-center">
                                    <p className="font-semibold text-blue-500">Bot:</p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-gray-800"><span className="font-medium">№ объявления: </span>{item.number}</p>
                                    <p className="text-gray-800"><span className="font-medium">Название: </span>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bot;
