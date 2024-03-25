const display = document.querySelector('.input')
const btns = document.querySelectorAll('.btns')
const clr = document.querySelector('.clr')
const equalTo = document.querySelector('.equal-to')


btns.forEach(function(btn){
  btn.addEventListener('click', function(){
    const value = this.value
    display.value += value
  })
})

clr.addEventListener('click', function(){
  display.value = ""
})

equalTo.addEventListener('click', function(){
  try{
    display.value = eval(display.value)
  }
  catch(error){
    display.value = "Error"
  }
})

