import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Обявления",
    newTab: false,
    path: "/announcements",
  },
  {
    id: 2.1,
    title: "Новости",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Инструкция",
    newTab: false,
    submenu: [
      {
        id: 231,
        title: "О нашей системе",
        newTab: false,
        path: "/docs",
      },
      {
        id: 231,
        title: "Обучение ИП, ОСОО",
        newTab: false,
        path: "/train",
      },
      {
        id: 232,
        title: "Образовательная школа",
        newTab: false,
        path: "/train",
      },
      {
        id: 234,
        title: "Бонусы за активность",
        newTab: false,
        path: "/bonus",
      },
      {
        id: 335,
        title: "Реферальная программа",
        newTab: false,
        path: "/ref",
      },
    ],
  },
];

export default menuData;
