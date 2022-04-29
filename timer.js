class Timer {
  /**
   * props = { hours, minutes, seconds, silent, finishedCallback, elementId, warningcallback, start}
   * constructor: Timer(props)
   *
   * class properties:
   *
   * isRunning
   * time
   * actualRemainingTime
   *
   * class methods:
   *
   * startTimer
   * pauseTimer
   * resetTimer
   * setTime
   * getRemainingTime
   *
   * triggerFinishedCallback
   * triggerWarningCallback
   *
   *
   */

  constructor(params) {
    const [
      days,
      hours,
      minutes,
      seconds,
      silent,
      finishedCallback,
      element,
      warningCallback,
      start,
    ] = params;
    days ? (this.days = days) : (this.days = 0);
    hours ? (this.hours = hours) : (this.hours = 0);
    minutes ? (this.minutes = minutes) : (this.minutes = 0);
    seconds ? (this.seconds = seconds) : (this.seconds = 0);
    silent ? (this.silent = true) : (this.silent = false);
    finishedCallback
      ? (this.finishedCallback = finishedCallback)
      : (this.finishedCallback = () => {});
    element
      ? (this.element = element)
      : (this.element = document.getElementById("lutonet-timer"));
    warningCallback
      ? (this.warningCallback = warningCallback)
      : (this.warningCallback = () => {});
    start ? this.startTimer() : () => {};
  }
  set days(days) {
    this.days = days;
  }
  get days() {
    return this._days;
  }
  set hours(hours) {
    this.hours = hours;
  }
  get hours() {
    return this._hours;
  }
  set minutes(minutes) {
    this.minutes = minutes;
  }
  get minutes() {
    return this._minutes;
  }
  set seconds(seconds) {
    this.seconds = seconds;
  }
  get seconds() {
    return this._seconds;
  }
  set silent(silent) {
    this.silent = silent;
  }
  get silent() {
    return this._silent;
  }
  set finishedCallback(callback) {
    this.finishedCallback = callback;
  }
  get finishedCallback() {
    return this._finishedCallback;
  }
  set element(elementObject) {
    this.element = elementObject;
  }
  get element() {
    return this._element;
  }
  set warningCallback(callback) {
    this.warningCallback = callback;
  }
  get warningCallback() {
    return this._warningCallback;
  }

  start() {
    // boolean true if started false if failed - sets error
  }
}

export default Timer;
