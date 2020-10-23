/*
 * Метод window.setTimeout(callback, delay, args)
 */
// console.log('До запуска setTimeout');

// setTimeout(() => {
//     console.log('2-callback внутри setTimeout');
// }, 2000);

// setTimeout(() => {
//     console.log('1-callback внутри setTimeout');
// }, 1000);

// for (let i = 0; i < 1000; i+=1) {
//     console.log(i);
// }

// console.log('После запуска setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
    console.log(`Лог через ${time}ms потому что не отменили таймаут`);
}

const timerID = setTimeout(logger, 2000, 2000);
console.log(timerID);

const shouldClearTimeout = Math.random() > 0.3;
console.log(shouldClearTimeout);

if (shouldClearTimeout) {
    clearTimeout(timerID);
}