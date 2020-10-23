/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timerId = null;
const refs = {
    alert: document.querySelector('.js-alert'),
}

refs.alert.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Функции
 */

function onNotificationClick() {
    hideNotification();
    clearTimeout(timerId);
}

function showNotification() {
    refs.alert.classList.add('is-visible');
    
    timerId = setTimeout(() => {
        console.log('Убираем алерт автоматически');
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    refs.alert.classList.remove('is-visible');
}