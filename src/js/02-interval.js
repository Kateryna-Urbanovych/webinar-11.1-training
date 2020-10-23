import '../css/styles.css';
/*
 * Метод setInterval(callback, delay, args)
 */

const logger = time => {
    console.log(`Лог через ${time}ms - ${Date.now()}`);
}

// console.log('До запуска setInterval');
// setInterval(logger, 2000, 2000);
// console.log('После запуска setInterval');

 /*
 * Очистка интервала с clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, 2000);

const shouldClearInterval = Math.random() > 0.3;
console.log(shouldClearInterval);

if (shouldClearInterval) {
    clearInterval(intervalId);
}