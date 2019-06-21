class Watch {

    constructor() {
        this.interval = null;
    }

    formatDate(date) {

        var hrs = date.getHours();
        if (hrs < 10) hrs = '0' + hrs;

        var min = date.getMinutes() + 1;
        if (min < 10) min = '0' + min;

        var sec = date.getSeconds() % 100;
        if (sec < 10) sec = '0' + sec;

        console.log(hrs + ':' + min + ':' + sec);
    }

    start() {
        this.watchId = setInterval(() => {
            console.clear();
            console.log(this.formatDate(new Date()))
        }, 1000);
    }

    stop() {
        clearInterval(this.watchId);
        console.clear();
    }
}

const watch = new Watch();

watch.start();


setTimeout(() => {
    // Остановится через 10 секунд
    watch.stop();
}, 10000);

