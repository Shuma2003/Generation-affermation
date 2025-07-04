// Генератор аффирмаций
 // Создаем список из цитат
 const affermation = ["Ты молодец!",
    "У тебя всё получится!",
    "Сегодня будет отличный день!",
    "Ты заслуживаешь счастья!",
    "Верь в себя!"];

    // пишем функцию getRandomAffermation
    function getRandomAffermation(){
        // возвращаем переменную аффермации 
        return affermation[Math.floor(Math.random()* affermation.length)];
    }
    // вывод в консоль
    console.log(getRandomAffermation());
