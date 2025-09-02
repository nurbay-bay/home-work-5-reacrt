# TodoList App (React + Tailwind + Axios)

Приложение для отображения списка задач с [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos).  
Реализованы фильтрация, сортировка, пагинация и статистика.

---

##  Функционал
- Загрузка данных из API с помощью **Axios**
- **Пагинация** с кнопками Prev/Next и номерами страниц
- **Фильтр по выполненности**: Все / Выполненные / Не выполненные
- **Фильтр по пользователю**: выбор из 10 пользователей
- **Сортировка** по ID (asc / desc)
- **Статистика**:
  - всего задач
  - количество после фильтров
- **Лоадер (спиннер)** при загрузке данных
- **Стилизация** с использованием **TailwindCSS**

---

## Структура проекта

```bash
src/
├─ features/todos/
│ ├─ TodoList.jsx # Основной компонент списка задач
| ├─ hooks/
| |  └─ useTodos.js # Хук для загрузки todos
| └─ components/
|    └─ TodoCard.jsx # Карточка задачи
├─ shared/ui/
│ ├─ Button.jsx # Компонент кнопки
│ └─ Select.jsx # Компонент селекта
```

---

## Установка и запуск

```bash
# клонировать репозиторий
git clone https://github.com/nurbay-bay/home-work-5-reacrt

# перейти в папку проекта
cd home-work-5-reacrt

# установить зависимости
npm install

# запустить проект
npm run dev
```

## Технологии
- React 18
- Axios
- TailwindCSS
- Lucide-react (иконки)

## Скриншот интерфейса
![screenshot](./public/screenshot.png)

## Demo
[Посмотреть проект](https://home-work-5-reacrt.vercel.app/)



