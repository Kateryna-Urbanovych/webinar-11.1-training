import BSN from 'bootstrap.native';

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);


// Закритые подписки через 3 раза
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log('Нужно остановить подписку!');
//         clearInterval(intervalId);
//         return;
//     }
//     console.log('Подпишись на рассылку! -', Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);


// Закритые подписки с интерфейсом

refs = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
}

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

onOpenModal();

refs.modal.addEventListener('hide.bs.modal', onOpenModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function onOpenModal() {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        console.log('Максимальное кол-во надоеданий или подписался');
        return;
    }
    setTimeout(() => {
        console.log('Открываем модалку')ж
        modal.show();
        promptCounter += 1;
    }, PROMPT_DELAY)
}

function onSubscribeBtnClick() {
    hasSubscribed = true;
    modal.hide();
}