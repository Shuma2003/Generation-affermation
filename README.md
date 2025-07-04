Генератор Аффирмаций на JavaScript

Простой генератор позитивных аффирмаций (мотивирующих фраз), написанный на JavaScript.
📌 Описание

Этот небольшой проект генерирует случайные аффирмации — короткие вдохновляющие фразы, которые помогают улучшить настроение и мотивацию.

Проект можно:

    Использовать в консоли браузера

    Встроить в веб-страницу

    Модифицировать под свои нужды

🚀 Быстрый старт
1. Клонируйте репозиторий (или скопируйте код)
bash

git clone https://github.com/ваш-username/affirmations-generator.git
cd affirmations-generator

2. Откройте index.html в браузере

Или запустите код в консоли разработчика (F12 → Console).
📋 Использование
В консоли JavaScript
javascript

// Импортируйте массив аффирмаций (если используете модули)
// или просто скопируйте код в консоль

const affirmations = [
    "Ты молодец!",
    "У тебя всё получится!",
    "Сегодня будет отличный день!",
    "Ты заслуживаешь счастья!",
    "Верь в себя!"
];

function getRandomAffirmation() {
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}

// Получить случайную аффирмацию
console.log(getRandomAffirmation());

В HTML-странице

Создайте файл index.html:
html

<!DOCTYPE html>
<html>
<head>
    <title>Генератор Аффирмаций</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        #affirmation { font-size: 24px; margin: 20px; color: #2c3e50; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>✨ Генератор Аффирмаций ✨</h1>
    <div id="affirmation">Нажмите кнопку для мотивации!</div>
    <button onclick="generateAffirmation()">Получить аффирмацию</button>

    <script>
        const affirmations = [
            "Ты молодец!",
            "У тебя всё получится!",
            "Сегодня будет отличный день!",
            "Ты заслуживаешь счастья!",
            "Верь в себя!"
        ];

        function getRandomAffirmation() {
            return affirmations[Math.floor(Math.random() * affirmations.length)];
        }

        function generateAffirmation() {
            document.getElementById("affirmation").textContent = getRandomAffirmation();
        }
    </script>
</body>
</html>

🛠️ Возможности

✅ Генерация случайных мотивирующих фраз
✅ Простота интеграции в любой проект
✅ Легко расширяемый список аффирмаций
🔄 Как добавить свои аффирмации?

Просто отредактируйте массив affirmations в коде:
javascript

const affirmations = [
    "Новая фраза 1",
    "Новая фраза 2",
    // ...
];

📜 Лицензия

MIT License — можно свободно использовать и модифицировать.
🤝 Как поддержать проект?

    Поставьте ⭐ на GitHub

    Предложите свои аффирмации через Pull Request

    Расскажите друзьям!

Приятного использования! Пусть каждый день будет мотивирующим! ✨
