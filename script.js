var dayjs = require('dayjs')
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.guess()
console.log(dayjs.tz.guess())

var time = dayjs().format('hh:mm:ss')
var data = dayjs().format('ddd, MMM D, YYYY')


var data = document.getElementById('date');
data.innerHTML = dayjs().format('ddd, MMM D, YYYY')


var local = document.getElementById('location')
local.innerHTML = dayjs.tz.guess()


setInterval(displayCurrentTime , 1000);

function displayCurrentTime () {
    var time = dayjs().format('HH:mm:ss');
    var horas = document.getElementById('time');
    
    horas.innerHTML = time;  // Atribuindo o valor diretamente à propriedade innerHTML
    
    console.log(time);
}