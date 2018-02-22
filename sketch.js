const settings = {
  mode: 0, //type of clock
  tfhour: true // 24 hour?
}

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).parent("#canvas");
}

function draw() {
  time.update();
  if (settings.mode == 0) {
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
  }
  select("#settings").style("width", width / 50 + "px").style("height", width / 50 + "px").position(width * (75 / 81), height * (1 / 81));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

const makeTime = function() {
  this.update = () => {
    let date = new Date();
    this.millis = date.getMilliseconds();
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
    this.days = date.getDay();
    this.months = date.getMonth();
    if (!settings.tfhour) {
      this.hours = this.hours % 12;
    }
  }
}

const time = new makeTime();
