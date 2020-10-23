import '../css/styles.css';
/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

const date1 = Date.now();
console.log(date1);

setTimeout(() => {
    const date2 = Date.now();

    console.log(date1);
    console.log(date2);

    console.log(date2 - date1);
}, 3000);

// Мы не пишем new Date().getTime() потому что такая запись создает целый обьект, из которого мы используем только Unix-время (метку вемени). Создавать лишний обьект не нужно!!!