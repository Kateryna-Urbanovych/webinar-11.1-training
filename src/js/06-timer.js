import '../css/styles.css';

const refs = {
    clockface: document.querySelector('.js-clockface'),
    openBtn: document.querySelector('button[data-action-start]'),
    closeBtn: document.querySelector('button[data-action-stop]'),
}

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if (this.isActive) {
            return;
        }

        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);

        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
   */

    getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
    }

    /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
    */
    pad(value) {
    return String(value).padStart(2, '0');
    }
}

const timer = new Timer({
    onTick: updateClockface,
});

refs.openBtn.addEventListener('click', () => {
    timer.start();
})

refs.closeBtn.addEventListener('click', () => {
    timer.stop();
})

function updateClockface({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}