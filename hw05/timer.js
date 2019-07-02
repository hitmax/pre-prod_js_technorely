class Timer {
    constructor(initialTime) {
        this.initialTime = initialTime;
        this.timerId = null;
        this.additionalTime = 0;
        this.remainsTime = 0;
        this.timeHelper = initialTime;
        this.startTimerMoment = 0;
        this.editTimerMoment = 0;
    }

    start() {
        console.log(new Date());
        this.timerId = setTimeout(this.timeOver, this.initialTime);
        this.startTimerMoment = Date.now();
    }

    stop() {
        clearTimeout(this.timerId);
        console.log('timer stopped in' + new Date());
    }

    reset() {
        clearTimeout(this.timerId);
        this.additionalTime = 0;
        this.remainsTime = 0;
        this.timerId = setTimeout(this.timeOver, this.initialTime);
        console.log('timer reset in' + new Date());
    }

    addTime(time) {
        if (typeof time != "number") {
            throw new Error('only numbers pls!')
        }
        clearTimeout(this.timerId);
        this.editTimerMoment = Date.now();
        let additionalTime = time;
        this.remainsTime = this.remainsTime + this.timeHelper - (this.editTimerMoment - this.startTimerMoment) + additionalTime;
        this.timeHelper = 0;
        console.log(this.remainsTime);
        this.timerId = setTimeout(this.timeOver, this.remainsTime);
        this.startTimerMoment = Date.now();
    }

    subtractTime(time) {
        this.addTime(-time);
    }

    timeOver() {
        console.log("time over " + new Date());
    }
}

let myTimer = new Timer(10000);

myTimer.start();
myTimer.addTime(4000);
myTimer.subtractTime(2000);

