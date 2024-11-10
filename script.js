const dayjs = require('dayjs')
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

const MicroModal = require('micromodal');
MicroModal.init({
  onClose: (modal) => {
    if (modal.id === 'modal-1') {
      updateTime();
    }
  }
});






dayjs.extend(utc)
dayjs.extend(timezone)


let selectedZone = dayjs.tz.guess()


console.log(selectedZone)


//buscando elementos do HTML que serão atualizados.
let data = document.getElementById('date');
let horas = document.getElementById('time');
var local = document.getElementById('location')


let formatted = selectedZone.replace('_', ' ').replace('/', ' / ');
local.innerHTML = formatted;
displayCurrentTime();

//atualiza o dia e a hora a cada segundo
setInterval(displayCurrentTime, 1000);

function displayCurrentTime() {
  let time = dayjs().tz(selectedZone).format('HH:mm:ss');

  data.innerHTML = dayjs().tz(selectedZone).format('ddd, MMM D, YYYY')
  horas.innerHTML = time;


  console.log(time);
  console.log(selectedZone)


}



const timezones = [
  'America/Sao_Paulo',
  'Europe/London',
  'Asia/Tokyo',
  'America/New_York',
  'Australia/Sydney',
  'Europe/Paris',
  'Asia/Kolkata',
  'Africa/Nairobi',
  'Asia/Dubai'
];

const timezoneSelect = document.getElementById('timezone');

timezones.forEach(zone => {
  const option = document.createElement('option');
  option.value = zone;
  option.innerText = zone.replace('_', ' ').replace('/', ' / ');
  timezoneSelect.appendChild(option);
});


//função chamada sempre que o usuário alterar o fuso horário escolhido
function updateTime() {
  selectedZone = timezoneSelect.value;
  formatted = selectedZone.replace('_', ' ').replace('/', ' / ');
  local.innerHTML = formatted;
  displayCurrentTime();

}


timezoneSelect.addEventListener('change', updateTime);