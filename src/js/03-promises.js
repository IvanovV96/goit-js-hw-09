import { Notify } from "notiflix"

const form = document.querySelector('.form')
const firstDelay = form.elements.delay
const step = form.elements.step
const amount = form.elements.amount
let pos = 0



  

form.addEventListener('submit', (e) => {
  e.preventDefault()
    let delay = parseInt(firstDelay.value)
   const intervald = setInterval(() => {
    const stepInt = parseInt(step.value)
    pos += 1
    delay += stepInt
    if(pos === +amount.value) {
      clearInterval(intervald)
    }
    createPromise(pos, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    })
   }, delay)
  
  }
)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
     setTimeout(()=> {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
     }, firstDelay.value)
    })
  }



