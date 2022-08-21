import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import { Notify } from "notiflix";

const refs = {
    input: document.getElementById('datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]')
}
let clientDate = null
let intervalId = null


refs.startBtn.setAttribute('disabled', 'disabled')

refs.startBtn.addEventListener('click', () => {
    timer.start()
})

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        clientDate = selectedDates[0]
        if(clientDate < Date.now()) {
            Notify.warning("Please choose a date in the future")
        } else {
            refs.startBtn.removeAttribute('disabled')
        }
    }
}

flatpickr(refs.input, options)

const timer = {
    start() {
    refs.startBtn.setAttribute('disabled', 'disabled')
    const startTime = clientDate.getTime()

        intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const countdownTime = convertMs(deltaTime)
            updateCountdownFace(countdownTime)
            
        }, 1000)
    }
}

// timer.start()
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function updateCountdownFace({ days, hours, minutes, seconds }) {
    if(days === '00' && hours === '00' 
        && minutes === '00'&& seconds === '00') {
        clearInterval(intervalId)    
    }

    refs.days.textContent = days
    refs.hours.textContent = hours
    refs.minutes.textContent = minutes
    refs.seconds.textContent = seconds  
}





