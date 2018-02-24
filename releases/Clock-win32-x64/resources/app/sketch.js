const settings = {
  mode: "digital", //type of clock
  tfhour: true, // 24 hour?
  visible: false // is the settings menu visible?
}

const fs = require("fs");

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).parent("#canvas");
  let mode;
  let tfhour;
  mode = fs.readFileSync("storage/mode.txt");
  tfhour = fs.readFileSync("storage/24hr.txt");
  if (mode == "") {
    mode = "digital";
  }

  if (tfhour == "") {
    tfhour = "true";
  }
  settings.mode = mode;
  settings.tfhour = tfhour;
  console.log(settings.mode, settings.tfhour);
  select("#clockType").elt.value = settings.mode;
  if (tfhour == "true") {
    select("#24hr").checked(true);
  } else {
    select("#24hr").checked(false);
  }
  console.log(settings.tfhour, select("#24hr").checked());
}

function draw() {
  fs.writeFileSync("storage/mode.txt", settings.mode);
  fs.writeFileSync("storage/24hr.txt", settings.tfhour);
  background(235);
  time.update();
  settings.mode = select("#clockType").elt.value;
  settings.tfhour = select("#24hr").elt.checked;
  console.log(select("#24hr").elt.checked);
  if (settings.visible) {
    select("#clockType").position(10, 10);
    select("#clockType").show();
    textSize(12);
    text("- Clock flavor", select("#clockType").size().width + 20, 25);
    select("#24hr").position(10, 40).show();
    text("- 24 hour time", select("#24hr").size().width+20, 55);
  } else {
    select("#clockType").hide();
    select("#24hr").hide();
    if (settings.mode == "digital") {
      digital.show();
    }
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
      if (this.hours > 12) {
        this.hours = this.hours % 12;
      }
    }
  }
}

const time = new makeTime();

function settingsOn() {
  settings.visible = !settings.visible;
  console.log(settings.visible);
}
