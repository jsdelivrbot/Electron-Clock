const digital = {
  /* function for showing the clock */ show: () => {
    textSize(width/(40/9));
    background(235);
    let minutes;
    if (time.minutes < 10) {
      minutes = "0"+time.minutes;
    } else {
      minutes = time.minutes;
    }
    let seconds;
    if (time.seconds < 10) {
      seconds = "0"+time.seconds;
    } else {
      seconds = time.seconds;
    }
    text(time.hours+":"+minutes+":"+seconds, 10, height/2);
  },
  name: "Digital", //The name of the clock
  credit: "by F4Tornado" //Who made the clock?
}
